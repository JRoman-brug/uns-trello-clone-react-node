import { motion, AnimatePresence } from 'motion/react'
import Navbar from './Navbar'
import { useState } from 'react'

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true)

  return (
    <>
      <AnimatePresence>
        {openSidebar ? (
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '0' }}
            exit={{ left: '-100%' }}
            className={`${
              openSidebar ? 'block' : 'hidden'
            } md:block absolute md:relative z-20 h-[calc(100%-4rem)] md:h-full w-64`}
          >
            <Navbar />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* TODO Fix close on desktop mode */}
      {openSidebar ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: '0%' }}
            animate={{ opacity: '50%' }}
            exit={{ opacity: '0%' }}
            className="md:hidden bg-black z-10 absolute top-0 left-0 w-full h-full"
            onClick={() => setOpenSidebar(false)}
          ></motion.div>
        </AnimatePresence>
      ) : null}
    </>
  )
}

export default Sidebar
