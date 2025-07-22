import { InputFieldProps } from "@/types"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";

export default function InputField({ id, label, type, register, error, focusOnRender }: InputFieldProps){
  // Create a ref to focus the input field when it renders
  const ref = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
      if (focusOnRender && ref.current) {
        ref.current.focus();
      }
    }, [focusOnRender]);
  return (
    <div className="my-4 space-y-3">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        {...register(id)}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p
          className="text-sm text-red-500 mt-1"
          id={`${id}-error`}
          role="alert"
          tabIndex={-1}
        >
          {error}
        </p>
      )}
    </div>
  );
}