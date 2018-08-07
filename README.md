# thesyn.tax
Source of https://thesyn.tax.

## About

Quick and easy crowdsourced syntax lookup reference. 

// gif to follow..

### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run api-server` for local api server
* run `npm run start` which will start `ng serve` with proxy

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`

### Testing

**`npm run test`**

## License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

---
