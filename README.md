## Docker React Express Webpack Starter Kit

We have fallen in love with the development story of docker and docker-compose. Especially in the
context of getting a new environment up and running so we can get to core learning without having
to fight configuration. This project will get you up and running with the simplest of React
applications, complete with a server for making api requests and a webpack for all of your webpack
goodness. Feedback in issues or PR's but we encourage you to make it your own.

### Pre-reqs

* Docker (we are generally on Mac OS X and have been using Docker with Dinghy)
* If you are not using Dinghy, it's worth doing this: https://github.com/codekitchen/dinghy-http-proxy
#dinghy-http-proxy

### Usage

To run the project

* Ensure docker and docker-compose are installed and working. (All URLs in this example assume you are
using Dinghy or have Dinghy HTTP Proxy running in your Docker)
* Run `docker-compose up`.
* Launch a browser and go to http://sample-replace.docker:8080 (or your docker-machine vm ip :8080 if
you aren't using Dinghy or Dinghy HTTP Proxy).
* Profit.

### The App

The Reactjs app is contained in `/frontend/index.html`.  `/frontend/js/main.js` is the webpack entry
point, any js that you would like bundled needs to be imported into this file or imported by a file
that this file imports. The javascript bundle is served from `/assets/build`, which webpack-dev-server
will provide during development and will be statically compiled asset for deployment. The server is a
naive express application that will return the same message for all requests to `/api*` and will serve
static files out of `/frontend` for all other requests.

### Pieces

#### Server

This is runs the express application which exposes an api route. Other assets are statically served
from `/frontend`

#### Webpack

This runs a webpack-dev-server that will serve the static assets from `/frontend` and proxy any
request to `/api` onward towoard the backend server.

#### DB

A postgres db, you can take it or leave it.

### Helpful Aliases for your dot files

```
#!bash

alias docko=docker-compose 
alias docko-run='docko run --rm server' 
alias docko-debug='docko-run --rm --service-ports server'

function ___docko-psql {   
  docko run --rm db psql -h db $1 postgres 
}

alias docko-psql='___docko-psql'
```


### TODOS

- [x] implement react app shell
- [x] add scss/css
- [ ] production build script
- [ ] deployment documentation.

