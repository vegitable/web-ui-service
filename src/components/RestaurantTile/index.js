import React, { Component } from 'react';
import DishList from '../../containers/DishesList';
import './RestaurantTile.css';

class Restaurant extends Component {
  state = {
    dishesVisible: false,
    veganClicked: false,
    vegetarianClicked: false,
  };

  veganButtonClicked = () => {
    this.setState({
      veganClicked: !this.state.veganClicked
    });
    console.log(this.state.veganClicked);
  };

  vegetarianButtonClicked = () => {
    this.setState({
      vegetarianClicked: !this.state.vegetarianClicked
    });
    console.log(this.state.vegetarianClicked);
  };

  render() {
    return (
      <div className="restaurant">
        <div className="restaurantName" >{this.props.restaurantData.name}</div>

        <div className="ratingContainer">
          <div className="iconContainer" >
            <div>{this.props.restaurantData.rating}</div>
            <img src="images/icons/star-orange.png" className="" alt="star" />
          </div>
          <div className="iconContainer">
            <div>{this.props.restaurantData.postcode}</div>
            <img src="images/icons/map-pin-orange.png" className="" alt="pin" />
          </div>
          <div className="iconContainer">
            <div>{this.props.restaurantData.dishes.length}</div>
            <img src="images/icons/dish-orange.png" className="" alt="dish" />
          </div>
        </div>

        <button className={ this.state.veganClicked ?
          "buttonSelected"
          : "buttonUnselected"
        } onClick={() => this.veganButtonClicked()} >
          Vegan
        </button>
        <button className={ this.state.vegetarianClicked ?
          "buttonSelected"
          : "buttonUnselected"
        } onClick={() => this.vegetarianButtonClicked()} >
          Vegetarian
        </button>
        { this.state.veganClicked || this.state.vegetarianClicked ? 
        <DishList 
          dishData={this.props.restaurantData.dishes} 
          veganOnly={ this.state.veganClicked && !this.state.vegetarianClicked} /> 
        : null }
      </div>
    );
  }
};

export default Restaurant;
