import AuthFormWrapper from "@/components/Auth/AuthFormWrapper";
import LoginForm from "@/components/Auth/LoginForm";
import AuthImage from "@/components/Auth/AuthImage";
export default function LoginPage() {
  return (
    <AuthFormWrapper
      image={
        <AuthImage
          imageSrc="https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="Meal kit login illustration of a bowl of Asian style noodles with chopsticks"
        />
      }
    >
      <LoginForm />
    </AuthFormWrapper>
  );
}
