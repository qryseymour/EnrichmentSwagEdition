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
})