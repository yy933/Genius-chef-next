import {
  FaInstagram,
  FaFacebook,
  FaTwitter
} from "react-icons/fa";
import { Form } from "@/components/ui/form";
export default function ContactForm() {
  return (
    <section className="w-full py-10">
      <div className="container w-max md:w-2/3 mx-auto px-4 border rounded-lg bg-white dark:bg-slate-800 shadow-md">
        <Form></Form>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-center mb-6">
          Or find us on:
        </h3>
        <div className="flex justify-center gap-6 text-muted-foreground">
          <FaInstagram
            size={30}
            className="hover:text-primary transition-colors"
          />
          <FaFacebook
            size={30}
            className="hover:text-primary transition-colors"
          />
          <FaTwitter
            size={30}
            className="hover:text-primary transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
