import inViewport from 'in-viewport'

const moreClientsSelector = '[data-behavior="more-clients"]'
const scrollContainerSelector = '[data-behavior="scroll-watcher"]'

window.inViewport = inViewport

document.addEventListener('turbolinks:load', () => {
  inViewport(document.querySelector(moreClientsSelector), { 
    offset: 100,
    container: document.querySelector(scrollContainerSelector)
  }, addMoreClients)
})

function addMoreClients() {
  let url = '/clients/2/' + '?' + new Date().getTime() // cache-busting, because why not
  
  let moreClientsEl = document.querySelector(moreClientsSelector)
  let parentEl = moreClientsEl.parentNode
  
  let oReq = new XMLHttpRequest()

  oReq.onload = function (e) {
    let newEl = document.createElement("div");
    newEl.innerHTML = e.target.response;
    parentEl.insertBefore(newEl, moreClientsEl)
    moreClientsEl.remove()
  }
  
  oReq.open('GET', url, true)
  oReq.responseType = 'text'
  oReq.send()
}