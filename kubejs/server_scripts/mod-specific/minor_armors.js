ServerEvents.recipes(e => {
    e.shaped(
        Item.of('immersive_armors:steampunk_helmet', 1), 
        [
          'A A',
          'B E',
          'DCD'
        ],
        {
          A: 'betterend:leather_stripe',
          B: 'minecraft:redstone_torch',
          C: 'minecraft:ender_eye',
          D: 'minecraft:white_stained_glass',
          E: 'minecraft:golden_carrot'
        }
      ).id("immersive_armors:steampunk_helmet")
      
      e.shaped(
        Item.of('immersive_armors:heavy_helmet', 1), 
        [
          'AAA',
          'ABA',
          '   '
        ],
        {
          A: 'minecraft:iron_block',
          B: 'minecraft:netherite_block'
        }
      ).id("immersive_armors:heavy_helmet")
    
      e.shaped(
        Item.of('immersive_armors:steampunk_chestplate', 1), 
        [
          'B B',
          'DBA',
          'BCA'
        ],
        {
          A: 'minecraft:clock',
          B: 'minecraft:gold_ingot',
          C: 'minecraft:piston',
          D: 'minecraft:compass'
        }
      ).id("immersive_armors:steampunk_chestplate")
    
      e.shaped(
        Item.of('immersive_armors:steampunk_leggings', 1), 
        [
          'AAA',
          'CBC',
          'A A'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:rabbit_foot',
          C: 'minecraft:piston'
        }
      ).id("immersive_armors:steampunk_leggings")
    
      e.shaped(
        Item.of('immersive_armors:steampunk_boots', 1), 
        [
          'C C',
          'A A',
          'B B'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:phantom_membrane',
          C: 'minecraft:piston'
        }
      ).id("immersive_armors:steampunk_boots")
      
      e.shaped(
        Item.of('immersive_armors:heavy_boots', 1), 
        [
          'ABA',
          'A A',
          '   '
        ],
        {
          A: 'minecraft:iron_block',
          B: 'minecraft:netherite_block'
        }
      ).id("immersive_armors:heavy_boots")
    
      e.shaped(
        Item.of('plentyofarmors:marine_diamond', 1), 
        [
          ' D ',
          'CBC',
          ' A '
        ],
        {
          A: 'minecraft:diamond_block',
          B: 'minecraft:heart_of_the_sea',
          C: 'minecraft:sea_lantern',
          D: 'minecraft:conduit'
        }
      ).id("plentyofarmors:marine_diamond")
    
      e.remove({ id: 'plentyofarmors:marine_diamond_0' })
  
      e.remove({ id: 'plentyofarmors:marine_diamond_1' })

      let armorTypes = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
      ].forEach((piece) => {
        e.smithing(`plentyofarmors:ender_netherite_${piece}`, 'minecraft:netherite_upgrade_smithing_template', `minecraft:netherite_${piece}`, `plentyofarmors:heart_of_the_end`).id(`plentyofarmors:ender_netherite_${piece}`)
        e.smithing(`plentyofarmors:marine_diamond_${piece}`, 'minecraft:netherite_upgrade_smithing_template', `minecraft:netherite_${piece}`, `plentyofarmors:marine_diamond`).id(`plentyofarmors:marine_diamond_${piece}`)
      })
})