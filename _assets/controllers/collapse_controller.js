import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "button" ]

  toggle(event) {
    event.stopPropagation()

    if (this.buttonTarget.getAttribute('aria-expanded') == "false") {
      this.show()
    } else {
      this.hide(event)
    }

    if (this.buttonTarget.dataset.altText) {
      let oldText = this.buttonTarget.textContent
      this.buttonTarget.textContent = this.buttonTarget.dataset.altText
      this.buttonTarget.dataset.altText = oldText
    }
  }

  show() {
    this.buttonTarget.setAttribute('aria-expanded', "true")
    this.element.classList.add('show')
  }

  hide(event) {
    if (event.target == this.element) {
      event.preventDefault()
      return
    }
    this.buttonTarget.setAttribute('aria-expanded', "false")
    this.element.classList.remove('show')
  }
}
