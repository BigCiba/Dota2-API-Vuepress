# CBaseEntity
extends [CEntityInstance](../CEntityInstance)

Function|Description|Client
--|--|:--:
[void AddEffects(nFlags)](AddEffects)|AddEffects( int ): Adds the render effect flag.|❌
[void ApplyAbsVelocityImpulse(vecImpulse)](ApplyAbsVelocityImpulse)|Apply a Velocity Impulse|❌
[void ApplyLocalAngularVelocityImpulse(angImpulse)](ApplyLocalAngularVelocityImpulse)|Apply an Ang Velocity Impulse|❌
[float Attribute_GetFloatValue(pName, flDefault)](Attribute_GetFloatValue)|Get float value for an entity attribute.|❌
[int Attribute_GetIntValue(pName, nDefault)](Attribute_GetIntValue)|Get int value for an entity attribute.|❌
[void Attribute_SetFloatValue(pName, flValue)](Attribute_SetFloatValue)|Set float value for an entity attribute.|❌
[void Attribute_SetIntValue(pName, nValue)](Attribute_SetIntValue)|Set int value for an entity attribute.|❌
[void DeleteAttribute(pName)](DeleteAttribute)|Delete an entity attribute.|❌
[void EmitSound(soundname)](EmitSound)|Plays a sound from this entity.|❌
[void EmitSoundParams(soundname, nPitch, flVolume, flDelay)](EmitSoundParams)|Plays/modifies a sound from this entity. changes sound if nPitch and/or flVol or flSoundTime is > 0.|❌
[QAngle EyeAngles()](EyeAngles)|Get the qangles that this entity is looking at.|❌
[Vector EyePosition()](EyePosition)|Get vector to eye position - absolute coords.|❌
[handle FirstMoveChild()](FirstMoveChild)||❌
[void FollowEntity(hEnt, bBoneMerge)](FollowEntity)|hEntity to follow, bool bBoneMerge|❌
[void GatherCriteria(hResult)](GatherCriteria)|Returns a table containing the criteria that would be used for response queries on this entity. This is the same as the table that is passed to response rule script function callbacks.|❌
[Vector GetAbsOrigin()](GetAbsOrigin)||✔️
[float GetAbsScale()](GetAbsScale)||❌
[QAngle GetAngles()](GetAngles)||❌
[Vector GetAnglesAsVector()](GetAnglesAsVector)|Get entity pitch, yaw, roll as a vector.|❌
[Vector GetAngularVelocity()](GetAngularVelocity)|Get the local angular velocity - returns a vector of pitch,yaw,roll|❌
[Vector GetBaseVelocity()](GetBaseVelocity)|Get Base? velocity.|❌
[Vector GetBoundingMaxs()](GetBoundingMaxs)|Get a vector containing max bounds, centered on object.|❌
[Vector GetBoundingMins()](GetBoundingMins)|Get a vector containing min bounds, centered on object.|❌
[table GetBounds()](GetBounds)|Get a table containing the 'Mins' & 'Maxs' vector bounds, centered on object.|❌
[Vector GetCenter()](GetCenter)|Get vector to center of object - absolute coords|❌
[handle GetChildren()](GetChildren)|Get the entities parented to this entity.|❌
[table GetContext(name)](GetContext)|GetContext( name ): looks up a context and returns it if available. May return string, float, or null (if the context isn't found).|❌
[Vector GetForwardVector()](GetForwardVector)|Get the forward vector of the entity.|❌
[int GetHealth()](GetHealth)|Get the health of this entity.|❌
[QAngle GetLocalAngles()](GetLocalAngles)|Get entity local pitch, yaw, roll as a QAngle|❌
[QAngle GetLocalAngularVelocity()](GetLocalAngularVelocity)|Maybe local angvel|❌
[Vector GetLocalOrigin()](GetLocalOrigin)|Get entity local origin as a Vector|❌
[float GetLocalScale()](GetLocalScale)||❌
[Vector GetLocalVelocity()](GetLocalVelocity)|Get Entity relative velocity.|❌
[float GetMass()](GetMass)|Get the mass of an entity. (returns 0 if it doesn't have a physics object)|❌
[int GetMaxHealth()](GetMaxHealth)|Get the maximum health of this entity.|❌
[string GetModelName()](GetModelName)|Returns the name of the model.|❌
[handle GetMoveParent()](GetMoveParent)|If in hierarchy, retrieves the entity's parent.|❌
[Vector GetOrigin()](GetOrigin)||❌
[handle GetOwner()](GetOwner)|Gets this entity's owner|❌
[handle GetOwnerEntity()](GetOwnerEntity)|Get the owner entity, if there is one|❌
[Vector GetRightVector()](GetRightVector)|Get the right vector of the entity.|❌
[handle GetRootMoveParent()](GetRootMoveParent)|If in hierarchy, walks up the hierarchy to find the root parent.|❌
[float GetSoundDuration(soundname, actormodel)](GetSoundDuration)|Returns float duration of the sound. Takes soundname and optional actormodelname.|❌
[int GetSpawnGroupHandle()](GetSpawnGroupHandle)|Returns the spawn group handle of this entity|❌
[int GetTeam()](GetTeam)|Get the team number of this entity.|❌
[int GetTeamNumber()](GetTeamNumber)|Get the team number of this entity.|✔️
[Vector GetUpVector()](GetUpVector)|Get the up vector of the entity.|❌
[Vector GetVelocity()](GetVelocity)||❌
[bool HasAttribute(pName)](HasAttribute)|See if an entity has a particular attribute.|❌
[bool IsAlive()](IsAlive)|Is this entity alive?|❌
[bool IsNPC()](IsNPC)|Is this entity an CAI_BaseNPC?|❌
[bool IsPlayer()](IsPlayer)|Is this entity a player?|❌
[void Kill()](Kill)||❌
[handle NextMovePeer()](NextMovePeer)||❌
[void OverrideFriction(duration, friction)](OverrideFriction)|Takes duration, value for a temporary override.|❌
[void PrecacheScriptSound(soundname)](PrecacheScriptSound)|Precache a sound for later playing.|❌
[void RemoveEffects(nFlags)](RemoveEffects)|RemoveEffects( int ): Removes the render effect flag.|❌
[void SetAbsAngles(fPitch, fYaw, fRoll)](SetAbsAngles)|Set entity pitch, yaw, roll by component.|❌
[void SetAbsOrigin(origin)](SetAbsOrigin)||❌
[void SetAbsScale(flScale)](SetAbsScale)||❌
[void SetAngles(fPitch, fYaw, fRoll)](SetAngles)|Set entity pitch, yaw, roll by component.|❌
[void SetAngularVelocity(pitchVel, yawVel, rollVel)](SetAngularVelocity)|Set the local angular velocity - takes float pitch,yaw,roll velocities|❌
[void SetConstraint(vPos)](SetConstraint)|Set the position of the constraint.|❌
[void SetContext(pName, pValue, duration)](SetContext)|SetContext( name , value, duration ): store any key/value pair in this entity's dialog contexts. Value must be a string. Will last for duration (set 0 to mean 'forever').|❌
[void SetContextNum(pName, fValue, duration)](SetContextNum)|SetContextNum( name , value, duration ): store any key/value pair in this entity's dialog contexts. Value must be a number (int or float). Will last for duration (set 0 to mean 'forever').|❌
[void SetContextThink(pszContextName, hThinkFunc, flInterval)](SetContextThink)|Set a think function on this entity.|✔️
[void SetEntityName(pName)](SetEntityName)|Set the name of an entity.|❌
[void SetForwardVector(v)](SetForwardVector)|Set the orientation of the entity to have this forward vector.|❌
[void SetFriction(flFriction)](SetFriction)|Set PLAYER friction, ignored for objects.|❌
[void SetGravity(flGravity)](SetGravity)|Set PLAYER gravity, ignored for objects.|❌
[void SetHealth(nHealth)](SetHealth)|Set the health of this entity.|❌
[void SetLocalAngles(fPitch, fYaw, fRoll)](SetLocalAngles)|Set entity local pitch, yaw, roll by component|❌
[void SetLocalOrigin(origin)](SetLocalOrigin)|Set entity local origin from a Vector|❌
[void SetLocalScale(flScale)](SetLocalScale)||❌
[void SetMass(flMass)](SetMass)|Set the mass of an entity. (does nothing if it doesn't have a physics object)|❌
[void SetMaxHealth(amt)](SetMaxHealth)|Set the maximum health of this entity.|❌
[void SetOrigin(v)](SetOrigin)||❌
[void SetOwner(pOwner)](SetOwner)|Sets this entity's owner|❌
[void SetParent(hParent, pAttachmentname)](SetParent)|Set the parent for this entity.|❌
[void SetTeam(iTeamNum)](SetTeam)||❌
[void SetVelocity(vecVelocity)](SetVelocity)||❌
[void StopSound(soundname)](StopSound)|Stops a named sound playing from this entity.|❌
[int TakeDamage(hInfo)](TakeDamage)|Apply damage to this entity. Use CreateDamageInfo() to create a damageinfo object.|❌
[Vector TransformPointEntityToWorld(vPoint)](TransformPointEntityToWorld)|Returns the input Vector transformed from entity to world space|❌
[Vector TransformPointWorldToEntity(vPoint)](TransformPointWorldToEntity)|Returns the input Vector transformed from world to entity space|❌
[void Trigger()](Trigger)|Fires off this entity's OnTrigger responses.|❌
[void ValidatePrivateScriptScope()](ValidatePrivateScriptScope)|Validates the private script scope and creates it if one doesn't exist.|❌
