# ProjectileManager
extends [ProjectileManager](../ProjectileManager)

Function|Description|Client
--|--|:--:
[void ChangeTrackingProjectileSpeed(handle_1, int_2)](ChangeTrackingProjectileSpeed)|Update speed|❌
[int CreateLinearProjectile(tInfo)](CreateLinearProjectile)|创建一个线性投射物，返回投射物ID。参数: Ability, Source, vSpawnOrigin, vVelocity, vAcceleration, fDistance, fStartRadius, fEndRadius, bHasFrontalCone, iUnitTargetTeam, iUnitTargetType, iUnitTargetFlags, bProvidesVision, iVisionTeamNumber, iVisionRadius, bDrawsOnMinimap, bVisibleToEnemies, bIgnoreSource,fExpireTime, fMaxSpeed|❌
[void CreateTrackingProjectile(handle_1)](CreateTrackingProjectile)|Creates a tracking projectile|❌
[void DestroyLinearProjectile(int_1)](DestroyLinearProjectile)|Destroys the linear projectile matching the argument ID|❌
[Vector GetLinearProjectileLocation(int_1)](GetLinearProjectileLocation)|Returns current location of projectile|❌
[float GetLinearProjectileRadius(int_1)](GetLinearProjectileRadius)|Returns current radius of projectile|❌
[Vector GetLinearProjectileVelocity(int_1)](GetLinearProjectileVelocity)|Returns a vector representing the current velocity of the projectile.|❌
[void ProjectileDodge(handle_1)](ProjectileDodge)|Makes the specified unit dodge projectiles|❌
[void UpdateLinearProjectileDirection(int_1, Vector_2, float_3)](UpdateLinearProjectileDirection)|Update velocity|❌
