import clsx from 'clsx'
export default function AlertMessage({type, message}: {type: 'success' | 'error', message: string}) {
  const color = type === "error" ? "text-red-500" : "text-green-600";
  return (
    <p className={clsx("text-sm", color, "font-medium", "text-center")}>
      {message}
    </p>
  );

}