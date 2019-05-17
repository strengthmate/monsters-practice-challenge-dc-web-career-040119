document.addEventListener('DOMContentLoaded', function() {
  let pageNum = 1
    fetchMonsters(pageNum)

  let forwardButton = document.getElementById("forward")
  let backButton = document.getElementById("back")

  forwardButton.addEventListener('click', function() {
    pageNum++
    fetchMonsters(pageNum)
  })

  backButton.addEventListener('click', function() {
    pageNum--
    fetchMonsters(pageNum)
  })

});

function fetchMonsters(num) {
    console.log(num)
  return fetch(`http://localhost:3000/monsters/?_limit=50&_page=${num}`)
    .then(resp => resp.json())
    .then(json => renderMonsters(json));
  }

// function renderCard(){
// // for loop for each monster data. Call in render functions
//
// let h2 = document.createElement('h2')
// let h3 = document.createElement('h3')
// let h4 = document.createElement('h4')
// h2.innerText = object.name
// h3.innerText = object.age
// h4.innerText = object.description
// let monsterCard = document.createElement('div')
// monsterCard.id = object.id
// monsterCard.appendChild(h2),
// monsterCard.appendChild(h3),
// monsterCard.appendChild(h4)
// console.log(object);
//
//
//
// let h2 = document.createElement('h2')
// let h3 = document.createElement('h3')
// let h4 = document.createElement('h4')
// h2.innerText = monster.name
// h3.innerText = monster.age
// h4.innerText = monster.description
// let monsterCard = document.createElement('div')
// monsterCard.id = monster.id
// monsterCard.appendChild(h2),
// monsterCard.appendChild(h3),
// monsterCard.appendChild(h4)
// monsterContainer.appendChild(monsterCard)
//
//
// }

function renderMonsters(json){
  let monsterContainer = document.getElementById('monster-container')
  while (monsterContainer.firstChild) {
    monsterContainer.removeChild(monsterContainer.firstChild)
  }
  json.forEach(monster => {
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let h4 = document.createElement('h4')
    h2.innerText = monster.name
    h3.innerText = monster.age
    h4.innerText = monster.description
    let monsterCard = document.createElement('div')
    monsterCard.id = monster.id
    monsterCard.appendChild(h2),
    monsterCard.appendChild(h3),
    monsterCard.appendChild(h4)
    monsterContainer.appendChild(monsterCard)
  })
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', function(e) {
  handleCreateMonster()
  e.preventDefault()
})

function handleCreateMonster(){
  let nameInput = document.getElementById('name').value
  let ageInput = document.getElementById('age').value
  let descInput = document.getElementById('description').value
  let newMonster = {
    "Name": nameInput,
    "Age": ageInput,
    "Description": descInput
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newMonster)
  };
  fetch("http://localhost:3000/monsters", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let h2 = document.createElement('h2')
      let h3 = document.createElement('h3')
      let h4 = document.createElement('h4')
      h2.innerText = object.name
      h3.innerText = object.age
      h4.innerText = object.description
      let monsterCard = document.createElement('div')
      monsterCard.id = object.id
      monsterCard.appendChild(h2),
      monsterCard.appendChild(h3),
      monsterCard.appendChild(h4)
      console.log(object);
    })
}
