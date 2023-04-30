import React, { useContext, useEffect } from "react"
import { Chip, Divider, Typography } from "@mui/material";

import { WrapperFull } from "../../components/Layout/WrapperFull"
import { Form } from "../../components/Login/Form";
import { GoogleLogin } from "../../components/Login/GoogleLogin";
import { AuthContext } from "../../utils/contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { CircleNotch } from "phosphor-react";

export const Login: React.FC = () => {
  document.title = "Login";

  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated)
      setTimeout(() => {
        navigate("/", { replace: true })
      }, 1500);
  }, [authenticated])

  return (
    <React.Fragment>
      {
        authenticated ?
        <WrapperFull>
          <CircleNotch className="animate-spin" size={36}/>
          <h1 className="text-xl font-semibold">Redirecionando...</h1>
        </WrapperFull>
        :
        <WrapperFull>
          <img src="/guide-logo.svg" className="mb-6"/>
          <h1
          className="text-3xl font-bold text-blue-500 mb-10"
          >Acesse sua conta</h1>
          <Form />

          <div className="w-[320px] mt-6 flex flex-col items-center">
            <Divider variant='middle'>
              <Chip label="OU" />
            </Divider>

            <label htmlFor="buttonGoogleAuth" className="w-fit flex gap-4 justify-center items-center mt-4 p-2 rounded-full border-2 border-zinc-200">
              <GoogleLogin />
              <span className="font-semibold text-sm text-zinc-400">
                Entrar com o Google
              </span>
            </label>
          </div>
        </WrapperFull>
      }
    </React.Fragment>
  )
}