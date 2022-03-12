const program = require('commander')
const fs = require('fs')
const path = require('path')

// path
const sectionPath = path.resolve('./docs')
const mdStorePath = path.resolve('./\.mdStore')

// create a store
const createLocalStore = (res) => {
  fs.mkdir('./.mdStore', (err, res) => {
    console.log('.mdStore has created')
  })
}

// create a config
const createConfig = () => {
  // 获取文件名
  const filename = fs.readdirSync(mdStorePath)
  console.log(filename.sort((a, b) => a.localeCompare(b)))
  // 生成配置内容
  const sidebarConfig = filename.map(el => {
    el = el.split('.')[0]
    return [`/${el}/`, el]
  })
  console.log(sidebarConfig)
  // 创建并写入配置文件
  // fs.writeFileSync(path.resolve(mdStorePath, 'config.js'), JSON.stringify(sidebarConfig, null, 1))
}

// create a content
const createSection = () => {
  fs.readdir(mdStorePath, (err, res) => {
    // 获取仓库文件名
    res.forEach(fileAllName => {
      // 去后缀名
      let fileName = fileAllName.split('.')[0]
      // 创建文件夹
      fs.mkdirSync(path.join(sectionPath, fileName))
      // copy仓库
      fs.copyFileSync(path.join(mdStorePath, fileAllName), path.join(sectionPath, fileName, 'README.md'))
    })
  })
}

module.exports = {
  createLocalStore,
  createConfig,
  createSection
}