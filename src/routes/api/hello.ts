import { type APIEvent, json } from "solid-start";

// Handle Get Requests
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(ev: APIEvent) {
  await new Promise((resolve) => setTimeout(resolve, 10));

  return json({ message: "Hello" });
}

export default GET;
