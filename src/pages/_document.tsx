import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
