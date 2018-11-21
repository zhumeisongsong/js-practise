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
 * Split large string into N-size chunks
 *
 * @param {String} string
 * @param {Number} length
 * @return {Array} result
 */

const chunkString = (string, length) => {
  return string.match(new RegExp('.{1,' + length + '}', 'g'));
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
 * Output each chunks to digits
 *
 * @param {String} string
 * @return {Object} result
 */
const getEachChunksDigits = (string) => {
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


/**
 * Output digits result
 *
 * @param {String} string
 * @param {Number} size
 * @return {Object} result
 */
const getDigits = (string, size) => {


  const formatInput = chunkString(string, size)

  formatInput.map((val) => {
    getEachChunksDigits(val)
    console.log('\n')
  })



}

getDigits('2343242342', 10)

