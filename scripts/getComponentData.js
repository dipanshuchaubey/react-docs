const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const chokidar = require('chokidar')
const parse = require('react-docgen').parse

const paths = {
  components: path.join(__dirname, '../src', 'components'),
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  output: path.join(__dirname, '../config', 'componentData.js'),
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
      examples: getExampleData(paths.examples, res.displayName),
    })
  })

  fs.writeFileSync(
    paths.output,
    `module.exports = ${JSON.stringify(parsed)}`,
    'utf-8'
  )
}

function getExampleData(examplesPath, componentName) {
  const files = getExampleFile(path.join(examplesPath, componentName))

  return files.map((file) => {
    const exampleData = fs.readFileSync(
      path.join(examplesPath, componentName, file),
      'utf-8'
    )
    const parsed = parse(exampleData)

    return {
      name: file.slice(0, -3),
      description: parsed.description,
      code: exampleData,
    }
  })
}

function getExampleFile(filepath) {
  let examples = []

  try {
    examples = fs.readdirSync(filepath).filter((file) => {
      return fs.statSync(path.join(filepath, file)).isFile()
    })
  } catch (error) {
    console.log(chalk.red(`No Examples Found for ${filepath}`))
  }

  return examples
}
