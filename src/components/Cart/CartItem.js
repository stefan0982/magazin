import React, { useState }  from 'react'
import Divider              from '@material-ui/core/Divider'
import { Link }             from 'gatsby'
import { remove, quantity } from 'cart-localstorage'
import './styles.css'
import IconButton           from "@material-ui/core/IconButton";
import AddIcon              from "@material-ui/icons/Add";
import RemoveIcon           from "@material-ui/icons/Remove";
import CancelIcon from '@material-ui/icons/Cancel';

const CartItem = ( { name, cod, price, id, quant, image } ) => {
  const [itemQuantity, setQuantity] = useState(quant);
  return (
      <>
        <div className="cart">
          <ul className="cartWrap">
            <li className="items even">
              <div className="infoWrap">
                <div className="cartSection">
                  <img
                      src={image}
                      alt=""
                      className="itemImg"
                  />
                  {/*codul*/}
                  {/*<p className="itemNumber">{ cod }</p>*/}
                  <h4>{name}</h4>
                  <p><span>{itemQuantity} buc.</span> x {price} </p>
                  <p> | total: {itemQuantity * price} mdl</p>
                  <div>
                    <Link to="/cart#changed">
                      <IconButton aria-label="add"
                                  onClick={() => {
                                    setQuantity(itemQuantity + 1)
                                    quantity(id, 1)
                                  }}>
                        <AddIcon style={{ fontSize: 13 }}/>
                      </IconButton>
                    </Link>
                    <IconButton aria-label="value"
                                disabled
                                style={{ fontSize: 13, color: `rgba(0, 0, 0, 0.54)` }}
                    >
                      {itemQuantity}
                    </IconButton>
                    <Link to="/cart#changed">
                      <IconButton aria-label="remove"
                                  onClick={() => {
                                    setQuantity(itemQuantity - 1)
                                    quantity(id, -1)
                                  }}
                                  disabled={itemQuantity <= 1}>
                        <RemoveIcon style={{ fontSize: 13 }}/>
                      </IconButton>
                    </Link>
                  </div>
                </div>
                <div className="prodTotal cartSection">
                  <p>{itemQuantity * price} mdl</p>
                </div>

                <div className="removeWrap">
                  <Link to="/cart#delete"
                        className=""
                        onClick={() => remove(id)}>
                    <CancelIcon fontSize={"small"} style={{ color: '#616161' }}/>
                  </Link>

                </div>
              </div>
            </li>
            <Divider/>
          </ul>
        </div>
      </>
  )
}

export default CartItem
