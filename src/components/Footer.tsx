import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-accent text-accent-foreground flex flex-col md:flex-row items-center justify-between px-4 md:px-8 h-16 text-sm">
      <div className="mb-2 md:mb-0">
        &copy; Genius Chef {new Date().getFullYear()}
      </div>
      <div className="flex gap-4">
        <Link
          href="https://www.facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
        <Link
          href="https://www.youtube.com"
          target="_blank"
          aria-label="YouTube"
        >
          <FaYoutube className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          aria-label="X / Twitter"
        >
          <FaTwitter className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
        <Link href="mailto:hello@geniuschef.com" aria-label="Email">
         
          <MdEmail className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
      </div>
    </footer>
  );
}
