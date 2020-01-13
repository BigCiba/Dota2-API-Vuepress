# GetIntrinsicModifierName
```
string GetIntrinsicModifierName()
```
# Class
✔ `Server: CDOTA_Item_Lua`  
✖ `Client: undefined`  

# Function Description
返回此技能被动给予的修饰器的名称

# Example
```lua
function phantom_assassin_blur_imba:GetIntrinsicModifierName()
	return "modifier_phantom_assassin_blur_imba"
end
```