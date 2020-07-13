# CDOTA_BaseNPC_Hero
extends [CDOTA_BaseNPC](../CDOTA_BaseNPC)

Function|Description|Client
--|--|:--:
[bool AddExperience(flXP, nReason, bApplyBotDifficultyScaling, bIncrementTotal)](AddExperience)|Params: Float XP, Bool applyBotDifficultyScaling|❌
[void Buyback()](Buyback)|Spend the gold and buyback with this hero.|❌
[void CalculateStatBonus()](CalculateStatBonus)|Recalculate all stats after the hero gains stats.|❌
[bool CanEarnGold()](CanEarnGold)|Returns boolean value result of buyback gold limit time less than game time.|❌
[void ClearLastHitMultikill()](ClearLastHitMultikill)|Value is stored in PlayerResource.|❌
[void ClearLastHitStreak()](ClearLastHitStreak)|Value is stored in PlayerResource.|❌
[void ClearStreak()](ClearStreak)|Value is stored in PlayerResource.|❌
[int GetAbilityPoints()](GetAbilityPoints)|Gets the current unspent ability points.|❌
[table GetAdditionalOwnedUnits()](GetAdditionalOwnedUnits)||❌
[float GetAgility()](GetAgility)||✔️
[float GetAgilityGain()](GetAgilityGain)||❌
[int GetAssists()](GetAssists)|Value is stored in PlayerResource.|❌
[int GetAttacker(nIndex)](GetAttacker)||❌
[float GetBaseAgility()](GetBaseAgility)||❌
[int GetBaseDamageMax()](GetBaseDamageMax)|Hero damage is also affected by attributes.|❌
[int GetBaseDamageMin()](GetBaseDamageMin)|Hero damage is also affected by attributes.|❌
[float GetBaseIntellect()](GetBaseIntellect)||❌
[float GetBaseManaRegen()](GetBaseManaRegen)|Returns the base mana regen.|❌
[float GetBaseStrength()](GetBaseStrength)||❌
[int GetBonusDamageFromPrimaryStat()](GetBonusDamageFromPrimaryStat)||❌
[float GetBuybackCooldownTime()](GetBuybackCooldownTime)|Return float value for the amount of time left on cooldown for this hero's buyback.|❌
[int GetBuybackCost(bReturnOldValues)](GetBuybackCost)|Return integer value for the gold cost of a buyback.|❌
[float GetBuybackGoldLimitTime()](GetBuybackGoldLimitTime)|Returns the amount of time gold gain is limited after buying back.|❌
[int GetCurrentXP()](GetCurrentXP)|Returns the amount of XP |❌
[int GetDeathGoldCost()](GetDeathGoldCost)||❌
[int GetDeaths()](GetDeaths)|Value is stored in PlayerResource.|❌
[int GetDenies()](GetDenies)|Value is stored in PlayerResource.|❌
[int GetGold()](GetGold)|Returns gold amount for the player owning this hero|❌
[int GetGoldBounty()](GetGoldBounty)||❌
[float GetIncreasedAttackSpeed()](GetIncreasedAttackSpeed)|Hero attack speed is also affected by agility.|❌
[float GetIntellect()](GetIntellect)||✔️
[float GetIntellectGain()](GetIntellectGain)||❌
[int GetKills()](GetKills)|Value is stored in PlayerResource.|❌
[int GetLastHits()](GetLastHits)|Value is stored in PlayerResource.|❌
[float GetMostRecentDamageTime()](GetMostRecentDamageTime)||❌
[int GetMultipleKillCount()](GetMultipleKillCount)||❌
[int GetNumAttackers()](GetNumAttackers)||❌
[int GetNumItemsInInventory()](GetNumItemsInInventory)||❌
[int GetNumItemsInStash()](GetNumItemsInStash)||❌
[float GetPhysicalArmorBaseValue()](GetPhysicalArmorBaseValue)|Hero armor is affected by attributes.|❌
[int GetPlayerID()](GetPlayerID)|Returns player ID of the player owning this hero|❌
[int GetPrimaryAttribute()](GetPrimaryAttribute)|0 = strength, 1 = agility, 2 = intelligence.|❌
[float GetPrimaryStatValue()](GetPrimaryStatValue)||❌
[float GetRespawnTime()](GetRespawnTime)||❌
[bool GetRespawnsDisabled()](GetRespawnsDisabled)|Is this hero prevented from respawning?|❌
[int GetStreak()](GetStreak)|Value is stored in PlayerResource.|❌
[float GetStrength()](GetStrength)||✔️
[float GetStrengthGain()](GetStrengthGain)||❌
[float GetTimeUntilRespawn()](GetTimeUntilRespawn)||❌
[handle GetTogglableWearable(nSlotType)](GetTogglableWearable)|Get wearable entity in slot (slot)|❌
[bool HasAnyAvailableInventorySpace()](HasAnyAvailableInventorySpace)||❌
[bool HasFlyingVision()](HasFlyingVision)||❌
[bool HasOwnerAbandoned()](HasOwnerAbandoned)||❌
[int HasRoomForItem(pItemName, bIncludeStashCombines, bAllowSelling)](HasRoomForItem)|Args: const char* pItemName, bool bIncludeStashCombines, bool bAllowSelling|❌
[void HeroLevelUp(bPlayEffects)](HeroLevelUp)|Levels up the hero, true or false to play effects.|❌
[void IncrementAssists(iKillerID)](IncrementAssists)|Value is stored in PlayerResource.|❌
[void IncrementDeaths(iKillerID)](IncrementDeaths)|Value is stored in PlayerResource.|❌
[void IncrementDenies()](IncrementDenies)|Value is stored in PlayerResource.|❌
[void IncrementKills(iVictimID)](IncrementKills)|Passed ID is for the victim, killer ID is ID of the current hero.  Value is stored in PlayerResource.|❌
[void IncrementLastHitMultikill()](IncrementLastHitMultikill)|Value is stored in PlayerResource.|❌
[void IncrementLastHitStreak()](IncrementLastHitStreak)|Value is stored in PlayerResource.|❌
[void IncrementLastHits()](IncrementLastHits)|Value is stored in PlayerResource.|❌
[void IncrementNearbyCreepDeaths()](IncrementNearbyCreepDeaths)|Value is stored in PlayerResource.|❌
[void IncrementStreak()](IncrementStreak)|Value is stored in PlayerResource.|❌
[bool IsBuybackDisabledByReapersScythe()](IsBuybackDisabledByReapersScythe)||❌
[bool IsReincarnating()](IsReincarnating)||❌
[bool IsStashEnabled()](IsStashEnabled)||❌
[void KilledHero(hHero, hInflictor)](KilledHero)|Args: Hero, Inflictor|❌
[void ModifyAgility(flNewAgility)](ModifyAgility)|Adds passed value to base attribute value, then calls CalculateStatBonus.|❌
[int ModifyGold(iGoldChange, bReliable, iReason)](ModifyGold)|Gives this hero some gold.  Args: int nGoldChange, bool bReliable, int reason|❌
[void ModifyIntellect(flNewIntellect)](ModifyIntellect)|Adds passed value to base attribute value, then calls CalculateStatBonus.|❌
[void ModifyStrength(flNewStrength)](ModifyStrength)|Adds passed value to base attribute value, then calls CalculateStatBonus.|❌
[void PerformTaunt()](PerformTaunt)||❌
[void RecordLastHit()](RecordLastHit)||❌
[void RespawnHero(bBuyBack, bRespawnPenalty)](RespawnHero)|Respawn this hero.|❌
[void SetAbilityPoints(iPoints)](SetAbilityPoints)|Sets the current unspent ability points.|❌
[void SetBaseAgility(flAgility)](SetBaseAgility)||❌
[void SetBaseIntellect(flIntellect)](SetBaseIntellect)||❌
[void SetBaseStrength(flStrength)](SetBaseStrength)||❌
[void SetBotDifficulty(nDifficulty)](SetBotDifficulty)||❌
[void SetBuyBackDisabledByReapersScythe(bBuybackDisabled)](SetBuyBackDisabledByReapersScythe)||❌
[void SetBuybackCooldownTime(flTime)](SetBuybackCooldownTime)|Sets the buyback cooldown time.|❌
[void SetBuybackGoldLimitTime(flTime)](SetBuybackGoldLimitTime)|Set the amount of time gold gain is limited after buying back.|❌
[void SetCustomDeathXP(iValue)](SetCustomDeathXP)|Sets a custom experience value for this hero.  Note, GameRules boolean must be set for this to work!|❌
[void SetGold(iGold, bReliable)](SetGold)|Sets the gold amount for the player owning this hero|❌
[void SetPlayerID(iPlayerID)](SetPlayerID)||❌
[void SetPrimaryAttribute(nPrimaryAttribute)](SetPrimaryAttribute)|Set this hero's primary attribute value.|❌
[void SetRespawnPosition(vOrigin)](SetRespawnPosition)||❌
[void SetRespawnsDisabled(bDisableRespawns)](SetRespawnsDisabled)|Prevent this hero from respawning.|❌
[void SetStashEnabled(bEnabled)](SetStashEnabled)||❌
[void SetTimeUntilRespawn(time)](SetTimeUntilRespawn)||❌
[bool ShouldDoFlyHeightVisual()](ShouldDoFlyHeightVisual)||❌
[void SpendGold(iCost, iReason)](SpendGold)|Args: int nGold, int nReason|❌
[void UpgradeAbility(hAbility)](UpgradeAbility)|This upgrades the passed ability if it exists and the hero has enough ability points.|❌
[bool WillReincarnate()](WillReincarnate)||❌
