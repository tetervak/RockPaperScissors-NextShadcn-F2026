"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { HomeIcon, SkipBackIcon } from "lucide-react"
import { useGame } from "@/context/game-context"
import { LinkButton } from "@/components/link-button"
import { PageHeader } from "@/components/page-header"

export default function GameEndPage() {
  const router = useRouter()
  const { gameData, resetGame } = useGame()
  const onPlayAgainClick = () => {
    resetGame()
    router.back()
  }
  return (
    <>
      <PageHeader>Game End</PageHeader>
      <p className="pt-2 ms-4 text-xl">
        User choice:
        <span className="ml-2 text-indigo-600 italic">
          {gameData.userChoice}
        </span>
      </p>
      <p className="mt-2 ms-4 text-xl">
        Computer choice:
        <span className="ml-2 text-indigo-600 italic">
          {gameData.computerChoice}
        </span>
      </p>
      <p className="mt-2 ms-4 text-xl">
        Result:
        <span className="ml-2 text-orange-400 italic">
          {gameData.gameResult}
        </span>
      </p>
      <p>
        <Button onClick={onPlayAgainClick} className="mt-4 ms-2">
          <SkipBackIcon />
          Play Again
        </Button>
      </p>
      <p>
        <LinkButton href="/" variant="link" className="mt-4 text-xl">
          Home
          <HomeIcon />
        </LinkButton>
      </p>
    </>
  )
}
