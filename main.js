const { Point } = require('./point')
const { Human } = require('./classInfo')

const alice = new Human('alice', 'merveille', 50, ['js', 'c'])
const p1 = new Point(10, 12)

alice.canVote()