const container = document.querySelector("#container");
const squares = container.querySelectorAll(".square");
const colorInfoText = document.querySelector("#colorInfo");
const topArea = document.querySelector("h1");
const navigation = document.querySelector("#navigation")
const resetBtn = navigation.querySelector(".reset");
const modeBtns = navigation.querySelectorAll(".mode");

let squareNum;
let targetIndex;
let targetColor;
let colorList = new Array();
let gameover = false;


function onMouseOver(event)
{
    if(event.target.classList.contains("navBtn")==false)
        return; 

    event.target.classList.add("btnMouseOver");
}

function onMouseOut(event)
{
    if(event.target.classList.contains("navBtn")==false)
        return; 

    if(event.target.classList.contains("selected"))
        return; 

    event.target.classList.remove("btnMouseOver");
}

function setMode(isEasy)
{
    if(isEasy)
    {
        squareNum = 6;
        for(i=6; i<squares.length; i++)
        {
            squares[i].classList.add("notUse");
        }

        modeBtns[0].classList.add("selected");
        modeBtns[0].classList.add("btnMouseOver");

        modeBtns[1].classList.remove("selected");
        modeBtns[1].classList.remove("btnMouseOver");

    }
    else
    {
        squareNum = 9;
        for(i=6; i<squares.length; i++)
        {
            squares[i].classList.remove("notUse");
        }

        
        modeBtns[1].classList.add("selected");
        modeBtns[1].classList.add("btnMouseOver");

        modeBtns[0].classList.remove("selected");
        modeBtns[0].classList.remove("btnMouseOver");
    }

    resetColorGame();
}

function onClickModeBtn(event)
{
    modeBtns.forEach(btn => {
       
        if(btn === event.target)
        {
            btn.classList.add("selected");
            btn.classList.add("btnMouseOver");
        }
        else
        {
            btn.classList.remove("btnMouseOver");
            btn.classList.remove("selected");
        }  
    });

    if(event.target.textContent === "easy")
    {
        setMode(true);
    }
    else
    {
        setMode(false);
    }

    resetColorGame();
}

function onClickResetBtn(event)
{
    resetColorGame();
}

function OnClickEventHandler(event)
{
    if(gameover === true)
        return;

    if(event.target.classList.contains("square") === false)
        return;
       

    if(event.target.classList.contains(targetIndex))
    {
        gameover = true;
        setCorrectColor(event.target.style.backgroundColor);
    }
    else
    {
        event.target.classList.add("hidden");
    }
}

function generateRandomColor()
{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}

function setCorrectColor(color)
{
    topArea.style.backgroundColor = color;
    squares.forEach((square)=>
    {
        square.classList.remove("hidden");
        square.style.backgroundColor = color;

    });
}

function resetColorGame()
{
    gameover = false;

    topArea.style.backgroundColor = "#4682b4";
    targetIndex = Math.floor( Math.random() * squareNum);

    squares.forEach((currentValue, currentIndex) => {
        const color = generateRandomColor()
        colorList.push(color);
        currentValue.style.backgroundColor = color;

        if(currentIndex === targetIndex)
        {
            colorInfoText.textContent = color;
        }

        if(currentValue.classList.contains("hidden"))
            currentValue.classList.remove("hidden");
           
    });
}


function init()
{
    container.addEventListener("click", OnClickEventHandler);
    navigation.addEventListener("mouseover", onMouseOver);
    navigation.addEventListener("mouseout", onMouseOut);
    resetBtn.addEventListener("click", onClickResetBtn);

    modeBtns.forEach(element => {
        element.addEventListener("click", onClickModeBtn);
    });

    setMode(true);
}

init();