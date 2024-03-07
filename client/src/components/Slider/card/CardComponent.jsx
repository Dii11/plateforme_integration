
import { Card, CardContent, CardHeader, Icon, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Rate from '../../Rate/Index'

const CardComponent = ({ title, subtitle, content,icon }) => {

  return (
    <Card className='' >
      <CardHeader title={title} subheader={subtitle} />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          <div className='flex justify-center gap-10 '>
          {content.map((e,index)=>{
            return(
              <div className='py-10 px-8 border-2 rounded hover_card'>
                <IconButton className='' color='primary'> {icon}</IconButton>
              <div className='pt-5' key={index}>{e}</div>
              <div className='flex gap-2 pt-10'>
                <Rate />
                <span>150 membres</span>
              </div>
              </div>
            )
            })}
            </div>
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
