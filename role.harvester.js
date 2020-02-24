var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.isWorking && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.isWorking = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.isWorking && creep.store.getFreeCapacity() == 0) {
	        creep.memory.isWorking = true;
	        creep.say('⚡ transfer');
	    }

	    if(!creep.memory.isWorking) {
            creep.harvestEnergy();
			return true;
        }
        else {
            creep.depositEnergy();
            return true;
        }
    }
};

module.exports = roleHarvester;