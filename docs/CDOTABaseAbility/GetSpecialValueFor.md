# GetSpecialValueFor
```
table GetSpecialValueFor(szName)
```
# Class
✔ `Server: CDOTABaseAbility`  
✔ `Client: C_DOTABaseAbility`  

# Function Description
从该技能的当前等级的特殊值中获取值。
# Parameters
Type|Name|Description
--|--|--
string|szName|特殊值名字

# Example
```lua
function phantom_assassin_blur_imba:OnSpellStart()
	local hCaster = self:GetCaster()
	local duration = self:GetSpecialValueFor("duration")
end
```