import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head />
        <head>
          <title>Waleed Ali Khan | Expert Frontend Developer</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
          />
        </head>
        <body className="debug-screens">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
