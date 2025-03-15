ServerEvents.recipes(e => {
    e.shaped(
        Item.of('create:schematicannon', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:iron_block',
            B: '#minecraft:logs',
            C: 'supplementaries:cannon',
            D: 'minecraft:smooth_stone',
            E: 'minecraft:dispenser'
        }
    ).id('create:crafting/schematics/schematicannon')
})