'use client'
import Image from "next/image";
import PillButton from "./components/common/pillButton";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion"
import { DropdownContainer } from "./components/common/dropdownContainer";
import CarretIcon from "./assets/images/caret_right_icon.svg";
import { Footer } from "./components/common/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex-col items-center">
      <div className="flex flex-col justify-center items-center px-4 lg:px-20 dark-gradient w-screen">
        <header className="flex items-center justify-center h-20">
          <Image
            className=""
            src="/Logo.svg"
            alt="Logo"
            width={170}
            height={0}
            priority
          />
        </header>
        <main className="w-full max-w-7xl">
          <section className="w-full my-[120px] flex flex-col gap-6 items-center justify-center font-normal text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}>
              Sofreu um golpe e <span className="text-tertiary">perdeu</span> mais de <span className="text-secondary">R$4.000,00?</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="gap-2 w-full justify-center">
              <p className="p-normal">
                Recupere seu dinheiro agora!
              </p>
              <PillButton className='w-full mx-auto max-w-96 mt-2'>
                <div
                  className="flex items-center gap-3">
                  <IoLogoWhatsapp className="w-5 h-5" />
                  <span className="text-xl leading-none label-xlarge text-black">Entre em contato</span>
                </div>
                <CarretIcon className='h-8' />
              </PillButton>
            </motion.div>
          </section>
        </main>
      </div >

      <section className="px-4 lg:px-20">
        <DropdownContainer />
      </section>
      <Footer />
    </div >
  );
}
