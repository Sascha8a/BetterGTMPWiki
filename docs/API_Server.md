## AttachEntityToEntity
Attaches an entity to another one.
Can later be detached using [detachEntity]().

```csharp
API.attachEntityToEntity(NetHandle entity, NetHandle entityTarget, String bone, Vector3 positionOffset, Vector3 rotationOffset);
```
!> **TODO: ** Add usage example!
## Call
If your script has multiple classes that inherit <code>Script</code>, and you would like to call a method in one of the classes from another, you can use API.call to do so.

```csharp
API.call(string className, string methodName, params object[] arguments);
```
### Usage example(s)
```csharp

// Script1.cs
public class Script1 : Script
{
    public void DoSomething(string argument1, int argument2) {
        // Do something
    }
}

// Script2.cs
public class Script2 : Script
{
    public void DoSomethingElse() {
        API.call("Script1", "DoSomething", "argument 1", 2);
    }
}

```

Please note, if you're compiling your resource to .DLL, it's recommended to use C#'s <code>nameof()</code> function. This makes it easier to refactor class and method names, as it will throw an error if used on a method or class name that doesn't exist. Example:

```csharp

API.call(nameof(Script1), nameof(Script1.DoSomething), "argument 1", 2);

```


## ConsoleOutput
This function returns a specified text in server's console.

```csharp
API.consoleOutput(string text);
```
### Usage example(s)

```csharp
API.consoleOutput("You should see me!");
```
```csharp

API.consoleOutput(
        "(C) Currency: . . . . . . . . {0:C}\n" +
        "(D) Decimal:. . . . . . . . . {0:D}\n" +
        "(E) Scientific: . . . . . . . {1:E}\n" +
        "(F) Fixed point:. . . . . . . {1:F}\n" +
        "(G) General:. . . . . . . . . {0:G}\n" +
        "    (default):. . . . . . . . {0} (default = 'G')\n" +
        "(N) Number: . . . . . . . . . {0:N}\n" +
        "(P) Percent:. . . . . . . . . {1:P}\n" +
        "(R) Round-trip: . . . . . . . {1:R}\n" +
        "(X) Hexadecimal:. . . . . . . {0:X}\n",
        -123, -123.45f); 

```




## Create2DColShape
Creates a 2D collision shape which checks whether an entity is inside of a rectangular area, where height does not count.

?> *Note:* If shared API was used when creating, then the created entities are not deleted on ResourceStop

```csharp
API.create2DColShape(float x, float y, float width, float height);
```
### Usage example(s)
```csharp

var shape = API.create2DColShape(100.0f, 100.0f, 50.0f, 50.0f);

```


?> *Note:* 
x is the width

y is the height

The actual height is from the lowest to the highest point on the map

[https://gt-mp.net/forum/thread/772-colshape-debug-resource/ Resource for Debug]




## Create3DColShape
Creates a 3D collision shape which checks whether an entity is inside of a rectangular area. If you don't care about the height, you can use [create2DColShape](API_Server.md?id=create2dcolshape) instead.

?> *Note:* If shared API was used when creating, then the created entities are not deleted on ResourceStop

```csharp
API.create3DColShape(Vector3 start, Vector3 end);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

var shape = API.create3DColShape(new Vector3(100.0f, 100.0f, 100.0f), new Vector3(200.0f, 200.0f, 200.0f));

```


?> *Note:* 
[https://gt-mp.net/forum/thread/772-colshape-debug-resource/ Resource for Debug]



## CreateCylinderColShape
Creates a cylinder shaped colshape object.

?> *Note:* If shared API was used when creating, then the created entities are not deleted on ResourceStop
The dimension of the collider can be set on the return type <code>[CylinderColShape]()</code>.

```csharp
API.createCylinderColShape(Vector3 position, float range, float height);
```
### Usage example(s)
```csharp

m_colShape = API.createCylinderColShape(new Vector3(123, 123, 123), 2.0f, 3.0f);
m_colShape.onEntityEnterColShape += M_colShape_onEntityEnterColShape;

//...

private void M_colShape_onEntityEnterColShape(ColShape shape, NetHandle entity)
{
  var player = API.getPlayerFromHandle(entity);
  if (player == null) {
    return;
  }
  player.sendChatMessage("You stepped in the colshape!");
}

```


?> *Note:* 

position: center of the cylinder

range: radius

height: position.Z + height & position.Z - height (this means, when the height parameter is 5 then is the cylinder 10 high)

[https://gt-mp.net/forum/thread/772-colshape-debug-resource/ Resource for Debug]



## CreateLoopedParticleEffectOnEntity
Creates a looped Particle effect on an entity.
This function is similar to [createParticleEffectOnEntity](API_Server.md?id=createparticleeffectonentity) but is looped and returns a NetHandle.

```csharp
API.createLoopedParticleEffectOnEntity(string ptfxLib, string ptfxName, NetHandle entity, Vector3 offset, Vector3 rotation, float scale, int bone = -1, int dimension = 0);
```
### Usage example(s)

```csharp
   NetHandle myEffect = API.createLoopedParticleEffectOnEntity(ptfxLib, ptfxName, entity, offset, rotation, scale);
```




## CreateLoopedParticleEffectOnPosition
Creates a looped Particle effect on a position.
This function is similar to [createParticleEffectOnPosition](API_Server.md?id=createparticleeffectonposition) but is looped and returns a NetHandle.

```csharp
API.createLoopedParticleEffectOnPosition(string ptfxLib, string ptfxName, Vector3 position, Vector3 rotation, float scale, int dimension = 0);
```
### Usage example(s)

```csharp
NetHandle myEffect = API.createLoopedParticleEffectOnPosition(ptfxLib, ptfxName, position, rotation, scale);
```



## CreateParticleEffectOnEntity
Creates a Particle effect on an entity.
This function is similar to [createLoopedParticleEffectOnEntity](API_Server.md?id=createloopedparticleeffectonentity) but isn't looped so a NetHandle isn't returned.

```csharp
API.createParticleEffectOnEntity(string ptfxLib, string ptfxName, NetHandle entity, Vector3 offset, Vector3 rotation, float scale, int bone = -1, int dimension = 0);
```
### Usage example(s)

```csharp
   API.createParticleEffectOnEntity(ptfxLib, ptfxName, entity, offset, rotation, scale);
```




## CreateParticleEffectOnPosition
Creates a Particle effect on a position.
This function is similar to [createLoopedParticleEffectOnPosition](API_Server.md?id=createloopedparticleeffectonposition) but isn't looped so a NetHandle isn't returned.

```csharp
API.createParticleEffectOnPosition(string ptfxLib, string ptfxName, Vector3 position, Vector3 rotation, float scale, int dimension = 0);
```
### Usage example(s)

```csharp
API.createParticleEffectOnPosition(ptfxLib, ptfxName, position, rotation, scale);
```




## CreatePickup
Creates a pickup. See [[Pickups|Pickup list]].

?> *Note:* If shared API was used when creating, then the created entities are not deleted on ResourceStop

```csharp
API.createPickup(PickupHash pickupHash, Vector3 pos, Vector3 rot, int amount, uint respawnTime, int dimension = 0);
```
### Usage example(s)
```csharp
   API.createPickup(pickupHash, pos, rot, amount, respawnTime);
```
```csharp
   Pickup myPickup = API.createPickup(model, pos, rot, vehicle, respawnTime);
```




## CreateSphereColShape
Creates a spherical collision shape which checks whether an entity is inside of the spherical area.

?> *Note:* If shared API was used when creating, then the created entities are not deleted on ResourceStop

```csharp
API.createSphereColShape(Vector3 position, float range);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

var shape = API.createSphereColShape(new Vector3(100.0f, 100.0f, 100.0f), 50.0f);

```


?> *Note:* 
[https://gt-mp.net/forum/thread/772-colshape-debug-resource/ Resource for Debug]

## Delay
'''See also:''' [startTimer](API_Server.md?id=starttimer)
Calls the given function in a separate thread after a given time span.

```csharp
API.delay(int ms, bool once, Action target);
```
### Usage example(s)
```csharp

// This will delay the kick of a player by 5 seconds.
API.delay(5000, true, () => { API.kickPlayer(Client player) });

```


## DeleteColShape
Deletes a collision shape.

```csharp
API.deleteColShape(ColShape shape);
```
### Usage example(s)

Creating and deleting the colshape.
```csharp

var shape = API.create2DColShape(100.0f, 100.0f, 50.0f, 50.0f);
API.deleteColShape(shape);

```




## DeleteObject
{{inC#|
Deletes a prop at the given position for the given client.

?> *Note:* undefined
```csharp
API.deleteObject(Client client, Vector3 position, int modelHash, float radius = 1f);
```
### Usage example(s)
```csharp
API.deleteObject(Client client, Vector3 position, int modelHash);
```
}}



## DoesConfigExist
If you have defined config files in your resource (see [[meta.xml]] on how to define these), this function will return whether the given config exists.

```csharp
API.doesConfigExist(string configName);
```
### Usage example(s)
```csharp

if (API.doesConfigExist("my-config.xml")) {
  // Do stuff...
}

```


## DoesEntityExistForPlayer
Checks if an entity exists for the given player.
{{Template:synchronousWarning}}

```csharp
API.doesEntityExistForPlayer(Client player, NetHandle entity);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.doesEntityExistForPlayer(Client player, NetHandle entity);
```




## DoesPlayerHaveAccessToCommand
Checks whether a player has access to the given command based on the ACL.

```csharp
API.doesPlayerHaveAccessToCommand(Client player, string cmd);
```
### Usage example(s)
```csharp

if (API.doesPlayerHaveAccessToCommand(player, "kick")) {
  // Do stuff...
}

```




## DoesResourceExist
Checks if the given resource exists.

```csharp
API.doesResourceExist(string resource);
```
### Usage example(s)

```csharp

[Command("restart", ACLRequired = true)]
public void RestartCommand(Client sender, string name)
{
  if (!API.doesResourceExist(name)) {
    sender.sendChatMessage("~r~Error: ~s~There is no such resource as ~r~" + name + "~s~.");
    return;
  }
  API.stopResource(name);
  API.startResource(name);
}

```


## DownloadData
Transfers a string to the given client. Client scripts then receive this data in [onCustomDataReceived](API_Client.md?id=oncustomdatareceived).
This is asynchronous, but is often not as fast as sending big chunks of data directly through [triggerClientEvent](API_Server.md?id=triggerclientevent), so choose wisely.

```csharp
API.downloadData(Client target, string data, int id = 0);
```
### Usage example(s)
```csharp

API.downloadData(player, File.ReadAllText("some-big-file.txt"));

```


## Exported
Provides access to exported functions and events.

```csharp
API.exported.resourceName.exportedFunction();
```
!> **TODO: ** Add usage example!
## FetchNativeFromPlayer
This function returns data from a Native call.
{{Template:synchronousWarning}}

```csharp
API.fetchNativeFromPlayer<T>(Client player, ulong longHash, params object[] args);
```
### Usage example(s)

```csharp

int ammoCount = API.fetchNativeFromPlayer<int>(sender, Hash.GET_AMMO_IN_PED_WEAPON, sender.handle, WeaponHash.SMG);

```


## FreezePlayer
Freezes or unfreezes a player into their current position. While frozen, they won't be able to move, but their walking and running animations will still play. The player will still be able to do other things, like shooting a weapon.

```csharp
API.freezePlayer(Client player, bool freeze);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

[Command("freeze")]
public void FreezeCommand(Client sender, bool frozen)
{
  API.freezePlayer(sender, frozen);
}

```


## FreezePlayerTime
Freezes or unfreezes the world time for the given player.

```csharp
API.freezePlayerTime(Client client, bool freeze);
```
### Usage example(s)
```csharp

[Command("freezetime")]
public void FreezeTimeCommand(Client sender, bool frozen)
{
  API.freezePlayerTime(sender, frozen);
}

```


## GenerateBCryptSalt
Generates a salt for use with the [getPasswordHashBCrypt](API_Server.md?id=getpasswordhashbcrypt) method.

```csharp
string API.generateBCryptSalt();
```
### Usage example(s)
```csharp
API.generateBCryptSalt();
```
```csharp
API.generateBCryptSalt(int workFactor);
```


## GetAllBlips
Gets all blips created with [createBlip]().

```csharp
API.getAllBlips();
```
### Usage example(s)
Print the amount of loaded blips:
```csharp

var blips = API.getAllBlips();
API.consoleOutput("Total blips: " + blips.Count);

```
Change all blip sprites to a skull icon:
```csharp

var blips = API.getAllBlips();
foreach(var bhandle in blips)
    API.setBlipSprite(bhandle, 84);

```


## GetAllColShapes
Gets all ColShapes on the Server.

```csharp
List<NetHandle> API.getAllColShapes();
```
### Usage example(s)
```csharp

API.getAllColShapes();

```


## GetAllEntityData
Gets all keys set in the server's entity data, set with [setEntityData](API_Server.md?id=setentitydata).

```csharp
API.getAllEntityData(NetHandle entity);
```
### Usage example(s)
```csharp

var keys = API.getAllEntityData(NetHandle entity);
foreach (var key in keys) {
  API.consoleOutput("\"{0}\": \"{1}\"", key, API.getEntityData(key));
}

```


## GetAllLabels
Gets all text labels created with [createTextLabel]().

```csharp
API.getAllLabels();
```
### Usage example(s)
```csharp

var labels = API.getAllLabels();

```


## GetAllResources
{{Template:Server_side_csharp}}
Get's an array of all available resources on the server.

```csharp
API.getAllResources();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

[Command("resources")]
public void resources(Client player)
{
	string[] resourcesList = API.getAllResources(); //Get an array of all available resources on the server
	API.sendChatMessageToPlayer(player,"Resources loaded on server:");
	
	foreach (String resource in resourcesList) //Do a basic foreach loop through our array
	{
		API.sendChatMessageToPlayer(player,"- Resource: " + API.getResourceName(resource));
	}
}
```


## GetCurrentGamemode
Gets the name of the gamemode resource currently running.

```csharp
API.getCurrentGamemode();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getCurrentGamemode();
```


## GetCurrentMap
Gets the name of the current map.

```csharp
API.getCurrentMap();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getCurrentMap();
```


## GetEntityData
Gets entity data that was set with [setEntityData](API_Server.md?id=setentitydata).
Note that this data is in a different state than synced data that you set with [setEntitySyncedData](). To get synced data, use [getEntitySyncedData]() instead.

```csharp
API.getEntityData(NetHandle entity, string key);
```
### Usage example(s)
```csharp

// Note: Since the return type is dynamic, this will throw an exception if the data is not of type int!
int jailtime = API.getEntityData(player, "Jailtime");

```

OOP:
```csharp

// Note: Since the return type is dynamic, this will throw an exception if the data is not of type int!
int jailtime = player.getData("Jailtime");

```


## GetEntityFromHandle
Gets an Entity object from the given [NetHandle](). For example, you can use this to get a [Vehicle]() object from a NetHandle.

```csharp
API.getEntityFromHandle<T>(NetHandle handle);
```
### Usage example(s)
```csharp

Vehicle veh = API.getEntityFromHandle<Vehicle>(someHandle);
if (veh == null) {
  // The handle was not a vehicle!
} else {
  veh.primaryColor = 16;
}

```


## GetEntityPositionFrozen
Checks if the position of the specified entity is frozen.

```csharp
API.getEntityPositionFrozen(NetHandle entity);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getEntityPositionFrozen(NetHandle entity);
```


## GetGamemodeName
Gets the name of the current gamemode.

```csharp
API.getGamemodeName();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getGamemodeName();
```

## GetHashBCrypt
Hashes a string using the OpenBSD bcrypt scheme.

```csharp
API.getPasswordHashBCrypt(string input);
```
### Usage example(s)
```csharp
API.getPasswordHashBCrypt(string input);
```
```csharp
API.getPasswordHashBCrypt(string input, int workFactor);
```

## GetHashSHA256
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   // For security reasons you should use a salt to encrypt a string when you use it for passwords
   string sometext = "someText"; // eg password
   string salt = "someSalt";
   string securestring = API.getHashSHA256(salt + sometext);

```


## GetMapGamemodes
If the given resource is a map, it returns an array of string with all compatible gamemodes defined in the map's [[meta.xml]]. Otherwise, it will return an empty string.

```csharp
API.getMapGamemodes(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getMapGamemodes(string resource);
```


## GetMapName
Gets the name of the current map.

```csharp
API.getMapName();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getMapName();
```

## GetMapsForGamemode
!> **TODO: ** Add Function Description!

```csharp
API.getMapsForGamemode(string gamemode);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getMapsForGamemode(string gamemode);
```


## GetMaxPlayers
This function return the server max players.

```csharp
API.getMaxPlayers();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getMaxPlayers();
```


## GetPasswordHashBCrypt
Hashes a password using the OpenBSD bcrypt scheme.

```csharp
API.getPasswordHashBCrypt(string input);
```
### Usage example(s)
```csharp
API.getPasswordHashBCrypt(string input);
```
```csharp
API.getPasswordHashBCrypt(string input, string salt);
```
```csharp
API.getPasswordHashBCrypt(string input, int workFactor);
```

## GetPickupAmount
!> **TODO: ** Add Function Description!

```csharp
API.getPickupAmount(NetHandle pickup);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getPickupAmount(NetHandle pickup);
```


## GetPickupCustomModel
{{Template:Server_side_csharp}}
Get pickup custom model.

```csharp
API.getPickupCustomModel(NetHandle pickup);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getPickupCustomModel(pickup);
```


## GetPickupPickedUp
{{Template:Server_side_csharp}}
Take a pickup.

```csharp
API.getPickupPickedUp(NetHandle pickup);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getPickupPickedUp(pickup);
```


## GetPlayerAclGroup
!> **TODO: ** Add Function Description!

```csharp
API.getPlayerAclGroup(Client player);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getPlayerAclGroup(Client player);
```




## GetPlayerActiveAsiNames
Returns a list of all active ASI-names of the specified player.

```csharp
API.getPlayerActiveAsiNames(Client player);
```
### Usage example(s)
```csharp
API.getPlayerActiveAsiNames(Client player);
```

## GetPlayerActiveModDlcPacksNames
Returns a list of all active mod DLC-pack names of the specified player.

```csharp
API.getPlayerActiveModDlcPacksNames(Client player);
```
### Usage example(s)
```csharp
API.getPlayerActiveModDlcPacksNames(Client player);
```

## GetPlayerAddress
This function returns the IP address of the given player.

```csharp
API.getPlayerAddress(Client player);
```
### Usage example(s)
/myip command which tells your IP address:

```csharp

[Command("myip")]
public void CMD_IP(Client player)
{
    API.sendChatMessageToPlayer(player, "Your IP is: " + API.getPlayerAddress(player));
}

```


## GetPlayerAsiHash
Returns the hash of the specified ASI-file.

```csharp
API.getPlayerAsiHash(Client player, string asiName);
```
### Usage example(s)
```csharp
API.getPlayerAsiHash(Client player, string asiName);
```

## GetPlayerCustomScriptNames
Returns a list of all loaded custom scripts of the specified player.

```csharp
API.getPlayerCustomScriptNames(Client player);
```
### Usage example(s)
```csharp
API.getPlayerCustomScriptNames(Client player);
```

## GetPlayerFromHandle
!> **TODO: ** Add Function Description!

```csharp
API.getPlayerFromHandle(NetHandle handle);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getPlayerFromHandle(NetHandle handle);
```



## GetPlayerFromHwid
Gets a player based on his [[getUniqueHardwareId| Unique Hardware ID]].

```csharp
Client API.getPlayerFromHwid(string hwid);
```
### Usage example(s)
The command below will send a message to a given player based on his Unique Hardware ID.

{{inC#|
```csharp

[Command("sayhi", "Usage: /sayhi <hardware_id>")]
public void SayHiToPlayer(Client player, String hardwareId)
{
    var target = API.getPlayerFromHwid(hardwareId);
    API.sendChatMessageToPlayer(target, "We can see your Unique Hardware ID!");
}

```
}}

## GetPlayerFromName
This method returns a Player param from a given player name, returns '''null''' if the player name does not exist.

```csharp
API.getPlayerFromName(string name);
```
### Usage example(s)

Check if the name Bob exists.
```csharp

    bool exists = API.getPlayerFromName("Bob") != null;
    if(exists) API.sendChatMessageToAll("BOB EXISTS!!!");

```

Kick the Player if their name exists.
```csharp

    string name = "Bob";
    Client target = API.getPlayerFromName(name);
    bool exists = target != null;
    if (exists) API.kickPlayer(target, "Flock you Bob!");

```




## GetPlayerFromSocialClubName
Returns the player based on his [[GetSocialClubName|Social Club Name]].

```csharp
Client API.getPlayerFromSocialClubName(string socialClubName);
```
### Usage example(s)
The command below will send a "hello message" to a given player based on his social club name.

Example usage: /sayhi DurtyFree 

{{inC#|
```csharp

[Command("sayhi", "Usage: /sayhi <SocialClubName>")]
public void SayHiToPlayer(Client player, String playerSocialClub)
{
    var boss = API.getPlayerFromSocialClubName(playerSocialClub);
    API.sendChatMessageToPlayer(boss, "Hello " + playerSocialClub + " !");
}

```
}}

## GetPlayerModDlcPackHash
Returns the current hash of the specified mod DLC-pack.

```csharp
API.getPlayerModDlcPackHash(Client player, string modDlcPack);
```
### Usage example(s)
```csharp
API.getPlayerModDlcPackHash(Client player, string modDlcPack);
```

## GetPlayerNametag
Gets the Nametag of a specific Player.
Can be set with [setPlayerNametag]().

```csharp
API.getPlayerNametag(Client player);
```
### Usage example(s)
```csharp
API.getPlayerNametag(player);
```

OOP:
```csharp
string nametag = player.nametag;
```



## GetPlayerUniqueHardwareId
Returns the Unique Hardware Id of the specified player.

```csharp
string API.getPlayerUniqueHardwareId(Client player);
```
### Usage example(s)
```csharp
   API.getPlayerUniqueHardwareId(Client player);
```

## GetPlayerVelocity
!> **TODO: ** Add Function Description!

```csharp
API.getPlayerVelocity(Client player);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getPlayerVelocity(Client player);
```




## GetPlayerWeaponAmmo
Returns the amount of ammo in the weapon of the player.

```csharp
API.getPlayerWeaponAmmo(Client player, WeaponHash weapon);
```
### Usage example(s)
```csharp

int ammoAmount = API.getPlayerWeaponAmmo(player, WeaponHash.SMG);
player.sendChatMessage("You have " + ammoAmount + " bullets in your SMG.");

```



## GetPlayerWeaponComponents
{{Template:Server_side_csharp}}
This function returns the components of the given player's specified weapon.

```csharp
API.getPlayerWeaponComponents(Client player, WeaponHash weapon);
```
### Usage example(s)
/listcomps command that lists the components of the weapon you're holding:

```csharp

[Command("listcomps")]
public void CMD_ListComps(Client player)
{
    WeaponComponent[] comps = API.getPlayerWeaponComponents(player, API.getPlayerCurrentWeapon(player));

    foreach (WeaponComponent comp in comps)
    {
        API.sendChatMessageToPlayer(player, "Component: " + comp);
    }
}

```


## GetPlayerWeapons
Returns an array of weapon hashes that contains all the weapons the player is currently holding.

```csharp
API.getPlayerWeapons(Client player);
```
### Usage example(s)
/myweapons command that lists all of your weapons:

```csharp

[Command("myweapons")]
public void CMD_MyWeapons(Client player)
{
    API.sendChatMessageToPlayer(player, "Your weapons:");

    WeaponHash[] player_weapons = API.getPlayerWeapons(player);
    foreach (WeaponHash weapon in player_weapons)
    {
        API.sendChatMessageToPlayer(player, "-> " + weapon);
    }
}

```


## GetPlayersInRadiusOfPlayer
!> **TODO: ** Add Function Description!

```csharp
API.getPlayersInRadiusOfPlayer(float radius, Client player);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
    [Command("write", GreedyArg = true)]
    public void writeMessageInRadius(Client player, string message){
        List<Client> playerList = API.getPlayersInRadiusOfPlayer(20, player);
        foreach(Client playerItem in playerList){
            API.sendChatMessageToPlayer(playerItem, player.name+" say: "+message); // The Message is only seen by players in a radius of 20 
        }
    }
```




## GetPlayersInRadiusOfPosition
!> **TODO: ** Add Function Description!

```csharp
API.getPlayersInRadiusOfPosition(float radius, Vector3 position);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getPlayersInRadiusOfPosition(float radius, Vector3 position);
```



## GetResourceAuthor
Returns the resource author's name.

```csharp
API.getResourceAuthor(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

[Command("resourceauthor")]
public void getResourceAuthor(Client player, string resource)
{
	//Determine if the player has entered a resource name.
	if (resource.Length < 1)
	{
		API.sendChatMessageToPlayer(player,"Please enter a resource name.");
		return;
	}
	
	//Scan resources, see if we can find the resource the player is looking for
	string resources = API.getAllResources();
	bool found;
	foreach (r in resources)
	{
		if (r == resource)
		{
			found = true;
			break;
		}
	}
	
	//If we haven't found it, we'll tell the player and stop here.
	if (!found)
	{
		API.sendChatMessageToPlayer(player,"Could not find a resource named " + resource);
		return;
	}
	
	//Output author to the player
	API.sendChatMessageToPlayer(player,"* Resource Author: " + API.getResourceAuthor(resource));
}

```


## GetResourceCommandInfo
!> **TODO: ** Add Function Description!

```csharp
API.getResourceCommandInfo(string resource, string command);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceCommandInfo(string resource, string command);
```


## GetResourceCommandInfos
!> **TODO: ** Add Function Description!

```csharp
API.getResourceCommandInfos(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceCommandInfos(string resource);
```


## GetResourceCommands
!> **TODO: ** Add Function Description!

```csharp
API.getResourceCommands(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceCommands(string resource);
```


## GetResourceDescription
!> **TODO: ** Add Function Description!

```csharp
API.getResourceDescription(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceDescription(string resource);
```


## GetResourceFolder
!> **TODO: ** Add Function Description!

```csharp
API.getResourceFolder();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceFolder();
```


## GetResourceName
Gets the resource name from the resource passed in to the function.

```csharp
API.getResourceName(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

public string resourceName(string resource)
{
	//Stop here if the resource string is empty.
	if (resource.Length < 0)
		return;
	
	return API.getResourceName(resource);
}

```


## GetResourceSetting
!> **TODO: ** Add Function Description!

```csharp
API.getResourceSetting(string resource, string setting);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceSetting(string resource, string setting);
```


## GetResourceSettingDescription
Get the description of a setting in a running resource.

```csharp
API.getResourceSettingDescription(string resource, string setting);
```
### Usage example(s)
```csharp
API.getResourceSettingDescription("adminchat", "group-admin");
```


## GetResourceSettings
!> **TODO: ** Add Function Description!

```csharp
API.getResourceSettings(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceSettings(string resource);
```


## GetResourceType
Gets the resource type described in [[meta.xml]].

```csharp
API.getResourceType(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceType(string resource);
```


## GetResourceVersion
!> **TODO: ** Add Function Description!

```csharp
API.getResourceVersion(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getResourceVersion(string resource);
```


## GetRunningResources
!> **TODO: ** Add Function Description!

```csharp
API.getRunningResources();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getRunningResources();
```


## GetServerAllowClientDevToolsSetting
This function return the current DevTools server setting.

```csharp
bool API.getServerAllowClientDevToolsSetting();
```
### Usage example(s)
```csharp
API.getServerAllowClientDevToolsSetting();
```


## GetServerConnectionSlowModeSetting
This function return the current ConnectionSlowMode server setting.

```csharp
bool API.getServerConnectionSlowModeSetting();
```
### Usage example(s)
```csharp
API.getServerConnectionSlowModeSetting();
```

## GetServerExploitBlacklistSetting
This function return the current ExploitBlacklist server setting.

```csharp
bool API.getServerExploitBlacklistSetting();
```
### Usage example(s)
```csharp
API.getServerExploitBlacklistSetting();
```

## GetServerHwidDuplicateSetting
This function return the current HwidDuplicate server setting.

```csharp
bool API.getServerHwidDuplicateSetting();
```
### Usage example(s)
```csharp
API.getServerHwidDuplicateSetting();
```

## GetServerName
This function return the server name.

```csharp
API.getServerName();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getServerName();
```


## GetServerPassword
Gets the current server password.

```csharp
string API.getServerPassword();
```
### Usage example(s)
```javascript
string API.getServerPassword();
```


## GetServerPort
This function return the server port.

```csharp
API.getServerPort();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getServerPort();
```


## GetServerSocialClubDuplicateSetting
This function return the current SocialClubDuplicate server setting.

```csharp
bool API.getServerSocialClubDuplicateSetting();
```
### Usage example(s)
```csharp
API.getServerSocialClubDuplicateSetting();
```

## GetTextLabelRange
Gets the current range of a text label.

```csharp
API.getTextLabelRange(NetHandle textLabel);
```
### Usage example(s)
```csharp
API.getTextLabelRange(NetHandle textLabel);
```


## GetThisResource
!> **TODO: ** Add Function Description!

```csharp
API.getThisResource();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

public void outputResourceInfo()
{
	string resource = API.getThisResource();
	string author = API.getResourceAuthor(resource);
	string name = API.getResourceName(resource);
	string version = API.getResourceVersion(resource);
	
	// Message the server about this resource!
	API.sendChatMessageToAll("* Resource: " + name + " - Author: " + author + " - version: " + version);
}

```


## GetTrafficLightsInterval
'''See also:''' [SetTrafficLightsInterval](API_Server.md?id=settrafficlightsinterval)
Returns the current Traffic Lights Interval on the Server.

```csharp
int API.getTrafficLightsInterval();
```
### Usage example(s)
```csharp
API.getTrafficLightsInterval();
```

## GetVehicleBones
Returns a list of available bones for a specified vehicle model.
See [[Vehicle Bones]] for a list of all vehicle bones.

```csharp
API.getVehicleBones(VehicleHash model);
```
### Usage example(s)
```csharp
API.getVehicleBones(VehicleHash model);
```

## GetVehicleClassName
Gets the vehicle class name associated with the given vehicle hash / class id. 
See [[Vehicle Classes]] for a list of classes.

```csharp
API.getVehicleClassName(int classId);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getVehicleClassName(int classId);
```
```csharp
API.getVehicleClassName(VehicleHash model);
```

## GetVehicleDimensions
Returns the dimensions (size) of a specified vehicle model.

```csharp
API.getVehicleDimensions(VehicleHash model);
```
### Usage example(s)
```csharp
API.getVehicleDimensions(VehicleHash model);
```

## GetVehicleDriver
Returns the driver of the specified vehicle.

```csharp
Client API.getVehicleDriver(NetHandle vehicle);
```
### Usage example(s)
```csharp
API.getVehicleDriver(NetHandle vehicle);
```

## GetVehicleLiverys
Returns a list of available liveries for a specified vehicle.
'''See:''' [SetVehicleLivery]()

```csharp
API.getVehicleLiverys(VehicleHash model);
```
### Usage example(s)
```csharp
API.getVehicleLiverys(VehicleHash model);
```

## GetVehicleManufacturerName
Returns the specified vehiclemodel's manufacturer name.

```csharp
API.getVehicleManufacturerName(VehicleHash model);
```
### Usage example(s)
```csharp
API.getVehicleManufacturerName(VehicleHash model);
```

## GetVehicleOccupants
A function that returns the players who are inside a vehicle. 
If there are no players in the vehicle, the function will return an empty '''Client[]''' array.

```csharp
API.getVehicleOccupants(NetHandle vehicle);
```
### Usage example(s)

In this example, we're going to retrieve the players inside a vehicle, and we'll send a chat message.
```csharp

[Command("cmdtest", GreedyArg = true)]
public void CMD_cmdtest(Client sender)
{
        var usersInCar = API.getVehicleOccupants(API.getPlayerVehicle(sender)); // we get the players of the vehicle. We assume that sender is inside a vehicle, and by using getPlayerVehicle we get the NetHandle
        API.sendChatMessageToPlayer(sender, "List of players in your vehicle:");
        foreach (var player in usersInCar) {
            API.sendChatMessageToPlayer(sender, player.name); //We'll send a message containing one of the occupant's name
        }
}

```

Remember that if you're not in any vehicle, the vehicle doesn't exist or is empty, this function will not return anything.


## GetVehicleValidMods
Returns a list of all valid mods for a specified vehicle model.

```csharp
API.getVehicleValidMods(VehicleHash model);
```
### Usage example(s)
```csharp
API.getVehicleValidMods(VehicleHash model);
```

## GetVehicleWheelTypeName
Returns the specified vehicle's classname.

```csharp
API.getVehicleWheelTypeName(VehicleHash model);
```
### Usage example(s)
```csharp
API.getVehicleWheelTypeName(VehicleHash model);
```

## GetWeaponType
Get the Weapon Type from the specified WeaponHash.

```csharp
WeaponType API.getWeaponType(WeaponHash weaponHash);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getWeaponType(WeaponHash weaponHash);
```

## GetWeather
This function return the server weather.

```csharp
API.getWeather();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getWeather();
```


## GetWorldData
!> **TODO: ** Add Function Description!

```csharp
API.getWorldData(string key);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.getWorldData(string key);
```


## GivePlayerWeapon
Gives the given player a weapon of the given type. See also [[Weapons Models]].

```csharp
API.givePlayerWeapon(Client player, WeaponHash weaponHash, int ammo, bool equipNow, bool ammoLoaded);
```
### Usage example(s)
```csharp

// Use as: /weapon smg
[Command("weapon")]
public void WeaponCommand(Client sender, WeaponHash hash)
{
  API.givePlayerWeapon(sender, hash, 500, true, true);
}

```



## HasPlayerGotWeaponComponent
This function checks if the specified weapon of the given player has the specified component.

```csharp
API.hasPlayerGotWeaponComponent(Client player, WeaponHash weapon, WeaponComponent component);
```
### Usage example(s)
/suppcheck command that checks if you have a suppressor on your pistol or not.

```csharp

[Command("suppcheck")]
public void CMD_SuppressorCheck(Client player)
{
    if (API.hasPlayerGotWeaponComponent(player, WeaponHash.Pistol, WeaponComponent.AtPiSupp02))
    {
        API.sendChatMessageToPlayer(player, "Your pistol is silenced.");
    }
    else
    {
        API.sendChatMessageToPlayer(player, "Your pistol is not silenced.");
    }
}

```


## HasVehicleBombBay
Checks if the specified vehicle model has Bomb Bay.

```csharp
API.hasVehicleBombBay(VehicleHash model);
```
### Usage example(s)

```csharp
API.hasVehicleBombBay(VehicleHash model);
```

## HasVehicleForks
Checks if the specified vehicle model has forks.

```csharp
API.hasVehicleForks(VehicleHash model);
```
### Usage example(s)

```csharp
API.hasVehicleForks(VehicleHash model);
```

## HasVehicleSirens
Checks if the specified vehicle model has sirens.

```csharp
API.hasVehicleSirens(VehicleHash model);
```
### Usage example(s)

```csharp
API.hasVehicleSirens(VehicleHash model);
```

## HasVehicleTowArm
Checks if the specified vehicle model has TowArm.

```csharp
API.hasVehicleTowArm(VehicleHash model);
```
### Usage example(s)

```csharp
API.hasVehicleTowArm(VehicleHash model);
```

## HasWorldData
!> **TODO: ** Add Function Description!

```csharp
API.hasWorldData(string key);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.hasWorldData(string key);
```


## IsAclEnabled
!> **TODO: ** Add Function Description!

```csharp
API.isAclEnabled();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.isAclEnabled();
```


## IsPasswordProtected
This function return the state of server password protection.

```csharp
API.isPasswordProtected();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.isPasswordProtected();
```


## IsPlayerLoggedIn
Returns whether a player is logged in to ACL or not.

```csharp
API.isPlayerLoggedIn(Client player);
```
### Usage example(s)
```csharp

[Command("logout", ACLRequired = true)]
public void LogoutCommand(Client sender)
{
  if (!API.isPlayerLoggedIn(sender)) {
    sender.sendChatMessage("~r~You are not logged in.");
    return;
  }
  API.logoutPlayer(sender);
  sender.sendChatMessage("~g~You have been logged out.");
}

```



## IsPlayerModDlcPackActive
Checks if the player activated the specified mod DLC-pack.

```csharp
API.isPlayerModDlcPackActive(Client player, string modDlcPack);
```
### Usage example(s)
```csharp
API.isPlayerModDlcPackActive(Client player, string modDlcPack);
```

## IsPlayerOpenIVActive
Checks if the specified player has OpenIV active.

```csharp
API.isPlayerOpenIVActive(Client player);
```
### Usage example(s)
```csharp
API.isPlayerOpenIVActive(Client player);
```

## IsPlayerRunningAsi
Checks if the player runs the specified ASI.

```csharp
API.isPlayerRunningAsi(Client player, string asiName);
```
### Usage example(s)
```csharp
API.isPlayerRunningAsi(Client player, string asiName);
```

## IsResourceRunning
Checks if the given resource is running.

```csharp
API.isResourceRunning(string resource);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.isResourceRunning(string resource);
```


## IsVehicleAAmphibiousQuadBike
Checks if the specified vehicle model is a Amphibious Quad Bike.

```csharp
API.isVehicleAAmphibiousQuadBike(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleAAmphibiousQuadBike(VehicleHash model);
```

## IsVehicleAAmphibiousVehicle
Checks if the specified vehicle model is a Amphibious Vehicle.

```csharp
API.isVehicleAAmphibiousVehicle(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleAAmphibiousVehicle(VehicleHash model);
```

## IsVehicleABicycle
Checks if the specified vehicle model is a Bicycle.

```csharp
API.isVehicleABicycle(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleABicycle(VehicleHash model);
```

## IsVehicleABike
Checks if the specified vehicle model is a bike.

```csharp
API.isVehicleABike(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleABike(VehicleHash model);
```

## IsVehicleABlimp
Checks if the specified vehicle model is a Blimp.

```csharp
API.isVehicleABlimp(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleABlimp(VehicleHash model);
```

## IsVehicleABoat
Checks if the specified vehicle model is a Boat.

```csharp
API.isVehicleABoat(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleABoat(VehicleHash model);
```

## IsVehicleACar
Checks if the specified vehicle model is a Car.

```csharp
API.isVehicleACar(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleACar(VehicleHash model);
```

## IsVehicleACargobob
Checks if the specified vehicle model is a Cargobob.

```csharp
API.isVehicleACargobob(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleACargobob(VehicleHash model);
```

## IsVehicleAEmergencyBoat
Checks if the specified vehicle model is a Emergency Boat.

```csharp
API.isVehicleAEmergencyBoat(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleAEmergencyBoat(VehicleHash model);
```

## IsVehicleAHeli
Checks if the specified vehicle model is a Helicopter.

```csharp
API.isVehicleAHeli(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleAHeli(VehicleHash model);
```

## IsVehicleAPlane
Checks if the specified vehicle model is a Plane.

```csharp
API.isVehicleAPlane(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleAPlane(VehicleHash model);
```

## IsVehicleAQuad
Checks if the specified vehicle model is a Quad.

```csharp
API.isVehicleAQuad(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleAQuad(VehicleHash model);
```

## IsVehicleATrailer
Checks if the specified vehicle model is a Trailer.

```csharp
API.isVehicleATrailer(VehicleHash model);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.isVehicleATrailer(VehicleHash model);
```

## IsVehicleATrain
Checks if the specified vehicle model is a Train.

```csharp
API.isVehicleATrain(VehicleHash model);
```
### Usage example(s)

```csharp
API.isVehicleATrain(VehicleHash model);
```

## IsVehicleConvertible
Checks if the specified vehicle model is a convertible.

```csharp
API.isVehicleConvertible(VehicleHash model);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.isVehicleConvertible(VehicleHash model);
```

## IsVehicleElectric
Checks if the specified vehicle model has an electric engine.

```csharp
API.isVehicleElectric(VehicleHash model);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.isVehicleElectric(VehicleHash model);
```

## KickPlayer
Kicks a player from the server.

```csharp
API.kickPlayer(Client player, string reason);
```
### Usage example(s)
```csharp

   [Command("kick", GreedyArg = true)]
   public void KickCommand(Client player, Client target, string reason)
   {
      API.kickPlayer(target, reason);
      API.sendChatMessageToAll("~h~" + target.name + "~h~ was kicked by an Admin, reason: " + reason);
   }

```

OOP
```csharp

   [Command("kick", GreedyArg = true)]
   public void KickCommand(Client player, Client target, string reason)
   {
      target.kick(reason);
      API.sendChatMessageToAll("~h~" + target.name + "~h~ was kicked by an Admin, reason: " + reason);
   }

```


## LoadXml
!> **TODO: ** Add Function Description!

```csharp
API.loadXml(string path);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.loadXml(string path);
```


## LoginPlayer
Logs a player into ACL.

```csharp
API.loginPlayer(Client player, string password);
```
### Usage example(s)
```csharp

[Command(ACLRequired = true, SensitiveInfo = true)]
public void AdminLogin(Client client, string password)
{
    string reason;
    int result = API.loginPlayer(client, password);
    switch (result)
    {
        case 0:
            reason = "~r~ERROR: No account found.";
            break;
        case 1:
        case 3:
            reason = "~g~SUCCESS: You have successfully logged in.";
            break;
        case 2:
            reason = "~r~ERROR: Wrong password.";
            break;
        case 4:
            reason = "~r~ERROR: You're already logged in.";
            break;
        case 5:
            reason = "~r~ERROR: ACL is disabled.";
            break;
        default:
            reason = "~r~ERROR: Unknown error occurred.";
            break;
    }
    API.sendChatMessageToPlayer(client, reason);
}

```


## LogoutPlayer
Logs a player out of ACL.

```csharp
API.logoutPlayer(Client player);
```
### Usage example(s)
```csharp

[Command("logout", ACLRequired = true)]
public void LogoutCommand(Client sender)
{
  if (!API.isPlayerLoggedIn(sender)) {
    sender.sendChatMessage("~r~You are not logged in.");
    return;
  }
  API.logoutPlayer(sender);
  sender.sendChatMessage("~g~You have been logged out.");
}

```


## MoveEntityPosition
!> **TODO: ** Add Function Description!

```csharp
API.moveEntityPosition(NetHandle netHandle, Vector3 target, int duration);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.moveEntityPosition(NetHandle netHandle, Vector3 target, int duration);
```


## MoveEntityRotation
!> **TODO: ** Add Function Description!

```csharp
API.moveEntityRotation(NetHandle netHandle, Vector3 target, int duration);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.moveEntityRotation(NetHandle netHandle, Vector3 target, int duration);
```


## OnClientEventTrigger
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
Be advised, using large variable types can allocate more than the required memory, which is a waste of memory. Please refer to: [https://msdn.microsoft.com/en-us/library/exx3b86w.aspx Integral Types Table (C# Reference)]
```csharp

   public void OnClientEvent(Client player, string eventName, params object[] arguments) //arguments param can contain multiple params
   {
      if (eventName == "Foo") //an eventname with no params that was triggered from the Client-side script
      {
         API.kickPlayer(player, "FOOs don't belong here!"); //code can be anything that does not exist or cannot be called inside the client-side script
      }

      else if (eventName == "heretakemysecret") //an eventname with a single param
      {
         string secret = arguments[0].ToString(); //Since the param came as an object, it should be converted to a string for it to be used as a string
         API.consoleOutput("Wow! He told me his secret which was: " + secret);
      }

      else if (eventName == "my3cents") //an eventname with multiple params
      {
         byte number1 = (byte)arguments[0]; //Or "byte number1 = Convert.ToByte(argument[0]);" both work the same way, the first is more practical and easier
         byte number2 = (byte)arguments[1]; //params can be of an infinite number but that will not be necessary
         API.consoleOutput("Well, the first result is: " + number1 + ", and the second is: " + number2);
      }
   }

```


## OnEntityEnterColShape
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnEntityEnterColShapeHandler(ColShape shape, NetHandle entity)
{
     if (API.getEntityType(entity) == EntityType.Player){
         // It's a Player
         Client player = API.getPlayerFromHandle(entity); // Fetch the Client
         API.sendNotificationToPlayer(player, "You have entered a ColShape");
     }
}

```


## OnEntityExitColShape
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnEntityExitColShapeHandler(ColShape shape, NetHandle entity)
{
    //Code
}

```


## OnMapChange
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnMapChangeHandler(string mapName, XmlGroup map)
   {
      API.sendChatMessageToAll("SERVER MAP CHANGED!");
   }

```


## OnPickupRespawn
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPickupRespawnHandler(NetHandle pickup)
{
    //Code
}

```


## OnPlayerBeginConnect
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerBeginConnectHandler(Client player, CancelEventArgs e)
   {
      API.sendChatMessageToAll(player.name + " has joined the server.");
   }

```
Warnings

Do not use [setEntityData](API_Server.md?id=setentitydata) or similar functions in this event as the entity is not yet created.


## OnPlayerConnected
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerConnectedHandler(Client player)
   {
      API.sendChatMessageToPlayer(player, "Welcome to the server, ~g~" + player.name);
   }

```


## OnPlayerDeath
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerDeathHandler(Client player, NetHandle entityKiller, int weapon) {
      Client killer = API.getPlayerFromHandle(entityKiller);
      if (killer != null) {
         API.sendNotificationToAll(killer.name + " has killed " + player.name);
      } else {
         API.sendNotificationToAll(player.name + " died");
      }
   }

```


## OnPlayerDisconnected
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerDisconnectedHandler(Client player, string reason)
   {
      API.sendChatMessageToAll(player.name + " has left the server. (" + reason + ")");
   }

```


## OnPlayerFinishedDownload
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerFinishedDownloadHandler(Client player)
{
    API.sendChatMessageToPlayer(player, "There you go! you've finished downloading all the required files and you've been spawned!");
}

```


## OnPlayerRespawn
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerRespawnHandler(Client player)
   {
      API.sendChatMessageToPlayer(player, "Yey! You've been spawned!");
   }

```


## OnPlayerWeaponAmmoChange
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerWeaponAmmoChangeHandler(Client client, WeaponHash weapon, int oldAmmo)
{
    //Code
}

```


## OnServerResourceStart
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void onServerResourceStartHandler(string resource)
{
    //Code
}

```


## OnServerResourceStop
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnServerResourceStopHandler(string resource)
{
    // Code
}

```


## OnVehicleDeath
undefined
!> **TODO: ** Add Syntax
### Usage example(s)

Before we start, myAwesomeVeh variable is of NetHandle type defined somewhere in the script, if missing, it will output an error
```csharp

   private void OnVehicleDeathHandler(NetHandle vehicle)
   {
      if (vehicle == myAwesomeVeh)
      {
         API.sendChatMessageToAll("Oh no! that awesome vehicle got destroyed!");
      }
   }

```


## OnVehicleTrailerChange
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnVehicleTrailerChangeHandler(NetHandle tower, NetHandle trailer)
{
    //Code
}

```


## PickupNameToModel
Converts a String input into a PickupHash output.

```csharp
API.pickupNameToModel(string modelName);
```
### Usage example(s)

```csharp
PickupHash myPickup = API.pickupNameToModel("PICKUP_WEAPON_ADVANCEDRIFLE");
```


## PlayPedAnimation
!> **TODO: ** Add Function Description!

```csharp
API.playPedAnimation(NetHandle ped, bool looped, string animDict, string animName);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.playPedAnimation(NetHandle ped, bool looped, string animDict, string animName);
```


## PlayPedScenario
!> **TODO: ** Add Function Description!

```csharp
API.playPedScenario(NetHandle ped, string scenario);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.playPedScenario(NetHandle ped, string scenario);
```


## Random
!> **TODO: ** Add Function Description!

```csharp
API.random();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.random();
```


## RegisterCustomColShape
!> **TODO: ** Add Function Description!

```csharp
API.registerCustomColShape(ColShape shape);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.registerCustomColShape(ColShape shape);
```


## RemoveIplForPlayer
'''See also:''' [RequestIplForPlayer](API_Server.md?id=requestiplforplayer)
Removes the specified Ipl for the specified player.

```csharp
API.removeIplForPlayer(Client player, string iplName);
```
### Usage example(s)
```csharp
   API.removeIplForPlayer(Client player, string iplName);
```

## RepairVehicle
This function will repair the vehicle.

```csharp
API.repairVehicle(NetHandle vehicle);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.repairVehicle(NetHandle vehicle);
```



## RequestIplForPlayer
'''See also:''' [RemoveIplForPlayer](API_Server.md?id=removeiplforplayer)
Requests the specified Ipl for the specified player.

```csharp
API.requestIplForPlayer(Client player, string iplName);
```
### Usage example(s)
```csharp
   API.requestIplForPlayer(Client player, string iplName);
```

## ResetIplList
!> **TODO: ** Add Function Description!

```csharp
API.resetIplList();
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.resetIplList();
```


## ResetWorldData
!> **TODO: ** Add Function Description!

```csharp
API.resetWorldData(string key);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.resetWorldData(string key);
```


## RespawnPickup
!> **TODO: ** Add Function Description!

```csharp
API.respawnPickup(NetHandle pickup);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.respawnPickup(NetHandle pickup);
```


## RestartResource
Stops the given resource and starts it again afterwards.

```csharp
bool API.restartResource(string name);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.restartResource(string name);
```


## SendChatMessageToAll
Sends a chat message to all clients.

```csharp
API.sendChatMessageToAll(string sender, string message);
```
!> **TODO: ** Add usage example!
## SendChatMessageToPlayer
Sends a message to the targeted player.
'''2 overloads'''

```csharp
API.sendChatMessageToPlayer(Client player, string message);
```
!> **TODO: ** Add usage example!
## SendNativeToAllPlayers
Sends a Native Call to all player.

```csharp
API.sendNativeToAllPlayers(ulong longHash, params object[] args);
```
### Usage example(s)
(invalid example hash, but is used as an example)
```csharp
   API.sendNativeToAllPlayers(0xE1EF3C1216AFF2CD, weapon, ammo);
```


## SendNativeToPlayer
Sends a Native Call to a player.

```csharp
API.sendNativeToPlayer(Client player, ulong longHash, params object[] args);
```
### Usage example(s)
```csharp
   API.sendNativeToPlayer(player, 0xE1EF3C1216AFF2CD, player.handle);
```


## SendNativeToPlayersInDimension
Sends a Native Call to all players in a specified Dimension.

```csharp
API.sendNativeToPlayersInDimension(int dimension, ulong hash, params object[] args);
```
### Usage example(s)
(Invalid hash, is just used as an example)
```csharp
   API.sendNativeToPlayersInDimension(5, 0xE1EF3C1216AFF2CD, weapons, ammo);
```


## SendNativeToPlayersInRange
Sends a Native Call to all players in range of a specified position.

```csharp
API.sendNativeToPlayersInRange(Vector3 pos, float range, ulong hash, params object[] args);
```
### Usage example(s)
(Invalid hash, is just used as an example)
```csharp
   API.sendNativeToPlayersInRange(myPos, 50f, 0xE1EF3C1216AFF2CD, weapons, ammo);
```


## SendNativeToPlayersInRangeInDimension
Sends a Native Call to all players in range of a specified position in a Dimension.

```csharp
API.sendNativeToPlayersInRangeInDimension(Vector3 pos, float range, int dimension, ulong hash, params object[] args);
```
### Usage example(s)
(Invalid hash, is just used as an example)
```csharp
   API.sendNativeToPlayersInRangeInDimension(myPos, 50f, 5, 0xE1EF3C1216AFF2CD, weapons, ammo);
```


## SendNotificationToAll
Sends a Notification message to all Player.

```csharp
API.sendNotificationToAll(string message, bool flashing = false);
```
!> **TODO: ** Add usage example!
## SendNotificationToPlayer
Sends a Notification message to a Player.

?> *Note:* undefined
```csharp
API.sendNotificationToPlayer(Client player, string message, bool flashing = false);
```
!> **TODO: ** Add usage example!
## SendPictureNotificationToAll
!> **TODO: ** Add Function Description!

```csharp
API.sendPictureNotificationToAll(string body, string pic, int flash, int iconType, string sender, string subject);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.sendPictureNotificationToAll(string body, string pic, int flash, int iconType, string sender, string subject);
```


## SendPictureNotificationToPlayer
Sets a picture notification to a player

```csharp
API.sendPictureNotificationToPlayer(Client player, string body, string pic, int flash, int iconType, string sender, string subject);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.sendPictureNotificationToPlayer(Client player, string body, string pic, int flash, int iconType, string sender, string subject);
```


## SetAclErrorMessage
Sets the acl error message with the specified one.
'''Default is:''' "~r~ERROR: ~w~ACL must be running!"

```csharp
API.setAclErrorMessage(string msg);
```
### Usage example(s)
```csharp
   API.setAclErrorMessage(string msg);
```

## SetCollisionBetweenEntities
!> **TODO: ** Add Function Description!

```csharp
API.setCollisionBetweenEntities(NetHandle entity1, NetHandle entity2, bool collision);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setCollisionBetweenEntities(NetHandle entity1, NetHandle entity2, bool collision);
```


## SetCommandErrorMessage
Sets the error message you get when a chat command is not found. The default is: <code>~r~ERROR:~w~ Command not found.</code>

```csharp
API.setCommandErrorMessage(string msg);
```
### Usage example(s)
```csharp

API.setCommandErrorMessage("~r~ERROR:~w~ Read the damn manual! That's not a command.");

```


## SetDefaultLanguage
Sets the default language of all resources.
'''See:''' [tryGetLocalizedGameText](API_Server.md?id=trygetlocalizedgametext)

```csharp
API.setDefaultLanguage(SupportedLocalizations language);
```
### Usage example(s)
```csharp
API.setDefaultLanguage(SupportedLocalizations language);
```

## SetEntityData
Sets the given data value on the entity. This does not synchronize the data to clients. Use [setEntitySyncedData]() if you want this value to synchronize to clients.

```csharp
API.setEntityData(NetHandle entity, string key, object value);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp

API.setEntityData(player.handle, "Jailtime", 50);

```

OOP
```csharp

player.setData("Jailtime", 50);

```



## SetGamemodeName
Sets the game mode name that is shown in the client and the masterlist.

```csharp
API.setGamemodeName(string newName);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setGamemodeName(string newName);
```


## SetMapName
Sets the name of the current map.

```csharp
API.setMapName(string newName);
```
### Usage example(s)
```csharp
API.setMapName(string newName);
```

## SetMaxPlayers
Sets the maximum amount of possible players on the server.

```csharp
API.setMaxPlayers(int maxPlayers);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setMaxPlayers(int maxPlayers);
```

## SetPlayerName
Set the Name of a Player.

```csharp
API.setPlayerName(Client player, string newName);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setPlayerName(Client player, string newName);
```

OOP
```csharp
player.name = newName;
```


## SetPlayerNotFoundArgumentMessage
Sets the command argument not found message for the argument type player with the specified one.
'''Default is:''' "~r~ERROR: ~w~ No player named \"{0}\" has been found for argument \"{1}\"!"

```csharp
API.setPlayerNotFoundArgumentMessage(string msg);
```
### Usage example(s)
```csharp
   API.setPlayerNotFoundArgumentMessage(string msg);
```

## SetPlayerSeatbelt
Puts on or detaches the seatbelt of a player.

```csharp
API.setPlayerSeatbelt(Client player, bool seatbelt);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setPlayerSeatbelt(Client player, bool seatbelt);
```

OOP
```csharp
player.seatbelt = true;
```



## SetPlayerToSpectatePlayer
Sets a player spectating another player.

```csharp
API.setPlayerToSpectatePlayer(Client player, Client target);
```
### Usage example(s)
The command below sets you to spectate another player

{{inC#|
```csharp

[Command("spectate", "Usage: /spectate <target_name>")]
public void CMD_SpectatePlayer(Client player, String targetName)
{
	List<Client> allPlayers = API.getAllPlayers();
	foreach(Client c in allPlayers)
	{
		if(c.name == targetName)
		{
			API.setPlayerToSpectatePlayer(player, c);
			API.sendChatMessageToPlayer(player, "You're now spectaing player : " + c.name);
			return;
		}
	}
	API.sendChatMessageToPlayer(player, "[SERVER]: The specified player name does not match any currently online player");
}

```
}}


## SetPlayerToSpectator
!> **TODO: ** Add Function Description!

```csharp
API.setPlayerToSpectator(Client player);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setPlayerToSpectator(Client player);
```



## SetPlayerVelocity
Sets the velocity of a player.

```csharp
API.setPlayerVelocity(Client player, Vector3 velocity);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setPlayerVelocity(Client player, Vector3 velocity);
```



## SetPlayerWeaponAmmo
Sets the amount of ammo in the weapon of the player.

```csharp
API.setPlayerWeaponAmmo(Client player, WeaponHash weapon, int ammo);
```
### Usage example(s)
```csharp

API.setPlayerWeaponAmmo(player, WeaponHash.SMG, 500);

```


## SetResourceSetting
!> **TODO: ** Add Function Description!

```csharp
API.setResourceSetting(string resource, string setting, object value);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setResourceSetting(string resource, string setting, object value);
```


## SetServerAllowClientDevToolsSetting
Sets the DevTool Server Setting.

```csharp
API.setServerAllowClientDevToolsSetting(bool enabled);
```
### Usage example(s)
```csharp

API.setServerAllowClientDevToolsSetting(bool enabled);

```

## SetServerConnectionSlowModeSetting
Sets the ConnectionSlowMode Server Setting.

```csharp
API.setServerConnectionSlowModeSetting(bool enabled);
```
### Usage example(s)
```csharp

API.setServerConnectionSlowModeSetting(bool enabled);

```

## SetServerExploitBlacklistSetting
Sets the ExploitBlacklist Server Setting.

```csharp
API.setServerExploitBlacklistSetting(bool enabled);
```
### Usage example(s)
```csharp

API.setServerExploitBlacklistSetting(bool enabled);

```

## SetServerHwidDuplicateSetting
Sets the HwidDuplicate Server Setting.

```csharp
API.setServerHwidDuplicateSetting(bool enabled);
```
### Usage example(s)
```csharp

API.setServerHwidDuplicateSetting(bool enabled);

```

## SetServerName
Sets the current server name.

```csharp
API.setServerName(string serverName);
```
### Usage example(s)
```csharp

[Command("setservername", ACLRequired = true)]
public void SetServerNameCommand(Client sender, string name)
{
	API.setServerName(name);
}

```


## SetServerPassword
Sets the current server connection password.

```csharp
API.setServerPassword(string password);
```
### Usage example(s)
```csharp

[Command("setserverpassword", ACLRequired = true)]
public void SetServerPasswordCommand(Client sender, string password)
{
	API.setServerPassword(password);
}

```


## SetServerSocialClubDuplicateSetting
Sets the SocialClubDuplicate Server Setting.

```csharp
API.setServerSocialClubDuplicateSetting(bool enabled);
```
### Usage example(s)
```csharp

API.setServerSocialClubDuplicateSetting(bool enabled);

```

## SetTextLabelRange
Sets the range of a text label.

```csharp
API.setTextLabelRange(NetHandle textLabel, float range);
```
### Usage example(s)
```csharp
API.setTextLabelRange(NetHandle textLabel, float range);
```


## SetTrafficLightsInterval
'''See also:''' [GetTrafficLightsInterval](API_Server.md?id=gettrafficlightsinterval)
Sets the Traffic Lights Interval on the Server
'''Default is:''' 600 
This interval is the amount of milliseconds in which the traffic lights gets updated. Lowering the interval makes traffic lights switch faster.

```csharp
API.setTrafficLightsInterval(int interval);
```
### Usage example(s)
```csharp
API.setTrafficLightsInterval(int interval);
```

## SetValueNotFoundArgumentMessage
Sets the command argument not found message for the argument type value with the specified one.
'''Default is:''' "~r~ERROR: ~w~ No value named \"{0}\" has been found for argument \"{1}\"!"

```csharp
API.setValueNotFoundArgumentMessage(string msg);
```
### Usage example(s)
```csharp
   API.setValueNotFoundArgumentMessage(string msg);
```

## SetVehicleHealth
Sets how much health the vehicle has.

```csharp
API.setVehicleHealth(NetHandle vehicle, float health);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setVehicleHealth(NetHandle vehicle, float health);
```


## SetVehiclePetrolTankHealth
'''See also:''' [GetVehiclePetrolTankHealth]()
Sets the durability of the petrol tank of the specified vehicle.

```csharp
API.setVehiclePetrolTankHealth(NetHandle vehicle, float health);
```
### Usage example(s)
```csharp
API.setVehiclePetrolTankHealth(NetHandle vehicle, float health);
```

## SetWorldData
!> **TODO: ** Add Function Description!

```csharp
API.setWorldData(string key, object value);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.setWorldData(string key, object value);
```


## StartResource
Starts the given resource.

```csharp
API.startResource(string resourceName);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.startResource(string resourceName);
```


## StartThread
!> **TODO: ** Add Function Description!

```csharp
API.startThread(ThreadStart target);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.startThread(ThreadStart target);
```


## StartTimer
'''See also:''' [Delay](API_Server.md?id=delay)
Calls the given function in a separate thread after a given time span.

```csharp
API.startTimer(int ms, bool once, Action target);
```
### Usage example(s)
```csharp

// This will delay the kick of a player by 5 seconds.
API.startTimer(5000, true, () => { API.kickPlayer(Client player) });

```


## StopDelay
Stops a previously created delay.

```csharp
API.stopDelay(Timer timer)
```
### Usage example(s)
```csharp
API.stopDelay(Timer timer)
```

## StopPedAnimation
!> **TODO: ** Add Function Description!

```csharp
API.stopPedAnimation(NetHandle ped);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.stopPedAnimation(NetHandle ped);
```


## StopResource
Stops the given resource.
'''See also:''' [StartResource](API_Server.md?id=startresource), [RestartResource](API_Server.md?id=restartresource)

```csharp
API.stopResource(string name);
```
### Usage example(s)
```csharp

[Command("stop", ACLRequired = true)]
public void StopCommand(Client sender, string name)
{
  API.stopResource(name);
}

```


## StopServer
Stops all Resource and then closes the server window. Full shutdown of the server.

```csharp
bool API.stopServer();
```
### Usage example(s)

```csharp
API.stopServer();
```

## StopTimer
Stops a previously created timer.

```csharp
API.stopTimer(Timer timer)
```
### Usage example(s)
```csharp
API.stopTimer(Timer timer)
```

## TickCount
The value that is returned represents the number of miliseconds intervals that have elapsed since 12:00:00 midnight, January 1, 0001 (0:00:00 UTC on January 1, 0001, in the Gregorian calendar). This is similar to DateTime.Now.Tick property but the latter one returns in nanoseconds (https://msdn.microsoft.com/en-us/library/system.datetime.ticks(v=vs.110).aspx). This function is good for debugging and benchmarking.

```csharp
API.TickCount;
```
### Usage example(s)
Will give you the amount of time in seconds:
```csharp

long tick = API.TickCount;
API.consoleOutput("Seconds passed " + (tick / 1000) + " seconds!");

```

Output example between the two functioned mentioned in the description:

[[File:Ticks.png]]


## TriggerClientEvent
Triggers a client-side script event call from server-side to a Player. For the inverse method of this (client to server), see [triggerServerEvent](API_Client.md?id=triggerserverevent).
This method triggers the client-side [onServerEventTrigger](API_Client.md?id=onservereventtrigger) event.
''Warning:'' This function should not be called under client connection events. ([onPlayerConnected](API_Server.md?id=onplayerconnected) or [onPlayerBeginConnect](API_Server.md?id=onplayerbeginconnect)) - It will not be triggered. Instead, you should wait for [onPlayerFinishedDownload](API_Server.md?id=onplayerfinisheddownload).

?> *Note:* undefined
```csharp
API.triggerClientEvent(Client player, string eventName, params object[] args);
```
### Usage example(s)

```csharp
   API.triggerClientEvent(player, "FinishGame", 1, 2, 5, "Now");
```


## TriggerClientEventForAll
Triggers a client-side script event call from server-side to all players. To trigger an event for a single player, use [triggerClientEvent](API_Server.md?id=triggerclientevent).

?> *Note:* undefined
```csharp
API.triggerClientEventForAll(string eventName, params object[] args);
```
### Usage example(s)

```csharp
   API.triggerClientEventForAll("FinishGame", 1, 2, 5, "Now");
```


## TryGetLocalizedGameText
Returns if there is a localized gametext in the provided language available. 
If so, the specified variable under <code>out string translation</code> will be filled with the translated text.
'''Hint:''' Use [setDefaultLanguage](API_Server.md?id=setdefaultlanguage) to set the default language globally.

```csharp
API.tryGetLocalizedGameText(string gameText, out string translation, SupportedLocalizations language = SupportedLocalizations.Default);
```
### Usage example(s)
```csharp

using GrandTheftMultiplayer.Server.Constant;

[Command("translate")]
public void TranslateText(Client player, string text)
{
    string translation;
    if(API.tryGetLocalizedGameText(text, out translation))
    {
        API.consoleOutput("Translation: " + translation);
        API.sendNotificationToPlayer(player, "Translation: " + translation);
        player.sendChatMessage("Translation: " + translation);
        return;
    }
    API.consoleOutput("No translation");
}

```

## UnspectatePlayer
This function works if you are spectating on a player using the function [setPlayerToSpectatePlayer](API_Server.md?id=setplayertospectateplayer) and this function will unspectate you if you are spectating a player.

```csharp
API.unspectatePlayer(Client player);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.unspectatePlayer(Client player);
```


## VerifyPasswordHashBCrypt
Verifies that the hash of text matches the provided hash.

```csharp
API.verifyPasswordHashBCrypt(string text, string hash);
```
### Usage example(s)
```csharp
API.verifyPasswordHashBCrypt(string text, string hash);
```

## WarpPlayerOutOfVehicle
Removes a player from his current vehicle

```csharp
API.warpPlayerOutOfVehicle(Client player);
```
### Usage example(s)
```csharp
API.warpPlayerOutOfVehicle(player);
```




