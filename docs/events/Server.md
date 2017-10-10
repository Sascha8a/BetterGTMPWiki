# Server Events
## OnChatCommand
This type of event is mainly used for commands handling but is a '''very legacy''' way of doing commands and is '''not recommended''', new ways of command handling (Reference [[Getting_Started_with_Commands |here]]) are proven to be more performant, efficient and easier to code.


!> **TODO: ** Add Syntax
!> **TODO: ** Add usage example!
## OnChatMessage
This type of event can be used to filter, disable or even use as command handler but that is a very legacy way of doing commands and is not recommended.


!> **TODO: ** Add Syntax
### Usage example(s)
Disabling main chat 
```csharp

   public void OnChatMessageHandler(Client player, string message, CancelEventArgs e)
   {
      e.Cancel = true; //This cancels the chat event
   }

```

An example for filtering a word in chat 
```csharp

   public void OnChatMessageHandler(Client player, string message, CancelEventArgs e)
   {
      if (message.Contains("Foo"))
      {
         API.sendChatMessageToPlayer(player, "Prohibited word!");
         e.Cancel = true; //This cancels the message event
      }
   }

```

An example for replacing a word in chat 
```csharp

   public void OnChatMessageHandler(Client player, string message, CancelEventArgs e)
   {
      if (message.Contains("Foo"))
      {
         API.sendChatMessageToAll(player.Name, message.Replace("Foo", "!#$"));
         e.Cancel = true; //This cancels the message event
      }
   }

```


## OnClientEventTrigger
This type of event is used to communicate with Client-side scripts, it is activated when the (client-side) script requests an event that cannot be accomplished on client side. (Client-side scripts reference)


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


## OnEntityDataChange
This event is triggered when entity data changes.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnEntityDataChangeHandler(NetHandle entity, string key, object oldValue)
{
    //Code
}

```


## OnEntityEnterColShape
This type of event is used for handling code when the player enters a ColShape.


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
This event is triggered when a entity exit a colshape.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnEntityExitColShapeHandler(ColShape shape, NetHandle entity)
{
    //Code
}

```


## OnEntityMovingPositionFinished

This type of event is used for handling code when the Position Moving action is finished.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void MovingFinished(NetHandle entity)
    {
        API.consoleOutput("Entity " + entity.Value + " finished moving");
    }

```

JS:
```javascript

API.OnEntityMovingPositionFinished .connect(function(object) {
    API.sendNotification("obj: " + object + " stopped moving");
});

```


## OnEntityMovingRotationFinished

This type of event is used for handling code when the Rotation Moving action is finished.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void RotationFinished(NetHandle entity)
    {
        API.consoleOutput("Entity " + entity.Value + " finished rotating");
    }

```

JS:
```javascript

API.OnEntityMovingRotationFinished.connect(function(object) {
    API.sendNotification("obj: " + object + " stopped rotating");
});

```


## OnMapChange
This type of event is mainly used for handling code when the server changes map for a gamemode.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnMapChangeHandler(string mapName, XmlGroup map)
   {
      API.sendChatMessageToAll("SERVER MAP CHANGED!");
   }

```


## OnPickupRespawn
This type of event is used for handling code when a pickup entity respawn.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPickupRespawnHandler(NetHandle pickup)
{
    //Code
}

```


## OnPlayerArmorChange
This event is triggered when player armor change.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerArmorChangeHandler(Client entity, int oldValue)
{
    //Code
}

```


## OnPlayerBeginConnect
This type of event is used for handling code at client connection initiation with the server, this event happens before [onPlayerConnected](Events.md?id=onplayerconnected)


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerBeginConnectHandler(Client player, CancelEventArgs e)
   {
      API.sendChatMessageToAll(player.name + " has joined the server.");
   }

```
Warnings

Do not use [setEntityData]() or similar functions in this event as the entity is not yet created.


## OnPlayerChangeVehicleSeat

This type event is called when a player changes his vehicle seat.


!> **TODO: ** Add Syntax
!> **TODO: ** Add usage example!
## OnPlayerConnected
This type of event is used for handling code after the [onPlayerBeginConnect](Events.md?id=onplayerbeginconnect) event has completed, this event happens while downloading maps, scripts, etc.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerConnectedHandler(Client player)
   {
      API.sendChatMessageToPlayer(player, "Welcome to the server, ~g~" + player.name);
   }

```


## OnPlayerDeath
This type of event is used for handling code when someone dies.


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


## OnPlayerDetonateStickies
This event is triggered when a player detonate stickies.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerDetonateStickiesHandler(Client player)
{
    //Code
}

```


## OnPlayerDisconnected
This type of event is used for handling code when the player disconnects.



!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerDisconnectedHandler(Client player, string reason)
   {
      API.sendChatMessageToAll(player.name + " has left the server. (" + reason + ")");
   }

```


## OnPlayerEnterVehicle
This type of event is used for handling code when the player enters any type of vehicle.


!> **TODO: ** Add Syntax
### Usage example(s)

```csharp

   private void OnPlayerEnterVehicle(Client player, NetHandle vehicle, int targetSeat)
   {
      if(vehicle == myAwesomeVeh) // myyAwesomeVeh defined elsewhere...
      {
         API.sendChatMessageToPlayer(player, "What an awesome vehicle!");
      }
   }

```

JS:
```javascript

API.onPlayerEnterVehicle.connect(function(veh, targetSeat) {
    if(veh == myAwesomeVeh) { // myAwesomeVeh defined elsewhere...
       API.sendChatMessage("My awesome vehicle!");
    }
});

```


## OnPlayerExitVehicle
This type of event is used for handling code when the player exits any type of vehicle.


!> **TODO: ** Add Syntax
### Usage example(s)

?> *Note:* "fromSeat" comes with the next Update
Before we start, myAwesomeVeh variable is of NetHandle type defined somewhere in the script, if missing, it will output an error
```csharp

   private void OnPlayerExitVehicleHandler(Client player, NetHandle vehicle, int fromSeat)
   {
      if (vehicle == myAwesomeVeh)
      {
         API.sendChatMessageToPlayer(player, "You've left that awesome vehicle!");
      }
   }

```


JS:
```javascript

API.onPlayerExitVehicle.connect(function(veh, fromSeat) {
    // do things..
});

```

## OnPlayerFinishedDownload
This type of event is used for handling code after the [onPlayerConnected](Events.md?id=onplayerconnected) event has completed, this is the final connection step when you finally spawn.

'''Notes:'''
* This event will not be called if the server has no additional resources that have been downloaded.
* This event will be called when all '''clientside scripts''' have been downloaded. It does not guarantee, that all HTML, CSS, etc. are also downloaded!


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerFinishedDownloadHandler(Client player)
{
    API.sendChatMessageToPlayer(player, "There you go! you've finished downloading all the required files and you've been spawned!");
}

```


## OnPlayerHealthChange
This event is triggered when a player's health changes.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerHealthChangeHandler(Client entity, int oldValue)
{
	if(entity.health>oldValue){
		API.sendChatMessageToAll("~g~"+entity.name+" got healed!");
	}else{
		API.sendChatMessageToAll("~r~"+entity.name+" got damaged!");
	}
}

```


## OnPlayerModelChange
This event is triggered when a player change model.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerModelChangeHandler(Client player, int oldModel)
{
    //Code
}

```


## OnPlayerPickup

This type of event is used for handling code when the character picks up a pickup entity (pika-pika! i hear you pokemon go fans!)

{{Rework_required}}


!> **TODO: ** Add Syntax
### Usage example(s)
Before we start, myAwesomePickup variable is of NetHandle type defined somewhere in the script, if missing, it will output an error
```csharp

   private void OnPlayerPickupHandler(Client player, NetHandle pickup)
   {
      if(pickup == myAwesomePickup)
      {
         API.sendChatMessageToPlayer(player, "Wooooo! Free HEALTH!!");
         API.setPlayerHealth(player, 100);
      }
   }

```


## OnPlayerRespawn
This type of event is used for handling your code when you '''Respawn'''.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   private void OnPlayerRespawnHandler(Client player)
   {
      API.sendChatMessageToPlayer(player, "Yey! You've been spawned!");
   }

```


## OnPlayerWeaponAmmoChange
This event is triggered when a player's ammo changes.




!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerWeaponAmmoChangeHandler(Client client, WeaponHash weapon, int oldAmmo)
{
    //Code
}

```


## OnPlayerWeaponSwitch
This event is triggered when a player changes weapon.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnPlayerWeaponSwitchHandler(Client entity, WeaponHash oldWeapon)
{
    //Code
}

```


## OnResourceStart
This type of event is mainly used for handling stuff after the resource has been initiated.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   public void OnResourceStartHandler()
   { 
      API.consoleOutput("Resource Started..");
   }

```


## OnResourceStop
This type of event is mainly used for handling stuff before resource termination.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   public void OnResourceStopHandler()
   { 
      API.consoleOutput("Terminating resource.."); //This would then output "[12:42:54] Terminating resource.." in server console.
   }

```


## OnServerResourceStart
This event is triggered when a resource starts.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void onServerResourceStartHandler(string resource)
{
    //Code
}

```


## OnServerResourceStop
This event is triggered when a resource stops.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnServerResourceStopHandler(string resource)
{
    //Code
}

```


## OnUpdate
This type of event is mainly used for iterating code at a tick rate of 120Hz.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

   public DateTime LastAnnounce; //We define the variable LastAnnounce as a DateTime type so we can store time in it
   public void OnUpdateHandler()
   { 
      if (DateTime.Now.Subtract(LastAnnounce).TotalMinutes >= 15) //Checks if the time between now and the 'last announce' is more or equal than 15 minutes
      {
            LastAnnounce = DateTime.Now; //We store current time into the LastAnnounce variable
            API.consoleOutput("Foo! see you in 15 minutes!");
      }
   }

```


## OnVehicleDeath
This type of event is used for handling code when a vehicle gets destroyed.


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


## OnVehicleDoorBreak
This event is triggered when a vehicle door break.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnVehicleDoorBreakHandler(NetHandle vehicle, int index)
{
    //Code
}

```


## OnVehicleHealthChange
This event is triggered when a vehicle's health changes.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnVehicleHealthChangeHandler(NetHandle entity, float oldValue)
{
    //Code
}

```


## OnVehicleSirenToggle
This event is triggered when siren toggle.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnVehicleSirenToggleHandler(NetHandle entity, bool oldValue)
{
    //Code
}

```


## OnVehicleTrailerChange
This event is triggered when a vehicle trailer change.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnVehicleTrailerChangeHandler(NetHandle tower, NetHandle trailer)
{
    //Code
}

```


## OnVehicleTyreBurst
This event is triggered when a vehicle tyre burst.


!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnVehicleTyreBurstHandler(NetHandle vehicle, int index)
{
    //Code
}

```


## OnVehicleWindowSmash
This event is triggered when a vehicle window get smashed.



!> **TODO: ** Add Syntax
### Usage example(s)
```csharp

private void OnVehicleWindowSmashHandler(NetHandle vehicle, int index)
{
    //Code
}

```



