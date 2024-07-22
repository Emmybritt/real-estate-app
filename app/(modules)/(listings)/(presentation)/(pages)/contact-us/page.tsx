import { contactUsOfficInfo } from "@/app/common/constants/data";
import { Image } from "antd";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="md:w-[80%] mx-auto grid lg:grid-cols-2 md:px-[3rem] px-[1rem] gap-[2rems] lg:px-[5rem] py-[4rem] font-cabinet">
        <div>
          <h1 className="text-[24px] font-bold text-[#1818A6]">CONTACT US</h1>
          <p>
            Visit any of our outlet to see our agents for more information and
            for site viewing
          </p>
          <div className="mt-[2rem]">
            {contactUsOfficInfo.map((info, _index: number) => (
              <div key={_index} className="flex space-x-3">
                <h1 className="text-[20px] font-bold text-[#1818A6]">
                  {info.office}
                </h1>
                <div className="text-[20px] font-medium">
                  <p>{info.value.address}</p>
                  <p>{info.value.city}</p>
                  <p>{info.value.email}</p>
                  <p>{info.value.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          className="hidden lg:inline"
          src="/images/contactUsBanner.png"
          preview={false}
        />
      </div>
    </div>
  );
};

export default ContactUs;
