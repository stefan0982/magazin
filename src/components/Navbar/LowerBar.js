import React           from 'react'
import { makeStyles }            from '@material-ui/core/styles'
import Button                    from '@material-ui/core/Button'
import ButtonGroup               from '@material-ui/core/ButtonGroup'
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import { Link }                  from 'gatsby'
import ContextConsumer           from '../../Context'

const useStyles = makeStyles( (theme) => (
  {
    btnGroup    : {
      display      : 'flex',
      flexDirection: 'column',
      alignItems   : 'center',
      '& > *'      : {
        marginTop: 3,
      }
    }
  }
) )

export default function TemporaryDrawer() {
  const classes = useStyles()
  return (
    <>
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
                        component={ Link }
                        to={ '/aboutUs' }>
                      <ContactPhoneOutlinedIcon fontSize={ 'small' } /></Button>
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
    </>
  )
}