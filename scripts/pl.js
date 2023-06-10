// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-s1_genlakes_false").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-s1_genlakes_true").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulq").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulr").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpuls").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpult").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_split();
    Vars.content.planet("serpul_clones-serpulv").generator = new SerpuloPlanetGenerator();; // that does not work. 
});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
//var genLakes_true = extend(SerpuloPlanetGenerator,{genLakes = true});
//var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
