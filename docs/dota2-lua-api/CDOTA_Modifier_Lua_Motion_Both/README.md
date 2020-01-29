# CDOTA_Modifier_Lua_Motion_Both
extends [CDOTA_Modifier_Lua](../CDOTA_Modifier_Lua)

Function|Description|Client
--|--|:--:
[bool ApplyHorizontalMotionController()](ApplyHorizontalMotionController)|Starts the horizontal motion controller effects for this buff.  Returns true if successful.|❌
[bool ApplyVerticalMotionController()](ApplyVerticalMotionController)|Starts the vertical motion controller effects for this buff.  Returns true if successful.|❌
[int GetPriority()](GetPriority)|Get the priority|❌
[void OnHorizontalMotionInterrupted()](OnHorizontalMotionInterrupted)|Called when the motion gets interrupted.|✔️
[void OnVerticalMotionInterrupted()](OnVerticalMotionInterrupted)|Called when the motion gets interrupted.|✔️
[void SetPriority(nMotionPriority)](SetPriority)|Set the priority|❌
[void UpdateHorizontalMotion(me, dt)](UpdateHorizontalMotion)|Perform any motion from the given interval on the NPC.|✔️
[void UpdateVerticalMotion(me, dt)](UpdateVerticalMotion)|Perform any motion from the given interval on the NPC.|✔️
