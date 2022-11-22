import React, { Component } from "react";
import Card from "../Card";
import animals from "../animalData";
import NavBar from "./NavBar";

class Animals extends Component {
  state = {
    animals: animals,
    search: "",
  };
  deleteHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: updatedArray });
    console.log(updatedArray);
  };
  addLikeHandler = (name) => {
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
  removeLikeHandler = (name) => {
    console.log(name, "is like");
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name == name) {
          return { ...animal, likes: animal.likes - 1 };
        } else {
          return animal;
        }
      });
      return { animals: updatedArray };
    });
  };
  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  randomLike = () => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        return {
          ...animal,
          likes: (animal.likes = Math.round(Math.random() * 50)),
        };
      });
      return { animals: updatedArray };
    });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    const animalsList = animalFilter.map((animal) => (
      <Card
        key={animal.name}
        name={animal.name}
        likes={animal.likes}
        delete={() => this.deleteHandler(animal.name)}
        addLikes={() => this.addLikeHandler(animal.name)}
        removeLikes={() => this.removeLikeHandler(animal.name)}
      />
    ));

    return (
      <div className="App">
        <NavBar/>
        <h1 className="title">
          Presenting to you ... {animalsList.length} animals
        </h1>
        <input
          type={"text"}
          placeholder={"Search"}
          onChange={this.searchHandler}
        />
        <span
          className="material-symbols-outlined random"
          onClick={this.randomLike}
        >
          casino
        </span>

        <div className="card-container">{animalsList}</div>
      </div>
    );
  }
}

export default Animals;
