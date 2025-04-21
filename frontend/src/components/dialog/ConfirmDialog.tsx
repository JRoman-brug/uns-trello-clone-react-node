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
      className={`fixed inset-0 m-0 w-screen h-screen z-100 flex justify-center items-center transition-colors ${open ? 'visible bg-black/50' : 'invisible'}`}
      onClick={onClose}
    >
      <div
        className={`flex flex-col gap-4 bg-appPrimary z-150 rounded-sm shadow p-6 transition-all max-w-md ${open ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <h2 className="font-bold">{title}</h2>
        {description && <p>{description}</p>}
        <div className="flex justify-between">
          <button className="bg-red-500 px-2 py-1 rounded-sm" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-green-500 px-2 py-1 rounded-sm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog
