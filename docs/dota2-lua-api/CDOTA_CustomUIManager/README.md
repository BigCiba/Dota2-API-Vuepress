# CDOTA_CustomUIManager
全局访问变量：CustomUI

Function|Description|Client
--|--|:--:
[void DynamicHud_Create(int_1, string_2, string_3, handle_4)](DynamicHud_Create)|Create a new custom UI HUD element for the specified player(s). ( int PlayerID /*-1 means everyone*/, string ElementID /* should be unique */, string LayoutFileName, table DialogVariables /* can be nil */ )|❌
[void DynamicHud_Destroy(int_1, string_2)](DynamicHud_Destroy)|Destroy a custom hud element ( int PlayerID /*-1 means everyone*/, string ElementID )|❌
[void DynamicHud_SetDialogVariables(int_1, string_2, handle_3)](DynamicHud_SetDialogVariables)|Add or modify dialog variables for an existing custom hud element ( int PlayerID /*-1 means everyone*/, string ElementID, table DialogVariables )|❌
[void DynamicHud_SetVisible(int_1, string_2, bool_3)](DynamicHud_SetVisible)|Toggle the visibility of an existing custom hud element ( int PlayerID /*-1 means everyone*/, string ElementID, bool Visible )|❌
