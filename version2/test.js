// VERSION 2

/*
1. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// For implementing ChartsLibrary I used direct script code of Chart.js.
//  After inserting the script code before my test.js file, I inserted HTML a Canvas
//  with an id of "myChart". Then with DOM manipulation I select myChart Canvas and create
//  a "bar" type Chart in it. I use the sample code for chart but if we want to change the 
//  values of chart we can change the "data" values or "labels".
/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM 
- Creates an unordered list for each book

Use the following array of objects:

const books = [
  {
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL:
      'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL:
      'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
  },
  {
    bookName: 'Refactoring',
    author: 'Kent Beck & Martin Fowler',
    coverUrl:
      'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg',
  },
];

function addingBookList (bookArr){
  const ul = document.createElement('ul');

  for (let i=0;i<3;i++) {
      let li = document.createElement('li');
      
      li.innerHTML = `Book Name: ${bookArr[i].bookName}<br>
                      Author: ${bookArr[i].author}<br>
                      Cover: <img src=${bookArr[i].coverURL} width="200px">
                      `
      ul.appendChild(li);     
  };
  document.body.appendChild(ul); 
}
addingBookList(books);

/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
  API is set of methods of communication between software components. In Js we are focusing on WEB-API's, which
  allow a server interact(communicate) with a third-party software. In this case web-server is using
  HTTP Requests to communicate available URL containing JSON data. JSON (JavaScript Object Notation) is used 
  format storing and transporting data. JSON oftenly used by server to send data to a web page.

- How does this relate to your HackYourRepo project?
  We worked as a Homework in JS3 HackYourRepo project for 3 weeks. As a start I can say that it was a real hard project.
  Its the first time we worked on written codes.
  In this project we have a GitHub-users api in JSON format. Project goals are sorting and managing users of GITHub.
  We made an HTTP-Request to GitHub-users-Api so we can take the data of users. Then by using this JSON format data,
  we manage gitHUB users to create a webpage to see the information of them. (Select-element and contributors)

Explain each in 200 words or less. 
*/

/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://jsonplaceholder.typicode.com/users
- Make use of async/await syntax
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await

Solution:---------

const URL = "https://jsonplaceholder.typicode.com/users/1";

async function getInfo() {
    const response =  await fetch(URL);
    const data = response.json()
    return data;
}

getInfo()
.then((data) => {
    console.log(data);
    const ul = document.createElement('ul');
    
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.innerText = `Name: ${data.name}`; 
    li2.innerText = `E-mail: ${data.email}`; 
    li3.innerText = `City: ${data.address.city}`;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    document.body.appendChild(ul);
    

})

/*
5.
a) Create a class, called Animal, that includes:
- A constructor method
- "type", "color", "size" properties
- 1 additional method, called "getType", which returns the type

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
Solution:------------------

class Animal{
  constructor(type, color, size){
    this.type = type;
    this.color = color;
    this.size = size;
  }

  getType(){
    return this.type;
  }
}

const dog1 = new Animal("pet", "green", "medium");
console.log(dog1);
console.log(dog1.getType());

// c - Classes in OOP is so important and useful. We can define a class with constructor(properties) 
//      and methods as functions in it. With just a simple line we can create and manage lots of class
//      easily. Also best usage of Classes in JS is using Parent and Child (Inheritance) classes. 
//      A child class can use properties and methods of Parent class (Polymorphism). By this way we can create 
//      and manage a class tree and define-use lots of constructor properties and methods.
---------------------------------------
/*
6.
Write a JavaScript function that:
- Accepts a string of 4 words (all lowercase letters) as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '

Solution: ------------

function upperCaseStr(str){
  var firstArray = str.split(' ');
  var newArray = [];

  for (let x=0;x<firstArray.length;x++){
    newArray.push(firstArray[x].charAt(0).toUpperCase()+firstArray[x].slice(1));
  }
  return newArray.join(' ');
}
console.log(upperCaseStr("the quick brown fox"));

*/
