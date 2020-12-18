import React                             from 'react'
import { makeStyles }                    from '@material-ui/core/styles'
import List                              from '@material-ui/core/List'
import ListItem                          from '@material-ui/core/ListItem'
import ListItemIcon                      from '@material-ui/core/ListItemIcon'
import ListItemText                      from '@material-ui/core/ListItemText'
import Collapse                          from '@material-ui/core/Collapse'
import PlaylistAddIcon                   from '@material-ui/icons/PlaylistAdd'
import ExpandLess                        from '@material-ui/icons/ExpandLess'
import ExpandMore                        from '@material-ui/icons/ExpandMore'
import HomeIcon                          from '@material-ui/icons/Home'
import ShoppingCartIcon                  from '@material-ui/icons/ShoppingCart'
import RadioButtonUncheckedIcon
                                         from '@material-ui/icons/RadioButtonUnchecked'
import LocalShippingIcon                 from '@material-ui/icons/LocalShipping'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { graphql, Link, useStaticQuery } from 'gatsby'
import ContextConsumer                   from '../../Context'
import slug                              from 'slug'

const useStyles = makeStyles(( theme ) => (
    {
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      links: {
        textDecoration: 'none',
        color: 'black',
      },
    }
))

const query = graphql`
  {
  roCategory:allContentfulCategoria(filter: {ro: {eq: true}}) {
    edges {
      node {
        denumirea
      }
    }
  }
  ruCategory:allContentfulCategoria(filter: {ro: {eq: false}}) {
    edges {
      node {
        denumirea
      }
    }
  }
}

`

export default function DrawerList( { onClose } ) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const { roCategory, ruCategory } = useStaticQuery( query )

  const handleClick = () => {
    setOpen(!open)
  }

  return (
      <List
          component="nav"
          className={classes.root}
      >
        <ContextConsumer>
          {( { data, set } ) => {
            return (
                <>
                  <Link
                      to="/aboutUs"
                      className={classes.links}
                      onClick={onClose}
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <ContactPhoneIcon/>
                      </ListItemIcon>
                      <ListItemText
                          primary={data.language ? `Despre noi` : `Про нас`}
                      />
                    </ListItem>
                  </Link>
                  <Link
                      to="/"
                      className={classes.links}
                      onClick={onClose}
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <HomeIcon/>
                      </ListItemIcon>
                      <ListItemText
                          primary={data.language ? `Principală` : `Главная`}
                      />
                    </ListItem>
                  </Link>
                  <Link
                      to="/delivery"
                      className={classes.links}
                      onClick={onClose}
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <LocalShippingIcon/>
                      </ListItemIcon>
                      <ListItemText
                          primary={data.language ? `Livrarea` : `Доставка`}
                      />
                    </ListItem>
                  </Link>
                  <Link
                      to="/cart"
                      className={classes.links}
                      onClick={onClose}
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <ShoppingCartIcon/>
                      </ListItemIcon>
                      <ListItemText
                          primary={data.language ? `Coș` : `Корзина`}
                      />
                    </ListItem>
                  </Link>

                  <ListItem
                      button
                      onClick={handleClick}
                  >
                    <ListItemIcon>
                      <PlaylistAddIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={data.language ? `Categorii` : `Категорий`}
                    />
                    {open ? <ExpandLess/> : <ExpandMore/>}
                  </ListItem>
                  <Collapse
                      in={open}
                      timeout="auto"
                      unmountOnExit
                  >
                    <List
                      component="div"
                      disablePadding
                    >
                    { data.language ? roCategory.edges.map( ({ node }) => (
                      <Link
                        to={ `/${ slug( node.denumirea ) }/` }
                        style={ {
                          textDecoration: 'none',
                          color         : 'black',
                        } }
                        key={node.denumirea}
                        onClick={ onClose }
                      >
                        <ListItem
                          button
                          className={ classes.nested }
                        >
                          <ListItemIcon>
                            <RadioButtonUncheckedIcon fontSize={ 'small' } />
                          </ListItemIcon>
                          <ListItemText
                              primary={node.denumirea}
                          />
                        </ListItem>
                      </Link>
                    ) ) : ruCategory.edges.map( ({ node }) => (
                        <Link
                            to={ `/${ slug( node.denumirea ) }/` }
                            style={ {
                              textDecoration: 'none',
                              color         : 'black',
                            } }
                            key={node.denumirea}
                            onClick={ onClose }
                        >
                          <ListItem
                              button
                              className={ classes.nested }
                          >
                            <ListItemIcon>
                              <RadioButtonUncheckedIcon fontSize={ 'small' } />
                            </ListItemIcon>
                            <ListItemText
                                primary={node.denumirea}
                            />
                          </ListItem>
                        </Link>
                    ) ) }
                    </List>
                  </Collapse>
                </>
            )
          }}
        </ContextConsumer>


      </List>
  )
}