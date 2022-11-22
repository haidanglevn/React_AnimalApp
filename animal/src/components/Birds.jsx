import React, { Component } from "react";
import Card from "../Card";
import birds from "../birdData"
import NavBar from "./NavBar";

class Birds extends Component {
  state = {
    birds: birds,
    search: "",
  };
  deleteHandler = (name) => {
    const updatedArray = this.state.birds.filter(
      (bird) => bird.name !== name
    );
    this.setState({ birds: updatedArray });
    console.log(updatedArray);
  };
  addLikeHandler = (name) => {
    console.log(name, "is like");
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name == name) {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return bird;
        }
      });
      return { birds: updatedArray };
    });
  };
  removeLikeHandler = (name) => {
    console.log(name, "is like");
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name == name) {
          return { ...bird, likes: bird.likes - 1 };
        } else {
          return bird;
        }
      });
      return { birds: updatedArray };
    });
  };
  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  randomLike = () => {
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        return {
          ...bird,
          likes: (bird.likes = Math.round(Math.random() * 50)),
        };
      });
      return { birds: updatedArray };
    });
  };

  render() {
    const birdFilter = this.state.birds.filter((bird) => {
      return bird.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    const birdsList = birdFilter.map((bird) => (
      <Card
        key={bird.name}
        name={bird.name}
        likes={bird.likes}
        delete={() => this.deleteHandler(bird.name)}
        addLikes={() => this.addLikeHandler(bird.name)}
        removeLikes={() => this.removeLikeHandler(bird.name)}
      />
    ));

    return (
      <div className="App">
        <NavBar />
        <h1 className="title">
          Presenting to you ... {birdsList.length} birds
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

        <div className="card-container">{birdsList}</div>
      </div>
    );
  }
}

export default Birds;
