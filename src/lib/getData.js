"use server";

export async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/dashboard.json`);
  if (!res.ok) throw new Error("Failed to load dashboard.json");
  return res.json();
}
