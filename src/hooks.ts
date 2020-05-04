import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export const useFetch = (
  initialUrl: String,
  sendData = {},
  initialReturnData = {},
): [{}, Boolean, Boolean, Dispatch<SetStateAction<String>>] => {
  const [data, setData] = useState(initialReturnData);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const result = await fetch(`${process.env.SERVER_URL}/${url}`, {
          headers: {
            'auth-token': String(localStorage.getItem('token')),
          },
          method: 'GET',
          body: JSON.stringify(sendData),
          mode: 'cors',
        }).then((response) => response.json());

        setData(result.data);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, [url, sendData]);

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

    fetch(`${process.env.SERVER_URL}/${url}`, {
      headers: {
        'auth-token': String(localStorage.getItem('token')),
      },
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
