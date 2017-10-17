# Client-side Functions
## AddSubMenu
Adds a sub menu into an already existing menu, this function can be overloaded.

```javascript
UIMenu API.addSubMenu(UIMenu menu, string text);
```
### Usage example(s)
```javascript
UIMenu API.addSubMenu(UIMenu menu, string text, string description, bool UseParentXY);
```


## AddTextElement
Adds a text element on the screen. Essentially is the same as [DrawText](API_Client.md?id=drawtext), but you don't need to draw it every frame yourself.

```javascript
API.addTextElement(string caption, double x, double y, double scale, int r, int g, int b, int a, int font, int alignment);
```
### Usage example(s)
```javascript
API.addTextElement("Example text\nScale 1, Font 1", 600.0, 200.0, 1.0, 0, 255, 0, 255, 1, -1);
```
[[File:addTextElement_example_2.png|200px]]


## After
Executes given function after given amount of time in milliseconds.
'''See also:''' [every](API_Client.md?id=every), [stop](API_Client.md?id=stop)

```javascript
API.after(uint time, string functionName, Object[] arguments);
```
### Usage example(s)
Start timer with parameters
```javascript

API.onResourceStart.connect(function() {
    var id1 = API.after(5000, "noParameters");
    var id2 = API.after(10000, "withParameters", true, 1);
});

function noParameters() {
    API.sendNotification("noParameters done");
}
function withParameters(first, second) {
    API.sendNotification("withParameters done: " + first + " - " + second);
}

```

## AngleBetween
Client-side !> **TODO: ** Add Function Description!

```javascript
API.angleBetween(Vector3 from, Vector3 to);
```
### Usage example(s)
```javascript
API.angleBetween(Vector3 from, Vector3 to);
```


## ApplyPlayerBlood
'''See also:''' [ClearPlayerBloodDamage](API_Client.md?id=clearplayerblooddamage)
Add blood to the player at the specified bone

```javascript
API.applyPlayerBlood(LocalHandle player, int boneIndex, float xRot, float yRot, float zRot, string woundType);
```
### Usage example(s)
```javascript
API.applyPlayerBlood(LocalHandle player, int boneIndex, float xRot, float yRot, float zRot, string woundType);
```



## ApplyPlayerDamagePack
'''See also:''' [ResetPlayerVisualDamage](API_Client.md?id=resetplayervisualdamage)
Adds a collection of violations to the player.

```javascript
API.applyPlayerDamagePack(LocalHandle player, string damagePack, float damage, float mult);
```
### Usage example(s)
```javascript
API.applyPlayerDamagePack(LocalHandle player, string damagePack, float damage, float mult);
```



## AttachCameraToEntity
Client-side !> **TODO: ** Add Function Description!

```javascript
API.attachCameraToEntity(GlobalCamera cam, LocalHandle ent, Vector3 offset);
```
### Usage example(s)
```javascript
API.attachCameraToEntity(GlobalCamera cam, LocalHandle ent, Vector3 offset);
```


## AttachCameraToEntityBone
Client-side !> **TODO: ** Add Function Description!

```javascript
API.attachCameraToEntityBone(GlobalCamera cam, LocalHandle ent, int bone, Vector3 offset);
```
### Usage example(s)
```javascript
API.attachCameraToEntityBone(GlobalCamera cam, LocalHandle ent, int bone, Vector3 offset);
```


## AttachEntity
Client-side !> **TODO: ** Add Function Description!

```javascript
API.attachEntity(LocalHandle ent1, LocalHandle ent2, string bone, Vector3 positionOffset, Vector3 rotationOffset);
```
### Usage example(s)
```javascript
API.attachEntity(LocalHandle ent1, LocalHandle ent2, string bone, Vector3 positionOffset, Vector3 rotationOffset);
```


## BreakVehicleTyre
Breaks the tyre of a vehicle.
This Function are Renamed to [BreakVehicleDoor]() in next Update.

```javascript
API.breakVehicleTyre(LocalHandle vehicle, int door, bool breakTyre);
```
### Usage example(s)
```javascript
API.breakVehicleTyre(LocalHandle vehicle, int door, bool breakTyre);
```


## Browser.call
browser.call allows you to invoke methods in your CEF browser from a clientside script.
This is done by calling browser.call from the clientside script code, and making a function in your JavaScript code that load your browser.
<div style="    border-style: solid;
    border-color: orange;
    border-width: 2px;
    padding: 4px;
    background-color: rgb(255, 237, 211);">'''Important!''' "browser" must be already defined and the CEF page must be fully loaded!</div>

```javascript
browser.call(String functionName, Object[] arguments);
```
### Usage example(s)
```javascript

// Client-side .js script
var content = "Some Text..";
browser.call("ChangeDiv", content);

```

<syntaxhighlight lang="HTML">
<!-- code in .html page, or .js file -->
<script>
  function ChangeDiv (content) {
      // do things... 
  }
</script>

```




## Browser.eval
browser.eval allows you to execute any javascript code contained in the string, just like Javascript's eval method.
<div style="    border-style: solid;
    border-color: orange;
    border-width: 2px;
    padding: 4px;
    background-color: rgb(255, 237, 211);">'''Important!''' "browser" must be already defined and the CEF page must be fully loaded!</div>

```javascript
browser.eval(String jscode);
```
### Usage example(s)
```javascript

// Client-side .js script
browser.eval("document.getElementById('demo').innerHTML = 1;");

```

<syntaxhighlight lang="HTML">
<!-- code in .html page, or .js file -->
<html>
    <body>
        <p id="demo">0</p>
    </body>
</html>

```




## CallNative
Calls a native.

```javascript
API.callNative(string hash, Object[] args);
```
### Usage example(s)

```javascript
API.callNative(hash, args);
```


## CancelPedRagdoll
Cancels the current ragdoll action of the local player.
'''See also:''' [GetPedCanRagdoll](API_Client.md?id=getpedcanragdoll), [SetPedCanRagdoll](API_Client.md?id=setpedcanragdoll), [SetPedToRagdoll](API_Client.md?id=setpedtoragdoll), [isPlayerRagdoll](API_Client.md?id=isplayerragdoll)

```javascript
API.cancelPedRagdoll();
```
### Usage example(s)
```javascript
API.cancelPedRagdoll();
```



## ClearCloudHat
Clears the cloud cover.
'''See also:''' [SetCloudHatTransition](API_Client.md?id=setcloudhattransition), [SetCloudHatOpacity](API_Client.md?id=setcloudhatopacity), [GetCloudHatOpacity](API_Client.md?id=getcloudhatopacity)

```javascript
API.clearCloudHat();
```
### Usage example(s)
```javascript
API.clearCloudHat();
```



## ClearPlayerBloodDamage
Removes the visual blood on the player
'''See also:''' [ApplyPlayerBlood](API_Client.md?id=applyplayerblood)

```javascript
API.clearPlayerBloodDamage(LocalHandle player);
```
### Usage example(s)
```javascript
API.clearPlayerBloodDamage(LocalHandle player);
```



## ClearPlayerDecorations
Removes all previously set decorations of a specified player.

```javascript
API.clearPlayerDecorations(LocalHandle player);
```
### Usage example(s)
```javascript
API.clearPlayerDecorations(LocalHandle player);
```


## ClearPlayerFacialDecorations
Removes all previously set facialdecorations of a specified player.

```javascript
API.clearPlayerFacialDecorations(LocalHandle player);
```
### Usage example(s)
```javascript
API.clearPlayerFacialDecorations(LocalHandle player);
```


## ClearPlayerFacialIdleAnimOverride
Resets the previously overridden facial idle animation for a specific player.

```javascript
API.clearPlayerFacialIdleAnimOverride(LocalHandle player);
```
### Usage example(s)
```javascript
API.clearPlayerFacialIdleAnimOverride(LocalHandle player);
```


## CloseAllMenus
Closes all currently open menus.

```javascript
API.closeAllMenus();
```
### Usage example(s)
```javascript
API.closeAllMenus();
```


## CreateBarTimerBar
Creates a Bar Timer Bar.

```javascript
BarTimerBar API.createBarTimerBar(string label);
```
### Usage example(s)
```javascript
var myBar = API.createBarTimerBar(string label);
```



## CreateCamera
Creates a new Camera - this is just a plain variable and not shown in any way to the player.

```javascript
API.createCamera(Vector3 position, Vector3 rotation);
```
### Usage example(s)

An example for creating and showing a new camera at the player's position. 
```javascript

let player = API.getLocalPlayer();
let playerPos = API.getEntityPosition(player);
let playerRot = API.getEntityRotation(player);

let newCamera = API.createCamera(playerPos, playerRot);
API.setActiveCamera(newCamera);

```


## CreateCefBrowser
Creates a new CEF Browser, this Browser is able to display HTML Pages.

```javascript
API.createCefBrowser(Number width, Number height, Boolean local = true);
```
### Usage example(s)
* [[Simple_CEF_Boilerplate]]

## CreateCheckboxItem
Client-side !> **TODO: ** Add Function Description!

```javascript
API.createCheckboxItem(string label, string description, bool isChecked);
```
### Usage example(s)
```javascript
API.createCheckboxItem(string label, string description, bool isChecked);
```


## CreateColoredItem
Client-side !> **TODO: ** Add Function Description!

```javascript
API.createColoredItem(string label, string description, string hexColor, string hexHighlightColor);
```
### Usage example(s)
```javascript
API.createColoredItem(string label, string description, string hexColor, string hexHighlightColor);
```


## CreateDynamicListItem
This method creates a new dynamic list item in a client-side menu.

```javascript
UIMenuDynamicListItem API.createDynamicListItem(string label, string description, string startingItem);
```
### Usage example(s)
```javascript
API.createDynamicListItem(string label, string description, string startingItem);
```



## CreateExplosion
This function creates a explosion.

```csharp
API.createExplosion(int explosionType, Vector3 position, float damageScale, int dimension = 0);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.createExplosion(int explosionType, Vector3 position, float damageScale, int dimension);
```


## CreateListItem
Creates a list item on the menu.

```javascript
createListItem(string text, string description, List<string> items, int index);
```
### Usage example(s)

```javascript

var list = new List(String);
list.Add("item1");
list.Add("item2");
list.Add("item3");
API.createListItem("Item list", "Description", list, 0);
```


## CreateMenu
Creates a native menu that can be rendered on the screen.

```javascript
API.createMenu(string title, string subtitle, double x, double y, int anchor, bool enableBanner = true);
```
### Usage example(s)
{{Important|API.drawMenu() will be removed in the next update. See [Deprecated]() for more information. }}
[[File:UIMenu.png|thumb|230px]]
```javascript
var g_menu = API.createMenu("Banner", "Subtitle", 0, 0, 6);
g_menu.ResetKey(menuControl.Back);

for (var i = 0; i < 20; i++) {
	g_menu.AddItem(API.createMenuItem("Item " + i, "Description " + i));
}

g_menu.OnItemSelect.connect(function(sender, item, index) {
	API.sendChatMessage("You selected: ~g~" + item.Text);

	API.showCursor(false);
	g_menu.Visible = false;
});

API.onServerEventTrigger.connect(function(name, args) {
	if (name == "OPEN_MENU") {
		API.showCursor(true);
		g_menu.Visible = true;
	}
});

// Will be removed in the next update! 
API.onUpdate.connect(function() {
	API.drawMenu(g_menu);
});

```


## CreateMenuItem
This method creates a new menu item in a client-side menu.
To create menus, see [createMenu](API_Client.md?id=createmenu).
For an example on how to create a menu item, and trigger an event when clicking a menu item, see [UIMenuItem](API_Client.md?id=uimenuitem).

```javascript
API.createMenuItem(string label, string description);
```
### Usage example(s)
```javascript
API.createMenuItem(string label, string description);
```


## CreateOwnedExplosion
Creates an explosion with the given parameters. The difference between [createOwnedExplosion](API_Client.md?id=createownedexplosion) and [createExplosion](API_Client.md?id=createexplosion) is owned explosions do not damage the owner, however any fire/flames associated to the explosion will.

```csharp
API.createOwnedExplosion(Client owner, int explosionType, Vector3 position, float damageScale, int dimension = 0);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.createOwnedExplosion(Client owner, int explosionType, Vector3 position, float damageScale, int dimension);
```


## CreateOwnedProjectile
!> **TODO: ** Add Function Description!

```csharp
API.createOwnedProjectile(Client owner, WeaponHash weapon, Vector3 start, Vector3 target, int damage, int speed =-1, int dimension = 0);
```
### Usage example(s)
```csharp
API.createOwnedProjectile(Client owner, WeaponHash weapon, Vector3 start, Vector3 target, int damage);
```


## CreateProjectile
!> **TODO: ** Add Function Description!

```csharp
API.createProjectile(WeaponHash Weapon, Vector3 start, Vector3 target, int damage, int speed =-1, int dimension = 0);
```
### Usage example(s)
!> **TODO: ** Add Example Description!
```csharp
API.createProjectile(WeaponHash Weapon, Vector3 start, Vector3 target, int damage);
```


## CreateRaycast
Client-side !> **TODO: ** Add Function Description!

```javascript
API.createRaycast(Vector3 start, Vector3 end, int flag, LocalHandle? ignoreEntity);
```
### Usage example(s)
```javascript
API.createRaycast(Vector3 start, Vector3 end, int flag, LocalHandle? ignoreEntity);
```


## CreateTextTimerBar
Creates a  Text Timer Bar.

```javascript
TextTimerBar API.createTextTimerBar(string label, string text);
```
### Usage example(s)
```javascript
API.createTextTimerBar(string label, string text);
```



## DeleteTimerBar
Deletes a BarTimerBar or TextTimerBar.

```javascript
API.deleteTimerBar(BarTimerBar timerbar);
```
### Usage example(s)
```javascript
var myBar = API.cdeleteTimerBar(TextTimerBar timerbar);
```



## DestroyCefBrowser
Destroys a CefBrowser created with the function [createCefBrowser](API_Client.md?id=createcefbrowser)

```javascript
API.destroyCefBrowser(Browser browser);
```
### Usage example(s)
```javascript

var mainBrowser = null;
var res = API.getScreenResolution();
mainBrowser = API.createCefBrowser(res.Width, res.Height, true);
API.destroyCefBrowser(mainBrowser);
```


## DetachCamera
Client-side !> **TODO: ** Add Function Description!

```javascript
API.detachCamera(GlobalCamera cam);
```
### Usage example(s)
```javascript
API.detachCamera(GlobalCamera cam);
```


## DisableAllControlsThisFrame
This function will disable all the game controls for instance "TAB" displaying weapon inventory. It only disables them for one frame so use this on [OnUpdate](Events.md?id=onupdate). For more game controls, visit this [[Game Controls]].

```javascript
API.disableAllControlsThisFrame();
```
### Usage example(s)
This will disable all controls forever until somehow stopped.
```javascript

var debugging = true;

API.onUpdate.connect(function () {
   if (debugging) {
      API.disableAllControlsThisFrame();
   }
});

```


## DisableAlternativeMainMenuKey
Disables/Enables the alternative Main Menu Key (P key).

```javascript
void API.disableAlternativeMainMenuKey(bool enable);
```
### Usage example(s)
```javascript
void API.disableAlternativeMainMenuKey(bool enable);
```



## DisableControlThisFrame
Disables the the specified control for a single [onUpdate](Events.md?id=onupdate) run.

```javascript
API.disableControlThisFrame(int control);
```
### Usage example(s)
Disable the jump control, so the player will be unable to jump.
```javascript

API.onUpdate.connect(function() {
    API.disableControlThisFrame(22);
});
```


## DisableFingerPointing
Sets if the current client is able to point with the finger.

```javascript
API.disableFingerPointing(bool disabled);
```
### Usage example(s)
```javascript
API.disableFingerPointing(bool disabled);
```


## DisableInteriorProp
Disables a prop in the specified interior
'''See also:''' [EnableInteriorProp](API_Client.md?id=enableinteriorprop), [IsInteriorPropEnabled](API_Client.md?id=isinteriorpropenabled)

```javascript
API.disableInteriorProp(int interiorId, string propName);
```
### Usage example(s)
```javascript
API.disableInteriorProp(int interiorId, string propName);
```


## DisableVehicleEnteringKeys
Disables/Enables the vehicle entering keys (F & G keys).

```javascript
void API.disableVehicleEnteringKeys(bool enable);
```
### Usage example(s)
```javascript
void API.disableVehicleEnteringKeys(bool enable);
```



## Disconnect
Client-side !> **TODO: ** Add Function Description!

```javascript
API.disconnect(string reason);
```
### Usage example(s)
```javascript
API.disconnect(string reason);
```


## DisplayHelpTextThisFrame
Client-side !> **TODO: ** Add Function Description!

```javascript
API.displayHelpTextThisFrame(string text);
```
### Usage example(s)
```javascript
API.displayHelpTextThisFrame(string text);
```


## DisplaySubtitle
Client-side !> **TODO: ** Add Function Description!

```javascript
API.displaySubtitle(string text);
```
### Usage example(s)
```javascript
API.displaySubtitle(text);
```


## DoesPlayerHaveWeapon
Client-side !> **TODO: ** Add Function Description!

```javascript
API.doesPlayerHaveWeapon(int weapon);
```
### Usage example(s)
```javascript
API.doesPlayerHaveWeapon(int weapon);
```


## DoesSettingExist
Checks if the given local setting exists.

```javascript
API.doesSettingExist(string name);
```
### Usage example(s)
```javascript

if (API.doesSettingExist("test")) {
  var test = API.getSetting("test");
  // Do something with test
}

```


## DrawGameTexture
Client-side !> **TODO: ** Add Function Description!

```javascript
API.drawGameTexture(string dict, string txtName, double x, double y, double width, double height, double heading, int r, int g, int b, int alpha);
```
### Usage example(s)
```javascript
API.drawGameTexture(string dict, string txtName, double x, double y, double width, double height, double heading, int r, int g, int b, int alpha);
```


## DrawLine
Draws a line in 3D Space. You should call this during onUpdate.

```javascript
API.drawLine(Vector3 start, Vector3 end, int a, int r, int g, int b);
```
### Usage example(s)
Draws a blue line from player position to 10 units above the player.
```javascript
API.drawLine(API.getEntityPosition(API.getLocalPlayer()), API.getEntityPosition(API.getLocalPlayer()).Add(new Vector3(0, 0, 10)), 255, 0, 0, 255);
```


## DrawMenu
Client-side !> **TODO: ** Add Function Description!
{{Important|API.drawMenu() was removed in Version 0.1.638.634, See [Deprecated]() for more information. }}

```javascript
API.drawMenu(UIMenu menu);
```
### Usage example(s)
```javascript
API.drawMenu(UIMenu menu);
```


## DrawRectangle
Client-side !> **TODO: ** Add Function Description!

```javascript
API.drawRectangle(double xPos, double yPos, double wSize, double hSize, int r, int g, int b, int alpha);
```
### Usage example(s)
```javascript
API.drawRectangle(double xPos, double yPos, double wSize, double hSize, int r, int g, int b, int alpha);
```


## DrawText
Draws the text on the screen this frame. You should call this during onUpdate.
<div style="background: #FFEEAA; border: 1px solid #FFCD19; border-radius: 5px;">
[[File:dialog-warning.png|link=|64px]] NOTE: At the moment a maximum of 99 chars can be displayed.</div>

```javascript
API.drawText(string caption, double xPos, double yPos, double scale, int r, int g, int b, int alpha, int font, int justify, bool shadow, bool outline, int wordWrap);
```
### Usage example(s)
```javascript
API.drawText(string caption, double xPos, double yPos, double scale, int r, int g, int b, int alpha, int font, int justify, bool shadow, bool outline, int wordWrap);
```


## DxDrawTexture
This method draws a custom graphic to the screen using DirectX.
Needs to be called inside the client [onUpdate](Events.md?id=onupdate) event.

```javascript
API.dxDrawTexture(string path, Point pos, Size size, double rotation = 0.0);
```
### Usage example(s)


## EnableControlThisFrame
Client-side !> **TODO: ** Add Function Description!

```javascript
API.enableControlThisFrame(int control);
```
### Usage example(s)
```javascript
API.enableControlThisFrame(int control);
```


## EnableInteriorProp
'''See also:''' [DisableInteriorProp](API_Client.md?id=disableinteriorprop), [IsInteriorPropEnabled](API_Client.md?id=isinteriorpropenabled)

```javascript
API.enableInteriorProp(int interiorId, string propName);
```
### Usage example(s)
Code below will enable the upgraded Cocaine Factory interior.
```javascript

API.onResourceStart.connect(function() {
	API.enableInteriorProp(247553, "coke_cut_01");
	API.enableInteriorProp(247553, "coke_cut_02");
	API.enableInteriorProp(247553, "coke_cut_03");
	API.enableInteriorProp(247553, "coke_cut_04");
	API.enableInteriorProp(247553, "coke_cut_05");
	API.enableInteriorProp(247553, "coke_press_upgrade");
	API.enableInteriorProp(247553, "equipment_upgrade");
	API.enableInteriorProp(247553, "production_upgrade");
	API.enableInteriorProp(247553, "security_high");
	API.enableInteriorProp(247553, "set_up");
	API.enableInteriorProp(247553, "table_equipment_upgrade");
});

```


?> *Note:* You Could find [http://gtaforums.com/topic/836367-adding-props-to-interiors/ here] or [[InteriorPropList|here]] a list with interior Props.


## Every
Executes given function after given amount of time in milliseconds and repeats it until stopped.
'''See also:''' [after](API_Client.md?id=after), [stop](API_Client.md?id=stop)

```javascript
API.every(uint time, string functionName, Object[] arguments);
```
### Usage example(s)
Start repeating timer 
```javascript

API.onResourceStart.connect(function() {
    var id1 = API.every(5000, "repeatNoParams");
    var id2 = API.every(10000, "repeatWithParams", true, 1);
});

function repeatNoParams() {
    API.sendNotification("1 done");
}
function repeatWithParams(first, second) {
    API.sendNotification("2 done: " + first + " - " + second);
}

```


## F
This function is used to declare explicit floating-point arguments inside API.[callNative](API_Client.md?id=callnative) and API.[returnNative](API_Client.md?id=returnnative) parameters.

```javascript
API.f(double value);
```
### Usage example(s)
```javascript
API.f(value);
```


## FadeScreenIn
'''See also:''' [FadeScreenOut](API_Client.md?id=fadescreenout), [IsScreenFadedIn](API_Client.md?id=isscreenfadedin), [IsScreenFadedOut](API_Client.md?id=isscreenfadedout), [IsScreenFadingIn](API_Client.md?id=isscreenfadingin), [IsScreenFadingOut](API_Client.md?id=isscreenfadingout)
Displays the screen in the specified time (time in milliseconds).

```javascript
API.fadeScreenIn(int time);
```
### Usage example(s)
```javascript
API.fadeScreenIn(int time);
```



## FadeScreenOut
'''See also:''' [FadeScreenIn](API_Client.md?id=fadescreenin), [IsScreenFadedIn](API_Client.md?id=isscreenfadedin), [IsScreenFadedOut](API_Client.md?id=isscreenfadedout), [IsScreenFadingIn](API_Client.md?id=isscreenfadingin), [IsScreenFadingOut](API_Client.md?id=isscreenfadingout)
Hides the screen in the specified time (time in milliseconds).

```javascript
API.fadeScreenOut(int time);
```
### Usage example(s)
```javascript
API.fadeScreenOut(int time);
```



## ForceSendAimData
Forces the local player to send where they are looking at every packet.

```javascript
API.forceSendAimData(bool force);
```
### Usage example(s)
```javascript
API.forceSendAimData(bool force);
```


## FormatTime
Client-side !> **TODO: ** Add Function Description!

```javascript
API.formatTime(double ms, string format);
```
### Usage example(s)
```javascript
API.formatTime(double ms, string format);
```


## GetActiveCamera
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getActiveCamera();
```
### Usage example(s)
```javascript
API.getActiveCamera();
```


## GetAllActiveModDlcPacksNames
Returns an array of currently active mod DLC-packs.

```javascript
API.getAllActiveModDlcPacksNames();
```
### Usage example(s)
```javascript
API.getAllActiveModDlcPacksNames();
```


## GetAllCustomScriptsNames
Returns a list of all custom script names.

```javascript
API.getAllCustomScriptsNames();
```
### Usage example(s)
```javascript
API.getAllCustomScriptsNames();
```


## GetAllLoadedAsiNames
Returns an array of all loaded .ASI-Names

```javascript
API.getAllLoadedAsiNames();
```
### Usage example(s)
```javascript
API.toggleAlternativeVersionLabelPosition(bool toggle);
```


## GetAllTextLabels
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getAllTextLabels();
```
### Usage example(s)
```javascript
API.getAllTextLabels();
```


## GetAlternativeMainMenuKeyDisabled
Returns true if [[DisableAlternativeMainMenuKey|Alternative Main Menu Key]] is disabled, returns false otherwise.

```javascript
bool API.getAlternativeMainMenuKeyDisabled();
```
### Usage example(s)
```javascript
void API.getAlternativeMainMenuKeyDisabled();
```



## GetAlternativeVersionLabelPositionActive
Gets the current alternative GT-MP.net version label position status.
'''See also:''' [toggleAlternativeVersionLabelPosition](API_Client.md?id=togglealternativeversionlabelposition)

```javascript
API.getAlternativeVersionLabelPositionActive();
```
### Usage example(s)
```javascript

let alternativeActive = API.getAlternativeVersionLabelPositionActive();

```



## GetAnimCurrentTime
'''See also:''' [GetAnimTotalTime](API_Client.md?id=getanimtotaltime)
Returns the current animation time of the specified Ped.

```javascript
float API.getAnimCurrentTime(LocalHandle handle, string animDict, string animName);
```
### Usage example(s)
```javascript
API.getAnimCurrentTime(LocalHandle handle, string animDict, string animName);
```



## GetAnimTotalTime
'''See also:''' [GetAnimCurrentTime](API_Client.md?id=getanimcurrenttime)
'''Variation 1:''' Returns the total animation time of the specified Ped.
'''Variation 2:''' Returns the total time of the specified animation.

```javascript
float API.getAnimTotalTime(LocalHandle handle, string animDict, string animName);
```
### Usage example(s)
```javascript

// Variation 1
API.getAnimTotalTime(LocalHandle handle, string animDict, string animName);

// Variation 2
API.getAnimTotalTime(string animDict, string animName);

```



## GetAudioTime
Client-side !> **TODO: ** Add Function Description!
{{Warning| This API function has been disabled. It will be available in a later update}}

```javascript
API.getAudioTime();
```
### Usage example(s)
```javascript
API.getAudioTime();
```


## GetBytesReceivedPerSecond
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getBytesReceivedPerSecond();
```
### Usage example(s)
```javascript
API.getBytesReceivedPerSecond();
```


## GetBytesSentPerSecond
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getBytesSentPerSecond();
```
### Usage example(s)
```javascript
API.getBytesSentPerSecond();
```


## GetCameraFov
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getCameraFov(GlobalCamera cam);
```
### Usage example(s)
```javascript
API.getCameraFov(GlobalCamera cam);
```


## GetCameraPosition
This function should return the given Camera position.

```javascript
API.getCameraPosition(GlobalCamera cam);
```
### Usage example(s)

```javascript
Vector3 myAwesomeCamPos = API.getCameraPosition(myCamera);
```


## GetCameraRotation
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getCameraRotation(GlobalCamera cam);
```
### Usage example(s)
```javascript
API.getCameraRotation(GlobalCamera cam);
```


## GetCanOpenChat
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getCanOpenChat();
```
### Usage example(s)
```javascript
API.getCanOpenChat();
```


## GetCefBrowserHeadless
Returns if the browser is set to headless (not rendering CEF).

```javascript
API.getCefBrowserHeadless(Browser browser);
```
### Usage example(s)
```javascript
API.getCefBrowserHeadless(Browser browser);
```


## GetCefBrowserPosition
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getCefBrowserPosition(Browser browser);
```
### Usage example(s)
```javascript
API.getCefBrowserPosition(Browser browser);
```


## GetCefBrowserSize
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getCefBrowserSize(Browser browser);
```
### Usage example(s)
```javascript
API.getCefBrowserSize(Browser browser);
```


## GetCharFromKey
Gets the char from a given key, boolean parameters can be used to simulate when ALT, CTRL or SHIFT are pressed when pressing the key.

```javascript
string API.getCharFromKey(uint key, bool shift, bool ctrl, bool alt);
```
### Usage example(s)
The example can eventually be used as a convenient template to detect certain keys in custom made input-textfields.
```javascript

API.onKeyDown.connect(function (sender, e) {
   switch (e.KeyCode) {
      // Different cases
      case default: // Any other key that has been pressed but not detected above
         var keychar = API.getCharFromKey(e.KeyValue, e.Shift, e.Control, e.Alt);
         // Do whatever you want with "keychar"
         break;
   }
}



```



## GetChatVisible
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getChatVisible();
```
### Usage example(s)
```javascript
API.getChatVisible();
```


## GetCloudHatOpacity
Returns the cloud cover opacity.
'''See also:''' [ClearCloudHat](API_Client.md?id=clearcloudhat), [SetCloudHatOpacity](API_Client.md?id=setcloudhatopacity), [SetCloudHatTransition](API_Client.md?id=setcloudhattransition)

```javascript
float API.getCloudHatOpacity();
```
### Usage example(s)
```javascript
API.getCloudHatOpacity();
```



## GetCurrentCefBrowserPageUrl
Returns the current url of the specified CEF Browser.

```javascript
string API.getCurrentCefBrowserPageUrl(Browser browser);
```
### Usage example(s)
```javascript
API.getCurrentCefBrowserPageUrl(Browser browser);
```



## GetCurrentResourceName
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getCurrentResourceName();
```
### Usage example(s)
```javascript
API.getCurrentResourceName();
```


## GetCursorPosition
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getCursorPosition();
```
### Usage example(s)
```javascript
API.getCursorPosition();
```


## GetCursorPositionMaintainRatio
Client-side !> **TODO: ** Add Function Description!

<syntaxhighlight lang="javascript" >API.getCursorPositionMaintainRatio();
```
### Usage example(s)
<syntaxhighlight lang="javascript" >API.getCursorPositionMaintainRatio();
```


## GetCustomScriptHash
Returns the hash the specified custom script.

```javascript
API.getCustomScriptHash(string customScriptName);
```
### Usage example(s)
```javascript
API.getCustomScriptHash(string customScriptName);
```


## GetEntityAbovePosition
Gets a world-relative position above the entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityAbovePostion(LocalHandle entity);
```
### Usage example(s)
```javascript
Vector3 API.getEntityAbovePostion(LocalHandle entity);
```


## GetEntityBelowPosition
Gets a world-relative position below the entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityBelowPostion(LocalHandle entity);
```
### Usage example(s)
```javascript
Vector3 API.getEntityBelowPostion(LocalHandle entity);
```


## GetEntityBoneCount
Gets the number of bones that this entity has.

```javascript
int API.getEntityBoneCount(LocalHandle entity);
```
### Usage example(s)
```javascript
API.getEntityBoneCount(LocalHandle entity);
```



## GetEntityBoneIndexByName
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getEntityBoneIndexByName(LocalHandle entity, string boneName);
```
### Usage example(s)
```javascript
API.getEntityBoneIndexByName(LocalHandle entity, string boneName);
```


## GetEntityBoneRelativePosition
Gets the position of this bone relative to the entity its part of.

```javascript
Vector3 API.getEntityBoneRelativePosition(LocalHandle entity, string boneName);
```
### Usage example(s)
```javascript
API.getEntityBoneRelativePosition(LocalHandle entity, string boneName);
```



## GetEntityBoneWorldPosition
Gets the position of this bone in world coords.

```javascript
Vector3 API.getEntityBoneWorldPosition(LocalHandle entity, string boneName);
```
### Usage example(s)
```javascript
API.getEntityBoneWorldPosition(LocalHandle entity, string boneName);
```



## GetEntityFrontPosition
Gets a world-relative position in front of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityFrontPostion(LocalHandle entity);
```
### Usage example(s)
```javascript
Vector3 API.getEntityFrontPostion(LocalHandle entity);
```


## GetEntityLeftPosition
Gets a world-relative position on the left of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityLeftPostion(LocalHandle entity);
```
### Usage example(s)
```javascript
Vector3 API.getEntityLeftPostion(LocalHandle entity);
```


## GetEntityRearPosition
Gets a world-relative position in rear of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityRearPostion(LocalHandle entity);
```
### Usage example(s)
```javascript
Vector3 API.getEntityRearPostion(LocalHandle entity);
```


## GetEntityRightPosition
Gets a world-relative position on the right of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityRightPostion(LocalHandle entity);
```
### Usage example(s)
```javascript
Vector3 API.getEntityRightPostion(LocalHandle entity);
```


## GetEntityVelocity
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getEntityVelocity(LocalHandle entity);
```
### Usage example(s)
```javascript
API.getEntityVelocity(LocalHandle entity);
```


## GetFirstParentIdForPedType
Gets the first available parent-id for a specified pedtype.

```javascript
API.getFirstParentIdForPedType(int type);
```
### Usage example(s)
```javascript
API.getFirstParentIdForPedType(int type);
```


## GetFontWidth
Gets the font width.

```javascript
double API.getFontWidth(string text, int font, double scale);
```
### Usage example(s)
```javascript
double API.getFontWidth(string text, int font, double scale);
```



## GetGameFramerate
Returns the Game Framerate of the Local Player.

```javascript
int getGameFramerate();
```
### Usage example(s)
```javascript
API.getGameFramerate();
```



## GetGamePlayer
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getGamePlayer();
```
### Usage example(s)
```javascript
API.getGamePlayer();
```


## GetGameText
Gets a text from the game's string table.

```javascript
API.getGameText(string name);
```
### Usage example(s)
```javascript

API.sendChatMessage("Text: ~b~" + API.getGameText("CLO_BBF_U_1_2"));

```


## GetGameTime
Gets the amount of milliseconds since the game started.

```javascript
API.getGameTime();
```
### Usage example(s)
```javascript
API.getGameTime();
```


## GetGameplayCamDir
Gets the direction of where the current player is looking as a [Vector3]().

```javascript
API.getGameplayCamDir();
```
### Usage example(s)
```javascript
API.getGameplayCamDir();
```


## GetGameplayCamPos
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getGameplayCamPos();
```
### Usage example(s)
```javascript
API.getGameplayCamPos();
```


## GetGameplayCamRot
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getGameplayCamRot();
```
### Usage example(s)
```javascript
API.getGameplayCamRot();
```


## GetGlobalTime
Returns time in milliseconds since the client-side script was started.

```javascript
API.getGlobalTime();
```
### Usage example(s)
```javascript
API.getGlobalTime();
```


## GetGroundHeight
Gets the height of the ground at the given position of the map.

```javascript
API.getGroundHeight(Vector3 position);
```
### Usage example(s)
```javascript

API.onServerEventTrigger.connect(function (evName, args) {
    switch (evName) {
        case "printGroundHeight":
            var pos = API.getEntityPosition(API.getLocalPlayer());
            var height = API.getGroundHeight(pos);
            API.sendChatMessage("The floor under you is at height ~b~" + height);
            break;
    }
});

```


## GetHudVisible
Gets the status of HUD visiblity

```javascript
API.getHudVisible();
```
### Usage example(s)
```javascript
API.getHudVisible();
```


## GetInteriorAtPos
Returns the interior id at the specified position.

```javascript
API.getInteriorAtPos(Vector3 pos);
```
### Usage example(s)
```javascript
API.getInteriorAtPos(Vector3 pos);
```


## GetLoadedAsiHash
Returns the hash of the specified and loaded ASI.

```javascript
API.getLoadedAsiHash(string asiName);
```
### Usage example(s)
```javascript
API.getLoadedAsiHash(string asiName);
```


## GetLocalPlayer
Gets the handle of the local client

```javascript
API.getLocalPlayer();
```
### Usage example(s)
```javascript
API.getLocalPlayer();
```


## GetMaxHealth
Returns the current maximum health of the local player. Default maximum health is 200.

```javascript
API.getMaxHealth();
```
### Usage example(s)
```javascript
API.getMaxHealth();
```


## GetMenuPool
Client-side !> **TODO: ** Add Function Description!
{{Important|API.getMenuPool() was removed in Version 0.1.638.634 See [Deprecated]() for more information. }}

```javascript
API.getMenuPool();
```
### Usage example(s)
```javascript
var mainWindow = API.createMenu("Sample Window", 0, 0, 6);
var menuPool = API.getMenuPool();
menuPool.Add(mainWindow);

API.onUpdate.connect(function(sender, events) 
{
   menuPool.ProcessMenus();
});
```


## GetModDlcPackHash
Returns the hash of the specified mod DLC-pack.

```javascript
API.getModDlcPackHash(string modDlcPack);
```
### Usage example(s)
```javascript
API.getModDlcPackHash(string modDlcPack);
```


## GetModelDimensions
Returns the bounds of a model, consisting of a "minimum" and "maximum" vector3.
The minimum and maximum are essentially 2 opposite corners of a model, defining a bounding box, as demonstrated in this image:
[[File:ModelDimensions.png]]

```javascript
API.getModelDimensions(int model);
```
### Usage example(s)
```javascript


function vectorToString(vector) {
    return `X: ${vector.X} Y: ${vector.Y} Z: ${vector.Z}`;
}

API.onResourceStart.connect(function() {
    var stt_prop_ramp_spiral_l_xxl = -274578370;
    var modelDimensions = API.getModelDimensions(stt_prop_ramp_spiral_l_xxl);

    API.sendChatMessage("Min: " + vectorToString(modelDimensions.Minimum));
    API.sendChatMessage("Max: " + vectorToString(modelDimensions.Maximum));
});

```


## GetMusicTime
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getMusicTime();
```
### Usage example(s)
```javascript
API.getMusicTime();
```


## GetMusicVolume
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getMusicVolume();
```
### Usage example(s)
```javascript
API.getMusicVolume();
```


## GetNextPositionOnSidewalk
Returns the next safe position on a sidewalk from the specified position.

```javascript
API.getNextPositionOnSidewalk(Vector3 position);
```
### Usage example(s)
```javascript
API.getNextPositionOnSidewalk(Vector3 position);
```


## GetNextPositionOnStreet
Returns the next safe position on a street from the specified position.

```javascript
API.getNextPositionOnStreet(Vector3 position, bool unoccupied = false);
```
### Usage example(s)
```javascript
API.getNextPositionOnStreet(Vector3 position, bool unoccupied = false);
```


## GetNextWeather
Gets the next weather.

```javascript
int API.getNextWeather();
```
### Usage example(s)
```javascript
var nextWeather = API.getNextWeather();
```




## GetNumHairColors
Gets the amount of available haircolors.

```javascript
API.getNumHairColors();
```
### Usage example(s)
```javascript
API.getNumHairColors();
```


## GetNumHeadOverlayValues
Gets the amount of available head overlays of a specific overlaytype.

```javascript
API.getNumHeadOverlayValues(int overlayId);
```
### Usage example(s)
```javascript
API.getNumHeadOverlayValues(int overlayId);
```


## GetNumMakeupColors
Gets the amount of available makeup colors.

```javascript
API.getNumMakeupColors();
```
### Usage example(s)
```javascript
API.getNumMakeupColors();
```


## GetOffsetFromWorldCoords
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getOffsetFromWorldCoords(LocalHandle entity, Vector3 pos);
```
### Usage example(s)
```javascript
API.getOffsetFromWorldCoords(LocalHandle entity, Vector3 pos);
```


## GetOffsetInWorldCoords
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getOffsetInWorldCoords(LocalHandle entity, Vector3 offset);
```
### Usage example(s)
```javascript
API.getOffsetInWorldCoords(LocalHandle entity, Vector3 offset);
```


## GetPedCanRagdoll
'''See also:''' [SetPedCanRagdoll](API_Client.md?id=setpedcanragdoll), [SetPedToRagdoll](API_Client.md?id=setpedtoragdoll), [CancelPedRagdoll](API_Client.md?id=cancelpedragdoll), [isPlayerRagdoll](API_Client.md?id=isplayerragdoll)
Returns whether or not the ragdoll of the local player is active.

```javascript
bool API.getPedCanRagdoll();
```
### Usage example(s)
```javascript
API.getPedCanRagdoll();
```



## GetPedHeadShotTextureString
'''See also:''' [UnregisterPedHeadShot](API_Client.md?id=unregisterpedheadshot), [RegisterPedHeadShot](API_Client.md?id=registerpedheadshot), [IsPedHeadShotValid](API_Client.md?id=ispedheadshotvalid), [IsPedHeadShotReady](API_Client.md?id=ispedheadshotready)
Returns the specified Ped Headshot as a string.

```javascript
string API.getPedHeadShotTextureString(int handle);
```
### Usage example(s)
```javascript
API.getPedHeadShotTextureString(int handle);
```



## GetPlayerAimCoords
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getPlayerAimCoords(LocalHandle player);
```
### Usage example(s)
```javascript
API.getPlayerAimCoords(LocalHandle player);
```


## GetPlayerByName
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getPlayerByName(string name);
```
### Usage example(s)
```javascript
API.getPlayerByName(string name);
```


## GetPlayerHeadOverlayValue
Gets the current headoverlay of a specified overlayid.

```javascript
API.getPlayerHeadOverlayValue(LocalHandle player, int overlayId);
```
### Usage example(s)
```javascript

API.getPlayerHeadOverlayValue(LocalHandle player, int overlayId);

```


## GetPlayerInvincible
Returns if the player is invincible or not.

```javascript
API.getPlayerInvincible();
```
### Usage example(s)
```javascript
API.getPlayerInvincible();
```


## GetResourceFilePath
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getResourceFilePath(string fileName);
```
### Usage example(s)
```javascript
API.getResourceFilePath(string fileName);
```


## GetSafeCoordForPed
Returns a valid position to stand on for a ped.

```javascript
API.getSafeCoordForPed(Vector3 position, bool sidewalk = true, int flags = 0);
```
### Usage example(s)
```javascript
API.getSafeCoordForPed(Vector3 position, bool sidewalk = true, int flags = 0);
```


## GetScreenResolution
This function will give you the size of the window of GTA 5, but will not represent the client's actual resolution. To get the client's resolution check out getScreenResolutionMaintainRatio().

```javascript
API.getScreenResolution();
```
### Usage example(s)
```javascript
var res = API.getScreenResolution();

var mainBrowser = API.createCefBrowser(res.Width, res.Height, true);
```


## GetScreenResolutionMaintainRatio
This function will give you the actual resolution so to speak, that can be combined with drawText() or drawRectangle(), unlike getScreenResolution().

```javascript
API.getScreenResolutionMaintainRatio();
```
### Usage example(s)
```javascript
API.getScreenResolutionMaintainRatio();
```


## GetShowWastedScreenOnDeath
Gets if wasted-screen should be shown if the local player dies.
'''See also:''' [setShowWastedScreenOnDeath](API_Client.md?id=setshowwastedscreenondeath)

```javascript
API.getShowWastedScreenOnDeath();
```
### Usage example(s)
```javascript

API.getShowWastedScreenOnDeath();

```


## GetSocialClubName
Returns the SocialClub Name of the Local player.

```javascript
string API.getSocialClubName();
```
### Usage example(s)
```javascript
API.getSocialClubName();
```



## GetStreamedMarkers
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getStreamedMarkers();
```
### Usage example(s)
```javascript
API.getStreamedMarkers();
```


## GetStreamedObjects
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getStreamedObjects();
```
### Usage example(s)
```javascript
API.getStreamedObjects();
```


## GetStreamedPeds
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getStreamedPeds();
```
### Usage example(s)
```javascript
API.getStreamedPeds();
```


## GetStreamedPickups
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getStreamedPickups();
```
### Usage example(s)
```javascript
API.getStreamedPickups();
```


## GetStreamedPlayers
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getStreamedPlayers();
```
### Usage example(s)
```javascript
API.getStreamedPlayers();
```


## GetStreamedTextLabels
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getStreamedTextLabels();
```
### Usage example(s)
```javascript
API.getStreamedTextLabels();
```


## GetStreamedVehicles
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getStreamedVehicles();
```
### Usage example(s)
```javascript
API.getStreamedVehicles();
```


## GetStreetName
Gets the name of the street from the given position.

```javascript
API.getStreetName(Vector3 position);
```
### Usage example(s)
```javascript
var streetName = API.getStreetName(new Vector3(0, 0, 30));
```


## GetTattooZone
Gets the zone of the specified tattoo-collection/overlay combination.

```javascript
API.getTattooZone(string collection, string overlay);
```
### Usage example(s)
```javascript
API.getTattooZone(string collection, string overlay);
```
```javascript
API.getTattooZone(int collection, int overlay);
```


## GetUniqueHardwareId
Returns the UniqueHardwareId of the local player.

```javascript
string API.getUniqueHardwareId();
```
### Usage example(s)
```javascript
API.getUniqueHardwareId();
```



## GetUserInput
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getUserInput(string defaultText, int maxlen);
```
### Usage example(s)
```javascript
API.getUserInput(string defaultText, int maxlen);
```


## GetVehicleBrakePower
Returns the current break power of the specified vehicle.

```javascript
API.getVehicleBrakePower(LocalHandle vehicle);
```
### Usage example(s)
```javascript
API.getVehicleBrakePower(LocalHandle vehicle);
```


## GetVehicleClutch
Returns the current clutch status of the specified vehicle.

```javascript
API.getVehicleClutch(LocalHandle vehicle);
```
### Usage example(s)
```javascript
API.getVehicleClutch(LocalHandle vehicle);
```


## GetVehicleCurrentGear
Gets the current gear of a specified vehicle.

```javascript
API.getVehicleCurrentGear(LocalHandle entity);
```
### Usage example(s)
```javascript
API.getVehicleCurrentGear(LocalHandle entity);
```


## GetVehicleEngineTemperature
Returns the engine temperature of the specified vehicle.

```javascript
API.getVehicleEngineTemperature(LocalHandle vehicle);
```
### Usage example(s)
```javascript
API.getVehicleEngineTemperature(LocalHandle vehicle);
```


## GetVehicleEnteringKeysDisabled
Returns true if [[DisableVehicleEnteringKeys|Vehicle Entering Keys]] are disabled, returns false otherwise.

```javascript
bool API.getVehicleEnteringKeysDisabled();
```
### Usage example(s)
```javascript
void API.getVehicleEnteringKeysDisabled();
```



## GetVehicleHighGear
Gets the highest possible gear of a specified vehicle.

```javascript
API.getVehicleHighGear(LocalHandle entity);
```
### Usage example(s)
```javascript
API.getVehicleHighGear(LocalHandle entity);
```


## GetVehicleLiveryName
Returns the livery name of the speciefied Vehicle with the specified liveryIndex.

```javascript
string API.getVehicleLiveryName(LocalHandle vehicle, int liveryIndex);
```
### Usage example(s)
```javascript

var text = API.getVehicleLiveryName(LocalHandle vehicle, int liveryIndex);

// Send a notification and use the language of the Client for the name
API.sendNotification('Vehicle Livery Name: ~b~' + API.getGameText(text));

```



## GetVehicleModSlotName
Returns the name for the type of vehicle mod(Armour, engine, etc)

```javascript
string API.getVehicleModSlotName(LocalHandle vehicle, int modType);
```
### Usage example(s)
```javascript

var text = API.getVehicleModSlotName(LocalHandle vehicle, int modType);

// Send a notification and use the language of the Client for the name
API.sendNotification('Mod Slot Name: ~b~' + API.getGameText(text));

```



## GetVehicleModTextLabel
Returns the text label of a mod type for a given vehicle.

```javascript
string API.getVehicleModTextLabel(LocalHandle vehicle, int modType, int modValue);
```
### Usage example(s)
```javascript

var text = API.getVehicleModTextLabel(LocalHandle vehicle, int modType, int modValue);

// Send a notification and use the language of the Client for the name
API.sendNotification('Mod Text Label: ~b~' + API.getGameText(text));

```



## GetVehicleNumModCount
Returns the amount of possible modifications for a specific modification type of a specific vehicle.

```javascript
API.getVehicleNumModCount(LocalHandle vehicle, int modType);
```
### Usage example(s)
```javascript
API.getVehicleNumModCount(LocalHandle vehicle, int modType);
```


## GetVehicleRPM
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getVehicleRPM(LocalHandle entity);
```
### Usage example(s)
```javascript
API.getVehicleRPM(LocalHandle entity);
```


## GetVehicleThrottle
Returns the current throttle status of the specified vehicle.

```javascript
API.getVehicleThrottle(LocalHandle vehicle);
```
### Usage example(s)
```javascript
API.getVehicleThrottle(LocalHandle vehicle);
```


## GetVehicleThrottlePower
Returns the current throttle power of the specified vehicle.

```javascript
API.getVehicleThrottlePower(LocalHandle vehicle);
```
### Usage example(s)
```javascript
API.getVehicleThrottlePower(LocalHandle vehicle);
```


## GetVehicleTurbo
Returns the turbo status of the specified vehicle.

```javascript
API.getVehicleTurbo(LocalHandle vehicle);
```
### Usage example(s)
```javascript
API.getVehicleTurbo(LocalHandle vehicle);
```


## GetWaypointPosition
Client-side !> **TODO: ** Add Function Description!

```javascript
API.getWaypointPosition();
```
### Usage example(s)
```javascript
API.getWaypointPosition();
```


## GetWeatherTransitionType
Gets the current weather transition type.

```javascript
float API.getWeatherTransitionType();
```
### Usage example(s)
```javascript
var weatherTransitionType = API.getWeatherTransitionType();
```




## GetZoneName
Gets the zone name from the given position.

```javascript
API.getZoneName(Vector3 position);
```
### Usage example(s)
```javascript
var zoneName = API.getZoneName(new Vector3(0, 0, 30));
```


## GetZoneNameLabel
Gets the label of the zone name from the given position.

```javascript
API.getZoneNameLabel(Vector3 position);
```
### Usage example(s)
```javascript
var zoneNameLabel = API.getZoneNameLabel(new Vector3(0, 0, 30));
```


## GoBackCefBrowser
Navigates a page back in a CEF browser.

```javascript
API.goBackCefBrowser(Browser browser);
```
### Usage example(s)
```javascript
API.goBackCefBrowser(Browser browser);
```


## HasEntityBone
Check if the specified Bone exist on the specified entity.

```javascript
bool API.hasEntityBone(LocalHandle entity, string boneName);
```
### Usage example(s)
```javascript
API.hasEntityBone(LocalHandle entity, string boneName);
```



## HasPlayerHeadBlendFinished
Checks if requested headblending-data has been applied on the specified player.

```javascript
API.hasPlayerHeadBlendFinished(LocalHandle player);
```
### Usage example(s)
```javascript
API.hasPlayerHeadBlendFinished(LocalHandle player);
```


## HasPlayerWeaponComponent
Client-side !> **TODO: ** Add Function Description!

```javascript
API.hasPlayerWeaponComponent(int weapon, int component);
```
### Usage example(s)
```javascript
API.hasPlayerWeaponComponent(int weapon, int component);
```


## HasVehicleMod
Checks if the specified vehicle has any mods available of the given mod type.

```javascript
API.hasVehicleMod(LocalHandle vehicle, int modType);
```
### Usage example(s)
```javascript
API.hasVehicleMod(LocalHandle vehicle, int modType);
```


## HideHudComponentThisFrame
'''See also:''' [IsHudComponentActive](API_Client.md?id=ishudcomponentactive), [ShowHudComponentThisFrame](API_Client.md?id=showhudcomponentthisframe)
Hides the specified hud component for this Frame.

```javascript
API.hideHudComponentThisFrame(int componentId);
```
### Usage example(s)
```javascript
API.hideHudComponentThisFrame(int componentId);
```



## HideLoadingPrompt
'''See also:''' [ShowLoadingPrompt](API_Client.md?id=showloadingprompt), [IsLoadingPromptActive](API_Client.md?id=isloadingpromptactive)
Hides the Loading prompt.

```javascript
API.hideLoadingPrompt();
```
### Usage example(s)
```javascript
API.hideLoadingPrompt();
```



## InterpolateCameras
Client-side !> **TODO: ** Add Function Description!

```javascript
API.interpolateCameras(GlobalCamera from, GlobalCamera to, double duration, bool easepos, bool easerot);
```
### Usage example(s)
```javascript
API.interpolateCameras(GlobalCamera from, GlobalCamera to, double duration, bool easepos, bool easerot);
```


## IsAIPedsSpawningActive
This function returns the current AI spawning status of the local player.

```javascript
bool API.isAIPedsSpawningActive();
```
### Usage example(s)
```javascript
API.isAIPedsSpawningActive();
```


## IsAimDataForced
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isAimDataForced();
```
### Usage example(s)
```javascript
API.isAimDataForced();
```


## IsAlarmPlaying
'''See also:''' [StopAllAlarms](API_Client.md?id=stopallalarms), [StartAlarm](API_Client.md?id=startalarm), [StopAlarm](API_Client.md?id=stopalarm)
Checks if the specified Alarm playack is running.

```javascript
bool API.isAlarmPlaying(string alarmName);
```
### Usage example(s)
```javascript
API.isAlarmPlaying(string alarmName);
```



## IsAnyMenuOpen
Checks if there is any open menu.

```javascript
API.isAnyMenuOpen();
```
### Usage example(s)
```javascript

if(!API.isAnyMenuOpen()) {
    // Open a new menu
}

```


## IsAsiLoaded
Checks if the specified ASI is loaded.

```javascript
API.isAsiLoaded(string asiName);
```
### Usage example(s)
```javascript
API.isAsiLoaded(string asiName);
```


## IsAudioInitialized
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isAudioInitialized();
```
### Usage example(s)
```javascript
API.isAudioInitialized();
```


## IsAudioPlaying
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isAudioPlaying();
```
### Usage example(s)
```javascript


if(API.isAudioPlaying())
{
  //Audio is Playing
}
else
{
  //no Audio
}



```


## IsCameraShaking
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isCameraShaking(GlobalCamera cam);
```
### Usage example(s)
```javascript
API.isCameraShaking(GlobalCamera cam);
```


## IsCefBrowserInitialized
Checks if CEF Browser has been initialized.

```javascript
API.isCefBrowserInitialized(Browser browser);
```
### Usage example(s)

```javascript
API.isCefBrowserInitialized(Browser browser);
```


## IsCefBrowserLoading
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isCefBrowserLoading(Browser browser);
```
### Usage example(s)
```javascript
API.isCefBrowserLoading(Browser browser);
```


## IsCefDrawEnabled
Returns whether CEF draw is Enabled.

```javascript
bool API.isCefDrawEnabled();
```
### Usage example(s)
```javascript
API.isCefDrawEnabled();
```



## IsChatOpen
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isChatOpen();
```
### Usage example(s)
```javascript
API.isChatOpen();
```


## IsControlJustPressed
Checks if the specified game control has just been pressed. Has to be checked in [OnUpdate](Events.md?id=onupdate). This function will only recognize a game contrl pressed once. If you wish to get repeated responses of which key is being held, use [IsControlPressed](API_Client.md?id=iscontrolpressed).

```javascript
API.isControlJustPressed(int control);
```
### Usage example(s)
Detect if the player pressed the jump-button.
```javascript

API.onUpdate.connect(function() {
    if(API.isControlJustPressed(22)) {
        API.sendChatMessage("You just pressed the jump-button.");
    }
});

```


## IsControlJustReleased
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isControlJustReleased(int control);
```
### Usage example(s)
```javascript
API.isControlJustReleased(int control);
```


## IsControlPressed
Similar to [IsControlJustPressed](API_Client.md?id=iscontroljustpressed), it's used on [OnUpdate](Events.md?id=onupdate) and will return if the game control is clicked. This will can be used to also recognize whether or not a game control is being held by a player. For full game control list check out [[Game Controls]].

```javascript
API.isControlPressed(int control);
```
### Usage example(s)
Will check if player has used the attack game control.
```javascript

API.onUpdate.connect(function () {
   if (API.isControlPressed(24)) {
      // do stuff
   }
}

```


## IsCursorShown
Returns whether the cursor is currently shown or not. Also see the [showCursor](API_Client.md?id=showcursor) function.

```javascript
API.isCursorShown();
```
### Usage example(s)
```javascript
API.isCursorShown();
```


## IsDisabledControlJustPressed
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isDisabledControlJustPressed(int control);
```
### Usage example(s)
```javascript
API.isDisabledControlJustPressed(int control);
```


## IsDisabledControlJustReleased
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isDisabledControlJustReleased(int control);
```
### Usage example(s)
```javascript
API.isDisabledControlJustReleased(int control);
```


## IsDisabledControlPressed
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isDisabledControlPressed(int control);
```
### Usage example(s)
```javascript
API.isDisabledControlPressed(int control);
```


## IsEntityPositionFrozen
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isEntityPositionFrozen(LocalHandle entity);
```
### Usage example(s)
```javascript
API.isEntityPositionFrozen(LocalHandle entity);
```


## IsEntityTouchingEntity
'''See also:''' [IsEntityTouchingModel](API_Client.md?id=isentitytouchingmodel)
Returns whether Entity is touching a specified Entity.

```javascript
bool API.isEntityTouchingEntity(LocalHandle entity, LocalHandle targetEntity);
```
### Usage example(s)
```javascript
API.isEntityTouchingEntity(LocalHandle entity, LocalHandle targetEntity);
```



## IsEntityTouchingModel
'''See also:''' [IsEntityTouchingEntity](API_Client.md?id=isentitytouchingentity)
Returns whether Entity is touching a specified Model.

```javascript
bool API.isEntityTouchingModel(LocalHandle entity, int modelHash);
```
### Usage example(s)
```javascript
API.isEntityTouchingModel(LocalHandle entity, int modelHash);
```



## IsEntityUpright
'''See also:''' [IsEntityUpsidedown](API_Client.md?id=isentityupsidedown)
Returns whether Entity is Upright.

```javascript
bool API.isEntityUpright(LocalHandle entity, float angle);
```
### Usage example(s)
```javascript
API.isEntityUpright(LocalHandle entity, float angle);
```



## IsEntityUpsidedown
'''See also:''' [IsEntityUpright](API_Client.md?id=isentityupright)
Returns whether Entity is Upside Down.

```javascript
bool API.isEntityUpsidedown(LocalHandle entity);
```
### Usage example(s)
```javascript
API.isEntityUpsidedown(LocalHandle entity);
```



## IsFingerPointing
Checks if the current player points with the finger.

```javascript
API.isFingerPointing();
```
### Usage example(s)
```javascript
API.isFingerPointing();
```


## IsFingerPointingDisabled
Checks if the current client isn't able to point with the finger.

```javascript
API.isFingerPointingDisabled();
```
### Usage example(s)
```javascript
API.isFingerPointingDisabled();
```


## IsFirstPersonCamDisabled
Gets if the onfoot firstperson-camera has been disabled.

```javascript
API.isFirstPersonCamDisabled();
```
### Usage example(s)
```javascript

API.isFirstPersonCamDisabled();

```


## IsGameplayCameraShaking
'''See also:''' [SetGameplayCameraShake](API_Client.md?id=setgameplaycamerashake), [StopGameplayCameraShake](API_Client.md?id=stopgameplaycamerashake)
Returns whether the camera of the player is shaking.

```javascript
bool API.isGameplayCameraShaking();
```
### Usage example(s)
```javascript
API.isGameplayCameraShaking();
```



## IsHudComponentActive
'''See also:''' [ShowHudComponentThisFrame](API_Client.md?id=showhudcomponentthisframe), [HideHudComponentThisFrame](API_Client.md?id=hidehudcomponentthisframe)
Returns whether the specified hud component is active or not.

```javascript
bool API.isHudComponentActive(int componentId);
```
### Usage example(s)
```javascript
API.isHudComponentActive(int componentId);
```



## IsInFirstPersonCam
Checks if the specified player is currently in first person.

```javascript
API.isInFirstPersonCam(LocalHandle player);
```
### Usage example(s)
```javascript
API.isInFirstPersonCam(LocalHandle player);
```


## IsInRangeOf
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isInRangeOf(Vector3 entity, Vector3 destination, double range);
```
### Usage example(s)
```javascript
API.isInRangeOf(Vector3 entity, Vector3 destination, double range);
```


## IsInteriorPropEnabled
'''See also:''' [EnableInteriorProp](API_Client.md?id=enableinteriorprop), [DisableInteriorProp](API_Client.md?id=disableinteriorprop)

```javascript
API.isInteriorPropEnabled(int interiorId, string propName);
```
### Usage example(s)
```javascript
API.isInteriorPropEnabled(int interiorId, string propName);
```


## IsLoadingPromptActive
'''See also:''' [HideLoadingPrompt](API_Client.md?id=hideloadingprompt), [ShowLoadingPrompt](API_Client.md?id=showloadingprompt)
Returns whether a Loading Prompt is active or not.

```javascript
bool API.isLoadingPromptActive();
```
### Usage example(s)
```javascript
API.isLoadingPromptActive();
```



## IsMainMenuOpen
Checks if the main menu of the local player is currently open.

```javascript
API.isMainMenuOpen();
```
### Usage example(s)
```javascript
API.isMainMenuOpen();
```


## IsModDlcPackActive
Checks if the specified mod DLC-pack is active.

```javascript
API.isModDlcPackActive(string modDlcPack);
```
### Usage example(s)
```javascript
API.isModDlcPackActive(string modDlcPack);
```


## IsMusicPlaying
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isMusicPlaying();
```
### Usage example(s)
```javascript


if(API.isMusicPlaying())
{
  //Music is Playing
}
else
{
  //no Music
}



```


## IsOpenIVActive
Checks if OpenIV is currently active

```javascript
API.isOpenIVActive();
```
### Usage example(s)
```javascript
API.isOpenIVActive();
```


## IsPed
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isPed(LocalHandle ent);
```
### Usage example(s)
```javascript
API.isPed(LocalHandle ent);
```


## IsPedHeadShotReady
'''See also:''' [UnregisterPedHeadShot](API_Client.md?id=unregisterpedheadshot), [GetPedHeadShotTextureString](API_Client.md?id=getpedheadshottexturestring), [IsPedHeadShotValid](API_Client.md?id=ispedheadshotvalid), [RegisterPedHeadShot](API_Client.md?id=registerpedheadshot)
Checks if the Headshot is ready.

```javascript
bool API.isPedHeadShotReady(int handle);
```
### Usage example(s)
```javascript
API.isPedHeadShotReady(int handle);
```



## IsPedHeadShotValid
'''See also:''' [UnregisterPedHeadShot](API_Client.md?id=unregisterpedheadshot), [GetPedHeadShotTextureString](API_Client.md?id=getpedheadshottexturestring), [RegisterPedHeadShot](API_Client.md?id=registerpedheadshot), [IsPedHeadShotReady](API_Client.md?id=ispedheadshotready)
Checks if the Headshot is valid.

```javascript
bool API.isPedHeadShotValid(int handle);
```
### Usage example(s)
```javascript
API.isPedHeadShotValid(int handle);
```



## IsPlayerBlushColorValid
Checks if the specified blushcolor is valid.

```javascript
API.isPlayerBlushColorValid(int colorId);
```
### Usage example(s)
```javascript
API.isPlayerBlushColorValid(int colorId);
```


## IsPlayerClimbing
Returns whether the local player is climbing or not.

```javascript
bool API.isPlayerClimbing(LocalHandle player);
```
### Usage example(s)
```javascript
API.isPlayerClimbing(LocalHandle player);
```



## IsPlayerClothesVariationValid
Checks if the given clothes-variation is valid.
''This is an alias for [isPlayerComponentVariationValid](API_Client.md?id=isplayercomponentvariationvalid)''.

```javascript
API.isPlayerClothesVariationValid(LocalHandle player, int componentId, int drawableId, int textureId);
```
### Usage example(s)
```javascript
API.isPlayerClothesVariationValid(LocalHandle player, int componentId, int drawableId, int textureId);
```


## IsPlayerComponentPropValid
Checks if a given playercomponent-prop is valid.

```javascript
API.isPlayerComponentPropValid(LocalHandle player, int componentId, int drawableId, int textureId);
```
### Usage example(s)
```javascript
API.isPlayerComponentPropValid(LocalHandle player, int componentId, int drawableId, int textureId);
```


## IsPlayerComponentVariationValid
Checks if given playercomponent-variation is valid.

```javascript
API.isPlayerComponentVariationValid(LocalHandle player, int slot, int drawable, int texture);
```
### Usage example(s)
```javascript
API.isPlayerComponentVariationValid(LocalHandle player, int slot, int drawable, int texture);
```


## IsPlayerDiving
Returns whether the local player is diving or not.

```javascript
bool API.isPlayerDiving(LocalHandle player);
```
### Usage example(s)
```javascript
API.isPlayerDiving(LocalHandle player);
```



## IsPlayerFalling
Returns whether the local player is flying in the air or not.

```javascript
bool API.isPlayerFalling(LocalHandle player);
```
### Usage example(s)
```javascript
API.isPlayerFalling(LocalHandle player);
```



## IsPlayerHairColorValid
Checks if the specified colorid is valid.

```javascript
API.isPlayerHairColorValid(int colorId);
```
### Usage example(s)
```javascript
API.isPlayerHairColorValid(int colorId);
```


## IsPlayerLipstickColorValid
Checks if specified lipstickcolor is valid.

```javascript
API.isPlayerLipstickColorValid(int colorId);
```
### Usage example(s)
```javascript
API.isPlayerLipstickColorValid(int colorId);
```


## IsPlayerRagdoll
'''See also:''' [GetPedCanRagdoll](API_Client.md?id=getpedcanragdoll), [SetPedCanRagdoll](API_Client.md?id=setpedcanragdoll), [SetPedToRagdoll](API_Client.md?id=setpedtoragdoll), [CancelPedRagdoll](API_Client.md?id=cancelpedragdoll)
Returns whether the player is currently in a Ragdoll action.

```javascript
bool API.isPlayerRagdoll(LocalHandle player);
```
### Usage example(s)
```javascript
API.isPlayerRagdoll(LocalHandle player);
```



## IsPlayerSwimming
Returns true if the player is swimming, false if it's not.

```javascript
bool API.isPlayerSwimming(LocalHandle player);
```
### Usage example(s)
The function below detects if your local player is swimming or not and sends him a message.

{{inJS|
```javascript

function isSwimming(){
    var player = API.getLocalPlayer();
    var isSwimming = API.isPlayerSwimming(player);
    
    if(isSwimming == true){
        API.sendNotification("Oh boy you're swimming!");
    }
    else API.sendNotification("Oh boy, you're not swimming :/");
}

```
}}


## IsPlayerSwimmingUnderWater
Returns true if the player is swimming under water, false if it's not.

```javascript
bool API.isPlayerSwimmingUnderWater(LocalHandle player);
```
### Usage example(s)
The function below detects if your local player is swimming under water or not and sends him a message.

{{inJS|
```javascript

function isSwimmingUnderWater(){
    var player = API.getLocalPlayer();
    var isSwimming = API.isPlayerSwimmingUnderWater(player);
    
    if(isSwimming == true){
        API.sendNotification("Oh boy you're swimming!");
    }
    else API.sendNotification("Oh boy, you're not swimming :/");
}

```
}}


## IsPlayerWearingHelmet
Returns whether the player is currently wearing a helmet or not.

```javascript
bool API.isPlayerWearingHelmet(LocalHandle player);
```
### Usage example(s)
```javascript
API.isPlayerWearingHelmet(LocalHandle player);
```



## IsProp
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isProp(LocalHandle ent);
```
### Usage example(s)
```javascript
API.isProp(LocalHandle ent);
```


## IsScreenFadedIn
'''See also:''' [FadeScreenIn](API_Client.md?id=fadescreenin), [FadeScreenOut](API_Client.md?id=fadescreenout), [IsScreenFadedOut](API_Client.md?id=isscreenfadedout), [IsScreenFadingIn](API_Client.md?id=isscreenfadingin), [IsScreenFadingOut](API_Client.md?id=isscreenfadingout)
Indicates whether the screen is fully displayed.

```javascript
bool API.isScreenFadedIn();
```
### Usage example(s)
```javascript
API.isScreenFadedIn();
```



## IsScreenFadedOut
'''See also:''' [FadeScreenIn](API_Client.md?id=fadescreenin), [FadeScreenOut](API_Client.md?id=fadescreenout), [IsScreenFadedIn](API_Client.md?id=isscreenfadedin), [IsScreenFadingIn](API_Client.md?id=isscreenfadingin), [IsScreenFadingOut](API_Client.md?id=isscreenfadingout)
Returns whether the screen is completely hidden.

```javascript
bool API.isScreenFadedOut();
```
### Usage example(s)
```javascript
API.isScreenFadedOut();
```



## IsScreenFadingIn
'''See also:''' [FadeScreenIn](API_Client.md?id=fadescreenin), [FadeScreenOut](API_Client.md?id=fadescreenout), [IsScreenFadedIn](API_Client.md?id=isscreenfadedin), [IsScreenFadedOut](API_Client.md?id=isscreenfadedout), [IsScreenFadingOut](API_Client.md?id=isscreenfadingout)
Returns whether the screen is currently fadeing in or not.

```javascript
bool API.isScreenFadingIn();
```
### Usage example(s)
```javascript
API.isScreenFadingIn();
```



## IsScreenFadingOut
'''See also:''' [FadeScreenIn](API_Client.md?id=fadescreenin), [FadeScreenOut](API_Client.md?id=fadescreenout), [IsScreenFadedIn](API_Client.md?id=isscreenfadedin), [IsScreenFadedOut](API_Client.md?id=isscreenfadedout), [IsScreenFadingIn](API_Client.md?id=isscreenfadingin)
Returns whether the screen is currently fadeing out or not.

```javascript
bool API.isScreenFadingOut();
```
### Usage example(s)
```javascript
API.isScreenFadingOut();
```



## IsSpectating
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isSpectating();
```
### Usage example(s)
```javascript
API.isSpectating();
```


## IsVehicle
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isVehicle(LocalHandle ent);
```
### Usage example(s)
```javascript
API.isVehicle(LocalHandle ent);
```


## IsVehicleFirstPersonCamDisabled
Gets if the vehicle firstperson-camera has been disabled.

```javascript
API.isVehicleFirstPersonCamDisabled();
```
### Usage example(s)
```javascript

API.isVehicleFirstPersonCamDisabled();

```


## IsWaypointSet
Client-side !> **TODO: ** Add Function Description!

```javascript
API.isWaypointSet();
```
### Usage example(s)
```javascript
API.isWaypointSet();
```


## LerpFloat
Client-side !> **TODO: ** Add Function Description!

```javascript
API.lerpFloat(double start, double end, double currentTime, double duration);
```
### Usage example(s)
```javascript
API.lerpFloat(double start, double end, double currentTime, double duration);
```


## LerpVector
Client-side !> **TODO: ** Add Function Description!

```javascript
API.lerpVector(Vector3 start, Vector3 end, double currentTime, double duration);
```
### Usage example(s)
```javascript
API.lerpVector(Vector3 start, Vector3 end, double currentTime, double duration);
```


## LoadAnimationDict
Client-side !> **TODO: ** Add Function Description!

```javascript
API.loadAnimationDict(string dict);
```
### Usage example(s)
```javascript
API.loadAnimationDict(string dict);
```


## LoadModel
Client-side !> **TODO: ** Add Function Description!

```javascript
API.loadModel(int model);
```
### Usage example(s)
```javascript
API.loadModel(int model);
```


## LoadPageCefBrowser
Client-side !> **TODO: ** Add Function Description!

```javascript
API.loadPageCefBrowser(Browser browser, string uri, bool noCache = false);
```
### Usage example(s)
```javascript
// Create a browser that fills the players screen
var mainBrowser = null;
var res = API.getScreenResolution();

mainBrowser = API.createCefBrowser(res.Width, res.Height, false);
API.waitUntilCefBrowserInit(mainBrowser);
API.setCefBrowserPosition(mainBrowser, 0, 0);
API.loadPageCefBrowser(mainBrowser, "www.google.co.uk");
API.showCursor(true);
```


## LocalHandle
undefined
!> **TODO: ** Add Syntax
!> **TODO: ** Add usage example!
## Menu Events
undefined
!> **TODO: ** Add Syntax
!> **TODO: ** Add usage example!
## Menu.AddInstructionalButton
Adds an instructional button.
----
'''Attention:''' Instructional Buttons doesn't work in GT-MP yet because an API function for Create those buttons needs to be written before you can use it.
----

```javascript
myMenu.AddInstructionalButton(InstructionalButton button);
```
!> **TODO: ** Add usage example!
## Menu.BindMenuToItem
Bind a menu to a button. When the button is clicked that menu will open.

```javascript
myMenu.BindMenuToItem(UIMenu menuToBind, UIMenuItem itemToBindTo);
```
!> **TODO: ** Add usage example!
## Menu.Clear
Remove all items from the menu.

```javascript
myMenu.Clear();
```
!> **TODO: ** Add usage example!
## Menu.DisableInstructionalButtons
Enable or disable the instructional buttons.

```javascript
myMenu.DisableInstructionalButtons(bool disable);
```
!> **TODO: ** Add usage example!
## Menu.GoBack
Close or go back in a menu chain.

```javascript
myMenu.GoBack();
```
!> **TODO: ** Add usage example!
## Menu.GoDown
Go down the menu if the number of items is less than or equal to the maximum items on screen.

```javascript
myMenu.GoDown();
```
!> **TODO: ** Add usage example!
## Menu.GoDownOverflow
Go down the menu if the number of items is more than maximum items on screen.

```javascript
myMenu.GoDownOverflow();
```
!> **TODO: ** Add usage example!
## Menu.GoLeft
Go left on a UIMenuListItem.

```javascript
myMenu.GoLeft();
```
!> **TODO: ** Add usage example!
## Menu.GoRight
Go right on a UIMenuListItem.

```javascript
myMenu.GoRight();
```
!> **TODO: ** Add usage example!
## Menu.GoUp
Go up the menu if the number of items is less than or equal to the maximum items on screen.

```javascript
myMenu.GoUp();
```
!> **TODO: ** Add usage example!
## Menu.GoUpOverflow
Go up the menu if the number of items is more than maximum items on screen.

```javascript
myMenu.GoUpOverflow();
```
!> **TODO: ** Add usage example!
## Menu.RefreshIndex
Reset the current selected item to 0. Use this after you add or remove items dynamically.

```javascript
myMenu.RefreshIndex();
```
!> **TODO: ** Add usage example!
## Menu.ReleaseMenuFromItem
Remove menu binding from button.

```javascript
myMenu.ReleaseMenuFromItem(UIMenuItem releaseFrom);
```
!> **TODO: ** Add usage example!
## Menu.RemoveInstructionalButton
Removes an instructional button.
----
'''Attention:''' Instructional Buttons doesn't work in GT-MP yet because an API function for Create those buttons needs to be written before you can use it.
----

```javascript
myMenu.RemoveInstructionalButton(InstructionalButton button);
```
!> **TODO: ** Add usage example!
## Menu.RemoveItemAt
Remove a item from an specific menu index.

```javascript
myMenu.RemoveItemAt(int index);
```
!> **TODO: ** Add usage example!
## Menu.ResetKey
Remove all Keys on a control.

```javascript
myMenu.ResetKey(MenuControls control);
```
!> **TODO: ** Add usage example!
## Menu.SelectItem
Activate the current selected item.

```javascript
myMenu.SelectItem();
```
!> **TODO: ** Add usage example!
## Menu.SetKey
undefined
!> **TODO: ** Add Syntax
!> **TODO: ** Add usage example!
## Menu.SetMenuWidthOffset
Change the menu's width. The width is calculated as DefaultWidth + WidthOffset, so a width offset of 10 would enlarge the menu by 10 pixels.

```javascript
myMenu.SetMenuWidthOffset(int widthOffset);
```
!> **TODO: ** Add usage example!
## OnCustomDataReceived
Called when the client receives custom data transfered via [downloadData](API_Server.md?id=downloaddata) by the server.

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


## OnDynamicMenuListItemChanged
This event triggers when a DynamiListItem changes.

```javascript
API.onDynamicMenuListItemChanged.connect(function (UIMenuDynamicListItem sender, UIMenuDynamicListItem.ChangeDirection direction));
```
### Usage example(s)

```javascript

API.onDynamicMenuListItemChanged.connect(function (sender, direction) {
    // Do something.
    API.sendNotification('Direction ' + direction);
})

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
See [onKeyUp](API_Client.md?id=onkeyup) for more info on the raised event, and the <code>Keys.</code> list.
If you want to use this to catch game controls, consider using [isControlJustPressed](API_Client.md?id=iscontroljustpressed) instead, which matches up with bindings on both keyboard and gamepad.

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


## OnListchanged
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```javascript

listName.OnListChanged.connect(function (sender, new_index)
{
    switch (new_index)
    {
        case 0:
            {
                break;
            }
        case 1:
            {
                break;
            }
    }
});

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


## OnLocalPlayerShoot
[[Category:Client Side Javascript]]
Triggered when the local player shoots.

```javascript
API.onLocalPlayerShoot.connect(function callback);
```
### Usage example(s)
```javascript

API.onLocalPlayerShoot.connect(function (weaponUsed, aimCoords) {
  API.sendChatMessage("aimCoords: " + aimCoords.ToString());
});

```


## OnMenuClose
undefined
!> **TODO: ** Add Syntax
### Usage example(s)
```javascript

menu.OnMenuClose.connect(function (sender)
{
   API.sendChatMessage("You close the menu. Bye");
});

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


## PauseAudio
Client-side !> **TODO: ** Add Function Description!

```javascript
API.pauseAudio();
```
### Usage example(s)
```javascript
API.pauseAudio();
```


## PlayPoliceReport
Plays a police report. See also [[Police Reports]].

```javascript
API.playPoliceReport(string reportName);
```
### Usage example(s)
```javascript
API.playPoliceReport("SCRIPTED_SCANNER_REPORT_ASS_MULTI_01");
```


## PlayScreenEffect
Plays a screen effect. See also [[Screen Effects]].

```javascript
API.playScreenEffect(string effectName, int duration, bool looped);
```
### Usage example(s)
```javascript
API.playScreenEffect("FocusIn", 1000, false);
```


## PointCameraAtEntity
Client-side !> **TODO: ** Add Function Description!

```javascript
API.pointCameraAtEntity(GlobalCamera cam, LocalHandle ent, Vector3 offset);
```
### Usage example(s)
```javascript
API.pointCameraAtEntity(GlobalCamera cam, LocalHandle ent, Vector3 offset);
```


## PointCameraAtEntityBone
Client-side !> **TODO: ** Add Function Description!

```javascript
API.pointCameraAtEntityBone(GlobalCamera cam, LocalHandle ent, int bone, Vector3 offset);
```
### Usage example(s)
```javascript
API.pointCameraAtEntityBone(GlobalCamera cam, LocalHandle ent, int bone, Vector3 offset);
```


## PointCameraAtPosition
Client-side !> **TODO: ** Add Function Description!

```javascript
API.pointCameraAtPosition(GlobalCamera cam, Vector3 pos);
```
### Usage example(s)
```javascript
API.pointCameraAtPosition(GlobalCamera cam, Vector3 pos);
```


## PreloadAudio
Client-side !> **TODO: ** Add Function Description!

```javascript
API.preloadAudio(string path);
```
### Usage example(s)
```javascript
API.preloadAudio(string path);
```


## RegisterChatOverride
This removes the default chat and lets you control everything about it with methods and events (see resource 'cefchat' for examples).

```javascript
API.registerChatOverride();
```
### Usage example(s)
```javascript
API.registerChatOverride();
```


## RegisterPedHeadShot
'''See also:''' [UnregisterPedHeadShot](API_Client.md?id=unregisterpedheadshot), [GetPedHeadShotTextureString](API_Client.md?id=getpedheadshottexturestring), [IsPedHeadShotValid](API_Client.md?id=ispedheadshotvalid), [IsPedHeadShotReady](API_Client.md?id=ispedheadshotready)
Registers a Headshot for a Ped (More informations [http://gtaforums.com/topic/885580-ped-headshotmugshot-txd/?hl=headshot here])

```javascript
int API.registerPedHeadShot(LocalHandle player);
```
### Usage example(s)
```javascript
API.registerPedHeadShot(LocalHandle player);
```



## RemoveSetting
Removes a setting from the local settings.

```javascript
API.removeSetting(string name);
```
### Usage example(s)
```javascript

API.removeSetting("test");

```


## RemoveWaypoint
Removes the current waypoint.

```javascript
API.removeWaypoint();
```
### Usage example(s)
```javascript

API.onPlayerExitVehicle.connect(function(veh) {
  API.removeWaypoint();
});

```


## RenderScaleform
Client-side !> **TODO: ** Add Function Description!

```javascript
API.renderScaleform(Scaleform sc, double x, double y, double w, double h);
```
### Usage example(s)
```javascript
API.renderScaleform(Scaleform sc, double x, double y, double w, double h);
```


## RequestControlOfPlayer
'''See also:''' [StopControlOfPlayer](API_Client.md?id=stopcontrolofplayer)
Stops updating / syncing that players actions.

```javascript
API.requestControlOfPlayer(LocalHandle player);
```
### Usage example(s)
```javascript
API.requestControlOfPlayer(LocalHandle player);
```


## RequestScaleform
Client-side !> **TODO: ** Add Function Description!

```javascript
API.requestScaleform(string scaleformName);
```
### Usage example(s)
```javascript
API.requestScaleform(string scaleformName);
```


## ResetPlayerMovementClipset
'''See also:''' [SetPlayerMovementClipset](API_Client.md?id=setplayermovementclipset)
Resets the Movement Clipset for the specified player.

```javascript
API.resetPlayerMovementClipset(LocalHandle player);
```
### Usage example(s)
```javascript
API.resetPlayerMovementClipset(LocalHandle player);
```



## ResetPlayerVisualDamage
'''See also:''' [ApplyPlayerDamagePack](API_Client.md?id=applyplayerdamagepack)
Reset the current visual player damage.

```javascript
API.resetPlayerVisualDamage(LocalHandle player);
```
### Usage example(s)
```javascript
API.resetPlayerVisualDamage(LocalHandle player);
```



## ResetTime
Client-side !> **TODO: ** Add Function Description!

```javascript
API.resetTime();
```
### Usage example(s)
```javascript
API.resetTime();
```


## ResetWeather
This function resets the weather on the server.

```javascript
API.resetWeather();
```
### Usage example(s)
```javascript
API.resetWeather();
```


## ResourceCall
resourceCall allows you to invoke methods in your clientside script from a CEF browser.
This is done by calling resourceCall from the JavaScript code that you load into the browser, and making a function in your client code that it can call.<br>
See examples below.

```javascript
resourceCall(String functionName, params object[] arguments);
```
### Usage example(s)
<syntaxhighlight lang="HTML">
<!-- code in .html page, or .js file -->
<script>
document.getElementById("loginbutton").onclick = function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  resourceCall("Login", username, password);
};
</script>

```

```javascript

// Client-side .js script
function login(username, password) {
    // ...
}

```


## ResourceEval
Client-side !> **TODO: ** Add Function Description!

```javascript
resourceEval(string code);
```
### Usage example(s)
```javascript
resourceEval(string code);
```


## ResumeAudio
Client-side !> **TODO: ** Add Function Description!

```javascript
API.resumeAudio();
```
### Usage example(s)
```javascript
API.resumeAudio();
```


## ReturnNative
Client-side !> **TODO: ** Add Function Description!

```javascript
API.returnNative(string hash, int returnType, Object[] args);
```
### Usage example(s)
{{inJS|
```javascript

const player = API.getLocalPlayer()
const currentWeapon = API.getPlayerCurrentWeapon()
var ammo = API.returnNative('GET_AMMO_IN_PED_WEAPON', 0, player, currentWeapon)

API.sendChatMessage('Ammo: ' + ammo)

```
}}


## ScreenToWorld
Client-side !> **TODO: ** Add Function Description!

```javascript
API.screenToWorld(PointF pos);
```
### Usage example(s)
```javascript
   API.screenToWorld(pos);
```


## ScreenToWorldMaintainRatio
Client-side !> **TODO: ** Add Function Description!

```javascript
API.screenToWorldMaintainRatio(PointF pos);
```
### Usage example(s)
```javascript
API.screenToWorldMaintainRatio(pos);
```


## SendChatMessage
Sends a chat message.

```javascript
API.sendChatMessage(string text);
```
### Usage example(s)
```javascript
API.sendChatMessage(text);
```


## SendNotification
Sends a notification

```javascript
API.sendNotification(string text);
```
### Usage example(s)
```javascript
API.sendNotification(string text);
```


## SendPictureNotification
Shows a picture notification for the local player.

```javascript
API.sendPictureNotification(string body, string pic, int flash, int iconType, string sender, string subject);
```
### Usage example(s)
```javascript
API.sendPictureNotification(string body, string pic, int flash, int iconType, string sender, string subject);
```


## SetActiveCamera
This method allows you to enable or disable the camera.

```javascript
API.setActiveCamera(GlobalCamera camera);
```
### Usage example(s)

```javascript
let player = API.getLocalPlayer();
let playerPos = API.getEntityPosition(player);
let playerRot = API.getEntityRotation(player);

let newCamera = API.createCamera(playerPos, playerRot);
API.setActiveCamera(newCamera);
```
If you want to reset the camera, use function below:
```javascript
API.setActiveCamera(null);
```


## SetAudioTime
Client-side !> **TODO: ** Add Function Description!
{{Warning| This API function has been disabled. It will be available in a later update}}

```javascript
API.setAudioTime(double seconds);
```
### Usage example(s)
```javascript
API.setAudioTime(double seconds);
```


## SetAudioVolume
Sets the game volume.

```javascript
API.setAudioVolume(double vol);
```
### Usage example(s)
```javascript
API.setAudioVolume(double vol);
```


## SetBarTimerBarBackgroundColor
Changes the background color of a Bar Timer Bar.

```javascript
void API.setBarTimerBarBackgroundColor(BarTimerBar timerBar, int r, int g, int b, int a);
```
### Usage example(s)
```javascript
API.setBarTimerBarBackgroundColor(BarTimerBar timerBar, int r, int g, int b, int a);
```



## SetBarTimerBarColor
Changes the color of a Bar Timer Bar.

```javascript
void API.setBarTimerBarColor(BarTimerBar timerBar, int r, int g, int b, int a);
```
### Usage example(s)
```javascript
API.setBarTimerBarColor(BarTimerBar timerBar, int r, int g, int b, int a);
```



## SetBarTimerPercentage
Changes the progress percentage of a Bar Timer.

```javascript
void API.setBarTimerPercentage(BarTimerBar timerBar, float percentage);
```
### Usage example(s)
```javascript
API.setBarTimerPercentage(BarTimerBar timerBar, float percentage);
```



## SetCameraFov
Client-side !> **TODO: ** Add Function Description!

```javascript
API.setCameraFov(GlobalCamera cam, float fov);
```
### Usage example(s)
```javascript
API.setCameraFov(GlobalCamera cam, float fov);
```


## SetCameraPosition
Sets the camera position.

```javascript
API.setCameraPosition(GlobalCamera cam, Vector3 pos);
```
### Usage example(s)
```javascript
API.setCameraPosition(GlobalCamera cam, Vector3 pos);
```


## SetCameraRotation
Sets the camera rotation.

```javascript
API.setCameraRotation(GlobalCamera cam, Vector3 rotation);
```
### Usage example(s)
```javascript
API.setCameraRotation(GlobalCamera cam, Vector3 rotation);
```


## SetCameraShake
Sets the camera to shaking. Use '''[StopCameraShake](API_Client.md?id=stopcamerashake)''' to stop the shaking.

```javascript
API.setCameraShake(GlobalCamera cam, string shakeType, float amplitute);
```
### Usage example(s)
```javascript
API.setCameraShake(GlobalCamera cam, string shakeType, float amplitute);
```


## SetCanOpenChat
This function, when set to false, will disallow a player to open the GT-MP chatbox, basically disabling the key "T" for its purpose. In order to allow the player to chat again you have to set it to true at some point in the script.

```javascript
API.setCanOpenChat(bool show);
```
### Usage example(s)
Disables the player to speak.
```javascript
API.setCanOpenChat(false);
```


## SetCefBrowserFocus
Sets a Cef Browsers Focus.

```javascript
API.setCefBrowserFocus(Browser browser, bool focus);
```
### Usage example(s)
```javascript
API.setCefBrowserFocus(Browser browser, bool focus);
```



## SetCefBrowserHeadless
Setting the browser to headless will stop rendering the CEF.

```javascript
API.setCefBrowserHeadless(Browser browser, bool headless);
```
### Usage example(s)
```javascript
API.setCefBrowserHeadless(Browser browser, bool headless);
```


## SetCefBrowserPosition
Client-side !> **TODO: ** Add Function Description!

```javascript
API.setCefBrowserPosition(Browser browser, double xPos, double yPos);
```
### Usage example(s)
```javascript

// Create a browser that fills the players screen
var mainBrowser = null;
var res = API.getScreenResolution();

mainBrowser = API.createCefBrowser(res.Width, res.Height, false);
API.waitUntilCefBrowserInit(mainBrowser);
API.setCefBrowserPosition(mainBrowser, 0, 0);
API.loadPageCefBrowser(mainBrowser, "www.google.co.uk");
API.showCursor(true);
```


## SetCefBrowserSize
Method allows resizing CefBrowser's size.

```javascript
API.setCefBrowserSize(Browser browser, double width, double height);
```
### Usage example(s)
```javascript
API.setCefBrowserSize(browser, width, height);
```


## SetCefDrawState
cefDrawState is just whether CEF should be drawn for the player or not
if state = false, CEF won't be drawn

```javascript
API.setCefDrawState(bool state);
```
### Usage example(s)
```javascript
API.setCefDrawState(bool state);
```



## SetCefFramerate
Sets the FPS of a CEF Browser.

?> *Note:* undefined(Everything below or above that Range will be set to 1 or 60)

```javascript
API.setCefFramerate(Browser browser, int fps);
```
### Usage example(s)
```javascript
API.setCefFramerate(Browser browser, int fps);
```



## SetChatVisible
Turns the chat on or off.

```javascript
API.setChatVisible(bool display);
```
### Usage example(s)
```javascript
API.setChatVisible(bool display);
```


## SetCloudHatOpacity
'''See also:''' [ClearCloudHat](API_Client.md?id=clearcloudhat), [SetCloudHatTransition](API_Client.md?id=setcloudhattransition), [GetCloudHatOpacity](API_Client.md?id=getcloudhatopacity)
Sets the cloud cover opacity.

```javascript
API.setCloudHatOpacity(float opacity);
```
### Usage example(s)
```javascript
API.setCloudHatOpacity(float opacity);
```



## SetCloudHatTransition
'''See also:''' [ClearCloudHat](API_Client.md?id=clearcloudhat), [SetCloudHatOpacity](API_Client.md?id=setcloudhatopacity), [GetCloudHatOpacity](API_Client.md?id=getcloudhatopacity)
Change the cloud cover to the specified type in the specified time.
'''Type list'''
     Cloudy 01
     RAIN
     horizonband1
     horizonband2
     Puffs
     Wispy
     Horizon
     Stormy 01
     Clear 01
     Snowy 01
     Contrails
     altostratus
     Nimbus
     Cirrus
     cirrocumulus
     stratoscumulus
     horizonband3
     Stripey
     horsey
     shower

```javascript
API.setCloudHatTransition(string type, float transitionTime);
```
### Usage example(s)
```javascript
API.setCloudHatTransition(string type, float transitionTime);
```



## SetEntityQuaternion
Sets the Quaternion of an Entity.

```javascript
API.setEntityQuaternion(LocalHandle entity, float x, float y, float z, float w);
```
### Usage example(s)
```javascript
API.setEntityQuaternion(LocalHandle entity, float x, float y, float z, float w);
```



## SetEntityVelocity
Sets the velocity of an entity

```javascript
API.setEntityVelocity(LocalHandle entity, Vector3 velocity);
```
### Usage example(s)
```javascript
API.setEntityVelocity(LocalHandle entity, Vector3 velocity);
```


## SetFingerPointing
Sets if the current player points with the finger.

```javascript
API.setFingerPointing(bool enabled);
```
### Usage example(s)
```javascript
API.setFingerPointing(bool enabled);
```


## SetGameplayCameraActive
Client-side !> **TODO: ** Add Function Description!

```javascript
API.setGameplayCameraActive();
```
### Usage example(s)
```javascript
API.setGameplayCameraActive();
```


## SetGameplayCameraShake
'''See also:''' [StopGameplayCameraShake](API_Client.md?id=stopgameplaycamerashake), [IsGameplayCameraShaking](API_Client.md?id=isgameplaycamerashaking)
Sets the camera shake type and amplitude for the local player.
'''Camera Shake Type List'''
  HAND_SHAKE
  SMALL_EXPLOSION_SHAKE
  MEDIUM_EXPLOSION_SHAKE
  LARGE_EXPLOSION_SHAKE
  JOLT_SHAKE
  VIBRATE_SHAKE
  ROAD_VIBRATION_SHAKE
  DRUNK_SHAKE
  SKY_DIVING_SHAKE
  FAMILY5_DRUG_TRIP_SHAKE
  DEATH_FAIL_IN_EFFECT_SHAKE

```javascript
API.setGameplayCameraShake(string shakeType, double amplitute);
```
### Usage example(s)
```javascript
API.setGameplayCameraShake(string shakeType, double amplitute);
```



## SetHudVisible
Sets the HUD visible / invisible.

```javascript
API.setHudVisible(bool visible);
```
### Usage example(s)
```javascript
API.setHudVisible(bool visible);
```


## SetInteriorPropColor
Colors certain props of an interior into a specific color

```javascript
API.setInteriorPropColor(int interiorId, string prop, int colorId);
```
### Usage example(s)
API's to color the hangar red.
```javascript

API.setInteriorPropColor(260353, "set_tint_shell", 49);
API.setInteriorPropColor(260353, "set_bedroom_tint", 49);
API.setInteriorPropColor(260353, "set_crane_tint", 49);
API.setInteriorPropColor(260353, "set_modarea", 49);
API.setInteriorPropColor(260353, "set_lighting_tint_props", 49);

```


## SetMaxHealth
Sets the maximum health the the local player. Default maximum health is 200.

```javascript
API.setMaxHealth(int maxHealth);
```
### Usage example(s)
```javascript
API.setMaxHealth(int maxHealth);
```


## SetMenuBannerRectangle
Client-side !> **TODO: ** Add Function Description!

```javascript
API.setMenuBannerRectangle(UIMenu menu, int alpha, int red, int green, int blue);
```
### Usage example(s)
```javascript
API.setMenuBannerRectangle(UIMenu menu, int alpha, int red, int green, int blue);
```


## SetMenuBannerSprite
Method allows changing the Banner Sprite (logo background) of a Menu.

```javascript
API.setMenuBannerSprite(UIMenu menu, string spritedict, string spritename);
```
### Usage example(s)
```javascript
API.setMenuBannerSprite(myMenu, spritedict, spritename);
```


## SetMenuBannerTexture
Client-side !> **TODO: ** Add Function Description!

```javascript
API.setMenuBannerTexture(UIMenu menu, string path);
```
### Usage example(s)
```javascript
API.setMenuBannerTexture(UIMenu menu, string path);
```


## SetMenuSubtitle
Sets a description to a menu item. 
Text shows up at the bottom of the menu when hovering on an item.

```javascript
API.setMenuSubtitle(UIMenu menu, string text);
```
### Usage example(s)

```javascript
API.setMenuSubtitle(UIMenu menu, string text);
```


## SetMenuTitle
Sets the menu title.

```javascript
API.setMenuTitle(UIMenu menu, string title);
```
### Usage example(s)
```javascript
API.setMenuTitle(UIMenu menu, string title);
```


## SetMusicTime
Client-side !> **TODO: ** Add Function Description!

```javascript
API.setMusicTime(double time);
```
### Usage example(s)
```javascript
API.setMusicTime();
```


## SetMusicVolume
Client-side !> **TODO: ** Add Function Description!

```javascript
API.setMusicVolume(double volume);
```
### Usage example(s)
```javascript
API.setMusicVolume();
```


## SetNextWeather
Sets the next weather for later transitioning.

```javascript
void API.setNextWeather(int weather);
```
### Usage example(s)
```javascript
API.setNextWeather(6); //sets the next weather to rain
```




## SetPedCanRagdoll
'''See also:''' [GetPedCanRagdoll](API_Client.md?id=getpedcanragdoll), [SetPedToRagdoll](API_Client.md?id=setpedtoragdoll), [CancelPedRagdoll](API_Client.md?id=cancelpedragdoll), [isPlayerRagdoll](API_Client.md?id=isplayerragdoll)
Enables or disables Ragdoll for the local player.

```javascript
API.setPedCanRagdoll(bool canRagdoll);
```
### Usage example(s)
```javascript
API.setPedCanRagdoll(bool canRagdoll);
```



## SetPedToRagdoll
'''See also:''' [GetPedCanRagdoll](API_Client.md?id=getpedcanragdoll), [SetPedCanRagdoll](API_Client.md?id=setpedcanragdoll), [CancelPedRagdoll](API_Client.md?id=cancelpedragdoll), [isPlayerRagdoll](API_Client.md?id=isplayerragdoll)
Sets the Ragdoll type for the local player for a specific time period. (duration in milliseconds)
'''ragdollTypes'''
*''0 : Normal ragdoll''
*''1 : Falls with stiff legs/body''
*''2 : Narrow leg stumble(may not fall)''
*''3 : Wide leg stumble(may not fall)''

```javascript
API.setPedToRagdoll(int duration = -1, int ragdollType = 0);
```
### Usage example(s)
```javascript
API.setPedToRagdoll(int duration, int ragdollType);
```



## SetPlayerBeard
Sets the beard of a specified player with custom attributes.

```javascript
API.setPlayerBeard(LocalHandle player, int id, int colorId, float opacity);
```
### Usage example(s)
```javascript
API.setPlayerBeard(LocalHandle player, int id, int colorId, float opacity);
```


## SetPlayerChestHair
Sets the chesthair of a specified player with custom attributes.

```javascript
API.setPlayerChestHair(LocalHandle player, int id, int colorId, float opacity);
```
### Usage example(s)
```javascript
API.setPlayerChestHair(LocalHandle player, int id, int colorId, float opacity);
```


## SetPlayerComponentVariation
Sets the component-variation of a specified player.
''This is an alias for [setPlayerClothes]()''.

```javascript
API.setPlayerComponentVariation(LocalHandle player, int componentId, int drawableId, int textureId);
```
### Usage example(s)
```javascript
API.setPlayerComponentVariation(LocalHandle player, int componentId, int drawableId, int textureId);
```


## SetPlayerEyeColor
Sets the eyecolor of the specified player.

```javascript
API.setPlayerEyeColor(LocalHandle player, int index);
```
### Usage example(s)
```javascript

API.setPlayerEyeColor(LocalHandle player, int index);

```


## SetPlayerEyebrows
Sets the eyebrows of a specified player with custom attributes.

```javascript
API.setPlayerEyebrows(LocalHandle player, int id, int colorId, float opacity);
```
### Usage example(s)
```javascript
API.setPlayerEyebrows(LocalHandle player, int id, int colorId, float opacity);
```


## SetPlayerFaceFeature
Sets a face feature of a given index and scale for a specified player.

```javascript
API.setPlayerFaceFeature(LocalHandle player, int index, float scale);
```
### Usage example(s)
```javascript
API.setPlayerFaceFeature(LocalHandle player, int index, float scale);
```


## SetPlayerFacePaint
Sets the facepaint of a specified player with custom attributes.

```javascript
API.setPlayerFacePaint(LocalHandle player, int id, float opacity);
```
### Usage example(s)
```javascript
API.setPlayerFacePaint(LocalHandle player, int id, float opacity);
```


## SetPlayerFacialDecoration
Sets the facial decoration of a specified player with custom attributes.

```javascript
API.setPlayerFacialDecoration(LocalHandle player, string collection, string overlay);
```
### Usage example(s)
```javascript
API.setPlayerFacialDecoration(LocalHandle player, string collection, string overlay);
```
```javascript
API.setPlayerFacialDecoration(LocalHandle player, int collection, int overlay);
```


## SetPlayerFacialIdleAnimOverride
Overrides the facial idle animation to a specific animation.

```javascript
API.setPlayerFacialIdleAnimOverride(LocalHandle player, string animName);
```
### Usage example(s)
```javascript
API.setPlayerFacialIdleAnimOverride(LocalHandle player, string animName);
```


## SetPlayerHairColor
Sets the haircolor of a specified player.

?> *Note:* The API function [SetPlayerHeadBlendData](API_Client.md?id=setplayerheadblenddata) has to be called before this function, otherwise the hair color will be default green.

```javascript
API.setPlayerHairColor(LocalHandle player, int hairColorId, int hairHighlightId);
```
### Usage example(s)
```javascript
API.setPlayerHairColor(LocalHandle player, int hairColorId, int hairHighlightId);
```


## SetPlayerHairStyle
Sets the hairstyle of a specified player with custom attributes.

```javascript
API.setPlayerHairStyle(LocalHandle player, int id, int colorId, int highlightId, string collection, string overlay);
```
### Usage example(s)
```javascript
API.setPlayerHairStyle(LocalHandle player, int id, int colorId, int highlightId, string collection, string overlay);
```


## SetPlayerHeadBlendData
Models the head of a player with given attributes.

?> *Note:* This function only works with the pedmodels '''FreemodeFemale01''' and '''FreemodeMale01'''!

```javascript
API.setPlayerHeadBlendData(LocalHandle player, int shapeFirstId, int shapeSecondId, int shapeThirdId, int skinFirstId, int skinSecondId, int skinThirdId, float shapeMix, float skinMix, float thirdMix, bool isParent);
```
!> **TODO: ** Add usage example!
## SetPlayerHeadOverlay
Sets a HeadOverlay of the player.

```javascript
void API.setPlayerHeadOverlay(LocalHandle player, int overlayId, int partIndex, float opacity);
```
### Usage example(s)
```javascript
API.setPlayerHeadOverlay(LocalHandle player, int overlayId, int partIndex, float opacity);
```



## SetPlayerHeadOverlayColor
Sets the headoverlay color of the specified player.

```javascript
API.setPlayerHeadOverlayColor(LocalHandle player, int overlayId, int colorType, int colorId, float opacity);
```
### Usage example(s)
```javascript

API.setPlayerHeadOverlayColor(LocalHandle player, int overlayId, int colorType, int colorId, float opacity);

```


## SetPlayerInvincible
Sets the player invincible / vincible.

```javascript
API.setPlayerInvincible(bool invinc);
```
### Usage example(s)
```javascript
API.setPlayerInvincible(bool invinc);
```


## SetPlayerIsDrunk
Sets the drunkenness status for the specified player.

```javascript
API.setPlayerIsDrunk(LocalHandle player, bool isDrunk);
```
### Usage example(s)
```javascript
API.setPlayerIsDrunk(LocalHandle player, bool isDrunk);
```



## SetPlayerMovementClipset
'''See also:''' [ResetPlayerMovementClipset](API_Client.md?id=resetplayermovementclipset)
Sets the Movement Clipset for the specified player.

```javascript
API.setPlayerMovementClipset(LocalHandle player, string animSet, float speed);
```
### Usage example(s)
```javascript
API.setPlayerMovementClipset(LocalHandle player, string animSet, float speed);
```



## SetPlayerWeaponAnimationOverride
Overrides the weapon animation style for a specific player.

```javascript
API.setPlayerWeaponAnimationOverride(LocalHandle player, string animStyle);
```
### Usage example(s)
```javascript
API.setPlayerWeaponAnimationOverride(LocalHandle player, string animStyle);
```


## SetRadarZoom
Sets the minimap zoom level (Accepts values from 0 to 200)

```javascript
API.setRadarZoom(int zoom);
```
### Usage example(s)
```javascript
API.setRadarZoom(int zoom);
```



## SetShowWastedScreenOnDeath
Sets if the wasted-screen should be shown on player death.
'''See also:''' [getShowWastedScreenOnDeath](API_Client.md?id=getshowwastedscreenondeath)

```javascript
API.setShowWastedScreenOnDeath(bool toggle);
```
### Usage example(s)
Disable wasted-screen on the current client.
```javascript

API.setShowWastedScreenOnDeath(false);

```


## SetSnowEnabled
Enables snow for a player

```javascript
API.setSnowEnabled(bool toggle, bool deepPedTracks, bool deepVehicleTracks, bool infoSubtitle = true);
```
### Usage example(s)
```javascript
API.setSnowEnabled(true, true, true, true);
```


## SetTextTimerBarText
Sets the timerbar text of a specified timer bar.

```javascript
API.setTextTimerBarText(TextTimerBar timerBar, string text);
```
### Usage example(s)
```javascript
API.setTextTimerBarText(TextTimerBar timerBar, string text);
```


## SetUiColor
Sets the UI color.

```javascript
API.setUiColor(int r, int g, int b);
```
### Usage example(s)
```javascript
API.setUiColor(int r, int g, int b);
```


## SetVehicleLightsMode
Sets the Lights Mode of the specified Vehicle with the specified mode.
'''Mode determines how vehicle lights behave when toggled.'''
        0 = Default (Lights can be toggled between off, normal and high beams)
        1 = Lights Disabled (Lights are fully disabled, cannot be toggled)
        2 = Always On (Lights can be toggled between normal and high beams)

```javascript
API.setVehicleLightsMode(LocalHandle vehicle, int mode);
```
### Usage example(s)
```javascript
API.setVehicleLightsMode(LocalHandle vehicle, int mode);
```



## SetWaypoint
Adds a waypoint to your minimap and main map.

```javascript
API.setWaypoint(double xPos, double yPos);
```
### Usage example(s)
```javascript

API.onPlayerEnterVehicle.connect(function(veh) {
    API.setWaypoint(446.7313, -987.0479);
});

```


## SetWeatherTransitionType
Sets a transition type for a weather.

```javascript
void API.setWeatherTransitionType(float weatherTransitionType);
```
### Usage example(s)
```javascript

API.setWeather(1); //set the current weather to clear day
API.setNextWeather(6); //set next weather to rain
API.setWeatherTransitionType(0.5f); //set the transition to half clear and half rainny

```




## ShowBlipRoute

```javascript
API.showBlipRoute(LocalHandle blip, bool show);
```
### Usage example(s)
```javascript
API.showBlipRoute(LocalHandle blip, bool show);
```


## ShowColorShard
Creates an image overlay which displays text. Allows you to adjust the color, background color, and a timeout.

```javascript
API.showColorShard(string title, string description, int bgColor, int titleColor, int timeout);
```
### Usage example(s)
```javascript
API.showColorShard("Mission Failed", "Good luck on the next one.", 2, 10, 3000);
```

[[File:showColorShard.jpg|500px|A color shard that shows "Mission Complete"]]

==Shard Color(s)==
```javascript

        HUD_COLOUR_PURE_WHITE = 0,
        HUD_COLOUR_WHITE = 1,
        HUD_COLOUR_BLACK = 2,
        HUD_COLOUR_GREY = 3,
        HUD_COLOUR_GREYLIGHT = 4,
        HUD_COLOUR_GREYDARK = 5,
        HUD_COLOUR_RED = 6,
        HUD_COLOUR_REDLIGHT = 7,
        HUD_COLOUR_REDDARK = 8,
        HUD_COLOUR_BLUE = 9,
        HUD_COLOUR_BLUELIGHT = 10,
        HUD_COLOUR_BLUEDARK = 11,
        HUD_COLOUR_YELLOW = 12,
        HUD_COLOUR_YELLOWLIGHT = 13,
        HUD_COLOUR_YELLOWDARK = 14,
        HUD_COLOUR_ORANGE = 15,
        HUD_COLOUR_ORANGELIGHT = 16,
        HUD_COLOUR_ORANGEDARK = 17,
        HUD_COLOUR_GREEN = 18,
        HUD_COLOUR_GREENLIGHT = 19,
        HUD_COLOUR_GREENDARK = 20,
        HUD_COLOUR_PURPLE = 21,
        HUD_COLOUR_PURPLELIGHT = 22,
        HUD_COLOUR_PURPLEDARK = 23,
        HUD_COLOUR_PINK = 24,
        HUD_COLOUR_RADAR_HEALTH = 25,
        HUD_COLOUR_RADAR_ARMOUR = 26,
        HUD_COLOUR_RADAR_DAMAGE = 27,
        HUD_COLOUR_NET_PLAYER1 = 28,
        HUD_COLOUR_NET_PLAYER2 = 29,
        HUD_COLOUR_NET_PLAYER3 = 30,
        HUD_COLOUR_NET_PLAYER4 = 31,
        HUD_COLOUR_NET_PLAYER5 = 32,
        HUD_COLOUR_NET_PLAYER6 = 33,
        HUD_COLOUR_NET_PLAYER7 = 34,
        HUD_COLOUR_NET_PLAYER8 = 35,
        HUD_COLOUR_NET_PLAYER9 = 36,
        HUD_COLOUR_NET_PLAYER10 = 37,
        HUD_COLOUR_NET_PLAYER11 = 38,
        HUD_COLOUR_NET_PLAYER12 = 39,
        HUD_COLOUR_NET_PLAYER13 = 40,
        HUD_COLOUR_NET_PLAYER14 = 41,
        HUD_COLOUR_NET_PLAYER15 = 42,
        HUD_COLOUR_NET_PLAYER16 = 43,
        HUD_COLOUR_NET_PLAYER17 = 44,
        HUD_COLOUR_NET_PLAYER18 = 45,
        HUD_COLOUR_NET_PLAYER19 = 46,
        HUD_COLOUR_NET_PLAYER20 = 47,
        HUD_COLOUR_NET_PLAYER21 = 48,
        HUD_COLOUR_NET_PLAYER22 = 49,
        HUD_COLOUR_NET_PLAYER23 = 50,
        HUD_COLOUR_NET_PLAYER24 = 51,
        HUD_COLOUR_NET_PLAYER25 = 52,
        HUD_COLOUR_NET_PLAYER26 = 53,
        HUD_COLOUR_NET_PLAYER27 = 54,
        HUD_COLOUR_NET_PLAYER28 = 55,
        HUD_COLOUR_NET_PLAYER29 = 56,
        HUD_COLOUR_NET_PLAYER30 = 57,
        HUD_COLOUR_NET_PLAYER31 = 58,
        HUD_COLOUR_NET_PLAYER32 = 59,
        HUD_COLOUR_SIMPLEBLIP_DEFAULT = 60,
        HUD_COLOUR_MENU_BLUE = 61,
        HUD_COLOUR_MENU_GREY_LIGHT = 62,
        HUD_COLOUR_MENU_BLUE_EXTRA_DARK = 63,
        HUD_COLOUR_MENU_YELLOW = 64,
        HUD_COLOUR_MENU_YELLOW_DARK = 65,
        HUD_COLOUR_MENU_GREEN = 66,
        HUD_COLOUR_MENU_GREY = 67,
        HUD_COLOUR_MENU_GREY_DARK = 68,
        HUD_COLOUR_MENU_HIGHLIGHT = 69,
        HUD_COLOUR_MENU_STANDARD = 70,
        HUD_COLOUR_MENU_DIMMED = 71,
        HUD_COLOUR_MENU_EXTRA_DIMMED = 72,
        HUD_COLOUR_BRIEF_TITLE = 73,
        HUD_COLOUR_MID_GREY_MP = 74,
        HUD_COLOUR_NET_PLAYER1_DARK = 75,
        HUD_COLOUR_NET_PLAYER2_DARK = 76,
        HUD_COLOUR_NET_PLAYER3_DARK = 77,
        HUD_COLOUR_NET_PLAYER4_DARK = 78,
        HUD_COLOUR_NET_PLAYER5_DARK = 79,
        HUD_COLOUR_NET_PLAYER6_DARK = 80,
        HUD_COLOUR_NET_PLAYER7_DARK = 81,
        HUD_COLOUR_NET_PLAYER8_DARK = 82,
        HUD_COLOUR_NET_PLAYER9_DARK = 83,
        HUD_COLOUR_NET_PLAYER10_DARK = 84,
        HUD_COLOUR_NET_PLAYER11_DARK = 85,
        HUD_COLOUR_NET_PLAYER12_DARK = 86,
        HUD_COLOUR_NET_PLAYER13_DARK = 87,
        HUD_COLOUR_NET_PLAYER14_DARK = 88,
        HUD_COLOUR_NET_PLAYER15_DARK = 89,
        HUD_COLOUR_NET_PLAYER16_DARK = 90,
        HUD_COLOUR_NET_PLAYER17_DARK = 91,
        HUD_COLOUR_NET_PLAYER18_DARK = 92,
        HUD_COLOUR_NET_PLAYER19_DARK = 93,
        HUD_COLOUR_NET_PLAYER20_DARK = 94,
        HUD_COLOUR_NET_PLAYER21_DARK = 95,
        HUD_COLOUR_NET_PLAYER22_DARK = 96,
        HUD_COLOUR_NET_PLAYER23_DARK = 97,
        HUD_COLOUR_NET_PLAYER24_DARK = 98,
        HUD_COLOUR_NET_PLAYER25_DARK = 99,
        HUD_COLOUR_NET_PLAYER26_DARK = 100,
        HUD_COLOUR_NET_PLAYER27_DARK = 101,
        HUD_COLOUR_NET_PLAYER28_DARK = 102,
        HUD_COLOUR_NET_PLAYER29_DARK = 103,
        HUD_COLOUR_NET_PLAYER30_DARK = 104,
        HUD_COLOUR_NET_PLAYER31_DARK = 105,
        HUD_COLOUR_NET_PLAYER32_DARK = 106,
        HUD_COLOUR_BRONZE = 107,
        HUD_COLOUR_SILVER = 108,
        HUD_COLOUR_GOLD = 109,
        HUD_COLOUR_PLATINUM = 110,
        HUD_COLOUR_GANG1 = 111,
        HUD_COLOUR_GANG2 = 112,
        HUD_COLOUR_GANG3 = 113,
        HUD_COLOUR_GANG4 = 114,
        HUD_COLOUR_SAME_CREW = 115,
        HUD_COLOUR_FREEMODE = 116,
        HUD_COLOUR_PAUSE_BG = 117,
        HUD_COLOUR_FRIENDLY = 118,
        HUD_COLOUR_ENEMY = 119,
        HUD_COLOUR_LOCATION = 120,
        HUD_COLOUR_PICKUP = 121,
        HUD_COLOUR_PAUSE_SINGLEPLAYER = 122,
        HUD_COLOUR_FREEMODE_DARK = 123,
        HUD_COLOUR_INACTIVE_MISSION = 124,
        HUD_COLOUR_DAMAGE = 125,
        HUD_COLOUR_PINKLIGHT = 126,
        HUD_COLOUR_PM_MITEM_HIGHLIGHT = 127,
        HUD_COLOUR_SCRIPT_VARIABLE = 128,
        HUD_COLOUR_YOGA = 129,
        HUD_COLOUR_TENNIS = 130,
        HUD_COLOUR_GOLF = 131,
        HUD_COLOUR_SHOOTING_RANGE = 132,
        HUD_COLOUR_FLIGHT_SCHOOL = 133,
        HUD_COLOUR_NORTH_BLUE = 134,
        HUD_COLOUR_SOCIAL_CLUB = 135,
        HUD_COLOUR_PLATFORM_BLUE = 136,
        HUD_COLOUR_PLATFORM_GREEN = 137,
        HUD_COLOUR_PLATFORM_GREY = 138,
        HUD_COLOUR_FACEBOOK_BLUE = 139,
        HUD_COLOUR_INGAME_BG = 140,
        HUD_COLOUR_DARTS = 141,
        HUD_COLOUR_WAYPOINT = 142,
        HUD_COLOUR_MICHAEL = 143,
        HUD_COLOUR_FRANKLIN = 144,
        HUD_COLOUR_TREVOR = 145,
        HUD_COLOUR_GOLF_P1 = 146,
        HUD_COLOUR_GOLF_P2 = 147,
        HUD_COLOUR_GOLF_P3 = 148,
        HUD_COLOUR_GOLF_P4 = 149,
        HUD_COLOUR_WAYPOINTLIGHT = 150,
        HUD_COLOUR_WAYPOINTDARK = 151,
        HUD_COLOUR_PANEL_LIGHT = 152,
        HUD_COLOUR_MICHAEL_DARK = 153,
        HUD_COLOUR_FRANKLIN_DARK = 154,
        HUD_COLOUR_TREVOR_DARK = 155,
        HUD_COLOUR_OBJECTIVE_ROUTE = 156,
        HUD_COLOUR_PAUSEMAP_TINT = 157,
        HUD_COLOUR_PAUSE_DESELECT = 158,
        HUD_COLOUR_PM_WEAPONS_PURCHASABLE = 159,
        HUD_COLOUR_PM_WEAPONS_LOCKED = 160,
        HUD_COLOUR_END_SCREEN_BG = 161,
        HUD_COLOUR_CHOP = 162,
        HUD_COLOUR_PAUSEMAP_TINT_HALF = 163,
        HUD_COLOUR_NORTH_BLUE_OFFICIAL = 164,
        HUD_COLOUR_SCRIPT_VARIABLE_2 = 165,
        HUD_COLOUR_H = 166,
        HUD_COLOUR_HDARK = 167,
        HUD_COLOUR_T = 168,
        HUD_COLOUR_TDARK = 169,
        HUD_COLOUR_HSHARD = 170,
        HUD_COLOUR_CONTROLLER_MICHAEL = 171,
        HUD_COLOUR_CONTROLLER_FRANKLIN = 172,
        HUD_COLOUR_CONTROLLER_TREVOR = 173,
        HUD_COLOUR_CONTROLLER_CHOP = 174,
        HUD_COLOUR_VIDEO_EDITOR_VIDEO = 175,
        HUD_COLOUR_VIDEO_EDITOR_AUDIO = 176,
        HUD_COLOUR_VIDEO_EDITOR_TEXT = 177,
        HUD_COLOUR_HB_BLUE = 178,
        HUD_COLOUR_HB_YELLOW = 179

```


## ShowColoredShard
Shows a colored shard
[[File:ColoredShard.jpg | thumb | 200px | left]]

```javascript
API.showColoredShard(string message, string description, int textColor, int bgColor, int time = 5000);
```
### Usage example(s)
```javascript
API.showColoredShard("Title", "Description", 1, 2, 3000);
```


## ShowCursor
Enables / disables the mouse cursor - primarily used for CEFs.

<syntaxhighlight lang="JavaScript" >
API.showCursor(bool enable);

```
### Usage example(s)
* Well, it simply enables the cursor.
<syntaxhighlight lang="JavaScript" >
API.showCursor(true);

```

* Shows the cursor while holding the tab button.
<syntaxhighlight lang="JavaScript" >
API.onKeyDown.connect(function (sender, key) {
  if (key.KeyCode === Keys.Tab) {
    API.showCursor(true)
  }
})

API.onKeyUp.connect(function (sender, key) {
  if (key.KeyCode === Keys.Tab) {
    API.showCursor(false)
  }
})

```


## ShowCustomShard
Shows a custom shard
[[File:CustomShard.jpg | thumb | 200px | left]]

```javascript
API.showCustomShard(string funcName, params object[] parameters);
```
### Usage example(s)
```javascript
API.showCustomShard(string funcName, params object[] parameters);
```


## ShowHudComponentThisFrame
'''See also:''' [IsHudComponentActive](API_Client.md?id=ishudcomponentactive), [HideHudComponentThisFrame](API_Client.md?id=hidehudcomponentthisframe)
Shows the specified hud component for this Frame.

```javascript
API.showHudComponentThisFrame(int componentId);
```
### Usage example(s)
```javascript
API.showHudComponentThisFrame(int componentId);
```



## ShowLoadingPrompt
'''See also:''' [HideLoadingPrompt](API_Client.md?id=hideloadingprompt), [IsLoadingPromptActive](API_Client.md?id=isloadingpromptactive)
Shows a Loading Prompt with the defined Text and Spinner type.

```javascript
API.showLoadingPrompt(string loadingText, int busySpinnerType);
```
### Usage example(s)
```javascript
API.showLoadingPrompt(string loadingText, int busySpinnerType);
```



## ShowMissionPassedMessage
Shows a mission passed message
[[File:MissionPassedMessage.jpg | thumb | 200px | left]]

```javascript
API.showMissionPassedMessage(string message, int time = 5000);
```
### Usage example(s)
```javascript
API.showMissionPassedMessage("MISSION COMPLETED", 3000);
```


## ShowMpMessageLarge
Shows a mp message large
[[File:MpMessageLarge.jpg | thumb | 200px | left]]

```javascript
API.showMpMessageLarge(string message, int time = 5000);
```
### Usage example(s)
```javascript
API.showMpMessageLarge("Message Large", 3000);
```


## ShowOldMessage
Shows a old message
[[File:OldMessage.jpg | thumb | 200px | left]]

```javascript
API.showOldMessage(string message, int time = 5000);
```
### Usage example(s)
```javascript
API.showOldMessage("MISSION COMPLETED", 3000);
```


## ShowRankupMessage
Shows a rankup message
[[File:RankUpMessage.jpg | thumb | 200px | left]]

```javascript
API.showRankupMessage(string message, string subtitle, int rank, int time = 5000);
```
### Usage example(s)
```javascript
API.showRankupMessage("Title", "Subtitle", 1337, 3000);
```


## ShowShard
Client-side !> **TODO: ** Add Function Description!

```javascript
API.showShard(string text);
```
### Usage example(s)
```javascript
API.showShard(text, 3000);
```


## ShowWeaponPurchasedMessage
Shows a weapon purchased message
[[File:WeaponPurchasedMessage.jpg | thumb | 200px | left]]

```javascript
API.showWeaponPurchasedMessage(string bigMessage, string weaponName, int weapon, int time = 5000);
```
### Usage example(s)
```javascript
API.showWeaponPurchasedMessage("WeaponPurchasedMessage", "Weapon Name", -270015777, 5000);
```


## StartAlarm
'''See also:''' [StopAllAlarms](API_Client.md?id=stopallalarms), [IsAlarmPlaying](API_Client.md?id=isalarmplaying), [StopAlarm](API_Client.md?id=stopalarm)
Starts the specified Alarm.
'''Alarm List'''
 AGENCY_HEIST_FIB_TOWER_ALARMS
 AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER
 AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B
 BIG_SCORE_HEIST_VAULT_ALARMS
 FBI_01_MORGUE_ALARMS
 FIB_05_BIOTECH_LAB_ALARMS
 JEWEL_STORE_HEIST_ALARMS
 PALETO_BAY_SCORE_ALARM
 PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM 
 PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS
 PORT_OF_LS_HEIST_SHIP_ALARMS
 PRISON_ALARMS
 PROLOGUE_VAULT_ALARMS

```javascript
API.startAlarm(string alarmName);
```
### Usage example(s)
```javascript
API.startAlarm(string alarmName);
```



## StartAudio
Plays a specific audio file. Use '''[StopAudio](API_Client.md?id=stopaudio)''' to stop playing a specific audio file

```javascript
API.startAudio(string path, bool looped, void play());
```
### Usage example(s)
```javascript
API.startAudio();
```


## StartCoroutine
Used to start a coroutine.

```javascript
API.startCoroutine(any target);
```
### Usage example(s)
```javascript
// Example by Guad

function* myCoroutine()
{
    while (true) // or whatever? 
    {
        // do something every interval
        yield 5000; // the interval, wait 5 secs
    }
}
```


## StartMusic
Client-side !> **TODO: ** Add Function Description!

```javascript
API.startMusic(string path, bool looped);
```
### Usage example(s)
```javascript
API.startMusic();
```


## Stop
Stops or aborts a given timer.
'''See also:''' [after](API_Client.md?id=after), [every](API_Client.md?id=every)

```javascript
API.stop(uint id);
```
### Usage example(s)
Create two timers and abort the first one, so the expected output should be ''noParamsRepeat Called'' every second.
```javascript

API.onResourceStart.connect(function() {
    var firstTimer = API.after(5000, "noParams");
    var secondTimer = API.every(1000, "noParamsRepeat");

    API.stop(firstTimer); // Abort firstTimer directly.
});

function noParams() {
    API.sendChatMessage("noParams Called");
}

function noParamsRepeat() {
    API.sendChatMessage("noParamsRepeat Called");
}

```

## StopAlarm
'''See also:''' [StopAllAlarms](API_Client.md?id=stopallalarms), [StartAlarm](API_Client.md?id=startalarm), [IsAlarmPlaying](API_Client.md?id=isalarmplaying)
Stops the specified Alarm.
'''Alarm List'''
 AGENCY_HEIST_FIB_TOWER_ALARMS
 AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER
 AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B
 BIG_SCORE_HEIST_VAULT_ALARMS
 FBI_01_MORGUE_ALARMS
 FIB_05_BIOTECH_LAB_ALARMS
 JEWEL_STORE_HEIST_ALARMS
 PALETO_BAY_SCORE_ALARM
 PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM 
 PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS
 PORT_OF_LS_HEIST_SHIP_ALARMS
 PRISON_ALARMS
 PROLOGUE_VAULT_ALARMS

```javascript
API.stopAlarm(string alarmName);
```
### Usage example(s)
```javascript
API.stopAlarm(string alarmName);
```



## StopAllAlarms
'''See also:''' [IsAlarmPlaying](API_Client.md?id=isalarmplaying), [StartAlarm](API_Client.md?id=startalarm), [StopAlarm](API_Client.md?id=stopalarm)
Stops all running Alarms.

```javascript
API.stopAllAlarms();
```
### Usage example(s)
```javascript
API.stopAllAlarms();
```



## StopAllScreenEffects

```javascript
API.stopAllScreenEffects();
```
### Usage example(s)
```javascript
API.stopAllScreenEffects();
```


## StopAudio
Stops a specific audio file. To play an audio file, use '''[StartAudio](API_Client.md?id=startaudio)'''.

```javascript
API.stopAudio(void play());
```
### Usage example(s)
```javascript
API.stopAudio();
```


## StopCameraPointing
Client-side !> **TODO: ** Add Function Description!

```javascript
API.stopCameraPointing(GlobalCamera cam);
```
### Usage example(s)
```javascript
API.stopCameraPointing(GlobalCamera cam);
```


## StopCameraShake
Stops the camera shaking. Use '''[SetCameraShake](API_Client.md?id=setcamerashake)''' to start the shaking.

```javascript
API.stopCameraShake(GlobalCamera cam);
```
### Usage example(s)
```javascript
API.stopCameraShake(GlobalCamera cam);
```


## StopControlOfPlayer
'''See also:''' [RequestControlOfPlayer](API_Client.md?id=requestcontrolofplayer)
Starts updating / syncing that players actions.

```javascript
API.stopControlOfPlayer(LocalHandle player);
```
### Usage example(s)
```javascript
API.stopControlOfPlayer(LocalHandle player);
```


## StopGameplayCameraShake
'''See also:''' [SetGameplayCameraShake](API_Client.md?id=setgameplaycamerashake), [IsGameplayCameraShaking](API_Client.md?id=isgameplaycamerashaking)
Stops the camera shake for the local player.

```javascript
API.stopGameplayCameraShake();
```
### Usage example(s)
```javascript
API.stopGameplayCameraShake();
```



## StopMusic
Client-side !> **TODO: ** Add Function Description!

```javascript
API.stopMusic();
```
### Usage example(s)
```javascript
API.stopMusic();
```


## StopScreenEffect

```javascript
API.stopScreenEffect(string effectName);
```
### Usage example(s)
```javascript
API.stopScreenEffect(string effectName);
```


## ToFloat
Client-side !> **TODO: ** Add Function Description!

```javascript
API.toFloat(double d);
```
### Usage example(s)
```javascript
API.toFloat(double d);
```


## ToString
Client-side !> **TODO: ** Add Function Description!

```javascript
API.toString(Object obj);
```
### Usage example(s)
```javascript
API.toString(Object obj);
```


## ToggleAIPedsSpawning
Toggles the AI-ped spawning in the world.
{{Info|The spawned AI-peds are '''not''' synced!}}

```javascript
API.toggleAIPedsSpawning(bool active);
```
### Usage example(s)
```javascript
API.toggleAIPedsSpawning(bool active);
```


## ToggleAlternativeVersionLabelPosition
Moves the GT-MP.net version label to the lower right corner.
'''See also: ''' [getAlternativeVersionLabelPositionActive](API_Client.md?id=getalternativeversionlabelpositionactive)

```javascript
API.toggleAlternativeVersionLabelPosition(bool toggle);
```
### Usage example(s)
```javascript

API.toggleAlternativeVersionLabelPosition(true); // Sets the position of the GT-MP.net version label to the lower right corner.

```



## ToggleFirstPersonCam
Sets if the onfoot firstperson-camera should be enabled.

```javascript
API.toggleFirstPersonCam(bool enabled);
```
### Usage example(s)
Disable the usage of the onfoot firstperson-camera.
```javascript

API.toggleFirstPersonCam(false);

```


## ToggleVehicleFirstPersonCam
Sets if the vehicle firstperson-camera should be enabled.

```javascript
API.toggleVehicleFirstPersonCam(bool enabled);
```
### Usage example(s)
Disable the usage of the firstperson-camera in a vehicle
```javascript

API.toggleVehicleFirstPersonCam(false);

```


## TransitionToWeather
Starts the transition to the specified weather type.

```javascript
void API.transitionToWeather(int weather, float duration);
```
### Usage example(s)
```javascript

API.transitionToWeather(int weather, float duration);

```




## TriggerServerEvent
Triggers a server-side event from the client to the server. For the inverse method of this (server to client), see [triggerClientEvent](API_Server.md?id=triggerclientevent).
This method triggers the server-side [onClientEventTrigger](API_Server.md?id=onclienteventtrigger) event.

```javascript
API.triggerServerEvent(string eventName, Object[] arguments);
```
### Usage example(s)
```javascript
API.triggerServerEvent(string eventName, Object[] arguments);
```


## UIMenu.OnItemSelect
[[Category:Client Side Javascript]]
Handles user input in a menu. To use this event, you must have created a menu.

```javascript
yourMenuName.OnItemSelect.connect(function(sender, item, index) {...
```
### Usage example(s)
```javascript

var myCoolMenu = API.createMenu("Banner", "Test", 0, 0, 2);

// We'll add a listener for myCoolMenu
myCoolMenu.OnItemSelect.connect(function(sender, item, index) {
    API.sendChatMessage("You have selected " + item.Text + ". Index: " + index);
});

```


## UIMenuItem
undefined
!> **TODO: ** Add Syntax
!> **TODO: ** Add usage example!
## UIMenuListItem.OnListChanged
[[Category:Client Side Javascript]]
This event is triggered when a player changes the displayed option of a list item. To use this event, you must have created a list item and added it to a menu.

```javascript
yourListName.OnListChanged.connect(function(sender, new_index) {...
```
### Usage example(s)
```javascript

var menu = API.createMenu("Banner", "Test", 0, 0, 2);

var list = new List(String);
list.Add("item1");
list.Add("item2");
list.Add("item3");
var list_item = API.createListItem("Item List", "Select from a list of items", list, 0);

menu.AddItem(list_item);

// We'll add a listener for the list item
list_item.OnListChanged.connect(function(sender, new_index) {
    API.sendChatMessage("You have selected index " + new_index + " of your list item");
});

```


## UnregisterPedHeadShot
'''See also:''' [RegisterPedHeadShot](API_Client.md?id=registerpedheadshot), [GetPedHeadShotTextureString](API_Client.md?id=getpedheadshottexturestring), [IsPedHeadShotValid](API_Client.md?id=ispedheadshotvalid), [IsPedHeadShotReady](API_Client.md?id=ispedheadshotready)
Unregisters a Headshot for a Ped

```javascript
API.unregisterPedHeadShot(LocalHandle player);
```
### Usage example(s)
```javascript
API.unregisterPedHeadShot(LocalHandle player);
```



## UpdatePlayerHeadBlendData
Updates the mixture of previously set shapes and skins of a specified player.

```javascript
API.updatePlayerHeadBlendData(LocalHandle player, float shapeMix, float skinMix, float thirdMix);
```
### Usage example(s)
```javascript

API.updatePlayerHeadBlendData(LocalHandle player, float shapeMix, float skinMix, float thirdMix);

```


## VerifyIntegrityOfCache
Checks if any of the resource's files on the client have been changed. If it has, the client will disconnect from the server.

```javascript
API.verifyIntegrityOfCache();
```
### Usage example(s)
```javascript
API.verifyIntegrityOfCache();
```


## WaitUntilCefBrowserInit
Client-side !> **TODO: ** Add Function Description!

```javascript
API.waitUntilCefBrowserInit(Browser browser);
```
### Usage example(s)
```javascript
// Create a browser that fills the players screen
var mainBrowser = null;
var res = API.getScreenResolution();

mainBrowser = API.createCefBrowser(res.Width, res.Height, false);
API.waitUntilCefBrowserInit(mainBrowser);
API.setCefBrowserPosition(mainBrowser, 0, 0);
API.loadPageCefBrowser(mainBrowser, "www.google.co.uk");
API.waitUntilCefBrowserLoaded(mainBrowser);
API.showCursor(true);
```


## WaitUntilCefBrowserLoaded
Waits until the browser has loaded the page.

```javascript
API.waitUntilCefBrowserLoaded(Browser browser);
```
### Usage example(s)
```javascript

var browser = API.createCefBrowser(200, 200);
API.waitUntilCefBrowserInit(browser);
API.loadPageCefBrowser(browser, "page.html");
API.waitUntilCefBrowserLoaded(browser);
// Do something..

```


## WorldToScreen
Client-side !> **TODO: ** Add Function Description!

```javascript
API.worldToScreen(Vector3 pos);
```
### Usage example(s)
```javascript
API.worldToScreen(Vector3 pos);
```


## WorldToScreenMaintainRatio
Client-side !> **TODO: ** Add Function Description!

```javascript
API.worldToScreenMaintainRatio(Vector3 pos);
```
### Usage example(s)
```javascript
API.worldToScreenMaintainRatio(Vector3 pos);
```



