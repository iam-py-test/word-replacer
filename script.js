"use strict";
var input = document.getElementById('input')
var output = document.getElementById('output')
var words = ['war',"toy","play","doom","malware","fight","go","away",'elect','election',"people","computer","apple","pair","settings","script","president","divided","united",'issue','changes','block','allow']
var wordsToReplace = {}

//as there is no function to pick random items from an array, this is used
var random_choice = function(input_array){
  if(typeof input_array !== 'object'){return array}
  var array = (input_array||[input_array])
var index = Math.round(Math.random()*(array.length-1))
var item = array[index]
if(item === undefined){
  var item = (array[0]||array)
}
  return item
}

//generate a object, mapping certain words to other words
words.forEach(function(word){
window.wordsToReplace[word] = random_choice(words)
})

input.onkeydown = function(){
var input_words = input.value.split(' ')
var output_words = []
input_words.forEach(function(word){
output_words.push((wordsToReplace[word]||word))
})
  output.value = output_words.join(' ')
}
