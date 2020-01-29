# GetParticleReplacement
```lua
string GetParticleReplacement(sParticleName, hCaster)
```
# Class
✔️ `Server: CScriptParticleManager`  
✔️ `Client: CScriptParticleManager`  

# Function Description
获取该粒子特效在该单位身上的替换版本
# Parameters
Type|Name|Description
--|--|--
string|sParticleName|特效完整路径名字
handle|hCaster|单位

# Example
```lua
ParticleManager:GetParticleReplacement("particles/units/heroes/hero_night_stalker/nightstalker_ulti.vpcf", hCaster)
```