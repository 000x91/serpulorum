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
/*
function gb(p)
{
    var heig = (Mathf.pow(Simplex.noise3d(seed, 7, 0.5f, 1f/3f, p.x, p.y, p.z), 2.3f) + 0.07) / 1.07;
    Tmp.v31.set(position);
    
}
*/
var all_enemy_bases = extend(SerpuloPlanetGenerator,{generateSector(sect){sect.generateEnemyBase=true}});
var alt_genTile = extend(SerpuloPlanetGenerator,{genTile(){}});
//var genLakes_true = extend(SerpuloPlanetGenerator,{{genLakes = true}}); // causes js to stop working altogether. 
var def_waterOffset = 0.07; 
var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
