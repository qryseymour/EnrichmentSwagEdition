ServerEvents.recipes(e => {
    e.shaped(
        Item.of('minecraft:daylight_detector', 1),
        [
            'AAA',
            'BBB',
            'CCC'
        ],
        {
            A: 'minecraft:amethyst_shard',
            B: 'minecraft:quartz',
            C: '#minecraft:wooden_slabs'
        }
    ).id('minecraft:daylight_detector')

    e.shaped(
        Item.of('minecraft:observer', 1),
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:redstone',
            C: 'minecraft:copper_ingot',
            D: 'minecraft:quartz'
        }
    ).id('minecraft:observer')

    e.shaped(
        Item.of('minecraft:activator_rail', 6),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:stick',
            C: 'minecraft:copper_ingot'
        }
    ).id('minecraft:activator_rail')

    e.shaped(
        Item.of('minecraft:bucket', 1),
        [
            'A A',
            ' A ',
            '   '
        ],
        {
            A: 'minecraft:copper_ingot'
        }
    ).id('enrichment2:bucket_2')

    e.shaped(
        Item.of('minecraft:jukebox', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:amethyst_shard',
            C: 'minecraft:diamond'
        }
    ).id('minecraft:jukebox')

    e.shaped(
        Item.of('minecraft:note_block', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:amethyst_shard',
            C: 'minecraft:redstone'
        }
    ).id('minecraft:note_block')

    e.shaped(
        Item.of('minecraft:ender_eye', 1),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            A: 'minecraft:pitcher_pod',
            B: 'minecraft:prismarine_shard',
            C: 'minecraft:ender_pearl',
            D: 'minecraft:blaze_powder',
            E: 'minecraft:echo_shard'
        }
    ).id('minecraft:ender_eye')

    e.shaped(
        Item.of('minecraft:ender_eye', 3),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: 'minecraft:blaze_powder',
            B: 'minecraft:pitcher_pod',
            C: 'minecraft:nautilus_shell',
            D: 'minecraft:scute',
            E: 'minecraft:ender_pearl',
            F: 'minecraft:prismarine_shard',
            G: 'minecraft:glow_ink_sac',
            H: 'minecraft:echo_shard',
            I: 'minecraft:amethyst_shard',
        }
    ).id('enrichment2:ender_eye_2')

    e.shaped(
        Item.of('minecraft:blackstone', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:charcoal'
        }
    ).id('enrichment2:blackstone')

    e.shaped(
        Item.of('thecopperrail:copper_rail', 12),
        [
            'ADA',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:stick',
            C: 'minecraft:redstone',
            D: 'minecraft:arrow'
        }
    ).id('thecopperrail:copper_rail')

    let horseArmorRecipes = [
        { material: "minecraft:iron_ingot", type: "iron" },
        { material: "minecraft:gold_ingot", type: "golden" },
        { material: "minecraft:diamond", type: "diamond" },
    ].forEach(pairing => {
        e.shaped(
            Item.of(`minecraft:${pairing.type}_horse_armor`, 1),
            [
                'A A',
                'AAA',
                'A A'
            ],
            {
                A: pairing.material
            }
        ).id(`enrichment2:${pairing.type}_horse_armor_recipe`)
    })

    e.shapeless('minecraft:beetroot_soup', ['minecraft:bowl', '3x minecraft:beetroot']).id('minecraft:beetroot_soup')
    
    e.shapeless('minecraft:orange_dye', ['minecraft:carrot']).id('enrichment2:carrot_dye')
    
    e.shapeless('minecraft:yellow_dye', ['minecraft:poisonous_potato']).id('enrichment2:poisoned_potato_dye')
})