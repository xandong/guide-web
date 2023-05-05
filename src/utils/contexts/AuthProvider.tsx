import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { googleLogout } from "@react-oauth/google";

interface AuthProps {
  authenticated: boolean;
  accessToken: string;
  logoutGoogleAuth: () => void;
  handleAccessToken: (accessToken: string) => void;
  name: string;
  setName: (name: string) => void;
}

const initialValues: AuthProps = {
  authenticated: false,
  accessToken: "",
  logoutGoogleAuth: () => {},
  handleAccessToken: (accessToken: string) => {},
  name: "",
  setName: (name: string) => {},
};

export const AuthContext = createContext(initialValues);

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [name, setName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) return navigate("/login", { replace: true });
  }, [authenticated]);

  function handleAccessToken(token: string) {
    setAccessToken(token);
    setAuthenticated(true);

    const apiKey = `${import.meta.env.VITE_KEY_CLIENT_GOOGLE}`;

    const url = `https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos&key=${apiKey}`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.info({ user: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function logoutGoogleAuth() {
    googleLogout();
    setAuthenticated(false);
    setName("");
    setAccessToken("");
  }

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          authenticated,
          accessToken,
          logoutGoogleAuth,
          handleAccessToken,
          name,
          setName,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </React.Fragment>
  );
};
