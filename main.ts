import { Guerreiro } from './guerreiro'
import { Mago } from './mago'
import { Atirador } from './atirador'
import { Xamã } from './xamã'


const guerreiro = new Guerreiro('Hércules', 100, 20, 10)
const mago = new Mago('Merlin', 80, 25, 5)
const atirador = new Atirador('Ártemis', 60, 35, 15 )
const xamã = new Xamã('Ragadast', 90, 30 , 5  )

function combate(personagem1: any, personagem2: any): void {
  let turno = 1
  
  while (personagem1.vida > 0 && personagem2.vida > 0) {
    console.log(`\n--- Turno ${turno} ---`)
    if (turno % 2 === 1) {
      personagem1.atacar(personagem2)
    } else {
      personagem2.atacar(personagem1) 
    }
    turno++
  }

  if (personagem1.vida <= 0) {
    console.log(`${personagem1.nome} foi de Vasco! ${personagem2.nome} deu gap!`)
  } else {
    console.log(`${personagem2.nome} foi de Vasco! ${personagem1.nome} deu gap!`)
  }
}

combate(xamã, atirador)
