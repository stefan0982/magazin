import React from 'react';
import LowerBar from "../components/Navbar/LowerBar";
import Items from "../components/Cart/Items";
import Totals from "../components/Cart/Totals";
import { Link }            from 'gatsby'
import { total } from "cart-localstorage";

const Cart = () => {
  return (
      <>
        <LowerBar/>
        <div className="wrap cf">
          <div className="heading cf">
            <h1>Coșul meu</h1>
            <Link
                to="/"
                className="continue"
            >Continuă să alegi</Link>
          </div>
          <Items/>
          {total && total() !== 0 ? <Totals total={total()}/> : " Nu aveți nimic în"
              + " coș"}

        </div>
      </>
  );
};

export default Cart;


