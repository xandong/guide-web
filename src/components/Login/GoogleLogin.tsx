import { useContext } from 'react';
import { Button } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';

import { AuthContext } from '../../utils/contexts/AuthProvider';

export const GoogleLogin = () => {
  const { handleAccessToken } = useContext(AuthContext)
  
  const handleGoogleAuth = useGoogleLogin({
    onSuccess: tokenResponse => {
      handleAccessToken(tokenResponse.access_token)
    },
    onError: error => console.log({error})
  })

  return <>
    <div className="flex gap-10">        
      <Button
      id="buttonGoogleAuth"  
      sx={{borderRadius: "50%", boxShadow: "2px 2px 8px #00000040"}}
      onClick={() => handleGoogleAuth()}
      >
        <img src="/google.svg" />
      </Button> 
    </div>
  </>
}



