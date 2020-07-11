import {
  DensityComponent,
  ElementalComponent,
  Elements,
  ErosionSystem,
  MassComponent,
  PhysicalComponent,
} from "./world/index.ts";

import { World, renderWorld } from "./lib/index.ts";

const world = new World();
const hillside = world.createEntity();
const sun = world.createEntity();
const seabreeze = world.createEntity();
world.createComponents([
  new PhysicalComponent(hillside),
  new ElementalComponent(hillside, Elements.Earth),
  new DensityComponent(hillside, 1),
  new MassComponent(hillside, 500),
  new PhysicalComponent(sun),
  new ElementalComponent(sun, Elements.Fire),
  new DensityComponent(sun, 0.5),
  new MassComponent(sun, 958_577_011_785_005),
  new PhysicalComponent(seabreeze),
  new ElementalComponent(seabreeze, Elements.Wind),
]);

world.createSystem(new ErosionSystem(1));
world.run();
renderWorld(world);
