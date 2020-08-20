import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {
  //Acá el return puede ser implícito tranquilamente si uso () en vez de {} y evito el return
  return <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
    </div>
}

export default CollectionItem;
