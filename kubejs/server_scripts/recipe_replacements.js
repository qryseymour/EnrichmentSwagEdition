ServerEvents.recipes(e => {
    let ironToCopperRecipeItems = [
        'minecraft:piston',
        'minecraft:compass',
        'minecraft:powered_rail',
        'xtraarrows:magnet_kit',
        'twilightforest:fiery_ingot',
        'malum:cornered_weave',
        'galosphere:chandelier',
    ].forEach((item) => {
        e.replaceInput({ output: item }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
    })

    let glassToAmethystRecipeItems = [
        'minecraft:beacon',
        'minecraft:end_crystal',
    ].forEach((item) => {
        e.replaceInput({ output: item }, 'minecraft:glass', 'minecraft:amethyst_shard')
    })
})