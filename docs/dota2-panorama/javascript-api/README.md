---
sidebar: auto
---
# Javascript API
## CPanoramaScript_GameEvents
Function|Signature|Description
--|--|--
Subscribe|GameEvents.Subscribe( cstring pEventName, js_value funcVal )|Subscribe to a game event
Unsubscribe|GameEvents.Unsubscribe( integer nCallbackHandle )|Unsubscribe from a game event
SendCustomGameEventToServer|GameEvents.SendCustomGameEventToServer( cstring pEventName, js_object jsObject )|Send a custom game event to the server
SendCustomGameEventToAllClients|GameEvents.SendCustomGameEventToAllClients( cstring pEventName, js_object jsObject )|Send a custom game event to the server, which will send it to all clients
SendCustomGameEventToClient|GameEvents.SendCustomGameEventToClient( cstring pEventName, integer playerIndex, js_object jsObject )|Send a custom game event to the server, which will then send it to one client
SendEventClientSide|GameEvents.SendEventClientSide( cstring pEventName, js_object jsObject )|Send a client-side event using gameeventmanager (only useful for a few specific events)
## CPanoramaScript_CustomNetTables
Function|Signature|Description
--|--|--
GetTableValue|CustomNetTables.GetTableValue( cstring pTableName, cstring pKeyName )|Get a key from a custom net table
GetAllTableValues|CustomNetTables.GetAllTableValues( cstring pTableName )|Get all values from a custom net table
SubscribeNetTableListener|CustomNetTables.SubscribeNetTableListener( js_raw_args args )|Register a callback when a particular custom net table changes
UnsubscribeNetTableListener|CustomNetTables.UnsubscribeNetTableListener( integer nCallbackHandle )|Unsubscribe from a game event
## CPanoramaScript_SteamUGC
Function|Signature|Description
--|--|--
SubscribeItem|SteamUGC.SubscribeItem( cstring pPublishedFileID, js_value funcVal )|Subscribe to a piece of UGC
UnsubscribeItem|SteamUGC.UnsubscribeItem( cstring pPublishedFileID, js_value funcVal )|Unsubscribe from a piece of UGC
GetSubscriptionInfo|SteamUGC.GetSubscriptionInfo( cstring pPublishedFileID )|Get a key from a custom net table
SetUserItemVote|SteamUGC.SetUserItemVote( cstring pPublishedFileID, boolean bVoteUp, js_value funcVal )|Vote on a piece of UGC
GetUserItemVote|SteamUGC.GetUserItemVote( cstring pPublishedFileID, js_value funcVal )|Get the user's vote on a piece of UGC
AddToFavorites|SteamUGC.AddToFavorites( cstring pPublishedFileID, js_value funcVal )|Add an item to the user's favorites list
RemoveFromFavorites|SteamUGC.RemoveFromFavorites( cstring pPublishedFileID, js_value funcVal )|Remove an item from the user's favorites list
CreateQueryAllUGCRequest|SteamUGC.CreateQueryAllUGCRequest( integer eQueryType, integer eMatchingeMatchingUGCTypeFileType, unsigned unPage )|Create a request to query Steam for all UGC
CreateQueryUGCDetailsRequest|SteamUGC.CreateQueryUGCDetailsRequest( js_array jsArray )|Create a request to query Steam for specific UGC
AddRequiredTagToQuery|SteamUGC.AddRequiredTagToQuery( integer handle, cstring pchTag )|Adds a required tag to the query
AddExcludedTagToQuery|SteamUGC.AddExcludedTagToQuery( integer handle, cstring pchTag )|Adds an excluded tag to the query
ConfigureQuery|SteamUGC.ConfigureQuery( integer handle, js_object jsObject )|Adds a required tag to the query
SendUGCQuery|SteamUGC.SendUGCQuery( integer handle, js_value funcVal )|Sends the prepared query
RegisterDownloadItemResultCallback|SteamUGC.RegisterDownloadItemResultCallback( cstring pPublishedFileID, js_value funcVal )|Register a callback to be called when the item is downloaded
## CPanoramaScript_SteamFriends
Function|Signature|Description
--|--|--
RequestPersonaName|SteamFriends.RequestPersonaName( cstring pchSteamID, js_value funcVal )|Requests the user's persona name
SetLargeAvatarImage|SteamFriends.SetLargeAvatarImage( js_raw_args args )|Sets the avatar image on the image panel
## CPanoramaScript_SteamUtils
Function|Signature|Description
--|--|--
GetConnectedUniverse|SteamUtils.GetConnectedUniverse()|Returns the connected universe
GetAppID|SteamUtils.GetAppID()|Returns the appid of the current app
## CPanoramaScript_VRUtils
Function|Signature|Description
--|--|--
GetVRAppPropertyData|VRUtils.GetVRAppPropertyData( unsigned nAppID )|Get application properties for a VR app with the specified appID
LaunchSteamApp|VRUtils.LaunchSteamApp( unsigned nAppID, cstring pszLaunchSource )|Launches a Steam application using OpenVR.
## CScriptBindingPR_Buffs
Function|Signature|Description
--|--|--
GetName|Buffs.GetName( integer nEntity, integer nBuff )|
GetClass|Buffs.GetClass( integer nEntity, integer nBuff )|
GetTexture|Buffs.GetTexture( integer nEntity, integer nBuff )|
GetDuration|Buffs.GetDuration( integer nEntity, integer nBuff )|
GetDieTime|Buffs.GetDieTime( integer nEntity, integer nBuff )|
GetRemainingTime|Buffs.GetRemainingTime( integer nEntity, integer nBuff )|
GetElapsedTime|Buffs.GetElapsedTime( integer nEntity, integer nBuff )|
GetCreationTime|Buffs.GetCreationTime( integer nEntity, integer nBuff )|
GetStackCount|Buffs.GetStackCount( integer nEntity, integer nBuff )|
IsDebuff|Buffs.IsDebuff( integer nEntity, integer nBuff )|
IsHidden|Buffs.IsHidden( integer nEntity, integer nBuff )|
GetCaster|Buffs.GetCaster( integer nEntity, integer nBuff )|Get the owner of the ability responsible for the modifier.
GetParent|Buffs.GetParent( integer nEntity, integer nBuff )|Get the unit the modifier is parented to.
GetAbility|Buffs.GetAbility( integer nEntity, integer nBuff )|Get the ability that generated the modifier.
## CScriptBindingPR_Players
Function|Signature|Description
--|--|--
GetMaxPlayers|Players.GetMaxPlayers()|Get the maximum number of players in the game.
GetMaxTeamPlayers|Players.GetMaxTeamPlayers()|Get the maximum number of players on teams.
GetLocalPlayer|Players.GetLocalPlayer()|Get the local player ID.
IsValidPlayerID|Players.IsValidPlayerID( integer iPlayerID )|Is the nth player a valid player?
GetPlayerName|Players.GetPlayerName( integer iPlayerID )|Return the name of a player.
GetPlayerHeroEntityIndex|Players.GetPlayerHeroEntityIndex( integer iPlayerID )|Get the entity index of the hero controlled by this player.
GetSelectedEntities|Players.GetSelectedEntities( integer iPlayerID )|Get the entities this player has selected.
GetQueryUnit|Players.GetQueryUnit( integer iPlayerID )|Get the entities this player is querying.
GetLocalPlayerPortraitUnit|Players.GetLocalPlayerPortraitUnit()|Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
CanPlayerBuyback|Players.CanPlayerBuyback( integer iPlayerID )|Can the player buy back?
HasCustomGameTicketForPlayerID|Players.HasCustomGameTicketForPlayerID( integer iPlayerID )|Does this player have a custom game ticket?
GetAssists|Players.GetAssists( integer iPlayerID )|The number of assists credited to a player.
GetClaimedDenies|Players.GetClaimedDenies( integer iPlayerID )|
GetClaimedMisses|Players.GetClaimedMisses( integer iPlayerID )|
GetDeaths|Players.GetDeaths( integer iPlayerID )|The number of deaths a player has suffered.
GetDenies|Players.GetDenies( integer iPlayerID )|The number of denies credited to a player.
GetGold|Players.GetGold( integer iPlayerID )|The amount of gold a player has.
GetKills|Players.GetKills( integer iPlayerID )|The number of kills credited to a player.
GetLastBuybackTime|Players.GetLastBuybackTime( integer iPlayerID )|
GetLastHitMultikill|Players.GetLastHitMultikill( integer iPlayerID )|
GetLastHits|Players.GetLastHits( integer iPlayerID )|The number of last hits credited to a player.
GetLastHitStreak|Players.GetLastHitStreak( integer iPlayerID )|
GetLevel|Players.GetLevel( integer iPlayerID )|The current level of a player.
GetMisses|Players.GetMisses( integer iPlayerID )|
GetNearbyCreepDeaths|Players.GetNearbyCreepDeaths( integer iPlayerID )|
GetReliableGold|Players.GetReliableGold( integer iPlayerID )|Total reliable gold for this player.
GetRespawnSeconds|Players.GetRespawnSeconds( integer iPlayerID )|
GetStreak|Players.GetStreak( integer iPlayerID )|
GetTotalEarnedGold|Players.GetTotalEarnedGold( integer iPlayerID )|Total gold earned in this game by this player.
GetTotalEarnedXP|Players.GetTotalEarnedXP( integer iPlayerID )|Total xp earned in this game by this player.
GetUnreliableGold|Players.GetUnreliableGold( integer iPlayerID )|Total unreliable gold for this player.
GetTeam|Players.GetTeam( integer iPlayerID )|Get the team this player is on.
GetGoldPerMin|Players.GetGoldPerMin( integer iPlayerID )|Average gold earned per minute for this player.
GetXPPerMin|Players.GetXPPerMin( integer iPlayerID )|Average xp earned per minute for this player.
GetPlayerSelectedHero|Players.GetPlayerSelectedHero( integer iPlayerID )|Return the name of the hero a player is controlling.
GetPlayerColor|Players.GetPlayerColor( integer iPlayerID )|Get the player color.
IsSpectator|Players.IsSpectator( integer iPlayerID )|Is this player a spectator.
PlayerPortraitClicked|Players.PlayerPortraitClicked( integer nClickedPlayerID, boolean bHoldingCtrl, boolean bHoldingAlt )|.
BuffClicked|Players.BuffClicked( integer nEntity, integer nBuffSerial, boolean bAlert )|.
IsLocalPlayerInPerspectiveCamera|Players.IsLocalPlayerInPerspectiveCamera()|If player is in perspective camera, returns true. Else, false
GetPerspectivePlayerEntityIndex|Players.GetPerspectivePlayerEntityIndex()|If player is in perspective mode, returns the followed players entity index.  Else, -1.
GetPerspectivePlayerId|Players.GetPerspectivePlayerId()|If player is in perspective mode, returns the followed players id.  Else, -1.
## CScriptBindingPR_Entities
Function|Signature|Description
--|--|--
GetAbsOrigin|Entities.GetAbsOrigin( integer nEntityIndex )|Get the world origin of the entity.
GetForward|Entities.GetForward( integer nEntityIndex )|Get the forward vector of the entity.
GetRight|Entities.GetRight( integer nEntityIndex )|Get the right vector of the entity.
GetUp|Entities.GetUp( integer nEntityIndex )|Get the up vector of the entity.
GetAllBuildingEntities|Entities.GetAllBuildingEntities()|Get all the building entities.
GetAllHeroEntities|Entities.GetAllHeroEntities()|Get all the hero entities.
GetAllEntitiesByName|Entities.GetAllEntitiesByName( cstring pszName )|Get all the entities with a given name.
GetAllEntitiesByClassname|Entities.GetAllEntitiesByClassname( cstring pszName )|Get all the entities with a given classname.
GetAllCreatureEntities|Entities.GetAllCreatureEntities()|Get all the creature entities.
GetAllEntities|Entities.GetAllEntities()|Get all the entities.
CanBeDominated|Entities.CanBeDominated( integer nEntityIndex )|
HasAttackCapability|Entities.HasAttackCapability( integer nEntityIndex )|
HasCastableAbilities|Entities.HasCastableAbilities( integer nEntityIndex )|
HasFlyingVision|Entities.HasFlyingVision( integer nEntityIndex )|
HasFlyMovementCapability|Entities.HasFlyMovementCapability( integer nEntityIndex )|
HasGroundMovementCapability|Entities.HasGroundMovementCapability( integer nEntityIndex )|
HasMovementCapability|Entities.HasMovementCapability( integer nEntityIndex )|
HasScepter|Entities.HasScepter( integer nEntityIndex )|
HasUpgradeableAbilities|Entities.HasUpgradeableAbilities( integer nEntityIndex )|
HasUpgradeableAbilitiesThatArentMaxed|Entities.HasUpgradeableAbilitiesThatArentMaxed( integer nEntityIndex )|
IsAlive|Entities.IsAlive( integer nEntityIndex )|
IsAncient|Entities.IsAncient( integer nEntityIndex )|
IsAttackImmune|Entities.IsAttackImmune( integer nEntityIndex )|
IsBarracks|Entities.IsBarracks( integer nEntityIndex )|
IsBlind|Entities.IsBlind( integer nEntityIndex )|
IsBoss|Entities.IsBoss( integer nEntityIndex )|
IsRoshan|Entities.IsRoshan( integer nEntityIndex )|
IsBuilding|Entities.IsBuilding( integer nEntityIndex )|
IsCommandRestricted|Entities.IsCommandRestricted( integer nEntityIndex )|
IsConsideredHero|Entities.IsConsideredHero( integer nEntityIndex )|
IsControllableByAnyPlayer|Entities.IsControllableByAnyPlayer( integer nEntityIndex )|
IsCourier|Entities.IsCourier( integer nEntityIndex )|
IsCreature|Entities.IsCreature( integer nEntityIndex )|
IsCreep|Entities.IsCreep( integer nEntityIndex )|
IsCreepHero|Entities.IsCreepHero( integer nEntityIndex )|
IsDeniable|Entities.IsDeniable( integer nEntityIndex )|
IsDominated|Entities.IsDominated( integer nEntityIndex )|
IsEnemy|Entities.IsEnemy( integer nEntityIndex )|
IsEvadeDisabled|Entities.IsEvadeDisabled( integer nEntityIndex )|
IsFort|Entities.IsFort( integer nEntityIndex )|
IsFrozen|Entities.IsFrozen( integer nEntityIndex )|
IsGeneratedByEconItem|Entities.IsGeneratedByEconItem( integer nEntityIndex )|
IsHallofFame|Entities.IsHallofFame( integer nEntityIndex )|
IsDisarmed|Entities.IsDisarmed( integer nEntityIndex )|
IsHero|Entities.IsHero( integer nEntityIndex )|
IsHexed|Entities.IsHexed( integer nEntityIndex )|
IsIllusion|Entities.IsIllusion( integer nEntityIndex )|
IsInRangeOfFountain|Entities.IsInRangeOfFountain( integer nEntityIndex )|
IsInventoryEnabled|Entities.IsInventoryEnabled( integer nEntityIndex )|
IsInvisible|Entities.IsInvisible( integer nEntityIndex )|
IsInvulnerable|Entities.IsInvulnerable( integer nEntityIndex )|
IsLaneCreep|Entities.IsLaneCreep( integer nEntityIndex )|
IsLowAttackPriority|Entities.IsLowAttackPriority( integer nEntityIndex )|
IsMagicImmune|Entities.IsMagicImmune( integer nEntityIndex )|
IsMuted|Entities.IsMuted( integer nEntityIndex )|
IsNeutralUnitType|Entities.IsNeutralUnitType( integer nEntityIndex )|
IsNightmared|Entities.IsNightmared( integer nEntityIndex )|
IsOther|Entities.IsOther( integer nEntityIndex )|
IsOutOfGame|Entities.IsOutOfGame( integer nEntityIndex )|
IsOwnedByAnyPlayer|Entities.IsOwnedByAnyPlayer( integer nEntityIndex )|
IsPhantom|Entities.IsPhantom( integer nEntityIndex )|
IsRangedAttacker|Entities.IsRangedAttacker( integer nEntityIndex )|
IsRealHero|Entities.IsRealHero( integer nEntityIndex )|
IsRooted|Entities.IsRooted( integer nEntityIndex )|
IsSelectable|Entities.IsSelectable( integer nEntityIndex )|
IsShop|Entities.IsShop( integer nEntityIndex )|
IsSilenced|Entities.IsSilenced( integer nEntityIndex )|
IsSpeciallyDeniable|Entities.IsSpeciallyDeniable( integer nEntityIndex )|
IsStunned|Entities.IsStunned( integer nEntityIndex )|
IsSummoned|Entities.IsSummoned( integer nEntityIndex )|
IsTower|Entities.IsTower( integer nEntityIndex )|
IsUnselectable|Entities.IsUnselectable( integer nEntityIndex )|
IsWard|Entities.IsWard( integer nEntityIndex )|
IsZombie|Entities.IsZombie( integer nEntityIndex )|
NoHealthBar|Entities.NoHealthBar( integer nEntityIndex )|
NoTeamMoveTo|Entities.NoTeamMoveTo( integer nEntityIndex )|
NoTeamSelect|Entities.NoTeamSelect( integer nEntityIndex )|
NotOnMinimap|Entities.NotOnMinimap( integer nEntityIndex )|
NotOnMinimapForEnemies|Entities.NotOnMinimapForEnemies( integer nEntityIndex )|
NoUnitCollision|Entities.NoUnitCollision( integer nEntityIndex )|
PassivesDisabled|Entities.PassivesDisabled( integer nEntityIndex )|
ProvidesVision|Entities.ProvidesVision( integer nEntityIndex )|
UsesHeroAbilityNumbers|Entities.UsesHeroAbilityNumbers( integer nEntityIndex )|
IsMoving|Entities.IsMoving( integer nEntityIndex )|
GetAbilityCount|Entities.GetAbilityCount( integer nEntityIndex )|
GetCombatClassAttack|Entities.GetCombatClassAttack( integer nEntityIndex )|
GetCombatClassDefend|Entities.GetCombatClassDefend( integer nEntityIndex )|
GetCurrentVisionRange|Entities.GetCurrentVisionRange( integer nEntityIndex )|
GetDamageBonus|Entities.GetDamageBonus( integer nEntityIndex )|
GetDamageMax|Entities.GetDamageMax( integer nEntityIndex )|
GetDamageMin|Entities.GetDamageMin( integer nEntityIndex )|
GetDayTimeVisionRange|Entities.GetDayTimeVisionRange( integer nEntityIndex )|
GetHealth|Entities.GetHealth( integer nEntityIndex )|
GetHealthPercent|Entities.GetHealthPercent( integer nEntityIndex )|
GetHealthThinkRegen|Entities.GetHealthThinkRegen( integer nEntityIndex )|
GetLevel|Entities.GetLevel( integer nEntityIndex )|
GetMaxHealth|Entities.GetMaxHealth( integer nEntityIndex )|
GetNightTimeVisionRange|Entities.GetNightTimeVisionRange( integer nEntityIndex )|
GetPlayerOwnerID|Entities.GetPlayerOwnerID( integer nEntityIndex )|
GetStates|Entities.GetStates( integer nEntityIndex )|
GetTotalPurchasedUpgradeGoldCost|Entities.GetTotalPurchasedUpgradeGoldCost( integer nEntityIndex )|
GetTeamNumber|Entities.GetTeamNumber( integer nEntityIndex )|
GetHealthBarOffset|Entities.GetHealthBarOffset( integer nEntityIndex )|
GetAttackRange|Entities.GetAttackRange( integer nEntityIndex )|
GetAttackSpeed|Entities.GetAttackSpeed( integer nEntityIndex )|
GetAttacksPerSecond|Entities.GetAttacksPerSecond( integer nEntityIndex )|
GetBaseAttackTime|Entities.GetBaseAttackTime( integer nEntityIndex )|
GetBaseMagicalResistanceValue|Entities.GetBaseMagicalResistanceValue( integer nEntityIndex )|
GetBaseMoveSpeed|Entities.GetBaseMoveSpeed( integer nEntityIndex )|
GetBonusPhysicalArmor|Entities.GetBonusPhysicalArmor( integer nEntityIndex )|
GetCollisionPadding|Entities.GetCollisionPadding( integer nEntityIndex )|
GetEffectiveInvisibilityLevel|Entities.GetEffectiveInvisibilityLevel( integer nEntityIndex )|
GetHasteFactor|Entities.GetHasteFactor( integer nEntityIndex )|
GetHullRadius|Entities.GetHullRadius( integer nEntityIndex )|
GetIdealSpeed|Entities.GetIdealSpeed( integer nEntityIndex )|
GetIncreasedAttackSpeed|Entities.GetIncreasedAttackSpeed( integer nEntityIndex )|
GetMana|Entities.GetMana( integer nEntityIndex )|
GetManaThinkRegen|Entities.GetManaThinkRegen( integer nEntityIndex )|
GetMaxMana|Entities.GetMaxMana( integer nEntityIndex )|
GetMagicalArmorValue|Entities.GetMagicalArmorValue( integer nEntityIndex )|
GetPaddedCollisionRadius|Entities.GetPaddedCollisionRadius( integer nEntityIndex )|
GetPercentInvisible|Entities.GetPercentInvisible( integer nEntityIndex )|
GetPhysicalArmorValue|Entities.GetPhysicalArmorValue( integer nEntityIndex )|
GetProjectileCollisionSize|Entities.GetProjectileCollisionSize( integer nEntityIndex )|
GetRingRadius|Entities.GetRingRadius( integer nEntityIndex )|
GetSecondsPerAttack|Entities.GetSecondsPerAttack( integer nEntityIndex )|
ManaFraction|Entities.ManaFraction( integer nEntityIndex )|
GetClassname|Entities.GetClassname( integer nEntityIndex )|
GetDisplayedUnitName|Entities.GetDisplayedUnitName( integer nEntityIndex )|
GetSelectionGroup|Entities.GetSelectionGroup( integer nEntityIndex )|
GetSoundSet|Entities.GetSoundSet( integer nEntityIndex )|
GetUnitLabel|Entities.GetUnitLabel( integer nEntityIndex )|
GetUnitName|Entities.GetUnitName( integer nEntityIndex )|
GetTotalDamageTaken|Entities.GetTotalDamageTaken( integer nEntityIndex )|
IsControllableByPlayer|Entities.IsControllableByPlayer( integer nEntityIndex, integer nPlayerIndex )|
GetChosenTarget|Entities.GetChosenTarget( integer nEntityIndex )|
HasItemInInventory|Entities.HasItemInInventory( integer nEntityIndex, cstring pItemName )|
GetRangeToUnit|Entities.GetRangeToUnit( integer nEntityIndex, integer nEntityIndex2 )|
IsEntityInRange|Entities.IsEntityInRange( integer nEntityIndex, integer nEntityIndex2, float flRange )|
GetMoveSpeedModifier|Entities.GetMoveSpeedModifier( integer nEntityIndex, float flBaseSpeed )|
CanAcceptTargetToAttack|Entities.CanAcceptTargetToAttack( integer nEntityIndex, integer nEntityIndex2 )|
InState|Entities.InState( integer nEntityIndex, integer nState )|
GetArmorForDamageType|Entities.GetArmorForDamageType( integer nEntityIndex, integer iDamageType )|
GetArmorReductionForDamageType|Entities.GetArmorReductionForDamageType( integer nEntityIndex, integer iDamageType )|
IsInRangeOfShop|Entities.IsInRangeOfShop( integer nEntityIndex, integer iShopType, boolean bSpecific )|
GetNumItemsInStash|Entities.GetNumItemsInStash( integer nEntityIndex )|
GetNumItemsInInventory|Entities.GetNumItemsInInventory( integer nEntityIndex )|
GetItemInSlot|Entities.GetItemInSlot( integer nEntityIndex, integer nSlotIndex )|
GetAbility|Entities.GetAbility( integer nEntityIndex, integer nSlotIndex )|
GetAbilityByName|Entities.GetAbilityByName( integer nEntityIndex, cstring pszAbilityName )|
GetNumBuffs|Entities.GetNumBuffs( integer nEntityIndex )|
GetBuff|Entities.GetBuff( integer nEntityIndex, integer nBufIndex )|
GetAbilityPoints|Entities.GetAbilityPoints( integer nEntityIndex )|
GetCurrentXP|Entities.GetCurrentXP( integer nEntityIndex )|
GetNeededXPToLevel|Entities.GetNeededXPToLevel( integer nEntityIndex )|
GetSelectionEntities|Entities.GetSelectionEntities( integer nEntityIndex )|Get the currently selected entities
IsValidEntity|Entities.IsValidEntity( integer nEntityIndex )|Is this a valid entity index?
IsItemPhysical|Entities.IsItemPhysical( integer nEntityIndex )|Is this entity an item container in the world?
GetContainedItem|Entities.GetContainedItem( integer nEntityIndex )|Get the item contained in this physical item container.
## CScriptBindingPR_Abilities
Function|Signature|Description
--|--|--
GetAbilityName|Abilities.GetAbilityName( integer nEntityIndex )|
GetAbilityTextureName|Abilities.GetAbilityTextureName( integer nEntityIndex )|
GetAssociatedPrimaryAbilities|Abilities.GetAssociatedPrimaryAbilities( integer nEntityIndex )|
GetAssociatedSecondaryAbilities|Abilities.GetAssociatedSecondaryAbilities( integer nEntityIndex )|
GetHotkeyOverride|Abilities.GetHotkeyOverride( integer nEntityIndex )|
GetIntrinsicModifierName|Abilities.GetIntrinsicModifierName( integer nEntityIndex )|
GetSharedCooldownName|Abilities.GetSharedCooldownName( integer nEntityIndex )|
AbilityReady|Abilities.AbilityReady( integer nEntityIndex )|
CanAbilityBeUpgraded|Abilities.CanAbilityBeUpgraded( integer nEntityIndex )|Returns an AbilityLearnResult_t
CanBeExecuted|Abilities.CanBeExecuted( integer nEntityIndex )|
GetAbilityDamage|Abilities.GetAbilityDamage( integer nEntityIndex )|
GetAbilityDamageType|Abilities.GetAbilityDamageType( integer nEntityIndex )|
GetAbilityTargetFlags|Abilities.GetAbilityTargetFlags( integer nEntityIndex )|
GetAbilityTargetTeam|Abilities.GetAbilityTargetTeam( integer nEntityIndex )|
GetAbilityTargetType|Abilities.GetAbilityTargetType( integer nEntityIndex )|
GetAbilityType|Abilities.GetAbilityType( integer nEntityIndex )|
GetBehavior|Abilities.GetBehavior( integer nEntityIndex )|
GetCastRange|Abilities.GetCastRange( integer nEntityIndex )|
GetChannelledManaCostPerSecond|Abilities.GetChannelledManaCostPerSecond( integer nEntityIndex )|
GetCurrentCharges|Abilities.GetCurrentCharges( integer nEntityIndex )|
GetEffectiveLevel|Abilities.GetEffectiveLevel( integer nEntityIndex )|
GetHeroLevelRequiredToUpgrade|Abilities.GetHeroLevelRequiredToUpgrade( integer nEntityIndex )|
GetLevel|Abilities.GetLevel( integer nEntityIndex )|
GetManaCost|Abilities.GetManaCost( integer nEntityIndex )|
GetMaxLevel|Abilities.GetMaxLevel( integer nEntityIndex )|
AttemptToUpgrade|Abilities.AttemptToUpgrade( integer nEntityIndex )|
CanLearn|Abilities.CanLearn( integer nEntityIndex )|
GetAutoCastState|Abilities.GetAutoCastState( integer nEntityIndex )|
GetToggleState|Abilities.GetToggleState( integer nEntityIndex )|
HasScepterUpgradeTooltip|Abilities.HasScepterUpgradeTooltip( integer nEntityIndex )|
IsActivated|Abilities.IsActivated( integer nEntityIndex )|
IsActivatedChanging|Abilities.IsActivatedChanging( integer nEntityIndex )|
IsAttributeBonus|Abilities.IsAttributeBonus( integer nEntityIndex )|
IsAutocast|Abilities.IsAutocast( integer nEntityIndex )|
IsCooldownReady|Abilities.IsCooldownReady( integer nEntityIndex )|
IsDisplayedAbility|Abilities.IsDisplayedAbility( integer nEntityIndex )|
IsHidden|Abilities.IsHidden( integer nEntityIndex )|
IsHiddenWhenStolen|Abilities.IsHiddenWhenStolen( integer nEntityIndex )|
IsInAbilityPhase|Abilities.IsInAbilityPhase( integer nEntityIndex )|
IsItem|Abilities.IsItem( integer nEntityIndex )|
IsMarkedAsDirty|Abilities.IsMarkedAsDirty( integer nEntityIndex )|
IsMuted|Abilities.IsMuted( integer nEntityIndex )|
IsOnCastbar|Abilities.IsOnCastbar( integer nEntityIndex )|
IsOnLearnbar|Abilities.IsOnLearnbar( integer nEntityIndex )|
IsOwnersGoldEnough|Abilities.IsOwnersGoldEnough( integer nEntityIndex )|
IsOwnersGoldEnoughForUpgrade|Abilities.IsOwnersGoldEnoughForUpgrade( integer nEntityIndex )|
IsOwnersManaEnough|Abilities.IsOwnersManaEnough( integer nEntityIndex )|
IsPassive|Abilities.IsPassive( integer nEntityIndex )|
IsRecipe|Abilities.IsRecipe( integer nEntityIndex )|
IsSharedWithTeammates|Abilities.IsSharedWithTeammates( integer nEntityIndex )|
IsStealable|Abilities.IsStealable( integer nEntityIndex )|
IsStolen|Abilities.IsStolen( integer nEntityIndex )|
IsToggle|Abilities.IsToggle( integer nEntityIndex )|
GetAOERadius|Abilities.GetAOERadius( integer nEntityIndex )|
GetBackswingTime|Abilities.GetBackswingTime( integer nEntityIndex )|
GetCastPoint|Abilities.GetCastPoint( integer nEntityIndex )|
GetChannelStartTime|Abilities.GetChannelStartTime( integer nEntityIndex )|
GetChannelTime|Abilities.GetChannelTime( integer nEntityIndex )|
GetCooldown|Abilities.GetCooldown( integer nEntityIndex )|
GetCooldownLength|Abilities.GetCooldownLength( integer nEntityIndex )|
GetCooldownTime|Abilities.GetCooldownTime( integer nEntityIndex )|
GetCooldownTimeRemaining|Abilities.GetCooldownTimeRemaining( integer nEntityIndex )|
GetDuration|Abilities.GetDuration( integer nEntityIndex )|
GetUpgradeBlend|Abilities.GetUpgradeBlend( integer nEntityIndex )|
GetLocalPlayerActiveAbility|Abilities.GetLocalPlayerActiveAbility()|Get the local player's current active ability. (Pre-cast targetting state.)
GetCaster|Abilities.GetCaster( integer nAbilityIndex )|
GetCustomValueFor|Abilities.GetCustomValueFor( integer nAbilityIndex, cstring pszAbilityVarName )|
GetLevelSpecialValueFor|Abilities.GetLevelSpecialValueFor( integer nAbilityIndex, cstring szName, integer nLevel )|
GetSpecialValueFor|Abilities.GetSpecialValueFor( integer nAbilityIndex, cstring szName )|
IsCosmetic|Abilities.IsCosmetic( integer nAbilityIndex, integer nTargetEntityIndex )|
ExecuteAbility|Abilities.ExecuteAbility( integer nAbilityEntIndex, integer nCasterEntIndex, boolean bIsQuickCast )|Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
CreateDoubleTapCastOrder|Abilities.CreateDoubleTapCastOrder( integer nAbilityEntIndex, integer nCasterEntIndex )|Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
PingAbility|Abilities.PingAbility( integer nAbilityIndex )|Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
GetKeybind|Abilities.GetKeybind( integer nAbilityEntIndex )|Returns the keybind (as a string) for the specified ability.
## CScriptBindingPR_Items
Function|Signature|Description
--|--|--
ShouldDisplayCharges|Items.ShouldDisplayCharges( integer nEntityIndex )|
AlwaysDisplayCharges|Items.AlwaysDisplayCharges( integer nEntityIndex )|
ShowSecondaryCharges|Items.ShowSecondaryCharges( integer nEntityIndex )|
CanBeSoldByLocalPlayer|Items.CanBeSoldByLocalPlayer( integer nEntityIndex )|
CanDoubleTapCast|Items.CanDoubleTapCast( integer nEntityIndex )|
ForceHideCharges|Items.ForceHideCharges( integer nEntityIndex )|
IsAlertableItem|Items.IsAlertableItem( integer nEntityIndex )|
IsCastOnPickup|Items.IsCastOnPickup( integer nEntityIndex )|
IsDisassemblable|Items.IsDisassemblable( integer nEntityIndex )|
IsDroppable|Items.IsDroppable( integer nEntityIndex )|
IsInnatelyDisassemblable|Items.IsInnatelyDisassemblable( integer nEntityIndex )|
IsKillable|Items.IsKillable( integer nEntityIndex )|
IsMuted|Items.IsMuted( integer nEntityIndex )|
IsPermanent|Items.IsPermanent( integer nEntityIndex )|
IsPurchasable|Items.IsPurchasable( integer nEntityIndex )|
IsRecipe|Items.IsRecipe( integer nEntityIndex )|
IsRecipeGenerated|Items.IsRecipeGenerated( integer nEntityIndex )|
IsSellable|Items.IsSellable( integer nEntityIndex )|
IsStackable|Items.IsStackable( integer nEntityIndex )|
ProRatesChargesWhenSelling|Items.ProRatesChargesWhenSelling( integer nEntityIndex )|
RequiresCharges|Items.RequiresCharges( integer nEntityIndex )|
CanBeExecuted|Items.CanBeExecuted( integer nEntityIndex )|
GetCost|Items.GetCost( integer nEntityIndex )|
GetCurrentCharges|Items.GetCurrentCharges( integer nEntityIndex )|
GetSecondaryCharges|Items.GetSecondaryCharges( integer nEntityIndex )|
GetDisplayedCharges|Items.GetDisplayedCharges( integer nEntityIndex )|
GetInitialCharges|Items.GetInitialCharges( integer nEntityIndex )|
GetItemColor|Items.GetItemColor( integer nEntityIndex )|
GetShareability|Items.GetShareability( integer nEntityIndex )|
GetAbilityTextureSF|Items.GetAbilityTextureSF( integer nEntityIndex )|
GetAssembledTime|Items.GetAssembledTime( integer nEntityIndex )|
GetPurchaseTime|Items.GetPurchaseTime( integer nEntityIndex )|
GetPurchaser|Items.GetPurchaser( integer nItemID )|
LocalPlayerDisassembleItem|Items.LocalPlayerDisassembleItem( integer nItem )|Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
LocalPlayerDropItemFromStash|Items.LocalPlayerDropItemFromStash( integer nItem )|Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
LocalPlayerItemAlertAllies|Items.LocalPlayerItemAlertAllies( integer nItem )|Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
LocalPlayerMoveItemToStash|Items.LocalPlayerMoveItemToStash( integer nItem )|Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
LocalPlayerSellItem|Items.LocalPlayerSellItem( integer nItem )|Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
## CScriptBindingPR_Game
Function|Signature|Description
--|--|--
Time|Game.Time()|
GetGameTime|Game.GetGameTime()|
GetGameFrameTime|Game.GetGameFrameTime()|
GetDOTATime|Game.GetDOTATime( boolean bIncludePreGame, boolean bIncludeNegativeTime )|
IsGamePaused|Game.IsGamePaused()|
IsInToolsMode|Game.IsInToolsMode()|
IsInBanPhase|Game.IsInBanPhase()|
GetGameWinner|Game.GetGameWinner()|Return the team id of the winning team.
GetStateTransitionTime|Game.GetStateTransitionTime()|
GetCustomGameDifficulty|Game.GetCustomGameDifficulty()|Get the difficulty setting of the game.
IsHUDFlipped|Game.IsHUDFlipped()|Returns true if the user has enabled flipped HUD
GetScreenWidth|Game.GetScreenWidth()|Returns the width of the display.
GetScreenHeight|Game.GetScreenHeight()|Returns the height of the display.
WorldToScreenX|Game.WorldToScreenX( float x, float y, float z )|Converts the specified x,y,z world co-ordinate into an x screen coordinate. Returns -1 if behind the camera
WorldToScreenY|Game.WorldToScreenY( float x, float y, float z )|Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
ScreenXYToWorld|Game.ScreenXYToWorld( integer nX, integer nY )|Converts the specified x, y screen coordinates into a x, y, z world coordinates.
GetKeybindForAbility|Game.GetKeybindForAbility( integer iSlot )|Returns the keybind (as a string) for the requested ability slot.
GetKeybindForInventorySlot|Game.GetKeybindForInventorySlot( integer iSlot )|Returns the keybind (as a string) for the requested inventory slot.
CreateCustomKeyBind|Game.CreateCustomKeyBind( cstring pszKey, cstring pszCommand )|Create a new keybind.
GetNianFightTimeLeft|Game.GetNianFightTimeLeft()|
GetState|Game.GetState()|
GameStateIs|Game.GameStateIs( integer nState )|
GameStateIsBefore|Game.GameStateIsBefore( integer nState )|
GameStateIsAfter|Game.GameStateIsAfter( integer nState )|
AddCommand|Game.AddCommand( cstring pszCommandName, js_value callback, cstring pszDescription, integer nFlags )|
GetLocalPlayerID|Game.GetLocalPlayerID()|
PlayerJoinTeam|Game.PlayerJoinTeam( integer nTeamID )|Assign the local player to the specified team
AutoAssignPlayersToTeams|Game.AutoAssignPlayersToTeams()|Assign the currently unassigned players to teams
ShufflePlayerTeamAssignments|Game.ShufflePlayerTeamAssignments()|Shuffle the team assignments of all of the players currently assigned to a team.
SetRemainingSetupTime|Game.SetRemainingSetupTime( float flSeconds )|Set the remaining seconds in team setup before the game starts. -1 to stop the countdown timer
SetAutoLaunchDelay|Game.SetAutoLaunchDelay( float flSeconds )|Set the amount of time in seconds that will be set as the remaining time when all players are assigned to a team.
SetAutoLaunchEnabled|Game.SetAutoLaunchEnabled( boolean bEnable )|Enable or disable automatically starting the game once all players are assigned to a team
GetAutoLaunchEnabled|Game.GetAutoLaunchEnabled()|Return true of false indicating if automatically starting the game is enabled.
SetTeamSelectionLocked|Game.SetTeamSelectionLocked( boolean bLockTeams )|Lock the team selection preventing players from swiching teams.
GetTeamSelectionLocked|Game.GetTeamSelectionLocked()|Returns true or false to indicate if team selection is locked
GetAllTeamIDs|Game.GetAllTeamIDs()|Get all team IDs
GetAllPlayerIDs|Game.GetAllPlayerIDs()|Get all player IDs
GetUnassignedPlayerIDs|Game.GetUnassignedPlayerIDs()|Get unassigned player IDs
GetPlayerUltimateStateOrTime|Game.GetPlayerUltimateStateOrTime( integer nPlayerID )|Get info about the player hero ultimate ability
IsPlayerMuted|Game.IsPlayerMuted( integer nPlayerID )|Whether the local player has muted text and voice chat for the specified player id
SetPlayerMuted|Game.SetPlayerMuted( integer nPlayerID, boolean bMuted )|Set whether the local player has muted text and voice chat for the specified player id
GetTeamDetails|Game.GetTeamDetails( integer nTeam )|Get detailed information for the given team
GetLocalPlayerInfo|Game.GetLocalPlayerInfo()|Get details for the local player
GetPlayerItems|Game.GetPlayerItems( integer nPlayerID )|Get info about the player items.
GetPlayerInfo|Game.GetPlayerInfo( integer nPlayerID )|Get info about the given player
GetPlayerIDsOnTeam|Game.GetPlayerIDsOnTeam( integer nTeam )|Get player IDs for the given team
ServerCmd|Game.ServerCmd( cstring pMsg )|
SetDotaRefractHeroes|Game.SetDotaRefractHeroes( boolean bEnabled )|
FinishGame|Game.FinishGame()|
Disconnect|Game.Disconnect()|
FindEventMatch|Game.FindEventMatch()|
EmitSound|Game.EmitSound( cstring pSoundEventName )|Emit a sound for the local player. Returns an integer handle that can be passed to StopSound. (Returns 0 on failure.)
StopSound|Game.StopSound( integer nHandle )|Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
IsShopOpen|Game.IsShopOpen()|Ask whether the in game shop is open.
SetCustomShopEntityString|Game.SetCustomShopEntityString( cstring pszCustomShopEntityString )|Set custom shop context.
GetMapInfo|Game.GetMapInfo()|Return information about the current map.
PrepareUnitOrders|Game.PrepareUnitOrders( js_raw_args args )|Orders from the local player - takes a single arguments object that supports: dotaunitorder_t OrderType, ent_index TargetIndex, vector Position, ent_index AbilityIndex, OrderIssuer_t OrderIssuer, ent_index UnitIndex, OrderQueueBehavior_t QueueBehavior, bool ShowEffects.
DropItemAtCursor|Game.DropItemAtCursor( integer nControlledUnitEnt, integer nItemEnt )|Order a unit to drop the specified item at the current cursor location.
Length2D|Game.Length2D( js_value vec1, js_value vec2 )|Calculate 2D length.
Normalized|Game.Normalized( js_value vec )|Returns normalized vector.
EnterAbilityLearnMode|Game.EnterAbilityLearnMode()|
EndAbilityLearnMode|Game.EndAbilityLearnMode()|
IsInAbilityLearnMode|Game.IsInAbilityLearnMode()|
## CDOTA_PanoramaScript_GameUI
Function|Signature|Description
--|--|--
SetDefaultUIEnabled|GameUI.SetDefaultUIEnabled( integer nElementType, boolean bVisible )|Control whether the default UI is enabled
CustomUIConfig|GameUI.CustomUIConfig( js_raw_args args )|Get the current UI configuration
PingMinimapAtLocation|GameUI.PingMinimapAtLocation( js_value vec3 )|Create a minimap ping at the given location
SetMouseCallback|GameUI.SetMouseCallback( js_value callbackFn )|Install a mouse input filter
EnableAliMode|GameUI.EnableAliMode( boolean bEnable, integer nPort, js_value offsetVal, float flScale )|
GetCursorPosition|GameUI.GetCursorPosition( js_raw_args args )|Get the current mouse position.
FindScreenEntities|GameUI.FindScreenEntities( js_raw_args args )|Return the entity index of the entity under the given screen position.
GetScreenWorldPosition|GameUI.GetScreenWorldPosition( js_raw_args args )|Get the world position of the screen position, or null if the cursor is out of the world.
WasMousePressed|GameUI.WasMousePressed( integer nButtonNum )|Install a mouse input filter
WasMouseDoublePressed|GameUI.WasMouseDoublePressed( integer nButtonNum )|Install a mouse input filter
IsMouseDown|GameUI.IsMouseDown( integer nButtonNum )|Install a mouse input filter
IsShiftDown|GameUI.IsShiftDown()|Is the shift button pressed?
IsAltDown|GameUI.IsAltDown()|Is the alt button pressed?
IsControlDown|GameUI.IsControlDown()|Is the control button pressed?
GetClickBehaviors|GameUI.GetClickBehaviors()|Get the current UI click interaction mode.
SelectUnit|GameUI.SelectUnit( integer nEntityIndex, boolean bAddToGroup )|Select a unit, adding it to the group or replacing the current selection.
GetCameraLookAtPosition|GameUI.GetCameraLookAtPosition()|Get the current look at position.
GetCameraLookAtPositionHeightOffset|GameUI.GetCameraLookAtPositionHeightOffset()|Get the current look at position height offset.
SetCameraPitchMin|GameUI.SetCameraPitchMin( float flPitchMin )|Set the minimum camera pitch angle.
SetCameraPitchMax|GameUI.SetCameraPitchMax( float flPitchMax )|Set the maximum camera pitch angle.
SetCameraYaw|GameUI.SetCameraYaw( float flCameraYaw )|Set the camera's yaw.
SetCameraLookAtPositionHeightOffset|GameUI.SetCameraLookAtPositionHeightOffset( float flCameraLookAtHeightOffset )|Offset the camera's look at point.
SetCameraTerrainAdjustmentEnabled|GameUI.SetCameraTerrainAdjustmentEnabled( boolean bEnabled )|Set whether the camera should automatically adjust to average terrain height.
SetCameraDistance|GameUI.SetCameraDistance( float flDistance )|Set the camera distance from the look at point.
SetRenderBottomInsetOverride|GameUI.SetRenderBottomInsetOverride( integer nInset )|Set the gap between the bottom of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
SetRenderTopInsetOverride|GameUI.SetRenderTopInsetOverride( integer nInset )|Set the gap between the top of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
SetCameraTarget|GameUI.SetCameraTarget( integer nTargetEntIndex )|Set the camera target for the local player, or -1 to clear.
SetCameraTargetPosition|GameUI.SetCameraTargetPosition( js_value vec3, float flLerp )|Set the camera target as position for the local player over specified lerp.
WorldToScreenXYClamped|GameUI.WorldToScreenXYClamped( js_value vec3 )|Converts the specified x,y,z world co-ordinate into an x,y screen coordinate. Will clamp position to always be in front of camera.  Position returned as 0->1.0
GetPlayerScoreboardScore|GameUI.GetPlayerScoreboardScore( cstring pszScoreboardName )|Get the current players scoreboard score for the specified zone.
SendCustomHUDError|GameUI.SendCustomHUDError( cstring pszErrorText, cstring pszErrorSound )|Send a custom client side error message with passed string and soundevent.
## CDOTA_PanoramaScript_Particles
Function|Signature|Description
--|--|--
CreateParticle|Particles.CreateParticle( cstring pParticleName, integer nAttachType, integer nEntityToAttach )|Create a particle system
ReleaseParticleIndex|Particles.ReleaseParticleIndex( integer iIndex )|Release a particle system
DestroyParticleEffect|Particles.DestroyParticleEffect( integer iIndex, boolean bDestroyImmediately )|Destroy a particle system
SetParticleControl|Particles.SetParticleControl( integer iIndex, integer iPoint, js_value vPosVal )|Set a control point on a particle system
SetParticleControlForward|Particles.SetParticleControlForward( integer iIndex, integer iPoint, js_value vForwardVal )|Set the orientation on a control point on a particle system
SetParticleAlwaysSimulate|Particles.SetParticleAlwaysSimulate( integer iIndex )|
SetParticleControlEnt|Particles.SetParticleControlEnt( integer iIndex, integer iPoint, integer iEntIndex, integer iAttachType, cstring pszAttachName, js_value vecFallbackPositionVal, boolean bIncludeWearables )|Set a control point to track an entity on a particle system
## CDOTA_PanoramaScript_EventData
Function|Signature|Description
--|--|--
GetEventActionScore|EventData.GetEventActionScore( integer unEventID, integer unActionID )|Get the score of an EventAction
GetPeriodicResourceUsed|EventData.GetPeriodicResourceUsed( integer unPeriodicResourceID )|Get a periodic resource value used
GetPeriodicResourceMax|EventData.GetPeriodicResourceMax( integer unPeriodicResourceID )|Get a periodic resource value max
## CDOTA_PanoramaScript_LocalInventory
Function|Signature|Description
--|--|--
HasItemByDefinition|LocalInventory.HasItemByDefinition( integer nDefIndex )|Does the player have an inventory item of a given item definition index?
## $
Function|Signature|Description
--|--|--
Msg|Msg( js_raw_args js_raw_args_1 )|Log a message
DispatchEvent|DispatchEvent( js_raw_args js_raw_args_1 )|Dispatch an event
DispatchEventAsync|DispatchEventAsync( js_raw_args js_raw_args_1 )|Dispatch an event to occur later
RegisterEventHandler|RegisterEventHandler( js_raw_args js_raw_args_1 )|Register an event handler
RegisterForUnhandledEvent|RegisterForUnhandledEvent( js_raw_args js_raw_args_1 )|Register a handler for an event that is not otherwise handled
UnregisterForUnhandledEvent|UnregisterForUnhandledEvent( js_raw_args js_raw_args_1 )|Remove an unhandled event handler
FindChildInContext|FindChildInContext( js_raw_args js_raw_args_1 )|Find an element
AsyncWebRequest|AsyncWebRequest( js_raw_args js_raw_args_1 )|Make a web request
CreatePanel|CreatePanel( js_raw_args js_raw_args_1 )|Create a new panel
Localize|Localize( js_raw_args js_raw_args_1 )|Localize a string
Language|Language( js_raw_args js_raw_args_1 )|Get the current language
Schedule|Schedule( js_raw_args js_raw_args_1 )|Schedule a function to be called later
CancelScheduled|CancelScheduled( js_raw_args js_raw_args_1 )|Cancelse a scheduled function
GetContextPanel|GetContextPanel( js_raw_args js_raw_args_1 )|Get the current panel context
RegisterKeyBind|RegisterKeyBind( js_raw_args js_raw_args_1 )|Register a key binding
Each|Each( js_raw_args js_raw_args_1 )|Call a function on each given item
DbgIsReloadingScript|DbgIsReloadingScript( js_raw_args js_raw_args_1 )|Call during JS startup code to check if script is being reloaded
## DOTAHeroModelOverlay
Function|Signature|Description
--|--|--
visible|DOTAHeroModelOverlay.visible( boolean boolean_1 )|
enabled|DOTAHeroModelOverlay.enabled( boolean boolean_1 )|
checked|DOTAHeroModelOverlay.checked( boolean boolean_1 )|
defaultfocus|DOTAHeroModelOverlay.defaultfocus( cstring cstring_1 )|
inputnamespace|DOTAHeroModelOverlay.inputnamespace( cstring cstring_1 )|
hittest|DOTAHeroModelOverlay.hittest( boolean boolean_1 )|
hittestchildren|DOTAHeroModelOverlay.hittestchildren( boolean boolean_1 )|
tabindex|DOTAHeroModelOverlay.tabindex( float float_1 )|
selectionpos_x|DOTAHeroModelOverlay.selectionpos_x( float float_1 )|
selectionpos_y|DOTAHeroModelOverlay.selectionpos_y( float float_1 )|
id|DOTAHeroModelOverlay.id()|
layoutfile|DOTAHeroModelOverlay.layoutfile()|
contentwidth|DOTAHeroModelOverlay.contentwidth()|
contentheight|DOTAHeroModelOverlay.contentheight()|
desiredlayoutwidth|DOTAHeroModelOverlay.desiredlayoutwidth()|
desiredlayoutheight|DOTAHeroModelOverlay.desiredlayoutheight()|
actuallayoutwidth|DOTAHeroModelOverlay.actuallayoutwidth()|
actuallayoutheight|DOTAHeroModelOverlay.actuallayoutheight()|
actualxoffset|DOTAHeroModelOverlay.actualxoffset()|
actualyoffset|DOTAHeroModelOverlay.actualyoffset()|
scrolloffset_y|DOTAHeroModelOverlay.scrolloffset_y()|
scrolloffset_x|DOTAHeroModelOverlay.scrolloffset_x()|
actualuiscale_y|DOTAHeroModelOverlay.actualuiscale_y()|
actualuiscale_x|DOTAHeroModelOverlay.actualuiscale_x()|
style|DOTAHeroModelOverlay.style()|
AddClass|DOTAHeroModelOverlay.AddClass( cstring cstring_1 )|
RemoveClass|DOTAHeroModelOverlay.RemoveClass( cstring cstring_1 )|
BHasClass|DOTAHeroModelOverlay.BHasClass( cstring cstring_1 )|
BAscendantHasClass|DOTAHeroModelOverlay.BAscendantHasClass( cstring cstring_1 )|
SetHasClass|DOTAHeroModelOverlay.SetHasClass( cstring cstring_1, boolean boolean_2 )|
ToggleClass|DOTAHeroModelOverlay.ToggleClass( cstring cstring_1 )|
SwitchClass|DOTAHeroModelOverlay.SwitchClass( cstring cstring_1, cstring cstring_2 )|
TriggerClass|DOTAHeroModelOverlay.TriggerClass( cstring cstring_1 )|
ClearPanelEvent|DOTAHeroModelOverlay.ClearPanelEvent( cstring cstring_1 )|
SetDraggable|DOTAHeroModelOverlay.SetDraggable( boolean boolean_1 )|
IsDraggable|DOTAHeroModelOverlay.IsDraggable()|
GetChildCount|DOTAHeroModelOverlay.GetChildCount()|
GetChild|DOTAHeroModelOverlay.GetChild( integer integer_1 )|
GetChildIndex|DOTAHeroModelOverlay.GetChildIndex( unknown_variant_type unknown_variant_type_1 )|
Children|DOTAHeroModelOverlay.Children()|
FindChildrenWithClassTraverse|DOTAHeroModelOverlay.FindChildrenWithClassTraverse( cstring cstring_1 )|
GetParent|DOTAHeroModelOverlay.GetParent()|
SetParent|DOTAHeroModelOverlay.SetParent( unknown_variant_type unknown_variant_type_1 )|
FindChild|DOTAHeroModelOverlay.FindChild( cstring cstring_1 )|
FindChildTraverse|DOTAHeroModelOverlay.FindChildTraverse( cstring cstring_1 )|
FindChildInLayoutFile|DOTAHeroModelOverlay.FindChildInLayoutFile( cstring cstring_1 )|
FindPanelInLayoutFile|DOTAHeroModelOverlay.FindPanelInLayoutFile( cstring cstring_1 )|
RemoveAndDeleteChildren|DOTAHeroModelOverlay.RemoveAndDeleteChildren()|
MoveChildBefore|DOTAHeroModelOverlay.MoveChildBefore( unknown_variant_type unknown_variant_type_1, unknown_variant_type unknown_variant_type_2 )|
MoveChildAfter|DOTAHeroModelOverlay.MoveChildAfter( unknown_variant_type unknown_variant_type_1, unknown_variant_type unknown_variant_type_2 )|
GetPositionWithinWindow|DOTAHeroModelOverlay.GetPositionWithinWindow()|
ApplyStyles|DOTAHeroModelOverlay.ApplyStyles( boolean boolean_1 )|
ClearPropertyFromCode|DOTAHeroModelOverlay.ClearPropertyFromCode( unknown_variant_type unknown_variant_type_1 )|
DeleteAsync|DOTAHeroModelOverlay.DeleteAsync( float float_1 )|
BIsTransparent|DOTAHeroModelOverlay.BIsTransparent()|
BAcceptsInput|DOTAHeroModelOverlay.BAcceptsInput()|
BAcceptsFocus|DOTAHeroModelOverlay.BAcceptsFocus()|
SetFocus|DOTAHeroModelOverlay.SetFocus()|
UpdateFocusInContext|DOTAHeroModelOverlay.UpdateFocusInContext()|
BHasHoverStyle|DOTAHeroModelOverlay.BHasHoverStyle()|
SetAcceptsFocus|DOTAHeroModelOverlay.SetAcceptsFocus( boolean boolean_1 )|
SetDisableFocusOnMouseDown|DOTAHeroModelOverlay.SetDisableFocusOnMouseDown( boolean boolean_1 )|
BHasKeyFocus|DOTAHeroModelOverlay.BHasKeyFocus()|
SetScrollParentToFitWhenFocused|DOTAHeroModelOverlay.SetScrollParentToFitWhenFocused( boolean boolean_1 )|
BScrollParentToFitWhenFocused|DOTAHeroModelOverlay.BScrollParentToFitWhenFocused()|
IsSelected|DOTAHeroModelOverlay.IsSelected()|
BHasDescendantKeyFocus|DOTAHeroModelOverlay.BHasDescendantKeyFocus()|
BLoadLayout|DOTAHeroModelOverlay.BLoadLayout( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
BLoadLayoutFromString|DOTAHeroModelOverlay.BLoadLayoutFromString( js_raw_args js_raw_args_1 )|
LoadLayoutFromStringAsync|DOTAHeroModelOverlay.LoadLayoutFromStringAsync( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
LoadLayoutAsync|DOTAHeroModelOverlay.LoadLayoutAsync( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
BLoadLayoutSnippet|DOTAHeroModelOverlay.BLoadLayoutSnippet( cstring cstring_1 )|
BCreateChildren|DOTAHeroModelOverlay.BCreateChildren( cstring cstring_1 )|
SetTopOfInputContext|DOTAHeroModelOverlay.SetTopOfInputContext( boolean boolean_1 )|
SetDialogVariable|DOTAHeroModelOverlay.SetDialogVariable( cstring cstring_1, cstring cstring_2 )|
SetDialogVariableInt|DOTAHeroModelOverlay.SetDialogVariableInt( cstring cstring_1, integer integer_2 )|
SetDialogVariableTime|DOTAHeroModelOverlay.SetDialogVariableTime( cstring cstring_1, int64 int64_2 )|
ScrollToTop|DOTAHeroModelOverlay.ScrollToTop()|
ScrollToBottom|DOTAHeroModelOverlay.ScrollToBottom()|
ScrollToLeftEdge|DOTAHeroModelOverlay.ScrollToLeftEdge()|
ScrollToRightEdge|DOTAHeroModelOverlay.ScrollToRightEdge()|
ScrollParentToMakePanelFit|DOTAHeroModelOverlay.ScrollParentToMakePanelFit( unknown_variant_type unknown_variant_type_1, boolean boolean_2 )|
BCanSeeInParentScroll|DOTAHeroModelOverlay.BCanSeeInParentScroll()|
GetAttributeInt|DOTAHeroModelOverlay.GetAttributeInt( cstring cstring_1, integer integer_2 )|
GetAttributeString|DOTAHeroModelOverlay.GetAttributeString( cstring cstring_1, cstring cstring_2 )|
GetAttributeUInt32|DOTAHeroModelOverlay.GetAttributeUInt32( cstring cstring_1, unsigned unsigned_2 )|
SetAttributeInt|DOTAHeroModelOverlay.SetAttributeInt( cstring cstring_1, integer integer_2 )|
SetAttributeString|DOTAHeroModelOverlay.SetAttributeString( cstring cstring_1, cstring cstring_2 )|
SetAttributeUInt32|DOTAHeroModelOverlay.SetAttributeUInt32( cstring cstring_1, unsigned unsigned_2 )|
SetInputNamespace|DOTAHeroModelOverlay.SetInputNamespace( cstring cstring_1 )|
RegisterForReadyEvents|DOTAHeroModelOverlay.RegisterForReadyEvents( boolean boolean_1 )|
BReadyForDisplay|DOTAHeroModelOverlay.BReadyForDisplay()|
SetReadyForDisplay|DOTAHeroModelOverlay.SetReadyForDisplay( boolean boolean_1 )|
SetPositionInPixels|DOTAHeroModelOverlay.SetPositionInPixels( float float_1, float float_2, float float_3 )|
Data|DOTAHeroModelOverlay.Data( js_raw_args js_raw_args_1 )|
SetPanelEvent|DOTAHeroModelOverlay.SetPanelEvent( js_raw_args js_raw_args_1 )|
RunScriptInPanelContext|DOTAHeroModelOverlay.RunScriptInPanelContext( js_raw_args js_raw_args_1 )|
rememberchildfocus|DOTAHeroModelOverlay.rememberchildfocus( boolean boolean_1 )|
paneltype|DOTAHeroModelOverlay.paneltype()|
## Panel
Function|Signature|Description
--|--|--
visible|Panel.visible( boolean boolean_1 )|
enabled|Panel.enabled( boolean boolean_1 )|
checked|Panel.checked( boolean boolean_1 )|
defaultfocus|Panel.defaultfocus( cstring cstring_1 )|
inputnamespace|Panel.inputnamespace( cstring cstring_1 )|
hittest|Panel.hittest( boolean boolean_1 )|
hittestchildren|Panel.hittestchildren( boolean boolean_1 )|
tabindex|Panel.tabindex( float float_1 )|
selectionpos_x|Panel.selectionpos_x( float float_1 )|
selectionpos_y|Panel.selectionpos_y( float float_1 )|
id|Panel.id()|
layoutfile|Panel.layoutfile()|
contentwidth|Panel.contentwidth()|
contentheight|Panel.contentheight()|
desiredlayoutwidth|Panel.desiredlayoutwidth()|
desiredlayoutheight|Panel.desiredlayoutheight()|
actuallayoutwidth|Panel.actuallayoutwidth()|
actuallayoutheight|Panel.actuallayoutheight()|
actualxoffset|Panel.actualxoffset()|
actualyoffset|Panel.actualyoffset()|
scrolloffset_y|Panel.scrolloffset_y()|
scrolloffset_x|Panel.scrolloffset_x()|
actualuiscale_y|Panel.actualuiscale_y()|
actualuiscale_x|Panel.actualuiscale_x()|
style|Panel.style()|
AddClass|Panel.AddClass( cstring cstring_1 )|
RemoveClass|Panel.RemoveClass( cstring cstring_1 )|
BHasClass|Panel.BHasClass( cstring cstring_1 )|
BAscendantHasClass|Panel.BAscendantHasClass( cstring cstring_1 )|
SetHasClass|Panel.SetHasClass( cstring cstring_1, boolean boolean_2 )|
ToggleClass|Panel.ToggleClass( cstring cstring_1 )|
SwitchClass|Panel.SwitchClass( cstring cstring_1, cstring cstring_2 )|
TriggerClass|Panel.TriggerClass( cstring cstring_1 )|
ClearPanelEvent|Panel.ClearPanelEvent( cstring cstring_1 )|
SetDraggable|Panel.SetDraggable( boolean boolean_1 )|
IsDraggable|Panel.IsDraggable()|
GetChildCount|Panel.GetChildCount()|
GetChild|Panel.GetChild( integer integer_1 )|
GetChildIndex|Panel.GetChildIndex( unknown_variant_type unknown_variant_type_1 )|
Children|Panel.Children()|
FindChildrenWithClassTraverse|Panel.FindChildrenWithClassTraverse( cstring cstring_1 )|
GetParent|Panel.GetParent()|
SetParent|Panel.SetParent( unknown_variant_type unknown_variant_type_1 )|
FindChild|Panel.FindChild( cstring cstring_1 )|
FindChildTraverse|Panel.FindChildTraverse( cstring cstring_1 )|
FindChildInLayoutFile|Panel.FindChildInLayoutFile( cstring cstring_1 )|
FindPanelInLayoutFile|Panel.FindPanelInLayoutFile( cstring cstring_1 )|
RemoveAndDeleteChildren|Panel.RemoveAndDeleteChildren()|
MoveChildBefore|Panel.MoveChildBefore( unknown_variant_type unknown_variant_type_1, unknown_variant_type unknown_variant_type_2 )|
MoveChildAfter|Panel.MoveChildAfter( unknown_variant_type unknown_variant_type_1, unknown_variant_type unknown_variant_type_2 )|
GetPositionWithinWindow|Panel.GetPositionWithinWindow()|
ApplyStyles|Panel.ApplyStyles( boolean boolean_1 )|
ClearPropertyFromCode|Panel.ClearPropertyFromCode( unknown_variant_type unknown_variant_type_1 )|
DeleteAsync|Panel.DeleteAsync( float float_1 )|
BIsTransparent|Panel.BIsTransparent()|
BAcceptsInput|Panel.BAcceptsInput()|
BAcceptsFocus|Panel.BAcceptsFocus()|
SetFocus|Panel.SetFocus()|
UpdateFocusInContext|Panel.UpdateFocusInContext()|
BHasHoverStyle|Panel.BHasHoverStyle()|
SetAcceptsFocus|Panel.SetAcceptsFocus( boolean boolean_1 )|
SetDisableFocusOnMouseDown|Panel.SetDisableFocusOnMouseDown( boolean boolean_1 )|
BHasKeyFocus|Panel.BHasKeyFocus()|
SetScrollParentToFitWhenFocused|Panel.SetScrollParentToFitWhenFocused( boolean boolean_1 )|
BScrollParentToFitWhenFocused|Panel.BScrollParentToFitWhenFocused()|
IsSelected|Panel.IsSelected()|
BHasDescendantKeyFocus|Panel.BHasDescendantKeyFocus()|
BLoadLayout|Panel.BLoadLayout( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
BLoadLayoutFromString|Panel.BLoadLayoutFromString( js_raw_args js_raw_args_1 )|
LoadLayoutFromStringAsync|Panel.LoadLayoutFromStringAsync( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
LoadLayoutAsync|Panel.LoadLayoutAsync( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
BLoadLayoutSnippet|Panel.BLoadLayoutSnippet( cstring cstring_1 )|
BCreateChildren|Panel.BCreateChildren( cstring cstring_1 )|
SetTopOfInputContext|Panel.SetTopOfInputContext( boolean boolean_1 )|
SetDialogVariable|Panel.SetDialogVariable( cstring cstring_1, cstring cstring_2 )|
SetDialogVariableInt|Panel.SetDialogVariableInt( cstring cstring_1, integer integer_2 )|
SetDialogVariableTime|Panel.SetDialogVariableTime( cstring cstring_1, int64 int64_2 )|
ScrollToTop|Panel.ScrollToTop()|
ScrollToBottom|Panel.ScrollToBottom()|
ScrollToLeftEdge|Panel.ScrollToLeftEdge()|
ScrollToRightEdge|Panel.ScrollToRightEdge()|
ScrollParentToMakePanelFit|Panel.ScrollParentToMakePanelFit( unknown_variant_type unknown_variant_type_1, boolean boolean_2 )|
BCanSeeInParentScroll|Panel.BCanSeeInParentScroll()|
GetAttributeInt|Panel.GetAttributeInt( cstring cstring_1, integer integer_2 )|
GetAttributeString|Panel.GetAttributeString( cstring cstring_1, cstring cstring_2 )|
GetAttributeUInt32|Panel.GetAttributeUInt32( cstring cstring_1, unsigned unsigned_2 )|
SetAttributeInt|Panel.SetAttributeInt( cstring cstring_1, integer integer_2 )|
SetAttributeString|Panel.SetAttributeString( cstring cstring_1, cstring cstring_2 )|
SetAttributeUInt32|Panel.SetAttributeUInt32( cstring cstring_1, unsigned unsigned_2 )|
SetInputNamespace|Panel.SetInputNamespace( cstring cstring_1 )|
RegisterForReadyEvents|Panel.RegisterForReadyEvents( boolean boolean_1 )|
BReadyForDisplay|Panel.BReadyForDisplay()|
SetReadyForDisplay|Panel.SetReadyForDisplay( boolean boolean_1 )|
SetPositionInPixels|Panel.SetPositionInPixels( float float_1, float float_2, float float_3 )|
Data|Panel.Data( js_raw_args js_raw_args_1 )|
SetPanelEvent|Panel.SetPanelEvent( js_raw_args js_raw_args_1 )|
RunScriptInPanelContext|Panel.RunScriptInPanelContext( js_raw_args js_raw_args_1 )|
rememberchildfocus|Panel.rememberchildfocus( boolean boolean_1 )|
paneltype|Panel.paneltype()|
## TabButton
Function|Signature|Description
--|--|--
visible|TabButton.visible( boolean boolean_1 )|
enabled|TabButton.enabled( boolean boolean_1 )|
checked|TabButton.checked( boolean boolean_1 )|
defaultfocus|TabButton.defaultfocus( cstring cstring_1 )|
inputnamespace|TabButton.inputnamespace( cstring cstring_1 )|
hittest|TabButton.hittest( boolean boolean_1 )|
hittestchildren|TabButton.hittestchildren( boolean boolean_1 )|
tabindex|TabButton.tabindex( float float_1 )|
selectionpos_x|TabButton.selectionpos_x( float float_1 )|
selectionpos_y|TabButton.selectionpos_y( float float_1 )|
id|TabButton.id()|
layoutfile|TabButton.layoutfile()|
contentwidth|TabButton.contentwidth()|
contentheight|TabButton.contentheight()|
desiredlayoutwidth|TabButton.desiredlayoutwidth()|
desiredlayoutheight|TabButton.desiredlayoutheight()|
actuallayoutwidth|TabButton.actuallayoutwidth()|
actuallayoutheight|TabButton.actuallayoutheight()|
actualxoffset|TabButton.actualxoffset()|
actualyoffset|TabButton.actualyoffset()|
scrolloffset_y|TabButton.scrolloffset_y()|
scrolloffset_x|TabButton.scrolloffset_x()|
actualuiscale_y|TabButton.actualuiscale_y()|
actualuiscale_x|TabButton.actualuiscale_x()|
style|TabButton.style()|
AddClass|TabButton.AddClass( cstring cstring_1 )|
RemoveClass|TabButton.RemoveClass( cstring cstring_1 )|
BHasClass|TabButton.BHasClass( cstring cstring_1 )|
BAscendantHasClass|TabButton.BAscendantHasClass( cstring cstring_1 )|
SetHasClass|TabButton.SetHasClass( cstring cstring_1, boolean boolean_2 )|
ToggleClass|TabButton.ToggleClass( cstring cstring_1 )|
SwitchClass|TabButton.SwitchClass( cstring cstring_1, cstring cstring_2 )|
TriggerClass|TabButton.TriggerClass( cstring cstring_1 )|
ClearPanelEvent|TabButton.ClearPanelEvent( cstring cstring_1 )|
SetDraggable|TabButton.SetDraggable( boolean boolean_1 )|
IsDraggable|TabButton.IsDraggable()|
GetChildCount|TabButton.GetChildCount()|
GetChild|TabButton.GetChild( integer integer_1 )|
GetChildIndex|TabButton.GetChildIndex( unknown_variant_type unknown_variant_type_1 )|
Children|TabButton.Children()|
FindChildrenWithClassTraverse|TabButton.FindChildrenWithClassTraverse( cstring cstring_1 )|
GetParent|TabButton.GetParent()|
SetParent|TabButton.SetParent( unknown_variant_type unknown_variant_type_1 )|
FindChild|TabButton.FindChild( cstring cstring_1 )|
FindChildTraverse|TabButton.FindChildTraverse( cstring cstring_1 )|
FindChildInLayoutFile|TabButton.FindChildInLayoutFile( cstring cstring_1 )|
FindPanelInLayoutFile|TabButton.FindPanelInLayoutFile( cstring cstring_1 )|
RemoveAndDeleteChildren|TabButton.RemoveAndDeleteChildren()|
MoveChildBefore|TabButton.MoveChildBefore( unknown_variant_type unknown_variant_type_1, unknown_variant_type unknown_variant_type_2 )|
MoveChildAfter|TabButton.MoveChildAfter( unknown_variant_type unknown_variant_type_1, unknown_variant_type unknown_variant_type_2 )|
GetPositionWithinWindow|TabButton.GetPositionWithinWindow()|
ApplyStyles|TabButton.ApplyStyles( boolean boolean_1 )|
ClearPropertyFromCode|TabButton.ClearPropertyFromCode( unknown_variant_type unknown_variant_type_1 )|
DeleteAsync|TabButton.DeleteAsync( float float_1 )|
BIsTransparent|TabButton.BIsTransparent()|
BAcceptsInput|TabButton.BAcceptsInput()|
BAcceptsFocus|TabButton.BAcceptsFocus()|
SetFocus|TabButton.SetFocus()|
UpdateFocusInContext|TabButton.UpdateFocusInContext()|
BHasHoverStyle|TabButton.BHasHoverStyle()|
SetAcceptsFocus|TabButton.SetAcceptsFocus( boolean boolean_1 )|
SetDisableFocusOnMouseDown|TabButton.SetDisableFocusOnMouseDown( boolean boolean_1 )|
BHasKeyFocus|TabButton.BHasKeyFocus()|
SetScrollParentToFitWhenFocused|TabButton.SetScrollParentToFitWhenFocused( boolean boolean_1 )|
BScrollParentToFitWhenFocused|TabButton.BScrollParentToFitWhenFocused()|
IsSelected|TabButton.IsSelected()|
BHasDescendantKeyFocus|TabButton.BHasDescendantKeyFocus()|
BLoadLayout|TabButton.BLoadLayout( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
BLoadLayoutFromString|TabButton.BLoadLayoutFromString( js_raw_args js_raw_args_1 )|
LoadLayoutFromStringAsync|TabButton.LoadLayoutFromStringAsync( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
LoadLayoutAsync|TabButton.LoadLayoutAsync( cstring cstring_1, boolean boolean_2, boolean boolean_3 )|
BLoadLayoutSnippet|TabButton.BLoadLayoutSnippet( cstring cstring_1 )|
BCreateChildren|TabButton.BCreateChildren( cstring cstring_1 )|
SetTopOfInputContext|TabButton.SetTopOfInputContext( boolean boolean_1 )|
SetDialogVariable|TabButton.SetDialogVariable( cstring cstring_1, cstring cstring_2 )|
SetDialogVariableInt|TabButton.SetDialogVariableInt( cstring cstring_1, integer integer_2 )|
SetDialogVariableTime|TabButton.SetDialogVariableTime( cstring cstring_1, int64 int64_2 )|
ScrollToTop|TabButton.ScrollToTop()|
ScrollToBottom|TabButton.ScrollToBottom()|
ScrollToLeftEdge|TabButton.ScrollToLeftEdge()|
ScrollToRightEdge|TabButton.ScrollToRightEdge()|
ScrollParentToMakePanelFit|TabButton.ScrollParentToMakePanelFit( unknown_variant_type unknown_variant_type_1, boolean boolean_2 )|
BCanSeeInParentScroll|TabButton.BCanSeeInParentScroll()|
GetAttributeInt|TabButton.GetAttributeInt( cstring cstring_1, integer integer_2 )|
GetAttributeString|TabButton.GetAttributeString( cstring cstring_1, cstring cstring_2 )|
GetAttributeUInt32|TabButton.GetAttributeUInt32( cstring cstring_1, unsigned unsigned_2 )|
SetAttributeInt|TabButton.SetAttributeInt( cstring cstring_1, integer integer_2 )|
SetAttributeString|TabButton.SetAttributeString( cstring cstring_1, cstring cstring_2 )|
SetAttributeUInt32|TabButton.SetAttributeUInt32( cstring cstring_1, unsigned unsigned_2 )|
SetInputNamespace|TabButton.SetInputNamespace( cstring cstring_1 )|
RegisterForReadyEvents|TabButton.RegisterForReadyEvents( boolean boolean_1 )|
BReadyForDisplay|TabButton.BReadyForDisplay()|
SetReadyForDisplay|TabButton.SetReadyForDisplay( boolean boolean_1 )|
SetPositionInPixels|TabButton.SetPositionInPixels( float float_1, float float_2, float float_3 )|
Data|TabButton.Data( js_raw_args js_raw_args_1 )|
SetPanelEvent|TabButton.SetPanelEvent( js_raw_args js_raw_args_1 )|
RunScriptInPanelContext|TabButton.RunScriptInPanelContext( js_raw_args js_raw_args_1 )|
rememberchildfocus|TabButton.rememberchildfocus( boolean boolean_1 )|
paneltype|TabButton.paneltype()|
## SteamUGCQuery
Enumerator|Value|Description
--|--|--
SteamUGCQuery.RankedByVote|0|
SteamUGCQuery.RankedByPublicationDate|1|
SteamUGCQuery.AcceptedForGameRankedByAcceptanceDate|2|
SteamUGCQuery.RankedByTrend|3|
SteamUGCQuery.FavoritedByFriendsRankedByPublicationDate|4|
SteamUGCQuery.CreatedByFriendsRankedByPublicationDate|5|
SteamUGCQuery.RankedByNumTimesReported|6|
SteamUGCQuery.CreatedByFollowedUsersRankedByPublicationDate|7|
SteamUGCQuery.NotYetRated|8|
SteamUGCQuery.RankedByTotalVotesAsc|9|
SteamUGCQuery.RankedByVotesUp|10|
SteamUGCQuery.RankedByTextSearch|11|
SteamUGCQuery.RankedByTotalUniqueSubscriptions|12|
SteamUGCQuery.RankedByPlaytimeTrend|13|
SteamUGCQuery.RankedByTotalPlaytime|14|
SteamUGCQuery.RankedByAveragePlaytimeTrend|15|
SteamUGCQuery.RankedByLifetimeAveragePlaytime|16|
SteamUGCQuery.RankedByPlaytimeSessionsTrend|17|
SteamUGCQuery.RankedByLifetimePlaytimeSessions|18|
## SteamUGCMatchingUGCType
Enumerator|Value|Description
--|--|--
SteamUGCMatchingUGCType.Items|0|
SteamUGCMatchingUGCType.Items_Mtx|1|
SteamUGCMatchingUGCType.Items_ReadyToUse|2|
SteamUGCMatchingUGCType.Collections|3|
SteamUGCMatchingUGCType.Artwork|4|
SteamUGCMatchingUGCType.Videos|5|
SteamUGCMatchingUGCType.Screenshots|6|
SteamUGCMatchingUGCType.AllGuides|7|
SteamUGCMatchingUGCType.WebGuides|8|
SteamUGCMatchingUGCType.IntegratedGuides|9|
SteamUGCMatchingUGCType.UsableInGame|10|
SteamUGCMatchingUGCType.ControllerBindings|11|
SteamUGCMatchingUGCType.GameManagedItems|12|
SteamUGCMatchingUGCType.All|-1|
## SteamUniverse
Enumerator|Value|Description
--|--|--
SteamUniverse.Invalid|0|
SteamUniverse.Internal|3|
SteamUniverse.Dev|4|
SteamUniverse.Beta|2|
SteamUniverse.Public|1|
## DOTA_GameState
Enumerator|Value|Description
--|--|--
DOTA_GameState.DOTA_GAMERULES_STATE_INIT|0|
DOTA_GameState.DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD|1|
DOTA_GameState.DOTA_GAMERULES_STATE_HERO_SELECTION|3|
DOTA_GameState.DOTA_GAMERULES_STATE_STRATEGY_TIME|4|
DOTA_GameState.DOTA_GAMERULES_STATE_PRE_GAME|7|
DOTA_GameState.DOTA_GAMERULES_STATE_GAME_IN_PROGRESS|8|
DOTA_GameState.DOTA_GAMERULES_STATE_POST_GAME|9|
DOTA_GameState.DOTA_GAMERULES_STATE_DISCONNECT|10|
DOTA_GameState.DOTA_GAMERULES_STATE_TEAM_SHOWCASE|5|
DOTA_GameState.DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP|2|
DOTA_GameState.DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD|6|
DOTA_GameState.DOTA_GAMERULES_STATE_LAST|0|
## DOTA_GC_TEAM
Enumerator|Value|Description
--|--|--
DOTA_GC_TEAM.DOTA_GC_TEAM_GOOD_GUYS|0|
DOTA_GC_TEAM.DOTA_GC_TEAM_BAD_GUYS|1|
DOTA_GC_TEAM.DOTA_GC_TEAM_BROADCASTER|2|
DOTA_GC_TEAM.DOTA_GC_TEAM_SPECTATOR|3|
DOTA_GC_TEAM.DOTA_GC_TEAM_PLAYER_POOL|4|
DOTA_GC_TEAM.DOTA_GC_TEAM_NOTEAM|5|
## DOTAConnectionState_t
Enumerator|Value|Description
--|--|--
DOTAConnectionState_t.DOTA_CONNECTION_STATE_UNKNOWN|0|
DOTAConnectionState_t.DOTA_CONNECTION_STATE_NOT_YET_CONNECTED|1|
DOTAConnectionState_t.DOTA_CONNECTION_STATE_CONNECTED|2|
DOTAConnectionState_t.DOTA_CONNECTION_STATE_DISCONNECTED|3|
DOTAConnectionState_t.DOTA_CONNECTION_STATE_ABANDONED|4|
DOTAConnectionState_t.DOTA_CONNECTION_STATE_LOADING|5|
DOTAConnectionState_t.DOTA_CONNECTION_STATE_FAILED|6|
## dotaunitorder_t
Enumerator|Value|Description
--|--|--
dotaunitorder_t.DOTA_UNIT_ORDER_NONE|0|
dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION|1|
dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_TARGET|2|
dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE|3|
dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET|4|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION|5|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET|6|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE|7|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_NO_TARGET|8|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE|9|
dotaunitorder_t.DOTA_UNIT_ORDER_HOLD_POSITION|10|
dotaunitorder_t.DOTA_UNIT_ORDER_TRAIN_ABILITY|11|
dotaunitorder_t.DOTA_UNIT_ORDER_DROP_ITEM|12|
dotaunitorder_t.DOTA_UNIT_ORDER_GIVE_ITEM|13|
dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_ITEM|14|
dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_RUNE|15|
dotaunitorder_t.DOTA_UNIT_ORDER_PURCHASE_ITEM|16|
dotaunitorder_t.DOTA_UNIT_ORDER_SELL_ITEM|17|
dotaunitorder_t.DOTA_UNIT_ORDER_DISASSEMBLE_ITEM|18|
dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_ITEM|19|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO|20|
dotaunitorder_t.DOTA_UNIT_ORDER_STOP|21|
dotaunitorder_t.DOTA_UNIT_ORDER_TAUNT|22|
dotaunitorder_t.DOTA_UNIT_ORDER_BUYBACK|23|
dotaunitorder_t.DOTA_UNIT_ORDER_GLYPH|24|
dotaunitorder_t.DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH|25|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_RUNE|26|
dotaunitorder_t.DOTA_UNIT_ORDER_PING_ABILITY|27|
dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION|28|
dotaunitorder_t.DOTA_UNIT_ORDER_PATROL|29|
dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION|30|
dotaunitorder_t.DOTA_UNIT_ORDER_RADAR|31|
dotaunitorder_t.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK|32|
dotaunitorder_t.DOTA_UNIT_ORDER_CONTINUE|33|
dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED|34|
dotaunitorder_t.DOTA_UNIT_ORDER_CAST_RIVER_PAINT|35|
dotaunitorder_t.DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT|36|
dotaunitorder_t.DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN|37|
## DOTA_OVERHEAD_ALERT
Enumerator|Value|Description
--|--|--
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_GOLD|0|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_DENY|1|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_CRITICAL|2|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_XP|3|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_BONUS_SPELL_DAMAGE|4|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_MISS|5|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_DAMAGE|6|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_EVADE|7|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_BLOCK|8|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_BONUS_POISON_DAMAGE|9|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_HEAL|10|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_MANA_ADD|11|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_MANA_LOSS|12|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_LAST_HIT_EARLY|13|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_LAST_HIT_CLOSE|14|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_LAST_HIT_MISS|15|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_MAGICAL_BLOCK|16|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_INCOMING_DAMAGE|17|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_OUTGOING_DAMAGE|18|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_DISABLE_RESIST|19|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_DEATH|20|
DOTA_OVERHEAD_ALERT.OVERHEAD_ALERT_BLOCKED|21|
## DOTA_HeroPickState
Enumerator|Value|Description
--|--|--
DOTA_HeroPickState.DOTA_HEROPICK_STATE_NONE|0|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_AP_SELECT|1|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_SD_SELECT|2|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_INTRO_SELECT_UNUSED|3|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_RD_SELECT_UNUSED|4|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_INTRO|5|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_CAPTAINPICK|6|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN1|7|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN2|8|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN3|9|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN4|10|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN5|11|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN6|12|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN7|13|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN8|14|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN9|15|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN10|16|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN11|17|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_BAN12|18|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT1|19|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT2|20|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT3|21|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT4|22|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT5|23|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT6|24|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT7|25|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT8|26|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT9|27|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_SELECT10|28|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CM_PICK|29|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_AR_SELECT|30|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_MO_SELECT|31|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_FH_SELECT|32|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_INTRO|33|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_CAPTAINPICK|34|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_BAN1|35|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_BAN2|36|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_BAN3|37|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_BAN4|38|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_BAN5|39|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_BAN6|40|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT1|41|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT2|42|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT3|43|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT4|44|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT5|45|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT6|46|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT7|47|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT8|48|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT9|49|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_SELECT10|50|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CD_PICK|51|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_BD_SELECT|52|
DOTA_HeroPickState.DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT|53|
DOTA_HeroPickState.DOTA_HERO_PICK_STATE_ARDM_SELECT|54|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT|55|
DOTA_HeroPickState.DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT|56|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_SELECT_PENALTY|57|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_CUSTOM_PICK_RULES|58|
DOTA_HeroPickState.DOTA_HEROPICK_STATE_COUNT|59|
## DOTATeam_t
Enumerator|Value|Description
--|--|--
DOTATeam_t.DOTA_TEAM_FIRST|2|
DOTATeam_t.DOTA_TEAM_GOODGUYS|2|
DOTATeam_t.DOTA_TEAM_BADGUYS|3|
DOTATeam_t.DOTA_TEAM_NEUTRALS|4|
DOTATeam_t.DOTA_TEAM_NOTEAM|5|
DOTATeam_t.DOTA_TEAM_CUSTOM_1|6|
DOTATeam_t.DOTA_TEAM_CUSTOM_2|7|
DOTATeam_t.DOTA_TEAM_CUSTOM_3|8|
DOTATeam_t.DOTA_TEAM_CUSTOM_4|9|
DOTATeam_t.DOTA_TEAM_CUSTOM_5|10|
DOTATeam_t.DOTA_TEAM_CUSTOM_6|11|
DOTATeam_t.DOTA_TEAM_CUSTOM_7|12|
DOTATeam_t.DOTA_TEAM_CUSTOM_8|13|
DOTATeam_t.DOTA_TEAM_COUNT|14|
DOTATeam_t.DOTA_TEAM_CUSTOM_MIN|6|
DOTATeam_t.DOTA_TEAM_CUSTOM_MAX|13|
DOTATeam_t.DOTA_TEAM_CUSTOM_COUNT|8|
## DOTA_RUNES
Enumerator|Value|Description
--|--|--
DOTA_RUNES.DOTA_RUNE_INVALID|-1|
DOTA_RUNES.DOTA_RUNE_DOUBLEDAMAGE|0|
DOTA_RUNES.DOTA_RUNE_HASTE|1|
DOTA_RUNES.DOTA_RUNE_ILLUSION|2|
DOTA_RUNES.DOTA_RUNE_INVISIBILITY|3|
DOTA_RUNES.DOTA_RUNE_REGENERATION|4|
DOTA_RUNES.DOTA_RUNE_BOUNTY|5|
DOTA_RUNES.DOTA_RUNE_ARCANE|6|
DOTA_RUNES.DOTA_RUNE_XP|7|
DOTA_RUNES.DOTA_RUNE_COUNT|8|
## DOTA_UNIT_TARGET_TEAM
Enumerator|Value|Description
--|--|--
DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_NONE|0|
DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_FRIENDLY|1|
DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_ENEMY|2|
DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_CUSTOM|4|
DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_BOTH|3|
## DOTA_UNIT_TARGET_TYPE
Enumerator|Value|Description
--|--|--
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_NONE|0|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_HERO|1|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_CREEP|2|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_BUILDING|4|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_COURIER|16|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_OTHER|32|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_TREE|64|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_CUSTOM|128|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_BASIC|18|
DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_ALL|55|
## DOTA_UNIT_TARGET_FLAGS
Enumerator|Value|Description
--|--|--
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NONE|0|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_RANGED_ONLY|2|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_MELEE_ONLY|4|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_DEAD|8|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES|16|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES|32|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_INVULNERABLE|64|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE|128|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NO_INVIS|256|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS|512|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED|1024|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED|2048|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED|4096|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS|8192|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE|16384|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_MANA_ONLY|32768|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP|65536|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO|131072|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD|262144|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED|524288|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES|1048576|
DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_RESPECT_OBSTRUCTIONS|2097152|
## DOTALimits_t
Enumerator|Value|Description
--|--|--
DOTALimits_t.DOTA_MAX_PLAYERS|64|Max number of players connected to the server including spectators.
DOTALimits_t.DOTA_MAX_TEAM|24|Max number of players per team.
DOTALimits_t.DOTA_MAX_PLAYER_TEAMS|10|Max number of player teams supported.
DOTALimits_t.DOTA_MAX_TEAM_PLAYERS|24|Max number of non-spectator players supported.
DOTALimits_t.DOTA_MAX_SPECTATOR_TEAM_SIZE|40|How many spectators can watch.
DOTALimits_t.DOTA_MAX_SPECTATOR_LOBBY_SIZE|15|Max number of viewers in a spectator lobby.
DOTALimits_t.DOTA_DEFAULT_MAX_TEAM|5|Default number of players per team.
DOTALimits_t.DOTA_DEFAULT_MAX_TEAM_PLAYERS|10|Default number of non-spectator players supported.
## DOTAInventoryFlags_t
Enumerator|Value|Description
--|--|--
DOTAInventoryFlags_t.DOTA_INVENTORY_ALLOW_NONE|0|
DOTAInventoryFlags_t.DOTA_INVENTORY_ALLOW_MAIN|1|
DOTAInventoryFlags_t.DOTA_INVENTORY_ALLOW_STASH|2|
DOTAInventoryFlags_t.DOTA_INVENTORY_ALLOW_DROP_ON_GROUND|4|
DOTAInventoryFlags_t.DOTA_INVENTORY_ALLOW_DROP_AT_FOUNTAIN|8|
DOTAInventoryFlags_t.DOTA_INVENTORY_LIMIT_DROP_ON_GROUND|16|
DOTAInventoryFlags_t.DOTA_INVENTORY_ALL_ACCESS|3|
## EDOTA_ModifyGold_Reason
Enumerator|Value|Description
--|--|--
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Unspecified|0|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Death|1|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Buyback|2|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_PurchaseConsumable|3|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_PurchaseItem|4|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_AbandonedRedistribute|5|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_SellItem|6|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_AbilityCost|7|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_CheatCommand|8|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_SelectionPenalty|9|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_GameTick|10|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Building|11|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_HeroKill|12|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_CreepKill|13|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_RoshanKill|14|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_CourierKill|15|
EDOTA_ModifyGold_Reason.DOTA_ModifyGold_SharedGold|16|
## DOTAUnitAttackCapability_t
Enumerator|Value|Description
--|--|--
DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_NO_ATTACK|0|
DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_MELEE_ATTACK|1|
DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_RANGED_ATTACK|2|
DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_RANGED_ATTACK_DIRECTIONAL|4|
DOTAUnitAttackCapability_t.DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT|3|
## DOTAUnitMoveCapability_t
Enumerator|Value|Description
--|--|--
DOTAUnitMoveCapability_t.DOTA_UNIT_CAP_MOVE_NONE|0|
DOTAUnitMoveCapability_t.DOTA_UNIT_CAP_MOVE_GROUND|1|
DOTAUnitMoveCapability_t.DOTA_UNIT_CAP_MOVE_FLY|2|
## EShareAbility
Enumerator|Value|Description
--|--|--
EShareAbility.ITEM_FULLY_SHAREABLE|0|
EShareAbility.ITEM_PARTIALLY_SHAREABLE|1|
EShareAbility.ITEM_NOT_SHAREABLE|2|
## DOTAMusicStatus_t
Enumerator|Value|Description
--|--|--
DOTAMusicStatus_t.DOTA_MUSIC_STATUS_NONE|0|
DOTAMusicStatus_t.DOTA_MUSIC_STATUS_EXPLORATION|1|
DOTAMusicStatus_t.DOTA_MUSIC_STATUS_BATTLE|2|
DOTAMusicStatus_t.DOTA_MUSIC_STATUS_PRE_GAME_EXPLORATION|3|
DOTAMusicStatus_t.DOTA_MUSIC_STATUS_DEAD|4|
DOTAMusicStatus_t.DOTA_MUSIC_STATUS_LAST|5|
## DOTA_ABILITY_BEHAVIOR
Enumerator|Value|Description
--|--|--
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_NONE|0|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_HIDDEN|1|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_PASSIVE|2|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_NO_TARGET|4|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_UNIT_TARGET|8|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_POINT|16|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_AOE|32|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE|64|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_CHANNELLED|128|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_ITEM|256|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_TOGGLE|512|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_DIRECTIONAL|1024|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_IMMEDIATE|2048|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_AUTOCAST|4096|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET|8192|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT|16384|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET|32768|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_AURA|65536|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_ATTACK|131072|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT|262144|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES|524288|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_UNRESTRICTED|1048576|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE|2097152|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL|4194304|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT|8388608|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET|16777216|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK|33554432|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN|67108864|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING|134217728|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_RUNE_TARGET|268435456|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL|536870912|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING|1073741824|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_LAST_RESORT_POINT|2147483648|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_CAN_SELF_CAST|4294967296|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES|8589934592|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_UNLOCKED_BY_EFFECT_INDEX|17179869184|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_SUPPRESS_ASSOCIATED_CONSUMABLE|34359738368|
DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_FREE_DRAW_TARGETING|68719476736|
## DAMAGE_TYPES
Enumerator|Value|Description
--|--|--
DAMAGE_TYPES.DAMAGE_TYPE_NONE|0|
DAMAGE_TYPES.DAMAGE_TYPE_PHYSICAL|1|
DAMAGE_TYPES.DAMAGE_TYPE_MAGICAL|2|
DAMAGE_TYPES.DAMAGE_TYPE_PURE|4|
DAMAGE_TYPES.DAMAGE_TYPE_HP_REMOVAL|8|
DAMAGE_TYPES.DAMAGE_TYPE_ALL|7|
## ABILITY_TYPES
Enumerator|Value|Description
--|--|--
ABILITY_TYPES.ABILITY_TYPE_BASIC|0|
ABILITY_TYPES.ABILITY_TYPE_ULTIMATE|1|
ABILITY_TYPES.ABILITY_TYPE_ATTRIBUTES|2|
ABILITY_TYPES.ABILITY_TYPE_HIDDEN|3|
## SPELL_IMMUNITY_TYPES
Enumerator|Value|Description
--|--|--
SPELL_IMMUNITY_TYPES.SPELL_IMMUNITY_NONE|0|
SPELL_IMMUNITY_TYPES.SPELL_IMMUNITY_ALLIES_YES|1|
SPELL_IMMUNITY_TYPES.SPELL_IMMUNITY_ALLIES_NO|2|
SPELL_IMMUNITY_TYPES.SPELL_IMMUNITY_ENEMIES_YES|3|
SPELL_IMMUNITY_TYPES.SPELL_IMMUNITY_ENEMIES_NO|4|
SPELL_IMMUNITY_TYPES.SPELL_IMMUNITY_ALLIES_YES_ENEMIES_NO|5|
## DOTADamageFlag_t
Enumerator|Value|Description
--|--|--
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_NONE|0|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_IGNORES_MAGIC_ARMOR|1|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_IGNORES_PHYSICAL_ARMOR|2|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_BYPASSES_INVULNERABILITY|4|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_BYPASSES_BLOCK|8|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_REFLECTION|16|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_HPLOSS|32|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_NO_DIRECTOR_EVENT|64|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_NON_LETHAL|128|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_USE_COMBAT_PROFICIENCY|256|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_NO_DAMAGE_MULTIPLIERS|512|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_NO_SPELL_AMPLIFICATION|1024|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN|2048|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_NO_SPELL_LIFESTEAL|4096|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_PROPERTY_FIRE|8192|
DOTADamageFlag_t.DOTA_DAMAGE_FLAG_IGNORES_BASE_PHYSICAL_ARMOR|16384|
## EDOTA_ModifyXP_Reason
Enumerator|Value|Description
--|--|--
EDOTA_ModifyXP_Reason.DOTA_ModifyXP_Unspecified|0|
EDOTA_ModifyXP_Reason.DOTA_ModifyXP_HeroKill|1|
EDOTA_ModifyXP_Reason.DOTA_ModifyXP_CreepKill|2|
EDOTA_ModifyXP_Reason.DOTA_ModifyXP_RoshanKill|3|
## GameActivity_t
Enumerator|Value|Description
--|--|--
GameActivity_t.ACT_DOTA_IDLE|1500|
GameActivity_t.ACT_DOTA_IDLE_RARE|1501|
GameActivity_t.ACT_DOTA_RUN|1502|
GameActivity_t.ACT_DOTA_ATTACK|1503|
GameActivity_t.ACT_DOTA_ATTACK2|1504|
GameActivity_t.ACT_DOTA_ATTACK_EVENT|1505|
GameActivity_t.ACT_DOTA_DIE|1506|
GameActivity_t.ACT_DOTA_FLINCH|1507|
GameActivity_t.ACT_DOTA_FLAIL|1508|
GameActivity_t.ACT_DOTA_DISABLED|1509|
GameActivity_t.ACT_DOTA_CAST_ABILITY_1|1510|
GameActivity_t.ACT_DOTA_CAST_ABILITY_2|1511|
GameActivity_t.ACT_DOTA_CAST_ABILITY_3|1512|
GameActivity_t.ACT_DOTA_CAST_ABILITY_4|1513|
GameActivity_t.ACT_DOTA_CAST_ABILITY_5|1514|
GameActivity_t.ACT_DOTA_CAST_ABILITY_6|1515|
GameActivity_t.ACT_DOTA_OVERRIDE_ABILITY_1|1516|
GameActivity_t.ACT_DOTA_OVERRIDE_ABILITY_2|1517|
GameActivity_t.ACT_DOTA_OVERRIDE_ABILITY_3|1518|
GameActivity_t.ACT_DOTA_OVERRIDE_ABILITY_4|1519|
GameActivity_t.ACT_DOTA_CHANNEL_ABILITY_1|1520|
GameActivity_t.ACT_DOTA_CHANNEL_ABILITY_2|1521|
GameActivity_t.ACT_DOTA_CHANNEL_ABILITY_3|1522|
GameActivity_t.ACT_DOTA_CHANNEL_ABILITY_4|1523|
GameActivity_t.ACT_DOTA_CHANNEL_ABILITY_5|1524|
GameActivity_t.ACT_DOTA_CHANNEL_ABILITY_6|1525|
GameActivity_t.ACT_DOTA_CHANNEL_END_ABILITY_1|1526|
GameActivity_t.ACT_DOTA_CHANNEL_END_ABILITY_2|1527|
GameActivity_t.ACT_DOTA_CHANNEL_END_ABILITY_3|1528|
GameActivity_t.ACT_DOTA_CHANNEL_END_ABILITY_4|1529|
GameActivity_t.ACT_DOTA_CHANNEL_END_ABILITY_5|1530|
GameActivity_t.ACT_DOTA_CHANNEL_END_ABILITY_6|1531|
GameActivity_t.ACT_DOTA_CONSTANT_LAYER|1532|
GameActivity_t.ACT_DOTA_CAPTURE|1533|
GameActivity_t.ACT_DOTA_SPAWN|1534|
GameActivity_t.ACT_DOTA_KILLTAUNT|1535|
GameActivity_t.ACT_DOTA_TAUNT|1536|
GameActivity_t.ACT_DOTA_THIRST|1537|
GameActivity_t.ACT_DOTA_CAST_DRAGONBREATH|1538|
GameActivity_t.ACT_DOTA_ECHO_SLAM|1539|
GameActivity_t.ACT_DOTA_CAST_ABILITY_1_END|1540|
GameActivity_t.ACT_DOTA_CAST_ABILITY_2_END|1541|
GameActivity_t.ACT_DOTA_CAST_ABILITY_3_END|1542|
GameActivity_t.ACT_DOTA_CAST_ABILITY_4_END|1543|
GameActivity_t.ACT_MIRANA_LEAP_END|1544|
GameActivity_t.ACT_WAVEFORM_START|1545|
GameActivity_t.ACT_WAVEFORM_END|1546|
GameActivity_t.ACT_DOTA_CAST_ABILITY_ROT|1547|
GameActivity_t.ACT_DOTA_DIE_SPECIAL|1548|
GameActivity_t.ACT_DOTA_RATTLETRAP_BATTERYASSAULT|1549|
GameActivity_t.ACT_DOTA_RATTLETRAP_POWERCOGS|1550|
GameActivity_t.ACT_DOTA_RATTLETRAP_HOOKSHOT_START|1551|
GameActivity_t.ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP|1552|
GameActivity_t.ACT_DOTA_RATTLETRAP_HOOKSHOT_END|1553|
GameActivity_t.ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE|1554|
GameActivity_t.ACT_DOTA_TINKER_REARM1|1555|
GameActivity_t.ACT_DOTA_TINKER_REARM2|1556|
GameActivity_t.ACT_DOTA_TINKER_REARM3|1557|
GameActivity_t.ACT_TINY_AVALANCHE|1558|
GameActivity_t.ACT_TINY_TOSS|1559|
GameActivity_t.ACT_TINY_GROWL|1560|
GameActivity_t.ACT_DOTA_WEAVERBUG_ATTACH|1561|
GameActivity_t.ACT_DOTA_CAST_WILD_AXES_END|1562|
GameActivity_t.ACT_DOTA_CAST_LIFE_BREAK_START|1563|
GameActivity_t.ACT_DOTA_CAST_LIFE_BREAK_END|1564|
GameActivity_t.ACT_DOTA_NIGHTSTALKER_TRANSITION|1565|
GameActivity_t.ACT_DOTA_LIFESTEALER_RAGE|1566|
GameActivity_t.ACT_DOTA_LIFESTEALER_OPEN_WOUNDS|1567|
GameActivity_t.ACT_DOTA_SAND_KING_BURROW_IN|1568|
GameActivity_t.ACT_DOTA_SAND_KING_BURROW_OUT|1569|
GameActivity_t.ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK|1570|
GameActivity_t.ACT_DOTA_WHEEL_LAYER|1571|
GameActivity_t.ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START|1572|
GameActivity_t.ACT_DOTA_ALCHEMIST_CONCOCTION|1573|
GameActivity_t.ACT_DOTA_JAKIRO_LIQUIDFIRE_START|1574|
GameActivity_t.ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP|1575|
GameActivity_t.ACT_DOTA_LIFESTEALER_INFEST|1576|
GameActivity_t.ACT_DOTA_LIFESTEALER_INFEST_END|1577|
GameActivity_t.ACT_DOTA_LASSO_LOOP|1578|
GameActivity_t.ACT_DOTA_ALCHEMIST_CONCOCTION_THROW|1579|
GameActivity_t.ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END|1580|
GameActivity_t.ACT_DOTA_CAST_COLD_SNAP|1581|
GameActivity_t.ACT_DOTA_CAST_GHOST_WALK|1582|
GameActivity_t.ACT_DOTA_CAST_TORNADO|1583|
GameActivity_t.ACT_DOTA_CAST_EMP|1584|
GameActivity_t.ACT_DOTA_CAST_ALACRITY|1585|
GameActivity_t.ACT_DOTA_CAST_CHAOS_METEOR|1586|
GameActivity_t.ACT_DOTA_CAST_SUN_STRIKE|1587|
GameActivity_t.ACT_DOTA_CAST_FORGE_SPIRIT|1588|
GameActivity_t.ACT_DOTA_CAST_ICE_WALL|1589|
GameActivity_t.ACT_DOTA_CAST_DEAFENING_BLAST|1590|
GameActivity_t.ACT_DOTA_VICTORY|1591|
GameActivity_t.ACT_DOTA_DEFEAT|1592|
GameActivity_t.ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE|1593|
GameActivity_t.ACT_DOTA_SPIRIT_BREAKER_CHARGE_END|1594|
GameActivity_t.ACT_DOTA_TELEPORT|1595|
GameActivity_t.ACT_DOTA_TELEPORT_END|1596|
GameActivity_t.ACT_DOTA_CAST_REFRACTION|1597|
GameActivity_t.ACT_DOTA_CAST_ABILITY_7|1598|
GameActivity_t.ACT_DOTA_CANCEL_SIREN_SONG|1599|
GameActivity_t.ACT_DOTA_CHANNEL_ABILITY_7|1600|
GameActivity_t.ACT_DOTA_LOADOUT|1601|
GameActivity_t.ACT_DOTA_FORCESTAFF_END|1602|
GameActivity_t.ACT_DOTA_POOF_END|1603|
GameActivity_t.ACT_DOTA_SLARK_POUNCE|1604|
GameActivity_t.ACT_DOTA_MAGNUS_SKEWER_START|1605|
GameActivity_t.ACT_DOTA_MAGNUS_SKEWER_END|1606|
GameActivity_t.ACT_DOTA_MEDUSA_STONE_GAZE|1607|
GameActivity_t.ACT_DOTA_RELAX_START|1608|
GameActivity_t.ACT_DOTA_RELAX_LOOP|1609|
GameActivity_t.ACT_DOTA_RELAX_END|1610|
GameActivity_t.ACT_DOTA_CENTAUR_STAMPEDE|1611|
GameActivity_t.ACT_DOTA_BELLYACHE_START|1612|
GameActivity_t.ACT_DOTA_BELLYACHE_LOOP|1613|
GameActivity_t.ACT_DOTA_BELLYACHE_END|1614|
GameActivity_t.ACT_DOTA_ROQUELAIRE_LAND|1615|
GameActivity_t.ACT_DOTA_ROQUELAIRE_LAND_IDLE|1616|
GameActivity_t.ACT_DOTA_GREEVIL_CAST|1617|
GameActivity_t.ACT_DOTA_GREEVIL_OVERRIDE_ABILITY|1618|
GameActivity_t.ACT_DOTA_GREEVIL_HOOK_START|1619|
GameActivity_t.ACT_DOTA_GREEVIL_HOOK_END|1620|
GameActivity_t.ACT_DOTA_GREEVIL_BLINK_BONE|1621|
GameActivity_t.ACT_DOTA_IDLE_SLEEPING|1622|
GameActivity_t.ACT_DOTA_INTRO|1623|
GameActivity_t.ACT_DOTA_GESTURE_POINT|1624|
GameActivity_t.ACT_DOTA_GESTURE_ACCENT|1625|
GameActivity_t.ACT_DOTA_SLEEPING_END|1626|
GameActivity_t.ACT_DOTA_AMBUSH|1627|
GameActivity_t.ACT_DOTA_ITEM_LOOK|1628|
GameActivity_t.ACT_DOTA_STARTLE|1629|
GameActivity_t.ACT_DOTA_FRUSTRATION|1630|
GameActivity_t.ACT_DOTA_TELEPORT_REACT|1631|
GameActivity_t.ACT_DOTA_TELEPORT_END_REACT|1632|
GameActivity_t.ACT_DOTA_SHRUG|1633|
GameActivity_t.ACT_DOTA_RELAX_LOOP_END|1634|
GameActivity_t.ACT_DOTA_PRESENT_ITEM|1635|
GameActivity_t.ACT_DOTA_IDLE_IMPATIENT|1636|
GameActivity_t.ACT_DOTA_SHARPEN_WEAPON|1637|
GameActivity_t.ACT_DOTA_SHARPEN_WEAPON_OUT|1638|
GameActivity_t.ACT_DOTA_IDLE_SLEEPING_END|1639|
GameActivity_t.ACT_DOTA_BRIDGE_DESTROY|1640|
GameActivity_t.ACT_DOTA_TAUNT_SNIPER|1641|
GameActivity_t.ACT_DOTA_DEATH_BY_SNIPER|1642|
GameActivity_t.ACT_DOTA_LOOK_AROUND|1643|
GameActivity_t.ACT_DOTA_CAGED_CREEP_RAGE|1644|
GameActivity_t.ACT_DOTA_CAGED_CREEP_RAGE_OUT|1645|
GameActivity_t.ACT_DOTA_CAGED_CREEP_SMASH|1646|
GameActivity_t.ACT_DOTA_CAGED_CREEP_SMASH_OUT|1647|
GameActivity_t.ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP|1648|
GameActivity_t.ACT_DOTA_INTRO_LOOP|1649|
GameActivity_t.ACT_DOTA_BRIDGE_THREAT|1650|
GameActivity_t.ACT_DOTA_DAGON|1651|
GameActivity_t.ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START|1652|
GameActivity_t.ACT_DOTA_CAST_ABILITY_2_ES_ROLL|1653|
GameActivity_t.ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END|1654|
GameActivity_t.ACT_DOTA_NIAN_PIN_START|1655|
GameActivity_t.ACT_DOTA_NIAN_PIN_LOOP|1656|
GameActivity_t.ACT_DOTA_NIAN_PIN_END|1657|
GameActivity_t.ACT_DOTA_LEAP_STUN|1658|
GameActivity_t.ACT_DOTA_LEAP_SWIPE|1659|
GameActivity_t.ACT_DOTA_NIAN_INTRO_LEAP|1660|
GameActivity_t.ACT_DOTA_AREA_DENY|1661|
GameActivity_t.ACT_DOTA_NIAN_PIN_TO_STUN|1662|
GameActivity_t.ACT_DOTA_RAZE_1|1663|
GameActivity_t.ACT_DOTA_RAZE_2|1664|
GameActivity_t.ACT_DOTA_RAZE_3|1665|
GameActivity_t.ACT_DOTA_UNDYING_DECAY|1666|
GameActivity_t.ACT_DOTA_UNDYING_SOUL_RIP|1667|
GameActivity_t.ACT_DOTA_UNDYING_TOMBSTONE|1668|
GameActivity_t.ACT_DOTA_WHIRLING_AXES_RANGED|1669|
GameActivity_t.ACT_DOTA_SHALLOW_GRAVE|1670|
GameActivity_t.ACT_DOTA_COLD_FEET|1671|
GameActivity_t.ACT_DOTA_ICE_VORTEX|1672|
GameActivity_t.ACT_DOTA_CHILLING_TOUCH|1673|
GameActivity_t.ACT_DOTA_ENFEEBLE|1674|
GameActivity_t.ACT_DOTA_FATAL_BONDS|1675|
GameActivity_t.ACT_DOTA_MIDNIGHT_PULSE|1676|
GameActivity_t.ACT_DOTA_ANCESTRAL_SPIRIT|1677|
GameActivity_t.ACT_DOTA_THUNDER_STRIKE|1678|
GameActivity_t.ACT_DOTA_KINETIC_FIELD|1679|
GameActivity_t.ACT_DOTA_STATIC_STORM|1680|
GameActivity_t.ACT_DOTA_MINI_TAUNT|1681|
GameActivity_t.ACT_DOTA_ARCTIC_BURN_END|1682|
GameActivity_t.ACT_DOTA_LOADOUT_RARE|1683|
GameActivity_t.ACT_DOTA_SWIM|1684|
GameActivity_t.ACT_DOTA_FLEE|1685|
GameActivity_t.ACT_DOTA_TROT|1686|
GameActivity_t.ACT_DOTA_SHAKE|1687|
GameActivity_t.ACT_DOTA_SWIM_IDLE|1688|
GameActivity_t.ACT_DOTA_WAIT_IDLE|1689|
GameActivity_t.ACT_DOTA_GREET|1690|
GameActivity_t.ACT_DOTA_TELEPORT_COOP_START|1691|
GameActivity_t.ACT_DOTA_TELEPORT_COOP_WAIT|1692|
GameActivity_t.ACT_DOTA_TELEPORT_COOP_END|1693|
GameActivity_t.ACT_DOTA_TELEPORT_COOP_EXIT|1694|
GameActivity_t.ACT_DOTA_SHOPKEEPER_PET_INTERACT|1695|
GameActivity_t.ACT_DOTA_ITEM_PICKUP|1696|
GameActivity_t.ACT_DOTA_ITEM_DROP|1697|
GameActivity_t.ACT_DOTA_CAPTURE_PET|1698|
GameActivity_t.ACT_DOTA_PET_WARD_OBSERVER|1699|
GameActivity_t.ACT_DOTA_PET_WARD_SENTRY|1700|
GameActivity_t.ACT_DOTA_PET_LEVEL|1701|
GameActivity_t.ACT_DOTA_CAST_BURROW_END|1702|
GameActivity_t.ACT_DOTA_LIFESTEALER_ASSIMILATE|1703|
GameActivity_t.ACT_DOTA_LIFESTEALER_EJECT|1704|
GameActivity_t.ACT_DOTA_ATTACK_EVENT_BASH|1705|
GameActivity_t.ACT_DOTA_CAPTURE_RARE|1706|
GameActivity_t.ACT_DOTA_AW_MAGNETIC_FIELD|1707|
GameActivity_t.ACT_DOTA_CAST_GHOST_SHIP|1708|
GameActivity_t.ACT_DOTA_FXANIM|1709|
GameActivity_t.ACT_DOTA_VICTORY_START|1710|
GameActivity_t.ACT_DOTA_DEFEAT_START|1711|
GameActivity_t.ACT_DOTA_DP_SPIRIT_SIPHON|1712|
GameActivity_t.ACT_DOTA_TRICKS_END|1713|
GameActivity_t.ACT_DOTA_ES_STONE_CALLER|1714|
GameActivity_t.ACT_DOTA_MK_STRIKE|1715|
GameActivity_t.ACT_DOTA_VERSUS|1716|
GameActivity_t.ACT_DOTA_CAPTURE_CARD|1717|
GameActivity_t.ACT_DOTA_MK_SPRING_SOAR|1718|
GameActivity_t.ACT_DOTA_MK_SPRING_END|1719|
GameActivity_t.ACT_DOTA_MK_TREE_SOAR|1720|
GameActivity_t.ACT_DOTA_MK_TREE_END|1721|
GameActivity_t.ACT_DOTA_MK_FUR_ARMY|1722|
GameActivity_t.ACT_DOTA_MK_SPRING_CAST|1723|
GameActivity_t.ACT_DOTA_NECRO_GHOST_SHROUD|1724|
GameActivity_t.ACT_DOTA_OVERRIDE_ARCANA|1725|
GameActivity_t.ACT_DOTA_SLIDE|1726|
GameActivity_t.ACT_DOTA_SLIDE_LOOP|1727|
GameActivity_t.ACT_DOTA_GENERIC_CHANNEL_1|1728|
GameActivity_t.ACT_DOTA_GS_SOUL_CHAIN|1729|
GameActivity_t.ACT_DOTA_GS_INK_CREATURE|1730|
GameActivity_t.ACT_DOTA_TRANSITION|1731|
GameActivity_t.ACT_DOTA_BLINK_DAGGER|1732|
GameActivity_t.ACT_DOTA_BLINK_DAGGER_END|1733|
GameActivity_t.ACT_DOTA_CUSTOM_TOWER_ATTACK|1734|
GameActivity_t.ACT_DOTA_CUSTOM_TOWER_IDLE|1735|
GameActivity_t.ACT_DOTA_CUSTOM_TOWER_DIE|1736|
GameActivity_t.ACT_DOTA_CAST_COLD_SNAP_ORB|1737|
GameActivity_t.ACT_DOTA_CAST_GHOST_WALK_ORB|1738|
GameActivity_t.ACT_DOTA_CAST_TORNADO_ORB|1739|
GameActivity_t.ACT_DOTA_CAST_EMP_ORB|1740|
GameActivity_t.ACT_DOTA_CAST_ALACRITY_ORB|1741|
GameActivity_t.ACT_DOTA_CAST_CHAOS_METEOR_ORB|1742|
GameActivity_t.ACT_DOTA_CAST_SUN_STRIKE_ORB|1743|
GameActivity_t.ACT_DOTA_CAST_FORGE_SPIRIT_ORB|1744|
GameActivity_t.ACT_DOTA_CAST_ICE_WALL_ORB|1745|
GameActivity_t.ACT_DOTA_CAST_DEAFENING_BLAST_ORB|1746|
GameActivity_t.ACT_DOTA_NOTICE|1747|
GameActivity_t.ACT_DOTA_CAST_ABILITY_2_ALLY|1748|
GameActivity_t.ACT_DOTA_SHUFFLE_L|1749|
GameActivity_t.ACT_DOTA_SHUFFLE_R|1750|
## DOTAMinimapEvent_t
Enumerator|Value|Description
--|--|--
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_ANCIENT_UNDER_ATTACK|2|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_BASE_UNDER_ATTACK|4|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_BASE_GLYPHED|8|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_TEAMMATE_UNDER_ATTACK|16|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_TEAMMATE_TELEPORTING|32|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_TEAMMATE_DIED|64|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_TUTORIAL_TASK_ACTIVE|128|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_TUTORIAL_TASK_FINISHED|256|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_HINT_LOCATION|512|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_ENEMY_TELEPORTING|1024|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_CANCEL_TELEPORTING|2048|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_RADAR|4096|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_RADAR_TARGET|8192|
DOTAMinimapEvent_t.DOTA_MINIMAP_EVENT_MOVE_TO_TARGET|16384|
## DOTASlotType_t
Enumerator|Value|Description
--|--|--
DOTASlotType_t.DOTA_LOADOUT_TYPE_INVALID|-1|
DOTASlotType_t.DOTA_LOADOUT_TYPE_WEAPON|0|
DOTASlotType_t.DOTA_LOADOUT_TYPE_OFFHAND_WEAPON|1|
DOTASlotType_t.DOTA_LOADOUT_TYPE_WEAPON2|2|
DOTASlotType_t.DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2|3|
DOTASlotType_t.DOTA_LOADOUT_TYPE_HEAD|4|
DOTASlotType_t.DOTA_LOADOUT_TYPE_SHOULDER|5|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ARMS|6|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ARMOR|7|
DOTASlotType_t.DOTA_LOADOUT_TYPE_BELT|8|
DOTASlotType_t.DOTA_LOADOUT_TYPE_NECK|9|
DOTASlotType_t.DOTA_LOADOUT_TYPE_BACK|10|
DOTASlotType_t.DOTA_LOADOUT_TYPE_LEGS|11|
DOTASlotType_t.DOTA_LOADOUT_TYPE_GLOVES|12|
DOTASlotType_t.DOTA_LOADOUT_TYPE_TAIL|13|
DOTASlotType_t.DOTA_LOADOUT_TYPE_MISC|14|
DOTASlotType_t.DOTA_LOADOUT_TYPE_BODY_HEAD|15|
DOTASlotType_t.DOTA_LOADOUT_TYPE_MOUNT|16|
DOTASlotType_t.DOTA_LOADOUT_TYPE_SUMMON|17|
DOTASlotType_t.DOTA_LOADOUT_TYPE_SHAPESHIFT|18|
DOTASlotType_t.DOTA_LOADOUT_TYPE_TAUNT|19|
DOTASlotType_t.DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS|20|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY_ATTACK|21|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY1|22|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY2|23|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY3|24|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY4|25|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE|26|
DOTASlotType_t.DOTA_LOADOUT_TYPE_VOICE|27|
DOTASlotType_t.DOTA_LOADOUT_TYPE_WEAPON_PERSONA_1|28|
DOTASlotType_t.DOTA_LOADOUT_TYPE_OFFHAND_WEAPON_PERSONA_1|29|
DOTASlotType_t.DOTA_LOADOUT_TYPE_WEAPON2_PERSONA_1|30|
DOTASlotType_t.DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2_PERSONA_1|31|
DOTASlotType_t.DOTA_LOADOUT_TYPE_HEAD_PERSONA_1|32|
DOTASlotType_t.DOTA_LOADOUT_TYPE_SHOULDER_PERSONA_1|33|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ARMS_PERSONA_1|34|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ARMOR_PERSONA_1|35|
DOTASlotType_t.DOTA_LOADOUT_TYPE_BELT_PERSONA_1|36|
DOTASlotType_t.DOTA_LOADOUT_TYPE_NECK_PERSONA_1|37|
DOTASlotType_t.DOTA_LOADOUT_TYPE_BACK_PERSONA_1|38|
DOTASlotType_t.DOTA_LOADOUT_TYPE_LEGS_PERSONA_1|39|
DOTASlotType_t.DOTA_LOADOUT_TYPE_GLOVES_PERSONA_1|40|
DOTASlotType_t.DOTA_LOADOUT_TYPE_TAIL_PERSONA_1|41|
DOTASlotType_t.DOTA_LOADOUT_TYPE_MISC_PERSONA_1|42|
DOTASlotType_t.DOTA_LOADOUT_TYPE_BODY_HEAD_PERSONA_1|43|
DOTASlotType_t.DOTA_LOADOUT_TYPE_MOUNT_PERSONA_1|44|
DOTASlotType_t.DOTA_LOADOUT_TYPE_SUMMON_PERSONA_1|45|
DOTASlotType_t.DOTA_LOADOUT_TYPE_SHAPESHIFT_PERSONA_1|46|
DOTASlotType_t.DOTA_LOADOUT_TYPE_TAUNT_PERSONA_1|47|
DOTASlotType_t.DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS_PERSONA_1|48|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY_ATTACK_PERSONA_1|49|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY1_PERSONA_1|50|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY2_PERSONA_1|51|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY3_PERSONA_1|52|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY4_PERSONA_1|53|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE_PERSONA_1|54|
DOTASlotType_t.DOTA_LOADOUT_TYPE_VOICE_PERSONA_1|55|
DOTASlotType_t.DOTA_LOADOUT_PERSONA_1_START|28|
DOTASlotType_t.DOTA_LOADOUT_PERSONA_1_END|55|
DOTASlotType_t.DOTA_LOADOUT_TYPE_PERSONA_SELECTOR|56|
DOTASlotType_t.DOTA_LOADOUT_TYPE_COURIER|57|
DOTASlotType_t.DOTA_LOADOUT_TYPE_ANNOUNCER|58|
DOTASlotType_t.DOTA_LOADOUT_TYPE_MEGA_KILLS|59|
DOTASlotType_t.DOTA_LOADOUT_TYPE_MUSIC|60|
DOTASlotType_t.DOTA_LOADOUT_TYPE_WARD|61|
DOTASlotType_t.DOTA_LOADOUT_TYPE_HUD_SKIN|62|
DOTASlotType_t.DOTA_LOADOUT_TYPE_LOADING_SCREEN|63|
DOTASlotType_t.DOTA_LOADOUT_TYPE_WEATHER|64|
DOTASlotType_t.DOTA_LOADOUT_TYPE_HEROIC_STATUE|65|
DOTASlotType_t.DOTA_LOADOUT_TYPE_MULTIKILL_BANNER|66|
DOTASlotType_t.DOTA_LOADOUT_TYPE_CURSOR_PACK|67|
DOTASlotType_t.DOTA_LOADOUT_TYPE_TELEPORT_EFFECT|68|
DOTASlotType_t.DOTA_LOADOUT_TYPE_BLINK_EFFECT|69|
DOTASlotType_t.DOTA_LOADOUT_TYPE_EMBLEM|70|
DOTASlotType_t.DOTA_LOADOUT_TYPE_TERRAIN|71|
DOTASlotType_t.DOTA_LOADOUT_TYPE_RADIANT_CREEPS|72|
DOTASlotType_t.DOTA_LOADOUT_TYPE_DIRE_CREEPS|73|
DOTASlotType_t.DOTA_LOADOUT_TYPE_RADIANT_TOWER|74|
DOTASlotType_t.DOTA_LOADOUT_TYPE_DIRE_TOWER|75|
DOTASlotType_t.DOTA_LOADOUT_TYPE_VERSUS_SCREEN|76|
DOTASlotType_t.DOTA_PLAYER_LOADOUT_START|57|
DOTASlotType_t.DOTA_PLAYER_LOADOUT_END|76|
DOTASlotType_t.DOTA_LOADOUT_TYPE_NONE|77|
DOTASlotType_t.DOTA_LOADOUT_TYPE_COUNT|78|
## modifierfunction
Enumerator|Value|Description
--|--|--
modifierfunction.MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE|0|GetModifierPreAttack_BonusDamage
modifierfunction.MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_TARGET|1|GetModifierPreAttack_BonusDamage_Target
modifierfunction.MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC|2|GetModifierPreAttack_BonusDamage_Proc
modifierfunction.MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT|3|GetModifierPreAttack_BonusDamagePostCrit
modifierfunction.MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE|4|GetModifierBaseAttack_BonusDamage
modifierfunction.MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL|5|GetModifierProcAttack_BonusDamage_Physical
modifierfunction.MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL|6|GetModifierProcAttack_BonusDamage_Magical
modifierfunction.MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE|7|GetModifierProcAttack_BonusDamage_Pure
modifierfunction.MODIFIER_PROPERTY_PROCATTACK_FEEDBACK|8|GetModifierProcAttack_Feedback
modifierfunction.MODIFIER_PROPERTY_OVERRIDE_ATTACK_DAMAGE|9|GetModifierOverrideAttackDamage
modifierfunction.MODIFIER_PROPERTY_PRE_ATTACK|10|GetModifierPreAttack
modifierfunction.MODIFIER_PROPERTY_INVISIBILITY_LEVEL|11|GetModifierInvisibilityLevel
modifierfunction.MODIFIER_PROPERTY_INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION|12|GetModifierInvisibilityAttackBehaviorException
modifierfunction.MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY|13|GetModifierPersistentInvisibility
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT|14|GetModifierMoveSpeedBonus_Constant
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE|15|GetModifierMoveSpeedOverride
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE|16|GetModifierMoveSpeedBonus_Percentage
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE|17|GetModifierMoveSpeedBonus_Percentage_Unique
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE_2|18|GetModifierMoveSpeedBonus_Percentage_Unique_2
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE|19|GetModifierMoveSpeedBonus_Special_Boots
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE_2|20|GetModifierMoveSpeedBonus_Special_Boots_2
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE|21|GetModifierMoveSpeedBonus_Constant_Unique
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE_2|22|GetModifierMoveSpeedBonus_Constant_Unique_2
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE|23|GetModifierMoveSpeed_Absolute
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN|24|GetModifierMoveSpeed_AbsoluteMin
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MAX|25|GetModifierMoveSpeed_AbsoluteMax
modifierfunction.MODIFIER_PROPERTY_IGNORE_MOVESPEED_LIMIT|26|GetModifierIgnoreMovespeedLimit
modifierfunction.MODIFIER_PROPERTY_MOVESPEED_LIMIT|27|GetModifierMoveSpeed_Limit
modifierfunction.MODIFIER_PROPERTY_ATTACKSPEED_BASE_OVERRIDE|28|GetModifierAttackSpeedBaseOverride
modifierfunction.MODIFIER_PROPERTY_FIXED_ATTACK_RATE|29|GetModifierFixedAttackRate
modifierfunction.MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT|30|GetModifierAttackSpeedBonus_Constant
modifierfunction.MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT|31|GetModifierCooldownReduction_Constant
modifierfunction.MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT|32|GetModifierBaseAttackTimeConstant
modifierfunction.MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT_ADJUST|33|GetModifierBaseAttackTimeConstant_Adjust
modifierfunction.MODIFIER_PROPERTY_ATTACK_POINT_CONSTANT|34|GetModifierAttackPointConstant
modifierfunction.MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE|35|GetModifierDamageOutgoing_Percentage
modifierfunction.MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION|36|GetModifierDamageOutgoing_Percentage_Illusion
modifierfunction.MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY|37|GetModifierDamageOutgoing_Percentage_Illusion_Amplify
modifierfunction.MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE|38|GetModifierTotalDamageOutgoing_Percentage
modifierfunction.MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE|39|GetModifierSpellAmplify_Percentage
modifierfunction.MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE_UNIQUE|40|GetModifierSpellAmplify_PercentageUnique
modifierfunction.MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_SOURCE|41|GetModifierHealAmplify_PercentageSource
modifierfunction.MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_TARGET|42|GetModifierHealAmplify_PercentageTarget
modifierfunction.MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE|43|GetModifierHPRegenAmplify_Percentage
modifierfunction.MODIFIER_PROPERTY_LIFESTEAL_AMPLIFY_PERCENTAGE|44|GetModifierLifestealRegenAmplify_Percentage
modifierfunction.MODIFIER_PROPERTY_MP_REGEN_AMPLIFY_PERCENTAGE|45|GetModifierMPRegenAmplify_Percentage
modifierfunction.MODIFIER_PROPERTY_MP_RESTORE_AMPLIFY_PERCENTAGE|46|GetModifierMPRestoreAmplify_Percentage
modifierfunction.MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE|47|GetModifierBaseDamageOutgoing_Percentage
modifierfunction.MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE|48|GetModifierBaseDamageOutgoing_PercentageUnique
modifierfunction.MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE|49|GetModifierIncomingDamage_Percentage
modifierfunction.MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE|50|GetModifierIncomingPhysicalDamage_Percentage
modifierfunction.MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT|51|GetModifierIncomingPhysicalDamageConstant
modifierfunction.MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT|52|GetModifierIncomingSpellDamageConstant
modifierfunction.MODIFIER_PROPERTY_EVASION_CONSTANT|53|GetModifierEvasion_Constant
modifierfunction.MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT|54|GetModifierNegativeEvasion_Constant
modifierfunction.MODIFIER_PROPERTY_STATUS_RESISTANCE|55|GetModifierStatusResistance
modifierfunction.MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING|56|GetModifierStatusResistanceStacking
modifierfunction.MODIFIER_PROPERTY_STATUS_RESISTANCE_CASTER|57|GetModifierStatusResistanceCaster
modifierfunction.MODIFIER_PROPERTY_AVOID_DAMAGE|58|GetModifierAvoidDamage
modifierfunction.MODIFIER_PROPERTY_AVOID_SPELL|59|GetModifierAvoidSpell
modifierfunction.MODIFIER_PROPERTY_MISS_PERCENTAGE|60|GetModifierMiss_Percentage
modifierfunction.MODIFIER_PROPERTY_PHYSICAL_ARMOR_BASE_PERCENTAGE|61|GetModifierPhysicalArmorBase_Percentage
modifierfunction.MODIFIER_PROPERTY_PHYSICAL_ARMOR_TOTAL_PERCENTAGE|62|GetModifierPhysicalArmorTotal_Percentage
modifierfunction.MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS|63|GetModifierPhysicalArmorBonus
modifierfunction.MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE|64|GetModifierPhysicalArmorBonusUnique
modifierfunction.MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE|65|GetModifierPhysicalArmorBonusUniqueActive
modifierfunction.MODIFIER_PROPERTY_IGNORE_PHYSICAL_ARMOR|66|GetModifierIgnorePhysicalArmor
modifierfunction.MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BASE_REDUCTION|67|GetModifierMagicalResistanceBaseReduction
modifierfunction.MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DIRECT_MODIFICATION|68|GetModifierMagicalResistanceDirectModification
modifierfunction.MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS|69|GetModifierMagicalResistanceBonus
modifierfunction.MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS_ILLUSIONS|70|GetModifierMagicalResistanceBonusIllusions
modifierfunction.MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE|71|GetModifierMagicalResistanceDecrepifyUnique
modifierfunction.MODIFIER_PROPERTY_BASE_MANA_REGEN|72|GetModifierBaseRegen
modifierfunction.MODIFIER_PROPERTY_MANA_REGEN_CONSTANT|73|GetModifierConstantManaRegen
modifierfunction.MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE|74|GetModifierConstantManaRegenUnique
modifierfunction.MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE|75|GetModifierTotalPercentageManaRegen
modifierfunction.MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT|76|GetModifierConstantHealthRegen
modifierfunction.MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE|77|GetModifierHealthRegenPercentage
modifierfunction.MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE_UNIQUE|78|GetModifierHealthRegenPercentageUnique
modifierfunction.MODIFIER_PROPERTY_HEALTH_BONUS|79|GetModifierHealthBonus
modifierfunction.MODIFIER_PROPERTY_MANA_BONUS|80|GetModifierManaBonus
modifierfunction.MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS|81|GetModifierExtraStrengthBonus
modifierfunction.MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS|82|GetModifierExtraHealthBonus
modifierfunction.MODIFIER_PROPERTY_EXTRA_MANA_BONUS|83|GetModifierExtraManaBonus
modifierfunction.MODIFIER_PROPERTY_EXTRA_HEALTH_PERCENTAGE|84|GetModifierExtraHealthPercentage
modifierfunction.MODIFIER_PROPERTY_EXTRA_MANA_PERCENTAGE|85|GetModifierExtraManaPercentage
modifierfunction.MODIFIER_PROPERTY_STATS_STRENGTH_BONUS|86|GetModifierBonusStats_Strength
modifierfunction.MODIFIER_PROPERTY_STATS_AGILITY_BONUS|87|GetModifierBonusStats_Agility
modifierfunction.MODIFIER_PROPERTY_STATS_INTELLECT_BONUS|88|GetModifierBonusStats_Intellect
modifierfunction.MODIFIER_PROPERTY_STATS_STRENGTH_BONUS_PERCENTAGE|89|GetModifierBonusStats_Strength_Percentage
modifierfunction.MODIFIER_PROPERTY_STATS_AGILITY_BONUS_PERCENTAGE|90|GetModifierBonusStats_Agility_Percentage
modifierfunction.MODIFIER_PROPERTY_STATS_INTELLECT_BONUS_PERCENTAGE|91|GetModifierBonusStats_Intellect_Percentage
modifierfunction.MODIFIER_PROPERTY_CAST_RANGE_BONUS|92|GetModifierCastRangeBonus
modifierfunction.MODIFIER_PROPERTY_CAST_RANGE_BONUS_TARGET|93|GetModifierCastRangeBonusTarget
modifierfunction.MODIFIER_PROPERTY_CAST_RANGE_BONUS_STACKING|94|GetModifierCastRangeBonusStacking
modifierfunction.MODIFIER_PROPERTY_ATTACK_RANGE_BASE_OVERRIDE|95|GetModifierAttackRangeOverride
modifierfunction.MODIFIER_PROPERTY_ATTACK_RANGE_BONUS|96|GetModifierAttackRangeBonus
modifierfunction.MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE|97|GetModifierAttackRangeBonusUnique
modifierfunction.MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_PERCENTAGE|98|GetModifierAttackRangeBonusPercentage
modifierfunction.MODIFIER_PROPERTY_MAX_ATTACK_RANGE|99|GetModifierMaxAttackRange
modifierfunction.MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS|100|GetModifierProjectileSpeedBonus
modifierfunction.MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS_PERCENTAGE|101|GetModifierProjectileSpeedBonusPercentage
modifierfunction.MODIFIER_PROPERTY_PROJECTILE_NAME|102|GetModifierProjectileName
modifierfunction.MODIFIER_PROPERTY_REINCARNATION|103|ReincarnateTime
modifierfunction.MODIFIER_PROPERTY_RESPAWNTIME|104|GetModifierConstantRespawnTime
modifierfunction.MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE|105|GetModifierPercentageRespawnTime
modifierfunction.MODIFIER_PROPERTY_RESPAWNTIME_STACKING|106|GetModifierStackingRespawnTime
modifierfunction.MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE|107|GetModifierPercentageCooldown
modifierfunction.MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_ONGOING|108|GetModifierPercentageCooldownOngoing
modifierfunction.MODIFIER_PROPERTY_CASTTIME_PERCENTAGE|109|GetModifierPercentageCasttime
modifierfunction.MODIFIER_PROPERTY_MANACOST_PERCENTAGE|110|GetModifierPercentageManacost
modifierfunction.MODIFIER_PROPERTY_MANACOST_PERCENTAGE_STACKING|111|GetModifierPercentageManacostStacking
modifierfunction.MODIFIER_PROPERTY_DEATHGOLDCOST|112|GetModifierConstantDeathGoldCost
modifierfunction.MODIFIER_PROPERTY_EXP_RATE_BOOST|113|GetModifierPercentageExpRateBoost
modifierfunction.MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE|114|GetModifierPreAttack_CriticalStrike
modifierfunction.MODIFIER_PROPERTY_PREATTACK_TARGET_CRITICALSTRIKE|115|GetModifierPreAttack_Target_CriticalStrike
modifierfunction.MODIFIER_PROPERTY_MAGICAL_CONSTANT_BLOCK|116|GetModifierMagical_ConstantBlock
modifierfunction.MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK|117|GetModifierPhysical_ConstantBlock
modifierfunction.MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_SPECIAL|118|GetModifierPhysical_ConstantBlockSpecial
modifierfunction.MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR|119|GetModifierPhysical_ConstantBlockUnavoidablePreArmor
modifierfunction.MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK|120|GetModifierTotal_ConstantBlock
modifierfunction.MODIFIER_PROPERTY_OVERRIDE_ANIMATION|121|GetOverrideAnimation
modifierfunction.MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT|122|GetOverrideAnimationWeight
modifierfunction.MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE|123|GetOverrideAnimationRate
modifierfunction.MODIFIER_PROPERTY_ABSORB_SPELL|124|GetAbsorbSpell
modifierfunction.MODIFIER_PROPERTY_REFLECT_SPELL|125|GetReflectSpell
modifierfunction.MODIFIER_PROPERTY_DISABLE_AUTOATTACK|126|GetDisableAutoAttack
modifierfunction.MODIFIER_PROPERTY_BONUS_DAY_VISION|127|GetBonusDayVision
modifierfunction.MODIFIER_PROPERTY_BONUS_NIGHT_VISION|128|GetBonusNightVision
modifierfunction.MODIFIER_PROPERTY_BONUS_NIGHT_VISION_UNIQUE|129|GetBonusNightVisionUnique
modifierfunction.MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE|130|GetBonusVisionPercentage
modifierfunction.MODIFIER_PROPERTY_FIXED_DAY_VISION|131|GetFixedDayVision
modifierfunction.MODIFIER_PROPERTY_FIXED_NIGHT_VISION|132|GetFixedNightVision
modifierfunction.MODIFIER_PROPERTY_MIN_HEALTH|133|GetMinHealth
modifierfunction.MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL|134|GetAbsoluteNoDamagePhysical
modifierfunction.MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL|135|GetAbsoluteNoDamageMagical
modifierfunction.MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE|136|GetAbsoluteNoDamagePure
modifierfunction.MODIFIER_PROPERTY_IS_ILLUSION|137|GetIsIllusion
modifierfunction.MODIFIER_PROPERTY_ILLUSION_LABEL|138|GetModifierIllusionLabel
modifierfunction.MODIFIER_PROPERTY_STRONG_ILLUSION|139|GetModifierStrongIllusion
modifierfunction.MODIFIER_PROPERTY_SUPER_ILLUSION|140|GetModifierSuperIllusion
modifierfunction.MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE|141|GetModifierSuperIllusionWithUltimate
modifierfunction.MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE|142|GetModifierTurnRate_Percentage
modifierfunction.MODIFIER_PROPERTY_TURN_RATE_OVERRIDE|143|GetModifierTurnRate_Override
modifierfunction.MODIFIER_PROPERTY_DISABLE_HEALING|144|GetDisableHealing
modifierfunction.MODIFIER_PROPERTY_ALWAYS_ALLOW_ATTACK|145|GetAlwaysAllowAttack
modifierfunction.MODIFIER_PROPERTY_ALWAYS_ETHEREAL_ATTACK|146|GetAllowEtherealAttack
modifierfunction.MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL|147|GetOverrideAttackMagical
modifierfunction.MODIFIER_PROPERTY_UNIT_STATS_NEEDS_REFRESH|148|GetModifierUnitStatsNeedsRefresh
modifierfunction.MODIFIER_PROPERTY_BOUNTY_CREEP_MULTIPLIER|149|Unused
modifierfunction.MODIFIER_PROPERTY_BOUNTY_OTHER_MULTIPLIER|150|Unused
modifierfunction.MODIFIER_PROPERTY_UNIT_DISALLOW_UPGRADING|151|GetModifierUnitDisllowUpgrading
modifierfunction.MODIFIER_PROPERTY_DODGE_PROJECTILE|152|GetModifierDodgeProjectile
modifierfunction.MODIFIER_PROPERTY_TRIGGER_COSMETIC_AND_END_ATTACK|153|GetTriggerCosmeticAndEndAttack
modifierfunction.MODIFIER_EVENT_ON_SPELL_TARGET_READY|154|OnSpellTargetReady
modifierfunction.MODIFIER_EVENT_ON_ATTACK_RECORD|155|OnAttackRecord
modifierfunction.MODIFIER_EVENT_ON_ATTACK_START|156|OnAttackStart
modifierfunction.MODIFIER_EVENT_ON_ATTACK|157|OnAttack
modifierfunction.MODIFIER_EVENT_ON_ATTACK_LANDED|158|OnAttackLanded
modifierfunction.MODIFIER_EVENT_ON_ATTACK_FAIL|159|OnAttackFail
modifierfunction.MODIFIER_EVENT_ON_ATTACK_ALLIED|160|OnAttackAllied
modifierfunction.MODIFIER_EVENT_ON_PROJECTILE_DODGE|161|OnProjectileDodge
modifierfunction.MODIFIER_EVENT_ON_ORDER|162|OnOrder
modifierfunction.MODIFIER_EVENT_ON_UNIT_MOVED|163|OnUnitMoved
modifierfunction.MODIFIER_EVENT_ON_ABILITY_START|164|OnAbilityStart
modifierfunction.MODIFIER_EVENT_ON_ABILITY_EXECUTED|165|OnAbilityExecuted
modifierfunction.MODIFIER_EVENT_ON_ABILITY_FULLY_CAST|166|OnAbilityFullyCast
modifierfunction.MODIFIER_EVENT_ON_BREAK_INVISIBILITY|167|OnBreakInvisibility
modifierfunction.MODIFIER_EVENT_ON_ABILITY_END_CHANNEL|168|OnAbilityEndChannel
modifierfunction.MODIFIER_EVENT_ON_PROCESS_UPGRADE|169|Unused
modifierfunction.MODIFIER_EVENT_ON_REFRESH|170|Unused
modifierfunction.MODIFIER_EVENT_ON_TAKEDAMAGE|171|OnTakeDamage
modifierfunction.MODIFIER_EVENT_ON_DEATH_PREVENTED|172|OnDamagePrevented
modifierfunction.MODIFIER_EVENT_ON_STATE_CHANGED|173|OnStateChanged
modifierfunction.MODIFIER_EVENT_ON_ORB_EFFECT|174|Unused
modifierfunction.MODIFIER_EVENT_ON_PROCESS_CLEAVE|175|OnProcessCleave
modifierfunction.MODIFIER_EVENT_ON_DAMAGE_CALCULATED|176|OnDamageCalculated
modifierfunction.MODIFIER_EVENT_ON_ATTACKED|177|OnAttacked
modifierfunction.MODIFIER_EVENT_ON_DEATH|178|OnDeath
modifierfunction.MODIFIER_EVENT_ON_RESPAWN|179|OnRespawn
modifierfunction.MODIFIER_EVENT_ON_SPENT_MANA|180|OnSpentMana
modifierfunction.MODIFIER_EVENT_ON_TELEPORTING|181|OnTeleporting
modifierfunction.MODIFIER_EVENT_ON_TELEPORTED|182|OnTeleported
modifierfunction.MODIFIER_EVENT_ON_SET_LOCATION|183|OnSetLocation
modifierfunction.MODIFIER_EVENT_ON_HEALTH_GAINED|184|OnHealthGained
modifierfunction.MODIFIER_EVENT_ON_MANA_GAINED|185|OnManaGained
modifierfunction.MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT|186|OnTakeDamageKillCredit
modifierfunction.MODIFIER_EVENT_ON_HERO_KILLED|187|OnHeroKilled
modifierfunction.MODIFIER_EVENT_ON_HEAL_RECEIVED|188|OnHealReceived
modifierfunction.MODIFIER_EVENT_ON_BUILDING_KILLED|189|OnBuildingKilled
modifierfunction.MODIFIER_EVENT_ON_MODEL_CHANGED|190|OnModelChanged
modifierfunction.MODIFIER_EVENT_ON_MODIFIER_ADDED|191|OnModifierAdded
modifierfunction.MODIFIER_PROPERTY_TOOLTIP|192|OnTooltip
modifierfunction.MODIFIER_PROPERTY_MODEL_CHANGE|193|GetModifierModelChange
modifierfunction.MODIFIER_PROPERTY_MODEL_SCALE|194|GetModifierModelScale
modifierfunction.MODIFIER_PROPERTY_IS_SCEPTER|195|GetModifierScepter
modifierfunction.MODIFIER_PROPERTY_RADAR_COOLDOWN_REDUCTION|196|GetModifierRadarCooldownReduction
modifierfunction.MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS|197|GetActivityTranslationModifiers
modifierfunction.MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND|198|GetAttackSound
modifierfunction.MODIFIER_PROPERTY_LIFETIME_FRACTION|199|GetUnitLifetimeFraction
modifierfunction.MODIFIER_PROPERTY_PROVIDES_FOW_POSITION|200|GetModifierProvidesFOWVision
modifierfunction.MODIFIER_PROPERTY_SPELLS_REQUIRE_HP|201|GetModifierSpellsRequireHP
modifierfunction.MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP|202|GetForceDrawOnMinimap
modifierfunction.MODIFIER_PROPERTY_DISABLE_TURNING|203|GetModifierDisableTurning
modifierfunction.MODIFIER_PROPERTY_IGNORE_CAST_ANGLE|204|GetModifierIgnoreCastAngle
modifierfunction.MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE|205|GetModifierChangeAbilityValue
modifierfunction.MODIFIER_PROPERTY_ABILITY_LAYOUT|206|GetModifierAbilityLayout
modifierfunction.MODIFIER_EVENT_ON_DOMINATED|207|OnDominated
modifierfunction.MODIFIER_PROPERTY_TEMPEST_DOUBLE|208|GetModifierTempestDouble
modifierfunction.MODIFIER_PROPERTY_PRESERVE_PARTICLES_ON_MODEL_CHANGE|209|PreserveParticlesOnModelChanged
modifierfunction.MODIFIER_EVENT_ON_ATTACK_FINISHED|210|OnAttackFinished
modifierfunction.MODIFIER_PROPERTY_IGNORE_COOLDOWN|211|GetModifierIgnoreCooldown
modifierfunction.MODIFIER_PROPERTY_CAN_ATTACK_TREES|212|GetModifierCanAttackTrees
modifierfunction.MODIFIER_PROPERTY_VISUAL_Z_DELTA|213|GetVisualZDelta
modifierfunction.MODIFIER_PROPERTY_INCOMING_DAMAGE_ILLUSION|214|
modifierfunction.MODIFIER_PROPERTY_DONT_GIVE_VISION_OF_ATTACKER|215|GetModifierNoVisionOfAttacker
modifierfunction.MODIFIER_PROPERTY_TOOLTIP2|216|OnTooltip2
modifierfunction.MODIFIER_EVENT_ON_ATTACK_RECORD_DESTROY|217|OnAttackRecordDestroy
modifierfunction.MODIFIER_EVENT_ON_PROJECTILE_OBSTRUCTION_HIT|218|OnProjectileObstructionHit
modifierfunction.MODIFIER_PROPERTY_SUPPRESS_TELEPORT|219|GetSuppressTeleport
modifierfunction.MODIFIER_EVENT_ON_ATTACK_CANCELLED|220|OnAttackCancelled
modifierfunction.MODIFIER_PROPERTY_SUPPRESS_CLEAVE|221|GetSuppressCleave
modifierfunction.MODIFIER_PROPERTY_BOT_ATTACK_SCORE_BONUS|222|BotAttackScoreBonus
modifierfunction.MODIFIER_FUNCTION_LAST|223|
modifierfunction.MODIFIER_FUNCTION_INVALID|255|
## modifierstate
Enumerator|Value|Description
--|--|--
modifierstate.MODIFIER_STATE_ROOTED|0|
modifierstate.MODIFIER_STATE_DISARMED|1|
modifierstate.MODIFIER_STATE_ATTACK_IMMUNE|2|
modifierstate.MODIFIER_STATE_SILENCED|3|
modifierstate.MODIFIER_STATE_MUTED|4|
modifierstate.MODIFIER_STATE_STUNNED|5|
modifierstate.MODIFIER_STATE_HEXED|6|
modifierstate.MODIFIER_STATE_INVISIBLE|7|
modifierstate.MODIFIER_STATE_INVULNERABLE|8|
modifierstate.MODIFIER_STATE_MAGIC_IMMUNE|9|
modifierstate.MODIFIER_STATE_PROVIDES_VISION|10|
modifierstate.MODIFIER_STATE_NIGHTMARED|11|
modifierstate.MODIFIER_STATE_BLOCK_DISABLED|12|
modifierstate.MODIFIER_STATE_EVADE_DISABLED|13|
modifierstate.MODIFIER_STATE_UNSELECTABLE|14|
modifierstate.MODIFIER_STATE_CANNOT_TARGET_ENEMIES|15|
modifierstate.MODIFIER_STATE_CANNOT_MISS|16|
modifierstate.MODIFIER_STATE_SPECIALLY_DENIABLE|17|
modifierstate.MODIFIER_STATE_FROZEN|18|
modifierstate.MODIFIER_STATE_COMMAND_RESTRICTED|19|
modifierstate.MODIFIER_STATE_NOT_ON_MINIMAP|20|
modifierstate.MODIFIER_STATE_LOW_ATTACK_PRIORITY|21|
modifierstate.MODIFIER_STATE_NO_HEALTH_BAR|22|
modifierstate.MODIFIER_STATE_FLYING|23|
modifierstate.MODIFIER_STATE_NO_UNIT_COLLISION|24|
modifierstate.MODIFIER_STATE_NO_TEAM_MOVE_TO|25|
modifierstate.MODIFIER_STATE_NO_TEAM_SELECT|26|
modifierstate.MODIFIER_STATE_PASSIVES_DISABLED|27|
modifierstate.MODIFIER_STATE_DOMINATED|28|
modifierstate.MODIFIER_STATE_BLIND|29|
modifierstate.MODIFIER_STATE_OUT_OF_GAME|30|
modifierstate.MODIFIER_STATE_FAKE_ALLY|31|
modifierstate.MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY|32|
modifierstate.MODIFIER_STATE_TRUESIGHT_IMMUNE|33|
modifierstate.MODIFIER_STATE_UNTARGETABLE|34|
modifierstate.MODIFIER_STATE_IGNORING_MOVE_AND_ATTACK_ORDERS|35|
modifierstate.MODIFIER_STATE_ALLOW_PATHING_TROUGH_TREES|36|
modifierstate.MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES|37|
modifierstate.MODIFIER_STATE_UNSLOWABLE|38|
modifierstate.MODIFIER_STATE_TETHERED|39|
modifierstate.MODIFIER_STATE_IGNORING_STOP_ORDERS|40|
modifierstate.MODIFIER_STATE_LAST|41|
## DOTAModifierAttribute_t
Enumerator|Value|Description
--|--|--
DOTAModifierAttribute_t.MODIFIER_ATTRIBUTE_NONE|0|
DOTAModifierAttribute_t.MODIFIER_ATTRIBUTE_PERMANENT|1|
DOTAModifierAttribute_t.MODIFIER_ATTRIBUTE_MULTIPLE|2|
DOTAModifierAttribute_t.MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE|4|
DOTAModifierAttribute_t.MODIFIER_ATTRIBUTE_AURA_PRIORITY|8|
## Attributes
Enumerator|Value|Description
--|--|--
Attributes.DOTA_ATTRIBUTE_STRENGTH|0|
Attributes.DOTA_ATTRIBUTE_AGILITY|1|
Attributes.DOTA_ATTRIBUTE_INTELLECT|2|
Attributes.DOTA_ATTRIBUTE_MAX|3|
Attributes.DOTA_ATTRIBUTE_INVALID|-1|
## ParticleAttachment_t
Enumerator|Value|Description
--|--|--
ParticleAttachment_t.PATTACH_INVALID|-1|
ParticleAttachment_t.PATTACH_ABSORIGIN|0|
ParticleAttachment_t.PATTACH_ABSORIGIN_FOLLOW|1|
ParticleAttachment_t.PATTACH_CUSTOMORIGIN|2|
ParticleAttachment_t.PATTACH_CUSTOMORIGIN_FOLLOW|3|
ParticleAttachment_t.PATTACH_POINT|4|
ParticleAttachment_t.PATTACH_POINT_FOLLOW|5|
ParticleAttachment_t.PATTACH_EYES_FOLLOW|6|
ParticleAttachment_t.PATTACH_OVERHEAD_FOLLOW|7|
ParticleAttachment_t.PATTACH_WORLDORIGIN|8|
ParticleAttachment_t.PATTACH_ROOTBONE_FOLLOW|9|
ParticleAttachment_t.PATTACH_RENDERORIGIN_FOLLOW|10|
ParticleAttachment_t.PATTACH_MAIN_VIEW|11|
ParticleAttachment_t.PATTACH_WATERWAKE|12|
ParticleAttachment_t.PATTACH_CENTER_FOLLOW|13|
ParticleAttachment_t.PATTACH_CUSTOM_GAME_STATE_1|14|
ParticleAttachment_t.MAX_PATTACH_TYPES|15|
## DOTA_MOTION_CONTROLLER_PRIORITY
Enumerator|Value|Description
--|--|--
DOTA_MOTION_CONTROLLER_PRIORITY.DOTA_MOTION_CONTROLLER_PRIORITY_LOWEST|0|
DOTA_MOTION_CONTROLLER_PRIORITY.DOTA_MOTION_CONTROLLER_PRIORITY_LOW|1|
DOTA_MOTION_CONTROLLER_PRIORITY.DOTA_MOTION_CONTROLLER_PRIORITY_MEDIUM|2|
DOTA_MOTION_CONTROLLER_PRIORITY.DOTA_MOTION_CONTROLLER_PRIORITY_HIGH|3|
DOTA_MOTION_CONTROLLER_PRIORITY.DOTA_MOTION_CONTROLLER_PRIORITY_HIGHEST|4|
## DOTASpeechType_t
Enumerator|Value|Description
--|--|--
DOTASpeechType_t.DOTA_SPEECH_USER_INVALID|0|
DOTASpeechType_t.DOTA_SPEECH_USER_SINGLE|1|
DOTASpeechType_t.DOTA_SPEECH_USER_TEAM|2|
DOTASpeechType_t.DOTA_SPEECH_USER_TEAM_NEARBY|3|
DOTASpeechType_t.DOTA_SPEECH_USER_NEARBY|4|
DOTASpeechType_t.DOTA_SPEECH_USER_ALL|5|
DOTASpeechType_t.DOTA_SPEECH_GOOD_TEAM|6|
DOTASpeechType_t.DOTA_SPEECH_BAD_TEAM|7|
DOTASpeechType_t.DOTA_SPEECH_SPECTATOR|8|
DOTASpeechType_t.DOTA_SPEECH_RECIPIENT_TYPE_MAX|9|
## DOTAAbilitySpeakTrigger_t
Enumerator|Value|Description
--|--|--
DOTAAbilitySpeakTrigger_t.DOTA_ABILITY_SPEAK_START_ACTION_PHASE|0|
DOTAAbilitySpeakTrigger_t.DOTA_ABILITY_SPEAK_CAST|1|
## DotaCustomUIType_t
Enumerator|Value|Description
--|--|--
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_HUD|0|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_HERO_SELECTION|1|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_GAME_INFO|2|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_GAME_SETUP|3|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_FLYOUT_SCOREBOARD|4|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_HUD_TOP_BAR|5|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_END_SCREEN|6|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_COUNT|7|
DotaCustomUIType_t.DOTA_CUSTOM_UI_TYPE_INVALID|-1|
## DotaDefaultUIElement_t
Enumerator|Value|Description
--|--|--
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVALID|-1|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_TIMEOFDAY|0|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_HEROES|1|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD|2|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_PANEL|3|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_MINIMAP|4|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_PANEL|5|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_SHOP|6|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_ITEMS|7|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_QUICKBUY|8|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_COURIER|9|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_PROTECT|10|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_GOLD|11|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_SHOP_SUGGESTEDITEMS|12|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_HERO_SELECTION_TEAMS|13|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_HERO_SELECTION_GAME_NAME|14|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_HERO_SELECTION_CLOCK|15|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_MENU_BUTTONS|16|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR_BACKGROUND|17|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR_RADIANT_TEAM|18|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR_DIRE_TEAM|19|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR_SCORE|20|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ENDGAME|21|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ENDGAME_CHAT|22|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_QUICK_STATS|23|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_PREGAME_STRATEGYUI|24|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_KILLCAM|25|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR|26|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_CUSTOMUI_BEHIND_HUD_ELEMENTS|27|
DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ELEMENT_COUNT|28|
## PlayerUltimateStateOrTime_t
Enumerator|Value|Description
--|--|--
PlayerUltimateStateOrTime_t.PLAYER_ULTIMATE_STATE_READY|0|
PlayerUltimateStateOrTime_t.PLAYER_ULTIMATE_STATE_NO_MANA|-1|
PlayerUltimateStateOrTime_t.PLAYER_ULTIMATE_STATE_NOT_LEVELED|-2|
PlayerUltimateStateOrTime_t.PLAYER_ULTIMATE_STATE_HIDDEN|-3|
## PlayerOrderIssuer_t
Enumerator|Value|Description
--|--|--
PlayerOrderIssuer_t.DOTA_ORDER_ISSUER_SELECTED_UNITS|0|
PlayerOrderIssuer_t.DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY|1|
PlayerOrderIssuer_t.DOTA_ORDER_ISSUER_HERO_ONLY|2|
PlayerOrderIssuer_t.DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY|3|
## OrderQueueBehavior_t
Enumerator|Value|Description
--|--|--
OrderQueueBehavior_t.DOTA_ORDER_QUEUE_DEFAULT|0|
OrderQueueBehavior_t.DOTA_ORDER_QUEUE_NEVER|1|
OrderQueueBehavior_t.DOTA_ORDER_QUEUE_ALWAYS|2|
## CLICK_BEHAVIORS
Enumerator|Value|Description
--|--|--
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_NONE|0|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_MOVE|1|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_ATTACK|2|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_CAST|3|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_DROP_ITEM|4|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_DROP_SHOP_ITEM|5|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_DRAG|6|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_LEARN_ABILITY|7|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_PATROL|8|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_VECTOR_CAST|9|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_UNUSED|10|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_RADAR|11|
CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_LAST|12|
## AbilityLearnResult_t
Enumerator|Value|Description
--|--|--
AbilityLearnResult_t.ABILITY_CAN_BE_UPGRADED|0|
AbilityLearnResult_t.ABILITY_CANNOT_BE_UPGRADED_NOT_UPGRADABLE|1|
AbilityLearnResult_t.ABILITY_CANNOT_BE_UPGRADED_AT_MAX|2|
AbilityLearnResult_t.ABILITY_CANNOT_BE_UPGRADED_REQUIRES_LEVEL|3|
AbilityLearnResult_t.ABILITY_NOT_LEARNABLE|4|
## DOTAKeybindCommand_t
Enumerator|Value|Description
--|--|--
DOTAKeybindCommand_t.DOTA_KEYBIND_NONE|0|
DOTAKeybindCommand_t.DOTA_KEYBIND_FIRST|1|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_UP|1|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_DOWN|2|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_LEFT|3|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_RIGHT|4|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_GRIP|5|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_YAW_GRIP|6|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_1|7|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_2|8|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_3|9|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_4|10|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_5|11|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_6|12|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_7|13|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_8|14|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_9|15|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_SAVED_POSITION_10|16|
DOTAKeybindCommand_t.DOTA_KEYBIND_HERO_ATTACK|17|
DOTAKeybindCommand_t.DOTA_KEYBIND_HERO_MOVE|18|
DOTAKeybindCommand_t.DOTA_KEYBIND_HERO_MOVE_DIRECTION|19|
DOTAKeybindCommand_t.DOTA_KEYBIND_PATROL|20|
DOTAKeybindCommand_t.DOTA_KEYBIND_HERO_STOP|21|
DOTAKeybindCommand_t.DOTA_KEYBIND_HERO_HOLD|22|
DOTAKeybindCommand_t.DOTA_KEYBIND_HERO_SELECT|23|
DOTAKeybindCommand_t.DOTA_KEYBIND_COURIER_SELECT|24|
DOTAKeybindCommand_t.DOTA_KEYBIND_COURIER_DELIVER|25|
DOTAKeybindCommand_t.DOTA_KEYBIND_COURIER_BURST|26|
DOTAKeybindCommand_t.DOTA_KEYBIND_COURIER_SHIELD|27|
DOTAKeybindCommand_t.DOTA_KEYBIND_PAUSE|28|
DOTAKeybindCommand_t.DOTA_SELECT_ALL|29|
DOTAKeybindCommand_t.DOTA_SELECT_ALL_OTHERS|30|
DOTAKeybindCommand_t.DOTA_RECENT_EVENT|31|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_TEAM|32|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_GLOBAL|33|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_TEAM2|34|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_GLOBAL2|35|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_VOICE_PARTY|36|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_VOICE_TEAM|37|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL|38|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL2|39|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_CARE|40|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_BACK|41|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_NEED_WARDS|42|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_STUN|43|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_HELP|44|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_GET_PUSH|45|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_GOOD_JOB|46|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_MISSING|47|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_MISSING_TOP|48|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_MISSING_MIDDLE|49|
DOTAKeybindCommand_t.DOTA_KEYBIND_CHAT_WHEEL_MISSING_BOTTOM|50|
DOTAKeybindCommand_t.DOTA_KEYBIND_HERO_CHAT_WHEEL|51|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPRAY_WHEEL|52|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY1|53|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY2|54|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY3|55|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY1|56|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY2|57|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_ULTIMATE|58|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY1_QUICKCAST|59|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY2_QUICKCAST|60|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY3_QUICKCAST|61|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY1_QUICKCAST|62|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY2_QUICKCAST|63|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_ULTIMATE_QUICKCAST|64|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY1_EXPLICIT_AUTOCAST|65|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY2_EXPLICIT_AUTOCAST|66|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY3_EXPLICIT_AUTOCAST|67|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY1_EXPLICIT_AUTOCAST|68|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY2_EXPLICIT_AUTOCAST|69|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_ULTIMATE_EXPLICIT_AUTOCAST|70|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY1_QUICKCAST_AUTOCAST|71|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY2_QUICKCAST_AUTOCAST|72|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY3_QUICKCAST_AUTOCAST|73|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY1_QUICKCAST_AUTOCAST|74|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY2_QUICKCAST_AUTOCAST|75|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_ULTIMATE_QUICKCAST_AUTOCAST|76|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY1_AUTOMATIC_AUTOCAST|77|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY2_AUTOMATIC_AUTOCAST|78|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_PRIMARY3_AUTOMATIC_AUTOCAST|79|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY1_AUTOMATIC_AUTOCAST|80|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_SECONDARY2_AUTOMATIC_AUTOCAST|81|
DOTAKeybindCommand_t.DOTA_KEYBIND_ABILITY_ULTIMATE_AUTOMATIC_AUTOCAST|82|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY1|83|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY2|84|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY3|85|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY4|86|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY5|87|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY6|88|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORYTP|89|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY1_QUICKCAST|90|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY2_QUICKCAST|91|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY3_QUICKCAST|92|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY4_QUICKCAST|93|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY5_QUICKCAST|94|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY6_QUICKCAST|95|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORYTP_QUICKCAST|96|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY1_AUTOCAST|97|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY2_AUTOCAST|98|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY3_AUTOCAST|99|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY4_AUTOCAST|100|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY5_AUTOCAST|101|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY6_AUTOCAST|102|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORYTP_AUTOCAST|103|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY1_QUICKAUTOCAST|104|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY2_QUICKAUTOCAST|105|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY3_QUICKAUTOCAST|106|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY4_QUICKAUTOCAST|107|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY5_QUICKAUTOCAST|108|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORY6_QUICKAUTOCAST|109|
DOTAKeybindCommand_t.DOTA_KEYBIND_INVENTORYTP_QUICKAUTOCAST|110|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP1|111|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP2|112|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP3|113|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP4|114|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP5|115|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP6|116|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP7|117|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP8|118|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP9|119|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUP10|120|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUPCYCLE|121|
DOTAKeybindCommand_t.DOTA_KEYBIND_SELECT_ALLY1|122|
DOTAKeybindCommand_t.DOTA_KEYBIND_SELECT_ALLY2|123|
DOTAKeybindCommand_t.DOTA_KEYBIND_SELECT_ALLY3|124|
DOTAKeybindCommand_t.DOTA_KEYBIND_SELECT_ALLY4|125|
DOTAKeybindCommand_t.DOTA_KEYBIND_SELECT_ALLY5|126|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_TOGGLE|127|
DOTAKeybindCommand_t.DOTA_KEYBIND_SCOREBOARD_TOGGLE|128|
DOTAKeybindCommand_t.DOTA_KEYBIND_SCREENSHOT|129|
DOTAKeybindCommand_t.DOTA_KEYBIND_ESCAPE|130|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONSOLE|131|
DOTAKeybindCommand_t.DOTA_KEYBIND_DEATH_SUMMARY|132|
DOTAKeybindCommand_t.DOTA_KEYBIND_LEARN_ABILITIES|133|
DOTAKeybindCommand_t.DOTA_KEYBIND_LEARN_STATS|134|
DOTAKeybindCommand_t.DOTA_KEYBIND_ACTIVATE_GLYPH|135|
DOTAKeybindCommand_t.DOTA_KEYBIND_ACTIVATE_RADAR|136|
DOTAKeybindCommand_t.DOTA_KEYBIND_PURCHASE_QUICKBUY|137|
DOTAKeybindCommand_t.DOTA_KEYBIND_PURCHASE_STICKY|138|
DOTAKeybindCommand_t.DOTA_KEYBIND_GRAB_STASH_ITEMS|139|
DOTAKeybindCommand_t.DOTA_KEYBIND_TOGGLE_AUTOATTACK|140|
DOTAKeybindCommand_t.DOTA_KEYBIND_TAUNT|141|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_CONSUMABLES|142|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_ATTRIBUTES|143|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_ARMAMENTS|144|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_ARCANE|145|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_BASICS|146|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SUPPORT|147|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_CASTER|148|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_WEAPONS|149|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_ARMOR|150|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_ARTIFACTS|151|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SIDE_PAGE_1|152|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SIDE_PAGE_2|153|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SECRET|154|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SEARCHBOX|155|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_1|156|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_2|157|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_3|158|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_4|159|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_5|160|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_6|161|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_7|162|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_8|163|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_9|164|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_10|165|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_11|166|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_12|167|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_13|168|
DOTAKeybindCommand_t.DOTA_KEYBIND_SHOP_SLOT_14|169|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_UP|170|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_DOWN|171|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_LEFT|172|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_RIGHT|173|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_GRIP|174|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_1|175|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_2|176|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_3|177|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_4|178|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_5|179|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_6|180|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_7|181|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_8|182|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_9|183|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_10|184|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_UNIT_SELECT|185|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_HERO_SELECT|186|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_PAUSE|187|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_CHAT|188|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_SCOREBOARD|189|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_INCREASE_REPLAY_SPEED|190|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DECREASE_REPLAY_SPEED|191|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_STATS_HARVEST|192|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_STATS_ITEM|193|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_STATS_GOLD|194|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_STATS_XP|195|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_STATS_FANTASY|196|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_STATS_WINCHANCE|197|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOW_TOGGLEBOTH|198|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOW_TOGGLERADIENT|199|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOW_TOGGLEDIRE|200|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_OPEN_BROADCASTER_MENU|201|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_KDA|202|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_LASTHITS_DENIES|203|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_LEVEL|204|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_XP_PER_MIN|205|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_GOLD|206|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_TOTALGOLD|207|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_GOLD_PER_MIN|208|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_BUYBACK|209|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_NETWORTH|210|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_FANTASY|211|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_SORT|212|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_DROPDOWN_CLOSE|213|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_1|214|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_2|215|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_3|216|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_4|217|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_5|218|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_6|219|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_7|220|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_8|221|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_9|222|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_FOCUS_PLAYER_10|223|
DOTAKeybindCommand_t.DOTA_KEYBIND_SPEC_COACH_VIEWTOGGLE|224|
DOTAKeybindCommand_t.DOTA_KEYBIND_INSPECTHEROINWORLD|225|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_ZOOM_IN|226|
DOTAKeybindCommand_t.DOTA_KEYBIND_CAMERA_ZOOM_OUT|227|
DOTAKeybindCommand_t.DOTA_KEYBIND_CONTROL_GROUPCYCLEPREV|228|
DOTAKeybindCommand_t.DOTA_KEYBIND_DOTA_ALT|229|
DOTAKeybindCommand_t.DOTA_KEYBIND_COUNT|230|
## DOTA_SHOP_TYPE
Enumerator|Value|Description
--|--|--
DOTA_SHOP_TYPE.DOTA_SHOP_HOME|0|
DOTA_SHOP_TYPE.DOTA_SHOP_SIDE|1|
DOTA_SHOP_TYPE.DOTA_SHOP_SECRET|2|
DOTA_SHOP_TYPE.DOTA_SHOP_GROUND|3|
DOTA_SHOP_TYPE.DOTA_SHOP_SIDE2|4|
DOTA_SHOP_TYPE.DOTA_SHOP_SECRET2|5|
DOTA_SHOP_TYPE.DOTA_SHOP_CUSTOM|6|
DOTA_SHOP_TYPE.DOTA_SHOP_NONE|7|