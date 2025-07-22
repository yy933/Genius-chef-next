import LoginForm from "@/components/Auth/LoginForm";
import LoginImage from "@/components/Auth/LoginImage";
export default function LoginPage() {
  return (
    <main role="main"  className="flex flex-col md:flex-row  min-h-screen p-6 md:p-10">
      <div className="hidden md:flex h-screen w-full md:w-2/5 max-h-64 md:max-h-full items-center justify-center p-4 ">
        <LoginImage />
      </div>
      <div className="w-full md:w-3/5 flex items-center justify-center p-4">
        <div className="w-full max-w-lg p-8 rounded-xl bg-card shadow-lg border">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
