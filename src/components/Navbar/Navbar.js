import React, { useState }      from 'react'
import AppBar                   from '@material-ui/core/AppBar'
import Toolbar                  from '@material-ui/core/Toolbar'
import { Link }                 from 'gatsby'
import logo                     from '../../images/nav-icon.png';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton               from '@material-ui/core/IconButton'
import Badge                    from '@material-ui/core/Badge'
import { onChange, list }       from 'cart-localstorage'
import MenuIcon                 from "@material-ui/icons/Menu";
import Drawer                   from "@material-ui/core/Drawer";
import ChevronLeftIcon          from "@material-ui/icons/ChevronLeft";
import Divider                  from "@material-ui/core/Divider";
import clsx                     from "clsx";
import DrawerList               from "./DrawerList";
import { makeStyles }           from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => (
    {
      list        : {
        width: 280,
      },
      fullList    : {
        width: 'auto',
      },
      btnGroup    : {
        display      : 'flex',
        flexDirection: 'column',
        alignItems   : 'center',
        '& > *'      : {
          marginTop: 3,
        },
      },
      drawerHeader: {
        display       : 'flex',
        alignItems    : 'center',
        padding       : theme.spacing(
            0,
            1,
        ), // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
    }
) )

const Navbar = () => {
  const classes = useStyles()

  const [number, setNumber] = useState(list && list().length)

  if (typeof window !== `undefined`) onChange(() => setNumber(list().length))

  const [state, setState] = React.useState( { left: false } )

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type
        === 'keydown'
        && (
            event.key
            === 'Tab'
            || event.key
            === 'Shift'
        )) {
      return
    }
    setState( {
      ...state,
      [anchor]: open,
    } )
  }

  const listDrawer = (anchor) => (
      <div
          className={ clsx( classes.list, {
            [classes.fullList]: anchor
            === 'top'
            || anchor
            === 'bottom',
          } ) }
          role="presentation"
          // onClick={toggleDrawer(anchor, false)}
          // onKeyDown={toggleDrawer(anchor, false)}
      >
        <DrawerList onClose={ toggleDrawer( anchor, false ) } />
      </div>
  )

  return (
      <>
      { ['left'].map( (anchor) => (
            <React.Fragment key={ anchor }>
      <div>
        <AppBar
            className="header"
            position="fixed"
            color="transparent"
        >
          <Toolbar>
            <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
            >
              <IconButton
                  color="inherit"
                  edge="start"
                  onClick={ toggleDrawer( anchor, true ) }
              >
                <MenuIcon />
              </IconButton>
              {/*<Button*/}
              {/*    onClick={ toggleDrawer( anchor, true ) }*/}
              {/*    style={{ marginTop: 10, width: 28.2, height: 21.6 }}*/}
              {/*    // onClick={ toggleDrawer( anchor, true ) }*/}
              {/*><MenuIcon fontSize={ 'small' } /></Button>*/}
              <Link
                  to="/"
                  className="link-disable"
              >
                <img
                    src={logo}
                    alt="logo"
                    height={45}
                />
              </Link>
              <Link to="/cart">
                <IconButton>
                  <Badge
                      color="secondary"
                      badgeContent={number}
                  >
                    <ShoppingCartOutlinedIcon style={{ color: 'black', userSelect: 'none' }}/>
                  </Badge>
                </IconButton>
              </Link>
            </div>

          </Toolbar>
        </AppBar>
        <Toolbar/>
      </div>
              <Drawer
                  anchor={ anchor }
                  open={ state[anchor] }
                  onClose={ toggleDrawer( anchor, false ) }
              >
                <div className={ classes.drawerHeader }>
                  <IconButton onClick={ toggleDrawer( anchor, false ) }>
                    <ChevronLeftIcon  />
                  </IconButton>
                </div>
                <Divider />
                { listDrawer( anchor ) }
              </Drawer>
            </React.Fragment>
        ) ) }
        </>
  )
}

export default Navbar
