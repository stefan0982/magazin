import React        from 'react'
import LowerBar     from '../components/Navbar/LowerBar'
import DeliveryCard from '../components/Delivery/DeliveryCard'
import DeliveryMap  from '../components/Delivery/DeliveryMap'

const Delivery = () => {
  return (
    <>
      <LowerBar />
      <DeliveryCard />
      <DeliveryMap/>
    </>
  )
}

export default Delivery
