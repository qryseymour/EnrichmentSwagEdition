ServerEvents.recipes(e => {
    const idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        'additionaladditions:powered_rails',
        'create:haunting/lapis_recycling'
    ].forEach(recipeID => {
        e.remove({ id: recipeID })
    })
})

LootJS.modifiers(e => {
    let lootRemovals = [
        'artifacts:bunny_hoppers',
        'artifacts:steadfast_spikes',
        'artifacts:running_shoes',
    ].forEach((removal) => {
        e.addLootTableModifier(/.*/).removeLoot(removal)
    })

    e.addBlockLootModifier(/.*/).removeLoot('betternether:pig_statue_respawner')
})