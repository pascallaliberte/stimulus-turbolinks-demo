import { Controller } from "stimulus"

export default class extends Controller {
  show(event) {
    event.preventDefault()
    
    if (this.numProposals > 1) {
      alert(`would preview the ${this.numProposals} pitched proposals`)
    } else {
      alert(`would preview the pitched proposal`)
    }
  }
  
  get numProposals() {
    return parseInt(this.data.get('amount'))
  }
}