//require('prototype.room')();
//require('prototype.spawn')();
//require('prototype.creep')();
//require('prototype.tower')();
//require('prototype.container')();

module.exports.loop = function () {

    //DELETE OLD CREEPS FROM MEMORY
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            let creep = Memory.creeps[name];
            console.log(creep.role + " " + name + " died.");
            delete Memory.creeps[name];
        }
    }

    //SPAWN A CREEP
    // for (let spawn in Game.spawns) {
    //     // Game.rooms.sim.tryToSpawnCreep();
    //     Game.spawns['spawn1'].tryToSpawnCreep();
    // }

    //WHAT IS THE ROOM NAME
    //TODO REFACTOR FOR MULTIPLE ROOMS
    var roomName = Game.spawns['Spawn1'].room.name;
    console.log('My Room name is : ' + roomName);

    //WAT IS THE SPWAN POSSITION
    //    console.log(Game.spawns['Spawn1'].pos.x + "," + Game.spawns['Spawn1'].pos.y);

    // HOW MUCH ENERGY IS THERE IN THE ROOM
    // var availableEnergy = roomName.spawn.energyAvailable;
    // var capacityEnergy = Game.spawns.spawn.energyCapacityAvailable;
    // console.log(roomName +' = Available Energy : '+ availableEnergy, 'of '+ capacityEnergy);

    //THIS RETURNS THE ID OF THE SOURCES ARE THERE IN THE ROOM
    var sources = (Game.spawns['Spawn1'].room.find(FIND_SOURCES));
    //console.log(sources);
    
    //THIS RETURNS THE ID OF THE ACTIVE SOURCES ARE THERE IN THE ROOM
    var activeSource =  Game.spawns['Spawn1'].room.find(FIND_SOURCES_ACTIVE);
    // console.log(activeSource);

    //FIND THE POSITION OF THE SOURCE
    var i;
    //FINDS THE POSITIONS FOR THE SOURCES
    for (i in sources) {

        //GET THE NUMBER OF SOURCES IN THE ROOM
        var source = sources[i]
        // console.log('source Number :' + i);
        // console.log('Source ID ' + source);

        //GET THE POSITION OF ALL THE SOURCES IN THE ROOM
        var sourcePos = source.pos
        // console.log('Source Position' + sourcePos);
        // console.log('Source ' + i + ' and my ID is ' + source + ' my position is ' + sourcePos);

        
        //FIND WHAT IS IN THE TERRAIN NEXT TO THE SOURCE
        var j;
        for (j = -1; j < 2; j++) {
            var k;
            for (k = -1; k < 2; k++){
                //THIS RETURNS THE TYPE OF TERRAIN
                //RETURNS OBJECT OBJECT
                var roomTerrain = Game.map.getRoomTerrain(roomName)
                // console.log('what is the room terrain ' + roomTerrain);

                //WHAT IS THE NEW X POSITION OF THE TERRAIN NEXT TO THE SOURCE
                var sourceNextX = sourcePos.x+k;
                // console.log('My x is ' + sourceNextX);

                //WHAT IS THE NEW X POSITION OF THE TERRAIN NEXT TO THE SOURCE
                var sourceNextY = sourcePos.y+j;
                // console.log('My y is ' + sourceNextY);

                //THIS RETURNS THE TYPE OF TERRAIN
                var sourceTerrain = roomTerrain.get(sourceNextX, sourceNextY);
                // console.log('Terrain is ' + sourceTerrain);

                //SHOW ME WHAT IS THE STRINGS FOR THE VALUES THAT WAS RECEIVED 
                //IF IT IS A PLAIN OR SWAMP BUILD A CONTAINER NEXT TO THE SOURCE
                // TODO - REFACTOR CREATE CONSTRUCTIONSITES
                switch (sourceTerrain) {
                    case TERRAIN_MASK_WALL:
                        //console.log('Terrain is a wall' + ' My x is ' + sourceNextX + ' My y is ' + sourceNextY);
                        break;
                    case TERRAIN_MASK_SWAMP:
                        // console.log('Terrain is a swamp' + ' My x is ' + sourceNextX + ' My y is ' + sourceNextY);
                        const myPoisitionSwamp = [sourceNextX, sourceNextY] ; {
                            Game.rooms.sim.createConstructionSite(sourceNextX, sourceNextY, STRUCTURE_CONTAINER);
                        };
                        // console.log('Container Created in swamp location ' + myPoisitionSwamp);
                        break;
                    case TERRAIN_MASK_LAVA:
                        //console.log('Terrain is a lava' + ' My x is ' + sourceNextX + ' My y is ' + sourceNextY);
                        const myPoisitionLava = [sourceNextX, sourceNextY] ; {
                        //Game.rooms.sim.createConstructionSite(sourceNextX, sourceNextY, STRUCTURE_CONTAINER);
                        };
                        // console.log('Container Created in lava location ' + myPoisitionLava);
                        break;
                    default:
                        // console.log('Terrain is a plain' + ' My x is ' + sourceNextX + ' My y is ' + sourceNextY);
                        const myPoisitionPlain = [sourceNextX, sourceNextY] ; {
                            Game.rooms.sim.createConstructionSite(sourceNextX, sourceNextY, STRUCTURE_CONTAINER);
                        };
                        // console.log('Container Created in plain location ' + myPoisitionPlain);
                        break;
                }
            }
        }
    }

//console.log(JSON.stringify(Game.spawns));
//console.log(JSON.stringify(Game));


//     for(let sourceName in sources){

//         let source = sources[sourceName];

//        if(Memory.source == undefined){
//             Memory.source = {};
//         }

//         if(Memory.source[source.id] == undefined){
            // Memory.source[source.id] = {
                // hasMiner: false, hasLorry: false};
//         }
//         //Check if they need to be closed.
//         var sourceClose = (source.energy[RESOURCE_ENERGY] <= 300);
//         //console.log(sourceClose);

//         if (source.energyCapacity[RESOURCE_ENERGY] <= 300) {
//             source.setClosed();
            
//         }
//         var sourceOpen = (source.energy[RESOURCE_ENERGY] >= 1500);
// //        console.log(sourceOpen);

//         if (source.energyCapacity[RESOURCE_ENERGY] >= 1500) {
//             source.setOpen();
            
//        }
    }
