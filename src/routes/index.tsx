import { createAsync, type RouteDefinition } from "@solidjs/router";

export const route = {
  preload() {},
} satisfies RouteDefinition;

const testServerEnvs = () => {
  "use server";
  console.log("[server | process.env]", process.env.NO_PREFIX_ENV);
  console.log("[server | process.env]", process.env.VITE_HELLO);

  console.log("[server | import.meta.env]", import.meta.env.NO_PREFIX_ENV);
  console.log("[server | import.meta.env]", import.meta.env.VITE_HELLO);
};

const testClientEnvs = () => {
  console.log("[client | process.env]", process.env.NO_PREFIX_ENV);
  console.log("[client | process.env]", process.env.VITE_HELLO);

  console.log("[client | import.meta.env]", import.meta.env.NO_PREFIX_ENV);
  console.log("[client | import.meta.env]", import.meta.env.VITE_HELLO);
};

export default function Home() {
  return (
    <main>
      <button onClick={testServerEnvs}>click for server log</button>
      <button onClick={testClientEnvs}>click for client log</button>
    </main>
  );
}
