// priority: 8
let fullReplacements = [
    ["doggytalents:rice_bowl", "farmersdelight:cooked_rice"],
    ["doggytalents:koji", "vegandelight:soybean"]
]

ServerEvents.recipes(e => { 
    let ironToCopperRecipeItems = [
        'minecraft:piston',
        'minecraft:compass',
        'minecraft:powered_rail',
        'xtraarrows:magnet_kit',
        'twilightforest:fiery_ingot',
        'malum:cornered_weave',
        'galosphere:chandelier',
    ].forEach((item) => {
        e.replaceInput({ output: item }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
    })

    let glassToAmethystRecipeItems = [
        'minecraft:beacon',
        'minecraft:end_crystal',
    ].forEach((item) => {
        e.replaceInput({ output: item }, 'minecraft:glass', 'minecraft:amethyst_shard')
    })

    let metalToCincinnasiteRecipeItems = [
        'ae2:spatial_storage_cell_16',
        'travelersbackpack:hose_nozzle',
        'createbigcannons:timed_fuze',
        'ae2:item_storage_cell_4k',
        'ae2:basic_card'
    ].forEach((item) => {
        e.replaceInput({ output: item }, '#railways:internal/ingots/iron_ingots', 'betternether:cincinnasite_ingot')
    })

    let redstoneDustToOtherDustRecipeItems = [
        { item: /ae2:.*_storage_cell_4k/, input: "minecraft:glowstone_dust" },
        { item: /ae2:.*_storage_cell_16k/, input: "ae2:ender_dust" },
        { item: /ae2:.*_storage_cell_64k/, input: "illagerinvasion:illusionary_dust" },
        { item: /ae2:.*_storage_cell_256k/, input: "ae2:fluix_dust" },
        { item: "ae2:spatial_storage_cell_16", input: "minecraft:glowstone_dust" },
        { item: "ae2:spatial_storage_cell_128", input: "waystones:warp_dust" },
        { item: "doggytalents:smarty_glasses", input: "ae2:certus_quartz_dust" },
        { item: 'createbigcannons:impact_fuze', input: "ae2:ender_dust" },
        { item: "wolf_lore:agitator_remote", input: "ae2:ender_dust" },
        { item: "supplementaries:altimeter", input: "ae2:sky_dust" },
        { item: "travelersbackpack:void_upgrade", input: "ae2:sky_dust" },
        { item: "travelersbackpack:pickup_upgrade", input: "minecraft:glowstone_dust" },
        { item: "supplementaries:wind_vane", input: "ae2:sky_dust" },
        { item: "createbigcannons:proximity_fuze", input: "illagerinvasion:illusionary_dust" },
    ].forEach((index) => {
        e.replaceInput({ output: index.item }, 'minecraft:redstone', index.input)
    })

    let glowstoneDustToOtherDustRecipeItems = [
        { item: /ae2:spatial_cell_component_[0-9]+/, input: "waystones:warp_dust" },
        { item: 'botania:light_relay', input: "ae2:certus_quartz_dust" },
        { item: "ae2:fluix_smart_cable", input: "ae2:sky_dust" },
        { item: "ae2:fluix_smart_dense_cable", input: "ae2:sky_dust" },
        { item: "mythic_charms:amethyst_lamp", input: "amethyst_update:amethyst_dust" },
        { item: /ae2:cell_component_[0-9]+k/, input: "ae2:certus_quartz_dust" },
    ].forEach((index) => {
        e.replaceInput({ output: index.item }, 'minecraft:glowstone_dust', index.input)
    })
    
    e.replaceInput({ output: "diamond_apples:diamond_apple" }, 'minecraft:apple', 'minecraft:golden_apple')
    e.replaceInput({ output: "diamond_apples:enchanted_diamond_apple" }, 'minecraft:diamond', 'minecraft:diamond_block')

    fullReplacements.forEach((replacing) => {
        e.replaceInput({}, replacing[0], replacing[1])
        e.replaceOutput({}, replacing[0], replacing[1])
    })
})

LootJS.modifiers(e => {
    fullReplacements.forEach((replacing) => {
        e.addLootTableModifier(/.*/)
            .replaceLoot(replacing[0], replacing[1], true)
    })
})