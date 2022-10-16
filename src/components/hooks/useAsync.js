/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [callback]);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value, setValue };
}
