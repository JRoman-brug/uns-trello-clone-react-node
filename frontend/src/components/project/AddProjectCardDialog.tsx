import { FaPlus } from 'react-icons/fa6'

function AddProjectCard() {
  return (
    <div className="w-[250px] h-[100px] flex justify-center items-center cursor-pointer border-[3px] border-white border-dashed hover:scale-105 transition-all duration-200 ease-in-out">
      <FaPlus size={30} className="text-white" />
    </div>
  )
}

export default AddProjectCard
