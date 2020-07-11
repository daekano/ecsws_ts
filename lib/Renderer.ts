import * as Colors from "https://deno.land/std@0.58.0/fmt/colors.ts";
import { World } from "./index.ts";

const formatEntityCount = (entityCount: number) => {
  return `Total Entities: ${entityCount}`;
};

const formatComponentCount = (componentCounts: { [key: string]: number }) => {
  return `Total Components: ${Object.values(componentCounts).reduce(
    (prev, curr, idx, array) => {
      return (prev += curr);
    },
  )}`;
};

const formatWorld = (world: World) => {
  console.clear();
  console.log(Colors.green(`Simulation Running... (world ${world.id})`));
  console.log(formatComponentCount(world.getComponentCounts()));
  world.getComponents().forEach((components) => {
    console.table(components);
  });
  console.log(formatEntityCount(world.getEntityCount()));
};

export const renderWorld = (world: World) =>
  setInterval(() => formatWorld(world), 1000);
