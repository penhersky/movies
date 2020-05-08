import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import URL from './untils/api';

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
  initialUrl: String,
  sendData = {},
  initialData = {},
): [
  (data: any, method: 'POST' | 'PUT' | 'PATH') => void,
  {},
  Boolean,
  Boolean,
  Dispatch<SetStateAction<String>>,
] => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = (data: any, method: 'POST' | 'PUT' | 'PATH') => {
    setError(false);
    setLoading(true);

    fetch(`${URL}/${url}`, {
      method,
      body: JSON.stringify({ ...sendData, ...data }),
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return [fetchData, data, loading, error, setUrl];
};
