// tester si le somme de x nombres est égale à NUMBER
const NUMBER = 30

const numbers = [15, 10, 73, 5, 10]
const numbers2 = [30, 10, 10, 18, 0, 10, 11]
const test = [numbers, numbers2]

function isTwoNumbersEgalToMyNumber(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    const element = arr[index];

    for (let index2 = index; index2 < arr.length - 1; index2++) {
      const idxAfter = index2 + 1
      // console.log(element + arr[idxAfter], element)
      if (element + arr[idxAfter] === NUMBER) return true
    }
  }

  return false
}

// test.forEach(element => {
//     const result = isTwoNumbersEgalToMyNumber(element)
//     console.log(result, '<= result')
// })

function isThreeNumbersEgalToMyNumber(arr) {
  for (let index1 = 0; index1 < arr.length -1; index1++) {
    const element = arr[index1];

    for (let index2 = index1; index2 < arr.length - 1; index2++) {
      const idxAfter = index2 + 1
      const elm = arr[idxAfter]

      for (let index3 = index2; index3 < arr.length - 1; index3++) {
        const idxAfterAtfer = index3 + 1
        if (element + elm + arr[idxAfterAtfer] === NUMBER) return true
      }
    }
  }

  return false
}

// test.forEach(element => {
//   const result = isThreeNumbersEgalToMyNumber(element)
//   console.log(result, '<= result')
// })

function isTwoNumbersEgalToMynumberRecursive(arr, elm = 0, state = 0) {
  if(arr.length === state) return false

  for (let idx = state; idx < arr.length - 1; idx++) {
    if (elm + arr[state] + arr[idx + 1] === NUMBER) return true
  }

  return isTwoNumbersEgalToMynumberRecursive(arr, elm, state + 1)
}

// test.forEach(element => {
//   const result = isTwoNumberEgalToMynumberRecursive(element)
//   console.log(result, '<= result')
// })


function isThreeNumbersEgalToMynumberRecursive(arr, elm = 0, state = 0) {
  if(arr.length === state) return false

  const result = isTwoNumbersEgalToMynumberRecursive([...arr].slice(state + 1), arr[state])
  if(result) return true

  return isThreeNumbersEgalToMynumberRecursive(arr, elm, state + 1)
}


// test.forEach(element => {
//   const result = isThreeNumbersEgalToMynumber(element)
//   console.log(result, '<= result')
// })


function isFourNumbersEgalToMynumberRecursive(arr, state = 0) {
  if(arr.length === state) return false

  const result = isThreeNumbersEgalToMynumberRecursive([...arr].slice(state + 1), arr[state])
  if(result) return true

  return isFourNumbersEgalToMynumberRecursive(arr, state + 1)
}


function isXNumbersEgalToMynumberRecursive(arr, x = 2) {
  if(x === 2) return isTwoNumbersEgalToMynumberRecursive(arr)
  if (x === 3) return isThreeNumbersEgalToMynumberRecursive(arr)
  if (x === 4) return isFourNumbersEgalToMynumberRecursive(arr)
}


test.forEach(element => {
  const result = isXNumbersEgalToMynumberRecursive(element, 4)
  console.log(result, '<= result')
})

// function recursive(arr, elm = 0, state = 0) {
//   if(arr.length === state) return false

//   const result = recursive([...arr].slice(state + 1), arr[state])
//   if(result) return true

//   return recursive(arr, elm, state + 1)
// }
