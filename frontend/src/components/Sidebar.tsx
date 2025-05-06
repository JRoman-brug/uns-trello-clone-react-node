import { motion } from 'motion/react'
import Navbar from './Navbar'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <motion.div
        animate={{ left: openSidebar ? '0' : '-256px' }}
        className={`absolute z-20 h-full w-64 left-[-256px]`}
      >
        <Navbar />
        <button
          className="absolute top-4 -right-[30px] bg-[#2b3136] cursor-pointer text-white rounded-r-full"
          onClick={() => setOpenSidebar(!openSidebar)}
          aria-label="Open project menu"
        >
          <ChevronRight size={32} />
        </button>
      </motion.div>
    </>
  )
}

export default Sidebar
