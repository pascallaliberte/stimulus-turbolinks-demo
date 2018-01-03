import { Controller } from "stimulus"
import inViewport from 'in-viewport'

const scrollContainerSelector = '[data-behavior="scroll-watcher"]'

export default class extends Controller {
  connect() {
    this.watcher = inViewport(this.element, { 
      offset: 100,
      container: document.querySelector(scrollContainerSelector)
    }, () => {
      this.addMoreClients()
    })
  }
  
  disconnect() {
    this.watcher.dispose()
  }
  
  addMoreClients() {
    let url = this.nextPageUrl + '?' + new Date().getTime() // cache-busting, because why not
    
    let parentEl = this.element.parentNode
    
    let oReq = new XMLHttpRequest()
    
    let controller = this

    oReq.onload = function (e) {
      let newEl = document.createElement("div");
      newEl.innerHTML = e.target.response;
      parentEl.insertBefore(newEl, controller.element)
      controller.element.remove()
    }
    
    oReq.open('GET', url, true)
    oReq.responseType = 'text'
    oReq.send()
  }
  
  get nextPageUrl() {
    return this.data.get("url")
  }
}