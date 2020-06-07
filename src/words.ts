const awesomeWords = ["awesome", "good", "great", "amazing", "wow", "perfect"]

export function randomWord() {
  return awesomeWords[Math.floor(Math.random() * awesomeWords.length)]
}
