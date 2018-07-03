require('./index.scss')

// IE11?
// require('babel-polyfill')

import {Slim} from "slim-js/Slim"
import {tag, template, useShadow} from "slim-js/Decorators"

const aTemplate = require('./a-player.html')

@tag('a-player')
@template(aTemplate)
@useShadow(true)
class APlayer extends Slim {

  // native API
  static get observedAttributes () {
    return ['hello'];
  }

  // bind attributes to properties
  // when 'hello' attribute changed - it is reflected to the property, and the component alters the relevant text node.
  get autoBoundAttributes() {
    return ['hello'];
  }

  onBeforeCreated () {
  }

  onCreated() {
  }

}
