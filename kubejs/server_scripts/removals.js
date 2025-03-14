ServerEvents.recipes(e => {
    e.remove({ type: 'twilightforest:uncrafting' })
    e.remove({ type: 'twilightforest:crumble_horn' })
    e.remove({ type: 'twilightforest:transformation' })
    e.remove({ type: 'bclib:alloying' })
    e.remove({ type: 'bclib:anvil_2' })
    e.remove({ type: 'bclib:anvil_3' })
    e.remove({ type: 'bclib:anvil_5' })
    e.remove({ type: 'betternether:forge' })

    const idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        /bclib:.*/,
        'additionaladditions:powered_rails',
        'aether:skyroot_note_block',
        'aether:skyroot_jukebox'
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