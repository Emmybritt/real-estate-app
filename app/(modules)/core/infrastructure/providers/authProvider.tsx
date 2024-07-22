'use client';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useEffect } from 'react';
import { auth, db } from '../firebase';
import { setLoadingUserData, setUser } from '../slice/userSlice';
import { useAppDispatch, useAppSelector } from '../store';

export const AuthContext = createContext<Record<string, any> | null>(null);

export const AuthProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const { user } = useAppSelector((state) => state.userSlice);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLoadingUserData(true));
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const docRef = doc(db, 'users', user.uid);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					dispatch(setUser({ uid: user.uid, ...docSnap.data() }));
				} else {
					dispatch(setUser(user));
				}
			} else {
				dispatch(setUser(null));
			}
			dispatch(setLoadingUserData(false));
		});

		return () => unsubscribe();
	}, []);
	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
