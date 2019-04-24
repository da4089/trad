const path = require('path')
const { Parser } = require('./parser')
const { CInclude } = require('../../trad')

function exportObject(obj) {
  const file = path.basename(this.program.file)

  // eslint-disable-next-line no-param-reassign
  obj.isExported = true
  this.program.addInclude(new CInclude(`${file}.h`))
}

class ExportDefaultParser extends Parser {
  parse(input) {
    const obj = this.compiler.parse(input.declaration)

    exportObject.call(this, obj)
  }
}

class ExportNamedParser extends Parser {
  parse(input) {
    const obj = this.compiler.parse(input.declaration)

    exportObject.call(this, obj)
  }
}

module.exports = {
  ExportDefaultParser,
  ExportNamedParser
}
