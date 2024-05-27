import React from 'react'
import { CarretIcon } from './carretIcon'

const items = [{
  title: "Entenda o golpe do PIX",
  description: "Golpe do PIX” é um termo abrangente para se referir a diversas fraudes que têm acontecido envolvendo esse sistema de transações financeiras.A natureza dos golpes pode variar, no entanto, grande parte deles envolve a obtenção indevida de dados do consumidor, possibilitando que suas contas bancárias sejam invadidas e que transações não autorizadas sejam feitas.Também ocorrem simulações de boletos falsos, pelos quais o consumidor acredita estar pagando algo, mas na verdade acaba enviando dinheiro para uma conta diferente daquela que ele estava imaginando.Diversos outros tipos de golpe têm surgido e, havendo consumação do ato criminoso envolvendo o uso do PIX, o golpe é caracterizado."
}]

export const DropdownContainer = () => {
  return (
    <button className='w-full text-white'>
      {items.map((item, index) => (
        <div
          key={index}
          className='rounded-xl bg-dark-blue'>
          <div className='flex py-2 px-6 gap-1 justify-between items-center'>
            <span className='label-large'>{item.title}</span>
            <CarretIcon />
          </div>
          <div className='px-6 pb-5 text-left'>
            <span className='label-normal'>{item.description}</span>
          </div>
        </div>
      ))}
    </button>
  )
}
