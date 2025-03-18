// priority: 50


ServerEvents.loaded(event => {
    event.server.runCommandSilent('reload')
    // Auto chunky
    let nbOnlinePlayers = event.getServer().getPlayers().length;
    if (nbOnlinePlayers <= 0) {
        event.server.runCommandSilent('chunky continue')
    }   
})


// On player login, pause chunky
PlayerEvents.loggedIn(event => {
    event.server.runCommandSilent('chunky pause')
})

// On player disconnect, start chunky, if there are no more players
PlayerEvents.loggedOut(event => {
    let nbOnlinePlayers = event.getServer().getPlayers().length;

    // Note: When a player disconnects, he still counts as online for a few moments
    if (nbOnlinePlayers <= 1) {
        event.server.runCommandSilent('chunky continue')
    }
})