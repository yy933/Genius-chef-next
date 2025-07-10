export async function getMenuData(
  preference: string,
  page: number,
  limit: number
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/menus?preference=${preference}&page=${page}&limit=${limit}`
  );
  if (!res.ok) throw new Error("Failed to fetch menu data");
  return res.json();
}
