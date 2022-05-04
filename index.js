const characterNames = ["Michael", "Pam", "Jim", "Dwigt", "Kevin"]
const locationNumbers = [5, 2, 7, 3, 6, 9, 1]

//array iteration:
//.indexOf, .find, .filter, .map, .reduce, .foreach

function index() //returns first index from array
{
    const p = document.createElement('p')
    p.innerText = characterNames.indexOf("Jim")
    document.body.appendChild(p)
}

function find() //returns first element that matches
{
    const jim = characterNames.find(element => element == "Jim");
    document.body.append(jim)
}

function filter() //returns every name larger than 3
{
    const result = characterNames.filter(name => name.length > 3);
    const body = document.querySelector("body")
    body.append(result)
}

function map() //copies array and triples each number
{
    const tripleNums = locationNumbers.map((num) => num * 3)
    document.body.append(tripleNums)
}

function reduce() //adds all numbers together
{
    const sum = locationNumbers.reduce(function (p, c)
    {
        return p + c;
    })
    document.body.append(sum)
}

function forEach() //goes through each name and says hello to them
{
    const ul = document.createElement('ul')
    const div = document.querySelector('div')
    div.append(ul)
    characterNames.forEach(function (name)
    {
        const li = document.createElement('li')
        li.innerText = name
        console.log(li)
        ul.append(li)
    })
}


//does something after page loads
document.addEventListener('DOMContentLoaded', (event) => {
    forEach();
});