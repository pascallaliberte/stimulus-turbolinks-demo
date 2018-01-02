import { Controller } from "stimulus"

export default class extends Controller {
  toggle(event) {
    event.preventDefault()
    
    if (this.button.getAttribute('aria-expanded') == "false") {
      this.show()
    } else {
      this.hide()
    }
  }
  
  show() {
    this.button.setAttribute('aria-expanded', "true")
    this.element.classList.add('show')
    this.menu.classList.add('show')
  }
  
  hide() {
    this.button.setAttribute('aria-expanded', "false")
    this.element.classList.remove('show')
    this.menu.classList.remove('show')
  }

  get menu() {
    return this.targets.find("menu")
  }
  
  get button() {
    return this.targets.find("button")
  }
}