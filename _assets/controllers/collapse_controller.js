import { Controller } from "stimulus"

export default class extends Controller {
  toggle(event) {
    event.stopPropagation()
    
    if (this.button.getAttribute('aria-expanded') == "false") {
      this.show()
    } else {
      this.hide(event)
    }
    
    if (this.button.dataset.altText) {
      let oldText = this.button.textContent
      this.button.textContent = this.button.dataset.altText
      this.button.dataset.altText = oldText  
    }
  }
  
  show() {
    this.button.setAttribute('aria-expanded', "true")
    this.element.classList.add('show')
  }
  
  hide(event) {
    if (event.target == this.element) {
      event.preventDefault()
      return
    }
    this.button.setAttribute('aria-expanded', "false")
    this.element.classList.remove('show')
  }
  
  get button() {
    return this.targets.find("button")
  }
}