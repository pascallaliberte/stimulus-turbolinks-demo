import { Controller } from "stimulus"

export default class extends Controller {
  toggle(event) {
    event.preventDefault()
    let button = event.target
    let container = this.element
    let menu = this.menu
    
    if (button.getAttribute('aria-expanded') == "false") {
      button.setAttribute('aria-expanded', "true")
      container.classList.add('show')
      menu.classList.add('show')
    } else {
      button.setAttribute('aria-expanded', "false")
      container.classList.remove('show')
      menu.classList.remove('show')
    }
  }

  get menu() {
    return this.targets.find("menu")
  }
}