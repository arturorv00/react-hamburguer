import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.5,
  cheese: 0.5,
  meat: 1.5,
  basePrice: 4
};

class BurguerBuilder extends Component {
  state = {
    ingredients: null,
    ingredientsSumPrice: 0,
    isPurchasing: false,
    loading: false
  };

  componentDidMount() {
    axios
      .get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => console.log(error));
  };

  purchaseHandler = () => {
    this.setState({
      isPurchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      isPurchasing: false
    });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      totalPrice: INGREDIENT_PRICES.basePrice + this.state.ingredientsSumPrice,
      customer: {
        name: 'Arturo',
        address: '33126',
        email: 'arturorv00@hotmail.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  addIngredientHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const updatedIngredientsSumPrice =
      this.state.ingredientsSumPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      ingredientsSumPrice: updatedIngredientsSumPrice
    });
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] > 0) {
      const updatedCount = this.state.ingredients[type] - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const updatedIngredientsSumPrice =
        this.state.ingredientsSumPrice - INGREDIENT_PRICES[type];

      this.setState({
        ingredients: updatedIngredients,
        ingredientsSumPrice: updatedIngredientsSumPrice
      });
    }
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.isPurchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.state.ingredients}
              purchaseCanceled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              totalPrice={
                INGREDIENT_PRICES.basePrice + this.state.ingredientsSumPrice
              }
            />
          )}
        </Modal>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          totalPrice={
            INGREDIENT_PRICES.basePrice + this.state.ingredientsSumPrice
          }
          purchasable={this.state.ingredientsSumPrice > 0}
          orderClicked={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurguerBuilder;
