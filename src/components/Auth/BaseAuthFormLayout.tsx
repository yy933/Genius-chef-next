import { ReactNode } from "react";

interface BaseAuthFormLayoutProps {
  formTitle: string;
  onSubmit: () => void;
  isSubmitting?: boolean;
  children: ReactNode;
  bottomContent?: ReactNode;
}

export default function BaseAuthFormLayout({
  formTitle,
  onSubmit,
  isSubmitting,
  children,
  bottomContent,
}: BaseAuthFormLayoutProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
      aria-labelledby="form-title"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold" id="form-title">
          {formTitle}
        </h1>
      </div>
      {children}
      {bottomContent}
    </form>
  );
}
