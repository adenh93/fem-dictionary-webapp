import { useState } from "react";

type AsyncFunction<T> = (...args: any) => Promise<T>;

export default function useRequest<T>(req: AsyncFunction<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const trigger = async (...args: any[]) => {
    setLoading(true);

    req(args)
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  };

  type ReturnTuple = [
    AsyncFunction<T>,
    { data: T | null; loading: boolean; error: any }
  ];

  return [trigger, { data, loading, error }] as ReturnTuple;
}
