function stringToHash(string) {
    let hash = 0;
    for (var i = 0; i < string.length; i++) {
        let code = string.codePointAt(i);
        hash = ((hash << 5) - hash) + code;
        hash = hash & hash; 
    }
    return hash;
}

var worseEffects = [
    'minecraft:long_slowness',
    'minecraft:strong_slowness',
    'minecraft:strong_harming',
    'minecraft:long_poison',
    'minecraft:strong_poison',
    'minecraft:long_weakness',
]

var badEffects = [
    'minecraft:poison',
    'minecraft:harming',
    'minecraft:weakness',
    'minecraft:slowness',
]

var nullEffects = [
    'minecraft:mundane',
    'minecraft:thick',
    'minecraft:awkward'
]

var potionEffects = [
    'minecraft:night_vision',
    'minecraft:invisibility',
    'minecraft:fire_resistance',
    'minecraft:turtle_master',
    'minecraft:water_breathing',
    'minecraft:luck',
    'minecraft:slow_falling'
]

var goodEffects = [
    'minecraft:long_night_vision',
    'minecraft:long_invisibility',
    'minecraft:long_fire_resistance',
    'minecraft:long_turtle_master',
    'minecraft:strong_turtle_master',
    'minecraft:long_water_breathing',
    'minecraft:long_slow_falling',
    'minecraft:leaping',
    'minecraft:swiftness',
    'minecraft:healing',
    'minecraft:regeneration',
    'minecraft:strength',
]

var greatEffects = [
    'minecraft:long_leaping',
    'minecraft:strong_leaping',
    'minecraft:long_swiftness',
    'minecraft:strong_swiftness',
    'minecraft:long_regeneration',
    'minecraft:strong_regeneration',
    'minecraft:long_strength',
    'minecraft:strong_strength',
    'minecraft:strong_healing',
]

var excellentEffects = [
    'mysticpotions:saturation',
    'zenith:knowledge'
]

var positiveOnlyEffects = potionEffects.concat(goodEffects.concat(greatEffects))

var redFlowers = [
    'minecraft:sunflower',
	'botania:daybloom_motif',
	'minecraft:poppy',
	'minecraft:red_tulip',
	'candlelight:rose',
	'farm_and_charm:wild_tomatoes',
	'farm_and_charm:wild_strawberries',
	'herbalbrews:hibiscus',
	'regions_unexplored:alpha_rose',
	'regions_unexplored:poppy_bush',
	'regions_unexplored:tsubaki',
	'regions_unexplored:waratah',
	'regions_unexplored:red_lupine',
	'twilightforest:thorn_rose',
	'minecraft:rose_bush',
	'regions_unexplored:hibiscus'
]

MoreJSEvents.registerPotionBrewing(e => {
    e.removeByPotion(null, null, 'mysticpotions:saturation')
    e.removeByPotion(null, null, 'zenith:knowledge')
    e.removeByPotion('ae2:ender_dust', 'minecraft:awkward', 'betterend:end_veil')

    redFlowers.forEach(flowerID => {
        positiveOnlyEffects.forEach(potionID => {
            let hashCode = Math.abs(stringToHash(potionID) + stringToHash(flowerID))
            let remainder = hashCode % 6
            let effect = ''
            let oneTenth = (hashCode / 10) | 0
            if (remainder <= 1) {
                effect = potionEffects[oneTenth % (potionEffects.length)]
            } else if (remainder <= 4) {
                effect = goodEffects[oneTenth % (goodEffects.length)]
            } else {
                effect = greatEffects[oneTenth % (greatEffects.length)]
            }
            e.addPotionBrewing(flowerID, potionID, effect)
        })
    })
})