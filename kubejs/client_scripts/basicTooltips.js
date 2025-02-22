
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
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
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