import { json } from "solid-start";

// Handle Get Requests
export async function GET() {
  const res = await fetch("https://api.ipify.org");
  const ip = await res.text();
  return json({ ip });
}

export default GET;
