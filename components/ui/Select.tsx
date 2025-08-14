import { Select, SelectItem } from "@heroui/react";
interface OptionProps {
  key: string;
  label: string;
}
interface Props {
  options: OptionProps[];
  placeholder: string;
}
export const SelectorIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1.5em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1.5em"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" />
    </svg>
  );
};

export default function SelectOptions({ options, placeholder }: Props) {
  return (
    <Select
      disableSelectorIconRotation
      className="max-w-[200px] bg-gray-200 rounded-md font-medium"
      label={placeholder}
      selectorIcon={<SelectorIcon />}
    >
      {options.map((opt) => (
        <SelectItem key={opt.key}>{opt.label}</SelectItem>
      ))}
    </Select>
  );
}
