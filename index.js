#!/usr/bin/env node
const program = require('commander')
const HelpConfig = require('./lib/core/help')
const VersionConfig = require('./lib/core/version')
const createCommands = require('./lib/core/create')

HelpConfig()
VersionConfig()
createCommands()

program.parse(process.argv)