// priority: 49

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    // reload everything (useful for reloading startup variables like fullRemovals)
    event.register(Commands.literal('fullreload')
        .requires(src => src.hasPermission(3))
        .executes(ctx => {
            let server = ctx.source.getServer()
            server.runCommandSilent('kubejs reload startup_scripts')
            server.runCommandSilent('kubejs reload server_scripts')
            server.runCommandSilent('kubejs reload client_scripts')
            server.runCommandSilent('kubejs reload lang')
            server.runCommand('reload')
            return 1
        })
    )

    // /originReset
    event.register(Commands.literal('freeOriginChangeSafeFreePunjabi2024NoVirus')
        .executes(ctx => {
            const player = ctx.source.player
            if (!player.stages.has('originReset')) {
                player.tell([
                    Text.red('Hey you!').bold(), Text.red(' This is a one-time free reset for your origin. It will open the Origin GUI for you to select a new Origin.'),
                    Text.red('\n\nYou can change your Origin later with the Orb of Origin, but note it\'s extensive crafting recipe.'),
                    Text.blue('\n\nClick here to confirm and reset.').clickRunCommand('/freeOriginChangeSafeFreePunjabi2024NoVirus confirm').hover(Text.gold('/freeOriginChangeSafeFreePunjabi2024NoVirus confirm')).underlined()
                ])
            } else {
                player.tell(Text.red('You\'ve already reset your origin.'))
                player.server.runCommandSilent(`playsound minecraft:entity.elder_guardian.curse player @p ${x} ${y} ${z}`);
                return 0
            }
            return 1
        })
        .then(Commands.literal('confirm').executes(ctx => {
            const player = ctx.source.player
            const server = player.server
            const playerUUID = player.getUuid()
            const {x, y, z} = player.block;
            if (!player.stages.has('originReset')) {
                player.stages.add('originReset')
                server.runCommandSilent(`execute as ${playerUUID} run origin gui`)
                server.runCommandSilent(`playsound minecraft:block.end_portal.spawn player @p ${x} ${y} ${z}`);
                server.runCommandSilent(`playsound minecraft:item.totem.use player @p ${x} ${y} ${z}`);
                server.runCommandSilent(`particle minecraft:sonic_boom ${x} ${y} ${z}`)
            } else {
                player.tell(Text.red('You\'ve already reset your origin.'))
                server.runCommandSilent(`playsound minecraft:entity.elder_guardian.curse player @p ${x} ${y} ${z}`);
                return 0
            }
            return 1
        }))
    )

    

    event.register(Commands.literal('unblockNether')
        .requires(src => src.hasPermission(4))
        .executes(ctx => {
            let server = ctx.source.getServer()
            var { players } = server;
            var { netherBlock } = server.persistentData;
            netherBlock.allowed = 1
            players.forEach(player => {
                player.tell(Text.darkRed('The Nether is now unblocked!'))
            })
            return 1
        })
    )

    event.register(Commands.literal('blockNether')
        .requires(src => src.hasPermission(4))
        .executes(ctx => {
            let server = ctx.source.getServer()
            var { players } = server;
            var { netherBlock } = server.persistentData;
            netherBlock.allowed = 0
            players.forEach(player => {
                player.tell(Text.darkRed('The Nether is now blocked!'))
            })
            return 1
        })
    )

    event.register(Commands.literal('unblockTwilight')
        .requires(src => src.hasPermission(4))
        .executes(ctx => {
            let server = ctx.source.getServer()
            var { players } = server;
            var { twilightForestBlock } = server.persistentData;
            twilightForestBlock.allowed = 1
            players.forEach(player => {
                player.tell(Text.darkBlue('The Twilight Forest is now unblocked!'))
            })
            return 1
        })
    )

    event.register(Commands.literal('blockTwilight')
        .requires(src => src.hasPermission(4))
        .executes(ctx => {
            let server = ctx.source.getServer()
            var { players } = server;
            var { twilightForestBlock } = server.persistentData;
            twilightForestBlock.allowed = 0
            players.forEach(player => {
                player.tell(Text.darkBlue('The Twilight Forest is now blocked!'))
            })
            return 1
        })
    )

    event.register(Commands.literal('unblockEnd')
        .requires(src => src.hasPermission(4))
        .executes(ctx => {
            let server = ctx.source.getServer()
            var { players } = server;
            var { endBlock } = server.persistentData;
            endBlock.allowed = 1
            players.forEach(player => {
                player.tell(Text.darkPurple('The End is now unblocked!'))
            })
            return 1
        })
    )

    event.register(Commands.literal('blockEnd')
        .requires(src => src.hasPermission(4))
        .executes(ctx => {
            let server = ctx.source.getServer()
            var { players } = server;
            var { endBlock } = server.persistentData;
            endBlock.allowed = 0
            players.forEach(player => {
                player.tell(Text.darkPurple('The End is now blocked!'))
            })
            return 1
        })
    )
})