import axios from 'axios';
import React, { createContext, useMemo } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const api = useMemo(() => {
    return axiosFactory();
  }, []);

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  )
}

const axiosFactory = () => {
  const api = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    baseURL: process.env.REACT_APP_URL
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
}
