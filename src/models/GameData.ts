export interface Character {
    id: string;
    name: string;
    role: 'KILLER' | 'SURVIVOR';
    dlc: string; // To determine which characters are allowed
    cost?: number; // For variants where characters cost money
}
export interface Perk {
    id: string;
    name: string;
    ownerId?: string; // Assigning the perk to the character
    cost: number;
}

export interface EconomyItem {
    id: string;
    name: string;
    description: string;
    cost: number;
}
export const BLOOD_MONEY_PENALTIES: EconomyItem[] = [
    { id: 'GEN_BEFORE_HOOK', name: 'Gen Completed Before Hook', description: 'Survivors finish 1 gen before you hook any survivor.', cost: -2 },
    { id: 'LAST_GEN_POP', name: 'Last Gen Pop', description: 'Survivors finish the last generator.', cost: -2 },
    { id: 'DOOR_OPENED', name: 'Door Opened', description: 'Any exit door is opened. Only applies once.', cost: -5 },
    { id: 'HATCH_ESCAPE', name: 'Hatch Escape', description: 'Any survivor escapes through hatch. Only applies once.', cost: -4 },
    { id: 'STUN_BLIND', name: 'Stunned / Blinded', description: 'Any survivor blinds or stuns you. Each occasion counts.', cost: -1 },
    { id: 'HEX_CLEANSED', name: 'Hex Cleansed', description: 'A hex totem is cleansed. Each occasion counts (in the case of multiple active totems).', cost: -3 },
    { id: 'LOST_GRASP', name: 'Lost Grasp (Save/Wiggle)', description: 'A survivor escapes your grasp either by a wiggle or another survivor saves them.', cost: -5 },
] as const;
export const BLOOD_MONEY_BONUSES: EconomyItem[] = [
    { id: 'HOOK_ACTION', name: 'Hook Action', description: 'Each hook you get.', cost: 1 },
    { id: '1K', name: '1K', description: 'First sacrifice.', cost: 1 },
    { id: '2K', name: '2K', description: 'Second sacrifice.', cost: 2 },
    { id: '3K', name: '3K', description: 'Third sacrifice.', cost: 4 },
    { id: '4K', name: '4K', description: 'Fourth sacrifice.', cost: 5 },
    { id: '4K4G', name: '4K With 4G', description: 'Fourth sacrifice with 4 Generators Left.', cost: 2 },
    { id: '4K5G', name: '4K With 5G', description: 'Fourth sacrifice with 5 Generators Left.', cost: 5 },
    { id: 'HATCH', name: 'Hatch', description: 'Close the hatch.', cost: 1 },
    { id: 'GRAB', name: 'Grab', description: 'Pulling a survivor off a generator, totem, or vault.', cost: 2 },
    { id: 'FRESH_HOOK', name: 'Fresh Hook', description: 'Earn when you hook a survivor you haven\'t hooked before.', cost: 2 },
    { id: 'HEX', name: 'Hex Defense', description: 'The match ends and you still have a totem standing.', cost: 2 },
    { id: 'QUICK_MATCH', name: 'Quick Match', description: 'Get a 4K under 3 minutes.', cost: 2 },
] as const;

export const KILLER_ROSTER: Character[] = [
    // Base Game
    {id: 'TRAPPER', name: 'The Trapper', role: 'KILLER', dlc: 'Base Game', cost: 4},
    {id: 'WRAITH', name: 'The Wraith', role: 'KILLER', dlc: 'Base Game', cost: 8},
    {id: 'HILLBILLY', name: 'The Hillbilly', role: 'KILLER', dlc: 'Base Game', cost: 16},
    {id: 'NURSE', name: 'The Nurse', role: 'KILLER', dlc: 'Base Game', cost: 20},
    {id: 'HUNTRESS', name: 'The Huntress', role: 'KILLER', dlc: 'Base Game', cost: 10},

    // Original DLC
    {id: 'HAG', name: 'The Hag', role: 'KILLER', dlc: 'Original', cost: 8},
    {id: 'DOCTOR', name: 'The Doctor', role: 'KILLER', dlc: 'Original', cost: 8},
    {id: 'CLOWN', name: 'The Clown', role: 'KILLER', dlc: 'Original', cost: 6},
    {id: 'SPIRIT', name: 'The Spirit', role: 'KILLER', dlc: 'Original', cost: 14},
    {id: 'LEGION', name: 'The Legion', role: 'KILLER', dlc: 'Original', cost: 6},
    {id: 'PLAGUE', name: 'The Plague', role: 'KILLER', dlc: 'Original', cost: 10},
    {id: 'ONI', name: 'The Oni', role: 'KILLER', dlc: 'Original', cost: 10},
    {id: 'DEATHSLINGER', name: 'The Deathslinger', role: 'KILLER', dlc: 'Original', cost: 8},
    {id: 'BLIGHT', name: 'The Blight', role: 'KILLER', dlc: 'Original', cost: 20},
    {id: 'TWINS', name: 'The Twins', role: 'KILLER', dlc: 'Original', cost: 14},
    {id: 'TRICKSTER', name: 'The Trickster', role: 'KILLER', dlc: 'Original', cost: 6},
    {id: 'ARTIST', name: 'The Artist', role: 'KILLER', dlc: 'Original', cost: 10},
    {id: 'DREDGE', name: 'The Dredge', role: 'KILLER', dlc: 'Original', cost: 8},
    {id: 'KNIGHT', name: 'The Knight', role: 'KILLER', dlc: 'Original', cost: 8},
    {id: 'SKULL_MERCHANT', name: 'The Skull Merchant', role: 'KILLER', dlc: 'Original', cost: 4},
    {id: 'SINGULARITY', name: 'The Singularity', role: 'KILLER', dlc: 'Original', cost: 14},
    {id: 'UNKNOWN', name: 'The Unknown', role: 'KILLER', dlc: 'Original', cost: 8},
    {id: 'HOUNDMASTER', name: 'The Houndmaster', role: 'KILLER', dlc: 'Original', cost: 10},
    {id: 'KRASUE', name: 'The Krasue', role: 'KILLER', dlc: 'Original', cost: 14},

    // Franchise DLC
    {id: 'CANNIBAL', name: 'The Cannibal', role: 'KILLER', dlc: 'Franchise', cost: 6},
    {id: 'SHAPE', name: 'The Shape', role: 'KILLER', dlc: 'Franchise', cost: 6},
    {id: 'NIGHTMARE', name: 'The Nightmare', role: 'KILLER', dlc: 'Franchise', cost: 10},
    {id: 'PIG', name: 'The Pig', role: 'KILLER', dlc: 'Franchise', cost: 6},
    {id: 'GHOST_FACE', name: 'The Ghost Face', role: 'KILLER', dlc: 'Franchise', cost: 6},
    {id: 'DEMOGORGON', name: 'The Demogorgon', role: 'KILLER', dlc: 'Franchise', cost: 6},
    {id: 'EXECUTIONER', name: 'The Executioner', role: 'KILLER', dlc: 'Franchise', cost: 8},
    {id: 'NEMESIS', name: 'The Nemesis', role: 'KILLER', dlc: 'Franchise', cost: 8},
    {id: 'CENOBITE', name: 'The Cenobite', role: 'KILLER', dlc: 'Franchise', cost: 8},
    {id: 'ONRYO', name: 'The Onryō', role: 'KILLER', dlc: 'Franchise', cost: 6},
    {id: 'MASTERMIND', name: 'The Mastermind', role: 'KILLER', dlc: 'Franchise', cost: 10},
    {id: 'XENOMORPH', name: 'The Xenomorph', role: 'KILLER', dlc: 'Franchise', cost: 8},
    {id: 'GOOD_GUY', name: 'The Good Guy', role: 'KILLER', dlc: 'Franchise', cost: 8},
    {id: 'LICH', name: 'The Lich', role: 'KILLER', dlc: 'Franchise', cost: 8},
    {id: 'DARK_LORD', name: 'The Dark Lord', role: 'KILLER', dlc: 'Franchise', cost: 14},
    {id: 'GHOUL', name: 'The Ghoul', role: 'KILLER', dlc: 'Franchise', cost: 16},
    {id: 'ANIMATRONIC', name: 'The Animatronic', role: 'KILLER', dlc: 'Franchise', cost: 8},
    {id: 'FIRST', name: 'The First', role: 'KILLER', dlc: 'Franchise', cost: 8},
];
export const KILLER_PERKS: Perk[] = [
    // TRAPPER
    {id: 'UNNERVING_PRESENCE', name: 'Unnerving Presence', ownerId: 'TRAPPER', cost: 1},
    {id: 'BRUTAL_STRENGTH', name: 'Brutal Strength', ownerId: 'TRAPPER', cost: 2},
    {id: 'AGITATION', name: 'Agitation', ownerId: 'TRAPPER', cost: 2},

    // WRAITH
    {id: 'PREDATOR', name: 'Predator', ownerId: 'WRAITH', cost: 2},
    {id: 'BLOODHOUND', name: 'Bloodhound', ownerId: 'WRAITH', cost: 0},
    {id: 'SHADOWBORN', name: 'Shadowborn', ownerId: 'WRAITH', cost: 0},

    // HILLBILLY
    {id: 'ENDURING', name: 'Enduring', ownerId: 'HILLBILLY', cost: 2},
    {id: 'LIGHTBORN', name: 'Lightborn', ownerId: 'HILLBILLY', cost: 1},
    {id: 'TINKERER', name: 'Tinkerer', ownerId: 'HILLBILLY', cost: 3},

    // NURSE
    {id: 'A_NURSES_CALLING', name: 'A Nurse\'s Calling', ownerId: 'NURSE', cost: 2},
    {id: 'STRIDOR', name: 'Stridor', ownerId: 'NURSE', cost: 1},
    {id: 'THANATOPHOBIA', name: 'Thanatophobia', ownerId: 'NURSE', cost: 2},

    // HUNTRESS
    {id: 'BEAST_OF_PREY', name: 'Beast of Prey', ownerId: 'HUNTRESS', cost: 1},
    {id: 'HUNTRESS_LULLABY', name: 'Hex: Huntress Lullaby', ownerId: 'HUNTRESS', cost: 2},
    {id: 'TERRITORIAL_IMPERATIVE', name: 'Territorial Imperative', ownerId: 'HUNTRESS', cost: 1},

    // HAG
    {id: 'DEVOUR_HOPE', name: 'Hex: Devour Hope', ownerId: 'HAG', cost: 3},
    {id: 'RUIN', name: 'Hex: Ruin', ownerId: 'HAG', cost: 4},
    {id: 'THE_THIRD_SEAL', name: 'Hex: The Third Seal', ownerId: 'HAG', cost: 1},

    // DOCTOR
    {id: 'OVERCHARGE', name: 'Overcharge', ownerId: 'DOCTOR', cost: 2},
    {id: 'MONITOR_ABUSE', name: 'Monitor & Abuse', ownerId: 'DOCTOR', cost: 1},
    {id: 'OVERWHELMING_PRESENCE', name: 'Overwhelming Presence', ownerId: 'DOCTOR', cost: 2},

    // CLOWN
    {id: 'BAMBOOZLE', name: 'Bamboozle', ownerId: 'CLOWN', cost: 3},
    {id: 'COULROPHOBIA', name: 'Coulrophobia', ownerId: 'CLOWN', cost: 1},
    {id: 'POP_GOES_THE_WEASEL', name: 'Pop Goes the Weasel', ownerId: 'CLOWN', cost: 5},

    // SPIRIT
    {id: 'HAUNTED_GROUND', name: 'Hex: Haunted Ground', ownerId: 'SPIRIT', cost: 2},
    {id: 'RANCOR', name: 'Rancor', ownerId: 'SPIRIT', cost: 2},
    {id: 'SPIRIT_FURY', name: 'Spirit Fury', ownerId: 'SPIRIT', cost: 2},

    // LEGION
    {id: 'DISCORDANCE', name: 'Discordance', ownerId: 'LEGION', cost: 3},
    {id: 'IRON_MAIDEN', name: 'Iron Maiden', ownerId: 'LEGION', cost: 1},
    {id: 'MAD_GRIT', name: 'Mad Grit', ownerId: 'LEGION', cost: 1},

    // PLAGUE
    {id: 'CORRUPT_INTERVENTION', name: 'Corrupt Intervention', ownerId: 'PLAGUE', cost: 5},
    {id: 'DARK_DEVOTION', name: 'Dark Devotion', ownerId: 'PLAGUE', cost: 1},
    {id: 'INFECTIOUS_FRIGHT', name: 'Infectious Fright', ownerId: 'PLAGUE', cost: 2},

    // ONI
    {id: 'BLOOD_ECHO', name: 'Blood Echo', ownerId: 'ONI', cost: 1},
    {id: 'NEMESIS', name: 'Nemesis', ownerId: 'ONI', cost: 1},
    {id: 'ZANSHIN_TACTICS', name: 'Zanshin Tactics', ownerId: 'ONI', cost: 2},

    // DEATHSLINGER
    {id: 'DEAD_MANS_SWITCH', name: 'Dead Man\'s Switch', ownerId: 'DEATHSLINGER', cost: 3},
    {id: 'GEARHEAD', name: 'Gearhead', ownerId: 'DEATHSLINGER', cost: 2},
    {id: 'RETRIBUTION', name: 'Hex: Retribution', ownerId: 'DEATHSLINGER', cost: 2},

    // BLIGHT
    {id: 'DRAGONS_GRIP', name: 'Dragon\'s Grip', ownerId: 'BLIGHT', cost: 2},
    {id: 'BLOOD_FAVOR', name: 'Hex: Blood Favor', ownerId: 'BLIGHT', cost: 3},
    {id: 'UNDYING', name: 'Hex: Undying', ownerId: 'BLIGHT', cost: 2},

    // TWINS
    {id: 'HOARDER', name: 'Hoarder', ownerId: 'TWINS', cost: 0},
    {id: 'OPPRESSION', name: 'Oppression', ownerId: 'TWINS', cost: 3},
    {id: 'COUP_DE_GRACE', name: 'Coup de Grâce', ownerId: 'TWINS', cost: 3},

    // TRICKSTER
    {id: 'STARSTRUCK', name: 'Starstruck', ownerId: 'TRICKSTER', cost: 2},
    {id: 'CROWD_CONTROL', name: 'Hex: Crowd Control', ownerId: 'TRICKSTER', cost: 2},
    {id: 'NO_WAY_OUT', name: 'No Way Out', ownerId: 'TRICKSTER', cost: 3},

    // ARTIST
    {id: 'GRIM_EMBRACE', name: 'Grim Embrace', ownerId: 'ARTIST', cost: 4},
    {id: 'PAIN_RESONANCE', name: 'Scourge Hook: Pain Resonance', ownerId: 'ARTIST', cost: 5},
    {id: 'PENTIMENTO', name: 'Hex: Pentimento', ownerId: 'ARTIST', cost: 1},

    // DREDGE
    {id: 'DISSOLUTION', name: 'Dissolution', ownerId: 'DREDGE', cost: 3},
    {id: 'DARKNESS_REVEALED', name: 'Darkness Revealed', ownerId: 'DREDGE', cost: 1},
    {id: 'SEPTIC_TOUCH', name: 'Septic Touch', ownerId: 'DREDGE', cost: 0},

    // KNIGHT
    {id: 'NOWHERE_TO_HIDE', name: 'Nowhere to Hide', ownerId: 'KNIGHT', cost: 2},
    {id: 'FACE_THE_DARKNESS', name: 'Face the Darkness', ownerId: 'KNIGHT', cost: 2},
    {id: 'HUBRIS', name: 'Hubris', ownerId: 'KNIGHT', cost: 2},

    // SKULL_MERCHANT
    {id: 'GAME_AFOOT', name: 'Game Afoot', ownerId: 'SKULL_MERCHANT', cost: 1},
    {id: 'THWACK', name: 'THWACK!', ownerId: 'SKULL_MERCHANT', cost: 1},
    {id: 'LEVERAGE', name: 'Leverage', ownerId: 'SKULL_MERCHANT', cost: 2},

    // SINGULARITY
    {id: 'GENETIC_LIMITS', name: 'Genetic Limits', ownerId: 'SINGULARITY', cost: 2},
    {id: 'FORCED_HESITATION', name: 'Forced Hesitation', ownerId: 'SINGULARITY', cost: 2},
    {id: 'MACHINE_LEARNING', name: 'Machine Learning', ownerId: 'SINGULARITY', cost: 2},

    // UNKNOWN
    {id: 'UNBOUND', name: 'Unbound', ownerId: 'UNKNOWN', cost: 2},
    {id: 'UNFORESEEN', name: 'Unforeseen', ownerId: 'UNKNOWN', cost: 2},
    {id: 'UNDONE', name: 'Undone', ownerId: 'UNKNOWN', cost: 0},

    // HOUNDMASTER
    {id: 'ALL_SHAKING_THUNDER', name: 'All-Shaking Thunder', ownerId: 'HOUNDMASTER', cost: 2},
    {id: 'JAGGED_COMPASS', name: 'Scourge Hook: Jagged Compass', ownerId: 'HOUNDMASTER', cost: 3},
    {id: 'NO_QUARTER', name: 'No Quarter', ownerId: 'HOUNDMASTER', cost: 1},

    // KRASUE
    {id: 'RAVENOUS', name: 'Ravenous', ownerId: 'KRASUE', cost: 2},
    {id: 'WANDERING_EYE', name: 'Wandering Eye', ownerId: 'KRASUE', cost: 1},
    {id: 'OVERTURE_OF_DOOM', name: 'Hex: Overture of Doom', ownerId: 'KRASUE', cost: 1},

    // CANNIBAL
    {id: 'BARBECUE_CHILI', name: 'Barbecue & Chili', ownerId: 'CANNIBAL', cost: 3},
    {id: 'FRANKLINS_DEMISE', name: 'Franklin\'s Demise', ownerId: 'CANNIBAL', cost: 1},
    {id: 'KNOCK_OUT', name: 'Knock Out', ownerId: 'CANNIBAL', cost: 1},

    // SHAPE
    {id: 'DYING_LIGHT', name: 'Dying Light', ownerId: 'SHAPE', cost: 1},
    {id: 'PLAY_WITH_YOUR_FOOD', name: 'Play With Your Food', ownerId: 'SHAPE', cost: 2},
    {id: 'SAVE_THE_BEST_FOR_LAST', name: 'Save the Best for Last', ownerId: 'SHAPE', cost: 2},

    // NIGHTMARE
    {id: 'BLOOD_WARDEN', name: 'Blood Warden', ownerId: 'NIGHTMARE', cost: 1},
    {id: 'FIRE_UP', name: 'Fire Up', ownerId: 'NIGHTMARE', cost: 2},
    {id: 'REMEMBER_ME', name: 'Remember Me', ownerId: 'NIGHTMARE', cost: 2},

    // PIG
    {id: 'HANGMANS_TRICK', name: 'Scourge Hook: Hangman\'s Trick', ownerId: 'PIG', cost: 0},
    {id: 'MAKE_YOUR_CHOICE', name: 'Make Your Choice', ownerId: 'PIG', cost: 2},
    {id: 'SURVEILLANCE', name: 'Surveillance', ownerId: 'PIG', cost: 1},

    // GHOST_FACE
    {id: 'FURTIVE_CHASE', name: 'Furtive Chase', ownerId: 'GHOST_FACE', cost: 2},
    {id: 'IM_ALL_EARS', name: 'I\'m All Ears', ownerId: 'GHOST_FACE', cost: 2},
    {id: 'THRILLING_TREMORS', name: 'Thrilling Tremors', ownerId: 'GHOST_FACE', cost: 2},

    // DEMOGORGON
    {id: 'CRUEL_LIMITS', name: 'Cruel Limits', ownerId: 'DEMOGORGON', cost: 1},
    {id: 'MINDBREAKER', name: 'Mindbreaker', ownerId: 'DEMOGORGON', cost: 2},
    {id: 'SURGE', name: 'Surge', ownerId: 'DEMOGORGON', cost: 3},

    // EXECUTIONER
    {id: 'DEATHBOUND', name: 'Deathbound', ownerId: 'EXECUTIONER', cost: 1},
    {id: 'FORCED_PENANCE', name: 'Forced Penance', ownerId: 'EXECUTIONER', cost: 1},
    {id: 'TRAIL_OF_TORMENT', name: 'Trail of Torment', ownerId: 'EXECUTIONER', cost: 2},

    // NEMESIS
    {id: 'LETHAL_PURSUER', name: 'Lethal Pursuer', ownerId: 'NEMESIS', cost: 3},
    {id: 'HYSTERIA', name: 'Hysteria', ownerId: 'NEMESIS', cost: 1},
    {id: 'ERUPTION', name: 'Eruption', ownerId: 'NEMESIS', cost: 4},

    // CENOBITE
    {id: 'DEADLOCK', name: 'Deadlock', ownerId: 'CENOBITE', cost: 3},
    {id: 'PLAYTHING', name: 'Hex: Plaything', ownerId: 'CENOBITE', cost: 2},
    {id: 'GIFT_OF_PAIN', name: 'Scourge Hook: Gift of Pain', ownerId: 'CENOBITE', cost: 3},

    // ONRYO
    {id: 'FLOODS_OF_RAGE', name: 'Scourge Hook: Floods of Rage', ownerId: 'ONRYO', cost: 2},
    {id: 'CALL_OF_BRINE', name: 'Call of Brine', ownerId: 'ONRYO', cost: 3},
    {id: 'MERCILESS_STORM', name: 'Merciless Storm', ownerId: 'ONRYO', cost: 2},

    // MASTERMIND
    {id: 'SUPERIOR_ANATOMY', name: 'Superior Anatomy', ownerId: 'MASTERMIND', cost: 2},
    {id: 'AWAKENED_AWARENESS', name: 'Awakened Awareness', ownerId: 'MASTERMIND', cost: 1},
    {id: 'TERMINUS', name: 'Terminus', ownerId: 'MASTERMIND', cost: 1},

    // XENOMORPH
    {id: 'ULTIMATE_WEAPON', name: 'Ultimate Weapon', ownerId: 'XENOMORPH', cost: 1},
    {id: 'RAPID_BRUTALITY', name: 'Rapid Brutality', ownerId: 'XENOMORPH', cost: 3},
    {id: 'ALIEN_INSTINCT', name: 'Alien Instinct', ownerId: 'XENOMORPH', cost: 1},

    // GOOD_GUY
    {id: 'TWO_CAN_PLAY', name: 'Hex: Two Can Play', ownerId: 'GOOD_GUY', cost: 1},
    {id: 'FRIENDS_TIL_THE_END', name: 'Friends \'Til the End', ownerId: 'GOOD_GUY', cost: 3},
    {id: 'BATTERIES_INCLUDED', name: 'Batteries Included', ownerId: 'GOOD_GUY', cost: 2},

    // LICH
    {id: 'WEAVE_ATTUNEMENT', name: 'Weave Attunement', ownerId: 'LICH', cost: 2},
    {id: 'LANGUID_TOUCH', name: 'Languid Touch', ownerId: 'LICH', cost: 1},
    {id: 'DARK_ARROGANCE', name: 'Dark Arrogance', ownerId: 'LICH', cost: 1},

    // DARK_LORD
    {id: 'WRETCHED_FATE', name: 'Hex: Wretched Fate', ownerId: 'DARK_LORD', cost: 1},
    {id: 'HUMAN_GREED', name: 'Human Greed', ownerId: 'DARK_LORD', cost: 1},
    {id: 'DOMINANCE', name: 'Dominance', ownerId: 'DARK_LORD', cost: 1},

    // GHOUL
    {id: 'NOTHING_BUT_MISERY', name: 'Hex: Nothing But Misery', ownerId: 'GHOUL', cost: 2},
    {id: 'FOREVER_ENTWINED', name: 'Forever Entwined', ownerId: 'GHOUL', cost: 2},
    {id: 'NONE_ARE_FREE', name: 'None Are Free', ownerId: 'GHOUL', cost: 2},

    // ANIMATRONIC
    {id: 'HELP_WANTED', name: 'Help Wanted', ownerId: 'ANIMATRONIC', cost: 1},
    {id: 'PHANTOM_FEAR', name: 'Phantom Fear', ownerId: 'ANIMATRONIC', cost: 2},
    {id: 'HAYWIRE', name: 'Haywire', ownerId: 'ANIMATRONIC', cost: 2},

    // FIRST
    {id: 'TURN_BACK_THE_CLOCK', name: 'Turn Back The Clock', ownerId: 'FIRST', cost: 1},
    {id: 'SECRET_PROJECT', name: 'Secret Project', ownerId: 'FIRST', cost: 2},
    {id: 'HIVE_MIND', name: 'Hex: Hive Mind', ownerId: 'FIRST', cost: 1},

    // All other perks
    {id: 'BITTER_MURMUR', name: 'Bitter Murmur', cost: 1},
    {id: 'DEERSTALKER', name: 'Deerstalker', cost: 1},
    {id: 'DISTRESSING', name: 'Distressing', cost: 0},
    {id: 'NO_ONE_ESCAPES_DEATH', name: 'Hex: No One Escapes Death', cost: 3},
    {id: 'THRILL_OF_THE_HUNT', name: 'Hex: Thrill of the Hunt', cost: 2},
    {id: 'INSIDIOUS', name: 'Insidious', cost: 0},
    {id: 'IRON_GRASP', name: 'Iron Grasp', cost: 1},
    {id: 'MONSTROUS_SHRINE', name: 'Scourge Hook: Monstrous Shrine', cost: 1},
    {id: 'SHATTERED_HOPE', name: 'Shattered Hope', cost: 0},
    {id: 'SLOPPY_BUTCHER', name: 'Sloppy Butcher', cost: 3},
    {id: 'SPIES_FROM_THE_SHADOWS', name: 'Spies from the Shadows', cost: 2},
    {id: 'UNRELENTING', name: 'Unrelenting', cost: 1},
    {id: 'WHISPERS', name: 'Whispers', cost: 2},
];

export const SURVIVOR_ROSTER: Character[] = [
    // Base Game
];
export const SURVIVOR_PERKS: Perk[] = [

];

// -- HELPER FUNCTIONS --
// Finds the 3 perks for a character
export const getCharacterPerks = (characterId: string, perkList: Perk[]): Perk[] => {
    return perkList.filter(perk => perk.ownerId === characterId);
}

