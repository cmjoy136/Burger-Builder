import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,

}

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {}
    // }
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        buyable: false,
        buying: false,
    }

    updateBuyState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return  ingredients[igKey]
            })
            .reduce((sum, el) => {
                return  sum + el
            }, 0)
        this.setState({buyable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({ingredients: updatedIngredients,totalPrice: newPrice})
        this.updateBuyState(updatedIngredients)
    }

    deleteIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return
        }
        const updateCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount
        const priceSubtraction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceSubtraction
        this.setState({ingredients: updatedIngredients,totalPrice: newPrice})
        this.updateBuyState(updatedIngredients)
    }

    buyHandler = () => {
        this.setState({buying: true})
    }

    cancelBuyHandler = () => {
        this.setState({buying: false})
    }

    checkoutHandler =() =>{
        alert('you continue')
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
           <Aux>
               <Modal show={this.state.buying} modalClosed={this.cancelBuyHandler}>
                   <OrderSummary 
                   ingredients={this.state.ingredients}
                   cancel={this.cancelBuyHandler}
                   continue={this.checkoutHandler}/>
               </Modal>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls 
                price={this.state.totalPrice}
                add={this.addIngredientHandler}
                delete={this.deleteIngredientHandler}
                buyable={this.state.buyable}
                buy={this.buyHandler}
                disabled={disabledInfo}/>
           </Aux>
        )
    }
}

export default BurgerBuilder