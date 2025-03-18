const teleporters = [
    'minecraft:ender_pearl',
    'endermanoverhaul:corrupted_pearl',
    'endermanoverhaul:soul_pearl',
    'endermanoverhaul:ancient_pearl',
    'endermanoverhaul:bubble_pearl',
    'endermanoverhaul:summoner_pearl',
    'endermanoverhaul:icy_pearl',
    'endermanoverhaul:crimson_pearl',
    'endermanoverhaul:warped_pearl',
    'mutantmonsters:endersoul_hand',
    'bosses_of_mass_destruction:charged_ender_pearl',
    'bygonenether:warped_ender_pearl'
]

const applyItemlistCooldown = (player, itemList, ticks) => {
    itemList.forEach((item) => {
        player.addItemCooldown(item, ticks)
    })
}

const enderPearls = [
    'minecraft:ender_pearl',
    'endermanoverhaul:corrupted_pearl',
    'endermanoverhaul:soul_pearl',
    'endermanoverhaul:ancient_pearl',
    'endermanoverhaul:bubble_pearl',
    'endermanoverhaul:summoner_pearl',
    'endermanoverhaul:icy_pearl',
    'endermanoverhaul:crimson_pearl',
    'endermanoverhaul:warped_pearl',
    'bygonenether:warped_ender_pearl'
].forEach(pearl => {
    ItemEvents.rightClicked(pearl, e => {
        if (e.player.inWater) {
            e.cancel();
        } else {
            e.server.scheduleInTicks(0, (callback) => {
                applyItemlistCooldown(e.player, teleporters, 60)
            })
        }
    })
})

ItemEvents.rightClicked('bosses_of_mass_destruction:charged_ender_pearl', e => {
    if (e.player.inWater) {
        e.cancel();
    } else {
        e.server.scheduleInTicks(0, (callback) => {
            applyItemlistCooldown(e.player, teleporters, 540)
        })
    }
})

ItemEvents.rightClicked('mutantmonsters:endersoul_hand', e => {
    if (e.player.inWater || !e.player.isShiftKeyDown()) {
        e.cancel();
    }
    else {
        e.server.scheduleInTicks(0, (callback) => {
            applyItemlistCooldown(e.player, teleporters, 120)
        })
    }
})