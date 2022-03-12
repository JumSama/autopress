#!/usr/bin/env node
const program = require('commander')
const HelpConfig = require('./lib/core/help')
const VersionConfig = require('./lib/core/version')
const createCommands = require('./lib/core/create')

// 帮助
HelpConfig()
// 版本查看
VersionConfig()
// 命令
createCommands()

program.parse(process.argv)