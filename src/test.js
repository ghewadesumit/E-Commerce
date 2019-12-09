import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("au0xrxXj8rXLoKFBXf8A")
  .collection("cartItems")
  .doc("IJuJgbIZffIe8XyyiHan");
