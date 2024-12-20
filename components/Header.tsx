import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenerateDropdown from "./GenerateDropdown";

function Header() {
  return (
    <header className="w-full fixed flex justify-between top-0 z-20 items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="disney logo"
          width={120}
          height={100}
          className="cursor-pointer invert dark:invert "
        />
      </Link>

      <div className="flex space-x-2 ">
        <GenerateDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
