# CBaseAnimating
extends [CBaseModelEntity](../CBaseModelEntity)

Function|Description|Client
--|--|:--:
[float ActiveSequenceDuration()](ActiveSequenceDuration)|Returns the duration in seconds of the active sequence.|❌
[Vector GetAttachmentAngles(iAttachment)](GetAttachmentAngles)|Get the attachment id's angles as a p,y,r vector.|❌
[Vector GetAttachmentForward(iAttachment)](GetAttachmentForward)|Get the attachment id's forward vector.|❌
[Vector GetAttachmentOrigin(iAttachment)](GetAttachmentOrigin)|Get the attachment id's origin vector.|❌
[float GetCycle()](GetCycle)|Get the cycle of the animation.|❌
[table GetGraphParameter(pszParam)](GetGraphParameter)|Get the value of the given animGraph parameter|❌
[float GetModelScale()](GetModelScale)|Get scale of entity's model.|❌
[string GetSequence()](GetSequence)|Returns the name of the active sequence.|❌
[bool IsSequenceFinished()](IsSequenceFinished)|Ask whether the main sequence is done playing.|❌
[void ResetSequence(pSequenceName)](ResetSequence)|Sets the active sequence by name, resetting the current cycle.|❌
[int ScriptLookupAttachment(pAttachmentName)](ScriptLookupAttachment)|Get the named attachment id.|❌
[float SequenceDuration(pSequenceName)](SequenceDuration)|Returns the duration in seconds of the given sequence name.|❌
[void SetCycle(flCycle)](SetCycle)|Set the cycle of the animation.|❌
[void SetGraphLookTarget(vValue)](SetGraphLookTarget)|Pass the desired look target in world space to the graph|❌
[void SetGraphParameter(pszParam, svArg)](SetGraphParameter)|Set the specific param value, type is inferred from the type in script|❌
[void SetGraphParameterBool(szName, bValue)](SetGraphParameterBool)|Set the specific param on or off|❌
[void SetGraphParameterEnum(szName, nValue)](SetGraphParameterEnum)|Pass the enum (int) value to the specified param|❌
[void SetGraphParameterFloat(szName, flValue)](SetGraphParameterFloat)|Pass the float value to the specified param|❌
[void SetGraphParameterInt(szName, nValue)](SetGraphParameterInt)|Pass the int value to the specified param|❌
[void SetGraphParameterVector(szName, vValue)](SetGraphParameterVector)|Pass the vector value to the specified param in the graph|❌
[void SetModelScale(flScale)](SetModelScale)|Set scale of entity's model.|❌
[float SetPoseParameter(szName, fValue)](SetPoseParameter)|Set the specified pose parameter to the specified value.|❌
[void SetSequence(pSequenceName)](SetSequence)|Sets the active sequence by name, keeping the current cycle.|❌
[void StopAnimation()](StopAnimation)|Stop the current animation by setting playback rate to 0.0.|❌
