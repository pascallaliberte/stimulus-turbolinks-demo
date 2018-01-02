import Turbolinks from 'turbolinks'
import { Application } from "stimulus"
import { autoload } from "stimulus/webpack-helpers"

const application = Application.start()
const controllers = require.context("./controllers", true, /\.js$/)
autoload(controllers, application)

Turbolinks.start()