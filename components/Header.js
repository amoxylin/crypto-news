import Link from "next/link";
import Image from "next/image";
import apple_icon from "../public/assets/apple-icon.png";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src={apple_icon} alt="icon" width="40" height="40" />
          <span className="ml-3 text-xl">Crypto News</span>
        </Link>
      </div>
    </header>
  );
}