import React from "react";
import Cole from "../assets/jCole.webp";
import TylerTheCreator from "../assets/TylerTheCreator.jpg";
import TheWeeknd from "../assets/TheWeeknd.webp";
import SZA from "../assets/SZA.jpg";
import Jhene from "../assets/Jhene.jpg";
import Doechii from "../assets/Doechii.webp";

class ParentComponent extends React.Component {
  state = {
    childComponentsImages: {
        1: 0,
        2: 0,
    },
  };

  imagesMale = [TylerTheCreator, TheWeeknd, Cole];
  imagesFemale = [Jhene, SZA, Doechii];

  handleChildClick = (childId) => {
    this.setState((prevState) => {
        if (childId === 1) {
            prevState.childComponentsImages[childId] = (prevState.childComponentsImages[childId] + 1) % this.imagesMale.length;
        } else if (childId === 2) {
            prevState.childComponentsImages[childId] = (prevState.childComponentsImages[childId] + 1) % this.imagesFemale.length;
        }
        return { childComponentsImages: prevState.childComponentsImages };
    });
  };

  render() {
    return (
      <div>
        <ChildComponent
            id={1}
            title = "My Top 3 Male Artist"
            imageURL={this.imagesMale[this.state.childComponentsImages[1]]}
            onButtonClick={this.handleChildClick}
        />
        <ChildComponent
            id={2}
            title = "My Top 3 Female Artist"
            imageURL={this.imagesFemale[this.state.childComponentsImages[2]]}
            onButtonClick={this.handleChildClick}
        />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
    handleClick = () => {
        this.props.onButtonClick(this.props.id);
    };

    render() {
        return (
            <div> 
                <h3> {this.props.title} </h3>
                <img src={this.props.imageURL} 
                    alt= "" 
                    style={{ width: "300px", height: "300px" }} 
                />
                <br />
                <button onClick={this.handleClick}>Change Image</button>
            </div>
        );
    }
}

export default ParentComponent;

