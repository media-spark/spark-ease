import { SiteHeader } from "@/components/site-header"

export default function AuthenticationLayou({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (        
        <div className="container flex min-h-screen items-center justify-center">{children}</div>
    )
  }