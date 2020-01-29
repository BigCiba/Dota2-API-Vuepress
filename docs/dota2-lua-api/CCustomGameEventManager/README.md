# CCustomGameEventManager
全局访问变量：CustomGameEventManager

Function|Description|Client
--|--|:--:
[int RegisterListener(string_1, handle_2)](RegisterListener)|( string EventName, func CallbackFunction ) - Register a callback to be called when a particular custom event arrives. Returns a listener ID that can be used to unregister later.|❌
[void Send_ServerToAllClients(string_1, handle_2)](Send_ServerToAllClients)|( string EventName, table EventData )|❌
[void Send_ServerToPlayer(handle_1, string_2, handle_3)](Send_ServerToPlayer)|( Entity Player, string EventName, table EventData )|❌
[void Send_ServerToTeam(int_1, string_2, handle_3)](Send_ServerToTeam)|( int TeamNumber, string EventName, table EventData )|❌
[void UnregisterListener(int_1)](UnregisterListener)|( int ListnerID ) - Unregister a specific listener|❌
