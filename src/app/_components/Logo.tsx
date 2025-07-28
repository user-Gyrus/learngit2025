import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.png"
        height={60}
        width={60}
        alt="The Wild Oasis logo"
        priority
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
};

export default Logo;
