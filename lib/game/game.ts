import { Choice, GameResult } from "./types"

const choices: Choice[] = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS]

export function getRandomChoice(): Choice {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

export function getGameResult(
  userChoice: Choice,
  computerChoice: Choice
): GameResult {
  switch (userChoice) {
    case Choice.PAPER:
      switch (computerChoice) {
        case Choice.PAPER:
          return GameResult.REPLAY
        case Choice.ROCK:
          return GameResult.USER_WINS
        case Choice.SCISSORS:
          return GameResult.COMPUTER_WINS
        default:
          return GameResult.UNKNOWN
      }
    case Choice.ROCK:
      switch (computerChoice) {
        case Choice.PAPER:
          return GameResult.COMPUTER_WINS
        case Choice.ROCK:
          return GameResult.REPLAY
        case Choice.SCISSORS:
          return GameResult.USER_WINS
        default:
          return GameResult.UNKNOWN
      }
    case Choice.SCISSORS: {
      switch (computerChoice) {
        case Choice.PAPER:
          return GameResult.USER_WINS
        case Choice.ROCK:
          return GameResult.COMPUTER_WINS
        case Choice.SCISSORS:
          return GameResult.REPLAY
        default:
          return GameResult.UNKNOWN
      }
    }
    default:
      return GameResult.UNKNOWN
  }
}
