import { animals } from "./animals";
import React from "React";
import ReactDOM from "ReactDOM";

// añadimos un titulo que por ahora estara vacio
const tittle = "";

const showBackground = true;

//ahora hacemos el fondo
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displaytFact}
    />
  );
}

//luego creamos otra constante para que se compile - va a contener el h1
function displayFacts(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.lenght);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = funfacts;
}

const animalFacts = (
  <div>
    <h1>{tittle || "Click on animal for a fun fact"}</h1>
    {showbackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementbyId("root"));

React.render(animalFacts, document.getElementById("root"));
