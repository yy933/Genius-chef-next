import { Input } from "@/components/ui/input";

interface NewsletterInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

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
        aria-invalid={!!error}
        aria-describedby={error ? "email-error" : undefined}
        className="placeholder:text-white-foreground"
      />
      {error && (
        <p id="email-error" className="text-sm text-destructive mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
