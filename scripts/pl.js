// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-crux_lair").generator = all_enemy_bases; //currently does not work. 
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_alt();
    Vars.content.planet("serpul_clones-serpulv").generator = unlock_all_sectors_all_low; //that works. 
});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
function get_block(po)
{
    
}
function rawhyt(po)
{
    var pos = Tmp.v33.set(po).scl(5); 
    return (Mathf.pow(Simplex.noise3d(seed, 7, 0.5, 0.33, pos.x, pos.y, pos.z), 2.3) + 0.07) / 1.07;
}

var all_enemy_bases = extend(SerpuloPlanetGenerator,{generateSector(sect){sect.generateEnemyBase=true;}});
var alt_genTile = extend(SerpuloPlanetGenerator,{genTile(po,ti)
{
     ti.floor = getBlock(po);
     Tmp.v31.set(po);
}});
//var genLakes_true = extend(SerpuloPlanetGenerator,{{genLakes = true}}); // causes js to stop working altogether. 

//default private offset values. 
var def_waterOffset = 0.07; var def_scl = 5;

// 
var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
