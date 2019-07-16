const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor")

/*====================== Com ======================*/
function getComChoice(){
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}
/*====================== Change variable ======================*/
function convert(letter){
    if(letter === "rock") return "rock.png";
    if(letter === "paper") return "paper.png";
    return "scissor.png";
}
/*====================== Change Image ======================*/
function change(youChoice, comChoice){
    const image_you = document.getElementById("you-use");
    const image_com = document.getElementById("com-use");
    image_you.src = convert(youChoice);
    image_com.src = convert(comChoice);

}
/*====================== Win ======================*/
function win(youChoice, comChoice){
    const youChoice_div = document.getElementById(youChoice);
    result_p.innerHTML = "You're Win"
    youChoice_div.classList.add('green-glow');
    setTimeout(() => youChoice_div.classList.remove('green-glow'), 500);
    change(youChoice, comChoice);
}
/*====================== Lose ======================*/
function lose(youChoice, comChoice){
    const youChoice_div = document.getElementById(youChoice);
    result_p.innerHTML = "You're Lose"
    youChoice_div.classList.add('red-glow');
    setTimeout(() => youChoice_div.classList.remove('red-glow'), 500);
    change(youChoice, comChoice);
}
/*====================== Draw ======================*/
function draw(youChoice, comChoice){
    const youChoice_div = document.getElementById(youChoice);
    result_p.innerHTML = "Draw"
    youChoice_div.classList.add('orange-glow');
    setTimeout(() => youChoice_div.classList.remove('orange-glow'), 500);
    change(youChoice, comChoice);
}
/*====================== Check ======================*/
function game(youChoice){
    const comChoice = getComChoice();
    switch(youChoice + comChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(youChoice, comChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(youChoice, comChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(youChoice, comChoice);
            break;
    }
}
/*====================== When-Click ======================*/
function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
    })

    paper_div.addEventListener('click', function(){
        game("paper")
    })

    scissor_div.addEventListener('click', function(){
        game("scissor")
    })
}

main();
