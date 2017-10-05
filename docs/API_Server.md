## AttachEntityToEntity
Attaches an entity to another one.
Can later be detached using [[detachEntity]].

```csharp
API.attachEntityToEntity(NetHandle entity, NetHandle entityTarget, String bone, Vector3 positionOffset, Vector3 rotationOffset);
```
## Call
If your script has multiple classes that inherit <code>Script</code>, and you would like to call a method in one of the classes from another, you can use API.call to do so.

```csharp
API.call(string className, string methodName, params object[] arguments);
```
## ConsoleOutput
This function returns a specified text in server's console.

```csharp
API.consoleOutput(string text);
```
## Create2DColShape
Creates a 2D collision shape which checks whether an entity is inside of a rectangular area, where height does not count.
{{NoteBlock|If shared API was used when creating, then the created entities are not deleted on ResourceStop}}

```csharp
API.create2DColShape(float x, float y, float width, float height);
```
## Create3DColShape
Creates a 3D collision shape which checks whether an entity is inside of a rectangular area. If you don't care about the height, you can use [[create2DColShape]] instead.
{{NoteBlock|If shared API was used when creating, then the created entities are not deleted on ResourceStop}}

```csharp
API.create3DColShape(Vector3 start, Vector3 end);
```
## CreateCylinderColShape
Creates a cylinder shaped colshape object.
{{NoteBlock|If shared API was used when creating, then the created entities are not deleted on ResourceStop}}
The dimension of the collider can be set on the return type <code>[[CylinderColShape]]</code>.

```csharp
API.createCylinderColShape(Vector3 position, float range, float height);
```
## CreateLoopedParticleEffectOnEntity
Creates a looped Particle effect on an entity.
This function is similar to [[createParticleEffectOnEntity]] but is looped and returns a NetHandle.

```csharp
API.createLoopedParticleEffectOnEntity(string ptfxLib, string ptfxName, NetHandle entity, Vector3 offset, Vector3 rotation, float scale, int bone = -1, int dimension = 0);
```
## CreateLoopedParticleEffectOnPosition
Creates a looped Particle effect on a position.
This function is similar to [[createParticleEffectOnPosition]] but is looped and returns a NetHandle.

```csharp
API.createLoopedParticleEffectOnPosition(string ptfxLib, string ptfxName, Vector3 position, Vector3 rotation, float scale, int dimension = 0);
```
## CreateParticleEffectOnEntity
Creates a Particle effect on an entity.
This function is similar to [[createLoopedParticleEffectOnEntity]] but isn't looped so a NetHandle isn't returned.

```csharp
API.createParticleEffectOnEntity(string ptfxLib, string ptfxName, NetHandle entity, Vector3 offset, Vector3 rotation, float scale, int bone = -1, int dimension = 0);
```
## CreateParticleEffectOnPosition
Creates a Particle effect on a position.
This function is similar to [[createLoopedParticleEffectOnPosition]] but isn't looped so a NetHandle isn't returned.

<syntaxhighlight lang="Csharp" >API.createParticleEffectOnPosition(string ptfxLib, string ptfxName, Vector3 position, Vector3 rotation, float scale, int dimension = 0);
```
## CreatePickup
Creates a pickup. See [[Pickups|Pickup list]].
{{NoteBlock|If shared API was used when creating, then the created entities are not deleted on ResourceStop}}

```csharp
API.createPickup(PickupHash pickupHash, Vector3 pos, Vector3 rot, int amount, uint respawnTime, int dimension = 0);
```
## CreateSphereColShape
Creates a spherical collision shape which checks whether an entity is inside of the spherical area.
{{NoteBlock|If shared API was used when creating, then the created entities are not deleted on ResourceStop}}

```csharp
API.createSphereColShape(Vector3 position, float range);
```
## Delay
Calls the given function in a separate thread after a given time span.

```csharp
API.delay(int ms, bool once, Action target);
```
## DeleteColShape
Deletes a collision shape.

```csharp
API.deleteColShape(ColShape shape);
```
## DeleteObject
{{inC#|
Deletes a prop at the given position for the given client.
'''Note:''' This prop will automatically be restored if you walk away and come back.

```csharp
API.deleteObject(Client client, Vector3 position, int modelHash, float radius = 1f);
```
## DoesConfigExist
If you have defined config files in your resource (see [[meta.xml]] on how to define these), this function will return whether the given config exists.

```csharp
API.doesConfigExist(string configName);
```
## DoesEntityExistForPlayer
Checks if an entity exists for the given player.
{{Template:synchronousWarning}}

```csharp
API.doesEntityExistForPlayer(Client player, NetHandle entity);
```
## DoesPlayerHaveAccessToCommand
Checks whether a player has access to the given command based on the ACL.

```csharp
API.doesPlayerHaveAccessToCommand(Client player, string cmd);
```
## DoesResourceExist
Checks if the given resource exists.

```csharp
API.doesResourceExist(string resource);
```
## DownloadData
Transfers a string to the given client. Client scripts then receive this data in [[onCustomDataReceived]].
This is asynchronous, but is often not as fast as sending big chunks of data directly through [[triggerClientEvent]], so choose wisely.

```csharp
API.downloadData(Client target, string data, int id = 0);
```
## Exported
Provides access to exported functions and events.

```csharp
API.exported.resourceName.exportedFunction();
```
## FetchNativeFromPlayer
This function returns data from a Native call.
{{Template:synchronousWarning}}

```csharp
API.fetchNativeFromPlayer<T>(Client player, ulong longHash, params object[] args);
```
## FreezePlayer
Freezes or unfreezes a player into their current position. While frozen, they won't be able to move, but their walking and running animations will still play. The player will still be able to do other things, like shooting a weapon.

```csharp
API.freezePlayer(Client player, bool freeze);
```
## FreezePlayerTime
Freezes or unfreezes the world time for the given player.

```csharp
API.freezePlayerTime(Client client, bool freeze);
```
## GenerateBCryptSalt
Generates a salt for use with the [[getPasswordHashBCrypt]] method.

```csharp
string API.generateBCryptSalt();
```
## GetAllBlips
Gets all blips created with [[createBlip]].

```csharp
API.getAllBlips();
```
## GetAllColShapes
Gets all ColShapes on the Server.

```csharp
List<NetHandle> API.getAllColShapes();
```
## GetAllEntityData
Gets all keys set in the server's entity data, set with [[setEntityData]].

```csharp
API.getAllEntityData(NetHandle entity);
```
## GetAllLabels
Gets all text labels created with [[createTextLabel]].

```csharp
API.getAllLabels();
```
## GetAllResources
{{Template:Server_side_csharp}}
Get's an array of all available resources on the server.

```csharp
API.getAllResources();
```
## GetCurrentGamemode
Gets the name of the gamemode resource currently running.

```csharp
API.getCurrentGamemode();
```
## GetCurrentMap
Gets the name of the current map.

```csharp
API.getCurrentMap();
```
## GetEntityData
Gets entity data that was set with [[setEntityData]].
Note that this data is in a different state than synced data that you set with [[setEntitySyncedData]]. To get synced data, use [[getEntitySyncedData]] instead.

```csharp
API.getEntityData(NetHandle entity, string key);
```
## GetEntityFromHandle
Gets an Entity object from the given [[NetHandle]]. For example, you can use this to get a [[Vehicle]] object from a NetHandle.

```csharp
API.getEntityFromHandle<T>(NetHandle handle);
```
## GetEntityPositionFrozen
Checks if the position of the specified entity is frozen.

```csharp
API.getEntityPositionFrozen(NetHandle entity);
```
## GetGamemodeName
Gets the name of the current gamemode.

```csharp
API.getGamemodeName();
```
## GetHashBCrypt
Hashes a string using the OpenBSD bcrypt scheme.

```csharp
API.getPasswordHashBCrypt(string input);
```
## GetMapGamemodes
If the given resource is a map, it returns an array of string with all compatible gamemodes defined in the map's [[meta.xml]]. Otherwise, it will return an empty string.

```csharp
API.getMapGamemodes(string resource);
```
## GetMapName
Gets the name of the current map.

```csharp
API.getMapName();
```
## GetMapsForGamemode
Function Description

```csharp
API.getMapsForGamemode(string gamemode);
```
## GetMaxPlayers
This function return the server max players.

```csharp
API.getMaxPlayers();
```
## GetPasswordHashBCrypt
Hashes a password using the OpenBSD bcrypt scheme.

```csharp
API.getPasswordHashBCrypt(string input);
```
## GetPickupAmount
Function Description

```csharp
API.getPickupAmount(NetHandle pickup);
```
## GetPickupCustomModel
{{Template:Server_side_csharp}}
Get pickup custom model.

```csharp
API.getPickupCustomModel(NetHandle pickup);
```
## GetPickupPickedUp
{{Template:Server_side_csharp}}
Take a pickup.

```csharp
API.getPickupPickedUp(NetHandle pickup);
```
## GetPlayerAclGroup
Function Description

```csharp
API.getPlayerAclGroup(Client player);
```
## GetPlayerActiveAsiNames
Returns a list of all active ASI-names of the specified player.

```csharp
API.getPlayerActiveAsiNames(Client player);
```
## GetPlayerActiveModDlcPacksNames
Returns a list of all active mod DLC-pack names of the specified player.

```csharp
API.getPlayerActiveModDlcPacksNames(Client player);
```
## GetPlayerAddress
This function returns the IP address of the given player.

```csharp
API.getPlayerAddress(Client player);
```
## GetPlayerAsiHash
Returns the hash of the specified ASI-file.

```csharp
API.getPlayerAsiHash(Client player, string asiName);
```
## GetPlayerCustomScriptNames
Returns a list of all loaded custom scripts of the specified player.

```csharp
API.getPlayerCustomScriptNames(Client player);
```
## GetPlayerFromHandle
Function Description

```csharp
API.getPlayerFromHandle(NetHandle handle);
```
## GetPlayerFromHwid
Gets a player based on his [[getUniqueHardwareId| Unique Hardware ID]].

```csharp
Client API.getPlayerFromHwid(string hwid);
```
## GetPlayerFromName
This method returns a Player param from a given player name, returns '''null''' if the player name does not exist.

```csharp
API.getPlayerFromName(string name);
```
## GetPlayerFromSocialClubName
Returns the player based on his [[GetSocialClubName|Social Club Name]].

```csharp
Client API.getPlayerFromSocialClubName(string socialClubName);
```
## GetPlayerModDlcPackHash
Returns the current hash of the specified mod DLC-pack.

```csharp
API.getPlayerModDlcPackHash(Client player, string modDlcPack);
```
## GetPlayerNametag
Gets the Nametag of a specific Player.
Can be set with [[setPlayerNametag]].

```csharp
API.getPlayerNametag(Client player);
```
## GetPlayerUniqueHardwareId
Returns the Unique Hardware Id of the specified player.

```csharp
string API.getPlayerUniqueHardwareId(Client player);
```
## GetPlayerVelocity
Function Description

```csharp
API.getPlayerVelocity(Client player);
```
## GetPlayerWeaponAmmo
Returns the amount of ammo in the weapon of the player.

```csharp
API.getPlayerWeaponAmmo(Client player, WeaponHash weapon);
```
## GetPlayerWeaponComponents
{{Template:Server_side_csharp}}
This function returns the components of the given player's specified weapon.

```csharp
API.getPlayerWeaponComponents(Client player, WeaponHash weapon);
```
## GetPlayerWeapons
Returns an array of weapon hashes that contains all the weapons the player is currently holding.

```csharp
API.getPlayerWeapons(Client player);
```
## GetPlayersInRadiusOfPlayer
Function Description

```csharp
API.getPlayersInRadiusOfPlayer(float radius, Client player);
```
## GetPlayersInRadiusOfPosition
Function Description

```csharp
API.getPlayersInRadiusOfPosition(float radius, Vector3 position);
```
## GetResourceAuthor
Returns the resource author's name.

```csharp
API.getResourceAuthor(string resource);
```
## GetResourceCommandInfo
Function Description

```csharp
API.getResourceCommandInfo(string resource, string command);
```
## GetResourceCommandInfos
Function Description

```csharp
API.getResourceCommandInfos(string resource);
```
## GetResourceCommands
Function Description

```csharp
API.getResourceCommands(string resource);
```
## GetResourceDescription
Function Description

```csharp
API.getResourceDescription(string resource);
```
## GetResourceFolder
Function Description

```csharp
API.getResourceFolder();
```
## GetResourceName
Gets the resource name from the resource passed in to the function.

```csharp
API.getResourceName(string resource);
```
## GetResourceSetting
Function Description

```csharp
API.getResourceSetting(string resource, string setting);
```
## GetResourceSettingDescription
Get the description of a setting in a running resource.

```csharp
API.getResourceSettingDescription(string resource, string setting);
```
## GetResourceSettings
Function Description

```csharp
API.getResourceSettings(string resource);
```
## GetResourceType
Gets the resource type described in [[meta.xml]].

```csharp
API.getResourceType(string resource);
```
## GetResourceVersion
Function Description

```csharp
API.getResourceVersion(string resource);
```
## GetRunningResources
Function Description

```csharp
API.getRunningResources();
```
## GetServerAllowClientDevToolsSetting
This function return the current DevTools server setting.

```csharp
bool API.getServerAllowClientDevToolsSetting();
```
## GetServerConnectionSlowModeSetting
This function return the current ConnectionSlowMode server setting.

```csharp
bool API.getServerConnectionSlowModeSetting();
```
## GetServerExploitBlacklistSetting
This function return the current ExploitBlacklist server setting.

```csharp
bool API.getServerExploitBlacklistSetting();
```
## GetServerHwidDuplicateSetting
This function return the current HwidDuplicate server setting.

```csharp
bool API.getServerHwidDuplicateSetting();
```
## GetServerName
This function return the server name.

```csharp
API.getServerName();
```
## GetServerPassword
Gets the current server password.

<syntaxhighlight lang="CSharp" >string API.getServerPassword();
```
## GetServerPort
This function return the server port.

```csharp
API.getServerPort();
```
## GetServerSocialClubDuplicateSetting
This function return the current SocialClubDuplicate server setting.

```csharp
bool API.getServerSocialClubDuplicateSetting();
```
## GetTextLabelRange
Gets the current range of a text label.

```csharp
API.getTextLabelRange(NetHandle textLabel);
```
## GetThisResource
Function Description

```csharp
API.getThisResource();
```
## GetTrafficLightsInterval
'''See also:''' [[SetTrafficLightsInterval]]
Returns the current Traffic Lights Interval on the Server.

```csharp
int API.getTrafficLightsInterval();
```
## GetVehicleBones
Returns a list of available bones for a specified vehicle model.
See [[Vehicle Bones]] for a list of all vehicle bones.

```csharp
API.getVehicleBones(VehicleHash model);
```
## GetVehicleClassName
Gets the vehicle class name associated with the given vehicle hash / class id. 
See [[Vehicle Classes]] for a list of classes.

```csharp
API.getVehicleClassName(int classId);
```
## GetVehicleDimensions
Returns the dimensions (size) of a specified vehicle model.

```csharp
API.getVehicleDimensions(VehicleHash model);
```
## GetVehicleDriver
Returns the driver of the specified vehicle.

```csharp
Client API.getVehicleDriver(NetHandle vehicle);
```
## GetVehicleLiverys
Returns a list of available liveries for a specified vehicle.
'''See:''' [[SetVehicleLivery]]

```csharp
API.getVehicleLiverys(VehicleHash model);
```
## GetVehicleManufacturerName
Returns the specified vehiclemodel's manufacturer name.

```csharp
API.getVehicleManufacturerName(VehicleHash model);
```
## GetVehicleOccupants
A function that returns the players who are inside a vehicle. 
If there are no players in the vehicle, the function will return an empty '''Client[]''' array.

```csharp
API.getVehicleOccupants(NetHandle vehicle);
```
## GetVehicleValidMods
Returns a list of all valid mods for a specified vehicle model.

```csharp
API.getVehicleValidMods(VehicleHash model);
```
## GetVehicleWheelTypeName
Returns the specified vehicle's classname.

```csharp
API.getVehicleWheelTypeName(VehicleHash model);
```
## GetWeaponType
Get the Weapon Type from the specified WeaponHash.

```csharp
WeaponType API.getWeaponType(WeaponHash weaponHash);
```
## GetWeather
This function return the server weather.

```csharp
API.getWeather();
```
## GetWorldData
Function Description

```csharp
API.getWorldData(string key);
```
## GivePlayerWeapon
Gives the given player a weapon of the given type. See also [[Weapons Models]].

```csharp
API.givePlayerWeapon(Client player, WeaponHash weaponHash, int ammo, bool equipNow, bool ammoLoaded);
```
## HasPlayerGotWeaponComponent
This function checks if the specified weapon of the given player has the specified component.

```csharp
API.hasPlayerGotWeaponComponent(Client player, WeaponHash weapon, WeaponComponent component);
```
## HasVehicleBombBay
Checks if the specified vehicle model has Bomb Bay.

```csharp
API.hasVehicleBombBay(VehicleHash model);
```
## HasVehicleForks
Checks if the specified vehicle model has forks.

```csharp
API.hasVehicleForks(VehicleHash model);
```
## HasVehicleSirens
Checks if the specified vehicle model has sirens.

```csharp
API.hasVehicleSirens(VehicleHash model);
```
## HasVehicleTowArm
Checks if the specified vehicle model has TowArm.

```csharp
API.hasVehicleTowArm(VehicleHash model);
```
## HasWorldData
Function Description

```csharp
API.hasWorldData(string key);
```
## IsAclEnabled
Function Description

```csharp
API.isAclEnabled();
```
## IsPasswordProtected
This function return the state of server password protection.

```csharp
API.isPasswordProtected();
```
## IsPlayerLoggedIn
Returns whether a player is logged in to ACL or not.

```csharp
API.isPlayerLoggedIn(Client player);
```
## IsPlayerModDlcPackActive
Checks if the player activated the specified mod DLC-pack.

```csharp
API.isPlayerModDlcPackActive(Client player, string modDlcPack);
```
## IsPlayerOpenIVActive
Checks if the specified player has OpenIV active.

```csharp
API.isPlayerOpenIVActive(Client player);
```
## IsPlayerRunningAsi
Checks if the player runs the specified ASI.

```csharp
API.isPlayerRunningAsi(Client player, string asiName);
```
## IsResourceRunning
Checks if the given resource is running.

```csharp
API.isResourceRunning(string resource);
```
## IsVehicleAAmphibiousQuadBike
Checks if the specified vehicle model is a Amphibious Quad Bike.

```csharp
API.isVehicleAAmphibiousQuadBike(VehicleHash model);
```
## IsVehicleAAmphibiousVehicle
Checks if the specified vehicle model is a Amphibious Vehicle.

```csharp
API.isVehicleAAmphibiousVehicle(VehicleHash model);
```
## IsVehicleABicycle
Checks if the specified vehicle model is a Bicycle.

```csharp
API.isVehicleABicycle(VehicleHash model);
```
## IsVehicleABike
Checks if the specified vehicle model is a bike.

```csharp
API.isVehicleABike(VehicleHash model);
```
## IsVehicleABlimp
Checks if the specified vehicle model is a Blimp.

```csharp
API.isVehicleABlimp(VehicleHash model);
```
## IsVehicleABoat
Checks if the specified vehicle model is a Boat.

```csharp
API.isVehicleABoat(VehicleHash model);
```
## IsVehicleACar
Checks if the specified vehicle model is a Car.

```csharp
API.isVehicleACar(VehicleHash model);
```
## IsVehicleACargobob
Checks if the specified vehicle model is a Cargobob.

```csharp
API.isVehicleACargobob(VehicleHash model);
```
## IsVehicleAEmergencyBoat
Checks if the specified vehicle model is a Emergency Boat.

```csharp
API.isVehicleAEmergencyBoat(VehicleHash model);
```
## IsVehicleAHeli
Checks if the specified vehicle model is a Helicopter.

```csharp
API.isVehicleAHeli(VehicleHash model);
```
## IsVehicleAPlane
Checks if the specified vehicle model is a Plane.

```csharp
API.isVehicleAPlane(VehicleHash model);
```
## IsVehicleAQuad
Checks if the specified vehicle model is a Quad.

```csharp
API.isVehicleAQuad(VehicleHash model);
```
## IsVehicleATrailer
Checks if the specified vehicle model is a Trailer.

```csharp
API.isVehicleATrailer(VehicleHash model);
```
## IsVehicleATrain
Checks if the specified vehicle model is a Train.

```csharp
API.isVehicleATrain(VehicleHash model);
```
## IsVehicleConvertible
Checks if the specified vehicle model is a convertible.

```csharp
API.isVehicleConvertible(VehicleHash model);
```
## IsVehicleElectric
Checks if the specified vehicle model has an electric engine.

```csharp
API.isVehicleElectric(VehicleHash model);
```
## KickPlayer
Kicks a player from the server.

```csharp
API.kickPlayer(Client player, string reason);
```
## LoadXml
Function Description

```csharp
API.loadXml(string path);
```
## LoginPlayer
Logs a player into ACL.

```csharp
API.loginPlayer(Client player, string password);
```
## LogoutPlayer
Logs a player out of ACL.

```csharp
API.logoutPlayer(Client player);
```
## MoveEntityPosition
Function Description

```csharp
API.moveEntityPosition(NetHandle netHandle, Vector3 target, int duration);
```
## MoveEntityRotation
Function Description

```csharp
API.moveEntityRotation(NetHandle netHandle, Vector3 target, int duration);
```
## PickupNameToModel
Converts a String input into a PickupHash output.

```csharp
API.pickupNameToModel(string modelName);
```
## PlayPedAnimation
Function Description

```csharp
API.playPedAnimation(NetHandle ped, bool looped, string animDict, string animName);
```
## PlayPedScenario
Function Description

```csharp
API.playPedScenario(NetHandle ped, string scenario);
```
## Random
Function Description

```csharp
API.random();
```
## RegisterCustomColShape
Function Description

```csharp
API.registerCustomColShape(ColShape shape);
```
## RemoveIplForPlayer
'''See also:''' [[RequestIplForPlayer]]
Removes the specified Ipl for the specified player.

```csharp
API.removeIplForPlayer(Client player, string iplName);
```
## RepairVehicle
This function will repair the vehicle.

```csharp
API.repairVehicle(NetHandle vehicle);
```
## RequestIplForPlayer
'''See also:''' [[RemoveIplForPlayer]]
Requests the specified Ipl for the specified player.

```csharp
API.requestIplForPlayer(Client player, string iplName);
```
## ResetIplList
Function Description

```csharp
API.resetIplList();
```
## ResetWorldData
Function Description

```csharp
API.resetWorldData(string key);
```
## RespawnPickup
Function Description

```csharp
API.respawnPickup(NetHandle pickup);
```
## RestartResource
Stops the given resource and starts it again afterwards.
'''See also:''' [[StartResource]], [[StopResource]]

```csharp
bool API.restartResource(string name);
```
## SendChatMessageToAll
Sends a chat message to all clients.

```csharp
API.sendChatMessageToAll(string sender, string message);
```
## SendChatMessageToPlayer
Sends a message to the targeted player.
'''2 overloads'''

```csharp
API.sendChatMessageToPlayer(Client player, string message);
```
## SendNativeToAllPlayers
Sends a Native Call to all player.

```csharp
API.sendNativeToAllPlayers(ulong longHash, params object[] args);
```
## SendNativeToPlayer
Sends a Native Call to a player.

```csharp
API.sendNativeToPlayer(Client player, ulong longHash, params object[] args);
```
## SendNativeToPlayersInDimension
Sends a Native Call to all players in a specified Dimension.

```csharp
API.sendNativeToPlayersInDimension(int dimension, ulong hash, params object[] args);
```
## SendNativeToPlayersInRange
Sends a Native Call to all players in range of a specified position.

```csharp
API.sendNativeToPlayersInRange(Vector3 pos, float range, ulong hash, params object[] args);
```
## SendNativeToPlayersInRangeInDimension
Sends a Native Call to all players in range of a specified position in a Dimension.

```csharp
API.sendNativeToPlayersInRangeInDimension(Vector3 pos, float range, int dimension, ulong hash, params object[] args);
```
## SendNotificationToAll
Sends a Notification message to all Player.

```csharp
API.sendNotificationToAll(string message, bool flashing = false);
```
## SendNotificationToPlayer
Sends a Notification message to a Player.
'''Note:''' Custom colors in hex format will not work for notifications, they only for the in-game chat. You can still use standard text color codes, however.

```csharp
API.sendNotificationToPlayer(Client player, string message, bool flashing = false);
```
## SendPictureNotificationToAll
Function Description

```csharp
API.sendPictureNotificationToAll(string body, string pic, int flash, int iconType, string sender, string subject);
```
## SendPictureNotificationToPlayer
Sets a picture notification to a player

```csharp
API.sendPictureNotificationToPlayer(Client player, string body, string pic, int flash, int iconType, string sender, string subject);
```
## SetAclErrorMessage
Sets the acl error message with the specified one.
'''Default is:''' "~r~ERROR: ~w~ACL must be running!"

```csharp
API.setAclErrorMessage(string msg);
```
## SetCollisionBetweenEntities
Function Description

```csharp
API.setCollisionBetweenEntities(NetHandle entity1, NetHandle entity2, bool collision);
```
## SetCommandErrorMessage
Sets the error message you get when a chat command is not found. The default is: <code>~r~ERROR:~w~ Command not found.</code>

```csharp
API.setCommandErrorMessage(string msg);
```
## SetDefaultLanguage
Sets the default language of all resources.
'''See:''' [[tryGetLocalizedGameText]]

```csharp
API.setDefaultLanguage(SupportedLocalizations language);
```
## SetEntityData
Sets the given data value on the entity. This does not synchronize the data to clients. Use [[setEntitySyncedData]] if you want this value to synchronize to clients.

```csharp
API.setEntityData(NetHandle entity, string key, object value);
```
## SetGamemodeName
Sets the game mode name that is shown in the client and the masterlist.

```csharp
API.setGamemodeName(string newName);
```
## SetMapName
Sets the name of the current map.

```csharp
API.setMapName(string newName);
```
## SetMaxPlayers
Sets the maximum amount of possible players on the server.

```csharp
API.setMaxPlayers(int maxPlayers);
```
## SetPlayerName
Set the Name of a Player.

```csharp
API.setPlayerName(Client player, string newName);
```
## SetPlayerNotFoundArgumentMessage
Sets the command argument not found message for the argument type player with the specified one.
'''Default is:''' "~r~ERROR: ~w~ No player named \"{0}\" has been found for argument \"{1}\"!"

```csharp
API.setPlayerNotFoundArgumentMessage(string msg);
```
## SetPlayerSeatbelt
Puts on or detaches the seatbelt of a player.

```csharp
API.setPlayerSeatbelt(Client player, bool seatbelt);
```
## SetPlayerToSpectatePlayer
Sets a player spectating another player.

```csharp
API.setPlayerToSpectatePlayer(Client player, Client target);
```
## SetPlayerToSpectator
Function Description

```csharp
API.setPlayerToSpectator(Client player);
```
## SetPlayerVelocity
Sets the velocity of a player.

```csharp
API.setPlayerVelocity(Client player, Vector3 velocity);
```
## SetPlayerWeaponAmmo
Sets the amount of ammo in the weapon of the player.

```csharp
API.setPlayerWeaponAmmo(Client player, WeaponHash weapon, int ammo);
```
## SetResourceSetting
Function Description

```csharp
API.setResourceSetting(string resource, string setting, object value);
```
## SetServerAllowClientDevToolsSetting
Sets the DevTool Server Setting.

```csharp
API.setServerAllowClientDevToolsSetting(bool enabled);
```
## SetServerConnectionSlowModeSetting
Sets the ConnectionSlowMode Server Setting.

```csharp
API.setServerConnectionSlowModeSetting(bool enabled);
```
## SetServerExploitBlacklistSetting
Sets the ExploitBlacklist Server Setting.

```csharp
API.setServerExploitBlacklistSetting(bool enabled);
```
## SetServerHwidDuplicateSetting
Sets the HwidDuplicate Server Setting.

```csharp
API.setServerHwidDuplicateSetting(bool enabled);
```
## SetServerName
Sets the current server name.

```csharp
API.setServerName(string serverName);
```
## SetServerPassword
Sets the current server connection password.

```csharp
API.setServerPassword(string password);
```
## SetServerSocialClubDuplicateSetting
Sets the SocialClubDuplicate Server Setting.

```csharp
API.setServerSocialClubDuplicateSetting(bool enabled);
```
## SetTextLabelRange
Sets the range of a text label.

```csharp
API.setTextLabelRange(NetHandle textLabel, float range);
```
## SetTrafficLightsInterval
'''See also:''' [[GetTrafficLightsInterval]]
Sets the Traffic Lights Interval on the Server
'''Default is:''' 600 
This interval is the amount of milliseconds in which the traffic lights gets updated. Lowering the interval makes traffic lights switch faster.

```csharp
API.setTrafficLightsInterval(int interval);
```
## SetValueNotFoundArgumentMessage
Sets the command argument not found message for the argument type value with the specified one.
'''Default is:''' "~r~ERROR: ~w~ No value named \"{0}\" has been found for argument \"{1}\"!"

```csharp
API.setValueNotFoundArgumentMessage(string msg);
```
## SetVehicleHealth
Sets how much health the vehicle has.

```csharp
API.setVehicleHealth(NetHandle vehicle, float health);
```
## SetVehiclePetrolTankHealth
'''See also:''' [[GetVehiclePetrolTankHealth]]
Sets the durability of the petrol tank of the specified vehicle.

```csharp
API.setVehiclePetrolTankHealth(NetHandle vehicle, float health);
```
## SetWorldData
Function Description

```csharp
API.setWorldData(string key, object value);
```
## StartResource
Starts the given resource.
'''See also:''' [[RestartResource]], [[StopResource]]

```csharp
API.startResource(string resourceName);
```
## StartThread
Function Description

```csharp
API.startThread(ThreadStart target);
```
## StartTimer
Calls the given function in a separate thread after a given time span.

```csharp
API.startTimer(int ms, bool once, Action target);
```
## StopDelay
Stops a previously created delay.

```csharp
API.stopDelay(Timer timer)
```
## StopPedAnimation
Function Description

```csharp
API.stopPedAnimation(NetHandle ped);
```
## StopResource
Stops the given resource.
'''See also:''' [[StartResource]], [[RestartResource]]

```csharp
API.stopResource(string name);
```
## StopServer
Stops all Resource and then closes the server window. Full shutdown of the server.

```csharp
bool API.stopServer();
```
## StopTimer
Stops a previously created timer.

```csharp
API.stopTimer(Timer timer)
```
## TickCount
The value that is returned represents the number of miliseconds intervals that have elapsed since 12:00:00 midnight, January 1, 0001 (0:00:00 UTC on January 1, 0001, in the Gregorian calendar). This is similar to DateTime.Now.Tick property but the latter one returns in nanoseconds (https://msdn.microsoft.com/en-us/library/system.datetime.ticks(v=vs.110).aspx). This function is good for debugging and benchmarking.

```csharp
API.TickCount;
```
## TriggerClientEvent
Triggers a client-side script event call from server-side to a Player. For the inverse method of this (client to server), see [[triggerServerEvent]].
This method triggers the client-side [[onServerEventTrigger]] event.
''Warning:'' This function should not be called under client connection events. ([[onPlayerConnected]] or [[onPlayerBeginConnect]]) - It will not be triggered. Instead, you should wait for [[onPlayerFinishedDownload]].
''Note:'' If you intend to use this to send big chunks of custom data to clients, you should be aware that you can also use [[downloadData]] and [[onCustomDataReceived]] to transfer this custom data.

```csharp
API.triggerClientEvent(Client player, string eventName, params object[] args);
```
## TriggerClientEventForAll
Triggers a client-side script event call from server-side to all players. To trigger an event for a single player, use [[triggerClientEvent]].
''Note:'' If you intend to use this to send big chunks of custom data to clients, you should be aware that you can also use [[downloadData]] and [[onCustomDataReceived]] to transfer this custom data.

```csharp
API.triggerClientEventForAll(string eventName, params object[] args);
```
## TryGetLocalizedGameText
Returns if there is a localized gametext in the provided language available. 
If so, the specified variable under <code>out string translation</code> will be filled with the translated text.
'''Hint:''' Use [[setDefaultLanguage]] to set the default language globally.

```csharp
API.tryGetLocalizedGameText(string gameText, out string translation, SupportedLocalizations language = SupportedLocalizations.Default);
```
## UnspectatePlayer
This function works if you are spectating on a player using the function [[setPlayerToSpectatePlayer]] and this function will unspectate you if you are spectating a player.

```csharp
API.unspectatePlayer(Client player);
```
## VerifyPasswordHashBCrypt
Verifies that the hash of text matches the provided hash.

```csharp
API.verifyPasswordHashBCrypt(string text, string hash);
```
## WarpPlayerOutOfVehicle
Removes a player from his current vehicle

```csharp
API.warpPlayerOutOfVehicle(Client player);
```

