export enum Choice {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  UNKNOWN = "unknown"
}

export enum GameResult {
  USER_WINS = "User Wins",
  COMPUTER_WINS = "Computer Wins",
  REPLAY = "Replay",
  UNKNOWN = "Unknown"
}

export interface GameData {
  computerChoice: Choice
  userChoice: Choice
  gameResult: GameResult
}
