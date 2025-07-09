export async function apiSubmit(url: string, data: unknown) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to submit to ${url}`);
  }
}
