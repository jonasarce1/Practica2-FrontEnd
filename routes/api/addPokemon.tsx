import { FreshContext, Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
    POST: async (req: Request) => {
        try{
            const body = await req.json();
            const response = await fetch("https://lospoquimones.deno.dev/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return new Response(JSON.stringify(data), {
                headers: { "Content-Type": "application/json" },
                status: 200
            });
        }
        catch(e){
            return new Response(JSON.stringify({error: e}), {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }
}