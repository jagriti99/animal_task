import React, { Component } from "react";
import Card from "./Card";
import { animals } from "./animals";
import "./Card.css";
class App extends Component {
  state = {
    animals: animals,
    search: "",
  };

  removeHandler = (name) => {
    const updateArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: updateArray });
  };

  addLikesHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  animalsList = animals.map((animal) => (
    <Card key={animal.name} name={animal.name} likes={animal.likes} />
  ));
  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    const animalsList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          removeCard={() => this.removeHandler(animal.name)}
          addLikes={() => this.addLikesHandler(animal.name)}
        />
      );
    });

    return (
      <div>
        <h1>{this.state.animals.length}Animals</h1>
        <input type="text" onChange={this.searchHandler}></input>
        <div className="animalList">{animalsList}</div>
      </div>
    );
  }
}

export default App;
