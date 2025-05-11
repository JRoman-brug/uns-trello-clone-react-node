interface ConfirmDialog {
  title: string
  description?: string
  open: boolean
  onClose: () => void
  onAction: () => void
}

function ConfirmDialog({ title, description, open, onClose, onAction }: ConfirmDialog) {
  const onConfirm = () => {
    onAction()
    onClose()
  }
  return (
    <div
      className={`fixed z-1000 inset-0 m-0 w-screen h-screen flex justify-center items-center transition-colors ${open ? 'visible bg-[#0008]' : 'invisible'}`}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation()
        onClose()
      }}
    >
      <div
        className={`flex flex-col gap-4 bg-background-dark z-150 rounded-sm shadow p-6 transition-all max-w-md ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <h2 className="font-bold text-white">{title}</h2>
        {description && <p>{description}</p>}
        <div className="flex justify-between">
          <button
            type="button"
            className="text-white rounded-sm px-4 py-2 transition-colors cursor-pointer bg-red-500 md:bg-[#0000] hover:bg-red-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white rounded-sm px-4 py-2 transition-colors cursor-pointer bg-green-500 md:bg-[#0000] hover:bg-green-500"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog
