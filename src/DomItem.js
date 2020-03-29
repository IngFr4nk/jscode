/**
 * Seleccionar un elemento del DOM y agregar un elemento <p> con texto definido por el usuario.
 */
class Dom {
  constructor (name, text) {
    this.name = name
    this.text = text
  }

    addItem = () => {
      const item = document.querySelector(`.${this.name}`)
      const dom = document.createElement('p')
      item.append(this.text, dom)
    }
}
