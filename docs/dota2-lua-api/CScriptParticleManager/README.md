# CScriptParticleManager
全局访问变量：ParticleManager

Function|Description|Client
--|--|:--:
[int CreateParticle(sParticleName, iAttachment, hOwner)](CreateParticle)|创建一个新的粒子特效，返回特效ID|✔️
[int CreateParticleForPlayer(string_1, int_2, handle_3, handle_4)](CreateParticleForPlayer)|Creates a new particle effect that only plays for the specified player|✔️
[int CreateParticleForTeam(string_1, int_2, handle_3, int_4)](CreateParticleForTeam)|Creates a new particle effect that only plays for the specified team|✔️
[void DestroyParticle(iIndex, bDestroyImmediately)](DestroyParticle)|删除一个粒子特效。如果选择立即删除，将不会播放粒子的结束特效。|✔️
[string GetParticleReplacement(sParticleName, hCaster)](GetParticleReplacement)|获取该粒子特效在该单位身上的替换版本|✔️
[void ReleaseParticleIndex(int_1)](ReleaseParticleIndex)|Frees the specified particle index|✔️
[void SetParticleAlwaysSimulate(int_1)](SetParticleAlwaysSimulate)||✔️
[void SetParticleControl(int_1, int_2, Vector_3)](SetParticleControl)|Set the control point data for a control on a particle effect|✔️
[void SetParticleControlEnt(int_1, int_2, handle_3, int_4, string_5, Vector_6, bool_7)](SetParticleControlEnt)||✔️
[void SetParticleControlFallback(int_1, int_2, Vector_3)](SetParticleControlFallback)|(int iIndex, int iPoint, Vector vecPosition)|✔️
[void SetParticleControlForward(int_1, int_2, Vector_3)](SetParticleControlForward)|(int nFXIndex, int nPoint, vForward)|✔️
[void SetParticleControlOrientation(int_1, int_2, Vector_3, Vector_4, Vector_5)](SetParticleControlOrientation)|(int nFXIndex, int nPoint, vForward, vRight, vUp) - Set the orientation for a control on a particle effect (NOTE: This is left handed -- bad!!)|✔️
[void SetParticleControlOrientationFLU(int_1, int_2, Vector_3, Vector_4, Vector_5)](SetParticleControlOrientationFLU)|(int nFXIndex, int nPoint, Vector vecForward, Vector vecLeft, Vector vecUp) - Set the orientation for a control on a particle effect|✔️
[void SetParticleFoWProperties(iParticleID, iControlPoint, iControlPoint2, flRadius)](SetParticleFoWProperties)|设置粒子特效在战争迷雾中的属性。控制点为中心半径为flRadius的圆处于战争迷雾外，该特效即对敌人可见。如果填两个控制点则两点间的宽度为flRadius的矩形范围也计算。不填为-1。|✔️
[bool SetParticleShouldCheckFoW(int_1, bool_2)](SetParticleShouldCheckFoW)|int nfxindex, bool bCheckFoW|✔️
