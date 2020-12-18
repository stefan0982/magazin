import React           from 'react'
import { list } from 'cart-localstorage'
import CartItem        from './CartItem'

class Items
  extends React.Component {
  render() {
    return (
      <>
        { list && list().map( item => {
          return (
            <CartItem
              name={ item.name }
              cod={ item.cod }
              price={ item.price }
              quant={ item.quantity }
              id={ item.id }
              key={item.id}
              image={item.img}
            />
          )
        } ) }

      </>
    )
  }

}

export default Items
