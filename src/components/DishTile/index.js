import React from 'react';
import './DishTile.css';

const DishTile = (props) => {
  const {
    dishData,
  } = props;

  return (
    <div className={ dishData.vegan ? 'dishTileVegan' : 'dishTile' }>
      <div className="dishName" >{dishData.name}</div>
      <div className="dishDescription" >{dishData.description}</div>
      <div className="dishPrice" >{dishData.price}</div>
      { dishData.vegan ? <div className="dishVegan" >Vegan!</div> : null }
    </div>
  )
};

export default DishTile;