import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import {Link} from "gatsby";
import slug from 'slug'

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
});

const CategoryCard = ({name}) => {
  const classes = useStyles();

  return (
      <Card className={classes.root} key={name}>
        <Link to={`${slug(name)}`} className="link-disable">
          <CardActionArea>
            <Typography style={{marginLeft: 10, textTransform: "uppercase", padding: 6}} gutterBottom
                        variant="body1" component="h2" color="textPrimary">
              {name}
            </Typography>
          </CardActionArea>
        </Link>
      </Card>
  );
}

export default CategoryCard