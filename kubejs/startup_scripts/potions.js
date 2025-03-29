var worseEffects = [
    'minecraft:long_slowness',
    'minecraft:strong_slowness',
    'minecraft:strong_harming',
    'minecraft:long_poison',
    'minecraft:strong_poison',
    'minecraft:long_weakness',
    'amethyst_update:long_bleeding_potion',
    'amethyst_update:strong_bleeding_potion',
    'enderzoology:strong_displacement',
    'enderzoology:long_decay',
    'enderzoology:strong_decay',
    'enderzoology:long_confusion',
    'enderzoology:strong_confusion',
    'enderzoology:long_rising',
    'majruszsdifficulty:long_wither',
    'majruszsdifficulty:strong_wither',
    'mysticpotions:strong_thunderous',
    'mysticpotions:strong_explosive',
    'mysticpotions:extra_strong_explosive',
    'mysticpotions:long_burning',
    'mysticpotions:long_freezing',
    'mysticpotions:strong_corrosive',
    'mysticpotions:long_blindness',
    'mysticpotions:long_decay',
    'mysticpotions:strong_decay',
    'mysticpotions:long_darkness',
    'mysticpotions:strong_levitation',
    'mysticpotions:gravitation',
    'mysticpotions:long_hunger',
    'mysticpotions:strong_hunger',
    'mysticpotions:long_confusion',
    'mysticpotions:strong_confusion',
    'mysticpotions:long_mining_fatigue',
    'mysticpotions:strong_mining_fatigue',
    'mysticpotions:long_fatal_poison',
    'mysticpotions:strong_fatal_poison',
    'mysticpotions:long_infection',
    'oreganized:long_stunning',
    'oreganized:strong_stunning',
    'the_bumblezone:long_neurotoxin',
    'zenith:long_fatigue',
    'zenith:strong_fatigue',
    'zenith:long_wither',
    'zenith:strong_wither',
    'zenith:long_sundering',
    'zenith:strong_sundering',
    'zenith:long_grievous',
    'zenith:strong_grievous',
    'zenith:levitation'
]

var badEffects = [
    'minecraft:poison',
    'minecraft:harming',
    'minecraft:weakness',
    'minecraft:slowness',
    'amethyst_update:bleeding_potion',
    'enderzoology:displacement',
    'enderzoology:decay',
    'enderzoology:confusion',
    'enderzoology:rising',
    'majruszsdifficulty:wither',
    'mysticpotions:thunderous',
    'mysticpotions:explosive',
    'mysticpotions:burning',
    'mysticpotions:freezing',
    'mysticpotions:corrosive',
    'mysticpotions:blindness',
    'mysticpotions:decay',
    'mysticpotions:darkness',
    'mysticpotions:levitation',
    'mysticpotions:hunger',
    'mysticpotions:confusion',
    'mysticpotions:mining_fatigue',
    'mysticpotions:fatal_poison',
    'mysticpotions:infection',
    'oreganized:stunning',
    'the_bumblezone:neurotoxin',
    'zenith:fatigue',
    'zenith:wither',
    'zenith:sundering',
    'zenith:grievous'
]

var nullEffects = [
    'minecraft:mundane',
    'minecraft:thick',
    'minecraft:awkward',
    'potioncraft:crafted_potion'
]

var potionEffects = [
    'minecraft:night_vision',
    'minecraft:invisibility',
    'minecraft:turtle_master',
    'minecraft:water_breathing',
    'minecraft:luck',
    'minecraft:slow_falling',
    'aquamirae:spectral_potion',
    'betterend:end_veil',
    'mysticpotions:warming',
    'mysticpotions:dolphins_grace',
    'mysticpotions:slippery',
    'mysticpotions:glowing',
    'mysticpotions:silence',
    'mysticpotions:nullifier'
]

var goodEffects = [
    'minecraft:leaping',
    'minecraft:swiftness',
    'minecraft:healing',
    'minecraft:regeneration',
    'minecraft:strength',
    'enva:water_resist_potion_short',
    'minecraft:fire_resistance',
    'mysticpotions:absorption',
    'mysticpotions:health_boost',
    'mysticpotions:haste',
    'mysticpotions:vitality',

    'minecraft:long_night_vision',
    'minecraft:long_invisibility',
    'minecraft:long_fire_resistance',
    'minecraft:long_turtle_master',
    'minecraft:strong_turtle_master',
    'minecraft:long_water_breathing',
    'minecraft:long_slow_falling',
    'betterend:long_end_veil',
    'mysticpotions:long_warming',
    'mysticpotions:strong_dolphins_grace',
    'mysticpotions:long_dolphins_grace',
    'mysticpotions:long_slippery',
    'mysticpotions:long_glowing',
    'mysticpotions:long_silence',
    'mysticpotions:long_nullifier'
]

var greatEffects = [
    'mysticpotions:saturation',
    'zenith:knowledge',
    'friendsandfoes:reaching',
    'illagerinvasion:berserking',
    'mysticpotions:undying',
    'mysticpotions:air_swim',
    'mysticpotions:teleportation',
    'mysticpotions:protection',
    'zenith:resistance',
    'zenith:absorption',
    'additionaladditions:haste_potion',
    'zenith:haste',

    'minecraft:long_leaping',
    'minecraft:strong_leaping',
    'minecraft:long_swiftness',
    'minecraft:strong_swiftness',
    'minecraft:long_regeneration',
    'minecraft:strong_regeneration',
    'minecraft:long_strength',
    'minecraft:strong_strength',
    'minecraft:strong_healing',
    'enva:water_resist_potion_long',
    'mysticpotions:long_absorption',
    'mysticpotions:strong_absorption',
    'mysticpotions:long_health_boost',
    'mysticpotions:strong_health_boost',
    'additionaladditions:long_haste_potion',
    'mysticpotions:long_haste',
    'mysticpotions:strong_haste',
    'mysticpotions:long_vitality',
    'mysticpotions:strong_vitality',
]

var excellentEffects = [
    'aquamirae:potion_of_tenacity',
    'mutantmonsters:chemical_x',
    'mysticpotions:homing',
    'mysticpotions:recovery',

    'friendsandfoes:long_reaching',
    'friendsandfoes:strong_reaching',
    'illagerinvasion:long_berserking',
    'illagerinvasion:strong_berserking',
    'mysticpotions:long_undying',
    'mysticpotions:long_air_swim',
    'mysticpotions:long_teleportation',
    'mysticpotions:long_protection',
    'mysticpotions:strong_protection',
    'mysticpotions:strong_saturation',
    'zenith:long_knowledge',
    'zenith:strong_knowledge',
    'zenith:long_resistance',
    'zenith:strong_resistance',
    'zenith:long_absorption',
    'zenith:strong_absorption',
    'zenith:strong_haste',
    'zenith:long_haste',
]

var positiveOnlyEffects = potionEffects.concat(goodEffects.concat(greatEffects))

var redFlowers = {
    flowers: [
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
    ],
    effectMap: [
        potionEffects,
        potionEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        greatEffects
    ]
}

function stringToHash(string) {
    let hash = 0;
    for (var i = 0; i < string.length; i++) {
        let code = string.codePointAt(i);
        hash = ((hash << 5) - hash) + code;
        hash = hash & hash; 
    }
    return hash;
}

function mapFlowersToPotions(flowerGrouping, e) {
    let { flowers, effectMap } = flowerGrouping
    flowers.forEach(flowerID => {
        positiveOnlyEffects.forEach(potionID => {
            let hashCode = Math.abs(stringToHash(potionID) + stringToHash(flowerID))
            let remainder = hashCode % 6
            let oneTenth = (hashCode / 10) | 0
            let effect = effectMap[remainder][oneTenth % (effectMap[remainder].length)]
            e.addPotionBrewing(flowerID, potionID, effect)
        })
    })
}

MoreJSEvents.registerPotionBrewing(e => {
    e.removeByPotion(null, null, 'mysticpotions:saturation')
    e.removeByPotion(null, null, 'mysticpotions:strong_saturation')
    e.removeByPotion(null, null, 'zenith:knowledge')
    e.removeByPotion(null, null, 'zenith:long_knowledge')
    e.removeByPotion(null, null, 'zenith:strong_knowledge')
    e.removeByPotion(null, null, 'galosphere:long_astral')
    e.removeByPotion(null, null, 'zenith:flying')
    e.removeByPotion(null, null, 'zenith:long_flying')
    e.removeByPotion(null, null, 'zenith:extra_long_flying')
    e.addPotionBrewing('ae2:ender_dust', 'minecraft:awkward', 'betterend:end_veil')

    mapFlowersToPotions(redFlowers, e)
})