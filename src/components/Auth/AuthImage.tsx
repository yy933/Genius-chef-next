import Image from "next/image";
import { AuthImageProps } from "@/types";

export default function AuthImage({ imageSrc, altText }: AuthImageProps) {
  return (
    <Image
      src={imageSrc?.trim() || "/images/auth/login-image.jpg"}
      alt={altText?.trim() || "Login Image"}
      width={500}
      height={360}
      className="w-full h-auto rounded-lg object-cover"
      priority
    />
  );
}
