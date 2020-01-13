# CalcDistanceBetweenEntityOBB
```
float CalcDistanceBetweenEntityOBB(handle_1, handle_2)
```
# Class
✔ `Server: Globals`  
✔ `Client: Globals`  

# Function Description
计算两个实体间的OBB包围盒距离
# Parameters
Type|Name|Description
--|--|--
handle|handle_1|实体1
handle|handle_2|实体2

# Example
```lua
local hPlayerHero_1 = PlayerResource:GetPlayer(1):GetAssignedHero()
local hPlayerHero_2 = PlayerResource:GetPlayer(1):GetAssignedHero()
local flDistance = CalcDistanceBetweenEntityOBB(hPlayerHero_1, hPlayerHero_2)
```