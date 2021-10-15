import React from 'react'

function PizzaForm(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

  const onSubmit = evt => {

    evt.preventDefault() // prevents the form from refreshing
    submit()

  }

  const onChange = evt => {

    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);

  }
  

  return (
    <form id='pizza-form' className='container' onSubmit={onSubmit}>

      <div className='form-group inputs'>
        <h4>🐑 Lambda Eater 🐑</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}

        <label>Name&nbsp;
          <input
            id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
            placeholder="Name"
          />
        </label>

        <label>Instruction
          <input
            id='special-text'
            value={values.instruction}
            onChange={onChange}
            name='instruction'
            type='text'
            placeholder="(optional)"
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}

        <label>Size

          <select
            id='size-dropdown'
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select Size -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='extra-large'>Extra Large</option>
          </select>

        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>🍕 Toppings 🍕</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        
        <label>Pepperoni

          <input 
            type="checkbox"
            name="pepperoni"
            onChange={onChange}
            checked={values.pepperoni}
          />

        </label>

        <label>Onions

        <input 
            type="checkbox"
            name="onions"
            onChange={onChange}
            checked={values.onions}
          />

        </label>

        <label>Olives

        <input 
            type="checkbox"
            name="olives"
            onChange={onChange}
            checked={values.olives}
          />

        </label>

        <label>Ham

        <input 
            type="checkbox"
            name="ham"
            onChange={onChange}
            checked={values.ham}
          />

        </label>

        <label>Pineapple

        <input 
            type="checkbox"
            name="pineapple"
            onChange={onChange}
            checked={values.pineapple}
          />

        </label>

        <label>Sausage

        <input 
            type="checkbox"
            name="sausage"
            onChange={onChange}
            checked={values.sausage}
          />

        </label>

        <div className='form-group submit'>


            <button 
                id='order-button' 
                disabled={disabled}
                className='md-button'
            >

                Submit

            </button>

            <div className='errors'>
            
                <div>{errors.name}</div>
                <div>{errors.instruction}</div>
                <div>{errors.size}</div>
                <div>{errors.toppings}</div>

            </div>
        </div>

      </div>
    </form>
  )
}

export default PizzaForm;