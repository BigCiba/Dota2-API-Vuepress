(window.webpackJsonp=window.webpackJsonp||[]).push([[1219],{1437:function(t,e,r){"use strict";r.r(e);var a=r(0),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cdota-modifier-lua"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdota-modifier-lua"}},[t._v("#")]),t._v(" CDOTA_Modifier_Lua")]),t._v(" "),r("p",[t._v("extends "),r("a",{attrs:{href:"../CDOTA_Buff"}},[t._v("CDOTA_Buff")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Function")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Client")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"AllowIllusionDuplicate"}},[t._v("bool AllowIllusionDuplicate()")])]),t._v(" "),r("td",[t._v("True/false if this modifier is active on illusions.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"CanParentBeAutoAttacked"}},[t._v("bool CanParentBeAutoAttacked()")])]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"DestroyOnExpire"}},[t._v("bool DestroyOnExpire()")])]),t._v(" "),r("td",[t._v("True/false if this buff is removed when the duration expires.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetAttributes"}},[t._v("int GetAttributes()")])]),t._v(" "),r("td",[t._v("Return the types of attributes applied to this modifier (enum value from DOTAModifierAttribute_t")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetAuraDuration"}},[t._v("float GetAuraDuration()")])]),t._v(" "),r("td",[t._v("Returns aura stickiness")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetAuraEntityReject"}},[t._v("bool GetAuraEntityReject(hEntity)")])]),t._v(" "),r("td",[t._v("Return true/false if this entity should receive the aura under specific conditions")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetAuraRadius"}},[t._v("int GetAuraRadius()")])]),t._v(" "),r("td",[t._v("Return the range around the parent this aura tries to apply its buff.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetAuraSearchFlags"}},[t._v("int GetAuraSearchFlags()")])]),t._v(" "),r("td",[t._v("Return the unit flags this aura respects when placing buffs.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetAuraSearchTeam"}},[t._v("int GetAuraSearchTeam()")])]),t._v(" "),r("td",[t._v("Return the teams this aura applies its buff to.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetAuraSearchType"}},[t._v("int GetAuraSearchType()")])]),t._v(" "),r("td",[t._v("Return the unit classifications this aura applies its buff to.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetEffectAttachType"}},[t._v("int GetEffectAttachType()")])]),t._v(" "),r("td",[t._v("Return the attach type of the particle system from GetEffectName.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetEffectName"}},[t._v("string GetEffectName()")])]),t._v(" "),r("td",[t._v("Return the name of the particle system that is created while this modifier is active.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetHeroEffectName"}},[t._v("string GetHeroEffectName()")])]),t._v(" "),r("td",[t._v("Return the name of the hero effect particle system that is created while this modifier is active.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetModifierAura"}},[t._v("string GetModifierAura()")])]),t._v(" "),r("td",[t._v("The name of the secondary modifier that will be applied by this modifier (if it is an aura).")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetPriority"}},[t._v("int GetPriority()")])]),t._v(" "),r("td",[t._v("Return the priority order this modifier will be applied over others.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetStatusEffectName"}},[t._v("string GetStatusEffectName()")])]),t._v(" "),r("td",[t._v("Return the name of the status effect particle system that is created while this modifier is active.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"GetTexture"}},[t._v("string GetTexture()")])]),t._v(" "),r("td",[t._v("Return the name of the buff icon to be shown for this modifier.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"HeroEffectPriority"}},[t._v("int HeroEffectPriority()")])]),t._v(" "),r("td",[t._v("Relationship of this hero effect with those from other buffs (higher is more likely to be shown).")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsAura"}},[t._v("bool IsAura()")])]),t._v(" "),r("td",[t._v("True/false if this modifier is an aura.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsAuraActiveOnDeath"}},[t._v("bool IsAuraActiveOnDeath()")])]),t._v(" "),r("td",[t._v("True/false if this aura provides buffs when the parent is dead.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsDebuff"}},[t._v("bool IsDebuff()")])]),t._v(" "),r("td",[t._v("True/false if this modifier should be displayed as a debuff.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsHidden"}},[t._v("bool IsHidden()")])]),t._v(" "),r("td",[t._v("True/false if this modifier should be displayed on the buff bar.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsPermanent"}},[t._v("bool IsPermanent()")])]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsPurgable"}},[t._v("bool IsPurgable()")])]),t._v(" "),r("td",[t._v("True/false if this modifier can be purged.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsPurgeException"}},[t._v("bool IsPurgeException()")])]),t._v(" "),r("td",[t._v("True/false if this modifier can be purged by strong dispels.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"IsStunDebuff"}},[t._v("bool IsStunDebuff()")])]),t._v(" "),r("td",[t._v("True/false if this modifier is considered a stun for purge reasons.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"OnCreated"}},[t._v("void OnCreated(table)")])]),t._v(" "),r("td",[t._v("Runs when the modifier is created.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"OnDestroy"}},[t._v("void OnDestroy()")])]),t._v(" "),r("td",[t._v("Runs when the modifier is destroyed (after unit loses modifier).")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"OnIntervalThink"}},[t._v("void OnIntervalThink()")])]),t._v(" "),r("td",[t._v("Runs when the think interval occurs.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"OnRefresh"}},[t._v("void OnRefresh(table)")])]),t._v(" "),r("td",[t._v("Runs when the modifier is refreshed.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"OnRemoved"}},[t._v("void OnRemoved()")])]),t._v(" "),r("td",[t._v("Runs when the modifier is destroyed (before unit loses modifier).")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"OnStackCountChanged"}},[t._v("void OnStackCountChanged(iStackCount)")])]),t._v(" "),r("td",[t._v("Runs when stack count changes (param is old count).")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"RemoveOnDeath"}},[t._v("bool RemoveOnDeath()")])]),t._v(" "),r("td",[t._v("True/false if this modifier is removed when the parent dies.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"ShouldUseOverheadOffset"}},[t._v("bool ShouldUseOverheadOffset()")])]),t._v(" "),r("td",[t._v("Apply the overhead offset to the attached effect.")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"StatusEffectPriority"}},[t._v("int StatusEffectPriority()")])]),t._v(" "),r("td",[t._v("Relationship of this status effect with those from other buffs (higher is more likely to be shown).")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);