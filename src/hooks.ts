import { useState, useEffect } from 'react';
import URL from './utils/api';

export const useFetch = (initialUrl: String, initialReturnData = {}): any => {
  const [data, setData] = useState(initialReturnData);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await fetch(`${URL}${url}`, {
          method: 'GET',
        }).then((response) => response.json());
        setData(result);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return [data, loading, error, setUrl];
};

export const useLazyFetch = (
  initialData = {},
): [
  (url: string, method: 'GET' | 'POST' | 'PUT' | 'PATH') => void,
  any,
  boolean,
  boolean,
] => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = (url: string, method: 'GET' | 'POST' | 'PUT' | 'PATH') => {
    setError(false);
    setLoading(true);

    fetch(`${URL}${url}`, {
      method,
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return [fetchData, data, loading, error];
};
