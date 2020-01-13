# MODIFIER_EVENT_ON_HERO_KILLED
# Description
击杀英雄事件。传进来的参数里attacker为玩家的主英雄，unit为实际凶手单位，target为死亡目标。
# Example
```function modifier_phantom_assassin_blur_imba:DeclareFunctions()
	return {
		MODIFIER_EVENT_ON_HERO_KILLED,
	}
end
function modifier_phantom_assassin_blur_imba:OnHeroKilled(params)
	-- params.attacker	玩家控制的主英雄
	-- params.unit		实际凶手
	-- params.target	死亡目标
	if params.unit == self:GetParent() then
		if params.unit:HasScepter() then
			for i = 0, params.unit:GetAbilityCount()-1, 1 do
				local hAbility = params.unit:GetAbilityByIndex(i)
				if hAbility and hAbility:GetAbilityType() == ABILITY_TYPE_BASIC then	-- 刷新基础技能
					hAbility:EndCooldown()
					hAbility:RefreshCharges()
				end
			end
		end
	end
end```