ServerEvents.recipes(e => {
    e.remove({ id: 'charm:extra_recipes/bundle' })

    e.shaped(
        Item.of('travelersbackpack:standard', 1),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:bundle',
            B: 'travelersbackpack:backpack_tank',
            C: '#c:chests',
            D: 'minecraft:leather',
            E: '#travelersbackpack:sleeping_bags'
        }
    ).id('travelersbackpack:standard')

    e.remove({ id: 'travelersbackpack:standard_no_tanks' })

    e.shaped(
        Item.of('travelersbackpack:iron_tier_upgrade', 1),
        [
            ' A ',
            'BCB',
            '   '
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:bundle',
            C: 'travelersbackpack:blank_upgrade'
        }
    ).id('travelersbackpack:iron_tier_upgrade')

    e.shaped(
        Item.of('travelersbackpack:gold_tier_upgrade', 1),
        [
            ' A ',
            'BCB',
            '   '
        ],
        {
            A: 'minecraft:gold_block',
            B: 'minecraft:bundle',
            C: 'travelersbackpack:blank_upgrade'
        }
    ).id('travelersbackpack:gold_tier_upgrade')

    e.shaped(
        Item.of('travelersbackpack:diamond_tier_upgrade', 1),
        [
            ' A ',
            'BCB',
            '   '
        ],
        {
            A: 'minecraft:diamond_block',
            B: 'minecraft:bundle',
            C: 'travelersbackpack:blank_upgrade'
        }
    ).id('travelersbackpack:diamond_tier_upgrade'),

    e.smithing('travelersbackpack:netherite_tier_upgrade', 'minecraft:netherite_upgrade_smithing_template', 'travelersbackpack:diamond_tier_upgrade', 'minecraft:netherite_ingot').id('travelersbackpack:netherite_tier_upgrade')

    e.shaped(
        Item.of('travelersbackpack:backpack_tank', 1),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: '#c:glass_blocks',
            B: '#c:iron_ingots',
            C: 'minecraft:bucket'
        }
    ).id('travelersbackpack:backpack_tank')
    
    e.replaceInput({ id: 'travelersbackpack:jukebox_upgrade' }, 'minecraft:jukebox', 'additionaladditions:pocket_jukebox')

    e.shaped(
        Item.of('travelersbackpack:emerald', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'the_bumblezone:honey_crystal_shards',
            B: 'minecraft:emerald',
            C: 'travelersbackpack:standard',
        }
    ).id('travelersbackpack:emerald')

    e.shaped(
        Item.of('travelersbackpack:lapis', 1),
        [
            'AAA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:lapis_block',
            B: 'minecraft:experience_bottle',
            C: 'travelersbackpack:standard',
        }
    ).id('travelersbackpack:lapis')

    e.shaped(
        Item.of('travelersbackpack:quartz', 1),
        [
            'AAA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:quartz_block',
            B: 'mythicupgrades:ruby_potion',
            C: 'travelersbackpack:standard',
        }
    ).id('travelersbackpack:quartz')

    e.shaped(
        Item.of('travelersbackpack:sponge', 1),
        [
            'BAB',
            'BCB',
            'BBB'
        ],
        {
            A: 'minecraft:cake',
            B: 'minecraft:ghast_tear',
            C: 'travelersbackpack:standard',
        }
    ).id('travelersbackpack:sponge')

    e.shaped(
        Item.of('travelersbackpack:hay', 1),
        [
            'BAB',
            'BCB',
            'BBB'
        ],
        {
            A: 'minecraft:hay_block',
            B: 'minecraft:bone_meal',
            C: 'travelersbackpack:standard',
        }
    ).id('travelersbackpack:hay')

    e.shaped(
        Item.of('travelersbackpack:dragon', 1),
        [
            'BAB',
            'FCD',
            'EGE'
        ],
        {
            A: 'minecraft:dragon_head',
            B: 'minecraft:dragon_breath',
            C: 'travelersbackpack:cake',
            D: 'travelersbackpack:end',
            E: 'minecraft:ender_pearl',
            F: 'travelersbackpack:ghast',
            G: 'botania:flare_chakram'
        }
    ).id('travelersbackpack:dragon')

    e.shaped(
        Item.of('travelersbackpack:enderman', 1),
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: 'minecraft:ender_pearl',
            B: 'friendsandfoes:crab_claw',
            C: 'travelersbackpack:standard',
        }
    ).id('travelersbackpack:enderman')

    e.shaped(
        Item.of('travelersbackpack:wither', 1),
        [
            'AAA',
            'BCB',
            'DBE'
        ],
        {
            A: 'minecraft:wither_skeleton_skull',
            B: 'minecraft:soul_sand',
            C: 'travelersbackpack:standard',
            D: 'minecraft:wither_rose',
            E: 'majruszsdifficulty:cerberus_fang'
        }
    ).id('travelersbackpack:wither')
    
    e.replaceInput({ id: 'travelersbackpack:blaze' }, 'travelersbackpack:standard', 'travelersbackpack:magma_cube')
})