const BrandButton: React.FC = ({ children }) => {
  return (
    <button className="rounded-md px-2 py-1 text-sm font-medium text-[#7851a9] outline outline-2 outline-[#7851a9] hover:bg-purple-500 hover:bg-opacity-10">
      {children}
    </button>
  )
}

export default BrandButton
