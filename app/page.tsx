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
    <div className="min-h-screen mx-auto flex flex-col justify-center items-center">
      <div className="w-full relative flex justify-center">
        <div className="mx-auto z-20 flex flex-col justify-center items-center px-4 md:px-10 lg:px-20 max-w-7xl">
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
          <main className="w-full">
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
        <div className="w-full absolute top-0 left-0 h-full dark-gradient"></div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 max-w-7xl">
        <section className="w-full mb-20 flex flex-col items-center gap-6 md:gap-12">
          <h2 className="">ENTENDA O GOLPE DO PIX:</h2>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
            <div className="p-small md:text-base sm:w-1/2">
              <p className="">
                “Golpe do PIX” é um termo abrangente para se referir a diversas fraudes que têm acontecido envolvendo esse sistema de transações financeiras.
              </p>
              <p className="mt-4">
                A natureza dos golpes pode variar, no entanto, grande parte deles envolve a obtenção indevida de dados do consumidor, possibilitando que suas contas bancárias sejam invadidas e que transações não autorizadas sejam feitas.
              </p>
              <p className="mt-4">
                Também ocorrem simulações de boletos falsos, pelos quais o consumidor acredita estar pagando algo, mas na verdade acaba enviando dinheiro para uma conta diferente daquela que ele estava imaginando.
              </p>
              <p className="mt-4">
                Diversos outros tipos de golpe têm surgido e, havendo consumação do ato criminoso envolvendo o uso do PIX, o golpe é caracterizado.
              </p>
            </div>
            <div className="relative aspect-square sm:w-1/2">
              <Image
                className="rounded-3xl"
                src="/Phone.jpg"
                alt="Pessoa segurando celular"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="w-full ">
          <DropdownContainer />
        </section>
      </div>
      <Footer />
    </div >
  );
}
