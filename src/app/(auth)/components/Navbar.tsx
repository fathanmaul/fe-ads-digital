import Forwadin from "@/app/assets/Forwardin";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-[20px]">
      <Link href="/">
        <Forwadin className="mx-auto lg:mx-0 dark:fill-white" />
      </Link>
    </nav>
  );
}
