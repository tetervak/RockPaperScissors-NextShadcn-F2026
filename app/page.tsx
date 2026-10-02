import { ArrowBigRightIcon } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <PageHeader>Home Page</PageHeader>
      <Link href="/game-start" className="mt-4">
        <Button>Start Game <ArrowBigRightIcon /></Button>
      </Link>
    </>
  )
}
