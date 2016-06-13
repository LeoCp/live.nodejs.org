"use strict"

const build = require('./build')()
const st = require('st')
const http = require('http')
const path = require('path')
const mount = st({
  path: __dirname,
  cache: false,
  index: 'index.html'
})

http.createServer((req, res) => {
   mount(req, res)
}).listen(8080,() => {
   console.log('http://localhost:8080')
})
