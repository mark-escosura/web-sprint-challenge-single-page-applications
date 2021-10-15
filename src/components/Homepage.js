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
      {/* <img
        className='home-image'
        // src=""
        // alt=''
      /> */}
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