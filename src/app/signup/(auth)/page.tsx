import AuthFormWrapper from "@/components/Auth/AuthFormWrapper";
import SignupForm from "@/components/Auth/SignupForm";
import AuthImage from "@/components/Auth/AuthImage";
export default function SignupPage() {
  return (
    <AuthFormWrapper
      image={
        <AuthImage
          imageSrc="https://images.unsplash.com/photo-1557748362-4e95f0de4f6f?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Meal kit signup illustration of poached eggs on toast with avocado and herbs"
        />
      }
    >
      <SignupForm />
    </AuthFormWrapper>
  );
}
