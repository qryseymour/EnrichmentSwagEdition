
ItemEvents.tooltip(e => {
    let itemTooltipPairs = [
        { items: ['additionaladditions:wrench'], tooltip: [
            'Rotates blocks that can be rotated. Can also be', 
            'used inside the dispenser.']},
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
            ' ',
            'Once you\'ve kidnapped a mob you can then yeet it', 
            'with a keypress (Z by default).']},
        { items: ['supplementaries:rope'], tooltip: [
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
            'meadow:straw_bed',
            'aether:skyroot_bed',
            'travelersbackpack:white_sleeping_bag',
            'travelersbackpack:light_gray_sleeping_bag',
            'travelersbackpack:gray_sleeping_bag',
            'travelersbackpack:black_sleeping_bag',
            'travelersbackpack:brown_sleeping_bag',
            'travelersbackpack:red_sleeping_bag',
            'travelersbackpack:orange_sleeping_bag',
            'travelersbackpack:yellow_sleeping_bag',
            'travelersbackpack:lime_sleeping_bag',
            'travelersbackpack:green_sleeping_bag',
            'travelersbackpack:cyan_sleeping_bag',
            'travelersbackpack:light_blue_sleeping_bag',
            'travelersbackpack:blue_sleeping_bag',
            'travelersbackpack:purple_sleeping_bag',
            'travelersbackpack:magenta_sleeping_bag',
            'travelersbackpack:pink_sleeping_bag',], 
          tooltip: [
            'To make it able to skip the night (or thunderstorm),',
            'you need to use a clock on a bed (just right-click',
            'on it while holding!) You will also need to use a',
            'compass on a bed to set your spawn point. When',
            'breaking this, the upgrades go away.']},
        { items: ['minecraft:minecart',], tooltip: [
            ' ',
            'Crouch and right-click while looking at the',
            'Minecart to pick up. Stand and crouch one time to',
            'release it.', 
            ' ', 
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
            ' ',
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
            ' ',
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
            ' ']},
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
            ' ',
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
            'edible_amethyst_:crystal_glow_berries',], 
          tooltip: [
            'Makes foxes and players glow when they eat this.']},
        { items: ['aquamirae:ship_graveyard_echo'], tooltip: [
            ' ',
            'Can be used to repair most Aquamirae armor and weapons.',
            'Holding the echo in your hands, you will hear the',
            'ambience of the Ice Maze.']},
        { items: [
            'candlelight:cobblestone_stove',
            'candlelight:sandstone_stove',
            'candlelight:stone_bricks_stove',
            'candlelight:deepslate_stove',
            'candlelight:granite_stove',
            'candlelight:end_stove',
            'candlelight:mud_stove',
            'candlelight:quartz_stove',
            'candlelight:red_nether_bricks_stove',
            'candlelight:basalt_stove',
            'candlelight:bamboo_stove',
            'farm_and_charm:stove'], 
          tooltip: [
            'The Stove is your primary crafting station for making',
            'pastries and bread. It also serves as a heat source for',
            'the Cooking Pot.']},
        { items: ['bakery:baker_station'], tooltip: [
            'Used to prepare cakes, cupcakes, and cookies.']},
        { items: ['farm_and_charm:crafting_bowl'], tooltip: [
            'Used to make various types of dough.']},
        { items: ['betterarcheology:archeology_table'], tooltip: [
            'Analyse Unidentified Artifacts using any type of brush.',
            'It outputs one of the 3 different Identified Artifact,',
            'each with their own special powers.']},
        { items: ['betterarcheology:fossiliferous_dirt'], tooltip: [
            'Can be brushed. Once you\'ve found some, you may',
            'uncover fossil parts to collect!']},
        { items: ['betterarcheology:bomb'], tooltip: [
            'Throwable, leave a particle trail and explode with the',
            'power of TNT. Use them offensively, create holes for',
            'escapes, or just have fun with them!']},
        { items: ['betterend:infusion_pedestal'], tooltip: [
            'To use the Infusion Pedestal to perform Infusion',
            'Rituals, you will also need 8 Pedestals of any type.',
            'These are placed around the Infusion Pedestal in a',
            'circle, so that in the four cardinal direction, each',
            'pedestal is on the third block, and diagonally, each',
            'pedestal is on the second block.',
            ' ',
            'It should be noted that the Infusion Ritual recipes',
            'which use the Infusion Pedestal are all',
            'directional-dependent. They will only work if the',
            'ingredients are placed onto the correct pedestals, so',
            'you may wish to mark which direction is north when',
            'placing your pedestals. If you placed all the items',
            'correctly you will have to right-click the eye of the',
            'infusion Table, this will start the ritual.']},
        { items: [
            'betterend:flavolite_runed',
            'betterend:flavolite_runed_eternal'], 
          tooltip: [
            'The eternal portal is the primary means of transport',
            'between the end and the overworld. When activated, a',
            'matching portal will be generated in the Overworld at',
            'the same x, y and z co-ordinates (or as close as',
            'possible).',
            ' ',
            'To activate a portal, the main portal ring must be',
            'completed with Runed Flavolite, and then an Eternal',
            'Crystal should be placed onto each of the six Eternal',
            'Pedestals that surround the portal. As each Eternal',
            'Crystal is placed, a beacon-like beam will emanate',
            'above it. As the sixth Eternal Crystal is placed, the',
            'End Portal igniting sound will be heard as the portal',
            'lights.'
        ]},
        { items: ['betterend:flavolite_runed'], tooltip: [
            'Used to repair a broken Eternal Portal.',
            ' ']},
        { items: ['betterend:eternal_crystal'], tooltip: [
            'Eternal Crystals are required to activate an Eternal',
            'Portal, allowing passage between the End and the',
            'Overworld. One Eternal Crystal should be placed on',
            'each of the six eternal pedestals that surround the portal.']},
        { items: [
            'betterend:flavolite_pedestal',
            'betterend:violecite_pedestal',
            'betterend:sulphuric_rock_pedestal',
            'betterend:virid_jadestone_pedestal',
            'betterend:azure_jadestone_pedestal',
            'betterend:sandy_jadestone_pedestal',
            'betterend:umbralith_pedestal',
            'betterend:andesite_pedestal',
            'betterend:diorite_pedestal',
            'betterend:granite_pedestal',
            'betterend:quartz_pedestal',
            'betterend:purpur_pedestal',
            'betterend:smaragdant_crystal_pedestal',
            'betterend:eternal_pedestal',], 
          tooltip: [
            'To craft Infusional Ritual items, eight Pedestals, of any',
            'type, must be placed around an Infusion Pedestal.',
            ' ',
            'After placing the pedestal down, it is possible to place',
            'any block or item on top by right-clicking the top of the',
            'pedestal with it. The item will appear hovering just above',
            'the pedestal, slowly rotating. The item can be removed by',
            'right-clicking again on the top of the pedestal.',
            ' ',
            'When the pillar blocks are stacked vertically, they will',
            'connect to each other to form a pillar. Although normally',
            'less than a full block in height, if a solid block is',
            'placed above the top pillar block, it extends to fill a',
            'full-block height.'
        ]},
        { items: ['betterend:respawn_obelisk'], tooltip: [
            'Right clicking on the respawn obelisk while holding 6',
            'amber gems will consume the gems and set the player\'s',
            'spawnpoint to the blocks surrounding the obelisk. ']},
        { items: ['betternether:pig_statue_respawner'], tooltip: [
            'Allows the player to respawn anything, by sacrificing one',
            'piece of glowstone. Once glowstone is sacrificed to the',
            'Respawner Statue, Recall Potions and Magic Mirror can be',
            'used in alternate dimensions. However, this cannot be',
            'dropped in any method.']},
        { items: ['betternether:black_apple'], tooltip: [
            'Applies 2 seconds of Regeneration IV... probably?']},
        { items: ['brewery:wooden_brewingstation'], tooltip: [
            'Operates through direct interaction. The Kettle is the',
            'centerpiece of brewery: That\'s where all ingredients are',
            'placed. The Oven serves as a fire source and needs coal.',
            'The other parts are responsible for the minigame.',
            ' ',
            'After the correct ingredients have been placed, the',
            'kettle is filled with water, and the oven is lit, the',
            'minigame begins. It lasts about 45 seconds and during',
            'this time various events can occur that require a direct',
            'action from you (or your teammates). The brewing process',
            'is represented audiovisually.',
            ' ',
            'The faster you complete the mini-game, the better the',
            'beer quality will be. Sometimes it can result in',
            'undesirable outcomes!']},
        { items: ['brewery:copper_brewingstation'], tooltip: [
            'Operates through direct interaction. The Kettle is the',
            'centerpiece of brewery: That\'s where all ingredients are',
            'placed. The Oven serves as a fire source and needs coal.',
            'The other parts are responsible for the minigame.',
            ' ',
            'After the correct ingredients have been placed, the',
            'kettle is filled with water, and the oven is lit, the',
            'minigame begins. It lasts about 45 seconds and during',
            'this time various events can occur that require a direct',
            'action from you (or your teammates). The brewing process',
            'is represented audiovisually.',
            ' ',
            'The faster you complete the mini-game, the better the',
            'beer or whiskey quality will be. Sometimes it can result',
            'in undesirable outcomes!']},
        { items: ['brewery:netherite_brewingstation'], tooltip: [
            'Operates through direct interaction. The Kettle is the',
            'centerpiece of brewery: That\'s where all ingredients are',
            'placed. The Oven serves as a fire source and needs coal.',
            'The other parts are responsible for the minigame.',
            ' ',
            'After the correct ingredients have been placed, the',
            'kettle is filled with water, and the oven is lit, the',
            'minigame begins. It lasts about 45 seconds and during',
            'this time various events can occur that require a direct',
            'action from you (or your teammates). The brewing process',
            'is represented audiovisually.',
            ' ',
            'The faster you complete the mini-game, the better the',
            'beer or whiskey quality will be.']},
        { items: ['brewery:beer_mug'], tooltip: [
            'Not only serves as a mug for beer but can also be',
            'repurposed as a flower pot. ']},
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