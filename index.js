document.addEventListener('DOMContentLoaded', function() {
  fetchMonsters()
})

function fetchMonsters() {
  return fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(resp => resp.json())
    .then(json => renderMonsters(json));
  }


function renderMonsters(json) {
  json.forEach(monster => {
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let h4 = document.createElement('h4')
    h2.innerHTML = `<h2>${monster.name}</h2>`
    h3.innerHTML = `<h3>Age: ${monster.age}</h3>`
    h4.innerHTML = `<h4>${monster.description}</h4>`
    document.body.appendChild(h2),
    document.body.appendChild(h3),
    document.body.appendChild(h4)
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
      h2.innerHTML = `<h2>${newMonster.name}</h2>`
      h3.innerHTML = `<h3>Age: ${newMonster.age}</h3>`
      h4.innerHTML = `<h4>${newMonster.description}</h4>`
      document.body.appendChild(h2),
      document.body.appendChild(h3),
      document.body.appendChild(h4)

      console.log(object);
    });
}
