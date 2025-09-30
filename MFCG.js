////////////////////////////////
// Global Variables Here

let cards = ["https://i.pinimg.com/1200x/f8/7d/1f/f87d1fd4c090d46a87590f4a56a80502.jpg","https://i.pinimg.com/1200x/f8/7d/1f/f87d1fd4c090d46a87590f4a56a80502.jpg","https://i.pinimg.com/736x/eb/18/c7/eb18c707eecc272af360935ffb57ebf8.jpg","https://i.pinimg.com/736x/eb/18/c7/eb18c707eecc272af360935ffb57ebf8.jpg","https://i.pinimg.com/736x/c1/84/94/c18494c7eee49ba76d4c429687473532.jpg","https://i.pinimg.com/736x/c1/84/94/c18494c7eee49ba76d4c429687473532.jpg","https://i.pinimg.com/736x/d0/49/9f/d0499f16a0bb36301c2dc92e38834932.jpg","https://i.pinimg.com/736x/d0/49/9f/d0499f16a0bb36301c2dc92e38834932.jpg","https://i.pinimg.com/736x/33/48/e9/3348e9ba08a47c18d41203174152d1ea.jpg"]
let score = 0
let tries = 3
let checkClicks=[]
const cardEls= document.querySelectorAll(".card img")
const messageEl= document.querySelector("#message")
const resetBtnEl= document.querySelector("#reset")
const scoreEl=document.querySelector("#score")


////////////////////////////////
// Functions For Game Logic Here
const init=()=>
{
score= 0;
tries= 3;
checkClicks=[];
render()
}

const render = () =>
{
updatecards();updateMessage()
}

const updatecards=()=>
{
cards.forEach((eachcard,index)=>{
let random= Math.floor(Math.random()* card.length);
let oldCard=cards[index];
cards[index]=cards[random];
cards[random]=oldCard
})
}
const updateMessage=()=>{
  messageEl.textContent=`score: ${score} tries: ${tries}`
}

const newClick=()=>{
  checkClicks=[]
}

const reset=(firstClick,secondClick) =>{
  cardEls[firstClick].src="https://i.pinimg.com/1200x/b9/5b/69/b95b69dba492dad85f098702c032c615.jpg";cardEls[secondClick].src="https://i.pinimg.com/1200x/b9/5b/69/b95b69dba492dad85f098702c032c615.jpg"
}

const matchCard = (firstClick,secondClick) => {
checkClicks= [firstClick,secondClick]
if (cards[firstClick]===cards[secondClick]){score++;updateMessage();newClick()}
;if(score===4){messageEl.textContent="You Win :)"}
else if(tries>=1){tries--;updateMessage();newClick();reset(firstClick,secondClick)}
else {tries=0 ;updateMessage();messageEl.textContent="You lose !"}
}

cardEls.forEach((singleCard,index)=>{
singleCard.addEventListener("click",()=>{
singleCard=cards[index];
checkClicks.push(index);
})}
)

