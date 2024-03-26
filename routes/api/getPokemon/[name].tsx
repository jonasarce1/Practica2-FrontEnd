import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Pokemon[]>) => {
        try {
            const { name } = ctx.params;
            const data = await fetch(`https://lospoquimones.deno.dev/${name}`);
            const pokemons = await data.json(); //lista de pokemones

            return new Response(JSON.stringify(pokemons), {
                headers: { "Content-Type": "application/json" },
                status: 200
            });

        } catch (e) {
            return new Response(JSON.stringify({ error: e }), {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }
}