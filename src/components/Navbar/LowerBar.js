import React           from 'react'
import clsx            from 'clsx'
import { makeStyles }            from '@material-ui/core/styles'
import Drawer                    from '@material-ui/core/Drawer'
import Button                    from '@material-ui/core/Button'
import Divider                   from '@material-ui/core/Divider'
import ButtonGroup               from '@material-ui/core/ButtonGroup'
import MenuIcon                  from '@material-ui/icons/Menu'
import IconButton                from '@material-ui/core/IconButton'
import ChevronLeftIcon           from '@material-ui/icons/ChevronLeft'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import { Link }                  from 'gatsby'
import ContextConsumer           from '../../Context'
import DrawerList                from "./DrawerList";

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

export default function TemporaryDrawer() {
  const classes = useStyles()
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

  const list = (anchor) => (
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
          <div className={ classes.btnGroup }>
            <ContextConsumer>
              { ({ data, set }) => {
                return (
                  <ButtonGroup
                    variant="text"
                    color="inherit"
                    size={ 'large' }
                    fullWidth
                    aria-label="text primary button group"
                  >
                    <Button
                      onClick={ toggleDrawer( anchor, true ) }
                    ><MenuIcon fontSize={ 'small' } /></Button>
                    <Button
                      component={ Link }
                      to={ '/delivery' }
                    >

                      <LocalShippingOutlinedIcon fontSize={'small'} />
                    </Button>

                    <Button style={{ fontWeight: 700 }} onClick={ () => set( { language: !data.language } ) }>
                      { data.language ? `ru` : `ro` }
                    </Button>
                  </ButtonGroup>
                )
              } }
            </ContextConsumer>
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
            { list( anchor ) }
          </Drawer>
        </React.Fragment>
      ) ) }

    </>
  )
}