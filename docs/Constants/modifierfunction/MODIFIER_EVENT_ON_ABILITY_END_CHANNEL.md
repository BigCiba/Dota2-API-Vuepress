# MODIFIER_EVENT_ON_ABILITY_END_CHANNEL
# Description
当持续施法结束
# Example
```function modifier_silencer_last_word:DeclareFunctions()
	return {
		MODIFIER_EVENT_ON_ABILITY_END_CHANNEL,
	}
end
function modifier_silencer_last_word:OnAbilityEndChannel(params)
	if IsServer() then
		if params.unit==self:GetParent() and not params.ability:IsItem() then
			self:Destroy()
		end
	end
end```