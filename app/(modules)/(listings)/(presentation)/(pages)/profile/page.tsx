"use client";
import withProtectedRoute from "@/app/(modules)/(authentication)/infrastructure/hoc/withProtectedRoute";
import { useAppSelector } from "@/app/(modules)/core/infrastructure/store";
import { CustomInput } from "@/app/common/components/atoms/Input/Input";
import { Image } from "antd";
import React from "react";

const Profile = () => {
  const { user } = useAppSelector((state) => state.userSlice);
  return (
    <div className="px-[2rem] sm:px-[6rem] py-[5.6rem] md:max-w-[70%]">
      <h1 className="text-[32px] font-bold">Personal Information</h1>
      <div>
        <Image src="/images/profile.png" />
        <div className="grid xs:grid-cols-2 gap-[1rem]">
          <CustomInput label="First name" value={user?.firstName} readOnly />
          <CustomInput label="Last name" value={user?.lastName} readOnly />
          <CustomInput label="Last name" value={user?.lastName} readOnly />
          <CustomInput label="Phone No" value={user?.phoneNo ?? ""} readOnly />
        </div>
      </div>
    </div>
  );
};

export default withProtectedRoute(Profile);
