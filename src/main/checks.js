const checks = [
    // The Forest
	{
		"areas": [
			{
				"area": "Grotto",
				"checks": [
					{
						"bits": "00000000000000000001000000000000",
						"location": "62",
						"check": "Storms Grotto Chest",
						"requirements": [
                            "can_play('song_of_storms')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000100000000000000000",
						"location": "62",
						"check": "Wolfos Grotto Chest",
						"requirements": [
                            "(is_adult() & (has_item('hammer') | can_use_explosives())) | (is_child() & can_use_explosives())"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000100000000000000000000",
						"location": "62",
						"check": "Generic Grotto Chest",
						"requirements": [
                            "(is_adult() & (has_item('hammer') | can_use_explosives())) | (is_child() & can_use_explosives())"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "62",
						"check": "Deku Theater Skull Mask",
						"requirements": [
                            "is_child()",
                            "has_item('skull_mask')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "62",
						"check": "Deku Theater Mask of Truth",
						"requirements": [
                            "is_child()",
                            "has_item('mask_of_truth')"
                        ],
						"type": "Event"
					}
				],
				"access_requirements": true
			},
			{
				"area": "Forest Temple",
				"checks": [
					{
						"bits": "00000000000000000000000000001000",
						"location": "3",
						"check": "First Room Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000001",
						"location": "3",
						"check": "Chest Behind Lobby",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "3",
						"check": "Outside Hookshot Chest",
						"requirements": [
                            "has_item('bow') | (can_play('song_of_time') & has_equipment('iron_boots'))"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000001000000000",
						"location": "3",
						"check": "Well Chest",
						"requirements": [
                            "can_play('song_of_time')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "3",
						"check": "Map Chest",
						"requirements": [
							"can_play('song_of_time')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "3",
						"check": "Floormaster Chest",
						"requirements": [
							"has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "3",
						"check": "Block Push Eye Switch Chest",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "3",
						"check": "Falling Ceiling Room Chest",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000100000000000",
						"location": "3",
						"check": "Basement Chest",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000001000000000000",
						"location": "3",
						"check": "Bow Chest",
						"requirements": [
                            "has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000010000000000000",
						"location": "3",
						"check": "Red Poe Chest",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000100000000000000",
						"location": "3",
						"check": "Boss Key Chest",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000001000000000000000",
						"location": "3",
						"check": "Blue Poe Chest",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "20",
						"check": "Beating Forest",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "20",
						"check": "Phantom Ganon Heart",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Item"
					},
					{
						"bits": "000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "3",
						"check": "Outdoor East",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "3",
						"check": "Outdoor West",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Skull"
					},
					{
						"bits": "000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "3",
						"check": "Lobby",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "3",
						"check": "Basement",
						"requirements": [
                            "has_item('bow')",
                            "has_strength(2)"
						],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult()",
                    "has_item('hookshot') | has_item('longshot')"
                ]
			},
			{
				"area": "Kokiri Forest",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "85",
						"check": "Sword Chest",
						"requirements": [
							"is_child()"
						],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
						"location": "85",
						"check": "Bean Patch",
						"requirements": [
							"is_child()",
							"has_item('beans')"
						],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000",
						"location": "85",
						"check": "Know It All House",
						"requirements": [
							"is_child()",
							"can_child_attack()"
						],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000",
						"location": "85",
						"check": "House of Twins",
						"requirements": [
							"is_adult()",
							"has_item('hookshot') | has_item('longshot')"
						],
						"type": "Skull"
					}
				],
				"access_requirements": true
			},
			{
				"area": "Sacred Forest Meadow",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "86",
						"check": "Sheik in Forest",
						"requirements": [
                            "is_adult()",
                            "can_play('sarias_song') | can_play('minuet_of_forest') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "86",
						"check": "Song from Saria",
						"requirements": [
                            "is_child()",
							"has_item('zeldas_letter')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "86",
						"check": "Sacred Forest Meadow",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": true
			},
			{
				"area": "Lost Woods",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "91",
						"check": "Skull Kid",
						"requirements": [
                            "is_child()",
                            "can_play('sarias_song')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "91",
						"check": "Ocarina Memory Game",
						"requirements": [
                            "is_child()",
                            "has_item('ocarina') | has_item('ocarina_of_time')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "91",
						"check": "Target in Woods",
						"requirements": [
                            "is_child()",
                            "has_item('slingshot')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "91",
						"check": "Gift From Saria",
						"requirements": [
                            "is_child()",
                            "is_open('forest')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "91",
						"check": "Bean Patch Near Bridge",
						"requirements": [
                            "is_child()",
                            "has_item('beans')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "91",
						"check": "Bean Patch Near Stage",
						"requirements": [
                            "is_child()",
                            "has_item('beans')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "91",
						"check": "Above Stage",
						"requirements": [
                            "is_adult()",
                            "has_item('beans')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": true
			},
			{
				"area": "Deku Tree",
				"checks": [
					{
						"bits": "00000000000000000000000000001000",
						"location": "0",
						"check": "Lobby Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "0",
						"check": "Slingshot Room Chest",
						"requirements": [
                            "has_equipment('deku_shield')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "0",
						"check": "Slingshot Room Side Chest",
						"requirements": [
                            "has_equipment('deku_shield')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "0",
						"check": "Compass Room Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "0",
						"check": "Compass Room Side Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "0",
						"check": "Basement Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "17",
						"check": "Beating Deku",
						"requirements": [
                            "has_item('deku_stick') | has_item('kokiri_sword')",
							"has_item('deku_nut') | has_item('slingshot')",
							"has_equipment('deku_shield')"
                        ],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "17",
						"check": "Queen Gohma Heart",
						"requirements": [
                            "has_item('deku_stick') | has_item('kokiri_sword')",
							"has_item('deku_nut') | has_item('slingshot')",
							"has_equipment('deku_shield')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "0",
						"check": "Basement Back Room",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "0",
						"check": "Basement Gate",
						"requirements": [
                            "has_item('deku_stick') | has_item('kokiri_sword')",
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "0",
						"check": "Basement Vines",
						"requirements": [
                            "has_item('deku_stick') | has_item('slingshot') | has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "0",
						"check": "Compass Room",
						"requirements": [
                            "has_item('deku_stick')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_child()",
                    "is_open('deku_tree')"
                ]
			},
			{
				"area": "Mido's House",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "40",
						"check": "Top Left",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "40",
						"check": "Top Right",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "40",
						"check": "Bottom Left",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "40",
						"check": "Bottom Right",
						"requirements": true,
						"type": "Chest"
					}
				],
				"access_requirements": true
			},
			{
				"area": "Link's House",
				"checks": [
					{
						"bits": "00000001000000000000000000000000",
						"location": "52",
						"check": "Links House Cow",
						"requirements": [
							"can_play('eponas_song')"
						],
						"type": "Item"
					}
				],
				"access_requirements": true
			}
		],
        "backgroundColour": "#009933",
        "colour": "black",
		"region": "The Forest"
    },
    // Hyrule field
	{
		"areas": [
			{
				"area": "Grotto",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "62",
						"check": "West Castle Town Grotto Chest",
						"requirements": [
                            "can_use_explosives() | (is_adult() & has_item('hammer'))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "62",
						"check": "Southern Grotto Chest",
						"requirements": [
                            "can_use_explosives() | (is_adult() & has_item('hammer'))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "62",
						"check": "Near Lake Outside Fence Grotto Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "62",
						"check": "Tektite Grotto Freestanding PoH",
						"requirements": [
                            "can_use_explosives() | (is_adult() & has_item('hammer'))",
                            "has_equipment('iron_boots') | has_scale(2)"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000010000000000000000000000000",
						"location": "62",
						"check": "HF Grotto Cow",
						"requirements": [
                            "can_play('eponas_song')",
                            "can_use_fire()"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "62",
						"check": "Valley Grotto",
						"requirements": [
                            "can_use_fire()",
                            "has_item('hookshot') | has_item('longshot') | has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "62",
						"check": "Field Near Kakariko Grotto",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot') | has_item('boomerang')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Lon Lon Ranch",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "99",
						"check": "Song from Malon",
						"requirements": [
                            "is_child()",
                            "has_item('zeldas_letter')",
                            "has_item('ocarina') | has_item('ocarina_of_time')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "76",
						"check": "Talon's Cuccos",
						"requirements": [
                            "is_child()",
                            "has_item('zeldas_letter')",
						],
						"type": "Event"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "76",
						"check": "Lon Lon Tower Freestanding PoH",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000001000000000000000000000000",
						"location": "76",
						"check": "LLR Tower Right Cow",
						"requirements": [
                            "can_play('eponas_song')"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000010000000000000000000000000",
						"location": "76",
						"check": "LLR Tower Left Cow",
						"requirements": [
                            "can_play('eponas_song')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "99",
						"check": "Back Wall",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "99",
						"check": "Rain Shed",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "99",
						"check": "House Window",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "99",
						"check": "Tree",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Stable",
				"checks": [
					{
						"bits": "00000001000000000000000000000000",
						"location": "54",
						"check": "Left Cow",
						"requirements": [
                            "can_play('eponas_song')"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000010000000000000000000000000",
						"location": "54",
						"check": "Right Cow",
						"requirements": [
                            "can_play('eponas_song')"
                        ],
						"type": "Item"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			}
		],
        "backgroundColour": "#c7c7c7",
        "colour": "black",
		"region": "Hyrule Field"
    },
    // Kakariko
	{
		"areas": [
			{
				"area": "Grotto",
				"checks": [
					{
						"bits": "00000000000000000000000100000000",
						"location": "62",
						"check": "Back Grotto Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "62",
						"check": "Redead Grotto Chest",
						"requirements": [
                            "can_use_explosives() | (is_adult() & has_item('hammer'))"
                        ],
						"type": "Chest"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Shadow Temple",
				"checks": [
					{
						"bits": "00000000000000000000000000000010",
						"location": "7",
						"check": "Map Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "7",
						"check": "Hover Boots Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "7",
						"check": "Early Silver Rupee Chest",
						"requirements": [
                            "has_equipment('hover_boots')",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "7",
						"check": "Compass Chest",
						"requirements": [
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000001000000000000",
						"location": "7",
						"check": "Invisible Blades Visible Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot') | has_item('bow')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000010000000000000000000000",
						"location": "7",
						"check": "Invisible Blades Invisible Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot') | has_item('bow')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "7",
						"check": "Falling Spikes Switch Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "7",
						"check": "Falling Spikes Lower Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "7",
						"check": "Falling Spikes Upper Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000001000000000",
						"location": "7",
						"check": "Invisible Spikes Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "7",
						"check": "Freestanding Key",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000000001000000000000000000000",
						"location": "7",
						"check": "Wind Hint Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000100000000",
						"location": "7",
						"check": "After Wind Enemy Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000100000000000000000000",
						"location": "7",
						"check": "After Wind Hidden Chest",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000010000000000000",
						"location": "7",
						"check": "Hidden Floormaster Chest",
						"requirements": [
                            "can_use_explosives()",
                            "can_play('zeldas_lullaby')",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_strength(1) | has_item(hookshot)",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "7",
						"check": "Spike Walls Left Chest",
						"requirements": [
                            "can_use_explosives()",
                            "can_use_fire()",
                            "can_play('zeldas_lullaby')",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_strength(1) | has_item(hookshot)",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000100000000000",
						"location": "7",
						"check": "Boss Key Chest",
						"requirements": [
                            "can_use_explosives()",
                            "can_use_fire()",
                            "can_play('zeldas_lullaby')",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_strength(1) | has_item(hookshot)",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "24",
						"check": "Bongo Bongo Heart",
						"requirements": [
                            "can_use_explosives()",
                            "has_item('hookshot') | has_item('longshot')",
                            "has_equipment('hover_boots')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "7",
						"check": "Single Giant Pot",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "7",
						"check": "Falling Spikes Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "7",
						"check": "Triple Giant Pot",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "7",
						"check": "Invisible Blades Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "7",
						"check": "Near Ship",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult()",
                    "has_item('dins_fire')",
                    "has_magic()",
                    "has_item('hookshot') | has_item('longshot') | has_equipment('hover_boots')"
                ]
			},
			{
				"area": "Grave (Redead)",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "63",
						"check": "Heart Piece Grave Chest",
						"requirements": [
                            "can_play('suns_song')"
                        ],
						"type": "Chest"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Bottom of the Well",
				"checks": [
					{
						"bits": "00000000000000000000000000000100",
						"location": "8",
						"check": "Front Center Bombable",
						"requirements": [
                            "can_use_explosives()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000100000000",
						"location": "8",
						"check": "Front Left Hidden Wall",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "8",
						"check": "Right Bottom Hidden Wall",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "8",
						"check": "Center Large Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000100000000000000",
						"location": "8",
						"check": "Center Small Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "8",
						"check": "Back Left Bombable",
						"requirements": [
                            "can_use_explosives()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "8",
						"check": "Basement Chest",
						"requirements": [
                            "can_use_explosives() | has_strength(1)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000001000000000",
						"location": "8",
						"check": "Underwater Left Chest",
						"requirements": [
                            "can_play('zeldas_lullaby')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "8",
						"check": "Locked Pits",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000001000000000000",
						"location": "8",
						"check": "Behind Right Grate",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000010000000000000000",
						"location": "8",
						"check": "Underwater Front Chest",
						"requirements": [
                            "can_play('zeldas_lullaby')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "8",
						"check": "Freestanding Key",
						"requirements": [
                            "has_scale(1) | can_play('zeldas_lullaby')",
                            "has_item('boomerang') | has_item('deku_stick')"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000000000100000000000000000000",
						"location": "8",
						"check": "Invisible Chest",
						"requirements": [
                            "can_play('zeldas_lullaby')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "8",
						"check": "Defeat Boss",
						"requirements": [
                            "has_item('kokiri_sword') | has_item('deku_stick')",
                            "can_play('zeldas_lullaby')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "8",
						"check": "Like Like Cage",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "8",
						"check": "East Inner Room",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "8",
						"check": "West Inner Room",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "can_play('song_of_storms')",
                    "is_child()"
                ]
			},
			{
				"area": "Impa's House",
				"checks": [
					{
						"bits": "00000000000000000000000000000010",
						"location": "55",
						"check": "Freestanding PoH",
						"requirements": true,
						"type": "Item"
					},
					{
						"bits": "00000001000000000000000000000000",
						"location": "55",
						"check": "Cow",
						"requirements": [
							"can_play('eponas_song')"
						],
						"type": "Item"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Dampe's Grave",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "72",
						"check": "Dampe Race Hookshot Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "72",
						"check": "Dampe Race Freestanding PoH",
						"requirements": true,
						"type": "Item"
					}
				],
				"access_requirements": [
                    "is_adult()"
                ]
			},
			{
				"area": "Royal Family's Tomb",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "65",
						"check": "Composer Grave Chest",
						"requirements": [
                            "can_use_fire()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "65",
						"check": "Song from Composer Grave",
						"requirements": [
                            "is_adult() | (is_child() & can_child_attack())"
                        ],
						"type": "Event"
					}
				],
				"access_requirements": [
                    "can_play('zeldas_lullaby')"
                ]
			},
			{
				"area": "Shooting Gallery",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "66",
						"check": "Adult Shooting Gallery",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_adult()",
                    "has_item('bow')"
                ]
			},
			{
				"area": "Kakariko",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "82",
						"check": "Anju as Adult",
						"requirements": [
                            "is_adult()"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "82",
						"check": "Man on Roof",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "82",
						"check": "Anjus Cuccos Item",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "82",
						"check": "Sheik in Kakariko",
						"requirements": [
                            "is_adult()",
                            "has_medallion('forest')",
                            "has_medallion('fire')",
                            "has_medallion('water')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000",
						"location": "82",
						"check": "Guard's House",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000",
						"location": "82",
						"check": "Watchtower",
						"requirements": [
                            "is_child()",
                            "has_item('slingshot') | has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000",
						"location": "82",
						"check": "House Under Construction",
						"requirements": [
                            "is_child()",
                            "can_child_attack()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000",
						"location": "82",
						"check": "Skulltula House",
						"requirements": [
                            "is_child()",
                            "can_child_attack()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000",
						"location": "82",
						"check": "Tree",
						"requirements": [
                            "is_child()",
                            "can_child_attack()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000",
						"location": "82",
						"check": "Above Impa's House",
						"requirements": [
                            "(is_child() & can_child_attack()) | (is_adult() & (has_item('hookshot') | has_item('longshot')))"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Graveyard",
				"checks": [
					{
						"bits": "00000000000000000000000000010000",
						"location": "83",
						"check": "Freestanding PoH",
						"requirements": [
                            "is_adult()",
                            "has_item('beans')"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000000000000000000000100000000",
						"location": "83",
						"check": "Dampe Gravedigging Tour",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000000000000000000000000000001",
						"location": "63",
						"check": "Heart Piece Grave Chest",
						"requirements": [
                            "can_play('suns_song')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000",
						"location": "83",
						"check": "Graveyard Bean Patch",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000",
						"location": "83",
						"check": "Graveyard Wall",
						"requirements": [
                            "is_child()",
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
                    },
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "House of Skulltula",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "80",
						"check": "10 Gold Skulltula Reward",
						"requirements": [
                            "has_skulls(10)"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "80",
						"check": "20 Gold Skulltula Reward",
						"requirements": [
                            "has_skulls(20)"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "80",
						"check": "30 Gold Skulltula Reward",
						"requirements": [
                            "has_skulls(30)"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "80",
						"check": "40 Gold Skulltula Reward",
						"requirements": [
                            "has_skulls(40)"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "80",
						"check": "50 Gold Skulltula Reward",
						"requirements": [
                            "has_skulls(50)"
                        ],
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Windmill",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "72",
						"check": "Song at Windmill",
						"requirements": [
                            "has_item('ocarina') | has_item('ocarina_of_time')"
                        ],
						"type": "Event"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "72",
						"check": "Freestanding PoH",
						"requirements": true,
						"type": "Item"
					}
				],
				"access_requirements": [
                    "is_adult()"
                ]
			},
			{
				"area": "Grave (Shield)",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "64",
						"check": "Shield Grave Chest",
						"requirements": true,
						"type": "Chest"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			}
		],
        "backgroundColour": "#9933ff",
        "colour": "black",
		"region": "Kakariko"
    },
    // Hyrule Castle
	{
		"areas": [
			{
				"area": "Grotto",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "62",
						"check": "Storms Grotto",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_child() & can_leave_forest()",
                    "can_play('song_of_storms')"
                ]
			},
			{
				"area": "Treasure Chest Game",
				"checks": [
					// {
					// 	"bits": "00000000000000000000000000000011",
					// 	"location": "16",
					// 	"check": "Treasure Chest Game 1",
					// 	"requirements": true,
					// 	"type": "Chest"
					// },
					// {
					// 	"bits": "00000000000000000000000000001100",
					// 	"location": "16",
					// 	"check": "Treasure Chest Game 2",
					// 	"requirements": true,
					// 	"type": "Chest"
					// },
					// {
					// 	"bits": "00000000000000000000000000110000",
					// 	"location": "16",
					// 	"check": "Treasure Chest Game 3",
					// 	"requirements": true,
					// 	"type": "Chest"
					// },
					// {
					// 	"bits": "00000000000000000000000011000000",
					// 	"location": "16",
					// 	"check": "Treasure Chest Game 4",
					// 	"requirements": true,
					// 	"type": "Chest"
					// },
					// {
					// 	"bits": "00000000000000000000001100000000",
					// 	"location": "16",
					// 	"check": "Treasure Chest Game 5",
					// 	"requirements": true,
					// 	"type": "Chest"
					// },
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "16",
						"check": "Treasure Chest Game Final",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_child() & can_leave_forest()",
                    "has_item('lens_of_truth')"
                ]
			},
			{
				"area": "Fairy Fountain",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "61",
						"check": "Hyrule Castle Fairy Reward",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_child() & can_leave_forest()",
                    "can_use_explosives()",
                    "can_play('zeldas_lullaby')"
                ]
			},
			{
				"area": "Temple of Time",
				"checks": [
					{
						"bits": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000-1",
						"location": "67",
						"check": "Master Sword Pedestal",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "67",
						"check": "Sheik At Temple",
						"requirements": [
                            "is_adult()",
                            "has_medallion('forest')"
                        ],
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Exterior",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "100",
						"check": "Outside Ganon's Castle",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult()"
                ]
			},
			{
				"area": "Ganon's Tower",
				"checks": [
					{
						"bits": "00000000000000000000100000000000",
						"location": "10",
						"check": "Ganons Tower Boss Key Chest",
						"requirements": true,
						"type": "Chest"
					}
				],
				"access_requirements": [
                    "is_open('ganons_castle')",
                    "is_adult()"
                ]
			},
			{
				"area": "Bomchu Bowling Alley",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "75",
						"check": "Bombchu Bowling Bomb Bag",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "75",
						"check": "Bombchu Bowling Piece of Heart",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_child()",
                    "can_use_explosives()",
                    "can_leave_forest()"
                ]
			},
			{
				"area": "Back Alley House",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000",
						"location": "53",
						"check": "Dog Lady",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_child()",
                    "can_leave_forest()"
                ]
			},
			{
				"area": "Shooting Gallery",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "66",
						"check": "Child Shooting Gallery",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_child()",
                    "can_leave_forest()"
                ]
			},
			{
				"area": "Castle Courtyard",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "74",
						"check": "Impa At Castle",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "74",
						"check": "Zeldas Letter",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_child()",
                    "can_leave_forest()",
                    "has_item('child_egg')"
                ]
			},
			{
				"area": "Ganon's Castle",
				"checks": [
					{
						"bits": "00000000000000000000000100000000",
						"location": "13",
						"check": "Shadow Trial First Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "13",
						"check": "Shadow Trial Second Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "13",
						"check": "Water Trial Right Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "13",
						"check": "Water Trial Left Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000001000000000",
						"location": "13",
						"check": "Forest Trial Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "13",
						"check": "Light Trial Second Right Chest",
						"requirements": [
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000100000000000",
						"location": "13",
						"check": "Light Trial Second Left Chest",
						"requirements": [
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000001000000000000",
						"location": "13",
						"check": "Light Trial First Left Chest",
						"requirements": [
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000010000000000000",
						"location": "13",
						"check": "Light Trial Third Left Chest",
						"requirements": [
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000100000000000000",
						"location": "13",
						"check": "Light Trial First Right Chest",
						"requirements": [
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000001000000000000000",
						"location": "13",
						"check": "Light Trial Third Right Chest",
						"requirements": [
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000010000000000000000",
						"location": "13",
						"check": "Light Trial Invisible Enemies Chest",
						"requirements": [
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000100000000000000000",
						"location": "13",
						"check": "Light Trial Lullaby Chest",
						"requirements": [
                            "can_play('zeldas_lullaby')",
                            "has_strength(3)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000001000000000000000000",
						"location": "13",
						"check": "Spirit Trial First Chest",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000100000000000000000000",
						"location": "13",
						"check": "Spirit Trial Second Chest",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')",
                            "has_item('bombchus')"
                        ],
						"type": "Chest"
					}
				],
				"access_requirements": [
                    "is_adult()",
                    "is_open('ganons_castle')"
                ]
			},
			{
				"area": "Guard House",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "77",
						"check": "Castle Town Guard House",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_child()",
                    "can_leave_forest()",
                    "can_child_attack()"
                ]
			},
			{
				"area": "Hyrule Castle",
				"checks": [
					{
						"bits": "000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "95",
						"check": "Malon Egg",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "95",
						"check": "Tree",
						"requirements": [
                            "can_child_attack()"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_child()",
                    "can_leave_forest()",
                ]
			}
		],
        "backgroundColour": "#999966",
        "colour": "black",
		"region": "Hyrule Castle"
	},
    // Death Mountain
	{
		"areas": [
			{
				"area": "Grotto",
				"checks": [
					{
						"bits": "00000000100000000000000000000000",
						"location": "62",
						"check": "Storms Grotto Chest",
						"requirements": [
                            "can_play('song_of_storms')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000100000000000000000000000000",
						"location": "62",
						"check": "Crater Grotto Chest",
						"requirements": [
                            "is_adult() & (has_item('hammer') | has_strength(2))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000001000000000000000000000000",
						"location": "62",
						"check": "DMT Grotto Cow",
						"requirements": [
                            "can_play('eponas_song') & (is_adult() | (is_child() & can_use_explosives()))"
                        ],
						"type": "Item"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Death Mountain Crater",
				"checks": [
					{
						"bits": "00000000000000000000000000000100",
						"location": "97",
						"check": "Wall Freestanding PoH",
						"requirements": true,
						"type": "Item"
					},
					{
						"bits": "00000000000000000000000100000000",
						"location": "97",
						"check": "Volcano Freestanding PoH",
						"requirements": [
                            "is_adult()",
                            "(has_item('beans') & (can_play('bolero_of_fire') | has_item('hookshot') | has_item('longshot'))) | has_item('hover_boots')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "97",
						"check": "Bean Patch",
						"requirements": [
                            "is_child()",
                            "can_play('bolero_of_fire')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "97",
						"check": "Crate",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest() & can_use_explosives())"
                ]
			},
			{
				"area": "Fire Temple",
				"checks": [
					{
						"bits": "00000000000000000000000000000010",
						"location": "4",
						"check": "Chest Near Boss",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "4",
						"check": "Big Lava Room Bombable Chest",
						"requirements": [
                            "can_use_explosives()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "4",
						"check": "Big Lava Room Open Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "4",
						"check": "Boulder Maze Lower Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000100000000",
						"location": "4",
						"check": "Boulder Maze Side Room",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "4",
						"check": "Boulder Maze Upper Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000100000000000",
						"location": "4",
						"check": "Boulder Maze Bombable Pit Chest",
						"requirements": [
                            "can_use_explosives()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000010000000000000",
						"location": "4",
						"check": "Scarecrow Chest",
						"requirements": [
                            "has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "4",
						"check": "Map Chest",
						"requirements": [
                            "has_item('bow')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "4",
						"check": "Megaton Hammer Chest",
						"requirements": [
                            "can_use_explosives()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000001000000000",
						"location": "4",
						"check": "Highest Goron Chest",
						"requirements": [
                            "has_item('hammer')",
                            "can_play('song_of_time')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000001",
						"location": "4",
						"check": "Fire Dancer Chest",
						"requirements": [
                            "has_item('hammer')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000001000000000000",
						"location": "4",
						"check": "Boss Key Chest",
						"requirements": [
                            "has_item('hammer')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "21",
						"check": "Beating Fire",
						"requirements": [
                            "has_item('hammer')"
                        ],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "21",
						"check": "Volvagia Heart",
						"requirements": [
                            "has_item('hammer')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "4",
						"check": "Song of Time Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "4",
						"check": "Basement",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "4",
						"check": "Boulder Maze Unmarked Bomb Wall",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "4",
						"check": "East Tower Top",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "4",
						"check": "East Tower Climb",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult()",
                    "can_play('bolero_of_fire') | has_item('hookshot') | has_item('longshot') | has_equipment('hover_boots')"
                ]
			},
			{
				"area": "Dodongo's Cavern",
				"checks": [
					{
						"bits": "00000000000000000000000100000000",
						"location": "1",
						"check": "Map Chest",
						"requirements": [
                            
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "1",
						"check": "Bomb Bag Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "1",
						"check": "Compass Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "1",
						"check": "Bomb Flower Platform",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "1",
						"check": "End of Bridge Chest",
						"requirements": [
                            "can_use_explosives() | (is_adult() & has_item('hammer'))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000001",
						"location": "18",
						"check": "Chest Above King Dodongo",
						"requirements": [
                            "can_use_explosives()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "18",
						"check": "Beating Dodongo's Cavern",
						"requirements": [
                            "can_use_explosives()",
                            "can_use_explosives() | has_strength(1)"
                        ],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "18",
						"check": "King Dodongo Heart",
						"requirements": [
                            "can_use_explosives()",
                            "can_use_explosives() | has_strength(1)"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "1",
						"check": "Vines Above Stairs",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "1",
						"check": "Scarecrow",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "1",
						"check": "Alcove Above Stairs",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "1",
						"check": "Back Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "1",
						"check": "East Side Room",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "(is_adult() & (has_item('hammer') | can_use_explosives() | has_strength(1))) | (is_child() & (can_use_explosives() | has_strength(1)))"
                ]
			},
			{
				"area": "Death Mountain Trail",
				"checks": [
					{
						"bits": "00000000000000000000000000000010",
						"location": "96",
						"check": "Bombable Chest",
						"requirements": [
                            "can_use_explosives() | (is_adult() & has_item('hammer'))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "97",
						"check": "Sheik in Crater",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot') | has_equipment('hover_boots') | can_play('bolero_of_fire')"
                        ],
						"type": "Event"
					},
					{
						"bits": "01000000000000000000000000000000",
						"location": "96",
						"check": "Freestanding PoH",
						"requirements": true,
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "96",
						"check": "Bean Patch",
						"requirements": [
                            "is_child()",
                            "has_item('bottle')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "96",
						"check": "Bomb Alcove",
						"requirements": [
                            "can_use_explosives() | (is_adult() & has_item('hammer'))"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "96",
						"check": "Above Dodongo's Cavern",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "96",
						"check": "Path to Crater",
						"requirements": [
                            "is_adult()",
                            "has_item('hammer') | has_strength(2)"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Goron City",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "98",
						"check": "Leftmost Maze Chest",
						"requirements": [
                            "is_adult()",
                            "has_item('hammer') | has_strength(2)"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "98",
						"check": "Maze Right Chest",
						"requirements": [
                            "can_use_explosives() | (is_adult() & (has_item('hammer') | has_strength(2)))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "98",
						"check": "Maze Left Chest",
						"requirements": [
                            "can_use_explosives() | (is_adult() & (has_item('hammer') | has_strength(2)))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "98",
						"check": "Link the Goron",
						"requirements": [
                            "is_adult()",
                            "can_use_explosives()"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "98",
						"check": "Rolling Goron As Child",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "98",
						"check": "Darunias Joy",
						"requirements": [
                            "is_child()",
                            "can_play('zeldas_lullaby')",
                            "can_play('sarias_song')"
                        ],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "98",
						"check": "Pot Freestanding PoH",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "98",
						"check": "Center Platform",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot') | has_item('bow')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "98",
						"check": "Boulder Maze",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			}
		],
        "backgroundColour": "#990000",
        "colour": "black",
		"region": "Death Mountain"
    },
    // Zora's Domain
	{
		"areas": [
			{
				"area": "Grotto",
				"checks": [
					{
						"bits": "00000000000000000000001000000000",
						"location": "62",
						"check": "Open Grotto Chest",
						"requirements": true,
						"type": "Chest"
					}
				],
				"access_requirements": [
                    "(is_child() & (has_scale(1) | can_use_explosives())) | is_adult()"
                ]
			},
			{
				"area": "Zora's River",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "84",
						"check": "Frog Ocarina Game",
						"requirements": [
                            "can_play('zeldas_lullaby')",
                            "can_play('sarias_song')",
                            "can_play('eponas_song')",
                            "can_play('suns_song')",
                            "can_play('song_of_time')",
                            "is_child() & (has_scale(1) | can_use_explosives())"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "84",
						"check": "Frog in the Rain",
						"requirements": [
                            "can_play('song_of_storms')",
                            "is_child() & (has_scale(1) | can_use_explosives())"
                        ],
						"type": "Event"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "84",
						"check": "Lower Freestanding PoH",
						"requirements": [
                            "(is_child() & (has_scale(1) | can_use_explosives())) | is_adult()"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000000000000000000100000000000",
						"location": "84",
						"check": "Upper Freestanding PoH",
						"requirements": [
                            "(is_child() & (has_scale(1) | can_use_explosives())) | is_adult()"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000",
						"location": "84",
						"check": "Ladder",
						"requirements": [
                            "is_child()",
                            "can_child_attack()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000",
						"location": "84",
						"check": "Tree",
						"requirements": [
                            "can_child_attack()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000",
						"location": "84",
						"check": "Above Bridge",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000",
						"location": "84",
						"check": "Near Raised Grottos",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Zora's Fountain",
				"checks": [
					{
						"bits": "00000000000000000000000000000010",
						"location": "89",
						"check": "Iceberg Freestanding PoH",
						"requirements": [
                            "is_adult()"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000000000100000000000000000000",
						"location": "89",
						"check": "Bottom Freestanding PoH",
						"requirements": [
                            "is_adult()",
                            "has_equipment('iron_boots')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000",
						"location": "89",
						"check": "Above the Log",
						"requirements": [
                            "is_child()",
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000",
						"location": "89",
						"check": "Hidden Cave",
						"requirements": [
                            "is_adult()",
                            "has_strength(2) | can_use_explosives() | has_item(hammer)"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000",
						"location": "89",
						"check": "Tree",
						"requirements": [
                            "is_child()",
                            "can_child_attack()"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_open('fountain')"
                ]
			},
			{
				"area": "Jabu Jabu's Belly",
				"checks": [
					{
						"bits": "00000000000000000000000000000010",
						"location": "2",
						"check": "Boomerang Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "2",
						"check": "Map Chest",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "2",
						"check": "Compass Chest",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "19",
						"check": "Beating Jabu",
						"requirements": [
                            "has_item('boomerang')",
                            "has_equipment('kokiri_sword') | has_item('deku_stick')"
                        ],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "19",
						"check": "Barinade Heart",
						"requirements": [
                            "has_item('boomerang')",
                            "has_equipment('kokiri_sword') | has_item('deku_stick')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "2",
						"check": "Basement Lower",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "2",
						"check": "Basement Upper",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "2",
						"check": "Vines Near Boss",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "2",
						"check": "Water Switch Room",
						"requirements": [
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_open('fountain')",
                    "has_item('bottle')"
                ]
			},
			{
				"area": "Ice Cavern",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "9",
						"check": "Map Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "9",
						"check": "Compass Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "9",
						"check": "Iron Boots Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "9",
						"check": "Sheik in Ice Cavern",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "9",
						"check": "Freestanding PoH",
						"requirements": true,
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "9",
						"check": "Push Block Room",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "9",
						"check": "Spinning Scythe Room",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "9",
						"check": "Heart Piece Room",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult()",
					"has_item('bottle')",
					"is_open('fountain')"
                ]
			},
			{
				"area": "Zora's Domain",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "88",
						"check": "Torch Run",
						"requirements": [
                            "is_child()",
                            "has_item('deku_stick')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "88",
						"check": "King Zora Thawed",
						"requirements": [
                            "is_adult()",
                            "has_item('bottle')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "88",
						"check": "King Zora Moves",
						"requirements": [
                            "!is_open('fountain')",
                            "has_item('rutos_letter')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "88",
						"check": "Diving Minigame",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000",
						"location": "88",
						"check": "Frozen Waterfall",
						"requirements": [
                            "is_adult()",
                            "has_item('longshot')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "can_play('zeldas_lullaby') | (has_scale(1) & is_child())"
                ]
			},
			{
				"area": "Fairy Fountain",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "61",
						"check": "Zoras Fountain Fairy",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())",
                    "can_use_explosives() & can_play('zeldas_lullaby')",
                    "is_open('fountain')",
                ]
			}
		],
        "backgroundColour": "#3e92e6",
        "colour": "black",
		"region": "Zora's Domain"
    },
    // Lake Hylia
	{
		"areas": [
			{
				"area": "Lake Hylia",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "87",
						"check": "Shoot the Sun",
						"requirements": [
                            "is_adult()",
                            "has_item('bow')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "87",
						"check": "Underwater Bottle",
						"requirements": [
                            "is_child()",
                            "has_scale(1)"
                        ],
						"type": "Event"
					},
					{
						"bits": "01000000000000000000000000000000",
						"location": "87",
						"check": "Freestanding PoH",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot') | has_item('beans')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000",
						"location": "87",
						"check": "Bean Patch",
						"requirements": [
                            "is_child()",
                            "has_item('beans')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000",
						"location": "87",
						"check": "Small Island",
						"requirements": [
                            "is_child()",
                            "can_child_attack()"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000",
						"location": "87",
						"check": "Lab",
						"requirements": [
                            "is_child()",
                            "has_item('boomerand')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000",
						"location": "87",
						"check": "Tree",
						"requirements": [
                            "is_adult()",
                            "has_item('longshot')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Water Temple",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "5",
						"check": "Cracked Wall Chest",
						"requirements": [
							"can_play('zeldas_lullably')",
							"can_use_explosives()",
							"has_equipment('iron_boots')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "5",
						"check": "Torches Chest",
						"requirements": [
							"has_item('bow') | can_use_fire()",
							"can_play('zeldas_lullably') | has_equipment('iron_boots')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "5",
						"check": "Map Chest",
						"requirements": [
							"has_item('hookshot') | has_item('longshot') | has_item('bow') | has_equipment('hover_boots')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "5",
						"check": "River Chest",
						"requirements": [
							"can_play('song_of_time')",
							"has_item('bow')",
							"has_item('hookshot') | has_item('longshot')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "5",
						"check": "Boss Key Chest",
						"requirements": [
							"has_equipment('iron_boots')",
							"(can_use_explosive() & has_strength(2)) | has_equipment('hover_boots')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "5",
						"check": "Central Pillar Chest",
						"requirements": [
							"has_item('hookshot') | has_item('longshot')",
							"has_equipment('iron_boots')",
							"has_equipment('zoras_tunic')",
							"has_item('bow') | can_use_fire()"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "5",
						"check": "Dark Link Chest",
						"requirements": [
							"has_item('hookshot') | has_item('longshot')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000100000000",
						"location": "5",
						"check": "Central Bow Target Chest",
						"requirements": [
							"has_strength(2)",
							"can_play('zeldas_lullaby')",
							"has_item('bow')",
							"has_item('longshot')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000001000000000",
						"location": "5",
						"check": "Compass Chest",
						"requirements": [
							"can_play('zeldas_lullaby') | has_equipment('iron_boots')",
							"has_item('hookshot') | has_item('longshot')"
						],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "5",
						"check": "Dragon Chest",
						"requirements": [
							"has_strength(2)",
							"can_play('zeldas_lullaby')",
							"has_equipment('iron_boots')",
							"has_item('hookshot') | has_item('longshot')"
						],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "5",
						"check": "South Basement",
						"requirements": [
							"can_use_explosives()",
							"can_play('zeldas_lullaby')",
							"has_equipment('iron_boots')",
							"has_item('hookshot') | has_item('longshot') | has_equipment('hover_boots')"
						],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "5",
						"check": "Falling Platforms Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "5",
						"check": "Central Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "5",
						"check": "Near Boss Key Chest",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "5",
						"check": "Serpent River",
						"requirements": [
                            
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "22",
						"check": "Beating Water",
						"requirements": [
                            "has_item('longshot')"
                        ],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "22",
						"check": "Morpha Heart",
						"requirements": [
                            "has_item('longshot')"
                        ],
						"type": "Item"
					},
				],
				"access_requirements": [
                    "is_adult()",
                    "(has_equipment('iron_boots') & (has_item('hookshot') | has_item('longshot'))) | (has_scale(2) & has_item('longshot'))"
                ]
			},
			{
				"area": "Lakeside Lab",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "56",
						"check": "Diving in the Lab",
						"requirements": [
                            "is_adult()",
                            "has_scale(2) | (has_equipment('iron_boots') & (has_item('hookshot') | has_item('longshot')))"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000",
						"location": "56",
						"check": "Lab Underwater Crate",
						"requirements": [
                            "is_adult()",
                            "has_equipment('iron_boots')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Fishing Hole",
				"checks": [
					{
						"bits": "00001000",
						"location": "73",
						"check": "Fishing (Adult)",
						"requirements": [
                            "is_adult()",
							"((has_item('hookshot') | has_item('longshot')) & (has_item('ocarina') | has_item('ocarina_of_time'))) | has_item('beans')"
                        ],
						"type": "Event"
					},
					{
						"bits": "00000100",
						"location": "73",
						"check": "Fishing (Child)",
						"requirements": [
							"is_child()",
							"can_leave_forest()"
                        ],
						"type": "Event"
					}
				],
				"access_requirements": [
					"is_adult() | (is_child() & can_leave_forest())"
				]
			}
		],
        "backgroundColour": "#0033cc",
        "colour": "black",
		"region": "Lake Hylia"
    },
    // The Desert
	{
		"areas": [
			{
				"area": "Fairy Fountain",
				"checks": [
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "61",
						"check": "Desert Colossus Fairy Reward",
						"requirements": true,
						"type": "Event"
					}
				],
				"access_requirements": [
                    "can_use_explosives()",
                    "(is_adult() & ((has_equipment('gerudo_card') & has_item('lens_of_truth')) | can_play('requiem_of_spirits'))) | (is_child() & can_play('requiem_of_spirits'))"
                ]
			},
			{
				"area": "Gerudo Fortress",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "93",
						"check": "Rooftop Chest",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "12",
						"check": "Carpenter North F1",
						"requirements": [
                            "!has_equipment('gerudo_card')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "12",
						"check": "South F1 Carpenter Freed",
						"requirements": [
                            "!has_equipment('gerudo_card')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "12",
						"check": "South F2 Carpenter Freed",
						"requirements": [
                            "!has_equipment('gerudo_card')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "12",
						"check": "North F2 Carpenter Freed",
						"requirements": [
                            "!has_equipment('gerudo_card')"
                        ],
						"type": "Event"
					},
					// {
					// 	"bits": "00000000000000000000000000000010",
					// 	"location": "11",
					// 	"check": "Freestanding Key",
					// 	"requirements": true,
					// 	"type": "Item"
					// },
					// {
					// 	"bits": "00000000000000000000010000000000",
					// 	"location": "12",
					// 	"check": "North F2 Carpenter",
					// 	"requirements": [
                    //         "!has_equipment('gerudo_card')"
                    //     ],
					// 	"type": "Item"
					// },
					// {
					// 	"bits": "00000000000000000001000000000000",
					// 	"location": "12",
					// 	"check": "North F1 Carpenter",
					// 	"requirements": [
                    //         "!has_equipment('gerudo_card')"
                    //     ],
					// 	"type": "Item"
					// },
					// {
					// 	"bits": "00000000000000000100000000000000",
					// 	"location": "12",
					// 	"check": "South F1 Carpenter",
					// 	"requirements": [
                    //         "!has_equipment('gerudo_card')"
                    //     ],
					// 	"type": "Item"
					// },
					// {
					// 	"bits": "00000000000000001000000000000000",
					// 	"location": "12",
					// 	"check": "South F2 Carpenter",
					// 	"requirements": [
                    //         "!has_equipment('gerudo_card')"
                    //     ],
					// 	"type": "Item"
					// },
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
						"location": "93",
						"check": "Horseback Archery 1000 Points",
						"requirements": [
                            "can_play('eponas_song')",
                            "has_item('bow')",
                            "has_equipment('gerudo_card')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "93",
						"check": "Horseback Archery 1500 Points",
						"requirements": [
                            "can_play('eponas_song')",
                            "has_item('bow')",
                            "has_equipment('gerudo_card')"
                        ],
						"type": "Event"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001",
						"location": "93",
						"check": "Archery Range",
						"requirements": [
                            "has_item('longshot')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010",
						"location": "93",
						"check": "Top Floor",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult()",
                    "has_item('longshot') | can_play('eponas_song')"
                ]
			},
			{
				"area": "Desert Colossus",
				"checks": [
					{
						"bits": "00000000000000000000001000000000",
						"location": "92",
						"check": "Mirror Shield Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000100000000000",
						"location": "92",
						"check": "Silver Gauntlets Chest",
						"requirements": [
                            "(is_adult() & has_strength(2) & has_item('longshot')) | (is_child() & can_use_explosives() & (has_item('slingshot') | has_item('boomerang')) & (has_item('deku_stick') | has_item('kokiri_sword')))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "92",
						"check": "Sheik at Colossus",
						"requirements": true,
						"type": "Event"
					},
					{
						"bits": "00000000000000000010000000000000",
						"location": "92",
						"check": "Freestanding PoH",
						"requirements": [
                            "is_adult()",
                            "has_item('beans')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000",
						"location": "92",
						"check": "Bean Patch",
						"requirements": [
                            "is_child()",
                            "has_item('beans')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000",
						"location": "92",
						"check": "Hill",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000",
						"location": "92",
						"check": "Tree",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "(is_adult() & ((has_equipment('gerudo_card') & has_item('lens_of_truth')) | can_play('requiem_of_spirits'))) | (is_child() & can_play('requiem_of_spirits'))"
                ]
			},
			{
				"area": "Gerudo Valley",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "90",
						"check": "Hammer Rocks Chest",
						"requirements": [
                            "is_adult() & (has_item('hammer') | has_strength(2))"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "90",
						"check": "Waterfall Freestanding PoH",
						"requirements": true,
						"type": "Item"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "90",
						"check": "Crate",
						"requirements": [
                            "is_child()"
                        ],
						"type": "Item"
					},
					{
						"bits": "00000001000000000000000000000000",
						"location": "90",
						"check": "Cow",
						"requirements": [
                            "can_play('eponas_song')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000",
						"location": "90",
						"check": "Bean Patch",
						"requirements": [
                            "is_child()",
                            "has_item('beans')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000",
						"location": "90",
						"check": "Small Bridge",
						"requirements": [
                            "is_child()",
                            "has_item('boomerang')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000",
						"location": "90",
						"check": "Pillar",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000",
						"location": "90",
						"check": "Behind Tent",
						"requirements": [
                            "is_adult()",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult() | (is_child() & can_leave_forest())"
                ]
			},
			{
				"area": "Spirit Temple",
				"checks": [
                    // Child
					{
						"bits": "00000000000000000000000100000000",
						"location": "6",
						"check": "Child Left Chest",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()",
                            "has_item('slingshot') | has_item('boomerang')",
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000001",
						"location": "6",
						"check": "Child Right Chest",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()",
                            "has_item('slingshot') | has_item('boomerang')",
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000001000000000000",
						"location": "6",
						"check": "Child Climb North Chest",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()",
                            "has_item('slingshot') | has_item('boomerang')",
                            "has_item('deku_stick') | has_item('kokiri_sword')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "6",
						"check": "Child Climb East Chest",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()",
                            "has_item('slingshot') | has_item('boomerang')",
                            "has_item('deku_stick') | has_item('kokiri_sword')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "6",
						"check": "Map Chest",
						"requirements": [
                            "is_child() & can_use_explosives() & (has_item('slingshot') | has_item('boomerang'))",
                            "can_use_fire()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "6",
						"check": "Sun Block Room Chest",
						"requirements": [
                            "is_child()",
                            "can_use_explosives()",
                            "has_item('slingshot') | has_item('boomerang')",
                            "has_item('deku_stick') | has_item('kokiri_sword')",
                            "has_item('deku_stick') | can_use_fire()"
                        ],
						"type": "Chest"
                    },
                    // Adult
					{
						"bits": "00000000000000000000000000010000",
						"location": "6",
						"check": "Compass Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')",
                            "has_item('hookshot') | has_item('longshot') | can_play('zeldas_lullaby')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "6",
						"check": "Early Adult Right Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000010000000000000",
						"location": "6",
						"check": "First Mirror Chests Left",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000100000000000000",
						"location": "6",
						"check": "First Mirror Chests Right",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "6",
						"check": "Statue Hand Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')",
                            "can_play('zeldas_lullaby')",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000001000000000000000",
						"location": "6",
						"check": "NE Main Room Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')",
                            "can_play('zeldas_lullaby')",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "6",
						"check": "Near Four Armos Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')",
                            "has_equipment('mirror_shield')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000100000000000000000000",
						"location": "6",
						"check": "Hallway Right Invisible Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000001000000000000000000000",
						"location": "6",
						"check": "Hallway Left Invisible Chest ",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "6",
						"check": "Boss Key Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')",
                            "can_play('zeldas_lullaby')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000001000000000000000000",
						"location": "6",
						"check": "Topmost Chest",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "68",
						"check": "Beating Spirit",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')",
                            "has_equipment('mirror_shield')",
                            "has_item('longshot')"
                        ],
						"type": "Event"
					},
					{
						"bits": "10000000000000000000000000000000",
						"location": "23",
						"check": "Twinrova Heart",
						"requirements": [
                            "is_adult()",
                            "has_strength(2)",
                            "has_item('bow') | has_item('hookshot') | has_item('longshot')",
                            "has_equipment('mirror_shield')",
                            "has_item('longshot')"
                        ],
						"type": "Item"
					},
					{
						"bits": "000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "6",
						"check": "Hall to Child Iron Knuckle",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "6",
						"check": "Boulder Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "6",
						"check": "Lobby",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "6",
						"check": "Bomb for Light Room",
						"requirements": true,
						"type": "Skull"
					},
					{
						"bits": "000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
						"location": "6",
						"check": "Metal Fence",
						"requirements": true,
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "(is_adult() & ((has_equipment('gerudo_card') & has_item('lens_of_truth')) | can_play('requiem_of_spirits'))) | (is_child() & can_play('requiem_of_spirits'))"
                ]
			},
			{
				"area": "Haunted Wasteland",
				"checks": [
					{
						"bits": "00000000000000000000000000000001",
						"location": "94",
						"check": "Structure Chest",
						"requirements": [
                            "is_adult()",
                            "can_use_fire()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000",
						"location": "94",
						"check": "Wasteland Ruins",
						"requirements": [
                            "is_adult()",
                            "has_equipment('gerudo_card')",
                            "has_item('lens_of_truth')"
                        ],
						"type": "Skull"
					}
				],
				"access_requirements": [
                    "is_adult()",
                    "has_equipment('gerudo_card')",
                    "has_item('lens_of_truth')"
                ]
			},
			{
				"area": "Gerudo Training Ground",
				"checks": [
					{
						"bits": "00000000000010000000000000000000",
						"location": "11",
						"check": "Lobby Left Chest",
						"requirements": [
                            "has_item('bow')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000010000000",
						"location": "11",
						"check": "Lobby Right Chest",
						"requirements": [
                            "has_item('bow')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000001",
						"location": "11",
						"check": "Stalfos Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000010",
						"location": "11",
						"check": "Beamos Chest",
						"requirements": [
                            "can_use_explosives()"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000010000000000000",
						"location": "11",
						"check": "Underwater Silver Rupee Chest",
						"requirements": [
                            "can_play('song_of_time')",
                            "has_equipment('iron_boots')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000100000000000000000",
						"location": "11",
						"check": "Before Heavy Block Chest",
						"requirements": [
                            "has_strength(2)",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000001000000000000000",
						"location": "11",
						"check": "Heavy Block First Chest",
						"requirements": [
                            "has_strength(2)",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000100000000000000",
						"location": "11",
						"check": "Heavy Block Second Chest",
						"requirements": [
                            "has_strength(2)",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000100000000000000000000",
						"location": "11",
						"check": "Heavy Block Third Chest",
						"requirements": [
                            "has_strength(2)",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000000100",
						"location": "11",
						"check": "Heavy Block Back Left Chest",
						"requirements": [
                            "has_strength(2)",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000010000000000000000",
						"location": "11",
						"check": "Hammer Switch Chest",
						"requirements": [
                            "has_item('hammer')",
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000001000000000000000000",
						"location": "11",
						"check": "Hammer Room Clear Chest",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000001000",
						"location": "11",
						"check": "Eye Statue Chest",
						"requirements": [
                            "has_item('hookshot') | has_item('longshot')",
                            "has_item('bow')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000010000",
						"location": "11",
						"check": "Near Scarecrow Chest",
						"requirements": [
                            "(has_strength(2) & has_item('hookshot') | has_item('longshot')) | has_item('longshot')"
                        ],
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000000100000",
						"location": "11",
						"check": "Right Maze Central Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000001000000",
						"location": "11",
						"check": "Maze Path First Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000000100000000",
						"location": "11",
						"check": "Right Maze Side Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000001000000000",
						"location": "11",
						"check": "Maze Path Third Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000010000000000",
						"location": "11",
						"check": "Maze Path Second Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000000100000000000",
						"location": "11",
						"check": "Hidden Ceiling Chest",
						"requirements": true,
						"type": "Chest"
					},
					{
						"bits": "00000000000000000001000000000000",
						"location": "11",
						"check": "Maze Path Final Chest",
						"requirements": true,
						"type": "Chest"
					},
				],
				"access_requirements": [
                    "is_adult()",
                    "has_equipment('gerudo_card')"
                ]
			}
		],
        "backgroundColour": "#ff9900",
        "colour": "black",
		"region": "The Desert"
    },
]

module.exports.file_checks = checks