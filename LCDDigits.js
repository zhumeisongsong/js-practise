const digitsArr = {
  0: {
    1: ['dot', 'underscore', 'dot'],
    2: ['pipe', 'dot', 'pipe'],
    3: ['pipe', 'underscore', 'pipe']
  },
  1: {
    1: ['dot', 'dot', 'dot'],
    2: ['dot', 'dot', 'pipe'],
    3: ['dot', 'dot', 'pipe']
  },
  2: {
    1: ['dot', 'underscore', 'dot'],
    2: ['dot', 'underscore', 'pipe'],
    3: ['pipe', 'underscore', 'dot']
  },
  3: {
    1: ['dot', 'underscore', 'dot'],
    2: ['dot', 'underscore', 'pipe'],
    3: ['dot', 'underscore', 'pipe']
  },
  4: {
    1: ['dot', 'dot', 'dot'],
    2: ['pipe', 'underscore', 'pipe'],
    3: ['dot', 'dot', 'pipe']
  },
  5: {
    1: ['dot', 'underscore', 'dot'],
    2: ['pipe', 'underscore', 'dot'],
    3: ['dot', 'underscore', 'pipe']
  },
  6: {
    1: ['dot', 'underscore', 'dot'],
    2: ['pipe', 'underscore', 'dot'],
    3: ['pipe', 'underscore', 'pipe']
  },
  7: {
    1: ['dot', 'underscore', 'dot'],
    2: ['dot', 'dot', 'pipe'],
    3: ['dot', 'dot', 'pipe']
  },
  8: {
    1: ['dot', 'underscore', 'dot'],
    2: ['pipe', 'underscore', 'pipe'],
    3: ['pipe', 'underscore', 'pipe']
  },
  9: {
    1: ['dot', 'underscore', 'dot'],
    2: ['pipe', 'underscore', 'pipe'],
    3: ['dot', 'dot', 'pipe']
  }
}

const characters = {
  dot: '.',
  underscore: '_',
  pipe: '|'
}

/**
 * Trans characters name to characters
 *
 * @param {Array} array
 * @return {String} result
 */
const string2characters = (array) => {
  let result = ''

  array.map((val) => {
    result += characters[val]
  })

  result += ' '

  return result
}

/**
 * Get string of each line
 *
 * @param {Array} line
 * @return {String} result
 */
const getLineOutput = (line) => {
  let result = ''

  line.map((val) => {
    result += string2characters(val)
  })

  return result
}

/**
 * Output digits result
 *
 * @param {String} string
 * @return {Object} result
 */
const getDigits = (string) => {
  let result = [[], [], []]

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < string.length; j++) {
      let index = string[j]
      result[i].push(digitsArr[index][i + 1])
    }
    result[i] = getLineOutput(result[i])
    console.log(result[i])
  }

}

getDigits('1234567890455678856')

