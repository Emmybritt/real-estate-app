import { auth, db } from "@/app/(modules)/core/infrastructure/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { User } from "../../../core/domain/user";
import { useAppDispatch } from "@/app/(modules)/core/infrastructure/store";
import { setUser } from "@/app/(modules)/core/infrastructure/slice/userSlice";

export const useAuth = () => {
  const [form, setForm] = useState<User | null>(null);
  const [error, setError] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleChange(name: keyof User, value: string, required = true) {
    if (required && value === "") {
      setError((prev: any) => {
        return {
          ...prev,
          [name]: `${name} is required!!!`,
        };
      });
      return;
    }
    setError((prev: any) => {
      return {
        ...prev,
        [name]: null,
      };
    });
    setForm((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function loginUser() {
    if (!form) {
      toast("Email and password is required");
      return;
    }
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form?.email,
        form?.password,
      );
      const userData = userCredential.user;
      if (!userData.emailVerified) {
        await sendEmailVerification(userData);
        setLoading(false);

        toast.error(
          "Account not verified, a verify link as been sent to your email address, Please verify your email before logging in.",
        );
        return;
      }
      const userDoc = await getDoc(doc(db, "users", userData.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        dispatch(setUser(data));
      }
      toast("Login successfull");
      router.push("/");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to login:");
      setLoading(false);
    }
  }

  const logout = async () => {
    await signOut(auth);
    dispatch(setUser(null));
  };

  async function register() {
    if (!form) {
      return;
    }
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form?.email,
        form?.password,
      );
      const data = userCredential.user;
      await sendEmailVerification(data);

      const userData = {
        uid: data.uid,
        email: data.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phoneNo: form.phoneNo,
      };
      await setDoc(doc(db, "users", data.uid), userData);
      toast(
        "Registration successful, please check your email for verification",
      );
      setLoading(false);
      router.push("/login");
    } catch (error) {
      toast.error("Failed to create account please try again");
      setLoading(false);
    }
  }

  return {
    user: form,
    handleChange,
    error,
    loginUser,
    logout,
    register,
    loading,
  };
};
