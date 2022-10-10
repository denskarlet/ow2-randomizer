const getHero = (name) => ({ name });

const dps = [
  getHero("Ashe"),
  getHero("Bastion"),
  getHero("Cassidy"),
  getHero("Echo"),
  getHero("Genji"),
  getHero("Hanzo"),
  getHero("Junkrat"),
  getHero("Mei"),
  getHero("Pharah"),
  getHero("Reaper"),
  getHero("Sojourn"),
  getHero("Soldier 76"),
  getHero("Sombra"),
  getHero("Symmetra"),
  getHero("Torbjörn"),
  getHero("Tracer"),
  getHero("Widowmaker"),
];

const tanks = [
  getHero("Doomfist"),
  getHero("D.Va"),
  getHero("Orisa"),
  getHero("ReinHardt"),
  getHero("Roadhog"),
  getHero("Sigma"),
  getHero("Winston"),
  getHero("Wrecking Ball"),
  getHero("Zarya"),
  getHero("Junker Queen"),
];

const healers = [
  getHero("Ana"),
  getHero("Baptiste"),
  getHero("Brigitte"),
  getHero("Lúcio"),
  getHero("Mercy"),
  getHero("Moira"),
  getHero("Zenyatta"),
  getHero("Kiriko"),
];


export { healers, tanks, dps };
