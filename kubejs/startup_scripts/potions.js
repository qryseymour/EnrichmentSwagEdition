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

var greenFlowers = {
    flowers: [
        'botania:hopperhock',
	    'botania:hopperhock_chibi',
	    'botania:rannuncarpus',
	    'botania:rannuncarpus_chibi',
	    'farm_and_charm:wild_lettuce',
	    'meadow:pine_sapling',
	    'minecraft:mangrove_propagule',
	    'many_flowers:emerald_flower',
    ],
    effectMap: [
        potionEffects,
        potionEffects,
        potionEffects,
        goodEffects,
        greatEffects,
        greatEffects
    ]
}

var pinkFlowers = {
    flowers: [
        'many_flowers:chrysanthemum',
	    'botania:fallen_kanade',
	    'minecraft:pink_tulip',
	    'meadow:saxifrage',
	    'regions_unexplored:bleeding_heart',
	    'regions_unexplored:glistering_bloom',
	    'regions_unexplored:pink_lupine',
	    'minecraft:cherry_leaves',
	    'regions_unexplored:pink_magnolia_flowers',
	    'regions_unexplored:salmon_poppy_bush',
	    'minecraft:peony',
    ],
    effectMap: [
        nullEffects,
        potionEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        greatEffects
    ]
}

var daisies = {
    flowers: [
        'minecraft:oxeye_daisy',
	    'regions_unexplored:daisy',
	    'regions_unexplored:felicia_daisy',
	    'regions_unexplored:mycotoxic_daisy',
	    'minecraft:orange_tulip',
	    'meadow:alpine_poppy',
	    'regions_unexplored:mallow',
	    'regions_unexplored:day_lily',
	    'regions_unexplored:orange_coneflower',
    ],
    effectMap: [
        goodEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        goodEffects
    ]
}

var yellowFlowers = {
    flowers: [
        'botania:orechid',
	    'botania:orechid_ignem',
	    'botania:loonium',
	    'minecraft:dandelion',
	    'farm_and_charm:wild_emmer',
	    'farm_and_charm:wild_corn',
	    'farm_and_charm:wild_barley',
	    'friendsandfoes:buttercup',
	    'regions_unexplored:alpha_dandelion',
    ],
    effectMap: [
        badEffects,
        badEffects,
        greatEffects,
        greatEffects,
        greatEffects,
        greatEffects
    ]
}

var purpleFlowers = {
    flowers: [
        'botania:solegnolia',
	    'botania:solegnolia_chibi',
	    'minecraft:allium',
	    'farm_and_charm:wild_nettle',
	    'farm_and_charm:wild_potatoes',
	    'farm_and_charm:wild_onions',
	    'herbalbrews:lavender',
	    'meadow:delphinium',
	    'regions_unexplored:hyssop',
	    'regions_unexplored:purple_lupine',
	    'minecraft:lilac',
	    'overweight_farming:allium_bush',
	    'minecraft:flowering_azalea_leaves',
	    'minecraft:flowering_azalea',
	    'regions_unexplored:purple_coneflower',
    ],
    effectMap: [
        worseEffects,
        potionEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        greatEffects
    ]
}

var eatingFlowers = {
    flowers: [
        'botania:kekimurus',
	    'botania:gourmaryllis',
	    'botania:dandelifeon',
	    'botania:narslimmus',
	    'botania:spectrolus',
    ],
    effectMap: [
        nullEffects,
        potionEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        greatEffects
    ]
}

var blueFlowers = {
    flowers: [
        'botania:spectranthemum',
	    'botania:daffomill',
	    'botania:bergamute',
	    'botania:bubbell',
	    'botania:marimorphosis',
	    'botania:shulk_me_not',
	    'botania:rosa_arcana',
	    'botania:hydroangeas',
	    'botania:hydroangeas_motif',
	    'botania:manastar',
	    'regions_unexplored:aster',
	    'minecraft:pitcher_plant',
	    'minecraft:blue_orchid',
	    'minecraft:cornflower',
	    'meadow:enzian',
	    'regions_unexplored:blue_lupine',
	    'regions_unexplored:hyacinth_flowers',
	    'regions_unexplored:blue_magnolia_flowers',
	    'supplementaries:wild_flax',
	    'many_flowers:diamond_flower',
    ],
    effectMap: [
        potionEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        excellentEffects,
    ]
}

var jungleFlowers = {
    flowers: [
        'botania:munchdew',
	    'botania:rafflowsia',
	    'botania:hyacidus',
	    'botania:agricarnation',
	    'botania:agricarnation_chibi',
	    'farm_and_charm:wild_carrots',
	    'farm_and_charm:wild_beetroots',
    ],
    effectMap: [
        nullEffects,
        nullEffects,
        nullEffects,
        excellentEffects,
        excellentEffects,
        excellentEffects,
    ]
}

var fireFlowers = {
    flowers: [
        'botania:endoflame',
	    'many_flowers:gaillardia',
	    'botania:thermalily',
	    'botania:exoflame',
	    'betterend:chorus_mushroom_cooked',
	    'betterend:bolux_mushroom_cooked',
	    'minecraft:torchflower',
	    'regions_unexplored:fireweed',
	    'meadow:fire_lily',
	    'regions_unexplored:dorcel',
	    'many_flowers:coal_flower',
    ],
    effectMap: [
        worseEffects,
        worseEffects,
        potionEffects,
        excellentEffects,
        excellentEffects,
        excellentEffects,
    ]
}

var shyFlowers = {
    flowers: [
        'minecraft:cactus',
	    'betterend:neon_cactus',
	    'betterend:neon_cactus_block',
	    'betternether:barrel_cactus',
	    'betternether:nether_cactus',
	    'regions_unexplored:cactus_flower',
	    'regions_unexplored:barrel_cactus',
	    'regions_unexplored:saguaro_cactus',
	    'minecraft:chorus_flower',
	    'minecraft:bamboo',
	    'regions_unexplored:bamboo_sapling',
    ],
    effectMap: [
        nullEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        goodEffects,
    ]
}

var turtleFlowers = {
    flowers: [
        'minecraft:weeping_vines',
	    'minecraft:twisting_vines',
	    'minecraft:vine',
	    'betterend:dense_vine',
	    'betterend:twisted_vine',
	    'betterend:bulb_vine',
	    'betterend:jungle_vine',
	    'betternether:black_vine',
	    'betternether:blooming_vine',
	    'betternether:golden_vine',
	    'regions_unexplored:kapok_vines',
	    'underground_jungle:jungle_vines',
	    'botania:medumone',
	    'botania:tangleberrie',
	    'botania:vinculotus',
    ],
    effectMap: [
        potionEffects,
        potionEffects,
        potionEffects,
        goodEffects,
        goodEffects,
        excellentEffects,
    ]
}

var undergroundFlowers = {
    flowers: [
        'minecraft:brown_mushroom',
	    'minecraft:red_mushroom',
	    'betterend:bolux_mushroom',
	    'betterend:small_amaranita_mushroom',
	    'betterend:chorus_mushroom_raw',
	    'betternether:orange_mushroom',
	    'betternether:jellyfish_mushroom_sapling',
	    'betternether:neon_equisetum',
	    'betternether:hook_mushroom',
	    'betternether:wall_mushroom_brown',
	    'betternether:wall_mushroom_red',
	    'betternether:mushroom_fir_sapling',
	    'betternether:anchor_tree_sapling',
	    'betternether:nether_sakura_sapling',
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

var miniFlowers = {
    flowers: [
        'betterend:inflexia',
	    'betterend:flammalix',
	    'betterend:small_jellyshroom',
	    'betterend:small_amaranita_mushroom',
	    'regions_unexplored:small_desert_shrub',
	    'regions_unexplored:small_oak_sapling',
	    'meadow:small_fir',
	    'botania:marimorphosis_chibi',
	    'botania:tangleberrie_chibi',
	    'botania:bubbell_chibi',
    ],
    effectMap: [
        potionEffects,
        potionEffects,
        potionEffects,
        goodEffects,
        goodEffects,
        excellentEffects
    ]
}

var hammerFlowers = {
    flowers: [
        'botania:clayconia',
	    'botania:clayconia_chibi',
	    'botania:jaded_amaranthus',
	    'botania:pure_daisy',
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

var undeadFlowers = {
    flowers: [
        'many_flowers:jack_flower',
	    'botania:bellethorne',
	    'botania:bellethorn_chibi',
	    'botania:dreadthorne',
	    'botania:jiyuulia',
	    'botania:jiyuulia_chibi',
	    'botania:heisei_dream',
	    'botania:nightshade_motif',
    ],
    effectMap: [
        badEffects,
        badEffects,
        goodEffects,
        goodEffects,
        excellentEffects,
        excellentEffects
    ]
}

var boomerangFlowers = {
    flowers: [
        'botania:entropinnyum',
	    'many_flowers:oriental_poppy',
	    'botania:tigerseye',
    ],
    effectMap: [
        nullEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        goodEffects,
        excellentEffects
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
    mapFlowersToPotions(greenFlowers, e)
    mapFlowersToPotions(pinkFlowers, e)
    mapFlowersToPotions(daisies, e)
    mapFlowersToPotions(yellowFlowers, e)
    mapFlowersToPotions(purpleFlowers, e)
    mapFlowersToPotions(eatingFlowers, e)
    mapFlowersToPotions(blueFlowers, e)
    mapFlowersToPotions(jungleFlowers, e)
    mapFlowersToPotions(fireFlowers, e)
    mapFlowersToPotions(shyFlowers, e)
    mapFlowersToPotions(turtleFlowers, e)
    mapFlowersToPotions(undergroundFlowers, e)
    mapFlowersToPotions(miniFlowers, e)
    mapFlowersToPotions(hammerFlowers, e)
    mapFlowersToPotions(undeadFlowers, e)
    mapFlowersToPotions(boomerangFlowers, e)
})