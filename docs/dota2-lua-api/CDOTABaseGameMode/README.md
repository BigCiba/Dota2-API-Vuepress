# CDOTABaseGameMode
extends [CBaseEntity](../CBaseEntity)

Function|Description|Client
--|--|:--:
[void AddItemToCustomShop(pszItemName, pszShopName, pszCategory)](AddItemToCustomShop)|( pszItem, pszShop, pszCategory ) Add an item to purchase at a custom shop.|❌
[int AddRealTimeCombatAnalyzerQuery(hQueryTable, hPlayer, pszQueryName)](AddRealTimeCombatAnalyzerQuery)|Begin tracking a sequence of events using the real time combat analyzer.|❌
[handle AllocateFowBlockerRegion(flMinX, flMinY, flMaxX, flMaxY, flGridSize)](AllocateFowBlockerRegion)|Allocates an entity which can be used by custom games to control FoW occlusion volumes|❌
[bool AreWeatherEffectsDisabled()](AreWeatherEffectsDisabled)|Get if weather effects are disabled on the client.|❌
[void ClearBountyRunePickupFilter()](ClearBountyRunePickupFilter)|Clear the script filter that controls bounty rune pickup behavior.|❌
[void ClearDamageFilter()](ClearDamageFilter)|Clear the script filter that controls how a unit takes damage.|❌
[void ClearExecuteOrderFilter()](ClearExecuteOrderFilter)|Clear the script filter that controls when a unit picks up an item.|❌
[void ClearHealingFilter()](ClearHealingFilter)|Clear the script filter that controls how a unit heals.|❌
[void ClearItemAddedToInventoryFilter()](ClearItemAddedToInventoryFilter)|Clear the script filter that controls the item added to inventory filter.|❌
[void ClearModifierGainedFilter()](ClearModifierGainedFilter)|Clear the script filter that controls the modifier filter.|❌
[void ClearModifyExperienceFilter()](ClearModifyExperienceFilter)|Clear the script filter that controls how hero experience is modified.|❌
[void ClearModifyGoldFilter()](ClearModifyGoldFilter)|Clear the script filter that controls how hero gold is modified.|❌
[void ClearRuneSpawnFilter()](ClearRuneSpawnFilter)|Clear the script filter that controls what rune spawns.|❌
[void ClearTrackingProjectileFilter()](ClearTrackingProjectileFilter)|Clear the script filter that controls when tracking projectiles are launched.|❌
[void DisableClumpingBehaviorByDefault(bDisabled)](DisableClumpingBehaviorByDefault)|Disable npc_dota_creature clumping behavior by default.|❌
[void DisableHudFlip(bDisable)](DisableHudFlip)|Use to disable hud flip for this mod|❌
[bool GetAlwaysShowPlayerInventory()](GetAlwaysShowPlayerInventory)|Show the player hero's inventory in the HUD, regardless of what unit is selected.|❌
[bool GetAlwaysShowPlayerNames()](GetAlwaysShowPlayerNames)|Get whether player names are always shown, regardless of client setting.|❌
[bool GetAnnouncerDisabled()](GetAnnouncerDisabled)|Are in-game announcers disabled?|❌
[float GetCameraDistanceOverride()](GetCameraDistanceOverride)|Set a different camera distance; dota default is 1134.|❌
[float GetCustomAttributeDerivedStatValue(nDerivedStatType, hHero)](GetCustomAttributeDerivedStatValue)|Get current derived stat value constant.|❌
[float GetCustomBackpackCooldownPercent()](GetCustomBackpackCooldownPercent)|Get the current rate cooldown ticks down for items in the backpack.|❌
[float GetCustomBackpackSwapCooldown()](GetCustomBackpackSwapCooldown)|Get the current custom backpack swap cooldown.|❌
[bool GetCustomBuybackCooldownEnabled()](GetCustomBuybackCooldownEnabled)|Turns on capability to define custom buyback cooldowns.|❌
[bool GetCustomBuybackCostEnabled()](GetCustomBuybackCostEnabled)|Turns on capability to define custom buyback costs.|❌
[float GetCustomGlyphCooldown()](GetCustomGlyphCooldown)|Get the current custom glyph cooldown.|❌
[int GetCustomHeroMaxLevel()](GetCustomHeroMaxLevel)|Allows definition of the max level heroes can achieve (default is 25).|❌
[float GetCustomScanCooldown()](GetCustomScanCooldown)|Get the current custom scan cooldown.|❌
[int GetEventGameSeed()](GetEventGameSeed)|Get the Game Seed passed from the GC.|❌
[unsigned GetEventWindowStartTime()](GetEventWindowStartTime)|Get the Event Window Start Time passed from the GC.|❌
[float GetFixedRespawnTime()](GetFixedRespawnTime)|Gets the fixed respawn time.|❌
[bool GetFogOfWarDisabled()](GetFogOfWarDisabled)|Turn the fog of war on or off.|❌
[bool GetGoldSoundDisabled()](GetGoldSoundDisabled)|Turn the sound when gold is acquired off/on.|❌
[bool GetHUDVisible(iElement)](GetHUDVisible)|Returns the HUD element visibility.|❌
[int GetMaximumAttackSpeed()](GetMaximumAttackSpeed)|Get the maximum attack speed for units.|❌
[int GetMinimumAttackSpeed()](GetMinimumAttackSpeed)|Get the minimum attack speed for units.|❌
[bool GetRecommendedItemsDisabled()](GetRecommendedItemsDisabled)|Turn the panel for showing recommended items at the shop off/on.|❌
[float GetRespawnTimeScale()](GetRespawnTimeScale)|Returns the scale applied to non-fixed respawn times.|❌
[bool GetStashPurchasingDisabled()](GetStashPurchasingDisabled)|Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.|❌
[bool GetStickyItemDisabled()](GetStickyItemDisabled)|Hide the sticky item in the quickbuy.|❌
[bool GetTopBarTeamValuesOverride()](GetTopBarTeamValuesOverride)|Override the values of the team values on the top game bar.|❌
[bool GetTopBarTeamValuesVisible()](GetTopBarTeamValuesVisible)|Turning on/off the team values on the top game bar.|❌
[bool GetTowerBackdoorProtectionEnabled()](GetTowerBackdoorProtectionEnabled)|Gets whether tower backdoor protection is enabled or not.|❌
[bool GetUseCustomHeroLevels()](GetUseCustomHeroLevels)|Are custom-defined XP values for hero level ups in use?|❌
[bool IsBuybackEnabled()](IsBuybackEnabled)|Enables or disables buyback completely.|❌
[bool IsDaynightCycleDisabled()](IsDaynightCycleDisabled)|Is the day/night cycle disabled?|❌
[void ListenForQueryFailed(hFunction, hContext)](ListenForQueryFailed)|Set function and context for real time combat analyzer query failed.|❌
[void ListenForQueryProgressChanged(hFunction, hContext)](ListenForQueryProgressChanged)|Set function and context for real time combat analyzer query progress changed.|❌
[void ListenForQuerySucceeded(hFunction, hContext)](ListenForQuerySucceeded)|Set function and context for real time combat analyzer query succeeded.|❌
[void RemoveItemFromCustomShop(pszItemName, pszShopName)](RemoveItemFromCustomShop)|( pszItem, pszShop ) Remove an item to purchase at a custom shop.|❌
[void RemoveRealTimeCombatAnalyzerQuery(nQueryID)](RemoveRealTimeCombatAnalyzerQuery)|Stop tracking a combat analyzer query.|❌
[void SetAbilityTuningValueFilter(hFunction, hContext)](SetAbilityTuningValueFilter)|Set a filter function to control the tuning values that abilities use. (Modify the table and Return true to use new values, return false to use the old values)|❌
[void SetAlwaysShowPlayerInventory(bAlwaysShow)](SetAlwaysShowPlayerInventory)|Show the player hero's inventory in the HUD, regardless of what unit is selected.|❌
[void SetAlwaysShowPlayerNames(bEnabled)](SetAlwaysShowPlayerNames)|Set whether player names are always shown, regardless of client setting.|❌
[void SetAnnouncerDisabled(bDisabled)](SetAnnouncerDisabled)|Mutes the in-game announcer.|❌
[void SetBotThinkingEnabled(bEnabled)](SetBotThinkingEnabled)|Enables/Disables bots in custom games. Note: this will only work with default heroes in the dota map.|❌
[void SetBotsAlwaysPushWithHuman(bAlwaysPush)](SetBotsAlwaysPushWithHuman)|Set if the bots should try their best to push with a human player.|❌
[void SetBotsInLateGame(bLateGame)](SetBotsInLateGame)|Set if bots should enable their late game behavior.|❌
[void SetBotsMaxPushTier(nMaxTier)](SetBotsMaxPushTier)|Set the max tier of tower that bots want to push. (-1 to disable)|❌
[void SetBountyRunePickupFilter(hFunction, hContext)](SetBountyRunePickupFilter)|Set a filter function to control the behavior when a bounty rune is picked up. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetBountyRuneSpawnInterval(flInterval)](SetBountyRuneSpawnInterval)|Set bounty rune spawn rate|❌
[void SetBuybackEnabled(bEnabled)](SetBuybackEnabled)|Enables or disables buyback completely.|❌
[void SetCameraDistanceOverride(flCameraDistanceOverride)](SetCameraDistanceOverride)|Set a different camera distance; dota default is 1134.|❌
[void SetCameraSmoothCountOverride(nSmoothCount)](SetCameraSmoothCountOverride)|Set a different camera smooth count; dota default is 8.|❌
[void SetCameraZRange(flMinZ, flMaxZ)](SetCameraZRange)|Sets the camera Z range|❌
[void SetCustomAttributeDerivedStatValue(nStatType, flNewValue)](SetCustomAttributeDerivedStatValue)|Modify derived stat value constants. ( AttributeDerivedStat eStatType, float flNewValue.|❌
[void SetCustomBackpackCooldownPercent(flPercent)](SetCustomBackpackCooldownPercent)|Set the rate cooldown ticks down for items in the backpack.|❌
[void SetCustomBackpackSwapCooldown(flCooldown)](SetCustomBackpackSwapCooldown)|Set a custom cooldown for swapping items into the backpack.|❌
[void SetCustomBuybackCooldownEnabled(bEnabled)](SetCustomBuybackCooldownEnabled)|Turns on capability to define custom buyback cooldowns.|❌
[void SetCustomBuybackCostEnabled(bEnabled)](SetCustomBuybackCostEnabled)|Turns on capability to define custom buyback costs.|❌
[void SetCustomGameForceHero(pHeroName)](SetCustomGameForceHero)|Force all players to use the specified hero and disable the normal hero selection process. Must be used before hero selection.|❌
[void SetCustomGlyphCooldown(flCooldown)](SetCustomGlyphCooldown)|Set a custom cooldown for team Glyph ability.|❌
[void SetCustomHeroMaxLevel(int_1)](SetCustomHeroMaxLevel)|Allows definition of the max level heroes can achieve (default is 25).|❌
[void SetCustomScanCooldown(flCooldown)](SetCustomScanCooldown)|Set a custom cooldown for team Scan ability.|❌
[void SetCustomTerrainWeatherEffect(pszEffectName)](SetCustomTerrainWeatherEffect)|Set the effect used as a custom weather effect, when units are on non-default terrain, in this mode.|❌
[void SetCustomXPRequiredToReachNextLevel(hTable)](SetCustomXPRequiredToReachNextLevel)|Allows definition of a table of hero XP values.|❌
[void SetDamageFilter(hFunction, hContext)](SetDamageFilter)|Set a filter function to control the behavior when a unit takes damage. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetDaynightCycleDisabled(bDisable)](SetDaynightCycleDisabled)|Enable or disable the day/night cycle.|❌
[void SetDeathOverlayDisabled(bDisabled)](SetDeathOverlayDisabled)|Specify whether the full screen death overlay effect plays when the selected hero dies.|❌
[void SetDefaultStickyItem(pItem)](SetDefaultStickyItem)|Sets the default sticky item in the quickbuy|❌
[void SetDraftingBanningTimeOverride(flValue)](SetDraftingBanningTimeOverride)|Set drafting hero banning time|❌
[void SetDraftingHeroPickSelectTimeOverride(flValue)](SetDraftingHeroPickSelectTimeOverride)|Set drafting hero pick time|❌
[void SetExecuteOrderFilter(hFunction, hContext)](SetExecuteOrderFilter)|Set a filter function to control the behavior when a unit picks up an item. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetFixedRespawnTime(flFixedRespawnTime)](SetFixedRespawnTime)|Set a fixed delay for all players to respawn after.|❌
[void SetFogOfWarDisabled(bDisabled)](SetFogOfWarDisabled)|Turn the fog of war on or off.|❌
[void SetForceRightClickAttackDisabled(bDisabled)](SetForceRightClickAttackDisabled)|Prevent users from using the right click deny setting.|❌
[void SetFountainConstantManaRegen(flConstantManaRegen)](SetFountainConstantManaRegen)|Set the constant rate that the fountain will regen mana. (-1 for default)|❌
[void SetFountainPercentageHealthRegen(flPercentageHealthRegen)](SetFountainPercentageHealthRegen)|Set the percentage rate that the fountain will regen health. (-1 for default)|❌
[void SetFountainPercentageManaRegen(flPercentageManaRegen)](SetFountainPercentageManaRegen)|Set the percentage rate that the fountain will regen mana. (-1 for default)|❌
[void SetFreeCourierModeEnabled(bEnabled)](SetFreeCourierModeEnabled)|If set to true, enable 7.23 free courier mode.|❌
[void SetFriendlyBuildingMoveToEnabled(bEnabled)](SetFriendlyBuildingMoveToEnabled)|Allows clicks on friendly buildings to be handled normally.|❌
[void SetGoldSoundDisabled(bDisabled)](SetGoldSoundDisabled)|Turn the sound when gold is acquired off/on.|❌
[void SetHUDVisible(iHUDElement, bVisible)](SetHUDVisible)|Set the HUD element visibility.|❌
[void SetHealingFilter(hFunction, hContext)](SetHealingFilter)|Set a filter function to control the behavior when a unit heals. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetHudCombatEventsDisabled(bDisabled)](SetHudCombatEventsDisabled)|Specify whether the default combat events will show in the HUD.|❌
[void SetItemAddedToInventoryFilter(hFunction, hContext)](SetItemAddedToInventoryFilter)|Set a filter function to control what happens to items that are added to an inventory, return false to cancel the event|❌
[void SetKillableTombstones(bEnabled)](SetKillableTombstones)|Set whether tombstones can be channeled to be removed by enemy heroes.|❌
[void SetKillingSpreeAnnouncerDisabled(bDisabled)](SetKillingSpreeAnnouncerDisabled)|Mutes the in-game killing spree announcer.|❌
[void SetLoseGoldOnDeath(bEnabled)](SetLoseGoldOnDeath)|Use to disable gold loss on death.|❌
[void SetMaximumAttackSpeed(nMaxSpeed)](SetMaximumAttackSpeed)|Set the maximum attack speed for units.|❌
[void SetMinimumAttackSpeed(nMinSpeed)](SetMinimumAttackSpeed)|Set the minimum attack speed for units.|❌
[void SetModifierGainedFilter(hFunction, hContext)](SetModifierGainedFilter)|Set a filter function to control modifiers that are gained, return false to destroy modifier.|❌
[void SetModifyExperienceFilter(hFunction, hContext)](SetModifyExperienceFilter)|Set a filter function to control the behavior when a hero's experience is modified. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetModifyGoldFilter(hFunction, hContext)](SetModifyGoldFilter)|Set a filter function to control the behavior when a hero's gold is modified. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetNeutralItemHideUndiscoveredEnabled(bEnable)](SetNeutralItemHideUndiscoveredEnabled)|When enabled, undiscovered items in the neutral item stash are hidden.|❌
[void SetNeutralStashEnabled(bEnable)](SetNeutralStashEnabled)|Allow items to be sent to the neutral stash.|❌
[void SetNeutralStashTeamViewOnlyEnabled(bEnable)](SetNeutralStashTeamViewOnlyEnabled)|When enabled, the all neutral items tab cannot be viewed.|❌
[void SetOverrideSelectionEntity(hOverrideEntity)](SetOverrideSelectionEntity)|Set an override for the default selection entity, instead of each player's hero.|❌
[void SetPauseEnabled(bEnabled)](SetPauseEnabled)|Set pausing enabled/disabled|❌
[void SetPowerRuneSpawnInterval(flInterval)](SetPowerRuneSpawnInterval)|Set power rune spawn rate|❌
[void SetRandomHeroBonusItemGrantDisabled(bDisabled)](SetRandomHeroBonusItemGrantDisabled)|Disables bonus items for randoming a hero.|❌
[void SetRecommendedItemsDisabled(bDisabled)](SetRecommendedItemsDisabled)|Turn the panel for showing recommended items at the shop off/on.|❌
[void SetRemoveIllusionsOnDeath(bRemove)](SetRemoveIllusionsOnDeath)|Make it so illusions are immediately removed upon death, rather than sticking around for a few seconds.|❌
[void SetRespawnTimeScale(flValue)](SetRespawnTimeScale)|Sets the scale applied to non-fixed respawn times. 1 = default DOTA respawn calculations.|❌
[void SetRuneEnabled(nRune, bEnabled)](SetRuneEnabled)|Set if a given type of rune is enabled.|❌
[void SetRuneSpawnFilter(hFunction, hContext)](SetRuneSpawnFilter)|Set a filter function to control what rune spawns. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetSelectionGoldPenaltyEnabled(bEnabled)](SetSelectionGoldPenaltyEnabled)|Enable/disable gold penalty for late picking.|❌
[void SetSendToStashEnabled(bEnable)](SetSendToStashEnabled)|Allow items to be sent to the stash.|❌
[void SetStashPurchasingDisabled(bDisabled)](SetStashPurchasingDisabled)|Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.|❌
[void SetStickyItemDisabled(bDisabled)](SetStickyItemDisabled)|Hide the sticky item in the quickbuy.|❌
[void SetTPScrollSlotItemOverride(pItemName)](SetTPScrollSlotItemOverride)|Sets the item which goes in the TP scroll slot|❌
[void SetTopBarTeamValue(iTeam, nValue)](SetTopBarTeamValue)|Set the team values on the top game bar.|❌
[void SetTopBarTeamValuesOverride(bOverride)](SetTopBarTeamValuesOverride)|Override the values of the team values on the top game bar.|❌
[void SetTopBarTeamValuesVisible(bVisible)](SetTopBarTeamValuesVisible)|Turning on/off the team values on the top game bar.|❌
[void SetTowerBackdoorProtectionEnabled(bEnabled)](SetTowerBackdoorProtectionEnabled)|Enables/Disables tower backdoor protection.|❌
[void SetTrackingProjectileFilter(hFunction, hContext)](SetTrackingProjectileFilter)|Set a filter function to control when tracking projectiles are launched. (Modify the table and Return true to use new values, return false to cancel the event)|❌
[void SetUnseenFogOfWarEnabled(bEnabled)](SetUnseenFogOfWarEnabled)|Enable or disable unseen fog of war. When enabled parts of the map the player has never seen will be completely hidden by fog of war.|❌
[void SetUseCustomHeroLevels(bEnabled)](SetUseCustomHeroLevels)|Turn on custom-defined XP values for hero level ups.  The table should be defined before switching this on.|❌
[void SetUseDefaultDOTARuneSpawnLogic(bEnabled)](SetUseDefaultDOTARuneSpawnLogic)|If set to true, use current rune spawn rules.  Either setting respects custom spawn intervals.|❌
[void SetWeatherEffectsDisabled(bDisable)](SetWeatherEffectsDisabled)|Set if weather effects are disabled.|❌
