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
  bottom: `49vh`,
  color: 'white',
  left: 'auto',
  position: 'fixed',
  backgroundColor: 'green'
};

// const fb = {
//   marginTop: 30,
//   top: 'auto',
//   right: 20,
//   bottom: `45vh`,
//   color: 'white',
//   left: 'auto',
//   position: 'fixed',
//   backgroundColor: 'green',
//   textTransform: 'lowercase',
//   fontSize: '30px'
// };


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
                  <Fab style={style} size={"medium"}>
                    <CallIcon />
                  </Fab>
                </a>
                {/*<a*/}
                {/*    href="/"*/}
                {/*    // target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*    className="link-disable"*/}
                {/*>*/}
                {/*  <Fab style={fb} size={"medium"}>*/}
                {/*    <FacebookIcon />*/}
                {/*    */}
                {/*  </Fab>*/}
                {/*</a>*/}
              </div>
              <Footer/>
            </div>
          </ContextProviderComponent>
        </SnackbarProvider>

    )
  }
}

export default Layout
