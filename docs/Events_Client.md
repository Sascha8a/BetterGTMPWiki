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


## OnCustomDataReceived

Called when the client receives custom data transfered via [downloadData]() by the server.


```javascript
API.onCustomDataReceived.connect(function callback);
```
### Usage example(s)
```javascript

API.onCustomDataReceived.connect(function(data, id) { //id is last so it doesn't break compatibility
    API.sendChatMessage("Data ID: " + id);
    API.sendChatMessage("Data: \"" + data + "\"");
});

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


## OnEntityStreamIn
This event is triggered when an entity is streamed in. (streaming distance is changeable in the [[settings.xml]])
[[Category:Client Side Javascript]]

```javascript

API.onEntityStreamIn.connect((LocalHandle entity, Number entityType) => {

})

```
### Usage example(s)
```javascript

API.onEntityStreamIn.connect((ent, entType) => {
  if (entType === 6 || entType === 8) { // Player or ped
    var hairColor = API.getEntitySyncedData(ent, 'GTAO_HAIR_COLOR')
    var highlightColor = API.getEntitySyncedData(ent, 'GTAO_HAIR_HIGHLIGHT_COLOR')

    API.callNative('_SET_PED_HAIR_COLOR', ent, hairColor, highlightColor)
  }
})

```


## OnEntityStreamOut
This event is triggered when an entity is streamed out (if its too far away). (streaming distance is changeable in the [[settings.xml]])
[[Category:Client Side Javascript]]

```javascript
API.onEntityStreamOut.connect(function (entity, entityType) {

});
```
### Usage example(s)
```javascript

API.onEntityStreamOut.connect(function (ent, entType) {

  if (entType === 1)
  { // if entity is a vehicle
    API.sendChatMessage(API.getLocalPlayer(), "a vehicle is gone!");
  }
});

```


## OnHudVisibilityChange


This event is triggered when the HUD was toggled by pressing F7.

```javascript

API.onHudVisibilityChange.connect((visible) => {

});

```
### Usage example(s)
```javascript

API.onHudVisibilityChange.connect((visible) => {
    if(visible) {
        // Show own server-HUD
    } else {
        // Hide own server-HUD
    }
});

```


## OnKeyDown
[[Category:Client Side Javascript]]
This event triggers the first time a certain key is pressed, '''and if held down, it repeats after that.'''

See [onKeyUp](Events.md?id=onkeyup) for more info on the raised event, and the <code>Keys.</code> list.

If you want to use this to catch game controls, consider using [isControlJustPressed]() instead, which matches up with bindings on both keyboard and gamepad.


```javascript
API.onKeyDown.connect(function callback);
```
### Usage example(s)

```javascript

API.onKeyDown.connect(function (sender, e) {
  if (e.KeyCode === Keys.E) {
    // Do something.
    API.sendNotification('Lorem Ipsum.');
  }
})

```


## OnKeyUp
[[Category:Client Side Javascript]]

Triggers every time a key on the keyboard is released.

This event is derrived from the .NET [https://msdn.microsoft.com/en-us/library/system.windows.forms.control.onkeyup%28v=vs.110%29.aspx?f=255&MSPPError=-2147217396 Control.OnKeyUp] event.

The first argument in your handling method is <code>object sender</code>, and the second is <code>[https://msdn.microsoft.com/en-us/library/system.windows.forms.keyeventargs(v=vs.110).aspx KeyEventArgs] e</code>

The Keys enum can be found under <code>[https://msdn.microsoft.com/en-us/library/system.windows.forms.keys(v=vs.110).aspx System.Windows.Forms.Keys]</code> on MSDN. Keys not in this enum, you can figure out by printing the <code>[https://msdn.microsoft.com/en-us/library/system.windows.forms.keyeventargs.keyvalue(v=vs.110).aspx KeyValue]</code> property of the <code>KeyEventArgs</code> (<code>e</code> in the sample below). This will return an integer with the unique key that was pressed.


```javascript
API.onKeyUp.connect(function callback);
```
### Usage example(s)
```javascript

API.onKeyUp.connect(function (sender, e) {
  if (e.KeyCode === Keys.E) {
    // Do something.
    API.sendNotification('Lorem Ipsum.')
  }
})

```


## OnLocalPlayerDamaged
[[Category:Client Side Javascript]]

Triggered when a player gains damage, no matter be it self inflicted, recieved from any other player or other how.


```javascript
API.onLocalPlayerDamaged.connect(function callback);
```
### Usage example(s)
```javascript

API.onLocalPlayerDamaged.connect(function (enemy, weapon, bone) {
  if (bone == 31086) // Head
	{
    API.setPlayerHealth(-1)
  }
})

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


## OnPlayerChangeVehicleSeat

This type event is called when a player changes his vehicle seat.


!> **TODO: ** Add Syntax
!> **TODO: ** Add usage example!
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


## OnServerEventTrigger
[[Category:Client Side Javascript]]

Called every time the Server triggers a clientside event.


```javascript
API.onServerEventTrigger.connect(function callback);
```
### Usage example(s)
```javascript

API.onServerEventTrigger.connect(function (eventName, args) {
  switch (eventName) {

    case 'atmEnterRange':
      API.sendNotification('There is an ATM nearby!');
      break;
    case 'atmLeaveRange':
      API.sendNotification("You've lost track of the nearby ATM.");
      break;
  }
});

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



