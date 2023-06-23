import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/authentication/components/user-auth-form"
import Logo from "@/components/logo"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Register - Spark Ease",
  description: "Signup form",
}

export default function RegistrationPage() {
  return (
    <>      
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/authentication/sign-in"
          className={cn( 
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Already have an account? Sign in
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
          <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <CardHeader className="flex flex-col space-y-2">
              <CardTitle className="text-2xl font-semibold tracking-tight">
                Create an account
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>             
              <UserAuthForm />
            </CardContent>
            <CardFooter>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </CardFooter>
          </Card>
        </div>        
      </div>
    </>
  )
}