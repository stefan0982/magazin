import React                      from 'react'
import {ContextProviderComponent} from '../Context'
import {SnackbarProvider}         from 'notistack'
import Navbar                     from "../components/Navbar/Navbar";
import Footer                     from "../components/Footer";
import Fab                        from "@material-ui/core/Fab";
import CallIcon from '@material-ui/icons/Call';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: `48vh`,
  // fontWeight: 700,
  // fontSize: '1.2rem',
  color: 'white',
  left: 'auto',
  position: 'fixed',
  backgroundColor: 'green'
};


class Layout
    extends React.Component {

  render() {
    return (
        <SnackbarProvider
            maxSnack={4}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
        >
          <ContextProviderComponent>
            <div className="layout">
              <Navbar/>
              <div className="main">
                {this.props.children}
                <a
                    href="tel:068940476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-disable"
                >
                  <Fab style={style} size="small">
                    <CallIcon fontSize={"small"}/>
                  </Fab>
                </a>
              </div>
              <Footer/>
            </div>
          </ContextProviderComponent>
        </SnackbarProvider>

    )
  }
}

export default Layout
