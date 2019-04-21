function add(a,b)
{
    return a+b;
}
function substract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    if (b === 0)
    {
        return NaN;
    }
    return a/b;
}

function operate(operator, a,b)
{
    return window[operator](parseFloat(a), parseFloat(b));
}

let show = false;
let display = document.querySelector("#display");
display.textContent = "0";
const digits = document.querySelectorAll(".digit");
digits.forEach(digit => {
    digit.addEventListener("click", function()
    {
        if (show)
        {
            display.textContent = "0";
            show = false;
        }
        if (display.textContent.length < 20)
        {
            if (display.textContent === "0" && digit.getAttribute("id") !== "0")
            {
                display.textContent = "";
            }
            if (display.textContent !== "0" || digit.getAttribute("id") !== "0")
            {
                display.textContent += digit.getAttribute("id");
            }
        }
    });
});

const operators = document.querySelectorAll("#buttons button");
let ans = 0;
let operat = "";
operators.forEach(operator => {
    operator.addEventListener("click", function(){
        if (operat === "")
        {
            ans = display.textContent;
            operat = operator.getAttribute("id");
            display.textContent = ans;
            show = true;
        }
        else 
        {
            ans = operate(operat, ans, display.textContent);
            operat = operator.getAttribute("id");
            display.textContent = ans;
            show = true;
        }
    });
});
const equal = document.querySelector("#equals");
equal.addEventListener("click", function() {
    if (operat !== "")
    {
        ans = operate(operat, ans, display.textContent);
        display.textContent = ans;
        operat = "";
        ans = 0;
        show = true;
    }
});
const clear = document.querySelector("#clear");
clear.addEventListener("click", function(){
    operat = "";
    ans = 0;
    display.textContent = "0";
});
const dot = document.querySelector("#dot");
dot.addEventListener("click", function(){
    if (!display.textContent.includes("."))
    {
        display.textContent += ".";
    }
});
const back = document.querySelector("#backspace");
back.addEventListener("click", function(){
    if (display.textContent !== "0")
    {
        display.textContent = display.textContent.slice(0,display.textContent.length-1);
        if (display.textContent === "")
        {
            display.textContent = "0";
        }
    }
});