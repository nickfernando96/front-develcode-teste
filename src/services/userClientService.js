import { useCallback } from 'react';
import { useApi } from './api';

export const useUserClientService = () => {
  const api = useApi('/api/user');

  
  const post = useCallback(
    (body) => api.post('/persist', body),
    [api]
    );

  const remove = useCallback(
    (id) => api.delete(`/delete/${id}`),
    [api]
  );
  
  const findById = useCallback(
    (id) => api.get(`/findId/${id}`),
    [api]
  );
    
  const findAll = useCallback(
    (params) => {
      return api.get('/findAll', params).then((response) => response.data);
    },
    [api]
  );

  return {
    findAll,
    remove,
    findById,
    post
  };
};
