# MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE
# Description
复活时间缩减百分比，最大值为1，即没有复活时间。
# Example
```function modifier_respawntime_percent:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE
	}
end

function modifier_respawntime_percent:GetModifierPercentageRespawnTime(params)
	return 1 - (0.5 + self:GetParent():GetLevel() / 100)
end```