import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/vercel.svg'
import discordLogo from '../public/discord.svg'
import twitterLogo from '../public/twitter.svg'
import BrandButton from './BrandButton'
import NavLink from './NavLink'

const MenuBar: React.FC = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white px-0 pt-0 pb-4 transition-all ease-in-out sm:px-4 sm:pt-6"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* desktop menu */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <a className="h-11 w-11 items-center">
                        <Image src={logo} alt="portfolio logo" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden items-center space-x-6 pr-2 sm:static sm:inset-auto sm:ml-6 sm:flex sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center justify-center space-x-4 align-middle font-mono">
                    <NavLink to="https://careers.posp.so">Careers</NavLink>
                    <NavLink to="https://discord.gg/XH66BZFW4m">
                      <Image
                        src={discordLogo}
                        alt="Discord Logo"
                        width={18}
                        height={18}
                      />
                      <span className="ml-2">Discord</span>
                    </NavLink>
                    <NavLink to="https://twitter.com/posp_so">
                      <Image
                        src={twitterLogo}
                        alt="Twitter Logo"
                        width={18}
                        height={18}
                      />
                      <span className="ml-2">Twitter</span>
                    </NavLink>
                    <Link href="https://app.posp.so">
                      <a>
                        <BrandButton>Go to app</BrandButton>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="w-full sm:hidden">
              <div className="mx-auto flex h-screen w-full flex-col space-y-6 bg-slate-800 px-2">
                <Disclosure.Button>
                  <Link href="#about">
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      About
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#experience">
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Experience
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#projects">
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Projects
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="#contact">
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Contact
                    </a>
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button>
                  <Link href="/resume.pdf">
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-[#7851a9] outline outline-1 outline-[#7851a9] hover:bg-purple-100 hover:bg-opacity-10">
                      Resume
                    </a>
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default MenuBar
