import { Controller } from "stimulus"

export default class extends Controller {
  toggle(event) {
    event.stopPropagation()
    
    if (this.button.getAttribute('aria-expanded') == "false") {
      this.show()
    } else {
      this.hide(event)
    }
  }
  
  show() {
    this.button.setAttribute('aria-expanded', "true")
    this.element.classList.add('show')
    this.menu.classList.add('show')
  }
  
  hide(event) {
    if (event.target == this.menu) {
      event.preventDefault()
      return
    }
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