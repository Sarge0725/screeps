module.exports = function() {

    //VARIABLES FOR THE MODULE
    var energy = Game.spawns.Spawn1.room.energyAvailable;
    console.log(energy);
    var creepsInRoom = Game.spawns.Spawn1.room.find(FIND_MY_CREEPS);
    console.log(creepsInRoom);

    //AMOUNT OF DIFFERENT CREEPS
    var harvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
    console.log(harvesters);
    var lorry = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry');

    //WHEN SHOULD I SPAWN A CREEP
    StructureSpawn.prototype.tryToSpawnCreep = function() {

        if (energy >= 300) {
            if (harvesters === 0) {
                this.spawnCustomCreep(energy, 'harvester');
            }
        }
    }

   // StructureSpawn.prototype.spawnCustomCreep =
}