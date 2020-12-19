import superb from "superb"
import uniq from "lodash/uniq"

const additionalWords = [
  "celebrate",
  "cheer",
  "clap",
  "confetti",
  "dance",
  "dope",
  "fascinating",
  "fireworks",
  "gorgeous",
  "greatest",
  "shocking",
  "strike",
  "surprising",
  "unbelievable",
  "well done",
  "woop",
  "wow",
  "yay",
  "yep",
]

const words = uniq([...superb.all, ...additionalWords])

export function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
