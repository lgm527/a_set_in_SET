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

//given 3 cards from the game sets, return true if those 3 would make a valid set, and false if they would not
function threeIsSet(cards) {
  let color1 = cards[0].color
  let color2 = cards[1].color
  let color3 = cards[2].color

  function colorCheck(c1, c2, c3) {
    if (c1 === c2 && c2 === c3) {

    }
  }

  let number1 = cards[0].number
  let number2 = cards[1].number
  let number3 = cards[2].number

  let pattern1 = cards[0].pattern
  let pattern2 = cards[1].pattern
  let pattern3 = cards[2].pattern

  let shape1 = cards[0].shape
  let shape2 = cards[1].shape
  let shape3 = cards[2].shape


}

//should return true
threeIsSet(threeCardsTrue)
