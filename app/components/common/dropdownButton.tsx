import React from 'react'
import CarretIcon from "@/app/assets/images/caret_right_icon.svg";
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  item: {
    title: string
    description: string | JSX.Element
  }
}

export const DropdownButton = ({ item }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.button
      animate={isOpen ? "open" : "closed"}
      onClick={() => setIsOpen(!isOpen)}
      className='w-full px-4 rounded-xl text-white bg-dark-blue border-slate-700 border-solid'
    >
      <div className={`flex py-4 gap-1 justify-between transition-all ease-in-out ${!isOpen && 'hover:pl-1'}`}>
        <span className='label-large'>{item.title}</span>
        <CarretIcon className={`fill-white w-4 transition-all duration-300 ${isOpen ? '-rotate-90' : 'rotate-90'}`} />
      </div>
      <AnimatePresence>
        {isOpen &&
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.4,
            }}
            className={`flex text-left overflow-hidden ${!isOpen && 'hidden'}`}>
            <span className='label-normal mb-4'>{item.description}</span>
          </motion.div>}
      </AnimatePresence>
    </motion.button>
  )
}
