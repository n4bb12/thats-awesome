const awesomeWords = [
  "amazing",
  "astonishing",
  "astounding",
  "awesome",
  "best",
  "breathtaking",
  "celebrate",
  "cheer",
  "clap",
  "confetti",
  "dance",
  "dope",
  "excellent",
  "exquisite",
  "fabulous",
  "fantastic",
  "fascinating",
  "fireworks",
  "glorious",
  "good",
  "gorgeous",
  "great",
  "greatest",
  "incredible",
  "legendary",
  "magnificent",
  "majestic",
  "marvelous",
  "mind-blowing",
  "outstanding",
  "perfect",
  "phenomenal",
  "rad",
  "remarkable",
  "shocking",
  "solid",
  "spectacular",
  "splendid",
  "strike",
  "stunning",
  "stupendous",
  "sublime",
  "super",
  "superb",
  "surprising",
  "terrific",
  "unbelievable",
  "unreal",
  "well done",
  "wicked",
  "wonderful",
  "woop",
  "wow",
  "yay",
  "yep",
]

export function randomWord() {
  return awesomeWords[Math.floor(Math.random() * awesomeWords.length)]
}
