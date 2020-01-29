# CDOTA_Buff
No Description Set

Function|Description|Client
--|--|:--:
[void AddParticle(i, bDestroyImmediately, bStatusEffect, iPriority, bHeroEffect, bOverheadEffect)](AddParticle)|(index, bDestroyImmediately, bStatusEffect, priority, bHeroEffect, bOverheadEffect|✔️
[void DecrementStackCount()](DecrementStackCount)|Decrease this modifier's stack count by 1.|✔️
[void Destroy()](Destroy)|Run all associated destroy functions, then remove the modifier.|✔️
[void ForceRefresh()](ForceRefresh)|Run all associated refresh functions on this modifier as if it was re-applied.|✔️
[handle GetAbility()](GetAbility)|Get the ability that generated the modifier.|✔️
[float GetAuraDuration()](GetAuraDuration)|Returns aura stickiness (default 0.5)|✔️
[handle GetAuraOwner()](GetAuraOwner)||✔️
[handle GetCaster()](GetCaster)|Get the owner of the ability responsible for the modifier.|✔️
[string GetClass()](GetClass)||✔️
[float GetCreationTime()](GetCreationTime)||✔️
[float GetDieTime()](GetDieTime)||✔️
[float GetDuration()](GetDuration)||✔️
[float GetElapsedTime()](GetElapsedTime)||✔️
[float GetLastAppliedTime()](GetLastAppliedTime)||✔️
[string GetName()](GetName)||✔️
[handle GetParent()](GetParent)|Get the unit the modifier is parented to.|✔️
[float GetRemainingTime()](GetRemainingTime)||✔️
[int GetSerialNumber()](GetSerialNumber)||✔️
[int GetStackCount()](GetStackCount)||✔️
[bool HasFunction(iFunction)](HasFunction)||✔️
[void IncrementStackCount()](IncrementStackCount)|Increase this modifier's stack count by 1.|✔️
[bool IsDebuff()](IsDebuff)||✔️
[bool IsHexDebuff()](IsHexDebuff)||✔️
[bool IsStunDebuff()](IsStunDebuff)||✔️
[void SetDuration(flDuration, bInformClient)](SetDuration)|(flTime, bInformClients)|✔️
[void SetStackCount(iCount)](SetStackCount)||✔️
[void StartIntervalThink(flInterval)](StartIntervalThink)|Start this modifier's think function (OnIntervalThink) with the given interval (float).  To stop, call with -1.|✔️
