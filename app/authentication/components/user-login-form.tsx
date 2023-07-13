"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { loginFormSchema } from "@/lib/formSchemas"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

export function UserLoginForm() {

  const form  = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data) => {
    signIn("credentials", { 
      ...data,       
      redirect: false,      
    });
    // console.log('Data', data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
              Sign in with your Spark account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <FormField
            name="email"            
            render={({field}) => (
                <FormItem className="grid gap-2">
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>                    
                    <Input type="text" placeholder="me@spark-media.com" {...field} />
                  </FormControl>                  
                  <FormMessage />
                </FormItem>
              )}  
            />          
          <FormField
            name="password"            
            render={({field}) => (
                <FormItem className="grid gap-2">
                  <FormLabel>
                    Password 
                  </FormLabel>
                  <FormControl>                    
                    <Input type="password" {...field} />
                  </FormControl>                  
                  <FormMessage />
                </FormItem>
              )}  
            />
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">Sign In</Button>
        </CardFooter>
      </Card>
      </form>
    </Form>
  )
}