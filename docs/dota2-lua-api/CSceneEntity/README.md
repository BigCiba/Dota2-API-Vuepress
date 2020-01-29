# CSceneEntity
extends [CBaseEntity](../CBaseEntity)

Function|Description|Client
--|--|:--:
[void AddBroadcastTeamTarget(int_1)](AddBroadcastTeamTarget)|Adds a team (by index) to the broadcast list|❌
[void Cancel()](Cancel)|Cancel scene playback|❌
[float EstimateLength()](EstimateLength)|Returns length of this scene in seconds.|❌
[handle FindCamera()](FindCamera)|Get the camera|❌
[handle FindNamedEntity(string_1)](FindNamedEntity)|given an entity reference, such as !target, get actual entity from scene object|❌
[bool IsPaused()](IsPaused)|If this scene is currently paused.|❌
[bool IsPlayingBack()](IsPlayingBack)|If this scene is currently playing.|❌
[bool LoadSceneFromString(string_1, string_2)](LoadSceneFromString)|given a dummy scene name and a vcd string, load the scene|❌
[void RemoveBroadcastTeamTarget(int_1)](RemoveBroadcastTeamTarget)|Removes a team (by index) from the broadcast list|❌
[void Start(handle_1)](Start)|Start scene playback, takes activatorEntity as param|❌
