import { CustomInput } from "@/app/common/components/atoms/Input/Input";
import CustomSelect from "@/app/common/components/atoms/Select/CustomSelect";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const FilterInputs = () => {
  return (
    <div className="flex flex-wrap px-[12rem] items-center space-x-[1rem] mb-[3rem] mt-[2rem]">
      <CustomInput
        className="h-[56px] rounded-none"
        suffix={<SearchOutlined />}
        placeholder="Search"
      />
      <CustomSelect placeholder="Location" />
      <CustomSelect placeholder="Price Range" />
      <CustomSelect placeholder="Property Type" />
    </div>
  );
};

export default FilterInputs;
