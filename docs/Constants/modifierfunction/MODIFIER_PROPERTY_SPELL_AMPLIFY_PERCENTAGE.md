# MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE
# Description
技能增强百分比，多个效果非线性叠加。
# Example
```-- 30%技能增强
function modifier_item_bloodthorn:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE
	}
end
function modifier_item_bloodthorn:GetModifierSpellAmplify_Percentage(params)
	return 30
end```