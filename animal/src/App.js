import "./App.css";
import { Component } from "react";
import Card from "./Card.js";
import animals from "./animals.js";

class App extends Component {
  state = {
    animals: animals,
  };
  deleteHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: updatedArray });
    console.log(updatedArray);
  };
  likeHandler = (name) => {
    console.log(name, "is like");
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name == name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return { animals: updatedArray };
    });
  };

  render() {
    const animalsList = this.state.animals.map((animal) => (
      <Card
        key={animal.name}
        name={animal.name}
        likes={animal.likes}
        delete={() => this.deleteHandler(animal.name)}
        addLikes={() => this.likeHandler(animal.name)}
      />
    ));
    return (
      <div className="App">
        <h1 className="title">There are {animalsList.length} animals</h1>
        <div className="card-container">{animalsList}</div>
      </div>
    );
  }
}

export default App;
