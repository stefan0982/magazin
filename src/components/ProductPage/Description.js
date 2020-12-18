import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

export default function Description({data}) {

  return (
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" style={{marginLeft: 20, fontWeight: 550, marginTop: 15}}>
            Descriere
          </Typography>
          <Divider variant="middle" style={{ height: 1.5, backgroundColor: 'black' }} />
          <List style={{marginLeft: 20, marginRight: 15}}>
            <ListItemText
                primary={data}
            />
          </List>
        </Grid>
      </Grid>
  )
}