"use client"

import { useTheme } from "next-themes";
import Image from "next/image"

const Logo = () => {

  const { theme } = useTheme();

  return (
    theme === "dark" ? (
      <Image
        src="/white.svg"
        alt="Logo"
        width="512"
        height="512"
        className="w-16"
      />
    ) : (
      <Image
        src="/black.svg"
        alt="Logo"
        width="512"
        height="512"
        className="w-16"
      />
    )
  );
}

export default Logo;