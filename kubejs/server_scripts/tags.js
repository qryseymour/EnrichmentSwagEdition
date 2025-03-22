ServerEvents.tags('item', event => {

    // meats
    event.add('origins:meat', [
        '#minecraft:fishes',
    ])

    // vegetarian
    event.add('kubejs:vegetarian', [
        'betterend:amber_root_raw',
        'betterend:blossom_berry_jelly',
        'betterend:blossom_berry',
        'betterend:bolux_mushroom_cooked',
        'betterend:cave_pumpkin_pie',
        'betterend:chorus_mushroom_cooked',
        'betterend:chorus_mushroom_raw',
        'betterend:shadow_berry_cooked',
        'betterend:shadow_berry_jelly',
        'betterend:shadow_berry_raw',
        'betterend:sweet_berry_jelly',
        'betterend:umbrella_cluster_juice',
        'minecraft:apple',
        'minecraft:baked_potato',
        'minecraft:beetroot_soup',
        'minecraft:beetroot',
        'minecraft:bread',
        'minecraft:cake',
        'minecraft:carrot',
        'minecraft:chorus_fruit',
        'minecraft:cookie',
        'minecraft:dried_kelp',
        'minecraft:glow_berries',
        'minecraft:golden_carrot',
        'minecraft:melon_slice',
        'minecraft:mushroom_stew',
        'minecraft:poisonous_potato',
        'minecraft:potato',
        'minecraft:pumpkin_pie',
        'minecraft:sweet_berries',
        'regions_unexplored:duskmelon_slice',
        'regions_unexplored:hanging_earlight_fruit',
        'regions_unexplored:meadow_sage',
        'regions_unexplored:salmonberry'
    ])

    // stuff that ignores vegetarian vs carnivore
    event.add('origins:ignore_diet', [
        'minecraft:enchanted_golden_apple',
        'minecraft:golden_apple',
        'minecraft:honey_bottle',
        'minecraft:suspicious_stew',
        'brewery:gingerbread',
        /(bakery|beachparty|candlelight|farmersdelight):chocolate_(.*_slice|truffle|milkshake|icecream|mousse|pie_slice)$/,
        /mythicupgrades:.*_potion$/
    ])

    // shields
    event.add('origins:shields', [
        '#c:shields'
    ])
})
  
// ⚠️ BLOCKS ⚠️
ServerEvents.tags('block', e => {
    // fixing frozen grass being placed on top of snowrealmagic:snow
    e.remove('regions_unexplored:snow_plant_can_survive_on', '#minecraft:snow')
    e.add('regions_unexplored:snow_plant_can_survive_on', [
        'minecraft:snow',
        'minecraft:snow_block'
    ])
})