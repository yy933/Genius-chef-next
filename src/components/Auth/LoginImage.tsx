import Image from "next/image";

export default function LoginImage() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      alt="Login page illustration"
      width={500}
      height={360}
      className="w-full h-auto rounded-lg object-cover"
      priority
    />
  );
}
