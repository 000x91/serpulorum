// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-crux_lair").generator = all_enemy_bases; //currently does not work. 
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_alt();
    Vars.content.planet("serpul_clones-serpulv").generator = unlock_all_sectors_all_low; //that works. 
});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
var all_enemy_bases = extend(SerpuloPlanetGenerator,{generateSector(sect){sect.generateEnemyBase=true;}});
//var alt_genTile = extend(SerpuloPlanetGenerator,{genTile(){}});
//var genLakes_true = extend(SerpuloPlanetGenerator,{{genLakes = true}}); // causes js to stop working altogether. 
var def_waterOffset = 0.07; 
var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
