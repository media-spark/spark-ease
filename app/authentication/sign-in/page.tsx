import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/logo"
import { UserLoginForm } from "../components/user-login-form"

export const metadata: Metadata = {
  title: "Log In - Spark Ease",
  description: "Signin form",
}

export default function LoginPage() {
  return (
    <>      
      <div className="relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/authentication/sign-up"
          className={cn( 
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          New to Spark Ease? Sign up
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Logo force="dark" /> Spark Ease
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-sm">
                &ldquo;Spark Ease and its intuitive design and powerful functionality have saved us countless hours, 
                enabling us to deliver high-quality results to our clients faster than ever before.&rdquo;
              </p>
              <footer className="text-lg">Spark Media</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">            
            <UserLoginForm />          
          </div>
        </div>
      </div>
    </>
  )
}