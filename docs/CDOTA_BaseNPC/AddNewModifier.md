# AddNewModifier
```
handle AddNewModifier(hCaster, hAbility, pszScriptName, hModifierTable)
```
# Class
✔ `Server: CDOTA_BaseNPC`  
✖ `Client: undefined`  

# Function Description
给一个单位添加modifier，hModifierTable可以传入持续时间和其他自定义参数，自定义参数可以在modifier中获得。
# Parameters
Type|Name|Description
--|--|--
handle|hCaster|来源单位
handle|hAbility|来源技能
string|pszScriptName|modifier名字
handle|hModifierTable|modifier参数表

# Example
```lua
hCaster:AddNewModifier(hCaster, hAbility, "modifier_test_buff", {duration = 6, a = 3})
function modifier_test_buff:OnCreated(params)
	local a = params.a
end
```