"use client";
import { useAppSelector } from "@/app/(modules)/core/infrastructure/store";
import { headerLink, profileLink } from "@/app/common/constants/data";
import { Image } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../../atoms/Button/Button";
import { useState } from "react";
import { useAuth } from "@/app/(modules)/(authentication)/infrastructure/hooks/useAuth";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.userSlice);
  const { logout } = useAuth();

  return (
    <div
      className="
		flex 
		w-full 
		sticky 
		top-0 
		bg-white 
		z-10 
		items-center 
		drop-shadow-sm 
		justify-between
		px-[1rem]
		md:px-[3rem]
		lg:px-[6rem] 
		py-[1rem]"
    >
      <div>
        <Image src="/images/logo.png" preview={false} alt="logo" />
      </div>
      <div className="space-x-[2rem] hidden md:flex">
        {headerLink.map((link, _index: number) => (
          <Link
            href={link.to}
            key={_index}
            className={`${
              pathname === link.to
                ? "text-[#1818A6] border-b-2 border-b-[#1818A6]"
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center space-x-5">
        {user ? (
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image src="/images/profile.png" alt="profile" />
              <div>
                <h1 className="text-[14px] text-[#1B1D1C]">
                  {user.firstName} {user.lastName}
                </h1>
                <h1 className="text-[10px] text-[#5E5A5A]">{user.email}</h1>
              </div>
              <Image src="/images/arrow-down.png" preview={false} alt="arrow" />
            </div>
            {isOpen && (
              <div className="absolute divide-x right-0 w-[15rem] bg-white border border-gray-200 shadow-lg rounded-md z-10">
                {profileLink.map((link, _index: number) => (
                  <div key={_index}>
                    {link.type === "link" ? (
                      <Link
                        className="block px-4 py-1 text-gray-700 hover:bg-gray-100"
                        href={link.to}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Button
                        onClick={logout}
                        className="block mt-5 px-4 py-2 text-gray-700 hover:bg-gray-100"
                        label={link.name}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-[0.8rem]">
            <Link href="/login">
              <Button label="Sign In" />
            </Link>
            <Link href="/register">
              <Button label="Sign Up" activeClass />
            </Link>
          </div>
        )}
      </div>
      <MenuOutlined className="md:hidden inline" />
    </div>
  );
};

export default Header;
