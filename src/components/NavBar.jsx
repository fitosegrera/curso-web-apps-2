import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="absolute bg-transparent top-0 left-0 w-full px-[32px] py-[16px] flex justify-between">
      <div>
        <img className="max-h-[48px]" src="/assets/logo.png" alt="" />
      </div>
      <div className="flex gap-[24px] items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex items-center gap-[16px]">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Register</Button>
      </div>
    </div>
  );
};

export default NavBar;
