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
            C: 'charm:colored_glint_smithing_template'
        }
    ).id('immersive_paintings:painting')
})