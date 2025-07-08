"use client";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/Contact/ContactForm/FormInput";
import FormTextarea from "@/components/Contact/ContactForm/FormTextarea";
import { Button } from "@/components/ui/button";
import { nameInput, emailInput, subjectInput, messageInput } from "@/data/contactForm";
import { useContactForm } from "@/hooks/useContactForm";


export default function ContactForm() {
  const { form, onSubmit, status } = useContactForm();
  return (
    <section className="w-full py-10">
      <div className="container w-max md:w-2/3 mx-auto px-4 border rounded-lg bg-white dark:bg-slate-800 shadow-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10 "
          >
            <FormInput
              name={nameInput.name}
              control={form.control}
              label={nameInput.label}
              placeholder={nameInput.placeholder}
              type={nameInput.type}
            />
            <FormInput
              name={emailInput.name}
              control={form.control}
              label={emailInput.label}
              placeholder={emailInput.placeholder}
              type={emailInput.type}
            />
            <FormInput
              name={subjectInput.name}
              control={form.control}
              label={subjectInput.label}
              placeholder={subjectInput.placeholder}
              type={subjectInput.type}
            />
            <FormTextarea
              name={messageInput.name}
              control={form.control}
              label={messageInput.label}
              placeholder={messageInput.placeholder}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-center my-6">
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
