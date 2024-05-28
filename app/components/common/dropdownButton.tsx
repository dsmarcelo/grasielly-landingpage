import React from 'react'
import CarretIcon from "@/app/assets/images/caret_right_icon.svg";
import { motion } from "framer-motion"

interface Props {
  item: {
    title: string
    description: string
  }
}

export const DropdownButton = ({ item }: Props) => {
  const [open, setOpen] = React.useState(false)
  return (
    <button
      onClick={() => setOpen(!open)}
      className='w-full px-4 rounded-xl text-white bg-dark-blue border-slate-700 border-solid'
    >
      <div className={`flex py-2 gap-1 justify-between transition-all ease-in-out ${!open && 'hover:pl-1'}`}>
        <span className='label-large'>{item.title}</span>
        <CarretIcon className={`fill-white w-4 transition-all duration-300 ${open ? '-rotate-90' : 'rotate-90'}`} />
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: open ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
        className={`flex text-left overflow-hidden ${!open && 'hidden'}`}>
        <span className='label-normal mb-4'>{item.description}</span>
      </motion.div>
    </button>
  )
}
