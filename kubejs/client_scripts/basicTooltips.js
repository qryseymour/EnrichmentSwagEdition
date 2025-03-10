
ItemEvents.tooltip(e => {
    let itemTooltipPairs = [
        { items: ['additionaladditions:wrench'], tooltip: [
            'Rotates blocks that can be rotated. Can also be', 
            'used inside the dispenser.']},
        { items: [
            'cu:levitator_block', 
            'cu:exposed_levitator_block', 
            'cu:weathered_levitator_block',
            'cu:oxidized_levitator_block',
            'cu:waxed_levitator_block',
            'cu:waxed_exposed_levitator_block',
            'cu:waxed_weathered_levitator_block',
            'cu:waxed_oxidized_levitator_block'], 
          tooltip: [
            'Gives you the levitation effect. The effect changes', 
            'depending on what level of oxidization the block has.']},
        { items: [
            'minecraft:goat_horn', 
            'cu:copper_horn'], 
        tooltip: [
            'Now playable through a dispenser!']},
        { items: ['oxidized:copper_rail'], tooltip: [
            'Functions almost identically to the Powered Rail.', 
            'The difference is that a chain of connected', 
            'copper rails can stay powered for up to 100 blocks as', 
            'compared to 8 blocks with the Powered Rail.'] },
        { items: ['oxidized:copper_pan'], tooltip: [
            'Passively pan for resources such as clay and iron', 
            'nuggets. The pan will only work if it is placed', 
            'in water and on a sand or gravel block. Over time', 
            'the pan will sift and release items it finds.'] },
        { items: ['oxidized:copper_kiln'], tooltip: [
            'Smelt cobblestone, clay, sand, and logs at', 
            'extremely fast speeds. The kiln is meant for', 
            'obtaining terracotta, bricks, stone, charcoal,', 
            'and glass for building quickly. It functions like', 
            'the smoker and blast furnace.'] },
        { items: ['oxidized:copper_trap'], tooltip: [
            'Can be placed down. When stepped on, the trap', 
            'deals 5 damage and stops the victim from moving', 
            'away. The trap will open back up after closing for', 
            '3 seconds. It can be toggled manually by', 
            'right-clicking or with redstone (levers,', 'buttons, etc).'] },
        { items: ['oxidized:copper_barometer'], tooltip: [
            'Provides you with information about the upcoming', 
            'weather or when the current precipitation will end.'] },
        { items: ['thecopperrail:copper_rail'], tooltip: [
            'A directional rail. It would push any minecart over',
            'it, without the need of a block on one side to start',
            'the movement.'] },
        { items: ['mechanical_trident:mechanical_trident'], tooltip: [
            'It has less durability and riptide power than the',
            'regular trident, however it contains charges of', 
            'water which can be refilled by right clicking on a', 
            'water source, that are used whenever you try and', 
            'riptide which allows you to use the enchantment', 
            'even when out of water.'] },
        { items: [
            'wheelbarrow:copper_wheelbarrow',
            'wheelbarrow:exposed_copper_wheelbarrow',
            'wheelbarrow:weathered_copper_wheelbarrow',
            'wheelbarrow:oxidized_copper_wheelbarrow',], 
          tooltip: [
            'It\'s used for transporting mobs across any terrain.',
            'While riding it, just ride into another mob (small',
            'enough to fit) and it will be yoinked inside. ',
            '',
            'Once you\'ve kidnapped a mob you can then yeet it', 
            'with a keypress (Z by default).']},
        { items: ['additionaladditions:rope'], tooltip: [
            'Use them to climb upwards and downwards with ease.']},
        { items: ['additionaladditions:copper_patina'], tooltip: [
            'Get it by scraping off the oxidation layer from',
            'copper. It is like redstone, but not redstone!']},
        { items: ['additionaladditions:crossbow_with_spyglass'], tooltip: [
            'Zoom onto your target using Shift!']},
        { items: ['additionaladditions:watering_can'], tooltip: [
            'Water your crops to make them grow faster!']},
        { items: ['additionaladditions:amethyst_lamp'], tooltip: [
            'Doesn\'t light up the area, but prevents mob', 
            'spawning in a radius of 8 blocks!']},
        { items: ['additionaladditions:glow_stick'], tooltip: [
            'Throw them to light up the area']},
        { items: ['additionaladditions:mysterious_bundle'], tooltip: [
            'Open it and get random items!']},
        { items: ['additionaladditions:gold_ring'], tooltip: [
            'Upgrade your Netherite items with Gold Rings.', 
            'Higher enchantability, and piglins won\'t attack', 
            'you!']},
        { items: ['amethyst_update:amethyst_arrow'], tooltip: [
            'Deals a little bit less physical damage, but',
            'applies Bleeding when hit. The level of effect',
            'depends on the velocity of the arrow when it hits', 
            'a mob.']},
        { items: ['amethyst_update:ancient_staff'], tooltip: [
            'The staff needs to be enchanted in order to use it.',
            'Since it is an old and powerful weapon, you must',
            'have at least 15 bookshelves to enchant it. The',
            'Ancient Staff\'s behaviour depends on its main',
            'enchantment.']},
        { items: [
            'astro:mauveine_helmet',
            'astro:mauveine_chestplate',
            'astro:mauveine_leggings',
            'astro:mauveine_boots'], 
          tooltip: [
            'Reduces your gravity, depending on the amount you', 
            'are wearing. You can toggle between low gravity', 
            'and normal gravity by holding shift with 3 or more',
            'pieces.']},
        { items: ['astro:mauveine_sabre'], tooltip: [
            'A quicker variant of the sword, with less damage.']},
        { items: ['astro:gravity_bomb_down'], tooltip: [
            'Leaves a radius of low gravity around for 6.5', 
            'seconds, causing all affected entities to be at', 
            '10% gravity. This can be ignored if you have 3',
            'mauveine armour pieces equipped.']},
        { items: ['astro:gravity_bomb_up'], tooltip: [
            'Leaves a radius of high gravity around for 6.5', 
            'seconds, causing all affected entities to be at', 
            '200% gravity. This can be ignored if you have 3',
            'mauveine armour pieces equipped.']},
        { items: ['amethystgravity:plating'], tooltip: [
            'The most basic form of gravity control.']},
        { items: ['amethystgravity:dense_plating'], tooltip: [
            'The most basic form of gravity control. Has a', 
            'taller area of effect, so that you can jump around', 
            'and not fall off.']},
        { items: ['amethystgravity:gravity_glasses'], tooltip: [
            'See the generated gravity fields of Gravity', 
            'Generators.']},
        { items: [
            'amethystgravity:field_generator',
            'amethystgravity:cylinder_field_generator',
            'amethystgravity:planet_field_generator'], 
          tooltip: [
            'For larger areas of gravity control, you can use',
            'this. The larger you make the area of effect, the', 
            'more amethyst blocks you need to place next to the', 
            'generator to power it. Just hit \"Apply Changes\"', 
            'in the generator\'s menu, and it will tell you how', 
            'many blocks you need']},
        { items: ['amyshield:amethyst_shield'], tooltip: [
            'For mobility and combat purposes, it has a plethora', 
            'of different abilities that complement your skills', 
            'in PvP or PvE. The shield\'s abilities are charged', 
            'up by moving around, or by blocking hits.']},
        { items: ['amyshield:amethyst_monocle'], tooltip: [
            'While wearing the monocle, the location of any',
            'nearby ore will be revealed to the player by means', 
            'of a particle on the side of a block. When you',
            'dig in the direction of the particle, you\'ll find',
            'the ore. The detection itself happens passively.']},
        { items: ['horsearmorstandmod:horsearmorstanditem'], tooltip: [
            'Display your favorite horse armor!']},
        { items: [
            'minecraft:leather_horse_armor',
            'minecraft:iron_horse_armor',
            'minecraft:golden_horse_armor',
            'minecraft:diamond_horse_armor',
            'amethystequipment:amethyst_horse_armor',
            'exlinecopperequipment:copper_horse_armor',
            'netheritehorsearmor:netherite_horse_armor'], 
          tooltip: [
            'Now enchantable!']},
        { items: [
            'eugenes_lance:wooden_lance',
            'eugenes_lance:stone_lance',
            'eugenes_lance:iron_lance',
            'eugenes_lance:golden_lance',
            'eugenes_lance:diamond_lance',
            'eugenes_lance:netherite_lance',], 
          tooltip: [
            'Deals increased knockback whilst riding a horse.', 
            'Perfect for chaining hits whilst at high speeds.']},
        { items: [
            'minecraft:white_bed',
            'minecraft:light_gray_bed',
            'minecraft:gray_bed',
            'minecraft:black_bed',
            'minecraft:brown_bed',
            'minecraft:red_bed',
            'minecraft:orange_bed',
            'minecraft:yellow_bed',
            'minecraft:lime_bed',
            'minecraft:green_bed',
            'minecraft:cyan_bed',
            'minecraft:light_blue_bed',
            'minecraft:blue_bed',
            'minecraft:purple_bed',
            'minecraft:magenta_bed',
            'minecraft:pink_bed',
            'aether:skyroot_bed',
            'meadow:flecked_bed',
            'meadow:highland_bed',
            'meadow:patched_bed',
            'meadow:rocky_bed',
            'meadow:umbra_bed',
            'meadow:inky_bed',
            'meadow:warped_bed',
            'meadow:straw_bed',], 
          tooltip: [
            'To make it able to skip the night (or thunderstorm),',
            'you need to use a clock on a bed (just right-click',
            'on it while holding!) You will also need to use a',
            'compass on a bed to set your spawn point. When',
            'breaking this, the upgrades go away.']},
        { items: ['minecraft:minecart',], tooltip: [
            '',
            'Crouch and right-click while looking at the',
            'Minecart to pick up. Stand and crouch one time to',
            'release it.', 
            '', 
            'Additionally, Minecarts can be boosted with',
            'fireworks like an Elytra when used while riding one.']},
        { items: [
            'minecraft:minecart',
            'minecraft:chest_minecart',], 
          tooltip: [
            'When placed by a player, they now move basically', 
            'as fast as an Elytra, making them a viable option',
            'for transportation. They will also automatically',
            'load surrounding chunks if they\'re on rails,',
            'making it possible for them to cross long',
            'distances without the need for a player to be near', 
            'by.']},
        { items: ['aquatictorches:aquatic_torch',], tooltip: [
            'Can be placed underwater.']},
        { items: [
            'minecraft:anvil',
            'minecraft:chipped_anvil',
            'minecraft:damaged_anvil',], 
          tooltip: [
            'No matter how often you repair an item or add new',
            'enchantments to it, costs won\'t needlessly increase',
            'They can also now be repaired by one stage using',
            'iron blocks, which can be automated using a dispenser.',
            '',
            'Setting a name in an anvil is completely free and',
            'doesn\'t risk damaging your precious anvil',]},
        { items: [
            'minecraft:fishing_rod',
            'tide:stone_fishing_rod',
            'tide:iron_fishing_rod',
            'tide:golden_fishing_rod',
            'tide:crystal_fishing_rod',
            'tide:diamond_fishing_rod',
            'tide:netherite_fishing_rod',], 
          tooltip: [
            'To catch fish faster, different types of bait can be',
            'crafted, which can be applied to this to gain unique',
            'bonuses.',
            '',
            'If you\'re lucky, you might reel in some large crates.',
            'They can be fished up pretty much anywhere, and can be',
            'hooked more commonly with magnetic bait. They contain',
            'fish, random resources, and sometimes treasure. Just',
            'make sure you don\'t lose them if they happen to sink',
            'back into the ocean.']},
        { items: ['tide:angler_workshop',], tooltip: [
            'Allows you to add special hooks, lines, and bobbers',
            'to fishing rods. Each upgrade has a different effect',
            'that can be added.']},
        { items: ['tide:fishing_journal',], tooltip: [
            'Any new fish that you catch will be added to this',
            'book where you can view their category and some',
            'information about them. The book contains many pages',
            'that help sort the fish you find into unique',
            'categories and track your progress through the mod.']},
        { items: [
            'minecraft:ice',
            'minecraft:packed_ice',
            'minecraft:blue_ice',], 
          tooltip: [
            'Snow Golems can live in hot Biomes under the',
            'conditions that they stand on this!']},
        { items: ['wolf_lore:totem_of_the_experience'], tooltip: [
            'Gives you constant Resistance II as long as you\'re',
            'holding it in your main or off hand.']},
        { items: ['wolf_lore:wolf_intoxicator'], tooltip: [
            'Attacking anything with this will poison them and',
            'launch them into the air some ways.']},
        { items: ['wolf_lore:ornate_sword'], tooltip: [
            'Attacking something with a wolf nearby will cause it',
            'to go after the entity you attacked, even if the wolf',
            'is tamed. Wolves will even attack themselves.',
            '']},
        { items: ['minecraft:cauldron'], tooltip: [
            'Mixing is a core component of the Cauldron, it',
            'involves taking several potions and combining their',
            'effects in cauldron. To begin mixing, add any potion',
            'to a cauldron! The cauldron behaves the same as',
            'vanilla with the 3 levels. While mixing, the cauldron',
            'cannot be used for other vanilla purposes (and cannot',
            'be moved with pistons). To revert to vanilla behavior,',
            'empty the cauldron or dilute with water until there is',
            'no remaining effect. Additionally using a milk bucket',
            'will remove all effects.',
            '',
            'Use dilution to balance potions, adding two potions',
            'will result in two potions that have both effects but',
            'with half duration and amplification. Adding a water',
            'bottle to a mixture will increase the cauldron level,',
            'but dilutes the mixture. Mixing a potion with max',
            'potency into an existing mixture will cause that',
            'mixture to have max potency! Potency is indicated by',
            'the potion cauldron splashing and making bubble noises.']},
        { items: ['minecraft:torchflower'], tooltip: [
            'Now emits light!']},
        { items: [
            'minecraft:glow_berries',
            'edible_amethyst_:crystal_glow_berries',
            'expandeddelight:glow_berry_jelly',
            'expandeddelight:glow_berry_jelly_sandwich',
            'expandeddelight:glow_berry_juice',
            'expandeddelight:glow_berry_sweet_roll',
            'farmersdelight:glow_berry_custard',
            'moredelight:toast_with_glow_berries',], 
          tooltip: [
            'Makes foxes and players glow when they eat this.']},
        { items: ['minecraft:glow_ink_sac'], tooltip: [
            'Use on a banner to make the entire banner and its',
            'layers glow. A regular ink sac will similarly remove the',
            'glowing.']},
        { items: ['minecraft:sniffer_egg'], tooltip: [
            'Sniffers can now be saddled and ridden on, have chests',
            'equipped (will place dug up seeds in their chest), and',
            'be given an Ominous Banner to carry you to the nearest',
            'Outpost.']},
        { items: ['moresnifferflowers:dawnberry'], tooltip: [
            'A glowing vine that drops edible Dawnberries when',
            'picked, can be fed to the Sniffer.']},
        { items: ['moresnifferflowers:ambush_seeds'], tooltip: [
            'Seeds for an Amber bearing bush. Amber drops several',
            'treasures and also has a small chance to drop sniffer',
            'seeds, making farming them easier.']},
        { items: ['moresnifferflowers:caulorflower_seeds'], tooltip: [
            'Harvestable for a dye of its color.']},
        { items: ['moresnifferflowers:bonmeelia_seeds'], tooltip: [
            'Produces jars of Bonmeel.']},
        { items: ['spectre:spectre_scythe'], tooltip: [
            'This versatile weapon can be enchanted with 7 new',
            'exclusive enchantments.']},
        { items: ['spectre:ichor_scythe'], tooltip: [
            'This weapon can be enchanted with 5 additional',
            'enchants, as well as certain previously stated',
            'enchantments.']},
        { items: ['village_business:sales_stand'], tooltip: [
            'Place it somewhere that has villagers nearby. Put the',
            'items you want to sell inside of the Sales Stand, and',
            'villagers may come to exchange emeralds for that item.',
            'You can also half or double the price of the item, which',
            'will change the chance of selling, and the time between',
            'customer visits. Giving the Sales Stand a redstone',
            'signal will close the shop, which prevents villagers',
            'from buying the item and allows for automation blocks',
            'to extract the input.']},
        { items: ['village_business:request_stand'], tooltip: [
            'Place it somewhere that has villagers nearby. Set the',
            'requested item by placing an item in the Request slot.',
            'Load the request stand with emeralds. Villagers will',
            'occassionally come by and give you that item in exchange',
            'for emeralds. Villagers are unlikely to sell you items in',
            'this way, and the items will be more expensive than when',
            'you sell them. Giving the Request Stand a redstone',
            'signal will close the shop, which prevents villagers',
            'from buying the item and allows for automation blocks to',
            'extract the input.']},
    ].forEach(pair => {
        pair.items.forEach(item => {
            e.addAdvanced(item, (stack, _, text) => {
                pair.tooltip.forEach((line, index) => {
                    text.add(index + 1, Text.gray(line));
                })
            })
        });
    })
})