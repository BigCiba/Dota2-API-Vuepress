# CDOTA_Modifier_Lua
extends [CDOTA_Buff](../CDOTA_Buff)

Function|Description|Client
--|--|:--:
[bool AllowIllusionDuplicate()](AllowIllusionDuplicate)|True/false if this modifier is active on illusions.|✔️
[bool CanParentBeAutoAttacked()](CanParentBeAutoAttacked)||✔️
[bool DestroyOnExpire()](DestroyOnExpire)|True/false if this buff is removed when the duration expires.|✔️
[int GetAttributes()](GetAttributes)|Return the types of attributes applied to this modifier (enum value from DOTAModifierAttribute_t|✔️
[float GetAuraDuration()](GetAuraDuration)|Returns aura stickiness|✔️
[bool GetAuraEntityReject(hEntity)](GetAuraEntityReject)|Return true/false if this entity should receive the aura under specific conditions|✔️
[int GetAuraRadius()](GetAuraRadius)|Return the range around the parent this aura tries to apply its buff.|✔️
[int GetAuraSearchFlags()](GetAuraSearchFlags)|Return the unit flags this aura respects when placing buffs.|✔️
[int GetAuraSearchTeam()](GetAuraSearchTeam)|Return the teams this aura applies its buff to.|✔️
[int GetAuraSearchType()](GetAuraSearchType)|Return the unit classifications this aura applies its buff to.|✔️
[int GetEffectAttachType()](GetEffectAttachType)|Return the attach type of the particle system from GetEffectName.|✔️
[string GetEffectName()](GetEffectName)|Return the name of the particle system that is created while this modifier is active.|✔️
[string GetHeroEffectName()](GetHeroEffectName)|Return the name of the hero effect particle system that is created while this modifier is active.|✔️
[string GetModifierAura()](GetModifierAura)|The name of the secondary modifier that will be applied by this modifier (if it is an aura).|✔️
[int GetPriority()](GetPriority)|Return the priority order this modifier will be applied over others.|✔️
[string GetStatusEffectName()](GetStatusEffectName)|Return the name of the status effect particle system that is created while this modifier is active.|✔️
[string GetTexture()](GetTexture)|Return the name of the buff icon to be shown for this modifier.|✔️
[int HeroEffectPriority()](HeroEffectPriority)|Relationship of this hero effect with those from other buffs (higher is more likely to be shown).|✔️
[bool IsAura()](IsAura)|True/false if this modifier is an aura.|✔️
[bool IsAuraActiveOnDeath()](IsAuraActiveOnDeath)|True/false if this aura provides buffs when the parent is dead.|✔️
[bool IsDebuff()](IsDebuff)|True/false if this modifier should be displayed as a debuff.|✔️
[bool IsHidden()](IsHidden)|True/false if this modifier should be displayed on the buff bar.|✔️
[bool IsPermanent()](IsPermanent)||✔️
[bool IsPurgable()](IsPurgable)|True/false if this modifier can be purged.|✔️
[bool IsPurgeException()](IsPurgeException)|True/false if this modifier can be purged by strong dispels.|✔️
[bool IsStunDebuff()](IsStunDebuff)|True/false if this modifier is considered a stun for purge reasons.|✔️
[void OnCreated(table)](OnCreated)|Runs when the modifier is created.|✔️
[void OnDestroy()](OnDestroy)|Runs when the modifier is destroyed (after unit loses modifier).|✔️
[void OnIntervalThink()](OnIntervalThink)|Runs when the think interval occurs.|✔️
[void OnRefresh(table)](OnRefresh)|Runs when the modifier is refreshed.|✔️
[void OnRemoved()](OnRemoved)|Runs when the modifier is destroyed (before unit loses modifier).|✔️
[void OnStackCountChanged(iStackCount)](OnStackCountChanged)|Runs when stack count changes (param is old count).|✔️
[bool RemoveOnDeath()](RemoveOnDeath)|True/false if this modifier is removed when the parent dies.|✔️
[void SetHasCustomTransmitterData(bHasCustomData)](SetHasCustomTransmitterData)||✔️
[bool ShouldUseOverheadOffset()](ShouldUseOverheadOffset)|Apply the overhead offset to the attached effect.|✔️
[int StatusEffectPriority()](StatusEffectPriority)|Relationship of this status effect with those from other buffs (higher is more likely to be shown).|✔️
