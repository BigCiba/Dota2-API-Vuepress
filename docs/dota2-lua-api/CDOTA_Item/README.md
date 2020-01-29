# CDOTA_Item
extends [CDOTABaseAbility](../CDOTABaseAbility)

Function|Description|Client
--|--|:--:
[bool CanBeUsedOutOfInventory()](CanBeUsedOutOfInventory)||❌
[handle GetContainer()](GetContainer)|Get the container for this item.|❌
[int GetCost()](GetCost)||❌
[int GetCurrentCharges()](GetCurrentCharges)|Get the number of charges this item currently has.|✔️
[int GetInitialCharges()](GetInitialCharges)|Get the initial number of charges this item has.|✔️
[int GetItemSlot()](GetItemSlot)||✔️
[int GetItemState()](GetItemState)|Gets whether item is unequipped or ready.|❌
[handle GetParent()](GetParent)|Get the parent for this item.|❌
[float GetPurchaseTime()](GetPurchaseTime)|Get the purchase time of this item|❌
[handle GetPurchaser()](GetPurchaser)|Get the purchaser for this item.|❌
[int GetSecondaryCharges()](GetSecondaryCharges)|Get the number of secondary charges this item currently has.|✔️
[int GetShareability()](GetShareability)||✔️
[bool IsAlertableItem()](IsAlertableItem)||✔️
[bool IsCastOnPickup()](IsCastOnPickup)||✔️
[bool IsCombinable()](IsCombinable)||❌
[bool IsDisassemblable()](IsDisassemblable)||✔️
[bool IsDroppable()](IsDroppable)||✔️
[bool IsInBackpack()](IsInBackpack)||✔️
[bool IsItem()](IsItem)||✔️
[bool IsKillable()](IsKillable)||✔️
[bool IsMuted()](IsMuted)||✔️
[bool IsPermanent()](IsPermanent)||✔️
[bool IsPurchasable()](IsPurchasable)||✔️
[bool IsRecipe()](IsRecipe)||✔️
[bool IsRecipeGenerated()](IsRecipeGenerated)||✔️
[bool IsSellable()](IsSellable)||✔️
[bool IsStackable()](IsStackable)||✔️
[void LaunchLoot(bAutoUse, flHeight, flDuration, vEndPoint)](LaunchLoot)||❌
[void LaunchLootInitialHeight(bAutoUse, flInitialHeight, flLaunchHeight, flDuration, vEndPoint)](LaunchLootInitialHeight)||❌
[void OnEquip()](OnEquip)||❌
[void OnUnequip()](OnUnequip)||❌
[bool RequiresCharges()](RequiresCharges)||✔️
[void SetCanBeUsedOutOfInventory(bValue)](SetCanBeUsedOutOfInventory)||❌
[void SetCastOnPickup(bCastOnPickUp)](SetCastOnPickup)||❌
[void SetCurrentCharges(iCharges)](SetCurrentCharges)|Set the number of charges on this item|❌
[void SetDroppable(bDroppable)](SetDroppable)||❌
[void SetItemState(iState)](SetItemState)|Sets whether item is unequipped or ready.|❌
[void SetPurchaseTime(flTime)](SetPurchaseTime)|Set the purchase time of this item|❌
[void SetPurchaser(hPurchaser)](SetPurchaser)|Set the purchaser of record for this item.|❌
[void SetSecondaryCharges(iCharges)](SetSecondaryCharges)|Set the number of secondary charges on this item|❌
[void SetSellable(bSellable)](SetSellable)||❌
[void SetShareability(iShareability)](SetShareability)||❌
[void SetStacksWithOtherOwners(bStacksWithOtherOwners)](SetStacksWithOtherOwners)||❌
[void SpendCharge()](SpendCharge)||❌
[bool StacksWithOtherOwners()](StacksWithOtherOwners)||❌
[void Think()](Think)|Think this item|❌
