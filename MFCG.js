////////////////////////////////
// Global Variables Here

let card = ["https://i.pinimg.com/1200x/f8/7d/1f/f87d1fd4c090d46a87590f4a56a80502.jpg","https://i.pinimg.com/1200x/f8/7d/1f/f87d1fd4c090d46a87590f4a56a80502.jpg","https://i.pinimg.com/736x/eb/18/c7/eb18c707eecc272af360935ffb57ebf8.jpg","https://i.pinimg.com/736x/eb/18/c7/eb18c707eecc272af360935ffb57ebf8.jpg","https://i.pinimg.com/736x/c1/84/94/c18494c7eee49ba76d4c429687473532.jpg","https://i.pinimg.com/736x/c1/84/94/c18494c7eee49ba76d4c429687473532.jpg","https://i.pinimg.com/736x/d0/49/9f/d0499f16a0bb36301c2dc92e38834932.jpg","https://i.pinimg.com/736x/d0/49/9f/d0499f16a0bb36301c2dc92e38834932.jpg","https://i.pinimg.com/736x/33/48/e9/3348e9ba08a47c18d41203174152d1ea.jpg"]
let score = 0
let tries = 0
let newArray=[]
const cards= document.querySelectorAll(".cards")
const messageEl= document.querySelector("#message")
const resetBtnEl= document.querySelector("#reset")
const scoreEl=document.querySelector("#score")

////////////////////////////////
// Functions For Game Logic Here
const init=()=>
{
score= 0;
tries= 0;
render()
}

const render = () =>
{
updatecards();updateMessage()
}

const updatecards=()=>
{
card.forEach((eachcard,index)=>{
let random= Math.floor(Math.random()* card.length);
let oldCard=card[index];
card[index]=card[random];
card[random]=oldCard
})
}
const updateMessage=()=>{
  messageEl.textContent=`score: ${score} tries: ${tries}`
}


