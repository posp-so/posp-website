import Link from 'next/link'

const NavLink: React.FC<{ to: string }> = ({ children, to }) => {
  return (
    <Link href={to}>
      <a className="flex items-center justify-center rounded-md p-2 align-middle text-sm font-medium text-black hover:bg-gray-100 hover:bg-opacity-50">
        {children}
      </a>
    </Link>
  )
}

export default NavLink
