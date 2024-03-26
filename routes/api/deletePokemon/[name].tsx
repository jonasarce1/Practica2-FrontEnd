import { FreshContext, Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
    DELETE: async (req: Request, ctx: FreshContext) => {
        try{
            const { name } = ctx.params;
            const body = await req.json();
            const response = await fetch(`https://lospoquimones.deno.dev/${name}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if(response.status === 404){
                return new Response(JSON.stringify({error: "Pokemon not found"}), {
                    headers: { "Content-Type": "application/json" },
                    status: 404
                });
            }

            return new Response(JSON.stringify({message: "Pokemon deleted"}), {
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