ServerEvents.recipes(e => {
    const idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        /bclib:.*/,
        'farmersdelight:bread_from_smelting',
        'farmersdelight:bread_from_smoking',
        'ad_astra:iron_rod',
        'additionaladditions:powered_rails'
    ].forEach(recipeID => {
        e.remove({ id: recipeID })
    })
})