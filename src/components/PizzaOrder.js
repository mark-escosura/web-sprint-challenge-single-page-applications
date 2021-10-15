import React from 'react'

function PizzaOrder({ details }) {
  if (!details) {
    return <h3>Working fetching your Pizza&apos;s details...</h3>
  }

  return (
    
    <div className='pizza container'>
        
      <h2>{details.name}</h2>
      
      {!!details.instruction && !!details.instruction.length &&
      <p>Instruction: {details.instruction}</p>}

      {!!details.size && !!details.size.length &&
      <p>Size: {details.size}</p>}

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          
            {details.toppings.map((item, idx) => 
            <li key={idx}>{item}</li>)}
        
        </div>
      }
    </div>
  )
}

export default PizzaOrder;