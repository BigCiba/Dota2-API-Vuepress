# GridNav
Function|Description|Client
--|--|:--:
[bool CanFindPath(Vector_1, Vector_2)](CanFindPath)|Determine if it is possible to reach the specified end point from the specified start point. bool (vStart, vEnd)|✖
[void DestroyTreesAroundPoint(Vector_1, float_2, bool_3)](DestroyTreesAroundPoint)|Destroy all trees in the area(vPosition, flRadius, bFullCollision|✖
[float FindPathLength(Vector_1, Vector_2)](FindPathLength)|Find a path between the two points an return the length of the path. If there is not a path between the points the returned value will be -1. float (vStart, vEnd )|✖
[table GetAllTreesAroundPoint(Vector_1, float_2, bool_3)](GetAllTreesAroundPoint)|Returns a table full of tree HSCRIPTS (vPosition, flRadius, bFullCollision).|✖
[float GridPosToWorldCenterX(int_1)](GridPosToWorldCenterX)|Get the X position of the center of a given X index|✖
[float GridPosToWorldCenterY(int_1)](GridPosToWorldCenterY)|Get the Y position of the center of a given Y index|✖
[bool IsBlocked(Vector_1)](IsBlocked)|Checks whether the given position is blocked|✖
[bool IsNearbyTree(Vector_1, float_2, bool_3)](IsNearbyTree)|(position, radius, checkFullTreeRadius?) Checks whether there are any trees overlapping the given point|✖
[bool IsTraversable(Vector_1)](IsTraversable)|Checks whether the given position is traversable|✖
[void RegrowAllTrees()](RegrowAllTrees)|Causes all trees in the map to regrow|✖
[int WorldToGridPosX(float_1)](WorldToGridPosX)|Get the X index of a given world X position|✖
[int WorldToGridPosY(float_1)](WorldToGridPosY)|Get the Y index of a given world Y position|✖
