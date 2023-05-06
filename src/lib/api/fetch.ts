type GetConfig = Omit<RequestInit, "method">;

export async function get<T>(uri: string, config?: GetConfig): Promise<T> {
  const res = await fetch(uri, { ...config, method: "GET" });
  if (!res.ok) throw res;
  return res.json();
}
