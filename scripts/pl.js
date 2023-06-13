// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors. No that actually fails to do so. just that the planet has no enemies but may be in future. 
// Attempt to use altered SerpuloPlanetGenerator. 
// Please be warned that some short cut operations will canccel all your javascripts. For example hyt *=1.2;
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-core_zones").generator = alt_genTile; 
    Vars.content.planet("serpul_clones-crux_lair").generator = all_enemy_bases; //currently does not work. 
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_alt();
   // Vars.content.planet("serpul_clones-serpulv").generator = unlock_all_sectors_all_low; //that works. 
});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
function get_ars(a,b)
{
    var c = Math.floor(a); var d = Math.floor(b); 
    if(c < 0 || d < 0){return Blocks.coreZone;}
    else if(c >11 || d > 11){return Blocks.coreZone;}
    //if(c == 0){return ars_00[d];}
    //else if(c == 1){return ars_01[d];}
    //else if(c == 2){return ars_02[d];}
    //else if(c == 3){return ars_03[d];}
    //else if(c == 4){return ars_04[d];}
    //else if(c == 5){return ars_05[d];}
    //else if(c == 6){return ars_06[d];}
    //else if(c == 7){return ars_07[d];}
    //else if(c == 8){return ars_08[d];}
    //else if(c == 9){return ars_09[d];}
    //else if(c == 10){return ars_10[d];}
    //else if(c == 11){return ars_11[d];}
    //else if(c == 12){return ars_12[d];}
    return Blocks.coreZone; 
}
function get_block(po) //function 1b
{
    var hyt = rawhyt(po); //function 1c
    Tmp.v31.set(po);
    var pos = Tmp.v33.set(po).scl(5);
    var rad = 5; //var tars; 
    var tem = Mathf.clamp(Math.abs(pos.y * 2) / (rad));
    var tnoise = Simplex.noise3d(1, 7, 0.56, 0.33, pos.x, pos.y + 999, pos.z);
    var temp = Mathf.lerp(tem, tnoise, 0.5);
    hyt = hyt * 1.2; var hyu = Mathf.clamp(hyt);
    //var tar = Simplex.noise3d(1, 4, 0.55, 0.5, pos.x, pos.y + 999, pos.z) * 0.3 + Tmp.v31.dst(0, 0, 1) * 0.2;
    var res = get_ars(Mathf.clamp(temp * 13, 0, 12),Mathf.clamp(hyu * 13, 0, 12));// arr is a 13*13 array.
    return res; 
}

function rawhyt(po) //function 1c
{
    var pos = Tmp.v33.set(po).scl(5); 
    return (Mathf.pow(Simplex.noise3d(1, 7, 0.5, 0.33, pos.x, pos.y, pos.z), 2.3) + 0.07) / 1.07;
}

var all_enemy_bases = extend(SerpuloPlanetGenerator,{generateSector(sect){sect.generateEnemyBase=true;}});
var alt_genTile = extend(SerpuloPlanetGenerator,{genTile(po,ti) //function 1a
{
     ti.floor = get_block(po); //function 1b
     ti.block = ti.floor.asFloor().wall;
     if(Ridged.noise3d(1, po.x, po.y, po.z, 2, 22) > 0.1){ti.block = Blocks.air;}
}});
var ars = [[Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.coreZone, Blocks.sand, Blocks.tar, Blocks.sand, Blocks.coreZone, Blocks.darksandTaintedWater, Blocks.stone, Blocks.CoreZone],
[Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.hotrock, Blocks.tar, Blocks.sand, Blocks.coreZone, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone, Blocks.coreZone],
[Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.tar, Blocks.coreZone, Blocks.sand, Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone, Blocks.coreZone],
[Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.coreZone, Blocks.sand, Blocks.stone, Blocks.hotrock, Blocks.tar, Blocks.snow, Blocks.iceSnow, Blocks.ice],
[Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.tar, Blocks.coreZone, Blocks.ice],
[Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.coreZone, Blocks.moss, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.tar, Blocks.ice],
[Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.tar, Blocks.moss, Blocks.moss, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.coreZone, Blocks.ice, Blocks.snow, Blocks.ice],
[Blocks.deepTaintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.moss, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.coreZone, Blocks.ice],
[Blocks.darksandWater, Blocks.darksand, Blocks.tar, Blocks.coreZone, Blocks.moss, Blocks.sporeMoss, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
[Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sporeMoss, Blocks.tar, Blocks.ice, Blocks.coreZone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
[Blocks.deepTaintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.sporeMoss, Blocks.sporeMoss, Blocks.ice, Blocks.ice, Blocks.coreZone, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
[Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.sporeMoss, Blocks.moss, Blocks.sporeMoss, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.tar, Blocks.coreZone, Blocks.ice, Blocks.ice],
[Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.tar, Blocks.coreZone, Blocks.ice, Blocks.ice]];

var ars_00 = [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.coreZone, Blocks.darksand,    Blocks.coreZone, Blocks.sand, Blocks.sand, Blocks.sand,     Blocks.sand, Blocks.darksandTaintedWater, Blocks.stone, Blocks.stone]; 
var ars_01 = [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.coreZone, Blocks.sand,        Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand,         Blocks.darksandTaintedWater, Blocks.stone, Blocks.hotrock, Blocks.stone];
var ars_02 = [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.coreZone, Blocks.salt,        Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand,         Blocks.darksandTaintedWater, Blocks.stone, Blocks.hotrock, Blocks.stone];
var ars_03 = [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.coreZone,    Blocks.salt, Blocks.sand, Blocks.stone, Blocks.hotrock,     Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice];
var ars_04 = [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt,   Blocks.coreZone, Blocks.hotrock, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice];
var ars_05 = [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand,   Blocks.coreZone, Blocks.moss, Blocks.iceSnow, Blocks.snow,  Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice];
var ars_06 = [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.coreZone, Blocks.moss, Blocks.moss, Blocks.snow, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice];
var ars_07 = [Blocks.deepTaintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.coreZone, Blocks.basalt,    Blocks.moss, Blocks.basalt, Blocks.hotrock, Blocks.basalt,      Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice];
var ars_08 = [Blocks.darksandWater, Blocks.darksand, Blocks.coreZone, Blocks.tar, Blocks.moss, Blocks.sporeMoss, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice];
var ars_09 = [Blocks.darksandWater, Blocks.darksand, Blocks.coreZone, Blocks.sporeMoss, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice];
var ars_10 = [Blocks.deepTaintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.coreZone, Blocks.sporeMoss, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice];
var ars_11 = [Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.darksand, Blocks.sporeMoss, Blocks.moss, Blocks.sporeMoss, Blocks.iceSnow, Blocks.coreZone, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice];
var ars_12 = [Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.tar, Blocks.coreZone, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice];

//var genLakes_true = extend(SerpuloPlanetGenerator,{{genLakes = true}}); // causes js to stop working altogether. 

//default private offset values. 
var def_waterOffset = 0.07; var def_scl = 5;

// 
var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
