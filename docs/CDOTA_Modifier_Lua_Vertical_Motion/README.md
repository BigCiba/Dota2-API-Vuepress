# CDOTA_Modifier_Lua_Vertical_Motion
Function|Description|Client
--|--|:--:
[bool ApplyVerticalMotionController()](ApplyVerticalMotionController)|Starts the vertical motion controller effects for this buff.  Returns true if successful.|✖
[int GetMotionPriority()](GetMotionPriority)|Get the priority|✖
[void OnVerticalMotionInterrupted()](OnVerticalMotionInterrupted)|Called when the motion gets interrupted.|✔
[void SetMotionPriority(nMotionPriority)](SetMotionPriority)|Set the priority|✖
[void UpdateVerticalMotion(me, dt)](UpdateVerticalMotion)|Perform any motion from the given interval on the NPC.|✔
