import { footerLinks } from "@/app/common/constants/data";
import { Image } from "antd";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="
		relative 
		bottom-0 
		w-full 
		px-[1rem]
		sm:px-[3rem]
		md:px-[6rem]
		py-[4rem]
		bg-[#050521] 
		gap-[4rem] 
		grid 
		grid-cols-2 
		lg:grid-cols-4"
    >
      <div className="flex flex-col justify-between">
        <Image height={36} width={124} src="/images/lightlogo.png" alt="logo" />
        <div>
          <div className="space-x-3">
            <Image src="/images/instagram.png" alt="instagram" />
            <Image src="/images/facebook.png" alt="facebook" />
            <Image src="/images/twitter.png" alt="twitter" />
            <Image src="/images/linkedin.png" alt="linkedin" />
          </div>
          <p className="text-white">Copyright 2023 blues.com</p>
        </div>
      </div>
      {footerLinks.map((item, _index: number) => (
        <div key={_index} className="text-[24px]">
          <h3 className="text-white font-bold">{item.section}</h3>
          <div className="flex flex-col text-white mt-[.7rem]">
            {item.links.map((link, index) => (
              <Link
                key={index}
                className="text-[18px] font-cabinet mt-[1rem]"
                href={link.to}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
