const name = "rishikesh sharma "
const feature = "great"

console.log(name+ feature+ " person")

console.log(`hello my name is ${name} and I am a ${feature} person`)

const insta_username = new String('Risker_01')
console.log(insta_username[0])
console.log(insta_username.__proto__)
console.log(insta_username.length)
console.log(insta_username.toUpperCase())
console.log(insta_username.charAt('5'))
console.log(insta_username.indexOf('k'))

const newStr = insta_username.substring(0,5)
console.log(newStr)

const newstr2 = insta_username.slice(-8,5)
console.log(newstr2)

const newstr3 = "    RISHIKESH           "
console.log(newstr3)
console.log(newstr3.trim())

const url = "http//rishikesh.com/rishikesh%20sharma"
console.log(url.replace('%20', '_'))
console.log(url.includes('h.c'))
console.log(insta_username.split('_'))