const program = require('commander')
const { createLocalStore, updateNavConfig, createSection } = require('./action')
const createCommands = () => {
  const options = program.opts();

  program.command('init')
  .description('It will help you build a store for you')
  .action(() => {
    // createLocalStore(options.dest)
    // updateNavConfig()
    createSection()
  })
}

module.exports = createCommands