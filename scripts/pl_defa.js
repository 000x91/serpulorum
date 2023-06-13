// this script is seperated form main because no errors is found here and this is SerpuloPlanetGenerator as it is. 
Events.on(ContentInitEvent, e => {

    Vars.content.planet("serpul_clones-s1_r5.67").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-s1_r9.99").generator = new SerpuloPlanetGenerator(); //same seed different sizes will make the maps different
    Vars.content.planet("serpul_clones-serpulq").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpulr").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpuls").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("serpul_clones-serpult").generator = new SerpuloPlanetGenerator(); // the larger the planet size, the larger map size 

});

