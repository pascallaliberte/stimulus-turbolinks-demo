import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['menu', 'button']
  
  toggle(event) {
    event.stopPropagation()
    event.preventDefault()
    
    if (this.buttonTarget.getAttribute('aria-expanded') == "false") {
      this.show()
    } else {
      this.hide(event)
    }
  }
  
  show() {
    this.buttonTarget.setAttribute('aria-expanded', "true")
    this.element.classList.add('show')
    this.menuTarget.classList.add('show')
  }
  
  hide(event) {
    if (event.target == this.menuTarget) {
      event.preventDefault()
      return
    }
    this.buttonTarget.setAttribute('aria-expanded', "false")
    this.element.classList.remove('show')
    this.menuTarget.classList.remove('show')
  }
}