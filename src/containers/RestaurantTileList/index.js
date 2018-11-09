import React, {Fragment} from 'react';
import RestaurantTile from '../../components/RestaurantTile';
import './RestaurantTileList.css';

const RestaurantList = (props) => {
  const {
    restaurantData,
  } = props;

  const renderedItems = (restaurantData).map((restaurant, index) => (
    <Fragment key={restaurant._id}>
    {console.log(restaurantData)}
      <RestaurantTile restaurantData={restaurant} />
    </Fragment>
  ));

  return (
    <div className="restaurantList">
      {renderedItems}
    </div>
  );
};

export default RestaurantList;