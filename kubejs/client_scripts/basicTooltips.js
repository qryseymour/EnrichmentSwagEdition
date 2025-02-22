
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
    ].forEach(pair => {
        pair.items.forEach(item => {
            e.addAdvanced(item, (stack, _, text) => {
                pair.tooltip.forEach((line, index) => {
                    text.add(index + 1, Text.darkGray(line));
                })
            })
        });
    })
})