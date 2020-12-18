import React, { useState }      from 'react'
import AppBar                   from '@material-ui/core/AppBar'
import Toolbar                  from '@material-ui/core/Toolbar'
import { Link }                 from 'gatsby'
import logo                     from '../../images/nav-icon.png';
import icon                     from '../../images/nav-logo.png';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton               from '@material-ui/core/IconButton'
import Badge                    from '@material-ui/core/Badge'
import { list, onChange }       from 'cart-localstorage'

const Navbar = () => {

  const [number, setNumber] = useState(list && list().length)

  if (typeof window !== `undefined`) onChange(() => setNumber(list().length))

  return (
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
              <Link
                  to="/aboutUs"
                  className="link-disable"
              >
                <img
                    src={icon}
                    alt="logo"
                    style={{ marginTop: 10, width: 28.2, height: 21.6 }}
                />
              </Link>
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
  )
}

export default Navbar
