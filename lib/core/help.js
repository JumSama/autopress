const program = require('commander')

const HelpOptions = () => {
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d ./docs/.vuepress 默认: 命令行当前路径!')

  program.on('--help', function () {
    console.log("");
    console.log("Other:")
    console.log("  other options~");
  })
}

module.exports = HelpOptions