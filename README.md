# TheSyntax.net

Fast crowdsourced syntax lookup.
Source of https://thesyntax.net.

### Generously supported by:
<a href="http://browserstack.com">
	<img src="https://i.imgur.com/nrUNcOG.png" width="300" />
</a>

#### View Syntax


![View syntax](https://media.giphy.com/media/jKYbHR7n3MA6XHiYcM/giphy.gif)
#
#
#### Search Syntax

![View syntax](https://media.giphy.com/media/8YEZfuE27dOgIYsKyE/giphy.gif)



### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run api-server` for local api server
* run `npm run start` which will start `ng serve` with proxy

## Local SSR

**`npm run build:ssr:dev && npm run serve:ssr:proxy`

### Production
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`

### Testing

**`npm run test`**


## License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

---
