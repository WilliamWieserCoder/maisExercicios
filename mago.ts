import { Personagem } from './Personagem'

export class Mago implements Personagem {
  nome: string
  vida: number
  forca: number
  defesa: number

  constructor(nome: string, vida: number, forca: number, defesa: number) {
    this.nome = nome
    this.vida = vida
    this.forca = forca
    this.defesa = defesa
  }

  atacar(inimigo: Personagem): void {
    const dano = this.forca - inimigo.defesa
    if (dano > 0) {
      console.log(`${this.nome} ataca ${inimigo.nome} e causa ${dano} de dano.`)
      inimigo.perderVida(dano)
    } else {
      console.log(`${this.nome} ataca ${inimigo.nome}, mas o ataque não causa dano.`)
    }
  }

  perderVida(dano: number): void {
    this.vida -= dano
    console.log(`${this.nome} perde ${dano} de vida. Vida restante: ${this.vida}`)
  }
}
