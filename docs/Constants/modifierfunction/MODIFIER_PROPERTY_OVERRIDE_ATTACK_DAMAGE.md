# MODIFIER_PROPERTY_OVERRIDE_ATTACK_DAMAGE
# Description
重写攻击伤害，该效果无视格挡效果。
# Example
```function modifier_razor_eye_of_the_storm_attack_effect_imba:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_OVERRIDE_ATTACK_DAMAGE,
	}
end
function modifier_razor_eye_of_the_storm_attack_effect_imba:GetModifierOverrideAttackDamage(params)
	return self:GetAbilitySpecialValueFor("damage")
end```