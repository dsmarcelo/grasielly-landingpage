import React from 'react'
import { DropdownButton } from './dropdownButton'

const items = [{
  title: "Entenda o golpe do PIX",
  description: "Golpe do PIX” é um termo abrangente para se referir a diversas fraudes que têm acontecido envolvendo esse sistema de transações financeiras.A natureza dos golpes pode variar, no entanto, grande parte deles envolve a obtenção indevida de dados do consumidor, possibilitando que suas contas bancárias sejam invadidas e que transações não autorizadas sejam feitas.Também ocorrem simulações de boletos falsos, pelos quais o consumidor acredita estar pagando algo, mas na verdade acaba enviando dinheiro para uma conta diferente daquela que ele estava imaginando.Diversos outros tipos de golpe têm surgido e, havendo consumação do ato criminoso envolvendo o uso do PIX, o golpe é caracterizado."
}, {
  title: "Entenda o golpe do PIX",
  description: "Golpe do PIX” é um termo abrangente para se referir a diversas fraudes que têm acontecido envolvendo esse sistema de transações financeiras.A natureza dos golpes pode variar, no entanto, grande parte deles envolve a obtenção indevida de dados do consumidor, possibilitando que suas contas bancárias sejam invadidas e que transações não autorizadas sejam feitas.Também ocorrem simulações de boletos falsos, pelos quais o consumidor acredita estar pagando algo, mas na verdade acaba enviando dinheiro para uma conta diferente daquela que ele estava imaginando.Diversos outros tipos de golpe têm surgido e, havendo consumação do ato criminoso envolvendo o uso do PIX, o golpe é caracterizado."
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
