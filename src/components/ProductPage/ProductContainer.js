import React        from 'react'
import Carousel     from './Carousel'
import Grid         from '@material-ui/core/Grid'
import ProductHeader      from './ProductHeader'
import AddToCart from "./AddToCart";
import Description from "./Description";
import DetailsList from "./DetailsList";

class ProductContainer
    extends React.Component {

  render() {
    const { name, price,  id, imaginile, cod, dimensiuni, specificatii, descriere } = this.props
    const mainImage = imaginile[0]
    return (
        <>
          <Grid container justify="space-around">
            <Grid
                item
                xs={ 12 }
                lg={ 5 }
            >
              <ProductHeader name={name} />
              <Carousel images={imaginile}/>
            </Grid>

            <Grid
                item
                xs={ 12 }
                lg={ 5 }
            >
              <AddToCart name={name} price={price} id={id} image={mainImage} cod={cod}/>
              <DetailsList title="Dimensiuni" data={dimensiuni} />
              <DetailsList title="Specificații" data={specificatii}/>
              <Description data={descriere}/>
            </Grid>
          </Grid>

        </>

    )
  }
}

export default ProductContainer