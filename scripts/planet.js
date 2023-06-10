// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-serpulq").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulr").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpuls").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpult").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_alt();

});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
var empty_extension = extend(SerpuloPlanetGenerator,{});
