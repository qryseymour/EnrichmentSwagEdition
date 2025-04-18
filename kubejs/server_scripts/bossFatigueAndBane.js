const bosses = [
    "minecraft:ravager",
    "minecraft:elder_guardian",
    "minecraft:evoker",
    "minecraft:wither",
    "mutantmonsters:mutant_zombie",
    "mutantmonsters:mutant_creeper",
    "mutantmonsters:mutant_enderman",
    "mutantmonsters:mutant_skeleton",
    "friendsandfoes:wildfire",
    "illagerinvasion:alchemist",
    "illagerinvasion:provoker",
    "illagerinvasion:sorcerer",
    "illagerinvasion:necromancer",
    "illagerinvasion:inquisitor",
    "illagerinvasion:firecaller",
    "illagerinvasion:invoker",
    "minecraft:ender_dragon",
    "bosses_of_mass_destruction:lich",
    "bosses_of_mass_destruction:void_blossom",
    "bosses_of_mass_destruction:gauntlet",
    "bosses_of_mass_destruction:obsidilith"
]

EntityEvents.hurt(event => {
    const victim = event.entity;
    const attacker = event.source.actual;
    const victimType = victim.type;
    const attackerType = event.source?.actual?.type || "null";
    const { server, level } = event
    let player = null;
    if (attackerType != "null") {
        if (bosses.includes(attackerType) && victimType == "minecraft:player") {
            player = event.player
        } else if (bosses.includes(victimType) && attackerType == "minecraft:player") {
            player = event.source.player
        }
    }
    if (player) {
        if (!player.hasEffect("minecraft:mining_fatigue") && !player.hasEffect("galosphere:block_bane")) {
            level.playSound(null, player.x, player.y, player.z, 'minecraft:entity.blaze.shoot', 'hostile', 1, 1);
            level.playSound(null, player.x, player.y, player.z, 'minecraft:entity.blaze.ambient', 'hostile', 1, 1);
            player.statusMessage = Text.darkRed("An evil presence has given you creative shock!")
        }
        let { potionEffects } = player
        if (potionEffects) {
            potionEffects.add("minecraft:mining_fatigue", 200, 1, true, false)
            potionEffects.add("minecraft:mining_fatigue", 300, 0, true, false)
            potionEffects.add("galosphere:block_bane", 200, 1, true, false)
            potionEffects.add("galosphere:block_bane", 300, 0, true, false)
        }
    }
})