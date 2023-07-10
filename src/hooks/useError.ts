import { useState } from 'react';

const useError = () => {
  const [error, setError] = useState<string | undefined>('');

  return {
    error,
    changeError: (message: string | undefined) => setError(message),
  };
};

export default useError;

