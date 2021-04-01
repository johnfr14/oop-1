const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: '28',
  language: ['Javascript']
  }

  const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: '30',
  language: ['Javascript', 'python']
  }

  const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: '8',
  language: ['Javascript', 'python', 'yoloooo']
  }

const printInfo = (person) => {
console.log(`first name : ${person.firstName}\nlast name : ${person.lastName}\nage: ${person.age}\nlanguages connu au bataillon: ${person.language.join(', ')}`)
}

const canVote = (person) => {
  return person.age >= 18 ? true : false
}

const mostSkilledDev = (person, person2) => {
return (person.language.length - person2.language.length > 0 ? person.firstName :
        person.language.length - person2.language.length === 0 ? 'draw' : person2.firstName)
}


printInfo(bob)
console.log(canVote(alice))
console.log(mostSkilledDev(alice, charlie))