import { IoMdClose } from 'react-icons/io'
interface props {
  close: () => void
  openUpdateDialog: () => void
  openDeleteDialog: () => void
}

function OptionsMenu({ close, openUpdateDialog, openDeleteDialog }: props) {
  return (
    <div
      className="absolute z-1000 -top-6 -right-3 bg-appDarkAccent shadow-[0_0_0_1px_#39424a] text-appLightDark rounded-sm pb-8 text-md cursor-auto"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-center py-2 font-bold text-lg px-14">
        <span>Actions</span>
      </div>
      <ul>
        <li
          className="px-4 hover:bg-appLightDark/25 transition-colors duration-300 cursor-pointer"
          onClick={() => {
            openUpdateDialog()
            close()
          }}
        >
          <span>Edit</span>
        </li>
        <li
          className="px-4 hover:bg-appLightDark/25 transition-colors duration-300 cursor-pointer"
          onClick={() => {
            openDeleteDialog()
            close()
          }}
        >
          <span>Delete</span>
        </li>
      </ul>
      <span
        className="absolute top-2 right-2 rounded-sm hover:bg-appLightDark/25 p-1 transition-colors duration-300"
        onClick={e => {
          e.stopPropagation()
          close()
        }}
      >
        <IoMdClose size={20} className="cursor-pointer" />
      </span>
    </div>
  )
}

export default OptionsMenu
