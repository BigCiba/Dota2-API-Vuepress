# AddFOWViewer
```
void AddFOWViewer(nTeamID, vLocation, flRadius, flDuration, bObstructedVision)
```
# Class
✔ `Server: Globals`  
✖ `Client: undefined`  

# Function Description
为指定队伍添加临时视野
# Parameters
Type|Name|Description
--|--|--
int|nTeamID|队伍ID
Vector|vLocation|位置
float|flRadius|半径
float|flDuration|持续时间
bool|bObstructedVision|是否有视野阻挡

# Example
```lua
AddFOWViewer(self:GetCaster():GetTeamNumber(), self:GetCaster():GetAbsOrigin(), self:GetAbilitySpecialValueFor("imba_radius"), FrameTime(), false)
```