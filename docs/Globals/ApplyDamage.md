# ApplyDamage
```
float ApplyDamage(tDamageTable)
```
# Class
✔ `Server: Globals`  
✖ `Client: undefined`  

# Function Description
对一个单位造成伤害，输入tDamageTable: victim, attacker, damage, damage_type, damage_flags, ability
# Parameters
Type|Name|Description
--|--|--
handle|tDamageTable|包含受害者、攻击者、伤害、伤害类型、伤害标记和技能来源的表格

# Example
```lua
-- 对玩家1的英雄对自己造成500纯粹伤害

local hPlayerHero = PlayerResource:GetPlayer(1):GetAssignedHero()
local damageTable = {
	victim = hPlayerHero,
	attacker = hPlayerHero,
	damage = 500,
	damage_type = DAMAGE_TYPE_PURE,
	damage_flags = DOTA_DAMAGE_FLAG_NONE, --Optional.
	ability = playerHero:GetAbilityByIndex(0), --Optional.
}
ApplyDamage(damageTable)
```