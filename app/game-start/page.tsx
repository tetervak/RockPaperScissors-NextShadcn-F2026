"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"
import { HomeIcon, PlayIcon } from "lucide-react"
import { useGame } from "@/context/game-context"
import { Choice } from "@/lib/game/types"
import { LinkButton } from "@/components/link-button"
import { PageHeader } from "@/components/page-header"

export default function GameStartPage() {
  const router = useRouter()
  const { gameData, updateUserChoice, updateComputerChoice, updateGameResult } =
    useGame()

  const onUserChoiceChange = (value: Choice) => {
    console.log("user choice", value)
    updateUserChoice(value)
  }

  const onClickPlay = () => {
    updateComputerChoice()
    updateGameResult()
    router.push("/game-end")
  }

  return (
    <>
      <PageHeader>Game Start</PageHeader>
      <RadioGroup
        value={gameData.userChoice}
        onValueChange={onUserChoiceChange}
        className="ms-4 w-fit"
      >
        <div className="flex items-center gap-3">
          <RadioGroupItem value={Choice.ROCK} id="r1" />
          <Label htmlFor="r1" className="text-xl">
            Rock
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value={Choice.PAPER} id="r2" />
          <Label htmlFor="r2" className="text-xl">
            Paper
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value={Choice.SCISSORS} id="r3" />
          <Label htmlFor="r3" className="text-xl">
            Scissors
          </Label>
        </div>
      </RadioGroup>
      <p>
        <Button className="mt-4 ms-4" onClick={onClickPlay} disabled={gameData.userChoice === Choice.UNKNOWN}>
          Play
          <PlayIcon />
        </Button>
      </p>
      <p>
        <LinkButton href="/" variant="link" className="mt-4 ms-2 text-xl">
          Home
          <HomeIcon />
        </LinkButton>
      </p>
    </>
  )
}
