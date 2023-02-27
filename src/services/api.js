import { useContext, useMemo } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import { Uri } from '../helpers/uri'

export const useApi = (baseUri = '') => {
  const api = useContext(ApiContext);
  return useMemo(
    () => ({
      get: (uri, config) => {
        return api.get(Uri.concatPaths(baseUri, uri), config);
      },
      put: (uri, data, config) => {
        return api.put(Uri.concatPaths(baseUri, uri), data, config);
      },
      post: (uri, data, config) => {
        return api.post(Uri.concatPaths(baseUri, uri), data, config);
      },
      delete: (uri, config) => {
        return api.delete(Uri.concatPaths(baseUri, uri), config);
      },
      patch: (uri, data, config) => {
        return api.patch(Uri.concatPaths(baseUri, uri), data, config);
      }
    }),
    [api, baseUri]
  );
};