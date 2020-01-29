# SetParticleFoWProperties
```lua
void SetParticleFoWProperties(iParticleID, iControlPoint, iControlPoint2, flRadius)
```
# Class
✔️ `Server: CScriptParticleManager`  
✔️ `Client: CScriptParticleManager`  

# Function Description
设置粒子特效在战争迷雾中的属性。控制点为中心半径为flRadius的圆处于战争迷雾外，该特效即对敌人可见。如果填两个控制点则两点间的宽度为flRadius的矩形范围也计算。不填为-1。
# Parameters
Type|Name|Description
--|--|--
int|iParticleID|特效ID
int|iControlPoint|第一个控制点
int|iControlPoint2|第二个控制点
float|flRadius|半径

# Example
```lua
-- 风暴之灵超负荷特效
local iParticleID = ParticleManager:CreateParticle(ParticleManager:GetParticleReplacement("particles/units/heroes/hero_stormspirit/stormspirit_overload_discharge.vpcf", params.attacker), PATTACH_WORLDORIGIN, nil)
ParticleManager:SetParticleControl(iParticleID, 0, params.target:GetAbsOrigin())
ParticleManager:SetParticleFoWProperties(iParticleID, 0, -1, self.overload_aoe)
ParticleManager:ReleaseParticleIndex(iParticleID)
```