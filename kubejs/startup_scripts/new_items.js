
StartupEvents.registry('item', event => {
    let eyes = [
        {
            id: 'inert_black_eye',
            name: 'Inert Black Eye'
        },
        {
            id: 'inert_cold_eye',
            name: 'Inert Cold Eye'
        },
        {
            id: 'inert_corrupted_eye',
            name: 'Inert Corrupted Eye'
        },
        {
            id: 'inert_cursed_eye',
            name: 'Inert Cursed Eye'
        },
        {
            id: 'inert_exotic_eye',
            name: 'Inert Exotic Eye'
        },
        {
            id: 'inert_guardian_eye',
            name: 'Inert Lost Eye'
        },
        {
            id: 'inert_lost_eye',
            name: 'Inert Lost Eye'
        },
        {
            id: 'inert_magical_eye',
            name: 'Inert Magical Eye'
        },
        {
            id: 'inert_nether_eye',
            name: 'Inert Nether Eye'
        },
        {
            id: 'inert_old_eye',
            name: 'Inert Old Eye'
        },
        {
            id: 'inert_rogue_eye',
            name: 'Inert Rogue Eye'
        },
        {
            id: 'inert_undead_eye',
            name: 'Inert Undead Eye'
        },
        {
            id: 'inert_witch_eye',
            name: 'Inert Witch Eye'
        },
        {
            id: 'inert_wither_eye',
            name: 'Inert Wither Eye'
        },
    ].forEach(eye => {
        event.create(`${eye.id}`).displayName(`${eye.name}`).texture(`kubejs:item/${eye.id}`)
    }) 
  })