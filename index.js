#!/usr/bin/env node
const program = require('commander')
const helpConfig = require('./lib/core/help')
const createCommands = require('./lib/core/create')

helpConfig()

createCommands()

program.parse(process.argv)