# CEntities
全局访问变量：Entities

Function|Description|Client
--|--|:--:
[handle CreateByClassname(string_1)](CreateByClassname)|Creates an entity by classname|❌
[table FindAllByClassname(string_1)](FindAllByClassname)|Finds all entities by class name. Returns an array containing all the found entities.|❌
[table FindAllByClassnameWithin(string_1, Vector_2, float_3)](FindAllByClassnameWithin)|Find entities by class name within a radius.|❌
[table FindAllByModel(string_1)](FindAllByModel)|Find entities by model name.|❌
[table FindAllByName(string_1)](FindAllByName)|Find all entities by name. Returns an array containing all the found entities in it.|❌
[table FindAllByNameWithin(string_1, Vector_2, float_3)](FindAllByNameWithin)|Find entities by name within a radius.|❌
[table FindAllByTarget(string_1)](FindAllByTarget)|Find entities by targetname.|❌
[table FindAllInSphere(Vector_1, float_2)](FindAllInSphere)|Find entities within a radius.|❌
[handle FindByClassname(handle_1, string_2)](FindByClassname)|Find entities by class name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle FindByClassnameNearest(string_1, Vector_2, float_3)](FindByClassnameNearest)|Find entities by class name nearest to a point.|❌
[handle FindByClassnameWithin(handle_1, string_2, Vector_3, float_4)](FindByClassnameWithin)|Find entities by class name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle FindByModel(handle_1, string_2)](FindByModel)|Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle FindByModelWithin(handle_1, string_2, Vector_3, float_4)](FindByModelWithin)|Find entities by model name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle FindByName(handle_1, string_2)](FindByName)|Find entities by name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle FindByNameNearest(string_1, Vector_2, float_3)](FindByNameNearest)|Find entities by name nearest to a point.|❌
[handle FindByNameWithin(handle_1, string_2, Vector_3, float_4)](FindByNameWithin)|Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle FindByTarget(handle_1, string_2)](FindByTarget)|Find entities by targetname. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle FindInSphere(handle_1, Vector_2, float_3)](FindInSphere)|Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|❌
[handle First()](First)|Begin an iteration over the list of entities|✔️
[handle GetLocalPlayer()](GetLocalPlayer)|Get the local player.|❌
[handle Next(handle_1)](Next)|Continue an iteration over the list of entities, providing reference to a previously found entity|✔️
