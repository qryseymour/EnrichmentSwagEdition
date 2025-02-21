
ItemEvents.tooltip(e => {
    let itemTooltipPairs = [
        { item: 'cu:copper_wrench', tooltip: [
            'Rotates blocks that can be rotated. Can also be', 
            'used inside the dispenser.']},
        { item: 'cu:levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'cu:exposed_levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'cu:weathered_levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'cu:oxidized_levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'cu:waxed_levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'cu:waxed_exposed_levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'cu:waxed_weathered_levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'cu:waxed_oxidized_levitator_block', tooltip: [
            'Gives you the levitation effect. The effect', 
            'changes depending on what level of oxidization', 
            'the block has.']},
        { item: 'oxidized:copper_rail', tooltip: [
            'Functions almost identically to the Powered Rail.', 
            'The difference is that a chain of connected', 
            'copper rails can stay powered for up to 100 blocks as', 
            'compared to 8 blocks with the Powered Rail.'] },
        { item: 'oxidized:copper_pan', tooltip: [
            'Passively pan for resources such as clay and iron', 
            'nuggets. The pan will only work if it is placed', 
            'in water and on a sand or gravel block. Over time', 
            'the pan will sift and release items it finds.'] },
        { item: 'oxidized:copper_kiln', tooltip: [
            'Smelt cobblestone, clay, sand, and logs at', 
            'extremely fast speeds. The kiln is meant for', 
            'obtaining terracotta, bricks, stone, charcoal,', 
            'and glass for building quickly. It functions like', 
            'the smoker and blast furnace.'] },
        { item: 'oxidized:copper_trap', tooltip: [
            'Can be placed down. When stepped on, the trap', 
            'deals 5 damage and stops the victim from moving', 
            'away. The trap will open back up after closing for', 
            '3 seconds. It can be toggled manually by', 
            'right-clicking or with redstone (levers,', 'buttons, etc).'] },
        { item: 'oxidized:copper_pulsar', tooltip: [
            'While in the player\'s inventory, the pulsar will', 
            'allow you to pick up experience orbs and items', 
            'from up to x10 farther than the normal pickup', 
            'range. It can be toggled on and off using', 
            'right-click.'] },
        { item: 'oxidized:copper_barometer', tooltip: [
            'Provides you with information about the upcoming', 
            'weather or when the current precipitation will end.'] },
    ].forEach(pair => {
            e.addAdvanced(pair.item, (stack, _, text) => {
                pair.tooltip.forEach((line, index) => {
                    text.add(index + 1, Text.darkGray(line));
                })
        });
    })
})