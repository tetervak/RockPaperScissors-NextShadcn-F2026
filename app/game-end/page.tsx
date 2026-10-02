"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { HomeIcon, SkipBackIcon } from "lucide-react"
import { useGame } from "@/context/game-context"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"

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
      <p className="ms-4 pt-2 text-xl">
        User choice:
        <span className="ml-2 text-indigo-600 italic">
          {gameData.userChoice}
        </span>
      </p>
      <p className="ms-4 mt-2 text-xl">
        Computer choice:
        <span className="ml-2 text-indigo-600 italic">
          {gameData.computerChoice}
        </span>
      </p>
      <p className="ms-4 mt-2 text-xl">
        Result:
        <span className="ml-2 text-orange-400 italic">
          {gameData.gameResult}
        </span>
      </p>
      <p>
        <Button onClick={onPlayAgainClick} className="ms-2 mt-4">
          <SkipBackIcon />
          Play Again
        </Button>
      </p>
      <p>
        <Link href="/">
          <Button variant="link" className="mt-4 text-xl">
            Home
            <HomeIcon />
          </Button>
        </Link>
      </p>
    </>
  )
}
