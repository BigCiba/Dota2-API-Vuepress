# CreateIllusions
```
table CreateIllusions(hOwner, hHeroToCopy, hModiiferKeys, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace)
```
# Class
✔ `Server: Globals`  
✖ `Client: undefined`  

# Function Description
使用传入的数据创建属于传入单位的英雄幻象。 ( hOwner, hHeroToCopy, hModiiferKeys, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace ) 可选参数：outgoing_damage, incoming_damage, bounty_base, bounty_growth, outgoing_damage_structure, outgoing_damage_roshan
# Parameters
Type|Name|Description
--|--|--
handle|hOwner|拥有者
handle|hHeroToCopy|复制的英雄
handle|hModiiferKeys|修改器参数
int|nNumIllusions|幻象数量
int|nPadding|nPadding
bool|bScramblePosition|bScramblePosition
bool|bFindClearSpace|是否寻找空位

# Example
```lua
-- 创建2个玩家1的英雄幻象

local hPlayerHero = PlayerResource:GetPlayer(1):GetAssignedHero()
local illusions = CreateIllusions(hPlayerHero, hPlayerHero, {
	outgoing_damage = 50,	-- 造成50%的伤害
	incoming_damage = 300,	-- 受到300%的伤害
	bounty_base = 15,	-- 击杀获得15金钱
	outgoing_damage_structure = 10,	-- 对建筑造成10%伤害
	outgoing_damage_roshan = 60	-- 对肉山造成60%伤害
}, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace)
```