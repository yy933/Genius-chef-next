'use client'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/Contact/ContactForm/FormInput";
import FormTextarea from "@/components/Contact/ContactForm/FormTextarea";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof schema>;
export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <section className="w-full py-10">
      <div className="container w-max md:w-2/3 mx-auto px-4 border rounded-lg bg-white dark:bg-slate-800 shadow-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10 "
          >
            <FormInput
              name="name"
              control={form.control}
              label="Name"
              placeholder="Enter your name"
              type="text"
            />
            <FormInput
              name="email"
              control={form.control}
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
            <FormInput
              name="subject"
              control={form.control}
              label="Subject"
              placeholder="Enter the subject of inquiry"
              type="text"
            />
            <FormTextarea
              name="message"
              control={form.control}
              label="Message"
              placeholder="Enter your message"
            />
          </form>
        </Form>
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
