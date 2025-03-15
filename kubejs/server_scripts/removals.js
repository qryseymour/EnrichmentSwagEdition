ServerEvents.recipes(e => {
    const idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        'additionaladditions:powered_rails',
        'aether:skyroot_note_block',
        'aether:skyroot_jukebox',
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
        'artifacts:flippers',
        'aether:invisibility_cloak'
    ].forEach((removal) => {
        e.addLootTableModifier(/.*/).removeLoot(removal)
    })
})