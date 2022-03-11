const program = require('commander')
const fs = require('fs')
const path = require('path')

// create a store
const createLocalStore = (res) => {
  fs.mkdir('./.mdStore', (err, res) => {
    console.log('.mdStore has created')
  })
}

// update nav
const updateNavConfig = () => {
  // fs.readFile('./docs/\.vuepress/config.js', (err, res) => {
  //   const config = JSON.parse(res.toString());
  //   console.log(config.themeConfig)
  // })
  const config = require(path.resolve('./docs/.vuepress/config.js'))
  
}

// create content
const createSection = () => {
  const sectionPath = path.resolve('./docs')
  const mdStorePath = path.resolve('./\.mdStore')
  console.log(path.join(mdStorePath, '123'))
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
  // console.log(storeFilesName)
}

module.exports = {
  createLocalStore,
  updateNavConfig,
  createSection
}