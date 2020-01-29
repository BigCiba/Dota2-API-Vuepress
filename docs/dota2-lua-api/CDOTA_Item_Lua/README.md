# CDOTA_Item_Lua
extends [CDOTA_Item](../CDOTA_Item)

Function|Description|Client
--|--|:--:
[bool CanUnitPickUp(hUnit)](CanUnitPickUp)|Returns true if this item can be picked up by the target unit.|❌
[int CastFilterResult()](CastFilterResult)|Determine whether an issued command with no target is valid.|✔️
[int CastFilterResultLocation(vLocation)](CastFilterResultLocation)|(Vector vLocation) Determine whether an issued command on a location is valid.|✔️
[int CastFilterResultTarget(hTarget)](CastFilterResultTarget)|(HSCRIPT hTarget) Determine whether an issued command on a target is valid.|✔️
[string GetAssociatedPrimaryAbilities()](GetAssociatedPrimaryAbilities)|Returns abilities that are stolen simultaneously, or otherwise related in functionality.|❌
[string GetAssociatedSecondaryAbilities()](GetAssociatedSecondaryAbilities)|Returns other abilities that are stolen simultaneously, or otherwise related in functionality.  Generally hidden abilities.|❌
[int GetBehavior()](GetBehavior)|Return cast behavior type of this ability.|✔️
[int GetCastRange(vLocation, hTarget)](GetCastRange)|Return cast range of this ability.|✔️
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
[bool IsMuted()](IsMuted)|Returns whether this item is muted or not.|✔️
[bool IsRefreshable()](IsRefreshable)|Returns true if this ability is refreshed by Refresher Orb.|❌
[bool IsStealable()](IsStealable)|Returns true if this ability can be stolen by Spell Steal.|❌
[void OnAbilityPhaseInterrupted()](OnAbilityPhaseInterrupted)|Cast time did not complete successfully.|❌
[bool OnAbilityPhaseStart()](OnAbilityPhaseStart)|Cast time begins (return true for successful cast).|❌
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
[void OnProjectileThink(vLocation)](OnProjectileThink)|(Vector vLocation) Projectile is actively moving.|❌
[void OnSpellStart()](OnSpellStart)|Cast time finished, spell effects begin.|❌
[void OnStolen(hSourceAbility)](OnStolen)|( HSCRIPT hAbility ) Special behavior when stolen by Spell Steal.|❌
[void OnToggle()](OnToggle)|Ability is toggled on/off.|❌
[void OnUnStolen()](OnUnStolen)|Special behavior when lost by Spell Steal.|❌
[void OnUpgrade()](OnUpgrade)|Ability gained a level.|❌
[bool ProcsMagicStick()](ProcsMagicStick)|Returns true if this ability will generate magic stick charges for nearby enemies.|❌
[int SpeakTrigger()](SpeakTrigger)|Return the type of speech used.|❌
