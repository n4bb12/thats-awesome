const awesomeWords = [
  "amazing",
  "awesome",
  "clap",
  "dope",
  "excellent",
  "fascinating",
  "good",
  "great",
  "incredible",
  "marvelous",
  "perfect",
  "prodigious",
  "shocking",
  "stunning",
  "surprising",
  "terrific",
  "unbelievable",
  "wonderful",
  "wow",
]

export function randomWord() {
  return awesomeWords[Math.floor(Math.random() * awesomeWords.length)]
}
