import { IGif } from "@giphy/js-types"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"

import { Background, Search } from "../components"
import { config } from "../config"
import { giphyApiClient } from "../giphy"
import { randomWord } from "../words"

const gf = giphyApiClient()

type HomeProps = {
  initialInput: string
  initialGifs: IGif[]
}

const Home: NextPage<HomeProps> = (props) => {
  if (process.browser && "scrollRestoration" in window.history) {
    // Back off, browser, I got this...
    window.history.scrollRestoration = "manual"
  }

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
        />
      </Head>

      <Background />
      <Search {...props} />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context,
) => {
  const initialInput = (context.query.q as string)?.trim() || ""
  const searchTerm = initialInput || randomWord()

  const initialSearchResults = await gf.search(searchTerm, {
    offset: 0,
    limit: config.chunkSize,
    type: "gifs",
    rating: "g",
  })

  return {
    props: {
      initialInput: searchTerm,
      initialGifs: initialSearchResults.data,
    },
  }
}
