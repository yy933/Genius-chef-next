import { useEffect, useRef } from "react";
import clsx from "clsx";
import { AlertMessageProps } from "@/types";
export default function AlertMessage({
  type,
  message,
  focusOnRender,
}: AlertMessageProps) {
  // Create a ref to focus the message element when it renders
  const ref = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    if (focusOnRender && ref.current) {
      ref.current.focus();
    }
  }, [focusOnRender]);

  // Determine the color based on the type of alert
  const color = type === "error" ? "text-red-500" : "text-green-600";
  return (
    <p
      ref={ref}
      role="alert"
      tabIndex={-1}
      className={clsx("text-sm", color, "font-medium", "text-center")}
    >
      {message}
    </p>
  );
}
