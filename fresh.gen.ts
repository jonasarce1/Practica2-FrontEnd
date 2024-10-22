// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_addPokemon from "./routes/api/addPokemon.tsx";
import * as $api_deletePokemon_name_ from "./routes/api/deletePokemon/[name].tsx";
import * as $api_getAllPokemon from "./routes/api/getAllPokemon.tsx";
import * as $api_getPokemon_name_ from "./routes/api/getPokemon/[name].tsx";
import * as $create from "./routes/create.tsx";
import * as $index from "./routes/index.tsx";
import * as $pokemon_name_ from "./routes/pokemon/[name].tsx";
import * as $search from "./routes/search.tsx";
import * as $AddForm from "./islands/AddForm.tsx";
import * as $ButtonCreate from "./islands/ButtonCreate.tsx";
import * as $ButtonHome from "./islands/ButtonHome.tsx";
import * as $ButtonSearch from "./islands/ButtonSearch.tsx";
import * as $PokemonList from "./islands/PokemonList.tsx";
import * as $SearchPokemon from "./islands/SearchPokemon.tsx";
import * as $SeePokemon from "./islands/SeePokemon.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/addPokemon.tsx": $api_addPokemon,
    "./routes/api/deletePokemon/[name].tsx": $api_deletePokemon_name_,
    "./routes/api/getAllPokemon.tsx": $api_getAllPokemon,
    "./routes/api/getPokemon/[name].tsx": $api_getPokemon_name_,
    "./routes/create.tsx": $create,
    "./routes/index.tsx": $index,
    "./routes/pokemon/[name].tsx": $pokemon_name_,
    "./routes/search.tsx": $search,
  },
  islands: {
    "./islands/AddForm.tsx": $AddForm,
    "./islands/ButtonCreate.tsx": $ButtonCreate,
    "./islands/ButtonHome.tsx": $ButtonHome,
    "./islands/ButtonSearch.tsx": $ButtonSearch,
    "./islands/PokemonList.tsx": $PokemonList,
    "./islands/SearchPokemon.tsx": $SearchPokemon,
    "./islands/SeePokemon.tsx": $SeePokemon,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
