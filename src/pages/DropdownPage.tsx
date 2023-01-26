import { useState } from "react";
import Dropdown from "../components/Dropdown";

export interface DropdownOption {
  id: string;
  label: string;
  value: string;
}

const DropdownPage = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

  const handleSelected = (option: DropdownOption) => {
    setSelectedOption(option);
  };

  const items: DropdownOption[] = [
    { id: "fdsfds", label: "I want mild", value: "mild" },
    { id: "fdavcxzv", label: "id like spicy", value: "spicy" },
    { id: "vvv", label: "give more spicy", value: "extra_spicy" },
  ];
  return (
    <div className="flex">
      <Dropdown
        options={items}
        onChange={handleSelected}
        value={selectedOption}
      />
    </div>
  );
};
export default DropdownPage;
