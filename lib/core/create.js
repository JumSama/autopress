const program = require('commander')
const { createLocalStore, createConfig, createSection } = require('./action')
const createCommands = () => {
  const options = program.opts();

  program.command('init')
  .description('It will help you build a store for you, please move your MarkDown files into mdStore.')
  .action(() => {
    // 初始化仓库
    createLocalStore(options.dest)
  })

  program.command('config')
  .description('It will help you build a config.')
  .action(() => {
    // 创建配置文件
    createConfig()
  })

  program.command('work')
  .description('It will help you with the tedious work')
  .action(() => {
    // 创建目录
    createSection()
  })
}

module.exports = createCommands