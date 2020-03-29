class Persona {
  constructor (name) {
    this.name = name
  }

  saludo () {
    console.log(`Hola mi nombre es ${this.name}! mucho gusto!`)
  }
}

const hola = new Persona('Albert')
hola.saludo()
