ServerEvents.loaded(event => {
    var { server } = event;
    var { persistentData } = server;
    
    if (!server.persistentData.netherBlock) {
        console.log(`Supplementing dimension block data`)
        persistentData.netherBlock = {
            RavagerBlock: 1,
            MutantZombieBlock: 1,
            MutantSkeletonBlock: 1,
            MutantCreeperBlock: 1,
            MutantEndermanBlock: 1,
            allowed: 0
        }
        persistentData.endBlock = {
            ElderGuardianBlock: 1,
            WildfireBlock: 1,
            EvokerBlock: 1,
            WitherBlock: 1,
            allowed: 0
        }
    }
})

EntityEvents.death(event => {
    var { server } = event;
    var { netherBlock, endBlock } = server.persistentData;
    var { players } = server;
    const victimType = event.entity.type;
    const attackerType = event.source?.player?.type || "nothing";

    if (attackerType == 'minecraft:player' || attackerType == 'minecraft:wolf') {
        switch(victimType) {
            case "minecraft:ravager":
                if (netherBlock.RavagerBlock > 0) {
                    netherBlock.RavagerBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.gray('The Ravager eats dirt!'))
                    })
                };
                break;
            case "mutantmonsters:mutant_zombie":
                if (netherBlock.MutantZombieBlock > 0) {
                    netherBlock.MutantZombieBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.darkGreen('The Mutant Zombie has been defiled!'))
                    })
                };
                break;
            case "mutantmonsters:mutant_creeper":
                if (netherBlock.MutantCreeperBlock > 0) {
                    netherBlock.MutantCreeperBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.green('The Mutant Creeper has combusted into better days!'))
                    })
                };
                break;
            case "mutantmonsters:mutant_skeleton":
                if (netherBlock.MutantSkeletonBlock > 0) {
                    netherBlock.MutantSkeletonBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.white('The Mutant Skeleton has gone to pieces!'))
                    })
                };
                break;
            case "mutantmonsters:mutant_enderman":
                if (netherBlock.MutantEndermanBlock > 0) {
                    netherBlock.MutantEndermanBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.lightPurple('The Mutant Enderman is torn asundre!'))
                    })
                };
                break;
            case "minecraft:elder_guardian":
                if (endBlock.ElderGuardianBlock > 0) {
                    endBlock.ElderGuardianBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.aqua('Sunk again... the Elder Guardian breathes no more...'))
                    })
                };
                break;
            case "friendsandfoes:wildfire":
                if (endBlock.WildfireBlock > 0) {
                    endBlock.WildfireBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.gold('Ashes to ashes... the Wildfire falls down...'))
                    })
                };
                break;
            case "minecraft:evoker":
                if (endBlock.EvokerBlock > 0) {
                    endBlock.EvokerBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.yellow('Vexing perflexing... the Evoker has fallen...'))
                    })
                };
                break;
            case "minecraft:wither":
                if (endBlock.WitherBlock > 0) {
                    endBlock.WitherBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.black('The Wither has been defeated!'))
                    })
                };
                break;
        }

        if (
            netherBlock.RavagerBlock == 0 &&
            netherBlock.MutantZombieBlock == 0 &&
            netherBlock.MutantCreeperBlock == 0 &&
            netherBlock.MutantEndermanBlock == 0 &&
            netherBlock.MutantSkeletonBlock == 0 &&
            netherBlock.allowed != 1
        ) { 
            netherBlock.allowed = 1
            server.scheduleInTicks(60, (callback) => {
                server.players.forEach(player => {
                    player.tell(Text.darkRed('The Nether is now permanently unblocked!').bold())
                })
            })
        }
        if (
            endBlock.ElderGuardianBlock == 0 &&
            endBlock.WildfireBlock == 0 &&
            endBlock.EvokerBlock == 0 &&
            endBlock.WitherBlock == 0 &&
            endBlock.allowed != 1
        ) {
            endBlock.allowed = 1
            server.scheduleInTicks(60, (callback) => {
                server.players.forEach(player => {
                    player.tell(Text.darkPurple('The End is now permanently unblocked!').bold())
                })
            })
        }
    }
})

CommonAddedEvents.playerChangeDimension(event => {
    const { netherBlock, endBlock } = event.server.persistentData
	if (netherBlock.allowed != 1 && event.player.level.dimension == "minecraft:the_nether") {
        event.player.statusMessage = Text.darkRed("The depths of hell reject this unworthy soul...")
        event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.entity.uuid} ~ -54 ~`)
    }
	if (endBlock.allowed != 1 && event.player.level.dimension == "minecraft:the_end") {
        event.player.statusMessage = Text.darkPurple("This is not the end for you...")
        event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.entity.uuid} ~ 255 ~`)
    }
});