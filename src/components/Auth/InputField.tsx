'use client'
import { InputFieldProps } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import { FieldValues, Path } from "react-hook-form";

export default function InputField<T extends FieldValues>({
  id,
  label,
  type,
  register,
  error,
  focusOnRender,
}: InputFieldProps<T>) {
  // Create a ref to focus the input field when it renders
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (focusOnRender && ref.current) {
      ref.current.focus();
    }
  }, [focusOnRender]);
  return (
    <div className="my-4 space-y-3">
      <Label htmlFor={String(id)}>{label}</Label>
      <Input
        id={String(id)}
        type={type}
        {...register(id as Path<T>)}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${String(id)}-error` : undefined}
      />
      {error && (
        <p
          className="text-sm text-red-500 mt-1"
          id={`${String(id)}-error`}
          role="alert"
          tabIndex={-1}
        >
          {error}
        </p>
      )}
    </div>
  );
}
