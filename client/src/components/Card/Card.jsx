// CardComponent.js
import React from 'react';
import { Card, CardContent, CardHeader, Typography, makeStyles } from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: '16px',
  },
});

const CardComponent = ({ title, subtitle, content }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={subtitle} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default CardComponent;
