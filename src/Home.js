import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'; // import

function Home() {
  
  const history = useHistory(); // grab
  
  const routeToOrder = () => {
    history.push("/order-pizza"); // push
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src="Assets/Pizza.jpg"
        alt='Pizza'
      />
      <button
        onClick={routeToOrder}
        className='md-button order-button'
      >
        Pizza?
      </button>
    </div>
  )
}

export default Home;