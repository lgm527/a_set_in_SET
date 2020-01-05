//all possibilities: use to randomize the 3 cards given to function
let columnCollection = {
  color: ['green', 'orange', 'purple'],
  number: [1, 2, 3],
  pattern: ['solid', 'empty', 'striped'],
  shape: ['pill', 'diamond', 'curve']
}

//hard-coded set of 3 that would return true:
let threeCardsTrue = [
  {
    color: 'green',
    number: 1,
    pattern: 'solid',
    shape: 'pill'
  },
    {
    color: 'green',
    number: 1,
    pattern: 'empty',
    shape: 'diamond'
  },
    {
    color: 'green',
    number: 1,
    pattern: 'striped',
    shape: 'curve'
  }
]

//hard-coded set of 3 that would return false:
let threeCardsFalse = [
  {
    color: 'orange',
    number: 1,
    pattern: 'empty',
    shape: 'diamond'
  },
    {
    color: 'orange',
    number: 2,
    pattern: 'empty',
    shape: 'diamond'
  },
    {
    color: 'purple',
    number: 3,
    pattern: 'empty',
    shape: 'diamond'
  }
]

function colorCheck(c1, c2, c3) {
  if (c1 === c2 && c1 === c3) {
    return true;
  } else if (c1 !== c2 && c1 !== c3) {
    if (c2 !== c3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function numberCheck(n1, n2, n3) {
  if (n1 === n2 && n1 === n3) {
    return true;
  } else if (n1 !== n2 && n1 !== n3) {
    if (n2 !== n3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function patternCheck(p1, p2, p3) {
  if (p1 === p2 && p1 === p3) {
    return true;
  } else if (p1 !== p2 && p1 !== p3) {
    if (p2 !== p3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function shapeCheck(s1, s2, s3) {
  if (s1 === s2 && s1 === s3) {
    return true;
  } else if (s1 !== s2 && s1 !== s3) {
    if (s2 !== s3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//given 3 cards from the game sets, return true if those 3 would make a valid set, and false if they would not
function threeIsSet(cards) {
  let color1 = cards[0].color
  let color2 = cards[1].color
  let color3 = cards[2].color

  let number1 = cards[0].number
  let number2 = cards[1].number
  let number3 = cards[2].number

  let pattern1 = cards[0].pattern
  let pattern2 = cards[1].pattern
  let pattern3 = cards[2].pattern

  let shape1 = cards[0].shape
  let shape2 = cards[1].shape
  let shape3 = cards[2].shape

  let colorSet = colorCheck(color1, color2, color3);
  let numberSet = numberCheck(number1, number2, number3);
  let patternSet = patternCheck(pattern1, pattern2, pattern3);
  let shapeSet = shapeCheck(shape1, shape2, shape3);

  let isSet;

  if (colorSet && numberSet) {
    if (patternSet && shapeSet) {
      isSet = true;
    } else {
      isSet = false;
    }
  } else {
    isSet = false;
  }

  return isSet;
}

//testing check functions:

// all different
console.log('color check: should return true => ', colorCheck('purple', 'green', 'orange'))
// all same
console.log('color check: should return true => ', colorCheck('purple', 'purple', 'purple'))
// 2 same, 1 different
console.log('color check: should return false => ', colorCheck('purple', 'green', 'purple'))
console.log('color check: should return false => ', colorCheck('purple', 'purple', 'green'))
console.log('color check: should return false => ', colorCheck('orange', 'green', 'green'))

// all different
console.log('number check: should return true => ', numberCheck(1,2,3))
// all same
console.log('number check: should return true => ', numberCheck(1,1,1))
// 2 same, 1 different
console.log('number check: should return false => ', numberCheck(1,1,2))
console.log('number check: should return false => ', numberCheck(1,2,1))
console.log('number check: should return false => ', numberCheck(1,2,2))

// all different
console.log('pattern check: should return true => ', patternCheck('solid', 'empty', 'striped'))
// all same
console.log('pattern check: should return true => ', patternCheck('solid', 'solid', 'solid'))
// 2 same, 1 different
console.log('pattern check: should return false => ', patternCheck('solid', 'solid', 'empty'))
console.log('pattern check: should return false => ', patternCheck('solid', 'striped', 'solid'))
console.log('pattern check: should return false => ', patternCheck('empty', 'striped', 'striped'))

// all different
console.log('shape check: should return true => ', shapeCheck('pill', 'diamond', 'curve'))
// all same
console.log('shape check: should return true => ', shapeCheck('pill', 'pill', 'pill'))
// 2 same, 1 different
console.log('shape check: should return false => ', shapeCheck('pill', 'pill', 'diamond'))
console.log('shape check: should return false => ', shapeCheck('diamond', 'curve', 'diamond'))
console.log('shape check: should return false => ', shapeCheck('curve', 'pill', 'pill'))


//testing threeIsSet function:

console.log('should return true...', threeIsSet(threeCardsTrue))

console.log('should return false...', threeIsSet(threeCardsFalse))
