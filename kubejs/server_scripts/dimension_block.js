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
        persistentData.twilightForestBlock = {
            ElderGuardianBlock: 1,
            WildfireBlock: 1,
            EvokerBlock: 1,
            AlchemistBlock: 1,
            ProvokerBlock: 1,
            SorcererBlock: 1,
            NecromancerBlock: 1,
            InquisitorBlock: 1,
            FirecallerBlock: 1,
            InvokerBlock: 1,
            allowed: 0
        }
    }
})

EntityEvents.death(event => {
    var { server } = event;
    var { netherBlock, twilightForestBlock } = server.persistentData;
    var { players } = server;
    const victimType = event.entity.type;
    const attackerType = event.source?.player?.type || "nothing";

    console.log(`${attackerType} killed a ${victimType}`)
    if (attackerType == 'minecraft:player' || attackerType == 'minecraft:wolf') {
        console.log(`attackType is valid!`)
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
                if (twilightForestBlock.ElderGuardianBlock > 0) {
                    twilightForestBlock.ElderGuardianBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.aqua('Sunk again... the Elder Guardian breathes no more...'))
                    })
                };
                break;
            case "friendsandfoes:wildfire":
                if (twilightForestBlock.WildfireBlock > 0) {
                    twilightForestBlock.WildfireBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.gold('Ashes to ashes... the Wildfire falls down...'))
                    })
                };
                break;
            case "minecraft:evoker":
                if (twilightForestBlock.EvokerBlock > 0) {
                    twilightForestBlock.EvokerBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.yellow('Vexing perflexing... the Evoker has fallen...'))
                    })
                };
                break;
            case "illagerinvasion:alchemist":
                if (twilightForestBlock.AlchemistBlock > 0) {
                    twilightForestBlock.AlchemistBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.darkBlue('Trouble Brewing... the Alchemist boils up...'))
                    })
                };
                break;
            case "illagerinvasion:provoker":
                if (twilightForestBlock.ProvokerBlock > 0) {
                    twilightForestBlock.ProvokerBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.darkRed('Invocated & invicted... the Provoker leaves this mortal coil...'))
                    })
                };
                break;
            case "illagerinvasion:sorcerer":
                if (twilightForestBlock.SorcererBlock > 0) {
                    twilightForestBlock.SorcererBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.darkPurple('Cast away... the Sorcerer has been exiled from life...'))
                    })
                };
                break;
            case "illagerinvasion:necromancer":
                if (twilightForestBlock.NecromancerBlock > 0) {
                    twilightForestBlock.NecromancerBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.darkGray('Sent to the grave... the Necromancer meets their fate...'))
                    })
                };
                break;
            case "illagerinvasion:inquisitor":
                if (twilightForestBlock.InquisitorBlock > 0) {
                    twilightForestBlock.InquisitorBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.blue('Sinned... the Inquisitor is divinely punished...'))
                    })
                };
                break;
            case "illagerinvasion:firecaller":
                if (twilightForestBlock.FirecallerBlock > 0) {
                    twilightForestBlock.FirecallerBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.red('Burnt out... the Firecaller sees the light...'))
                    })
                };
                break;
            case "illagerinvasion:invoker":
                if (twilightForestBlock.InvokerBlock > 0) {
                    twilightForestBlock.InvokerBlock = 0;
                    players.forEach(player => {
                        player.tell(Text.darkAqua('Annhilated... the Invoker passes on...'))
                    })
                };
                break;




        }
        console.log(`switch(victimType) applied`)

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
            twilightForestBlock.ElderGuardianBlock == 0 &&
            twilightForestBlock.WildfireBlock == 0 &&
            twilightForestBlock.EvokerBlock == 0 &&
            twilightForestBlock.AlchemistBlock == 0 &&
            twilightForestBlock.ProvokerBlock == 0 &&
            twilightForestBlock.SorcererBlock == 0 &&
            twilightForestBlock.NecromancerBlock == 0 &&
            twilightForestBlock.InquisitorBlock == 0 &&
            twilightForestBlock.FirecallerBlock == 0 &&
            twilightForestBlock.InvokerBlock == 0 &&
            twilightForestBlock.allowed != 1
        ) {
            twilightForestBlock.allowed = 1
            server.scheduleInTicks(60, (callback) => {
                server.players.forEach(player => {
                    player.tell(Text.aqua('The Twilight Forest is now permanently unblocked!').bold())
                })
            })
        }
    }
})

CommonAddedEvents.playerChangeDimension(event => {
    const { netherBlock, twilightForestBlock } = event.server.persistentData
	console.log(`Player Change Dimension event fired! event.player.level.dimension = ${event.player.level.dimension}`)
	console.log(`netherBlock.allowed = ${netherBlock.allowed}`)
	if (netherBlock.allowed != 1 && event.player.level.dimension == "minecraft:the_nether") {
        console.log(`noBlock not there! ID: ${event.entity.uuid}`)
        event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.entity.uuid} ~ -54 ~`)
    }
	if (twilightForestBlock.allowed != 1 && event.player.level.dimension == "twilightforest:twilight_forest") {
        console.log(`noBlock not there! ID: ${event.entity.uuid}`)
        event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.entity.uuid} ~ 255 ~`)
    }
});