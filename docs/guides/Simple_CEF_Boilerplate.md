
To start of, we are speaking of two different contexts in the clientside JavaScript:
- Resource / Game Context
- HTML / Cef Context
Each Cef browser runs JavaScript in a seperate context - the two contexts can communicate using the following functions:
- Browser/cef => Client:
  - ResourceCall
  - ResourceEval
- Client => Browser:
  - browser.call
  - browser.eval

----

This is a simple Cef class created using the newest ES2015 Syntax. Paste this inside your Client and you're off to a great start!

* clientside/main.js
<syntaxhighlight lang="javascript">
class Cef {
  constructor (name, path) {
    this.cursor = false
    this.open = false
    this.external = false
    this.headless = false
    this.chat = false
    this.hud = false

    this.name = name
    this.path = path
  }

  load () {
    if (this.open) {
      return
    }

    const resolution = API.getScreenResolution()

    this.browser = API.createCefBrowser(resolution.Width, resolution.Height, !this.external)
    API.setCefBrowserPosition(this.browser, 0, 0)
    API.setCefBrowserHeadless(this.browser, this.headless)
    API.loadPageCefBrowser(this.browser, this.path)

    if (!this.chat) { API.setCanOpenChat(false) }
    if (!this.hud) { API.setHudVisible(false) }
    if (this.cursor) { API.showCursor(true) }
    this.setOpen(true)
  }

  destroy () {
    API.destroyCefBrowser(this.browser)

    if (!this.chat) { API.setCanOpenChat(true) }
    if (!this.hud) { API.setHudVisible(true) }
    if (this.cursor) { API.showCursor(false) }

    this.setOpen(false)
  }

  eval (evalString) {
    this.browser.eval(evalString)
  }

  setExternal (newValue) { this.external = newValue }
  setHeadless (newValue) { this.headless = newValue }
  setCursorVisible (newValue) { this.cursor = newValue }
  setChatVisible (newValue) { this.chat = newValue }
  setHudVisible (newValue) { this.hud = newValue }

  setOpen (newValue) { this.open = newValue }
}
</syntaxhighlight>
----
The following files are a boilerplate website, for demonstrating purposes only.
* clientside/resources/boilerplate.html
<syntaxhighlight lang="html">
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="boilerplate.css">
    </head>
    <body>
        <p>Hello world! This is HTML5 Boilerplate.</p>
    </body>
</html>
</syntaxhighlight>
* clientside/resources/boilerplate.css
<syntaxhighlight lang="CSS">
body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
}
</syntaxhighlight>
* meta.xml
<syntaxhighlight lang="XML">
<meta>
    <!-- Boilerplate-->        
        <file src="clientside/resources/boilerplate.css" />    
        <file src="clientside/resources/boilerplate.html" />

    <!-- Main -->
        <script src="clientside/main.js" type="client" lang="javascript" />
</meta>
</syntaxhighlight>

