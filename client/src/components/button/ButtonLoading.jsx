import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

const LoadingButton = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('ajouter');

  const handleClick = async () => {
    setLoading(true);
    setButtonText('Chargement...');

    // Simuler un appel asynchrone (remplacez cela par votre logique asynchrone réelle)
    await new Promise((resolve) => setTimeout(resolve, "500"));

    setLoading(false);
    setButtonText('ajouter');
   
  };

  return (
    <Button variant="contained" onClick={handleClick} disabled={loading} className='' >
      {loading ? <CircularProgress size={20} /> : buttonText}
    </Button>
  );
};

export default LoadingButton;
