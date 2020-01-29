# CDOTA_MapTree
extends [CBaseEntity](../CBaseEntity)

Function|Description|Client
--|--|:--:
[void CutDown(nTeamNumberKnownTo)](CutDown)|Cuts down this tree. Parameters: int nTeamNumberKnownTo (-1 = invalid team)|❌
[void CutDownRegrowAfter(flRegrowAfter, nTeamNumberKnownTo)](CutDownRegrowAfter)|Cuts down this tree. Parameters: float flRegrowAfter (-1 = never regrow), int nTeamNumberKnownTo (-1 = invalid team)|❌
[void GrowBack()](GrowBack)|Grows back the tree if it was cut down.|❌
[bool IsStanding()](IsStanding)|Returns true if the tree is standing, false if it has been cut down|❌
