let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords = story.split(' ');
//console.log(storyWords);
let betterWords = storyWords.filter( word => {
  
if (!unnecessaryWords.includes(word)){
return word;
};
  
});
let  number_really  = 0;
let  number_very = 0;
let  number_basically  = 0;

storyWords.forEach(word => {
  if (overusedWords.includes(word)){
     if (word === 'really'){
       number_really +=1;       
     } else if (word === 'very') {
        number_very +=1;
     } else {
       number_basically +=1;
     }
  }
})
//console.log(number_really + ' '+ number_very +' '+number_basically);
let sentenceCount = 0
storyWords.forEach(word => {
 if (word[word.length - 1]=== '.' || word[word.length - 1]=== '!' ){
   sentenceCount++;
 }
})
;
console.log('The number of elements in an array = ' +storyWords.length);
console.log("Number of times 'really' appears " + number_really );
console.log("Number of times 'very' appears " + number_very );
console.log("Number of times 'really' basically " + number_basically );
console.log('Number of sentences in this paragraph ' +sentenceCount);

console.log(betterWords.join());