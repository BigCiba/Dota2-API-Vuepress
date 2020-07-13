# IsLocationVisible
```lua
bool IsLocationVisible(iTeamNumber, vLocation)
```
# Class
✔️ `Server: Global`  
❌ `Client: undefined`  

# Function Description
判断某个位置对某个队伍是否在战争迷雾中
# Parameters
Type|Name|Description
--|--|--
int|iTeamNumber|队伍编号
Vector|vLocation|位置

# Example
```lua
local hParent = self:GetParent()
IsLocationVisible(hParent:GetOpposingTeamNumber(), hParent:GetAbsOrigin())
```