var roleLorry = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.isTransporting && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.isTransporting = false;
            creep.say('🔄 Reload');
	    }
	    if(!creep.memory.isTransporting && creep.store.getFreeCapacity() == 0) {
	        creep.memory.isTransporting = true;
	        creep.say('⚡ Move');
        }

        if(creep.memory.isTransporting) {
            creep.depositEnergy();
			return true;
        }
        if (!creep.memory.isTransporting) {
            creep.droppedMining();
            return true;
        }
    }
};

module.exports = roleLorry;