const container = document.querySelector("#container");
const squares = container.querySelectorAll(".square");
const colorInfoText = document.querySelector("#colorInfo");
const navigation = document.querySelector("#navigation")
 
let targetIndex;
let colorList = new Array();


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

    event.target.classList.remove("btnMouseOver");
}

function OnClickEventHandler(event)
{
    if(event.target.classList.contains("square") === false)
        return;
       

    if(event.target.classList.contains(targetIndex))
    {
        console.log("Correct!");
        setSquareColor();
    }
    else
    {
        console.log("NOOOOOOOOOOOO");
        event.target.classList.add("hidden");
    }
}

function getRandomRGB()
{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}

function setSquareColor()
{
    targetIndex = Math.floor( Math.random() * squares.length);

    squares.forEach((currentValue, currentIndex) => {
        const color = getRandomRGB()
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

    setSquareColor();
}

init();