import Image from "next/image";
import PillButton from "./components/common/pillButton";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaChevronCircleRight } from "react-icons/fa";
import { CarretIcon } from "./components/common/carretIcon";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 lg:px-20">
      <header className="flex items-center justify-center h-20">
        <Image
          className=""
          src="/Logo.svg"
          alt="Logo"
          width={120}
          height={0}
          priority
        />
      </header>
      <main className="w-full max-w-7xl pb-12">
        <section className="w-full my-[120px] flex flex-col gap-6 items-center justify-center font-normal text-center">
          <h1>
            Sofreu um golpe e <span className="text-tertiary">perdeu</span> mais de <span className="text-secondary">R$4.000,00?</span>
          </h1>
          <div className="gap-2 w-full justify-center">
            <p className="p-normal">
              Recupere seu dinheiro agora!
            </p>
            <PillButton className='w-full mx-auto max-w-96 mt-2'>
              <div className="flex items-center gap-3">
                <IoLogoWhatsapp className="w-5 h-5" />
                <span className="text-xl leading-none label-xlarge text-black">Entre em contato</span>
              </div>
              <CarretIcon />
            </PillButton>
          </div>
        </section>
        <section>
          {/*todo */}
        </section>
      </main>
    </div>
  );
}
