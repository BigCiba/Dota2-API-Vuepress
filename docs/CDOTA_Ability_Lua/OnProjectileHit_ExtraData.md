# OnProjectileHit_ExtraData
```
bool OnProjectileHit_ExtraData(hTarget, vLocation, ExtraData)
```
# Class
✔ `Server: CDOTA_Ability_Lua`  
✖ `Client: undefined`  

# Function Description
当投射物命中目标或者到达最远距离（此时hTarget为无效值）
# Parameters
Type|Name|Description
--|--|--
handle|hTarget|击中的目标
Vector|vLocation|目标位置
handle|ExtraData|额外参数

# Example
```lua
function mirana_arrow:OnProjectileHit_ExtraData(hTarget, vLocation, ExtraData)
	local hCaster = self:GetCaster()
	local tDamageTable = 
	{
		ability = self,
		attacker = hCaster,
		victim = hTarget,
		damage = ExtraData.flDamage
		damage_type = self:GetAbilityDamageType()
	}
	ApplyDamage(damage_table)
	return true -- 返回true会销毁投射物
end
```