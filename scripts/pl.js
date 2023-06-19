// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors. No that actually fails to do so. just that the planet has no enemies but may be in future. 
// Attempt to use altered SerpuloPlanetGenerator. 
// Please be warned that some short cut operations will canccel all your javascripts. For example hyt *=1.2;
Events.on(ContentInitEvent, e => {
    Vars.content.planet("serpul_clones-core_zones").generator = alt_genTile; 
    Vars.content.planet("serpul_clones-crux_lair").generator = all_enemy_bases; //currently does not work. 
    Vars.content.planet("serpul_clones-serpulu").generator = altered_spg_alt();
    Vars.content.planet("serpul_clones-serpulv").generator = new SerpuloPlanetGenerator(); //maybe changed later. 
});

function altered_spg_alt(){var a = new SerpuloPlanetGenerator(); a.alt = true; return a;}
function get_ars(a,b)
{
    
    var c = Math.floor(a); var d = Math.floor(b); 
    if(c < 0 || d < 0){return Blocks.coreZone;}
    else if(c >11 || d > 11){return Blocks.coreZone;}
    if(c==0){
        if(d == 0){return Blocks.water;}
        else if(d == 1){return Blocks.darksandWater;}
        else if(d == 2){return Blocks.darksand;}
        else if(d == 3){return Blocks.coreZone;}
        else if(d == 4){return Blocks.hotrock;}
        else if(d == 5){return Blocks.magmarock;}
        else if(d == 6){return Blocks.slag;}
        else if(d == 7){return Blocks.magmarock;}
        else if(d == 8){return Blocks.hotrock;}
        else if(d == 9){return Blocks.stone;}
        else if(d ==10){return Blocks.tar;}
        else if(d ==11){return Blocks.stone;}
        else if(d ==12){return Blocks.darksandTaintedWater;}
    }
    else if(c==1){
        if(d==0){return Blocks.water;}
        else if(d == 1){return Blocks.darksandWater;}
        else if(d == 2){return Blocks.darksand;}
        else if(d == 3){return Blocks.coreZone;}
        else if(d == 4){return Blocks.sand;}
        else if(d == 5){return Blocks.sand;}
        else if(d == 6){return Blocks.tar;}
        else if(d == 7){return Blocks.sand;}
        else if(d == 8){return Blocks.sand;}
        else if(d == 9){return Blocks.coreZone;}
        else if(d ==10){return Blocks.stone;}
        else if(d ==11){return Blocks.hotrock;}
        else if(d ==12){return Blocks.stone;}
    }
    else if(c==2)
    {
        if(d==0){return Blocks.water;}
        else if(d == 1){return Blocks.darksandWater;}
        else if(d == 2){return Blocks.darksand;}
        else if(d == 4){return Blocks.salt;}
        else if(d == 5){return Blocks.sand;}
        else if(d == 6){return Blocks.tar;}
        else if(d == 7){return Blocks.sand;}
        else if(d == 8){return Blocks.sand;}
        else if(d == 9){return Blocks.coreZone;}
        else if(d ==10){return Blocks.stone;}
        else if(d ==11){return Blocks.hotrock;}
        else if(d ==12){return Blocks.stone;}
    }
    else if(c == 3)
    {
        if(d==0){return Blocks.water;}
        else if(d == 1){return Blocks.sandWater;}
        else if(d == 2){return Blocks.sand;}
        else if(d == 3){return Blocks.salt;}
        else if(d == 4){return Blocks.coreZone;}
        else if(d == 5){return Blocks.salt;}
        else if(d == 6){return Blocks.stone;}
        else if(d == 7){return Blocks.hotrock;}
        else if(d == 8){return Blocks.stone;}
        else if(d == 9){return Blocks.stone;}
        else if(d ==10){return Blocks.snow;}
        else if(d ==11){return Blocks.iceSnow;}
        else if(d ==11){return Blocks.ice;}
    }
    else if(c == 4)
    {
        if(d==0){return Blocks.deepwater;}
        else if(d== 1){return Blocks.water;}
        else if(d== 2){return Blocks.sandWater;}
        else if(d== 3){return Blocks.sand;}
        else if(d== 4){return Blocks.salt;}
        else if(d== 5){return Blocks.coreZone;}
        else if(d== 6){return Blocks.hotrock;}
        else if(d== 7){return Blocks.basalt;}
        else if(d== 8){return Blocks.snow;}
        else if(d== 9){return Blocks.snow;}
        else if(d==10){return Blocks.snow;}
        else if(d==11){return Blocks.iceSnow;}
        else if(d==12){return Blocks.ice;}
    }
    else if(c == 5)
    {
        if(d==0){return Blocks.deepwater;}
        else if(d== 1){return Blocks.water;}
        else if(d== 2){return Blocks.sandWater;}
        else if(d== 3){return Blocks.sand;}
        else if(d== 4){return Blocks.tar;}
        else if(d== 5){return Blocks.coreZone;}
        else if(d== 6){return Blocks.moss;}
        else if(d== 7){return Blocks.iceSnow;}
        else if(d== 8){return Blocks.snow;}
        else if(d== 9){return Blocks.snow;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.snow;}
        else if(d==12){return Blocks.ice;}
    }
    else if(c == 6)
    {
        if(d==0){return Blocks.water;}
        else if(d== 1){return Blocks.sandWater;}
        else if(d== 2){return Blocks.sand;}
        else if(d== 4){return Blocks.moss;}
        else if(d== 5){return Blocks.tar;}
        else if(d== 6){return Blocks.snow;}
        else if(d== 7){return Blocks.basalt;}
        else if(d== 8){return Blocks.hotrock;}
        else if(d== 9){return Blocks.basalt;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.snow;}
        else if(d==12){return Blocks.ice;}
    }
    else if(c == 7){
        if(d==0){return Blocks.deepTaintedWater;}
        else if(d== 1){return Blocks.darksandTaintedWater;}
        else if(d== 2){return Blocks.darksand;}
        
        else if(d== 4){return Blocks.basalt;}
        else if(d== 5){return Blocks.moss;}
        else if(d== 6){return Blocks.basalt;}
        else if(d== 7){return Blocks.hotrock;}
        else if(d== 8){return Blocks.basalt;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.snow;}
        else if(d==12){return Blocks.ice;}
    }
    else if(c == 8){
        if(d==0){return Blocks.darkSandWater;}
        else if(d== 1){return Blocks.darksand;}
        
        else if(d== 3){return Blocks.tar;}
        else if(d== 4){return Blocks.moss;}
        else if(d== 5){return Blocks.sporeMoss;}
        else if(d== 6){return Blocks.snow;}
        else if(d== 7){return Blocks.basalt;}
        else if(d== 8){return Blocks.basalt;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.snow;}
        else if(d==12){return Blocks.ice;}
    }
    
    else if(c == 9){
        if(d==0){return Blocks.darksandWater;}
        else if(d== 1){return Blocks.darksand;}
        
        else if(d== 3){return Blocks.sporeMoss;}
        else if(d== 4){return Blocks.ice;}
        else if(d== 5){return Blocks.ice;}
        else if(d== 6){return Blocks.snow;}
        else if(d== 7){return Blocks.coreZone;}
        else if(d== 8){return Blocks.snow;}
        else if(d== 9){return Blocks.snow;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.ice;}
        else if(d==12){return Blocks.ice;}
    }
    else if(c ==10){
        if(d==0){return Blocks.deepTaintedWater;}
        else if(d== 1){return Blocks.darksandTaintedWater;}
        else if(d== 2){return Blocks.darksand;}
        else if(d== 3){return Blocks.tar;}
        else if(d== 4){return Blocks.sporeMoss;}
        else if(d== 5){return Blocks.sporeMoss;}
        else if(d== 6){return Blocks.ice;}
        else if(d== 7){return Blocks.snow;}
        else if(d== 8){return Blocks.snow;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.ice;}
        else if(d==12){return Blocks.ice;}
    }
    else if(c ==11){
        if(d==0){return Blocks.taintedWater;}
        else if(d== 1){return Blocks.darksandTaintedWater;}
        else if(d== 2){return Blocks.darksand;}
        else if(d== 3){return Blocks.sporeMoss;}
        else if(d== 4){return Blocks.moss;}
        else if(d== 5){return Blocks.sporeMoss;}
        else if(d== 6){return Blocks.ice;}
        else if(d== 7){return Blocks.iceSnow;}
        else if(d== 8){return Blocks.snow;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.ice;}
        else if(d==12){return Blocks.ice;}
    }
    else if(c ==12){
        if(d==0){return Blocks.darkSandWater;}
        else if(d== 1){return Blocks.darksand;}
        else if(d== 2){return Blocks.snow;}
        else if(d== 3){return Blocks.tar;}
        else if(d== 4){return Blocks.snow;}
        else if(d== 5){return Blocks.iceSnow;}
        else if(d== 6){return Blocks.ice;}
        else if(d==10){return Blocks.ice;}
        else if(d==11){return Blocks.ice;}
        else if(d==12){return Blocks.ice;}
    }
    
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
    return Mathf.pow(Simplex.noise3d(1, 7, 0.5, 0.33, pos.x, pos.y, pos.z), 2.3);
}

var all_enemy_bases = extend(SerpuloPlanetGenerator,{generateSector(sect){sect.generateEnemyBase=true;}});
var alt_genTile = extend(SerpuloPlanetGenerator,{genTile(po,ti) //function 1a
{
     ti.floor = get_block(po); //function 1b
     ti.block = ti.floor.asFloor().wall;
     if(Ridged.noise3d(1, po.x, po.y, po.z, 2, 22) > 0.1){ti.block = Blocks.air;}
}});

//default private offset values. 
var def_waterOffset = 0.07; var def_scl = 5;

// 
var unlock_all_sectors_all_low = extend(SerpuloPlanetGenerator,{allowLanding(s){return true}}); //unlock all sectors and turn all low.
