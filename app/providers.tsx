"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => (
    <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
    </SessionProvider>
);

export default Providers;