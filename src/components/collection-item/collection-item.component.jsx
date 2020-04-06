import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import {
  CollectionFooterContainer,
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  PriceContainer,
  NameContainer,
} from "./collection-item.styles";
import { addItem } from "../../redux/cart/cart.actions";
const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <CollectionItemContainer key={id}>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton className="button" onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => {
    dispatch(addItem(item));
  },
});

export default connect(null, mapDispatchToProps)(CollectionItem);
