# CDOTAGamerules
全局访问变量：GameRules

Function|Description|Client
--|--|:--:
[handle AddBotPlayerWithEntityScript(string_1, string_2, int_3, string_4, bool_5)](AddBotPlayerWithEntityScript)|Spawn a bot player of the passed hero name, player name, and team.|❌
[bool AddEventMetadataLeaderboardEntry(string_1, unsigned_2, unsigned_3, unsigned_4, unsigned_5, unsigned_6, unsigned_7, unsigned_8, unsigned_9)](AddEventMetadataLeaderboardEntry)|Event-only ( string szNameSuffix, int nStars, int nMaxStars, int nExtraData1, int nExtraData2 )|❌
[bool AddEventMetadataLeaderboardEntryRawScore(string_1, unsigned_2, unsigned_3, unsigned_4, unsigned_5, unsigned_6, unsigned_7, unsigned_8)](AddEventMetadataLeaderboardEntryRawScore)|Event-only ( string szNameSuffix, int nScore, int nExtraData1, int nExtraData2 )|❌
[void AddItemToWhiteList(string_1)](AddItemToWhiteList)|Add an item to the whitelist|❌
[void AddMinimapDebugPoint(int_1, Vector_2, int_3, int_4, int_5, int_6, float_7)](AddMinimapDebugPoint)|Add a point on the minimap.|❌
[void AddMinimapDebugPointForTeam(int_1, Vector_2, int_3, int_4, int_5, int_6, float_7, int_8)](AddMinimapDebugPointForTeam)|Add a point on the minimap for a specific team.|❌
[void BeginNightstalkerNight(float_1)](BeginNightstalkerNight)|Begin night stalker night.|❌
[void BeginTemporaryNight(float_1)](BeginTemporaryNight)|Begin temporary night.|❌
[void BotPopulate()](BotPopulate)|Fills all the teams with bots if cheat mode is enabled.|❌
[void Defeated()](Defeated)|Kills the ancient, etc.|❌
[bool DidMatchSignoutTimeOut()](DidMatchSignoutTimeOut)|true when we have waited some time after end of the game and not received signout|❌
[void EnableCustomGameSetupAutoLaunch(bool_1)](EnableCustomGameSetupAutoLaunch)|Enabled (true) or disable (false) auto launch for custom game setup.|❌
[void FinishCustomGameSetup()](FinishCustomGameSetup)|Indicate that the custom game setup phase is complete, and advance to the game.|❌
[void ForceCreepSpawn()](ForceCreepSpawn)|Spawn the next wave of creeps.|❌
[void ForceGameStart()](ForceGameStart)|Transition game state to DOTA_GAMERULES_STATE_GAME_IN_PROGRESS|❌
[handle GetAnnouncer(int_1)](GetAnnouncer)|Get the announcer for a team|❌
[int GetCustomGameDifficulty()](GetCustomGameDifficulty)|Returns the difficulty level of the custom game mode|✔️
[int GetCustomGameTeamMaxPlayers(int_1)](GetCustomGameTeamMaxPlayers)|Get whether a team is selectable during game setup|❌
[float GetDOTATime(IncludePregameTime , IncludeNegativeTime)](GetDOTATime)|(b IncludePregameTime b IncludeNegativeTime) Returns the actual DOTA in-game clock time.
返回Dota游戏内的时间。（是否包含赛前时间或负时间）|✔️
[int GetDifficulty()](GetDifficulty)|Returns difficulty level of the custom game mode|✔️
[handle GetDroppedItem(int_1)](GetDroppedItem)|Gets the Xth dropped item|❌
[float GetGameFrameTime()](GetGameFrameTime)|Returns the number of seconds elapsed since the last frame was renderered. This time doesn't count up when the game is paused|✔️
[handle GetGameModeEntity()](GetGameModeEntity)|Get the game mode entity|❌
[string GetGameSessionConfigValue(string_1, string_2)](GetGameSessionConfigValue)|Get a string value from the game session config (map options)|❌
[float GetGameTime()](GetGameTime)|Returns the number of seconds elapsed since map start. This time doesn't count up when the game is paused|✔️
[uint64 GetMatchID()](GetMatchID)|Get the MatchID for this game.|❌
[bool GetMatchSignoutComplete()](GetMatchSignoutComplete)|Have we received the post match signout message that includes reward information|❌
[int GetNianTotalDamageTaken()](GetNianTotalDamageTaken)|For New Bloom, get total damage taken by the Nian / Year Beast|❌
[table GetPlayerCustomGameAccountRecord(int_1)](GetPlayerCustomGameAccountRecord)|(Preview/Unreleased) Gets the player's custom game account record, as it looked at the start of this session|❌
[float GetStateTransitionTime()](GetStateTransitionTime)|Get time remaining between state changes.|❌
[float GetTimeOfDay()](GetTimeOfDay)|Get the time of day|❌
[Vector GetWeatherWindDirection()](GetWeatherWindDirection)|Get Weather Wind Direction Vector|✔️
[void IncreaseItemStock(int_1, string_2, int_3, int_4)](IncreaseItemStock)|Increase an item's stock count, clamped to item max (nTeamNumber, szItemName, nCount, nPlayerID .|❌
[bool IsCheatMode()](IsCheatMode)|Are cheats enabled on the server|✔️
[bool IsDaytime()](IsDaytime)|Is it day time?|❌
[bool IsGamePaused()](IsGamePaused)|Returns whether the game is paused.|❌
[bool IsHeroRespawnEnabled()](IsHeroRespawnEnabled)|Returns whether hero respawn is enabled.|❌
[bool IsInBanPhase()](IsInBanPhase)|Are we in the ban phase of hero pick?|❌
[bool IsItemInWhiteList(string_1)](IsItemInWhiteList)|Query an item in the whitelist|❌
[bool IsNightstalkerNight()](IsNightstalkerNight)|Is it night stalker night-time?|❌
[bool IsTemporaryNight()](IsTemporaryNight)|Is it temporarily night-time?|❌
[void LockCustomGameSetupTeamAssignment(bool_1)](LockCustomGameSetupTeamAssignment)|Lock (true) or unlock (false) team assignemnt. If team assignment is locked players cannot change teams.|❌
[void MakeTeamLose(int_1)](MakeTeamLose)|Makes the specified team lose|❌
[int NumDroppedItems()](NumDroppedItems)|Returns the number of items currently dropped on the ground|❌
[bool PlayerHasCustomGameHostPrivileges(handle_1)](PlayerHasCustomGameHostPrivileges)|Whether a player has custom game host privileges (shuffle teams, etc.)|❌
[void Playtesting_UpdateAddOnKeyValues()](Playtesting_UpdateAddOnKeyValues)|Updates custom hero, unit and ability KeyValues in memory with the latest values from disk|❌
[void PrepareSpawners(float_1)](PrepareSpawners)|Prepare Dota lane style spawners with a given interval|❌
[void RemoveFakeClient(int_1)](RemoveFakeClient)|Removes a fake client|❌
[void RemoveItemFromWhiteList(string_1)](RemoveItemFromWhiteList)|Remove an item from the whitelist|❌
[void ResetDefeated()](ResetDefeated)|Restart after killing the ancient, etc.|❌
[void ResetGameTime()](ResetGameTime)|Restart gametime from 0|❌
[void ResetToCustomGameSetup()](ResetToCustomGameSetup)|Restart at custom game setup.|❌
[void ResetToHeroSelection()](ResetToHeroSelection)|Restart the game at hero selection|❌
[void SendCustomMessage(string_1, int_2, int_3)](SendCustomMessage)|Sends a message on behalf of a player.|❌
[void SendCustomMessageToTeam(string_1, int_2, int_3, int_4)](SendCustomMessageToTeam)|Sends a message on behalf of a player to the specified team.|❌
[void SetCreepMinimapIconScale(float_1)](SetCreepMinimapIconScale)|(flMinimapCreepIconScale) - Scale the creep icons on the minimap.|❌
[void SetCreepSpawningEnabled(bool_1)](SetCreepSpawningEnabled)|Sets whether the regular Dota creeps spawn.|❌
[void SetCustomGameAccountRecordSaveFunction(handle_1, handle_2)](SetCustomGameAccountRecordSaveFunction)|(Preview/Unreleased) Sets a callback to handle saving custom game account records (callback is passed a Player ID and should return a flat simple table)|❌
[void SetCustomGameAllowBattleMusic(bool_1)](SetCustomGameAllowBattleMusic)|Sets a flag to enable/disable the default music handling code for custom games|❌
[void SetCustomGameAllowHeroPickMusic(bool_1)](SetCustomGameAllowHeroPickMusic)|Sets a flag to enable/disable the default music handling code for custom games|❌
[void SetCustomGameAllowMusicAtGameStart(bool_1)](SetCustomGameAllowMusicAtGameStart)|Sets a flag to enable/disable the default music handling code for custom games|❌
[void SetCustomGameDifficulty(int_1)](SetCustomGameDifficulty)|Set the difficulty level of the custom game mode|❌
[void SetCustomGameEndDelay(float_1)](SetCustomGameEndDelay)|Sets the game end delay.|❌
[void SetCustomGameSetupAutoLaunchDelay(float_1)](SetCustomGameSetupAutoLaunchDelay)|Set the amount of time to wait for auto launch.|❌
[void SetCustomGameSetupRemainingTime(float_1)](SetCustomGameSetupRemainingTime)|Set the amount of remaining time, in seconds, for custom game setup. 0 = finish immediately, -1 = wait forever|❌
[void SetCustomGameSetupTimeout(float_1)](SetCustomGameSetupTimeout)|Setup (pre-gameplay) phase timeout. 0 = instant, -1 = forever (until FinishCustomGameSetup is called)|❌
[void SetCustomGameTeamMaxPlayers(int_1, int_2)](SetCustomGameTeamMaxPlayers)|Set whether a team is selectable during game setup|❌
[void SetCustomVictoryMessage(string_1)](SetCustomVictoryMessage)|Sets the victory message.|❌
[void SetCustomVictoryMessageDuration(float_1)](SetCustomVictoryMessageDuration)|Sets the victory message duration.|❌
[bool SetEventMetadataCustomTable(handle_1)](SetEventMetadataCustomTable)|Event-only ( table hMetadataTable )|❌
[bool SetEventSignoutCustomTable(handle_1)](SetEventSignoutCustomTable)|Event-only ( table hMetadataTable )|❌
[void SetFirstBloodActive(bool_1)](SetFirstBloodActive)|Sets whether First Blood has been triggered.|❌
[void SetGameTimeFrozen(bool_1)](SetGameTimeFrozen)|Freeze the game time.|❌
[void SetGameWinner(int_1)](SetGameWinner)|Makes the specified team win|❌
[void SetGoldPerTick(int_1)](SetGoldPerTick)|Set the auto gold increase per timed interval.|❌
[void SetGoldTickTime(float_1)](SetGoldTickTime)|Set the time interval between auto gold increases.|❌
[void SetHeroMinimapIconScale(float_1)](SetHeroMinimapIconScale)|(flMinimapHeroIconScale) - Scale the hero minimap icons on the minimap.|❌
[void SetHeroRespawnEnabled(bool_1)](SetHeroRespawnEnabled)|Control if the normal DOTA hero respawn rules apply.|❌
[void SetHeroSelectPenaltyTime(float_1)](SetHeroSelectPenaltyTime)|Sets amount of penalty time before randoming a hero|❌
[void SetHeroSelectionTime(float_1)](SetHeroSelectionTime)|Sets the amount of time players have to pick their hero.|❌
[void SetHideKillMessageHeaders(bool_1)](SetHideKillMessageHeaders)|Sets whether the multikill, streak, and first-blood banners appear at the top of the screen.|❌
[void SetOverlayHealthBarUnit(handle_1, int_2)](SetOverlayHealthBarUnit)|Show this unit's health on the overlay health bar|❌
[void SetPostGameTime(float_1)](SetPostGameTime)|Sets the amount of time players have between the game ending and the server disconnecting them.|❌
[void SetPreGameTime(float_1)](SetPreGameTime)|Sets the amount of time players have between picking their hero and game start.|❌
[void SetRuneMinimapIconScale(float_1)](SetRuneMinimapIconScale)|(flMinimapRuneIconScale) - Scale the rune icons on the minimap.|❌
[void SetRuneSpawnTime(float_1)](SetRuneSpawnTime)|Sets the amount of time between rune spawns.|❌
[void SetSafeToLeave(bool_1)](SetSafeToLeave)|(bSafeToLeave) - Mark this game as safe to leave.|❌
[void SetSameHeroSelectionEnabled(bool_1)](SetSameHeroSelectionEnabled)|When true, players can repeatedly pick the same hero.|❌
[void SetShowcaseTime(float_1)](SetShowcaseTime)|Sets the amount of time players have between the strategy phase and entering the pre-game phase.|❌
[void SetStartingGold(int_1)](SetStartingGold)|Set the starting gold amount.|❌
[void SetStrategyTime(float_1)](SetStrategyTime)|Sets the amount of time players have between the hero selection and entering the showcase phase.|❌
[void SetTimeOfDay(float_1)](SetTimeOfDay)|Set the time of day.|❌
[void SetTreeRegrowTime(float_1)](SetTreeRegrowTime)|Sets the tree regrow time in seconds.|❌
[void SetUseBaseGoldBountyOnHeroes(bool_1)](SetUseBaseGoldBountyOnHeroes)|Heroes will use the basic NPC functionality for determining their bounty, rather than DOTA specific formulas.|❌
[void SetUseCustomHeroXPValues(bool_1)](SetUseCustomHeroXPValues)|Allows heroes in the map to give a specific amount of XP (this value must be set).|❌
[void SetUseUniversalShopMode(bool_1)](SetUseUniversalShopMode)|When true, all items are available at as long as any shop is in range.|❌
[void SetWeatherWindDirection(Vector_1)](SetWeatherWindDirection)|Set Weather Wind Direction Vector|❌
[void SetWhiteListEnabled(bool_1)](SetWhiteListEnabled)|Item whitelist functionality enable/disable|❌
[void SpawnAndReleaseCreeps()](SpawnAndReleaseCreeps)|Spawn and release the next creep wave from Dota lane style spawners.|❌
[void SpawnNeutralCreeps()](SpawnNeutralCreeps)|Spawn and release the next set of neutral camps.|❌
[int State_Get()](State_Get)|Get the current Gamerules state|✔️
