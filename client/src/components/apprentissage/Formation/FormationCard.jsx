import React from 'react'
import {Card, CardContent} from '@mui/material'

const FormationCard = ({props}) => {
  return (
   <Card variant="outlined" className='p-6'>
     <CardContent>
       <div className='py-4  rounded bg-blue-100'>{props.sigle}</div>
       <div>{props.nomEC}</div>
       <div>
        {props.description}
       </div>
     </CardContent>

   </Card>
  )
}

export default FormationCard
