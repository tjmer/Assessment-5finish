const people = [{
  "id": 1,
  "name": "William Phillips",
  "age": 23
},
{
  "id": 2,
  "name": "Jenny Pops",
  "age": 25
},
{
  "id": 3,
  "name": "Phillip Williams",
  "age": 45
},
{
  "id": 4,
  "name": "Sally Jones",
  "age": 32
},
{
  "id": 5,
  "name": "Jorge Lopez",
  "age": 55
}
]

let globalId = 6

module.exports = {
  getFortune: (req, res) => {
    const fortunes = ["A fresh start will put you on your way.", "A lifetime friend shall soon be made.", "A person full of words not deeds is like a garden full of weeds.",
       "It takes courage to admit fault.", "Observe all men, but most of all yourself.", "success is a journey, not a destination.",
        "The small courtesies sweeten life, the greater ennoble it.", "The weather is wonderful", "You are busy, but you are happy.", 
        "You look pretty.", "You never know who you touch.", "Your talents will be recognized and suitalbly rewarded."];
      
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
      
    res.status(200).send(randomFortune)
    },
  getComplement: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];
      
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
      
    res.status(200).send(randomCompliment);
        
  },
  allPeople: (req,res)=>{
    res.status(200).send(people)
  },
  addPerson: (req,res)=> {
    let {name, age} = req.body
    let newpep = {
        id: globalId,
        name,
        age
    }
    people.push(newpep)
    res.status(200).send(people)
    globalId++
  },
  deletePerson: (req, res) => {
    let index = people.findIndex(elem => elem.id === +req.params.id)
    people.splice(index, 1)
    res.status(200).send(people)
  }
}