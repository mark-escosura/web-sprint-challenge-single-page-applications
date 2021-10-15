import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/FormSchema';

import Homepage from './components/Homepage';
import PizzaForm from "./components/PizzaForm";
import PizzaOrder from "./components/PizzaOrder";

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  instruction: '',
  ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  onions: false,
  olives: false,
  ham: false,
  pineapple: false,
  sausage: false
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialPizzaOrders = [] // will eventually hold our future orders
const initialDisabled = true // for the button

const App = () => {

  /** GETTERS **/

  const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrders);
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)
  
  /** HELPERS **/

  const getPizzaOrders = () => {

    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setPizzaOrders([res.data, ...pizzaOrders]); // we want to add our friends to state
      })
      .catch(err => {
        console.error(err);
      })
  }

  const postNewPizzaOrder = newPizzaOrder => {
    axios.post('https://reqres.in/api/orders', newPizzaOrder ) // post takes two arguments (apiLink, newFriend)
        .then(res => {
          setPizzaOrders([res.data, ...pizzaOrders]); // can you explain why they passed in two arguments here.
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          setFormValues(initialFormValues);
        })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const pizzaFormSubmit = () => {

    const newPizzaOrder = {
      name: formValues.name.trim(),
      instruction: formValues.instruction.trim(),
      size: formValues.size.trim(),
      toppings: [
        'pepperoni',
        'onions',
        'olives',
        'ham', 
        'pineapple',
        'sausage']
          .filter(toppings => !!formValues[toppings])
    }
    postNewPizzaOrder(newPizzaOrder);
  }

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
          {/* Header */}
          {/* Header */}
          {/* Header */}
        <h1 className='pizza-header'>Lambda Eats</h1>
          {/* NavLinks */}
          {/* NavLinks */}
          {/* NavLinks */}
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
        <Route path="/pizza">
          <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={pizzaFormSubmit}
          disabled={disabled}
          errors={formErrors}  
          />
          {pizzaOrders.map((pizza) => {
              return(
                <PizzaOrder key={pizza.id} details={pizza} />
              )
            })
          } 
        </Route>
        <Route exact path="/"> 
          <Homepage />
        </Route>
        
    </div>
  );
};

export default App;