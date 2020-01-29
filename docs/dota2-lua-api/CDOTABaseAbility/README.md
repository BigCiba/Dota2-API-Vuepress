# CDOTABaseAbility
extends [CBaseEntity](../CBaseEntity)

Function|Description|Client
--|--|:--:
[unknown CanAbilityBeUpgraded()](CanAbilityBeUpgraded)||❌
[bool CastAbility()](CastAbility)||❌
[bool ContinueCasting()](ContinueCasting)||❌
[void CreateVisibilityNode(vLocation, fRadius, fDuration)](CreateVisibilityNode)||❌
[void DecrementModifierRefCount()](DecrementModifierRefCount)||❌
[void EndChannel(bInterrupted)](EndChannel)||❌
[void EndCooldown()](EndCooldown)|Clear the cooldown remaining on this ability.|❌
[int GetAOERadius()](GetAOERadius)||❌
[int GetAbilityDamage()](GetAbilityDamage)||❌
[int GetAbilityDamageType()](GetAbilityDamageType)||❌
[int GetAbilityIndex()](GetAbilityIndex)||❌
[table GetAbilityKeyValues()](GetAbilityKeyValues)|Gets the key values definition for this ability.|❌
[string GetAbilityName()](GetAbilityName)|Returns the name of this ability.|❌
[int GetAbilityTargetFlags()](GetAbilityTargetFlags)||❌
[int GetAbilityTargetTeam()](GetAbilityTargetTeam)||❌
[int GetAbilityTargetType()](GetAbilityTargetType)||❌
[int GetAbilityType()](GetAbilityType)||❌
[bool GetAnimationIgnoresModelScale()](GetAnimationIgnoresModelScale)||❌
[string GetAssociatedPrimaryAbilities()](GetAssociatedPrimaryAbilities)||❌
[string GetAssociatedSecondaryAbilities()](GetAssociatedSecondaryAbilities)||❌
[bool GetAutoCastState()](GetAutoCastState)||❌
[float GetBackswingTime()](GetBackswingTime)||❌
[int GetBehavior()](GetBehavior)||✔️
[float GetCastPoint()](GetCastPoint)||❌
[int GetCastRange(vLocation, hTarget)](GetCastRange)|Gets the cast range of the ability.|❌
[handle GetCaster()](GetCaster)||✔️
[float GetChannelStartTime()](GetChannelStartTime)||❌
[float GetChannelTime()](GetChannelTime)||❌
[int GetChannelledManaCostPerSecond(iLevel)](GetChannelledManaCostPerSecond)||❌
[handle GetCloneSource()](GetCloneSource)||❌
[int GetConceptRecipientType()](GetConceptRecipientType)||❌
[float GetCooldown(iLevel)](GetCooldown)|Get the cooldown duration for this ability at a given level, not the amount of cooldown actually left.|❌
[float GetCooldownTime()](GetCooldownTime)||❌
[float GetCooldownTimeRemaining()](GetCooldownTimeRemaining)||❌
[Vector GetCursorPosition()](GetCursorPosition)||❌
[handle GetCursorTarget()](GetCursorTarget)||❌
[bool GetCursorTargetingNothing()](GetCursorTargetingNothing)||❌
[float GetDuration()](GetDuration)||❌
[float GetEffectiveCooldown(iLevel)](GetEffectiveCooldown)||❌
[int GetGoldCost(iLevel)](GetGoldCost)||❌
[int GetGoldCostForUpgrade(iLevel)](GetGoldCostForUpgrade)||❌
[int GetHeroLevelRequiredToUpgrade()](GetHeroLevelRequiredToUpgrade)||❌
[string GetIntrinsicModifierName()](GetIntrinsicModifierName)|返回此技能被动给予的修饰器的名称|❌
[int GetLevel()](GetLevel)|Get the current level of the ability.|✔️
[table GetLevelSpecialValueFor(szName, nLevel)](GetLevelSpecialValueFor)||❌
[int GetManaCost(iLevel)](GetManaCost)||❌
[int GetMaxLevel()](GetMaxLevel)||❌
[float GetModifierValue()](GetModifierValue)||❌
[float GetModifierValueBonus()](GetModifierValueBonus)||❌
[float GetPlaybackRateOverride()](GetPlaybackRateOverride)||❌
[string GetSharedCooldownName()](GetSharedCooldownName)||❌
[table GetSpecialValueFor(szName)](GetSpecialValueFor)|从该技能的当前等级的特殊值中获取值。|✔️
[string GetStolenActivityModifier()](GetStolenActivityModifier)||❌
[bool GetToggleState()](GetToggleState)||✔️
[bool GetUpgradeRecommended()](GetUpgradeRecommended)||❌
[bool HeroXPChange(flXP)](HeroXPChange)||❌
[void IncrementModifierRefCount()](IncrementModifierRefCount)||❌
[bool IsActivated()](IsActivated)||❌
[bool IsAttributeBonus()](IsAttributeBonus)||❌
[bool IsChanneling()](IsChanneling)|Returns whether the ability is currently channeling.|❌
[bool IsCooldownReady()](IsCooldownReady)||❌
[bool IsCosmetic(hEntity)](IsCosmetic)||❌
[bool IsFullyCastable()](IsFullyCastable)|Returns whether the ability can be cast.|❌
[bool IsHidden()](IsHidden)||❌
[bool IsHiddenAsSecondaryAbility()](IsHiddenAsSecondaryAbility)||❌
[bool IsHiddenWhenStolen()](IsHiddenWhenStolen)||❌
[bool IsInAbilityPhase()](IsInAbilityPhase)|Returns whether the ability is currently casting.|❌
[bool IsItem()](IsItem)||✔️
[bool IsOwnersGoldEnough(nIssuerPlayerID)](IsOwnersGoldEnough)||❌
[bool IsOwnersGoldEnoughForUpgrade()](IsOwnersGoldEnoughForUpgrade)||❌
[bool IsOwnersManaEnough()](IsOwnersManaEnough)||❌
[bool IsPassive()](IsPassive)||❌
[bool IsRefreshable()](IsRefreshable)||❌
[bool IsSharedWithTeammates()](IsSharedWithTeammates)||❌
[bool IsStealable()](IsStealable)||❌
[bool IsStolen()](IsStolen)||❌
[bool IsToggle()](IsToggle)||❌
[bool IsTrained()](IsTrained)||❌
[void MarkAbilityButtonDirty()](MarkAbilityButtonDirty)|Mark the ability button for this ability as needing a refresh.|❌
[int NumModifiersUsingAbility()](NumModifiersUsingAbility)||❌
[void OnAbilityPhaseInterrupted()](OnAbilityPhaseInterrupted)||❌
[bool OnAbilityPhaseStart()](OnAbilityPhaseStart)||❌
[void OnAbilityPinged(nPlayerID, bCtrlHeld)](OnAbilityPinged)||❌
[void OnChannelFinish(bInterrupted)](OnChannelFinish)||❌
[void OnChannelThink(flInterval)](OnChannelThink)||❌
[void OnHeroCalculateStatBonus()](OnHeroCalculateStatBonus)||❌
[void OnHeroLevelUp()](OnHeroLevelUp)||❌
[void OnOwnerDied()](OnOwnerDied)||❌
[void OnOwnerSpawned()](OnOwnerSpawned)||❌
[void OnSpellStart()](OnSpellStart)||❌
[void OnToggle()](OnToggle)||❌
[void OnUpgrade()](OnUpgrade)||❌
[void PayGoldCost()](PayGoldCost)||❌
[void PayGoldCostForUpgrade()](PayGoldCostForUpgrade)||❌
[void PayManaCost()](PayManaCost)||❌
[bool PlaysDefaultAnimWhenStolen()](PlaysDefaultAnimWhenStolen)||❌
[bool ProcsMagicStick()](ProcsMagicStick)||❌
[bool RefCountsModifiers()](RefCountsModifiers)||❌
[void RefreshCharges()](RefreshCharges)||❌
[void RefundManaCost()](RefundManaCost)||❌
[bool ResetToggleOnRespawn()](ResetToggleOnRespawn)||❌
[void SetAbilityIndex(iIndex)](SetAbilityIndex)||❌
[void SetActivated(bActivated)](SetActivated)||❌
[void SetChanneling(bChanneling)](SetChanneling)||❌
[void SetFrozenCooldown(bFrozenCooldown)](SetFrozenCooldown)||❌
[void SetHidden(bHidden)](SetHidden)||❌
[void SetInAbilityPhase(bInAbilityPhase)](SetInAbilityPhase)||❌
[void SetLevel(iLevel)](SetLevel)|Sets the level of this ability.|❌
[void SetOverrideCastPoint(flCastPoint)](SetOverrideCastPoint)||❌
[void SetRefCountsModifiers(bRefCounts)](SetRefCountsModifiers)||❌
[void SetStealable(bStealable)](SetStealable)||❌
[void SetStolen(bStolen)](SetStolen)||❌
[void SetUpgradeRecommended(bUpgradeRecommended)](SetUpgradeRecommended)||❌
[bool ShouldUseResources()](ShouldUseResources)||❌
[void SpeakAbilityConcept(iConcept)](SpeakAbilityConcept)||❌
[unknown SpeakTrigger()](SpeakTrigger)||❌
[void StartCooldown(flCooldown)](StartCooldown)||❌
[void ToggleAbility()](ToggleAbility)||❌
[void ToggleAutoCast()](ToggleAutoCast)||❌
[void UpgradeAbility(bSupressSpeech)](UpgradeAbility)||❌
[void UseResources(bMana, bGold, bCooldown)](UseResources)||❌
