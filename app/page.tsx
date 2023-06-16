import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
  <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
    Welcome to Spark Ease <br className="hidden sm:inline" />
    Your one-stop solution for content management.
  </h1>
  <p className="max-w-[700px] text-lg text-muted-foreground">
    Spark Ease provides an intuitive and user-friendly interface for managing your content. Built with the latest technologies, 
    it's designed to make your content management process as smooth as possible. And ready for the future.
  </p>
</div>

      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}