ServerEvents.recipes(e => {
    const idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        /bclib:.*/,
        'additionaladditions:powered_rails'
    ].forEach(recipeID => {
        e.remove({ id: recipeID })
    })
})