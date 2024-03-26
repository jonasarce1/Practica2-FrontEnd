import { FreshContext } from "$fresh/server.ts";
import ButtonSearch from "../islands/ButtonSearch.tsx";
import ButtonCreate from "../islands/ButtonCreate.tsx";
import ButtonHome from "../islands/ButtonHome.tsx";


export default async function Layout (req: Request, ctx: FreshContext) { 
    return (
        <div>
            <div class = "layout">
                <ButtonCreate/>
                <h1 class = "font-pokemon">POKEDEX</h1>
                <ButtonHome/>
                <ButtonSearch/>
            </div>
            <ctx.Component/>
        </div>
    );
}

