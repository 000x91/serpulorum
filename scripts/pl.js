// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-s1_genlakes_false").generator = new SerpuloPlanetGenerator();
    //Vars.content.planet("serpul_clones-s1_genlakes_true").generator = genLakes_true;
    Vars.content.planet("serpul_clones-serpulq").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulr").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpuls").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpult").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_alt();
    Vars.content.planet("serpul_clones-serpulv").generator = unlock_all_sectors_all_low; // that does not work. 
});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
function altered_spg_waterOffset(a){var b = extend(SerpuloPlanetGenerator,{waterOffset = a;}); return b;}
var genLakes_true = extend(SerpuloPlanetGenerator,{genLakes = true});
var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
