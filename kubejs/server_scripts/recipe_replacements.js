// priority: 8
let replacements = [
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

    replacements.forEach((replacing) => {
        e.replaceInput({}, replacing[0], replacing[1])
        e.replaceOutput({}, replacing[0], replacing[1])
    })
})

// // ⚠️ LOOT TABLES ⚠️
// LootJS.modifiers(e => {
//     replacements.forEach((replacing) => {
//         // replace in all loot tables
//         e.addLootTableModifier(/.*/)
//             .replaceLoot(replacing[0], replacing[1], true)
//     })
// })