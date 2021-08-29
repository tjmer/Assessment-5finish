
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    })
}

const peopleBox = document.querySelector('#people-info')
const pepBack = ({ data: people}) => displayPeople(people)
const form = document.querySelector('form')

const infoPlace = document.querySelector('#planetNames')
const peramsInput = document.getElementById('param-input')
const getInfo = document.querySelector('#get-info')

const getPeople = ()=> axios.get("http://localhost:4000/api/people/").then(pepBack)
const addPerson = body => axios.post('http://localhost:4000/api/people/', body).then(pepBack)
const removePerson = id => axios.delete(`http://localhost:4000/api/people/${id}`).then(pepBack)

getInfo.addEventListener('click', planetInfo)
form.addEventListener('submit', submitPerson)



function planetInfo (req, res){
  while (infoPlace.firstChild) {
    infoPlace.removeChild(infoPlace.firstChild)
  }
  if (peramsInput.value != 0){
    axios.get(`https://swapi.dev/api/planets/${peramsInput.value}`).then(function(res){
      const name = res.data.name
      const rotate = res.data.rotation_period
      const climate = res.data.climate
      const terrain = res.data.terrain
      const pop = res.data.population
      const planetName = document.createElement('h2')
      const planetrotate = document.createElement('h4')
      const planetClime = document.createElement('h4')
      const planetter = document.createElement('h4')
      const planetPop = document.createElement('h4')
      
      planetName.textContent = name
      planetrotate.textContent = ("Rotation: " + rotate +"hrs")
      planetClime.textContent = ("Climate: " + climate)
      planetter.textContent = ("Terrain: " + terrain)
      planetPop.textContent = ("Population: " + pop)
      
      infoPlace.appendChild(planetName)
      infoPlace.appendChild(planetrotate)
      infoPlace.appendChild(planetClime)
      infoPlace.appendChild(planetter)
      infoPlace.appendChild(planetPop)

      peramsInput.value = 0

    })
  } else{
    const error = document.createElement('h3')
    error.textContent = ('Need to select a planet!')
    infoPlace.appendChild(error)
  }
  }

  function submitPerson(e){
    e.preventDefault()

    let name = document.querySelector('#personName')
    let age = document.querySelector('#personAge')

    let bodyObj = {
      name: name.value,
      age: age.value
    }

    addPerson(bodyObj)

    name.value = ''
    age.value = ''
  }

function peopleStuff (people){
  const displayPlate = document.createElement('div')

  displayPlate.innerHTML = `<section id = "box"><h4 id="person">${people.name}</h4
  <p>Age: ${people.age}</p>
  <button id = "remove-button" onclick='removePerson(${people.id})'>Remove</button>
  </section>
  `
  peopleBox.appendChild(displayPlate)
}

function displayPeople(arr){
  peopleBox.innerHTML = ``
  for (let i = 0; i < arr.length; i++){
    peopleStuff(arr[i])
  }
}

getPeople()