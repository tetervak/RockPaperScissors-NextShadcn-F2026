import { ArrowBigRightIcon } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { PageHeader } from "@/components/page-header"

export default function HomePage() {
  return (
    <>
      <PageHeader>Home Page</PageHeader>
      <LinkButton href="/game-start" className="mt-4">
        Start Game <ArrowBigRightIcon />
      </LinkButton>
    </>
  )
}
