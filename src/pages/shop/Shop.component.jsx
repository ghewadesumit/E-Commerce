import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  covertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
class ShopPage extends React.Component {
  unsubscriveFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    //get the collection reference of the data you want
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    console.log("Render for shop component");
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
