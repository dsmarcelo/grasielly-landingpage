import React from 'react'
import { DropdownButton } from './dropdownButton'

const items = [{
  title: "Entenda o golpe do PIX",
  description: (
    <>
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
    </>
  )
}, {
  title: "Quais são os tipos de golpe",
  description: (
    <>
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
    </>
  ),
}, {
  title: "O que fazer caso caia em um golpe",
  description: (
    <>
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
    </>
  ),
}]

export const DropdownContainer = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-3'>
      {items.map((item, index) => (
        <div
          key={index}
          className=''>
          <DropdownButton item={item} />
        </div>
      ))}
    </div>
  )
}
