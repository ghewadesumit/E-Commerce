import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  covertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
class ShopPage extends React.Component {
  unsubscriveFromSnapshot = null;

  componentDidMount() {
    //get the collection reference of the data you want
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      console.log("snapshot of collection ref is ", snapshot);
      covertCollectionsSnapshotToMap(snapshot);
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

export default ShopPage;
