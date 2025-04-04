ServerEvents.recipes(e => {
    e.shaped(
        Item.of('botania:rainbow_rod', 1),
        [
          ' CB',
          'DAC',
          'AE '
        ],
        {
          A: 'botania:elementium_ingot',
          B: 'botania:dragonstone',
          C: 'botania:pixie_dust',
          D: 'xtraarrows:diamond_freezing_arrow',
          E: 'minecraft:globe_banner_pattern'
        }
      ).id("botania:rainbow_rod")
    
      e.shaped(
          Item.of('botania:gravity_rod', 1),
          [
            ' EC',
            'DBE',
            'AF '
          ],
          {
            A: 'botania:dreamwood_wand',
            B: 'botania:dragonstone',
            C: 'betterend:clawfern',
            D: 'sophisticatedbackpacks:battery_upgrade',
            E: 'regions_unexplored:pointed_redstone',
            F: 'xtraarrows:gravity_controller'
          }
      ).id("botania:gravity_rod")
      
      e.shaped(
          Item.of('botania:dodge_ring', 1),
          [
            'CA ',
            'ADA',
            ' AB'
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_air',
            C: 'minecraft:emerald',
            D: 'minecraft:wither_skeleton_skull'
          }
      ).id("botania:dodge_ring")
      
      e.shaped(
          Item.of('botania:mining_ring', 1),
          [
            'BAC',
            'ADA',
            ' A '
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_earth',
            C: 'minecraft:golden_pickaxe',
            D: 'mythicupgrades:topaz_upgrade_smithing_template'
          }
      ).id("botania:mining_ring")
    
      e.shaped(
          Item.of('botania:holy_cloak', 1),
          [
            'DBD',
            'CDC',
            'CAC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:black_lotus',
            C: 'minecraft:glowstone_dust',
            D: 'minecraft:white_wool'
          }
      ).id("botania:holy_cloak")
      
      e.shaped(
          Item.of('botania:balance_cloak', 1),
          [
            'DBD',
            'CDC',
            'CAC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:black_lotus',
            C: 'minecraft:emerald',
            D: 'minecraft:light_gray_wool'
          }
      ).id("botania:balance_cloak")
      
      e.shaped(
          Item.of('botania:unholy_cloak', 1),
          [
            'DBD',
            'CDC',
            'CAC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:black_lotus',
            C: 'minecraft:redstone',
            D: 'minecraft:black_wool'
          }
      ).id("botania:unholy_cloak")
      
      e.shaped(
          Item.of('botania:super_lava_pendant', 1),
          [
            'BEB',
            'BCB',
            'DAD'
          ],
          {
            A: 'botania:life_essence',
            B: 'minecraft:blaze_rod',
            C: 'botania:lava_pendant',
            D: 'minecraft:nether_brick',
            E: 'minecraft:wither_skeleton_skull'
          }
      ).id("botania:super_lava_pendant")
      
      e.shaped(
          Item.of('botania:super_cloud_pendant', 1),
          [
            'BEB',
            'BCB',
            'DAD'
          ],
          {
            A: 'botania:life_essence',
            B: 'minecraft:ghast_tear',
            C: 'botania:cloud_pendant',
            D: 'minecraft:white_wool',
            E: 'botania:overgrowth_seed'
          }
      ).id("botania:super_cloud_pendant")
    
      e.shaped(
          Item.of('botania:travel_belt', 1),
          [
            'CDF',
            'DED',
            'ADB'
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_air',
            C: 'botania:rune_water',
            D: 'minecraft:leather',
            E: 'minecraft:cod',
            F: 'minecraft:salmon'
          }
      ).id("botania:travel_belt")
      
      e.shaped(
          Item.of('botania:super_travel_belt', 1),
          [
            'CDE',
            'DBD',
            'ADC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:travel_belt',
            C: 'botania:elementium_ingot',
            D: 'botania:black_lotus',
            E: 'doggytalents:feathered_mantle'
          }
      ).id("botania:super_travel_belt")
    
      e.shaped(
          Item.of('botania:speed_up_belt', 1),
          [
            'ECE',
            'BAB',
            'EDE'
          ],
          {
            A: 'botania:travel_belt',
            B: 'botania:grass_seeds',
            C: 'minecraft:map',
            D: 'minecraft:sugar',
            E: 'botania:black_lotus'
          }
      ).id("botania:speed_up_belt")
    
      e.shaped(
          Item.of('botania:knockback_belt', 1),
          [
            'CDE',
            'DED',
            'ADB'
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_earth',
            C: 'botania:rune_fire',
            D: 'minecraft:leather',
            E: 'botania:black_lotus'
          }
      ).id("botania:knockback_belt")
    
      e.shaped(
          Item.of('botania:thunder_sword', 1),
          [
            ' ED',
            'BCE',
            'AB '
          ],
          {
            A: 'botania:terraform_rod',
            B: 'botania:ender_air_bottle',
            C: 'botania:mana_diamond',
            D: 'botania:elementium_ingot',
            E: 'doggytalents:feathered_mantle'
          }
      ).id("botania:thunder_sword")
    
      e.shaped(
          Item.of('botania:star_sword', 1),
          [
            ' ED',
            'BCE',
            'AB '
          ],
          {
            A: 'botania:terraform_rod',
            B: 'botania:ender_air_bottle',
            C: 'botania:dragonstone',
            D: 'botania:elementium_ingot',
            E: 'doggytalents:feathered_mantle'
          }
      ).id("botania:star_sword")
    
      let terrasteelRecipeMap = [
        ["helmet", "spring"],
        ["chestplate", "summer"],
        ["leggings", "autumn"],
        ["boots", "winter"],  
      ].forEach((item) => {
        e.shaped(
          Item.of(`botania:terrasteel_${item[0]}`, 1),
          [
            'CDC',
            'BAB',
            'EBE'
          ],
          {
            A: `botania:elementium_${item[0]}`,
            B: 'botania:terrasteel_ingot',
            C: 'botania:livingwood_twig',
            D: `botania:rune_${item[1]}`,
            E: 'minecraft:netherite_ingot'
          }
        ).id(`botania:terrasteel_${item[0]}`)
      })
      
      e.smithing('botania:terra_pick', 'botania:obedience_stick', '#enrichment:end_game_pick', 'botania:terrasteel_ingot').id('botania:terra_pick')
      e.smithing('botania:terra_axe', 'botania:obedience_stick', '#enrichment:end_game_axe', 'botania:terrasteel_ingot').id('botania:terra_axe')
})