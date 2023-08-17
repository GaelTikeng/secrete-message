// function secretemessage (phrase) {
//   let res = ''
//   let lower = ''
  

//   let text = removeSpecialChars (phrase)
//   let text1 = ''
//   let n = text.length
//   let arr = []
//   let c = 6
//   let r = 5


//   // loop through the lenght of the string

//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= c; j++) {
     

//     }
//   }
//   return arr
// }
// console.log(secretemessage("I My name? is DAGelziefh"))


// function that removes special charaters and spaces (normalized form)

function removeSpecialChars (str = '') {
  let res = ''
  for(let i = 0; i < str.length; i++){
     let character = str[i]
  if(+character){
     res += character
     }else if(character.toLowerCase() !== character.toUpperCase()){
        res += character 
     }
     continue
  }
  lower = res.toLowerCase()
  return lower
}
doc = removeSpecialChars("Matter can Be,?defined as] =}anything that has Weight and occupies SpacE. Some people think that")
 console.log(doc)

// function to the rectangle organization

function normalizedRectangle (string) {
  let n = string.length
  let c = 10
  let r = Math.floor(n/c)
  let newarray = []
  for (let i = 0; i <= n; i += c) {
    newarray.push(string.slice(i, i + c))
  }
  return newarray
}
let normrect = normalizedRectangle(doc)
console.log(normrect)

// Coded message
function codedmessage (loop) {
  let newTab = []
  console.log(loop[0].length)
  console.log(loop[0][1])
  let i = 0,
  j = 0,
  k = 0

  while (i < loop[0].length) {
    while (j < loop.length) {
      newTab.push(loop[i][j])
      j++
    }
    i++
  }
  // for(let j = 0; j <= loop[0].length; j++) {
  //   for (let i = 0; i <= 8; i++) {
  //     newTab.push(loop[i][0])
      
  //     // newTab.push(loop[i][j])
  //   }
  // }
  // consoleLog(loop[i][0])
  return newTab
}

console.log(codedmessage(normrect))










  
  
//   // coded message

//   let code = ''
//   for (let i = 0; i <= c; i++) {
//     for (let j = 0; j <= r; j++) {
//       code.concat(j)
//     }
//   }
//   return code

// }
// es = secretemessage ("Next year i will go to CanvasGradient,? what about / you and me@")
//  console.log(es)












