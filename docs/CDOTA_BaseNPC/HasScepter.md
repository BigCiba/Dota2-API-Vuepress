# HasScepter
```
bool HasScepter()
```
# Class
✔ `Server: CDOTA_BaseNPC`  
✔ `Client: C_DOTA_BaseNPC`  

# Function Description
判断单位是否拥有阿哈利姆神杖升级效果

# Example
```lua
function test_ability:OnSpellStart()
	local bHasScepter = self:GetCaster():HasScepter()
end
```