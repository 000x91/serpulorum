// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-crux_lair").generator = all_enemy_bases; //currently does not work. 
    Vars.content.planet("serpul_clones-s1_r5.67").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-s1_r9.99").generator = new SerpuloPlanetGenerator(); //same seed different sizes will make the maps different
    Vars.content.planet("serpul_clones-serpulq").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulr").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpuls").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpult").generator = new SerpuloPlanetGenerator(); // the larger the planet size, the larger map size 
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_alt();
    Vars.content.planet("serpul_clones-serpulv").generator = unlock_all_sectors_all_low; //that works. 
});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
//var genLakes_true = extend(SerpuloPlanetGenerator,{genLakes = true}); // causes js to stop working altogether. 
var all_enemy_bases = extend(SerpuloPlanetGenerator,{generateSector(sector){sector.generateEnemyBase=true}});
var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
