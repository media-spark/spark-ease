"use client"

import { useTheme } from "next-themes";
import Image from "next/image"

interface LogoProps {
  force?: string,
}

const Logo = ({force} : LogoProps) => {

  const { theme } = useTheme();
  const value = force || theme;

  return (
    value === "dark" ? (
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