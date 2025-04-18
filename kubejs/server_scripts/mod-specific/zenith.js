ServerEvents.recipes(e => {
    e.shaped(
        Item.of('zenith:simple_reforging_table', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: '#railways:internal/ingots/iron_ingots',
            B: 'zenith:gem_dust',
            C: 'minecraft:enchanting_table',
            D: 'minecraft:smooth_stone',
            E: 'majruszsdifficulty:soul_jar'
        }
    ).id('zenith:simple_reforging_table')
    
    e.shaped(
        Item.of('zenith:reforging_table', 1),
        [
            'EAE',
            'BCB',
            'DDD'
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'zenith:epic_material',
            C: 'zenith:simple_reforging_table',
            D: 'minecraft:nether_bricks',
            E: 'illagerinvasion:unusual_dust'
        }
    ).id('zenith:reforging_table')
})