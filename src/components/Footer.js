import React              from 'react'
import { makeStyles }     from '@material-ui/core/styles'
import List               from '@material-ui/core/List'
import ListItem           from '@material-ui/core/ListItem'
import ListItemIcon       from '@material-ui/core/ListItemIcon'
import ListItemText       from '@material-ui/core/ListItemText'
import Grid               from '@material-ui/core/Grid'
import Typography         from '@material-ui/core/Typography'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import RoomOutlinedIcon   from '@material-ui/icons/RoomOutlined'
import MailOutlineIcon    from '@material-ui/icons/MailOutline'
import PhoneIcon          from '@material-ui/icons/Phone'
import Divider            from '@material-ui/core/Divider'
import ContextConsumer    from '../Context'

const useStyles = makeStyles( (theme) => (
  {
    root: {
      // flexGrow: 1,
      width: '100%',
      marginTop: 30,
      color: 'white',
      // bottom: 0,
      backgroundColor: '#424242',
    },
    title: {
      margin: theme.spacing( 2, 0, 1, 2 ),
      paddingLeft: 20,
    },
    divider: {
      backgroundColor: 'white',
    },
  }
) )

const Footer = () => {
  const classes = useStyles()

  return (
    <ContextConsumer>
      { ({ data }) => {
        return (
          <div className={ classes.root }>
            <Grid container>
              <Grid
                item
                xs={ 12 }
                md={ 6 }
              >
                <Typography
                  variant="body1"
                  className={ classes.title }
                >
                  { data.language ? 'CONTACTE' : 'КОНТАКТЫ'}
                </Typography>
                <Divider
                  variant="middle"
                  className={ classes.divider }
                />
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon style={ { color: 'white' } } />
                      <Divider
                        orientation="vertical"
                        flexItem
                        className={ classes.divider }
                        style={ { marginLeft: 7 } }
                      />
                    </ListItemIcon>

                    <ListItemText
                      primary="068940476"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MailOutlineIcon style={ { color: 'white' } } />
                      <Divider
                        orientation="vertical"
                        flexItem
                        className={ classes.divider }
                        style={ { marginLeft: 7 } }
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="protos.magazin@gmail.com"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <RoomOutlinedIcon style={ { color: 'white' } } />
                      <Divider
                        orientation="vertical"
                        flexItem
                        className={ classes.divider }
                        style={ { marginLeft: 7 } }
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={ data.language
                        ? 'str. Mitropolit Varlaam'
                          + ' 76 (intersecție cu str.'
                          + ' Armenească, colț cu'
                          + ' Piața centrală)'
                        : 'ул. Митрополит Варлаам 76 (на перекрестке с ул. Арменяскэ)' }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid
                item
                xs={ 12 }
                md={ 6 }
              >
                <Typography
                  variant="body1"
                  className={ classes.title }
                >
                  { data.language ? 'PROGRAM DE LUCRU' : 'РЕЖИМ РАБОТЫ' }
                </Typography>
                <Divider
                  variant="middle"
                  className={ classes.divider }
                />
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EventAvailableIcon style={ { color: 'white' } } />
                      <Divider
                        orientation="vertical"
                        flexItem
                        className={ classes.divider }
                        style={ { marginLeft: 7 } }
                      />
                    </ListItemIcon>
                    <div style={ { display: 'flex', flexDirection: 'column' } }>
                      <ListItemText
                        primary={ data.language
                          ? 'Luni-Vineri: 9.00-17.00'
                          : 'Понедельник-Пятница: 9.00-17.00' }
                      />
                      <ListItemText
                        primary={ data.language
                          ? 'Sâmbătă: 9.00-13.00'
                          : 'Суббота: 9.00-13.00' }
                      />
                      <ListItemText
                        primary={ data.language
                          ? 'Duminică: zi liberă'
                          : 'Воскресенье: выходной' }
                      />
                    </div>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        )
      } }

    </ContextConsumer>
  )
}

export default Footer
