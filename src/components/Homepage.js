import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'; // import

function Homepage() {
  
  const history = useHistory(); // grab
  
  const routeToOrder = () => {
    history.push("/pizza"); // push
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src="https://images.unsplash.com/photo-1593504049359-74330189a345?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
        alt='Pizza'
      />
      <button
        onClick={routeToOrder}
        className='md-button'
        id='order-pizza'
      >
        Pizza?
      </button>
    </div>
  )
}

export default Homepage;