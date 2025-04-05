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
    e.addLootTableModifier('betterjungletemples:chests/campsite').randomChance(0.1).addLoot('mythicupgrades:peridot_upgrade_smithing_template')
    let desertTempleLootTables = [
        "betterdeserttemples:chests/food_storage",
        "betterdeserttemples:chests/lab",
        "betterdeserttemples:chests/library",
        "betterdeserttemples:chests/statue",
        "betterdeserttemples:chests/storage",
        "betterdeserttemples:chests/tomb",
        "betterdeserttemples:chests/tomb_pharaoh",
        "betterdeserttemples:chests/wardrobe"
    ].forEach((lootTable) => {
        e.addLootTableModifier(lootTable).randomChance(0.0333).addLoot('mythicupgrades:topaz_upgrade_smithing_template')
    })
    
    e.addLootTableModifier(/.*/).removeLoot('plentyofarmors:stardusite_ingot')
    e.addLootTableModifier(/.*/).removeLoot('plentyofarmors:marine_diamond')
    e.addLootTableModifier(/.*/).removeLoot('plentyofarmors:marine_diamond')
    e.addLootTableModifier(/.*/).removeLoot(/artifacts:.*/)
    e.addLootTableModifier(/.*/).removeLoot(/armoroftheages:.*/)

})