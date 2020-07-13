# GetOpposingTeamNumber
```lua
int GetOpposingTeamNumber()
```
# Class
✔️ `Server: CDOTA_BaseNPC`  
✔️ `Client: C_DOTA_BaseNPC`  

# Function Description
获取敌方的队伍编号

# Example
```lua
local hParent = self:GetParent()
IsLocationVisible(hParent:GetOpposingTeamNumber(), hParent:GetAbsOrigin())
```