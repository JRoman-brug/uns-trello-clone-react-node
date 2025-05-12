function SkeletonTask() {
  return (
    <div className="bg-appLight shrink-0 h-24 rounded-lg py-2 px-3">
      <div className="animate-pulse flex flex-col justify-between items-start gap-2.5 pl-2 p-3">
        <div className="h-4 w-1/2 bg-gray-400 rounded-sm"></div>
        <div className="h-3 w-full bg-gray-400 rounded-sm"></div>
        <div className="h-3 w-full bg-gray-400 rounded-sm"></div>
      </div>
    </div>
  )
}

export default SkeletonTask
