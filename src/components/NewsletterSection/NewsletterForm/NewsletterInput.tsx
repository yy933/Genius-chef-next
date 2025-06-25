import { Input } from "@/components/ui/input";
import { NewsletterInputProps } from "@/types";

export function NewsletterInput({
  value,
  onChange,
  error,
}: NewsletterInputProps) {
  return (
    <div className="w-full md:w-[300px]">
      <Input
        type="email"
        placeholder="Enter your email address"
        value={value}
        onChange={onChange}
        required
        aria-label="Email address"
        aria-invalid={!!error}
        aria-describedby={error ? "email-error" : undefined}
        className="placeholder:text-muted-foreground"
      />
      {error && (
        <p id="email-error" className="text-sm text-destructive mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
