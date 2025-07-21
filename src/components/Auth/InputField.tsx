import { InputFieldProps } from "@/types"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputField({ id, label, type, register, error }: InputFieldProps){
  return (
    <div className="my-4 space-y-3">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} {...register(id)} />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}