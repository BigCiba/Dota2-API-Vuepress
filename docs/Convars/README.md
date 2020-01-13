# Convars
Function|Description|Client
--|--|:--:
[table GetBool(string_1)](GetBool)|GetBool(name) : returns the convar as a boolean flag.|✔
[handle GetCommandClient()](GetCommandClient)|GetCommandClient() : returns the player who issued this console command.|✔
[handle GetDOTACommandClient()](GetDOTACommandClient)|GetDOTACommandClient() : returns the DOTA player who issued this console command.|✔
[table GetFloat(string_1)](GetFloat)|GetFloat(name) : returns the convar as a float. May return null if no such convar.|✔
[table GetInt(string_1)](GetInt)|GetInt(name) : returns the convar as an int. May return null if no such convar.|✔
[table GetStr(string_1)](GetStr)|GetStr(name) : returns the convar as a string. May return null if no such convar.|✔
[void RegisterCommand(string_1, handle_2, string_3, int_4)](RegisterCommand)|RegisterCommand(name, fn, helpString, flags) : register a console command.|✔
[void RegisterConvar(string_1, string_2, string_3, int_4)](RegisterConvar)|RegisterConvar(name, defaultValue, helpString, flags): register a new console variable.|✔
[void SetBool(string_1, bool_2)](SetBool)|SetBool(name, val) : sets the value of the convar to the bool.|✔
[void SetFloat(string_1, float_2)](SetFloat)|SetFloat(name, val) : sets the value of the convar to the float.|✔
[void SetInt(string_1, int_2)](SetInt)|SetInt(name, val) : sets the value of the convar to the int.|✔
[void SetStr(string_1, string_2)](SetStr)|SetStr(name, val) : sets the value of the convar to the string.|✔
