import { motion } from 'motion/react'
import Navbar from './Navbar'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true)

  return (
    <>
      <motion.div
        animate={{ left: (openSidebar) ? "0" : "-256px" }}
        className={`absolute z-20 h-full w-64 left-0`}
      >
        <Navbar />
        <button
          className='absolute top-2 -right-[20px] bg-white rounded-full'
          onClick={() => setOpenSidebar(!openSidebar)}>
          <ChevronRight size={32} />
          </button>
      </motion.div>
    </>
  )
}

export default Sidebar
