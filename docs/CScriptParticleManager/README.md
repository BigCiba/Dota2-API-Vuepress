# CScriptParticleManager
Function|Description|Client
--|--|:--:
[int CreateParticle(string_1, int_2, handle_3)](CreateParticle)|Creates a new particle effect|✔
[int CreateParticleForPlayer(string_1, int_2, handle_3, handle_4)](CreateParticleForPlayer)|Creates a new particle effect that only plays for the specified player|✔
[int CreateParticleForTeam(string_1, int_2, handle_3, int_4)](CreateParticleForTeam)|Creates a new particle effect that only plays for the specified team|✔
[void DestroyParticle(int_1, bool_2)](DestroyParticle)|(int index, bool bDestroyImmediately) - Destroy a particle, if bDestroyImmediately destroy it without playing end caps.|✔
[string GetParticleReplacement(string_1, handle_2)](GetParticleReplacement)||✔
[void ReleaseParticleIndex(int_1)](ReleaseParticleIndex)|Frees the specified particle index|✔
[void SetParticleAlwaysSimulate(int_1)](SetParticleAlwaysSimulate)||✔
[void SetParticleControl(int_1, int_2, Vector_3)](SetParticleControl)|Set the control point data for a control on a particle effect|✔
[void SetParticleControlEnt(int_1, int_2, handle_3, int_4, string_5, Vector_6, bool_7)](SetParticleControlEnt)||✔
[void SetParticleControlFallback(int_1, int_2, Vector_3)](SetParticleControlFallback)|(int iIndex, int iPoint, Vector vecPosition)|✔
[void SetParticleControlForward(int_1, int_2, Vector_3)](SetParticleControlForward)|(int nFXIndex, int nPoint, vForward)|✔
[void SetParticleControlOrientation(int_1, int_2, Vector_3, Vector_4, Vector_5)](SetParticleControlOrientation)|(int nFXIndex, int nPoint, vForward, vRight, vUp) - Set the orientation for a control on a particle effect (NOTE: This is left handed -- bad!!)|✔
[void SetParticleControlOrientationFLU(int_1, int_2, Vector_3, Vector_4, Vector_5)](SetParticleControlOrientationFLU)|(int nFXIndex, int nPoint, Vector vecForward, Vector vecLeft, Vector vecUp) - Set the orientation for a control on a particle effect|✔
[void SetParticleFoWProperties(int_1, int_2, int_3, float_4)](SetParticleFoWProperties)|int nfxindex, int nPoint, int nPoint2, float flRadius|✔
[bool SetParticleShouldCheckFoW(int_1, bool_2)](SetParticleShouldCheckFoW)|int nfxindex, bool bCheckFoW|✔
