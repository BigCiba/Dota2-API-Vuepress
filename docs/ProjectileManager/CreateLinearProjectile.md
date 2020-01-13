# CreateLinearProjectile
```
int CreateLinearProjectile(tInfo)
```
# Class
✔ `Server: ProjectileManager`  
✖ `Client: undefined`  

# Function Description
创建一个线性投射物，返回投射物ID。参数: Ability, Source, vSpawnOrigin, vVelocity, vAcceleration, fDistance, fStartRadius, fEndRadius, bHasFrontalCone, iUnitTargetTeam, iUnitTargetType, iUnitTargetFlags, bProvidesVision, iVisionTeamNumber, iVisionRadius, bDrawsOnMinimap, bVisibleToEnemies, bIgnoreSource,fExpireTime, fMaxSpeed
# Parameters
Type|Name|Description
--|--|--
handle|tInfo|投射物参数

# Example
```lua
-- 创建一个月神箭
function mirana_arrow:OnSpellStart()
	local hCaster = self:GetCaster()
	local vPosition = self:GetCursorPosition()
	local iSpeed = 1800
	local tInfo = 
	{
		Ability = self, -- 技能
        	EffectName = "particles/units/heroes/hero_mirana/mirana_spell_arrow.vpcf", -- 投射物特效
        	vSpawnOrigin = hCaster:GetAttachmentOrigin(hCaster:ScriptLookupAttachment("attach_attack1")), -- 投射物起点
        	fDistance = 2000, -- 最大距离
        	fStartRadius = 64, -- 起始半径
        	fEndRadius = 64, -- 终点半径
        	Source = hCaster, -- 来源单位
        	bHasFrontalCone = false, -- 是否有前椎体
        	bReplaceExisting = false, -- 替换已经存在的投射物
        	iUnitTargetTeam = DOTA_UNIT_TARGET_TEAM_ENEMY, -- 目标队伍
        	iUnitTargetFlags = DOTA_UNIT_TARGET_FLAG_NONE, -- 目标标记
        	iUnitTargetType = DOTA_UNIT_TARGET_HERO + DOTA_UNIT_TARGET_BASIC, -- 目标类型
        	fExpireTime = GameRules:GetGameTime() + 10.0, -- 销毁时间
		bDeleteOnHit = true, -- 击中后是否销毁
		vVelocity = (vPosition - hCaster:GetAbsOrigin()):Normalized() * iSpeed, -- 速度
		bProvidesVision = true, -- 是否提供视野
		iVisionRadius = 1000, -- 视野半径
		iVisionTeamNumber = hCaster:GetTeamNumber() -- 视野队伍
		ExtraData = 
		{
			flDamage = 360,
		},
	}
	projectile = ProjectileManager:CreateLinearProjectile(info)
end
```