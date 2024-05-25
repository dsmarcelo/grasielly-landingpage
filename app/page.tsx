import Image from "next/image";
import PillButton from "./components/common/pillButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 lg:px-20">
      <header className="flex items-center justify-center h-20">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/Logo.svg"
          alt="Logo"
          width={180}
          height={0}
          priority
        />
      </header>
      <main className="w-full max-w-7xl">
        <section className="w-full mt-[120px] flex flex-col gap-6 items-center justify-center font-normal text-center">
          <h1>
            Sofreu um golpe e <span className="text-tertiary">perdeu</span> mais de <span className="text-secondary">R$4.000,00?</span>
          </h1>
          <div>
            <p className="p-normal">
              Recupere seu dinheiro agora!
            </p>
          </div>
          <PillButton className=''>
            <span className="text-xl label-xlarge text-black">Entre em contato</span>
          </PillButton>
        </section>
      </main>
    </div>
  );
}
