
import { Control, FieldValues, Path } from "react-hook-form";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

export type NavItemProps =
  | { title: string; links: NavLink[] } // 有 dropdown
  | { title: string; href: string }; // 單層連結

export interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export type CommitmentItemProps = {
  title: string;
  content: string;
};

export interface TestimonialProps {
  quote: string;
  name: string;
  age: number;
  profession: string;
}

export interface NewsletterInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  successMessage?: string;
  error?: string;
}

export interface StepProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

export interface OurBoxesProps {
  img: string;
  title: string;
  description: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface FormRadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  options: Option[];
  control: Control<T>;
}

export interface FormCheckboxGroupProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  options: Option[];
  control: Control<T>;
}

export interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  description?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
}
