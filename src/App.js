import "./App.css";
import AddToCart from "./AddToCart";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="add-to-cart-app">
          <AddToCart />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps) (App);
