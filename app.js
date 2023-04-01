//const h1 = document.getElementById( "h1");

//h1.addEventListener( "click", function(){
    //console.log("connected ");})


    const run = document.getElementById( "run" );
    const wicket = document.getElementById( "wicket" );
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const six = document.getElementById("six");
    const out = document.getElementById("out");

window.onload = function (){
    
    main()
};

function main (){
addRun(one)
addRun(two)
addRun(three)
addRun(four)
addRun(six)
out.addEventListener( "click", function(){
    if(wicket.innerText < 10 ){
        wicket.innerText++;
    }
   
});
}

//parseInt used for number and text convert in number
function addRun (domId){
    domId.addEventListener("click", function () {
        if(wicket.innerText < 10 ){
            let tempoRun = parseInt(run.innerText);
            let newRun = parseInt(domId.innerText)
            run.innerText = `${ tempoRun + newRun }`
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.innerText = `${newRun}`;
            li.appendChild(button);
            ball[0].remove();
            over.appendChild(li);
        }
       
      })
}