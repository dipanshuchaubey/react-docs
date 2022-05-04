const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const chokidar = require('chokidar')
const parse = require('react-docgen').parse

const paths = {
  components: path.join(__dirname, '../', 'src', 'components'),
  examples: path.join(__dirname, '../', 'src', 'examples'),
  output: path.join(__dirname, '../', 'config', 'componentData.js'),
}

const watchMode = process.argv.splice(2) == '--watch'

if (watchMode) {
  chokidar.watch([paths.components, paths.examples]).on('change', () => {
    generate(paths)
  })
} else {
  generate(paths)
}

function generate(paths) {
  const parsed = []

  fs.readdirSync(paths.components).map((file) => {
    const componentData = fs.readFileSync(
      path.join(paths.components, file, file + '.js'),
      'utf-8'
    )

    const res = parse(componentData)

    parsed.push({
      name: res.displayName,
      description: res.description,
      props: res.props,
      code: componentData,
    })
  })

  fs.writeFileSync(
    paths.output,
    `module.exports = ${JSON.stringify(parsed)}`,
    'utf-8'
  )
}
