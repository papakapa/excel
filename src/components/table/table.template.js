const CODES = {
  'A': 65,
  'Z': 90
}

function createColumn(col) {
  return `<div class="column">${col}</div>`
}

function createCell(cell) {
  return `<div class="cell" contenteditable="">${cell}</div>`
}

function createRow(content, info) {
  return `
    <div class = 'row'>
        <div class="row-info">${info}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowNum = 10, colNum = 10) {
  const colCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colCount)
      .fill('')
      .map( toChar)
      .map( createColumn)
      .join('')

  rows.push(createRow(cols, ''))

  for (let i = 0; i<rowNum; i++) {
    const cellRow = new Array(colCount)
        .fill( '')
        .map( createCell)
        .join('')
    rows.push(createRow(cellRow, i+1))
  }

  return rows.join('')
}
