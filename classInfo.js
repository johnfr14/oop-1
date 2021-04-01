class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
  console.log(`first name : ${this.firstName}\nlast name : ${this.lastName}\nage: ${this.age}\nlanguages connu au bataillon: ${this.language.join(', ')}`)
  }

  canVote() {
  return this.age >= 18 ? true : false
  }

  mostSkilledDev(person2) {
  return (this.language.length - person2.language.length > 0 ? this.firstName :
          this.language.length - person2.language.length === 0 ? 'draw' : person2.firstName)
  }
}

const alice = new Human('alice', 'coucou', 18, ['javascript', 'python'])
const bob = new Human('bob', 'cou', 10, ['javascript', 'python'])

bob.printInfo()

exports.Human = Human