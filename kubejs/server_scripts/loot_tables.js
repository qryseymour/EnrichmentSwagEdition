LootJS.modifiers(e => {
    e.addBlockLootModifier('minecraft:budding_amethyst')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
            p.addLoot('minecraft:budding_amethyst')
        })
        .pool(p => {
            p.not(not => { not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')) })
            p.addLoot('minecraft:amethyst_block')
        })

    e.addLootTableModifier('minecraft:chests/end_city_treasure').addLoot('ae2:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_bonus_loot').addLoot('ae2:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_loot').addLoot('ae2:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_template_loot').addLoot('ae2:ender_dust')
    
    e.addLootTableModifier(/.*/).removeLoot('plentyofarmors:stardusite_ingot')
    e.addLootTableModifier(/.*/).removeLoot('plentyofarmors:marine_diamond')
    e.addLootTableModifier(/.*/).removeLoot('plentyofarmors:marine_diamond')

})