import { useState, useEffect } from 'react';

// 데이터 타입을 제너릭으로 받는 인터페이스 정의
export interface UseGetApiResponse<T> {
  data: T | null;
  error: string | null;
}

const useGetApi = <T>(url: string): UseGetApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result: T = await res.json();
        setData(result);
      } catch (error) {
        setError('Failed to load data');
        console.error('Fetching error:', error);
      }
    }
    fetchData();
  }, [url]);

  return { data, error };
};

export default useGetApi;
