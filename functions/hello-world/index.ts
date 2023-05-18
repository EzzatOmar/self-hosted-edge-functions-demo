import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

interface reqPayload {
  name: string;
}

console.log('hello-world started');

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
serve(async (req: Request) => {
  const { name } : reqPayload = await req.json();
  const data = {
    message: `Hello ${name} from Supabase Edge Functions!`,
  }
  await wait(1000);

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json", "Connection": "keep-alive" } },
  )
}, { port: 9005 })
