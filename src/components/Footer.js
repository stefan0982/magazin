import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    width: '100%',
    marginTop: 30,
    color: 'white',
    // bottom: 0,
    backgroundColor: '#424242'
  },
  title: {
    margin: theme.spacing(2, 0, 1, 2),
    paddingLeft: 20
  },
  divider: {
    backgroundColor: 'white',
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
      <>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" className={classes.title}>
                CONTACTE
              </Typography>
              <Divider variant="middle" className={classes.divider}/>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon style={{color: 'white'}}/>
                    <Divider orientation="vertical"
                             flexItem
                             className={classes.divider}
                             style={{marginLeft: 7}}
                    />
                  </ListItemIcon>

                  <ListItemText
                      primary="068940476"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MailOutlineIcon style={{color: 'white'}}/>
                    <Divider orientation="vertical"
                             flexItem
                             className={classes.divider}
                             style={{marginLeft: 7}}
                    />
                  </ListItemIcon>
                  <ListItemText
                      primary="protos.magazin@gmail.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RoomOutlinedIcon style={{color: 'white'}}/>
                    <Divider orientation="vertical"
                             flexItem
                             className={classes.divider}
                             style={{marginLeft: 7}}
                    />
                  </ListItemIcon>
                  <ListItemText
                      primary="str. M. Kogălniceanu 67 (în incinta bisericii „Întâmpinarea Domnului”), Chișinău, Moldova"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" className={classes.title}>
                PROGRAM DE LUCRU
              </Typography>
              <Divider variant="middle" className={classes.divider}/>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EventAvailableIcon style={{color: 'white'}}/>
                    <Divider orientation="vertical"
                             flexItem
                             className={classes.divider}
                             style={{marginLeft: 7}}
                    />
                  </ListItemIcon>
                  <div style={{ display: 'flex', flexDirection:'column' }}>
                    <ListItemText
                        primary={"Luni-Vineri: 9.00-17.00"}
                    />
                    <ListItemText
                        primary={"Sâmbătă: 9.00-13.00"}
                    />
                    <ListItemText
                        primary={"Duminică: zi liberă"}
                    />
                  </div>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </>
  );
}

export default Footer
