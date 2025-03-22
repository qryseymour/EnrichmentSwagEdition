ServerEvents.recipes(e => {
    e.shaped(
        Item.of('tffaf:fin_cap', 1),
        [
            'FAF',
            'DBE',
            'FCF'
        ],
        {
            A: 'minecraft:prismarine_shard',
            B: 'minecraft:iron_helmet',
            C: 'tffaf:manastone_powder',
            D: 'tide:bass',
            E: 'tide:trout',
            F: 'minecraft:salmon'
        }
    ).id('tffaf:fin_cap')
    
    e.replaceInput({ output: 'tffaf:icicle_aglets' }, 'minecraft:packed_ice', 'betterend:dense_emerald_ice')

    e.shaped(
        Item.of('tffaf:iron_gauntlet', 1),
        [
            'BAB',
            'BCB',
            'DDD'
        ],
        {
            A: 'tffaf:manastone_powder',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:iron_block',
            D: 'friendsandfoes:wildfire_crown_fragment'
        }
    ).id('tffaf:iron_gauntlet')

    e.shaped(
        Item.of('tffaf:old_mining_helmet', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'minecraft:torch',
            B: 'minecraft:iron_helmet',
            C: 'tffaf:manastone_powder',
            D: 'enderzoology:ender_charge'
        }
    ).id('tffaf:old_mining_helmet')

    e.shaped(
        Item.of('tffaf:running_shoes', 1),
        [
            'D D',
            'A A',
            'BCB'
        ],
        {
            A: 'minecraft:string',
            B: 'minecraft:leather',
            C: 'tffaf:manastone_powder',
            D: 'mythicupgrades:peridot'
        }
    ).id('tffaf:running_shoes')

    e.shaped(
        Item.of('tffaf:lucky_pickaxe_head', 1),
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'minecraft:lead',
            B: 'minecraft:golden_pickaxe',
            C: 'tffaf:manastone_powder',
            D: 'mythicupgrades:topaz'
        }
    ).id('tffaf:lucky_pickaxe_head')
    
    e.shapeless('tffaf:eternal_sandwich', [
        'tffaf:manastone_powder',
        'bakery:sandwich',
        'bakery:vegetable_sandwich',
        'bakery:grilled_salmon_sandwich',
        'bakery:grilled_bacon_sandwich',
        'meadow:cheese_sandwich',
        'brewery:fried_chicken',
        'additionaladditions:fried_egg',
        'artifacts:onion_ring'
    ]).id('tffaf:eternal_sandwich')

    e.shaped(
        Item.of('things:rabbit_foot_charm', 1),
        [
            'DAD',
            'ABA',
            'ACA'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'tffaf:manastone_powder',
            C: 'minecraft:rabbit_foot',
            D: 'eanimalmod:frog_leg'
        }
    ).id('things:rabbit_foot_charm')

    e.shaped(
        Item.of('tffaf:rabbits_charm', 1),
        [
            'DAE',
            'ABA',
            'DCE'
        ],
        {
            A: 'botania:mana_string',
            B: 'tffaf:manastone_powder',
            C: 'minecraft:rabbit_foot',
            D: 'mythicupgrades:aquamarine',
            E: 'mythicupgrades:topaz'
        }
    ).id('tffaf:rabbits_charm')
})