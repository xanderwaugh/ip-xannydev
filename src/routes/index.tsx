import { type Component, Switch, Match } from "solid-js";
import { useRouteData, createRouteData } from "solid-start";

const Home: Component = () => {
  const ip = useRouteData<typeof routeData>();

  return (
    <div class="relative z-0 flex min-h-screen w-full flex-col items-center justify-center gap-8 scroll-smooth bg-xanny-bg pb-72 text-xanny-text antialiased">
      <Switch>
        <Match when={!ip()}>
          <p>Loading...</p>
        </Match>

        <Match when={ip()?.ip}>
          <section
            id="ip"
            class="flex min-h-screen snap-center scroll-mt-20 flex-col items-center justify-center gap-4"
          >
            <h1 class="text-4xl font-bold">Your IP Address</h1>
            <p class="text-2xl font-semibold">{ip()?.ip ?? "err"}</p>
          </section>
        </Match>
      </Switch>
    </div>
  );
};

export default Home;

export const routeData = () => {
  return createRouteData(async () => {
    const res = await fetch("https://api.ipify.org");
    const ip = await res.text();
    return { ip };
  });
};
