const characterNames = ["Michael", "Holly", "Pam", "Jim", "Dwigt", "Darryl", "Andy", "Stanley", "Phyllis", "Angela", "Kevin", "Oscar", "Toby", "Kelly", "Ryan", "Holly"]
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
    characterNames.forEach(name => document.body.append("hello " + name))
}
