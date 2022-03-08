import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Proof of Skill Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col px-5 md:items-center md:justify-center md:px-20">
        <section className="h-96 w-full bg-white sm:p-10 md:bg-[url(/undraw/undraw_personal_info_re_ur1n.svg)] md:bg-contain md:bg-right md:bg-no-repeat">
          <h1 className="text-6xl font-medium text-[#7851a9]">
            Proof of Skill
          </h1>
          <h2 className="max-w-md text-2xl">
            A crypto-native approach to finding new talent and verifying
            credentials.
          </h2>
          <h3 className="text-xl"></h3>
        </section>
      </main>

      <footer className="flex h-10 w-full items-center justify-center border-t pt-2 align-middle">
        <a
          className="flex flex-col items-center justify-center text-xs font-medium"
          href="https://polygon.technology"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on{' '}
          <Image
            src="/polygon.svg"
            alt="Polygon Network Logo"
            width={144}
            height={20}
          />
        </a>
      </footer>
    </div>
  )
}

export default Home
