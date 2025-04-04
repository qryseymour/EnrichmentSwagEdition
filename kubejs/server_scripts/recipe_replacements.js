// priority: 8
let fullReplacements = [
    ["doggytalents:rice_bowl", "#forge:wheat"],
    ["doggytalents:koji", "minecraft:chicken"],
    ["betterend:ender_dust", "ae2:ender_dust"],
]
let lootReplacements = [
    ["endrem:black_eye", "kubejs:inert_black_eye"],
    ["endrem:cold_eye", "kubejs:inert_cold_eye"],
    ["endrem:corrupted_eye", "kubejs:inert_corrupted_eye"],
    ["endrem:lost_eye", "kubejs:inert_lost_eye"],
    ["endrem:nether_eye", "kubejs:inert_nether_eye"],
    ["endrem:old_eye", "kubejs:inert_old_eye"],
    ["endrem:rogue_eye", "kubejs:inert_rogue_eye"],
    ["endrem:cursed_eye", "kubejs:inert_cursed_eye"],
    ["endrem:guardian_eye", "kubejs:inert_guardian_eye"],
    ["endrem:magical_eye", "kubejs:inert_magical_eye"],
    ["endrem:wither_eye", "kubejs:inert_wither_eye"],
    ["endrem:witch_eye", "kubejs:inert_witch_eye"],
    ["endrem:undead_eye", "kubejs:inert_undead_eye"],
    ["endrem:exotic_eye", "kubejs:inert_exotic_eye"],
]

ServerEvents.recipes(e => { 
    let ironToCopperRecipeItems = [
        'minecraft:piston',
        'minecraft:compass',
        'minecraft:powered_rail',
        'xtraarrows:magnet_kit',
    ].forEach((item) => {
        e.replaceInput({ output: item }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
    })

    let glassToAmethystRecipeItems = [
        'minecraft:beacon',
        'minecraft:end_crystal',
        'ae2:chest',
        'ae2:condenser'
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

    e.replaceInput({}, 'minecraft:quartz', '#c:gems/quartz')

    // e.replaceInput({ output: /aether:.*/ }, 'minecraft:redstone', 'ae2:sky_dust')
    // e.replaceInput({ output: /aether:.*/ }, 'minecraft:glowstone_dust', 'ae2:sky_dust')
    
    // e.replaceInput({ output: /botania:.*/ }, '#minecraft:dirt', 'aether:aether_grass_block')
    // e.replaceInput({ output: /botania:.*/ }, '#c:stone', 'aether:holystone')
    // e.replaceInput({ output: /botania:.*/ }, 'minecraft:iron_ingot', 'aether:zanite_gemstone')
    // e.replaceInput({ output: /botania:(?!mana_diamond).*/ }, 'minecraft:diamond', 'aether:enchanted_gravitite')

    e.replaceInput({ output: 'botania:ender_eye_block' }, 'minecraft:redstone', 'ae2:ender_dust')

    e.replaceInput({ output: /.*:.*quartz.*/ }, 'minecraft:redstone', 'ae2:certus_quartz_dust')
    e.replaceInput({ output: /.*:.*quartz.*/ }, 'minecraft:glowstone_dust', 'ae2:certus_quartz_dust')

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
    
    e.replaceInput({ output: "vinurl:custom_record" }, 'minecraft:note_block', 'minecraft:music_disc_5')
    e.replaceInput({ output: "diamond_apples:diamond_apple" }, 'minecraft:apple', 'minecraft:golden_apple')
    e.replaceInput({ output: "diamond_apples:enchanted_diamond_apple" }, 'minecraft:diamond', 'minecraft:diamond_block')

    fullReplacements.forEach((replacing) => {
        e.replaceInput({}, replacing[0], replacing[1])
        e.replaceOutput({}, replacing[0], replacing[1])
    })

    let eyesFromRecipes = [
        {
            old_id: "endrem:exotic_eye",
            new_id: "kubejs:inert_exotic_eye"
        },
        {
            old_id: "endrem:undead_eye",
            new_id: "kubejs:inert_undead_eye"
        },
        {
            old_id: "endrem:witch_eye",
            new_id: "kubejs:inert_witch_eye"
        },
    ].forEach(eyeMap => {
        let { old_id, new_id } = eyeMap
        e.replaceOutput({ id: old_id }, old_id, new_id)
    })
})

LootJS.modifiers(e => {
    fullReplacements.forEach((replacing) => {
        e.addLootTableModifier(/.*/)
            .replaceLoot(replacing[0], replacing[1], true)
    })
    
    lootReplacements.forEach((replacing) => {
        e.addLootTableModifier(/.*/)
            .replaceLoot(replacing[0], replacing[1], true)
    })
    
        
    // e.addLootTableModifier(/twilightforest:.*/)
    // .replaceLoot('minecraft:coal', 'aether:ambrosium_shard', true)
    // .replaceLoot('minecraft:iron_ingot', 'aether:zanite_gemstone', true)
    // .replaceLoot('minecraft:copper_ingot', 'botania:manasteel_ingot', true)
    // .replaceLoot('minecraft:diamond', 'aether:enchanted_gravitite', true)
    // .replaceLoot('minecraft:stick', 'aether:skyroot_stick', true)
    // .replaceLoot('minecraft:packed_ice', 'aether:icestone', true)
    // .replaceLoot('minecraft:apple', 'aether:white_apple', true)
    // .replaceLoot('minecraft:bread', 'aether:gingerbread_man', true)
    // .replaceLoot('minecraft:redstone_lamp', 'additionaladditions:amethyst_lamp', true)
    // .replaceLoot('minecraft:redstone', 'additionaladditions:copper_patina', true)
    // .replaceLoot('minecraft:bucket', 'aether:skyroot_bucket', true)
    // .replaceLoot('minecraft:milk_bucket', 'aether:skyroot_milk_bucket', true)
    // .replaceLoot('minecraft:string', 'botania:mana_string', true)
    // .replaceLoot('minecraft:trident', 'aether:lightning_sword', true)
    // .replaceLoot('minecraft:red_mushroom', 'aether:purple_flower', true)
    // .replaceLoot('minecraft:brown_mushroom', 'aether:white_flower', true)
    // .replaceLoot('minecraft:torch', 'aether:skyroot_torch', true)
    // .replaceLoot('minecraft:gold_ingot', 'aether:golden_oak_wood', true)
    // .replaceLoot('minecraft:cod', 'aether:skyroot_cod_bucket', false)
    // .replaceLoot('minecraft:salmon', 'aether:skyroot_salmon_bucket', false)
    // .replaceLoot('minecraft:ink_sac', 'minecraft:glow_ink_sac', false)

    // let materialOffsetReplacements = [
    //     ['minecraft:iron', 'aether:zanite'],
    //     ['minecraft:diamond', 'aether:gravitite'],
    // ].forEach(replacementMap => {
    //     let toolArmorTypes = [
    //         'pickaxe',
    //         'axe',
    //         'hoe',
    //         'shovel',
    //         'sword',
    //         'helmet',
    //         'chestplate',
    //         'leggings',
    //         'boots'
    //     ].forEach(type => {
    //         e.addLootTableModifier(/twilightforest:.*/)
    //         .replaceLoot(`${replacementMap[0]}_${type}`, `${replacementMap[1]}_${type}`, true)
    //     })
    // })
})