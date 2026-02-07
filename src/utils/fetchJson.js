// 用於讀取 json 檔案的工具函式
export async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`找不到 ${url}`);
  return await res.json();
}
