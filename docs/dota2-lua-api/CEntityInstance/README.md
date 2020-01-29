# CEntityInstance
No Description Set

Function|Description|Client
--|--|:--:
[void ConnectOutput(string_1, string_2)](ConnectOutput)|Adds an I/O connection that will call the named function on this entity when the specified output fires.|✔️
[void Destroy()](Destroy)||✔️
[void DisconnectOutput(string_1, string_2)](DisconnectOutput)|Removes a connected script function from an I/O event on this entity.|✔️
[void DisconnectRedirectedOutput(string_1, string_2, handle_3)](DisconnectRedirectedOutput)|Removes a connected script function from an I/O event on the passed entity.|✔️
[void FireOutput(string_1, handle_2, handle_3, table_4, float_5)](FireOutput)|Fire an entity output|✔️
[string GetClassname()](GetClassname)||✔️
[string GetDebugName()](GetDebugName)|Get the entity name w/help if not defined (i.e. classname/etc)|✔️
[ehandle GetEntityHandle()](GetEntityHandle)|Get the entity as an EHANDLE|✔️
[int GetEntityIndex()](GetEntityIndex)||✔️
[int GetIntAttr(string_1)](GetIntAttr)|Get Integer Attribute|✔️
[string GetName()](GetName)||✔️
[handle GetOrCreatePrivateScriptScope()](GetOrCreatePrivateScriptScope)|Retrieve, creating if necessary, the private per-instance script-side data associated with an entity|✔️
[handle GetOrCreatePublicScriptScope()](GetOrCreatePublicScriptScope)|Retrieve, creating if necessary, the public script-side data associated with an entity|✔️
[handle GetPrivateScriptScope()](GetPrivateScriptScope)|Retrieve the private per-instance script-side data associated with an entity|✔️
[handle GetPublicScriptScope()](GetPublicScriptScope)|Retrieve the public script-side data associated with an entity|✔️
[void RedirectOutput(string_1, string_2, handle_3)](RedirectOutput)|Adds an I/O connection that will call the named function on the passed entity when the specified output fires.|✔️
[void RemoveSelf()](RemoveSelf)|Delete this entity|✔️
[void SetIntAttr(string_1, int_2)](SetIntAttr)|Set Integer Attribute|✔️
[int entindex()](entindex)||✔️
