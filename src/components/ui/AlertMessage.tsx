import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import clsx from "clsx";

type AlertMessageProps = {
  alertTitle: string;
  alertDescription: string;
  status: "success" | "error";
};

export default function AlertMessage({
  status,
  alertTitle,
  alertDescription,
}: AlertMessageProps) {
  const isSuccess = status === "success";
  const Icon = isSuccess ? CheckCircle2Icon : XCircleIcon;

  return (
    <Alert
      className={clsx(
        "flex items-start gap-3 rounded-md border px-4 py-3 text-lg font-bold",
        {
          "bg-emerald-200 text-emerald-700 border-emerald-300": isSuccess,
          "bg-red-200 text-red-700 border-red-300": !isSuccess,
        }
      )}
    >
      <Icon className="mt-1 w-5 h-5 shrink-0" />
      <div>
        <AlertTitle className="font-semibold">{alertTitle}</AlertTitle>
        <AlertDescription className="text-slate-500">
          {alertDescription}
        </AlertDescription>
      </div>
    </Alert>
  );
}
