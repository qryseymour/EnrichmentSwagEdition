ServerEvents.recipes(e => {
    e.shaped(
        Item.of('immersive_paintings:painting', 1),
        [
            ' A ',
            'BCB',
            'BBB'
        ],
        {
            A: 'botania:mana_string',
            B: 'minecraft:painting',
            C: 'ae2:color_applicator'
        }
    ).id('immersive_paintings:painting')
    
    e.shaped(
        Item.of('waterframes:remote', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: 'minecraft:amethyst_shard',
            B: 'minecraft:torchflower',
            C: 'ae2:printed_engineering_processor'
        }
    ).id('waterframes:remote')
    
    e.shaped(
        Item.of('waterframes:frame', 1),
        [
            'ABA',
            'ACE',
            'ADA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:torchflower',
            C: 'immersive_paintings:painting',
            D: 'waterframes:remote',
            E: 'vinurl:custom_record'
        }
    ).id('waterframes:frame')
    
    e.shaped(
        Item.of('waterframes:projector', 1),
        [
            'GCE',
            'FAB',
            'EDE'
        ],
        {
            A: 'immersive_paintings:painting',
            B: 'botania:lens_paint',
            C: 'minecraft:calibrated_sculk_sensor',
            D: 'waterframes:remote',
            E: 'minecraft:iron_block',
            F: 'minecraft:glowstone',
            G: 'vinurl:custom_record'
        }
    ).id('waterframes:projector')
    
    e.shaped(
        Item.of('waterframes:tv', 1),
        [
            'HAF',
            ' BC',
            'GED'
        ],
        {
            A: 'minecraft:sculk_sensor',
            B: 'waterframes:frame',
            C: 'travelersbackpack:jukebox_upgrade',
            D: '#ae2:smart_cable',
            E: 'ae2:color_applicator',
            F: 'oreganized:electrum_ingot',
            G: 'minecraft:conduit',
            H: 'botania:lens_paint'
        }
    ).id('waterframes:tv')
    
    e.shaped(
        Item.of('waterframes:big_tv', 1),
        [
            'HAF',
            'BBC',
            'GED'
        ],
        {
            A: 'minecraft:sculk_sensor',
            B: 'waterframes:frame',
            C: 'travelersbackpack:jukebox_upgrade',
            D: '#ae2:smart_cable',
            E: 'ae2:color_applicator',
            F: 'oreganized:electrum_ingot',
            G: 'minecraft:conduit',
            H: 'botania:lens_paint'
        }
    ).id('waterframes:big_tv')
})