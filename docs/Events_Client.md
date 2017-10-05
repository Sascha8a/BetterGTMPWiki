## OnCustomDataReceived
Called when the client receives custom data transfered via [[downloadData]] by the server.

```javascript
API.onCustomDataReceived.connect(function callback);
```
## OnEntityStreamIn
This event is triggered when an entity is streamed in. (streaming distance is changeable in the [[settings.xml]])
[[Category:Client Side Javascript]]

```javascript

API.onEntityStreamIn.connect((LocalHandle entity, Number entityType) => {

})

```
## OnEntityStreamOut
This event is triggered when an entity is streamed out (if its too far away). (streaming distance is changeable in the [[settings.xml]])
[[Category:Client Side Javascript]]

```javascript
API.onEntityStreamOut.connect(function (entity, entityType) {

});
```
## OnHudVisibilityChange
This event is triggered when the HUD was toggled by pressing F7.

```javascript

API.onHudVisibilityChange.connect((visible) => {

});

```
## OnKeyDown
[[Category:Client Side Javascript]]
This event triggers the first time a certain key is pressed, '''and if held down, it repeats after that.'''
See [[onKeyUp]] for more info on the raised event, and the <code>Keys.</code> list.
If you want to use this to catch game controls, consider using [[isControlJustPressed]] instead, which matches up with bindings on both keyboard and gamepad.

```javascript
API.onKeyDown.connect(function callback);
```
## OnKeyUp
[[Category:Client Side Javascript]]
Triggers every time a key on the keyboard is released.
This event is derrived from the .NET [https://msdn.microsoft.com/en-us/library/system.windows.forms.control.onkeyup%28v=vs.110%29.aspx?f=255&MSPPError=-2147217396 Control.OnKeyUp] event.
The first argument in your handling method is <code>object sender</code>, and the second is <code>[https://msdn.microsoft.com/en-us/library/system.windows.forms.keyeventargs(v=vs.110).aspx KeyEventArgs] e</code>
The Keys enum can be found under <code>[https://msdn.microsoft.com/en-us/library/system.windows.forms.keys(v=vs.110).aspx System.Windows.Forms.Keys]</code> on MSDN. Keys not in this enum, you can figure out by printing the <code>[https://msdn.microsoft.com/en-us/library/system.windows.forms.keyeventargs.keyvalue(v=vs.110).aspx KeyValue]</code> property of the <code>KeyEventArgs</code>. This will return an integer with the unique key that was pressed.

```javascript
API.onKeyUp.connect(function callback);
```
## OnLocalPlayerDamaged
[[Category:Client Side Javascript]]
Triggered when a player gains damage, no matter be it self inflicted, recieved from any other player or other how.

```javascript
API.onLocalPlayerDamaged.connect(function callback);
```
## OnServerEventTrigger
[[Category:Client Side Javascript]]
Called every time the Server triggers a clientside event.

```javascript
API.onServerEventTrigger.connect(function callback);
```

