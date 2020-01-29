# CreateItem
```lua
handle CreateItem(sItemName, hOwner, hOwner)
```
# Class
✔️ `Server: Global`  
❌ `Client: undefined`  

# Function Description
创建一个物品
# Parameters
Type|Name|Description
--|--|--
string|sItemName|物品名字
handle|hOwner|拥有者
handle|hOwner|拥有者

# Example
```lua
function windrunner_windrun:OnSpellStart()
	local hCaster = self:GetCaster()
	local hItem = CreateItem("item_rapier_shareable", hCaster, hCaster)
	hCaster:AddItem(hItem)
end
```