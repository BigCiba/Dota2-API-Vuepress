# CDOTA_PlayerResource
extends [CBaseEntity](../CBaseEntity)

Function|Description|Client
--|--|:--:
[void AddAegisPickup(iPlayerID)](AddAegisPickup)||❌
[void AddClaimedFarm(iPlayerID, flFarmValue, bEarnedValue)](AddClaimedFarm)||❌
[void AddGoldSpentOnSupport(iPlayerID, iCost)](AddGoldSpentOnSupport)||❌
[void AddRunePickup(iPlayerID)](AddRunePickup)||❌
[bool AreUnitsSharedWithPlayerID(nUnitOwnerPlayerID, nOtherPlayerID)](AreUnitsSharedWithPlayerID)||❌
[bool CanRepick(iPlayerID)](CanRepick)||❌
[void ClearKillsMatrix(iPlayerID)](ClearKillsMatrix)||❌
[void ClearLastHitMultikill(iPlayerID)](ClearLastHitMultikill)||❌
[void ClearLastHitStreak(iPlayerID)](ClearLastHitStreak)||❌
[void ClearRawPlayerDamageMatrix(iPlayerID)](ClearRawPlayerDamageMatrix)||❌
[void ClearStreak(iPlayerID)](ClearStreak)||❌
[int GetAegisPickups(iPlayerID)](GetAegisPickups)||❌
[int GetAssists(iPlayerID)](GetAssists)||❌
[unsigned GetBroadcasterChannel(iPlayerID)](GetBroadcasterChannel)||❌
[unsigned GetBroadcasterChannelSlot(iPlayerID)](GetBroadcasterChannelSlot)||❌
[int GetClaimedDenies(iPlayerID)](GetClaimedDenies)||❌
[float GetClaimedFarm(iPlayerID, bOnlyEarned)](GetClaimedFarm)||❌
[int GetClaimedMisses(iPlayerID)](GetClaimedMisses)||❌
[unknown GetConnectionState(iPlayerID)](GetConnectionState)||❌
[int GetCreepDamageTaken(iPlayerID, bTotal)](GetCreepDamageTaken)||❌
[float GetCustomBuybackCooldown(iPlayerID)](GetCustomBuybackCooldown)||❌
[int GetCustomBuybackCost(iPlayerID)](GetCustomBuybackCost)||❌
[int GetCustomTeamAssignment(iPlayerID)](GetCustomTeamAssignment)|Get the current custom team assignment for this player.|❌
[int GetDamageDoneToHero(iPlayerID, iVictimID)](GetDamageDoneToHero)||❌
[int GetDeaths(iPlayerID)](GetDeaths)||❌
[int GetDenies(iPlayerID)](GetDenies)||❌
[unsigned GetEventPointsForPlayerID(nPlayerID)](GetEventPointsForPlayerID)||❌
[unsigned GetEventPremiumPoints(nPlayerID)](GetEventPremiumPoints)||❌
[unknown GetEventRanks(nPlayerID)](GetEventRanks)||❌
[int GetGold(iPlayerID)](GetGold)||❌
[int GetGoldLostToDeath(iPlayerID)](GetGoldLostToDeath)||❌
[float GetGoldPerMin(iPlayerID)](GetGoldPerMin)||❌
[int GetGoldSpentOnBuybacks(iPlayerID)](GetGoldSpentOnBuybacks)||❌
[int GetGoldSpentOnConsumables(iPlayerID)](GetGoldSpentOnConsumables)||❌
[int GetGoldSpentOnItems(iPlayerID)](GetGoldSpentOnItems)||❌
[int GetGoldSpentOnSupport(iPlayerID)](GetGoldSpentOnSupport)||❌
[float GetHealing(iPlayerID)](GetHealing)||❌
[int GetHeroDamageTaken(iPlayerID, bTotal)](GetHeroDamageTaken)||❌
[int GetKills(iPlayerID)](GetKills)||❌
[int GetKillsDoneToHero(iPlayerID, iVictimID)](GetKillsDoneToHero)||❌
[int GetLastHitMultikill(iPlayerID)](GetLastHitMultikill)||❌
[int GetLastHitStreak(iPlayerID)](GetLastHitStreak)||❌
[int GetLastHits(iPlayerID)](GetLastHits)||❌
[int GetLevel(iPlayerID)](GetLevel)||❌
[int GetMisses(iPlayerID)](GetMisses)||❌
[int GetNearbyCreepDeaths(iPlayerID)](GetNearbyCreepDeaths)||❌
[int GetNetWorth(iPlayerID)](GetNetWorth)||❌
[handle GetNthCourierForTeam(nCourierIndex, nTeamNumber)](GetNthCourierForTeam)||❌
[int GetNthPlayerIDOnTeam(iTeamNumber, iNthPlayer)](GetNthPlayerIDOnTeam)||❌
[int GetNumConsumablesPurchased(iPlayerID)](GetNumConsumablesPurchased)||❌
[int GetNumCouriersForTeam(nTeamNumber)](GetNumCouriersForTeam)||❌
[int GetNumItemsPurchased(iPlayerID)](GetNumItemsPurchased)||❌
[uint64 GetPartyID(iPlayerID)](GetPartyID)||❌
[handle GetPlayer(iPlayerID)](GetPlayer)||❌
[int GetPlayerCount()](GetPlayerCount)|Includes spectators and players not assigned to a team|❌
[int GetPlayerCountForTeam(iTeam)](GetPlayerCountForTeam)||❌
[bool GetPlayerLoadedCompletely(iPlayerID)](GetPlayerLoadedCompletely)||❌
[string GetPlayerName(iPlayerID)](GetPlayerName)||❌
[int GetRawPlayerDamage(iPlayerID)](GetRawPlayerDamage)||❌
[int GetReliableGold(iPlayerID)](GetReliableGold)||❌
[int GetRespawnSeconds(iPlayerID)](GetRespawnSeconds)||❌
[int GetRoshanKills(iPlayerID)](GetRoshanKills)||❌
[int GetRunePickups(iPlayerID)](GetRunePickups)||❌
[handle GetSelectedHeroEntity(iPlayerID)](GetSelectedHeroEntity)||❌
[int GetSelectedHeroID(iPlayerID)](GetSelectedHeroID)||❌
[string GetSelectedHeroName(iPlayerID)](GetSelectedHeroName)||❌
[unsigned GetSteamAccountID(iPlayerID)](GetSteamAccountID)||❌
[uint64 GetSteamID(iPlayerID)](GetSteamID)|Get the 64 bit steam ID for a given player.|❌
[int GetStreak(iPlayerID)](GetStreak)||❌
[float GetStuns(iPlayerID)](GetStuns)||❌
[int GetTeam(iPlayerID)](GetTeam)||❌
[int GetTeamKills(iTeam)](GetTeamKills)||❌
[int GetTeamPlayerCount()](GetTeamPlayerCount)|Players on a valid team (radiant, dire, or custom*) who haven't abandoned the game|❌
[float GetTimeOfLastConsumablePurchase(iPlayerID)](GetTimeOfLastConsumablePurchase)||❌
[float GetTimeOfLastDeath(iPlayerID)](GetTimeOfLastDeath)||❌
[float GetTimeOfLastItemPurchase(iPlayerID)](GetTimeOfLastItemPurchase)||❌
[int GetTotalEarnedGold(iPlayerID)](GetTotalEarnedGold)||❌
[int GetTotalEarnedXP(iPlayerID)](GetTotalEarnedXP)||❌
[int GetTotalGoldSpent(iPlayerID)](GetTotalGoldSpent)||❌
[int GetTowerDamageTaken(iPlayerID, bTotal)](GetTowerDamageTaken)||❌
[int GetTowerKills(iPlayerID)](GetTowerKills)||❌
[int GetUnitShareMaskForPlayer(nPlayerID, nOtherPlayerID)](GetUnitShareMaskForPlayer)||❌
[int GetUnreliableGold(iPlayerID)](GetUnreliableGold)||❌
[float GetXPPerMin(iPlayerID)](GetXPPerMin)||❌
[bool HasCustomGameTicketForPlayerID(iPlayerID)](HasCustomGameTicketForPlayerID)|Does this player have a custom game ticket for this game?|❌
[bool HasRandomed(iPlayerID)](HasRandomed)||❌
[bool HasSelectedHero(iPlayerID)](HasSelectedHero)||❌
[bool HaveAllPlayersJoined()](HaveAllPlayersJoined)||❌
[void IncrementAssists(iPlayerID, iVictimID)](IncrementAssists)||❌
[void IncrementClaimedDenies(iPlayerID)](IncrementClaimedDenies)||❌
[void IncrementClaimedMisses(iPlayerID)](IncrementClaimedMisses)||❌
[void IncrementDeaths(iPlayerID, iKillerID)](IncrementDeaths)||❌
[void IncrementDenies(iPlayerID)](IncrementDenies)||❌
[void IncrementKills(iPlayerID, iVictimID)](IncrementKills)||❌
[void IncrementLastHitMultikill(iPlayerID)](IncrementLastHitMultikill)||❌
[void IncrementLastHitStreak(iPlayerID)](IncrementLastHitStreak)||❌
[void IncrementLastHits(iPlayerID)](IncrementLastHits)||❌
[void IncrementMisses(iPlayerID)](IncrementMisses)||❌
[void IncrementNearbyCreepDeaths(iPlayerID)](IncrementNearbyCreepDeaths)||❌
[void IncrementStreak(iPlayerID)](IncrementStreak)||❌
[void IncrementTotalEarnedXP(iPlayerID, iXP, nReason)](IncrementTotalEarnedXP)||❌
[bool IsBroadcaster(iPlayerID)](IsBroadcaster)||❌
[bool IsDisableHelpSetForPlayerID(nPlayerID, nOtherPlayerID)](IsDisableHelpSetForPlayerID)||❌
[bool IsFakeClient(iPlayerID)](IsFakeClient)||❌
[bool IsHeroSelected(pHeroname)](IsHeroSelected)||❌
[bool IsHeroSharedWithPlayerID(nUnitOwnerPlayerID, nOtherPlayerID)](IsHeroSharedWithPlayerID)||❌
[bool IsValidPlayer(iPlayerID)](IsValidPlayer)||❌
[bool IsValidPlayerID(iPlayerID)](IsValidPlayerID)||❌
[bool IsValidTeamPlayer(iPlayerID)](IsValidTeamPlayer)||❌
[bool IsValidTeamPlayerID(iPlayerID)](IsValidTeamPlayerID)||❌
[int ModifyGold(iPlayerID, iGoldChange, bReliable, nReason)](ModifyGold)||❌
[int NumPlayers()](NumPlayers)||❌
[int NumTeamPlayers()](NumTeamPlayers)||❌
[void RecordConsumableAbilityChargeChange(iPlayerID, item_definition_index, nChargeIncrementOrDecrement)](RecordConsumableAbilityChargeChange)|Increment or decrement consumable charges (nPlayerID, item_definition_index, nChargeIncrementOrDecrement)|❌
[handle ReplaceHeroWith(iPlayerID, pszHeroClass, nGold, nXP)](ReplaceHeroWith)|(playerID, heroClassName, gold, XP) - replaces the player's hero with a new one of the specified class, gold and XP|❌
[void ResetBuybackCostTime(nPlayerID)](ResetBuybackCostTime)||❌
[void ResetTotalEarnedGold(iPlayerID)](ResetTotalEarnedGold)||❌
[void SetBuybackCooldownTime(nPlayerID, flBuybackCooldown)](SetBuybackCooldownTime)||❌
[void SetBuybackGoldLimitTime(nPlayerID, flBuybackCooldown)](SetBuybackGoldLimitTime)||❌
[void SetCameraTarget(nPlayerID, hTarget)](SetCameraTarget)|(playerID, entity) - force the given player's camera to follow the given entity|❌
[void SetCanRepick(iPlayerID, bCanRepick)](SetCanRepick)||❌
[void SetCustomBuybackCooldown(iPlayerID, flCooldownTime)](SetCustomBuybackCooldown)|Set the buyback cooldown for this player.|❌
[void SetCustomBuybackCost(iPlayerID, iGoldCost)](SetCustomBuybackCost)|Set the buyback cost for this player.|❌
[void SetCustomPlayerColor(iPlayerID, r, g, b)](SetCustomPlayerColor)|Set custom color for player (minimap, scoreboard, etc)|❌
[void SetCustomTeamAssignment(iPlayerID, iTeamAssignment)](SetCustomTeamAssignment)|Set custom team assignment for this player.|❌
[void SetGold(iPlayerID, iGold, bReliable)](SetGold)||❌
[void SetHasRandomed(iPlayerID)](SetHasRandomed)||❌
[void SetLastBuybackTime(iPlayerID, iLastBuybackTime)](SetLastBuybackTime)||❌
[void SetOverrideSelectionEntity(nPlayerID, hEntity)](SetOverrideSelectionEntity)|Set the forced selection entity for a player.|❌
[void SetUnitShareMaskForPlayer(nPlayerID, nOtherPlayerID, nFlag, bState)](SetUnitShareMaskForPlayer)||❌
[void SpendGold(iPlayerID, iCost, iReason)](SpendGold)||❌
[void UpdateTeamSlot(iPlayerID, iTeamNumber, desiredSlot)](UpdateTeamSlot)||❌
[int WhoSelectedHero(pHeroFilename)](WhoSelectedHero)||❌
