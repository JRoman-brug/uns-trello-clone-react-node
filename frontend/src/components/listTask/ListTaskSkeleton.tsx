import { Card, CardContent, CardHeader } from '../ui/card'
import SkeletonTask from '../task/SkeletonTask'
import { LuPlus } from 'react-icons/lu'
import { BsThreeDots } from 'react-icons/bs'

function ListTaskSkeleton() {
  return (
    <Card className="flex flex-col gap-2 min-w-60 max-w-60 h-fit max-h-[calc(100vh-8rem)] py-3 px-3 bg-appDark">
      <CardHeader className="flex justify-between relative">
        <div className="w-1/2 h-4 bg-appLightDark rounded-sm animate-pulse"></div>
        <BsThreeDots
          size={28}
          className="p-1 rounded-sm text-gray-500 hover:bg-appLightDark/25 hover:text-appLight transition-all duration-200 cursor-pointer"
        />
      </CardHeader>
      <CardContent className="listTask-scrollbar pr-1 h-full flex flex-col gap-2 overflow-y-auto">
        <SkeletonTask />
        <SkeletonTask />
        <SkeletonTask />
        <SkeletonTask />
      </CardContent>
      <button className="flex gap-2 items-center text-appLightDark rounded-sm px-2 py-1 w-full cursor-pointer transition-all duration-200">
        <LuPlus size={16} />
        <span className="w-full rounded-sm h-4 bg-appLightDark animate-pulse"></span>
      </button>
    </Card>
  )
}

export default ListTaskSkeleton
