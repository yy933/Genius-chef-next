"use client";

import clsx from "clsx";
import { AuthFormWrapperProps } from "@/types";

export default function AuthFormWrapper({
  image,
  children,
  className,
}: AuthFormWrapperProps) {
  return (
    <main
      role="main"
      className="flex flex-col md:flex-row min-h-screen p-6 md:p-10"
    >
      {/* Left side image */}
      <div className="hidden md:flex h-screen w-full md:w-2/5 max-h-64 md:max-h-full items-center justify-center p-4">
        {image}
      </div>

      {/* Right side form */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-4">
        <div
          className={clsx(
            "w-full max-w-lg p-8 rounded-xl bg-card shadow-lg border",
            className
          )}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
