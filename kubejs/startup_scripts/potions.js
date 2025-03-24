function stringToHash(string) {
    let hash = 0;
    for (var i = 0; i < string.length; i++) {
        let code = string.codePointAt(i);
        hash = ((hash << 5) - hash) + code;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

var badEffects = [
    'minecraft:mundane',
    'minecraft:thick',
    'minecraft:awkward'
]

var potionEffects = [
    'minecraft:night_vision',
    'minecraft:invisibility',
    'minecraft:leaping',
    'minecraft:fire_resistance',
    'minecraft:swiftness',
    'minecraft:slowness',
    'minecraft:turtle_master',
    'minecraft:water_breathing',
    'minecraft:healing',
    'minecraft:harming',
    'minecraft:poison',
    'minecraft:regeneration',
    'minecraft:strength',
    'minecraft:weakness',
    'minecraft:luck',
    'minecraft:slow_falling'
]

var betterEffects = [
    'minecraft:long_night_vision',
    'minecraft:long_invisibility',
    'minecraft:long_leaping',
    'minecraft:strong_leaping',
    'minecraft:long_fire_resistance',
    'minecraft:long_swiftness',
    'minecraft:strong_swiftness',
    'minecraft:long_slowness',
    'minecraft:strong_slowness',
    'minecraft:long_turtle_master',
    'minecraft:strong_turtle_master',
    'minecraft:long_water_breathing',
    'minecraft:strong_healing',
    'minecraft:strong_harming',
    'minecraft:long_poison',
    'minecraft:strong_poison',
    'minecraft:long_regeneration',
    'minecraft:strong_regeneration',
    'minecraft:long_strength',
    'minecraft:strong_strength',
    'minecraft:long_weakness',
    'minecraft:long_slow_falling'
]

var allEffects = badEffects.concat(potionEffects.concat(betterEffects))

var flowers = [
    'regions_unexplored:daisy',
    'regions_unexplored:hyssop',
    'regions_unexplored:tassel',
    'regions_unexplored:meadow_sage',
    'regions_unexplored:pink_lupine',
    'regions_unexplored:salmon_poppy_bush',
    'regions_unexplored:fireweed',
    'regions_unexplored:bleeding_heart',
    'regions_unexplored:waratah',
    'regions_unexplored:white_trillium',
    'regions_unexplored:red_lupine',
    'regions_unexplored:aster',
    'regions_unexplored:blue_lupine',
    'regions_unexplored:day_lily',
    'minecraft:cornflower',
    'minecraft:blue_orchid',
    'minecraft:orange_tulip',
    'minecraft:rose_bush',
    'minecraft:azure_bluet',
    'minecraft:peony',
    'minecraft:oxeye_daisy',
    'minecraft:allium',
    'minecraft:red_tulip',
    'minecraft:poppy',
    'minecraft:dandelion',
    'minecraft:white_tulip',
    'farm_and_charm:wild_emmer',
    'friendsandfoes:buttercup'
]

MoreJSEvents.registerPotionBrewing(e => {
    e.removeByPotion(null, null, 'mysticpotions:saturation')
    e.removeByPotion(null, null, 'zenith:knowledge')

    // flowers.forEach(flowerID => {
    //     allEffects.forEach(potionID => {
    //         let hashCode = stringToHash(potionID) + stringToHash(flowerID)
    //         let remainder = hashCode % 6
    //         let effect = ''
    //         let oneTenth = (hashCode / 10) | 0
    //         if (remainder <= 1) {
    //             effect = badEffects[oneTenth % (badEffects.length)]
    //         } else if (remainder == 5) {
    //             effect = potionEffects[oneTenth % (potionEffects.length)]
    //         } else {
    //             effect = betterEffects[oneTenth % (betterEffects.length)]
    //         }
    //         e.addPotionBrewing(flowerID, potionID, effect)
    //     })
    // })
})