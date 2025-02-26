
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
        { items: ['oxidized:copper_pulsar'], tooltip: [
            'While in the player\'s inventory, the pulsar will', 
            'allow you to pick up experience orbs and items', 
            'from up to x10 farther than the normal pickup', 
            'range. It can be toggled on and off using', 
            'right-click.'] },
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
        { items: [
            'minecraft:minecart',], 
          tooltip: [
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