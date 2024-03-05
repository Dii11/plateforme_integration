
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const CardComponent = ({ title, subtitle, content }) => {

  return (
    <Card className=''>
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
