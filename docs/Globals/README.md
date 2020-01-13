# Globals
Function|Description|Client
--|--|:--:
[void AddFOWViewer(nTeamID, vLocation, flRadius, flDuration, bObstructedVision)](AddFOWViewer)|为指定队伍添加临时视野|✖
[float AngleDiff(float_1, float_2)](AngleDiff)|Returns the number of degrees difference between two yaw angles|✔
[void AppendToLogFile(string_1, string_2)](AppendToLogFile)|AppendToLogFile is deprecated. Print to the console for logging instead.|✔
[float ApplyDamage(tDamageTable)](ApplyDamage)|对一个单位造成伤害，输入tDamageTable: victim, attacker, damage, damage_type, damage_flags, ability|✖
[Quaternion AxisAngleToQuaternion(Vector_1, float_2)](AxisAngleToQuaternion)|(vector,float) constructs a quaternion representing a rotation by angle around the specified vector axis|✔
[Vector CalcClosestPointOnEntityOBB(handle_1, Vector_2)](CalcClosestPointOnEntityOBB)|Compute the closest point on the OBB of an entity.|✔
[float CalcDistanceBetweenEntityOBB(handle_1, handle_2)](CalcDistanceBetweenEntityOBB)|计算两个实体间的OBB包围盒距离|✔
[float CalcDistanceToLineSegment2D(Vector_1, Vector_2, Vector_3)](CalcDistanceToLineSegment2D)||✔
[void CancelEntityIOEvents(ehandle_1)](CancelEntityIOEvents)|Create all I/O events for a particular entity|✔
[void ClearTeamCustomHealthbarColor(int_1)](ClearTeamCustomHealthbarColor)|( teamNumber )|✖
[handle CreateDamageInfo(handle_1, handle_2, Vector_3, Vector_4, float_5, int_6)](CreateDamageInfo)|(hInflictor, hAttacker, flDamage) - Allocate a damageinfo object, used as an argument to TakeDamage(). Call DestroyDamageInfo( hInfo ) to free the object.|✖
[bool CreateEffect(handle_1)](CreateEffect)|Pass table - Inputs: entity, effect|✔
[handle CreateHTTPRequest(string_1, string_2)](CreateHTTPRequest)|Create an HTTP request.|✔
[handle CreateHTTPRequestScriptVM(string_1, string_2)](CreateHTTPRequestScriptVM)|Create an HTTP request.|✔
[handle CreateHeroForPlayer(string_1, handle_2)](CreateHeroForPlayer)|Creates a DOTA hero by its dota_npc_units.txt name and sets it as the given player's controlled hero|✖
[table CreateIllusions(hOwner, hHeroToCopy, hModiiferKeys, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace)](CreateIllusions)|使用传入的数据创建属于传入单位的英雄幻象。 ( hOwner, hHeroToCopy, hModiiferKeys, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace ) 可选参数：outgoing_damage, incoming_damage, bounty_base, bounty_growth, outgoing_damage_structure, outgoing_damage_roshan|✖
[handle CreateItem(sItemName, hOwner, hOwner)](CreateItem)|创建一个物品|✖
[handle CreateItemOnPositionForLaunch(Vector_1, handle_2)](CreateItemOnPositionForLaunch)|Create a physical item at a given location, can start in air (but doesn't clear a space)|✖
[handle CreateItemOnPositionSync(Vector_1, handle_2)](CreateItemOnPositionSync)|Create a physical item at a given location|✖
[handle CreateModifierThinker(handle_1, handle_2, string_3, handle_4, Vector_5, int_6, bool_7)](CreateModifierThinker)|Create a modifier not associated with an NPC. ( hCaster, hAbility, modifierName, paramTable, vOrigin, nTeamNumber, bPhantomBlocker )|✖
[handle CreateSceneEntity(string_1)](CreateSceneEntity)|Create a scene entity to play the specified scene.|✖
[handle CreateTempTree(Vector_1, float_2)](CreateTempTree)|Create a temporary tree, uses a default tree model. (vLocation, flDuration).|✖
[handle CreateTempTreeWithModel(Vector_1, float_2, string_3)](CreateTempTreeWithModel)|Create a temporary tree, specifying the tree model name. (vLocation, flDuration, szModelName).|✖
[handle CreateTrigger(Vector_1, Vector_2, Vector_3)](CreateTrigger)|CreateTrigger( vecMin, vecMax ) : Creates and returns an AABB trigger|✖
[handle CreateTriggerRadiusApproximate(Vector_1, float_2)](CreateTriggerRadiusApproximate)|CreateTriggerRadiusApproximate( vecOrigin, flRadius ) : Creates and returns an AABB trigger thats bigger than the radius provided|✖
[handle CreateUnitByName(string_1, Vector_2, bool_3, handle_4, handle_5, int_6)](CreateUnitByName)|Creates a DOTA unit by its dota_npc_units.txt name|✖
[int CreateUnitByNameAsync(string_1, Vector_2, bool_3, handle_4, handle_5, int_6, handle_7)](CreateUnitByNameAsync)|Creates a DOTA unit by its dota_npc_units.txt name|✖
[handle CreateUnitFromTable(handle_1, Vector_2)](CreateUnitFromTable)|Creates a DOTA unit by its dota_npc_units.txt name from a table of entity key values and a position to spawn at.|✖
[Vector CrossVectors(Vector_1, Vector_2)](CrossVectors)|(vector,vector) cross product between two vectors|✔
[void DebugBreak()](DebugBreak)|Breaks in the debugger|✔
[void DebugDrawBox(Vector_1, Vector_2, Vector_3, int_4, int_5, int_6, int_7, float_8)](DebugDrawBox)|Draw a debug overlay box (origin, mins, maxs, forward, r, g, b, a, duration )|✔
[void DebugDrawBoxDirection(Vector_1, Vector_2, Vector_3, Vector_4, Vector_5, float_6, float_7)](DebugDrawBoxDirection)|Draw a debug forward box (cent, min, max, forward, vRgb, a, duration)|✔
[void DebugDrawCircle(Vector_1, Vector_2, float_3, float_4, bool_5, float_6)](DebugDrawCircle)|Draw a debug circle (center, vRgb, a, rad, ztest, duration)|✔
[void DebugDrawClear()](DebugDrawClear)|Try to clear all the debug overlay info|✔
[void DebugDrawLine(Vector_1, Vector_2, int_3, int_4, int_5, bool_6, float_7)](DebugDrawLine)|Draw a debug overlay line (origin, target, r, g, b, ztest, duration)|✔
[void DebugDrawLine_vCol(Vector_1, Vector_2, Vector_3, bool_4, float_5)](DebugDrawLine_vCol)|Draw a debug line using color vec (start, end, vRgb, a, ztest, duration)|✔
[void DebugDrawScreenTextLine(float_1, float_2, int_3, string_4, int_5, int_6, int_7, int_8, float_9)](DebugDrawScreenTextLine)|Draw text with a line offset (x, y, lineOffset, text, r, g, b, a, duration)|✔
[void DebugDrawSphere(Vector_1, Vector_2, float_3, float_4, bool_5, float_6)](DebugDrawSphere)|Draw a debug sphere (center, vRgb, a, rad, ztest, duration)|✔
[void DebugDrawText(Vector_1, string_2, bool_3, float_4)](DebugDrawText)|Draw text in 3d (origin, text, bViewCheck, duration)|✔
[void DebugScreenTextPretty(float_1, float_2, int_3, string_4, int_5, int_6, int_7, int_8, float_9, string_10, int_11, bool_12)](DebugScreenTextPretty)|Draw pretty debug text (x, y, lineOffset, text, r, g, b, a, duration, font, size, bBold)|✔
[void DestroyDamageInfo(handle_1)](DestroyDamageInfo)|Free a damageinfo object that was created with CreateDamageInfo().|✖
[int DoCleaveAttack(handle_1, handle_2, handle_3, float_4, float_5, float_6, float_7, string_8)](DoCleaveAttack)|(hAttacker, hTarget, hAbility, fDamage, fRadius, effectName)|✖
[void DoEntFire(string_1, string_2, string_3, float_4, handle_5, handle_6)](DoEntFire)|#EntFire:Generate and entity i/o event|✖
[void DoEntFireByInstanceHandle(handle_1, string_2, string_3, float_4, handle_5, handle_6)](DoEntFireByInstanceHandle)|#EntFireByHandle:Generate and entity i/o event|✖
[bool DoIncludeScript(string_1, handle_2)](DoIncludeScript)|Execute a script (internal)|✔
[void DoScriptAssert(bool_1, string_2)](DoScriptAssert)|#ScriptAssert:Asserts the passed in value. Prints out a message and brings up the assert dialog.|✔
[string DoUniqueString(string_1)](DoUniqueString)|#UniqueString:Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use in that table.|✔
[float DotProduct(Vector_1, Vector_2)](DotProduct)||✖
[void EmitAnnouncerSound(string_1)](EmitAnnouncerSound)|Emit an announcer sound for all players.|✖
[void EmitAnnouncerSoundForPlayer(string_1, int_2)](EmitAnnouncerSoundForPlayer)|Emit an announcer sound for a player.|✖
[void EmitAnnouncerSoundForTeam(string_1, int_2)](EmitAnnouncerSoundForTeam)|Emit an announcer sound for a team.|✖
[void EmitAnnouncerSoundForTeamOnLocation(string_1, int_2, Vector_3)](EmitAnnouncerSoundForTeamOnLocation)|Emit an announcer sound for a team at a specific location.|✖
[void EmitGlobalSound(string_1)](EmitGlobalSound)|Play named sound for all players|✖
[void EmitSoundOn(string_1, handle_2)](EmitSoundOn)|Play named sound on Entity|✔
[void EmitSoundOnClient(string_1, handle_2)](EmitSoundOnClient)|Play named sound only on the client for the passed in player|✔
[void EmitSoundOnLocationForAllies(Vector_1, string_2, handle_3)](EmitSoundOnLocationForAllies)|Emit a sound on a location from a unit, only for players allied with that unit (vLocation, soundName, hCaster|✖
[void EmitSoundOnLocationWithCaster(Vector_1, string_2, handle_3)](EmitSoundOnLocationWithCaster)|Emit a sound on a location from a unit. (vLocation, soundName, hCaster).|✖
[handle EntIndexToHScript(int_1)](EntIndexToHScript)|Turn an entity index integer to an HScript representing that entity's script instance.|✔
[void ExecuteOrderFromTable(handle_1)](ExecuteOrderFromTable)|Issue an order from a script table|✖
[float ExponentialDecay(float_1, float_2, float_3)](ExponentialDecay)|Smooth curve decreasing slower as it approaches zero|✔
[bool FindClearRandomPositionAroundUnit(handle_1, handle_2, int_3)](FindClearRandomPositionAroundUnit)|Finds a clear random position around a given target unit, using the target unit's padded collision radius.|✖
[bool FindClearSpaceForUnit(handle_1, Vector_2, bool_3)](FindClearSpaceForUnit)|Place a unit somewhere not already occupied.|✖
[table FindUnitsInLine(int_1, Vector_2, Vector_3, handle_4, float_5, int_6, int_7, int_8)](FindUnitsInLine)|Find units that intersect the given line with the given flags.|✖
[table FindUnitsInRadius(int_1, Vector_2, handle_3, float_4, int_5, int_6, int_7, int_8, bool_9)](FindUnitsInRadius)|Finds the units in a given radius with the given flags.|✖
[void FireEntityIOInputNameOnly(ehandle_1, string_2)](FireEntityIOInputNameOnly)|Fire Entity's Action Input w/no data|✔
[void FireEntityIOInputString(ehandle_1, string_2, string_3)](FireEntityIOInputString)|Fire Entity's Action Input with passed String - you own the memory|✔
[void FireEntityIOInputVec(ehandle_1, string_2, Vector_3)](FireEntityIOInputVec)|Fire Entity's Action Input with passed Vector - you own the memory|✔
[void FireGameEvent(string_1, handle_2)](FireGameEvent)|Fire a game event.|✔
[void FireGameEventLocal(string_1, handle_2)](FireGameEventLocal)|Fire a game event without broadcasting to the client.|✔
[float FrameTime()](FrameTime)|Get the time spent on the server in the last frame|✔
[string GetDedicatedServerKey(string_1)](GetDedicatedServerKey)|( version )|✖
[string GetDedicatedServerKeyV2(string_1)](GetDedicatedServerKeyV2)|( version )|✖
[int GetEntityIndexForTreeId(unsigned_1)](GetEntityIndexForTreeId)|Get the enity index for a tree id specified as the entindex_target of a DOTA_UNIT_ORDER_CAST_TARGET_TREE.|✖
[int GetFrameCount()](GetFrameCount)|Returns the engines current frame count|✔
[float GetGroundHeight(Vector_1, handle_2)](GetGroundHeight)||✖
[Vector GetGroundPosition(Vector_1, handle_2)](GetGroundPosition)|Returns the supplied position moved to the ground. Second parameter is an NPC for measuring movement collision hull offset.|✖
[int GetItemCost(string_1)](GetItemCost)|Get the cost of an item by name.|✖
[int GetItemDefOwnedCount(int_1, int_2)](GetItemDefOwnedCount)||✖
[int GetItemDefQuantity(int_1, int_2)](GetItemDefQuantity)||✖
[handle GetListenServerHost()](GetListenServerHost)|Get the local player on a listen server.|✔
[table GetLobbyEventGameDetails()](GetLobbyEventGameDetails)|( )|✖
[string GetMapName()](GetMapName)|Get the name of the map.|✔
[float GetMaxOutputDelay(ehandle_1, string_2)](GetMaxOutputDelay)|Get the longest delay for all events attached to an output|✔
[Vector GetPhysAngularVelocity(handle_1)](GetPhysAngularVelocity)|Get Angular Velocity for VPHYS or normal object. Returns a vector of the axis of rotation, multiplied by the degrees of rotation per second.|✔
[Vector GetPhysVelocity(handle_1)](GetPhysVelocity)|Get Velocity for VPHYS or normal object|✔
[string GetSystemDate()](GetSystemDate)|Get the current real world date|✖
[string GetSystemTime()](GetSystemTime)|Get the current real world time|✖
[Vector GetTargetAOELocation(int_1, int_2, int_3, Vector_4, int_5, int_6, int_7)](GetTargetAOELocation)||✖
[Vector GetTargetLinearLocation(int_1, int_2, int_3, Vector_4, int_5, int_6, int_7)](GetTargetLinearLocation)||✖
[int GetTeamHeroKills(int_1)](GetTeamHeroKills)|( int teamID )|✖
[string GetTeamName(int_1)](GetTeamName)|( int teamID )|✖
[int GetTreeIdForEntityIndex(int_1)](GetTreeIdForEntityIndex)|Given and entity index of a tree, get the tree id for use for use with with unit orders.|✖
[float GetWorldMaxX()](GetWorldMaxX)|Gets the world's maximum X position.|✖
[float GetWorldMaxY()](GetWorldMaxY)|Gets the world's maximum Y position.|✖
[float GetWorldMinX()](GetWorldMinX)|Gets the world's minimum X position.|✖
[float GetWorldMinY()](GetWorldMinY)|Gets the world's minimum Y position.|✖
[void InitLogFile(string_1, string_2)](InitLogFile)|InitLogFile is deprecated. Print to the console for logging instead.|✔
[bool IsClient()](IsClient)|Returns true if this is lua running from the client.dll.|✔
[bool IsDedicatedServer()](IsDedicatedServer)|Returns true if this server is a dedicated server.|✔
[bool IsInToolsMode()](IsInToolsMode)|Returns true if this is lua running within tools mode.|✔
[bool IsLocationVisible(int_1, Vector_2)](IsLocationVisible)|Ask fog of war if a location is visible to a certain team (nTeamNumber, vLocation).|✖
[bool IsMarkedForDeletion(handle_1)](IsMarkedForDeletion)|Returns true if the entity is valid and marked for deletion.|✔
[bool IsServer()](IsServer)|Returns true if this is lua running from the server.dll.|✔
[bool IsValidEntity(handle_1)](IsValidEntity)|Checks to see if the given hScript is a valid entity|✔
[Vector LerpVectors(Vector_1, Vector_2, float_3)](LerpVectors)|(vector,vector,float) lerp between two vectors by a float factor returning new vector|✔
[void LimitPathingSearchDepth(float_1)](LimitPathingSearchDepth)|Set the limit on the pathfinding search space.|✖
[void LinkLuaModifier(string_1, string_2, int_3)](LinkLuaModifier)|Link a lua-defined modifier with the associated class ( className, fileName, LuaModifierType).|✔
[int ListenToGameEvent(string_1, handle_2, handle_3)](ListenToGameEvent)|Register as a listener for a game event from script.|✔
[table LoadKeyValues(string_1)](LoadKeyValues)|Creates a table from the specified keyvalues text file|✔
[table LoadKeyValuesFromString(string_1)](LoadKeyValuesFromString)|Creates a table from the specified keyvalues string|✔
[table LocalTime()](LocalTime)|Get the current local time|✔
[int MakeStringToken(string_1)](MakeStringToken)|Checks to see if the given hScript is a valid entity|✔
[void MinimapEvent(int_1, handle_2, int_3, int_4, int_5, int_6)](MinimapEvent)|Start a minimap event. (nTeamID, hEntity, nXCoord, nYCoord, nEventType, nEventDuration).|✖
[void Msg(string_1)](Msg)|Print a message|✔
[void PauseGame(bool_1)](PauseGame)|Pause or unpause the game.|✖
[handle PlayerInstanceFromIndex(int_1)](PlayerInstanceFromIndex)|Get a script instance of a player by index.|✔
[void PrecacheEntityFromTable(string_1, handle_2, handle_3)](PrecacheEntityFromTable)|Precache an entity from KeyValues in table|✔
[void PrecacheEntityListFromTable(handle_1, handle_2)](PrecacheEntityListFromTable)|Precache a list of entity KeyValues tables|✔
[void PrecacheItemByNameAsync(string_1, handle_2)](PrecacheItemByNameAsync)|Asynchronously precaches a DOTA item by its dota_npc_items.txt name, provides a callback when it's finished.|✖
[void PrecacheItemByNameSync(string_1, handle_2)](PrecacheItemByNameSync)|Precaches a DOTA item by its dota_npc_items.txt name|✖
[void PrecacheModel(string_1, handle_2)](PrecacheModel)|( modelName, context ) - Manually precache a single model|✖
[void PrecacheResource(string_1, string_2, handle_3)](PrecacheResource)|Manually precache a single resource|✖
[void PrecacheUnitByNameAsync(string_1, handle_2, int_3)](PrecacheUnitByNameAsync)|Asynchronously precaches a DOTA unit by its dota_npc_units.txt name, provides a callback when it's finished.|✖
[void PrecacheUnitByNameSync(string_1, handle_2, int_3)](PrecacheUnitByNameSync)|Precaches a DOTA unit by its dota_npc_units.txt name|✖
[void PrecacheUnitFromTableAsync(handle_1, handle_2)](PrecacheUnitFromTableAsync)|Precaches a DOTA unit from a table of entity key values.|✖
[void PrecacheUnitFromTableSync(handle_1, handle_2)](PrecacheUnitFromTableSync)|Precaches a DOTA unit from a table of entity key values.|✖
[void PrintLinkedConsoleMessage(string_1, string_2)](PrintLinkedConsoleMessage)|Print a console message with a linked console command|✔
[float RandomFloat(float_1, float_2)](RandomFloat)|Get a random float within a range|✔
[int RandomInt(int_1, int_2)](RandomInt)|Get a random int within a range|✔
[Vector RandomVector(float_1)](RandomVector)|Get a random 2D vector of the given length.|✖
[void RegisterCustomAnimationScriptForModel(string_1, string_2)](RegisterCustomAnimationScriptForModel)|Register a custom animation script to run when a model loads|✖
[void RegisterSpawnGroupFilterProxy(string_1)](RegisterSpawnGroupFilterProxy)|Create a C proxy for a script-based spawn group filter|✔
[void ReloadMOTD()](ReloadMOTD)|Reloads the MotD file|✔
[void RemoveSpawnGroupFilterProxy(string_1)](RemoveSpawnGroupFilterProxy)|Remove the C proxy for a script-based spawn group filter|✔
[void ResolveNPCPositions(Vector_1, float_2)](ResolveNPCPositions)|Check and fix units that have been assigned a position inside collision radius of other NPCs.|✖
[bool RollPercentage(int_1)](RollPercentage)|(int nPct)|✖
[QAngle RotateOrientation(QAngle_1, QAngle_2)](RotateOrientation)|Rotate a QAngle by another QAngle.|✔
[Vector RotatePosition(Vector_1, QAngle_2, Vector_3)](RotatePosition)|Rotate a Vector around a point.|✔
[Quaternion RotateQuaternionByAxisAngle(Quaternion_1, Vector_2, float_3)](RotateQuaternionByAxisAngle)|(quaternion,vector,float) rotates a quaternion by the specified angle around the specified vector axis|✔
[QAngle RotationDelta(QAngle_1, QAngle_2)](RotationDelta)|Find the delta between two QAngles.|✔
[Vector RotationDeltaAsAngularVelocity(QAngle_1, QAngle_2)](RotationDeltaAsAngularVelocity)|converts delta QAngle to an angular velocity Vector|✔
[void Say(handle_1, string_2, bool_3)](Say)|Have Entity say string, and teamOnly or not|✖
[void ScreenShake(Vector_1, float_2, float_3, float_4, float_5, int_6, bool_7)](ScreenShake)|Start a screenshake with the following parameters. vecCenter, flAmplitude, flFrequency, flDuration, flRadius, eCommand( SHAKE_START = 0, SHAKE_STOP = 1 ), bAirShake|✔
[void SendOverheadEventMessage(handle_1, int_2, handle_3, int_4, handle_5)](SendOverheadEventMessage)|( DOTAPlayer sendToPlayer, int iMessageType, Entity targetEntity, int iValue, DOTAPlayer sourcePlayer ) - sendToPlayer and sourcePlayer can be nil - iMessageType is one of OVERHEAD_ALERT_*|✖
[void SendToConsole(string_1)](SendToConsole)|Send a string to the console as a client command|✔
[void SendToServerConsole(string_1)](SendToServerConsole)|Send a string to the console as a server command|✖
[void SetOpvarFloatAll(string_1, string_2, string_3, float_4)](SetOpvarFloatAll)|Sets an opvar value for all players|✔
[void SetOpvarFloatPlayer(string_1, string_2, string_3, float_4, handle_5)](SetOpvarFloatPlayer)|Sets an opvar value for a single player|✔
[void SetPhysAngularVelocity(handle_1, Vector_2)](SetPhysAngularVelocity)|Set Angular Velocity for VPHYS or normal object, from a vector of the axis of rotation, multiplied by the degrees of rotation per second.|✔
[void SetQuestName(string_1)](SetQuestName)|Set the current quest name.|✔
[void SetQuestPhase(int_1)](SetQuestPhase)|Set the current quest phase.|✔
[void SetRenderingEnabled(ehandle_1, bool_2)](SetRenderingEnabled)|Set rendering on/off for an ehandle|✔
[void SetTeamCustomHealthbarColor(int_1, int_2, int_3, int_4)](SetTeamCustomHealthbarColor)|( teamNumber, r, g, b )|✖
[void ShowCustomHeaderMessage(string_1, int_2, int_3, float_4)](ShowCustomHeaderMessage)|( const char *pszMessage, int nPlayerID, int nValue, float flTime ) - Supports localized strings - %s1 = PlayerName, %s2 = Value, %s3 = TeamName|✖
[void ShowGenericPopup(string_1, string_2, string_3, string_4, int_5)](ShowGenericPopup)|Show a generic popup dialog for all players.|✖
[void ShowGenericPopupToPlayer(handle_1, string_2, string_3, string_4, string_5, int_6)](ShowGenericPopupToPlayer)|Show a generic popup dialog to a specific player.|✖
[void ShowMessage(string_1)](ShowMessage)|Print a hud message on all clients|✖
[handle SpawnDOTAShopTriggerRadiusApproximate(Vector_1, float_2)](SpawnDOTAShopTriggerRadiusApproximate)|(Vector vOrigin, float flRadius )|✖
[handle SpawnEntityFromTableSynchronous(string_1, handle_2)](SpawnEntityFromTableSynchronous)|Synchronously spawns a single entity from a table|✔
[bool SpawnEntityGroupFromTable(handle_1, bool_2, handle_3)](SpawnEntityGroupFromTable)|Hierarchically spawn an entity group from a set of spawn tables.|✔
[int SpawnEntityListFromTableAsynchronous(handle_1, handle_2)](SpawnEntityListFromTableAsynchronous)|Asynchronously spawn an entity group from a list of spawn tables. A callback will be triggered when the spawning is complete|✔
[handle SpawnEntityListFromTableSynchronous(handle_1)](SpawnEntityListFromTableSynchronous)|Synchronously spawn an entity group from a list of spawn tables.|✔
[Quaternion SplineQuaternions(Quaternion_1, Quaternion_2, float_3)](SplineQuaternions)|(quaternion,quaternion,float) very basic interpolation of v0 to v1 over t on [0,1]|✔
[Vector SplineVectors(Vector_1, Vector_2, float_3)](SplineVectors)|(vector,vector,float) very basic interpolation of v0 to v1 over t on [0,1]|✔
[void StartSoundEvent(string_1, handle_2)](StartSoundEvent)|Start a sound event|✔
[void StartSoundEventFromPosition(string_1, Vector_2)](StartSoundEventFromPosition)|Start a sound event from position|✔
[void StartSoundEventFromPositionReliable(string_1, Vector_2)](StartSoundEventFromPositionReliable)|Start a sound event from position with reliable delivery|✔
[void StartSoundEventFromPositionUnreliable(string_1, Vector_2)](StartSoundEventFromPositionUnreliable)|Start a sound event from position with optional delivery|✔
[void StartSoundEventReliable(string_1, handle_2)](StartSoundEventReliable)|Start a sound event with reliable delivery|✔
[void StartSoundEventUnreliable(string_1, handle_2)](StartSoundEventUnreliable)|Start a sound event with optional delivery|✔
[void StopEffect(handle_1, string_2)](StopEffect)|Pass entity and effect name|✔
[void StopGlobalSound(string_1)](StopGlobalSound)|Stop named sound for all players|✖
[void StopListeningToAllGameEvents(handle_1)](StopListeningToAllGameEvents)|Stop listening to all game events within a specific context.|✔
[bool StopListeningToGameEvent(int_1)](StopListeningToGameEvent)|Stop listening to a particular game event.|✔
[void StopSoundEvent(string_1, handle_2)](StopSoundEvent)|Stops a sound event with optional delivery|✔
[void StopSoundOn(string_1, handle_2)](StopSoundOn)|Stop named sound on Entity|✔
[float Time()](Time)|Get the current server time|✔
[bool TraceCollideable(handle_1)](TraceCollideable)|Pass table - Inputs: start, end, ent, (optional mins, maxs) -- outputs: pos, fraction, hit, startsolid, normal|✔
[bool TraceHull(handle_1)](TraceHull)|Pass table - Inputs: start, end, min, max, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid|✔
[bool TraceLine(handle_1)](TraceLine)|Pass table - Inputs: startpos, endpos, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid|✔
[float UTIL_AngleDiff(float_1, float_2)](UTIL_AngleDiff)|Returns the number of degrees difference between two yaw angles|✖
[void UTIL_MessageText(int_1, string_2, int_3, int_4, int_5, int_6)](UTIL_MessageText)|Sends colored text to one client.|✖
[void UTIL_MessageTextAll(string_1, int_2, int_3, int_4, int_5)](UTIL_MessageTextAll)|Sends colored text to all clients.|✖
[void UTIL_MessageTextAll_WithContext(string_1, int_2, int_3, int_4, int_5, handle_6)](UTIL_MessageTextAll_WithContext)|Sends colored text to all clients. (Valid context keys: player_id, value, team_id)|✖
[void UTIL_MessageText_WithContext(int_1, string_2, int_3, int_4, int_5, int_6, handle_7)](UTIL_MessageText_WithContext)|Sends colored text to one client. (Valid context keys: player_id, value, team_id)|✖
[void UTIL_Remove(handle_1)](UTIL_Remove)|Removes the specified entity|✔
[void UTIL_RemoveImmediate(handle_1)](UTIL_RemoveImmediate)|Immediately removes the specified entity|✔
[void UTIL_ResetMessageText(int_1)](UTIL_ResetMessageText)|Clear all message text on one client.|✖
[void UTIL_ResetMessageTextAll()](UTIL_ResetMessageTextAll)|Clear all message text from all clients.|✖
[int UnitFilter(handle_1, int_2, int_3, int_4, int_5)](UnitFilter)|Check if a unit passes a set of filters. (hNPC, nTargetTeam, nTargetType, nTargetFlags, nTeam|✔
[void UnloadSpawnGroup(string_1)](UnloadSpawnGroup)|Unload a spawn group by name|✔
[void UnloadSpawnGroupByHandle(int_1)](UnloadSpawnGroupByHandle)|Unload a spawn group by handle|✔
[void UpdateEventPoints(handle_1)](UpdateEventPoints)|( hEventPointData )|✖
[QAngle VectorAngles(Vector_1)](VectorAngles)||✖
[QAngle VectorToAngles(Vector_1)](VectorToAngles)|Get Qangles (with no roll) for a Vector.|✔
[void Warning(string_1)](Warning)|Print a warning|✔
[float cvar_getf(string_1)](cvar_getf)|Gets the value of the given cvar, as a float.|✔
[bool cvar_setf(string_1, float_2)](cvar_setf)|Sets the value of the given cvar, as a float.|✔
[bool rr_AddDecisionRule(handle_1)](rr_AddDecisionRule)|Add a rule to the decision database.|✔
[bool rr_CommitAIResponse(handle_1, handle_2)](rr_CommitAIResponse)|Commit the result of QueryBestResponse back to the given entity to play. Call with params (entity, airesponse)|✔
[handle rr_GetResponseTargets()](rr_GetResponseTargets)|Retrieve a table of all available expresser targets, in the form { name : handle, name: handle }.|✔
[bool rr_QueryBestResponse(handle_1, handle_2, handle_3)](rr_QueryBestResponse)|Params: (entity, query) : tests 'query' against entity's response system and returns the best response found (or null if none found).|✔
