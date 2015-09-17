const myDocument = document.currentScript.ownerDocument

class WCAvatar extends HTMLElement {
  createdCallback() {
    const tmpl = myDocument.querySelector('#avatar-template').content.cloneNode(true)

    const shadow = this.createShadowRoot()

    this.appendChild(shadow)

    const service = this.getAttribute('from')
    const username = this.getAttribute('username')

    tmpl.querySelector('img').setAttribute('src', `http://avatars.io/${service}/${username}?size=large`)
    tmpl.querySelector('h6').textContent = username

    shadow.appendChild(tmpl)
  }

  say(what) {
    this.querySelector('blockquote').textContent = what
  }

  emote(feeling) {
    const bubbles = true
    const cancelable = false
    const evt = new CustomEvent('emote', { feeling, bubbles, cancelable })
    this.dispatchEvent(evt)
  }
}

document.registerElement(
  'wc-avatar',
  {
    prototype: WCAvatar.prototype
  }
)
