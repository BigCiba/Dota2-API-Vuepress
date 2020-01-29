# CDOTA_Ability_Lua
extends [CDOTABaseAbility](../CDOTABaseAbility)

Function|Description|Client
--|--|:--:
[int CastFilterResult()](CastFilterResult)|Determine whether an issued command with no target is valid.|✔️
[int CastFilterResultLocation(vLocation)](CastFilterResultLocation)|(Vector vLocation) Determine whether an issued command on a location is valid.|✔️
[int CastFilterResultTarget(hTarget)](CastFilterResultTarget)|(HSCRIPT hTarget) Determine whether an issued command on a target is valid.|✔️
[float GetAOERadius()](GetAOERadius)|Controls the size of the AOE casting cursor.|✔️
[string GetAssociatedPrimaryAbilities()](GetAssociatedPrimaryAbilities)|Returns abilities that are stolen simultaneously, or otherwise related in functionality.|❌
[string GetAssociatedSecondaryAbilities()](GetAssociatedSecondaryAbilities)|Returns other abilities that are stolen simultaneously, or otherwise related in functionality.  Generally hidden abilities.|❌
[int GetBehavior()](GetBehavior)|Return cast behavior type of this ability.|✔️
[int GetCastAnimation()](GetCastAnimation)|Return casting animation of this ability.|❌
[float GetCastPoint()](GetCastPoint)|Return cast point of this ability.|✔️
[int GetCastRange(vLocation, hTarget)](GetCastRange)|Return cast range of this ability.|✔️
[int GetChannelAnimation()](GetChannelAnimation)|Return channel animation of this ability.|❌
[float GetChannelTime()](GetChannelTime)|Return the channel time of this ability.|✔️
[int GetChannelledManaCostPerSecond(iLevel)](GetChannelledManaCostPerSecond)|Return mana cost at the given level per second while channeling (-1 is current).|✔️
[int GetConceptRecipientType()](GetConceptRecipientType)|Return who hears speech when this spell is cast.|❌
[float GetCooldown(iLevel)](GetCooldown)|Return cooldown of this ability.|✔️
[string GetCustomCastError()](GetCustomCastError)|Return the error string of a failed command with no target.|✔️
[string GetCustomCastErrorLocation(vLocation)](GetCustomCastErrorLocation)|(Vector vLocation) Return the error string of a failed command on a location.|✔️
[string GetCustomCastErrorTarget(hTarget)](GetCustomCastErrorTarget)|(HSCRIPT hTarget) Return the error string of a failed command on a target.|✔️
[int GetGoldCost(iLevel)](GetGoldCost)|Return gold cost at the given level (-1 is current).|✔️
[string GetIntrinsicModifierName()](GetIntrinsicModifierName)|返回此技能被动给予的修饰器的名称|❌
[int GetManaCost(iLevel)](GetManaCost)|Return mana cost at the given level (-1 is current).|✔️
[float GetPlaybackRateOverride()](GetPlaybackRateOverride)|Return the animation rate of the cast animation.|❌
[bool IsHiddenAbilityCastable()](IsHiddenAbilityCastable)|Returns true if this ability can be used when not on the action panel.|❌
[bool IsHiddenWhenStolen()](IsHiddenWhenStolen)|Returns true if this ability is hidden when stolen by Spell Steal.|❌
[bool IsRefreshable()](IsRefreshable)|Returns true if this ability is refreshed by Refresher Orb.|❌
[bool IsStealable()](IsStealable)|Returns true if this ability can be stolen by Spell Steal.|❌
[void OnAbilityPhaseInterrupted()](OnAbilityPhaseInterrupted)|Cast time did not complete successfully.|❌
[bool OnAbilityPhaseStart()](OnAbilityPhaseStart)|Cast time begins (return true for successful cast).|❌
[void OnAbilityPinged(nPlayerID, bCtrlHeld)](OnAbilityPinged)|The ability was pinged (nPlayerID, bCtrlHeld).|❌
[void OnChannelFinish(bInterrupted)](OnChannelFinish)|(bool bInterrupted) Channel finished.|❌
[void OnChannelThink(flInterval)](OnChannelThink)|(float flInterval) Channeling is taking place.|❌
[void OnHeroCalculateStatBonus()](OnHeroCalculateStatBonus)|Caster (hero only) gained a level, skilled an ability, or received a new stat bonus.|❌
[void OnHeroDiedNearby(unit, attacker, table)](OnHeroDiedNearby)|A hero has died in the vicinity (ie Urn), takes table of params.|❌
[void OnHeroLevelUp()](OnHeroLevelUp)|Caster gained a level.|❌
[void OnInventoryContentsChanged()](OnInventoryContentsChanged)|Caster inventory changed.|❌
[void OnItemEquipped(hItem)](OnItemEquipped)|( HSCRIPT hItem ) Caster equipped item.|❌
[void OnOwnerDied()](OnOwnerDied)|Caster died.|❌
[void OnOwnerSpawned()](OnOwnerSpawned)|Caster respawned or spawned for the first time.|❌
[bool OnProjectileHit(hTarget, vLocation)](OnProjectileHit)|(HSCRIPT hTarget, Vector vLocation) Projectile has collided with a given target or reached its destination (target is invalid).|❌
[bool OnProjectileHitHandle(hTarget, vLocation, iProjectileHandle)](OnProjectileHitHandle)|(HSCRIPT hTarget, Vector vLocation, int nHandle) Projectile has collided with a given target or reached its destination (target is invalid).|❌
[bool OnProjectileHit_ExtraData(hTarget, vLocation, ExtraData)](OnProjectileHit_ExtraData)|当投射物命中目标或者到达最远距离（此时hTarget为无效值）|❌
[void OnProjectileThink(vLocation)](OnProjectileThink)|(Vector vLocation) Projectile is actively moving.|❌
[void OnProjectileThinkHandle(iProjectileHandle)](OnProjectileThinkHandle)|(int nProjectileHandle) Projectile is actively moving.|❌
[void OnProjectileThink_ExtraData(vLocation, table)](OnProjectileThink_ExtraData)|(Vector vLocation, table kv ) Projectile is actively moving.|❌
[void OnSpellStart()](OnSpellStart)|Cast time finished, spell effects begin.|❌
[void OnStolen(hSourceAbility)](OnStolen)|( HSCRIPT hAbility ) Special behavior when stolen by Spell Steal.|❌
[void OnToggle()](OnToggle)|Ability is toggled on/off.|❌
[void OnUnStolen()](OnUnStolen)|Special behavior when lost by Spell Steal.|❌
[void OnUpgrade()](OnUpgrade)|Ability gained a level.|❌
[bool ProcsMagicStick()](ProcsMagicStick)|Returns true if this ability will generate magic stick charges for nearby enemies.|❌
[bool ResetToggleOnRespawn()](ResetToggleOnRespawn)|Returns true if this ability should return to the default toggle state when its parent respawns.|❌
[int SpeakTrigger()](SpeakTrigger)|Return the type of speech used.|❌
