ServerEvents.recipes(e => {
    e.shaped(
        Item.of('tffaf:fin_cap', 1),
        [
            ' A ',
            'DBD',
            ' C '
        ],
        {
            A: 'minecraft:prismarine_shard',
            B: 'artifacts:flippers',
            C: 'tffaf:manastone_powder',
            D: 'eanimalmod:frog_leg',
        }
    ).id('tffaf:fin_cap')

    e.shaped(
        Item.of('tffaf:wither_ring', 1),
        [
            'DAD',
            'CBC',
            'DCD'
        ],
        {
            A: 'minecraft:nether_star',
            B: 'tffaf:manastone_powder',
            C: 'minecraft:gold_ingot',
            D: 'mutantmonsters:mutant_skeleton_rib',
        }
    ).id('tffaf:wither_ring')
    
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
        Item.of('artifacts:power_glove', 1),
        [
            'CBC',
            'EAE',
            'EDE'
        ],
        {
            A: 'things:gleaming_compound',
            B: 'tffaf:iron_gauntlet',
            C: 'minecraft:netherite_ingot',
            D: 'minecraft:obsidian',
            E: 'minecraft:iron_ingot',
        }
    ).id('artifacts:power_glove')

    e.shaped(
        Item.of('things:hades_crystal', 1),
        [
            'DAD',
            'CBC',
            'DAD'
        ],
        {
            A: 'things:gleaming_compound',
            B: 'botania:super_lava_pendant',
            C: 'minecraft:magma_cream',
            D: 'minecraft:magma_block'
        }
    ).id('things:hades_crystal')

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
            D: 'minecraft:polished_granite'
        }
    ).id('tffaf:old_mining_helmet')

    e.shaped(
        Item.of('things:monocle', 1),
        [
            'DBD',
            'BCB',
            'DBA'
        ],
        {
            A: 'things:gleaming_powder',
            B: 'minecraft:gold_ingot',
            C: 'tffaf:old_mining_helmet',
            D: 'enderzoology:ender_fragment'
        }
    ).id('things:monocle')

    e.shaped(
        Item.of('tffaf:cowboy_spurs', 1),
        [
            '  B',
            'BBC',
            'AD '
        ],
        {
            A: 'tffaf:manastone_powder',
            B: 'minecraft:leather',
            C: 'minecraft:copper_ingot',
            D: 'mutantmonsters:mutant_skeleton_boots'
        }
    ).id('tffaf:cowboy_spurs')

    e.shaped(
        Item.of('tffaf:eye_patch', 1),
        [
            '  B',
            'BBC',
            'AD '
        ],
        {
            A: 'tffaf:manastone_powder',
            B: 'minecraft:leather',
            C: 'minecraft:black_dye',
            D: 'majruszsdifficulty:soul_jar'
        }
    ).id('tffaf:eye_patch')

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

    e.shaped(
        Item.of('things:mining_gloves', 1),
        [
            'DBD',
            'DCD',
            'DAD'
        ],
        {
            A: 'things:gleaming_compound',
            B: 'minecraft:netherite_ingot',
            C: 'tffaf:lucky_pickaxe_head',
            D: 'minecraft:leather'
        }
    ).id('things:mining_gloves')

    e.shaped(
        Item.of('tffaf:feather_charms', 1),
        [
            ' C ',
            'BAB',
            '   '
        ],
        {
            A: 'tffaf:manastone_powder',
            B: 'minecraft:feather',
            C: 'minecraft:dune_armor_trim_smithing_template'
        }
    ).id('tffaf:feather_charms')
    
    e.shapeless('tffaf:eternal_sandwich', [
        'tffaf:manastone_powder',
        'bakery:sandwich',
        'bakery:vegetable_sandwich',
        'bakery:grilled_salmon_sandwich',
        'bakery:grilled_bacon_sandwich',
        'additionaladditions:chicken_nugget',
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
            B: 'things:gleaming_compound',
            C: 'things:rabbit_foot_charm',
            D: 'mythicupgrades:aquamarine',
            E: 'mythicupgrades:topaz'
        }
    ).id('tffaf:rabbits_charm')
})