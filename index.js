const STUFF = document.getElementById('in1');

async function SUBMIT(){
    await fetch('https://api.themotivate365.com/stoic-quote')
    .then(x => x.json())
    .then(y => {myDisplay(y,0);console.log(y)});
}



const myDisplay =(a)=>{
  
    STUFF.innerHTML = `"${a.quote}" <br>- ${a.author}`
}