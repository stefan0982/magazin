import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card           from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent    from '@material-ui/core/CardContent'
import Typography     from '@material-ui/core/Typography'
import { Link }       from 'gatsby'
import slug           from 'slug'
import Img            from "gatsby-image"


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop: 10,
    marginRight: 3,
    marginBottom: 5,
    marginLeft: 3,
  },
})


const ProductCard = ( { name, price, imaginea, categoria, recommended = false } ) => {

  const classes = useStyles()

  return (
      <Card className={classes.root}>
        <Link
            to={recommended === true ? `/${slug(categoria)}/${slug(name)}` : `${slug(name)}/`}
            className="link-disable"
            style={{ color: '#3f51b5' }}
        >
          <CardActionArea>
            <Img fluid={imaginea}/>
            <CardContent style={{ height: 130 }}>
              <Typography
                  gutterBottom
                  variant="body2"
                  color="textPrimary"
                  align="center"
              >
                {name}
              </Typography>
              <Typography
                  variant="body2"
                  style={{ color: 'red' }}
                  align="center"
              >
                {price} MDL
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>

      </Card>
  )
}

export default ProductCard
