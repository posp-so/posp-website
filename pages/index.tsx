import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Proof of Skills Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex flex-col items-center justify-center font-medium"
          href="https://polygon.technology"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on{' '}
          <Image
            src="/polygon.svg"
            alt="Polygon Network Logo"
            width={144}
            height={32}
          />
        </a>
      </footer>
    </div>
  )
}

export default Home
