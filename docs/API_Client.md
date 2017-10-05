## AddSubMenu
Adds a sub menu into an already existing menu, this function can be overloaded.

```javascript
UIMenu API.addSubMenu(UIMenu menu, string text);
```
## AddTextElement
Adds a text element on the screen. Essentially is the same as [[DrawText]], but you don't need to draw it every frame yourself.

```javascript
API.addTextElement(string caption, double x, double y, double scale, int r, int g, int b, int a, int font, int alignment);
```
## After
Executes given function after given amount of time in milliseconds.
'''See also:''' [[every]], [[stop]]

```javascript
API.after(uint time, string functionName, Object[] arguments);
```
## AngleBetween
Client-side Function Description

```javascript
API.angleBetween(Vector3 from, Vector3 to);
```
## ApplyPlayerBlood
'''See also:''' [[ClearPlayerBloodDamage]]
Add blood to the player at the specified bone

```javascript
API.applyPlayerBlood(LocalHandle player, int boneIndex, float xRot, float yRot, float zRot, string woundType);
```
## ApplyPlayerDamagePack
'''See also:''' [[ResetPlayerVisualDamage]]
Adds a collection of violations to the player.

```javascript
API.applyPlayerDamagePack(LocalHandle player, string damagePack, float damage, float mult);
```
## AttachCameraToEntity
Client-side Function Description

```javascript
API.attachCameraToEntity(GlobalCamera cam, LocalHandle ent, Vector3 offset);
```
## AttachCameraToEntityBone
Client-side Function Description

```javascript
API.attachCameraToEntityBone(GlobalCamera cam, LocalHandle ent, int bone, Vector3 offset);
```
## AttachEntity
Client-side Function Description

```javascript
API.attachEntity(LocalHandle ent1, LocalHandle ent2, string bone, Vector3 positionOffset, Vector3 rotationOffset);
```
## BreakVehicleTyre
Breaks the tyre of a vehicle.
This Function are Renamed to [[BreakVehicleDoor]] in next Update.

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
## CallNative
Calls a native.

```javascript
API.callNative(string hash, Object[] args);
```
## CancelPedRagdoll
Cancels the current ragdoll action of the local player.
'''See also:''' [[GetPedCanRagdoll]], [[SetPedCanRagdoll]], [[SetPedToRagdoll]], [[isPlayerRagdoll]]

```javascript
API.cancelPedRagdoll();
```
## ClearCloudHat
Clears the cloud cover.
'''See also:''' [[SetCloudHatTransition]], [[SetCloudHatOpacity]], [[GetCloudHatOpacity]]

```javascript
API.clearCloudHat();
```
## ClearPlayerBloodDamage
Removes the visual blood on the player
'''See also:''' [[ApplyPlayerBlood]]

```javascript
API.clearPlayerBloodDamage(LocalHandle player);
```
## ClearPlayerDecorations
Removes all previously set decorations of a specified player.

```javascript
API.clearPlayerDecorations(LocalHandle player);
```
## ClearPlayerFacialDecorations
Removes all previously set facialdecorations of a specified player.

```javascript
API.clearPlayerFacialDecorations(LocalHandle player);
```
## ClearPlayerFacialIdleAnimOverride
Resets the previously overridden facial idle animation for a specific player.

```javascript
API.clearPlayerFacialIdleAnimOverride(LocalHandle player);
```
## CloseAllMenus
Closes all currently open menus.

```javascript
API.closeAllMenus();
```
## CreateBarTimerBar
Creates a Bar Timer Bar.

```javascript
BarTimerBar API.createBarTimerBar(string label);
```
## CreateCamera
Creates a new Camera - this is just a plain variable and not shown in any way to the player.

```javascript
API.createCamera(Vector3 position, Vector3 rotation);
```
## CreateCefBrowser
Creates a new CEF Browser, this Browser is able to display HTML Pages.

```javascript
API.createCefBrowser(Number width, Number height, Boolean local = true);
```
## CreateCheckboxItem
Client-side Function Description

```javascript
API.createCheckboxItem(string label, string description, bool isChecked);
```
## CreateColoredItem
Client-side Function Description

```javascript
API.createColoredItem(string label, string description, string hexColor, string hexHighlightColor);
```
## CreateDynamicListItem
This method creates a new dynamic list item in a client-side menu.

```javascript
UIMenuDynamicListItem API.createDynamicListItem(string label, string description, string startingItem);
```
## CreateExplosion
This function creates a explosion.

```csharp
API.createExplosion(int explosionType, Vector3 position, float damageScale, int dimension = 0);
```
## CreateListItem
Creates a list item on the menu.

```javascript
createListItem(string text, string description, List<string> items, int index);
```
## CreateMenu
Creates a native menu that can be rendered on the screen.

```javascript
API.createMenu(string title, string subtitle, double x, double y, int anchor, bool enableBanner = true);
```
## CreateMenuItem
This method creates a new menu item in a client-side menu.
To create menus, see [[createMenu]].
For an example on how to create a menu item, and trigger an event when clicking a menu item, see [[UIMenuItem]].

```javascript
API.createMenuItem(string label, string description);
```
## CreateOwnedExplosion
Creates an explosion with the given parameters. The difference between [[createOwnedExplosion]] and [[createExplosion]] is owned explosions do not damage the owner, however any fire/flames associated to the explosion will.

```csharp
API.createOwnedExplosion(Client owner, int explosionType, Vector3 position, float damageScale, int dimension = 0);
```
## CreateOwnedProjectile
Function Description

```csharp
API.createOwnedProjectile(Client owner, WeaponHash weapon, Vector3 start, Vector3 target, int damage, int speed =-1, int dimension = 0);
```
## CreateProjectile
Function Description

```csharp
API.createProjectile(WeaponHash Weapon, Vector3 start, Vector3 target, int damage, int speed =-1, int dimension = 0);
```
## CreateRaycast
Client-side Function Description

```javascript
API.createRaycast(Vector3 start, Vector3 end, int flag, LocalHandle? ignoreEntity);
```
## CreateTextTimerBar
Creates a  Text Timer Bar.

```javascript
TextTimerBar API.createTextTimerBar(string label, string text);
```
## DeleteTimerBar
Deletes a BarTimerBar or TextTimerBar.

```javascript
API.deleteTimerBar(BarTimerBar timerbar);
```
## DestroyCefBrowser
Destroys a CefBrowser created with the function [[createCefBrowser]]

```javascript
API.destroyCefBrowser(Browser browser);
```
## DetachCamera
Client-side Function Description

```javascript
API.detachCamera(GlobalCamera cam);
```
## DisableAllControlsThisFrame
This function will disable all the game controls for instance "TAB" displaying weapon inventory. It only disables them for one frame so use this on [[OnUpdate]]. For more game controls, visit this [[Game Controls]].

```javascript
API.disableAllControlsThisFrame();
```
## DisableAlternativeMainMenuKey
Disables/Enables the alternative Main Menu Key (P key).

```javascript
void API.disableAlternativeMainMenuKey(bool enable);
```
## DisableControlThisFrame
Disables the the specified control for a single [[onUpdate]] run.

```javascript
API.disableControlThisFrame(int control);
```
## DisableFingerPointing
Sets if the current client is able to point with the finger.

```javascript
API.disableFingerPointing(bool disabled);
```
## DisableInteriorProp
Disables a prop in the specified interior
'''See also:''' [[EnableInteriorProp]], [[IsInteriorPropEnabled]]

```javascript
API.disableInteriorProp(int interiorId, string propName);
```
## DisableVehicleEnteringKeys
Disables/Enables the vehicle entering keys (F & G keys).

```javascript
void API.disableVehicleEnteringKeys(bool enable);
```
## Disconnect
Client-side Function Description

```javascript
API.disconnect(string reason);
```
## DisplayHelpTextThisFrame
Client-side Function Description

```javascript
API.displayHelpTextThisFrame(string text);
```
## DisplaySubtitle
Client-side Function Description

```javascript
API.displaySubtitle(string text);
```
## DoesPlayerHaveWeapon
Client-side Function Description

```javascript
API.doesPlayerHaveWeapon(int weapon);
```
## DoesSettingExist
Checks if the given local setting exists.

```javascript
API.doesSettingExist(string name);
```
## DrawGameTexture
Client-side Function Description

```javascript
API.drawGameTexture(string dict, string txtName, double x, double y, double width, double height, double heading, int r, int g, int b, int alpha);
```
## DrawLine
Draws a line in 3D Space. You should call this during onUpdate.

```javascript
API.drawLine(Vector3 start, Vector3 end, int a, int r, int g, int b);
```
## DrawMenu
Client-side Function Description
{{Important|API.drawMenu() will be removed in the next update. See [[Deprecated]] for more information. }}

```javascript
API.drawMenu(UIMenu menu);
```
## DrawRectangle
Client-side Function Description

```javascript
API.drawRectangle(double xPos, double yPos, double wSize, double hSize, int r, int g, int b, int alpha);
```
## DrawText
Draws the text on the screen this frame. You should call this during onUpdate.

```javascript
API.drawText(string caption, double xPos, double yPos, double scale, int r, int g, int b, int alpha, int font, int justify, bool shadow, bool outline, int wordWrap);
```
## DxDrawTexture
This method draws a custom graphic to the screen using DirectX.
Needs to be called inside the client [[onUpdate]] event.

```javascript
API.dxDrawTexture(string path, Point pos, Size size, double rotation = 0.0);
```
## EnableControlThisFrame
Client-side Function Description

```javascript
API.enableControlThisFrame(int control);
```
## EnableInteriorProp
'''See also:''' [[DisableInteriorProp]], [[IsInteriorPropEnabled]]

```javascript
API.enableInteriorProp(int interiorId, string propName);
```
## Every
Executes given function after given amount of time in milliseconds and repeats it until stopped.
'''See also:''' [[after]], [[stop]]

```javascript
API.every(uint time, string functionName, Object[] arguments);
```
## F
This function is used to declare explicit floating-point arguments inside API.[[callNative]] and API.[[returnNative]] parameters.

```javascript
API.f(double value);
```
## FadeScreenIn
'''See also:''' [[FadeScreenOut]], [[IsScreenFadedIn]], [[IsScreenFadedOut]], [[IsScreenFadingIn]], [[IsScreenFadingOut]]
Displays the screen in the specified time (time in milliseconds).

```javascript
API.fadeScreenIn(int time);
```
## FadeScreenOut
'''See also:''' [[FadeScreenIn]], [[IsScreenFadedIn]], [[IsScreenFadedOut]], [[IsScreenFadingIn]], [[IsScreenFadingOut]]
Hides the screen in the specified time (time in milliseconds).

```javascript
API.fadeScreenOut(int time);
```
## ForceSendAimData
Forces the local player to send where they are looking at every packet.

```javascript
API.forceSendAimData(bool force);
```
## FormatTime
Client-side Function Description

```javascript
API.formatTime(double ms, string format);
```
## GetActiveCamera
Client-side Function Description

```javascript
API.getActiveCamera();
```
## GetAllActiveModDlcPacksNames
Returns an array of currently active mod DLC-packs.

```javascript
API.getAllActiveModDlcPacksNames();
```
## GetAllCustomScriptsNames
Returns a list of all custom script names.

```javascript
API.getAllCustomScriptsNames();
```
## GetAllLoadedAsiNames
Returns an array of all loaded .ASI-Names

```javascript
API.getAllLoadedAsiNames();
```
## GetAllTextLabels
Client-side Function Description

```javascript
API.getAllTextLabels();
```
## GetAlternativeMainMenuKeyDisabled
Returns true if [[DisableAlternativeMainMenuKey|Alternative Main Menu Key]] is disabled, returns false otherwise.

```javascript
bool API.getAlternativeMainMenuKeyDisabled();
```
## GetAlternativeVersionLabelPositionActive
Gets the current alternative GT-MP.net version label position status.
'''See also:''' [[toggleAlternativeVersionLabelPosition]]

```javascript
API.getAlternativeVersionLabelPositionActive();
```
## GetAnimCurrentTime
'''See also:''' [[GetAnimTotalTime]]
Returns the current animation time of the specified Ped.

```javascript
float API.getAnimCurrentTime(LocalHandle handle, string animDict, string animName);
```
## GetAnimTotalTime
'''See also:''' [[GetAnimCurrentTime]]
'''Variation 1:''' Returns the total animation time of the specified Ped.
'''Variation 2:''' Returns the total time of the specified animation.

```javascript
float API.getAnimTotalTime(LocalHandle handle, string animDict, string animName);
```
## GetAudioTime
Client-side Function Description
{{Warning| This API function has been disabled. It will be available in a later update}}

```javascript
API.getAudioTime();
```
## GetBytesReceivedPerSecond
Client-side Function Description

```javascript
API.getBytesReceivedPerSecond();
```
## GetBytesSentPerSecond
Client-side Function Description

```javascript
API.getBytesSentPerSecond();
```
## GetCameraFov
Client-side Function Description

```javascript
API.getCameraFov(GlobalCamera cam);
```
## GetCameraPosition
This function should return the given Camera position.

```javascript
API.getCameraPosition(GlobalCamera cam);
```
## GetCameraRotation
Client-side Function Description

```javascript
API.getCameraRotation(GlobalCamera cam);
```
## GetCanOpenChat
Client-side Function Description

```javascript
API.getCanOpenChat();
```
## GetCefBrowserHeadless
Returns if the browser is set to headless (not rendering CEF).

```javascript
API.getCefBrowserHeadless(Browser browser);
```
## GetCefBrowserPosition
Client-side Function Description

```javascript
API.getCefBrowserPosition(Browser browser);
```
## GetCefBrowserSize
Client-side Function Description

```javascript
API.getCefBrowserSize(Browser browser);
```
## GetCharFromKey
Gets the char from a given key, boolean parameters can be used to simulate when ALT, CTRL or SHIFT are pressed when pressing the key.

```javascript
string API.getCharFromKey(uint key, bool shift, bool ctrl, bool alt);
```
## GetChatVisible
Client-side Function Description

```javascript
API.getChatVisible();
```
## GetCloudHatOpacity
Returns the cloud cover opacity.
'''See also:''' [[ClearCloudHat]], [[SetCloudHatOpacity]], [[SetCloudHatTransition]]

```javascript
float API.getCloudHatOpacity();
```
## GetCurrentCefBrowserPageUrl
Returns the current url of the specified CEF Browser.

```javascript
string API.getCurrentCefBrowserPageUrl(Browser browser);
```
## GetCurrentResourceName
Client-side Function Description

```javascript
API.getCurrentResourceName();
```
## GetCursorPosition
Client-side Function Description

```javascript
API.getCursorPosition();
```
## GetCursorPositionMaintainRatio
Client-side Function Description

<syntaxhighlight lang="javascript" >API.getCursorPositionMaintainRatio();
```
## GetCustomScriptHash
Returns the hash the specified custom script.

```javascript
API.getCustomScriptHash(string customScriptName);
```
## GetEntityAbovePosition
Gets a world-relative position above the entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityAbovePostion(LocalHandle entity);
```
## GetEntityBelowPosition
Gets a world-relative position below the entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityBelowPostion(LocalHandle entity);
```
## GetEntityBoneCount
Gets the number of bones that this entity has.

```javascript
int API.getEntityBoneCount(LocalHandle entity);
```
## GetEntityBoneIndexByName
Client-side Function Description

```javascript
API.getEntityBoneIndexByName(LocalHandle entity, string boneName);
```
## GetEntityBoneRelativePosition
Gets the position of this bone relative to the entity its part of.

```javascript
Vector3 API.getEntityBoneRelativePosition(LocalHandle entity, string boneName);
```
## GetEntityBoneWorldPosition
Gets the position of this bone in world coords.

```javascript
Vector3 API.getEntityBoneWorldPosition(LocalHandle entity, string boneName);
```
## GetEntityFrontPosition
Gets a world-relative position in front of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityFrontPostion(LocalHandle entity);
```
## GetEntityLeftPosition
Gets a world-relative position on the left of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityLeftPostion(LocalHandle entity);
```
## GetEntityRearPosition
Gets a world-relative position in rear of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityRearPostion(LocalHandle entity);
```
## GetEntityRightPosition
Gets a world-relative position on the right of entity, the range is not precise, it's like the very edge of the entity.

```javascript
Vector3 API.getEntityRightPostion(LocalHandle entity);
```
## GetEntityVelocity
Client-side Function Description

```javascript
API.getEntityVelocity(LocalHandle entity);
```
## GetFirstParentIdForPedType
Gets the first available parent-id for a specified pedtype.

```javascript
API.getFirstParentIdForPedType(int type);
```
## GetFontWidth
Gets the font width.

```javascript
double API.getFontWidth(string text, int font, double scale);
```
## GetGameFramerate
Returns the Game Framerate of the Local Player.

```javascript
int getGameFramerate();
```
## GetGamePlayer
Client-side Function Description

```javascript
API.getGamePlayer();
```
## GetGameText
Gets a text from the game's string table.

```javascript
API.getGameText(string name);
```
## GetGameTime
Gets the amount of milliseconds since the game started.

```javascript
API.getGameTime();
```
## GetGameplayCamDir
Gets the direction of where the current player is looking as a [[Vector3]].

```javascript
API.getGameplayCamDir();
```
## GetGameplayCamPos
Client-side Function Description

```javascript
API.getGameplayCamPos();
```
## GetGameplayCamRot
Client-side Function Description

```javascript
API.getGameplayCamRot();
```
## GetGlobalTime
Returns time in milliseconds since the client-side script was started.

```javascript
API.getGlobalTime();
```
## GetGroundHeight
Gets the height of the ground at the given position of the map.

```javascript
API.getGroundHeight(Vector3 position);
```
## GetHudVisible
Gets the status of HUD visiblity

```javascript
API.getHudVisible();
```
## GetInteriorAtPos
Returns the interior id at the specified position.

```javascript
API.getInteriorAtPos(Vector3 pos);
```
## GetLoadedAsiHash
Returns the hash of the specified and loaded ASI.

```javascript
API.getLoadedAsiHash(string asiName);
```
## GetLocalPlayer
Gets the handle of the local client

```javascript
API.getLocalPlayer();
```
## GetMaxHealth
Returns the current maximum health of the local player. Default maximum health is 200.

```javascript
API.getMaxHealth();
```
## GetMenuPool
Client-side Function Description
{{Important|API.getMenuPool() will be removed in the next update. See [[Deprecated]] for more information. }}

```javascript
API.getMenuPool();
```
## GetModDlcPackHash
Returns the hash of the specified mod DLC-pack.

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
## GetMusicTime
Client-side Function Description

```javascript
API.getMusicTime();
```
## GetMusicVolume
Client-side Function Description

```javascript
API.getMusicVolume();
```
## GetNextPositionOnSidewalk
Returns the next safe position on a sidewalk from the specified position.

```javascript
API.getNextPositionOnSidewalk(Vector3 position);
```
## GetNextPositionOnStreet
Returns the next safe position on a street from the specified position.

```javascript
API.getNextPositionOnStreet(Vector3 position, bool unoccupied = false);
```
## GetNextWeather
Gets the next weather.

```javascript
int API.getNextWeather();
```
## GetNumHairColors
Gets the amount of available haircolors.

```javascript
API.getNumHairColors();
```
## GetNumHeadOverlayValues
Gets the amount of available head overlays of a specific overlaytype.

```javascript
API.getNumHeadOverlayValues(int overlayId);
```
## GetNumMakeupColors
Gets the amount of available makeup colors.

```javascript
API.getNumMakeupColors();
```
## GetOffsetFromWorldCoords
Client-side Function Description

```javascript
API.getOffsetFromWorldCoords(LocalHandle entity, Vector3 pos);
```
## GetOffsetInWorldCoords
Client-side Function Description

```javascript
API.getOffsetInWorldCoords(LocalHandle entity, Vector3 offset);
```
## GetPedCanRagdoll
'''See also:''' [[SetPedCanRagdoll]], [[SetPedToRagdoll]], [[CancelPedRagdoll]], [[isPlayerRagdoll]]
Returns whether or not the ragdoll of the local player is active.

```javascript
bool API.getPedCanRagdoll();
```
## GetPedHeadShotTextureString
'''See also:''' [[UnregisterPedHeadShot]], [[RegisterPedHeadShot]], [[IsPedHeadShotValid]], [[IsPedHeadShotReady]]
Returns the specified Ped Headshot as a string.

```javascript
string API.getPedHeadShotTextureString(int handle);
```
## GetPlayerAimCoords
Client-side Function Description

```javascript
API.getPlayerAimCoords(LocalHandle player);
```
## GetPlayerByName
Client-side Function Description

```javascript
API.getPlayerByName(string name);
```
## GetPlayerHeadOverlayValue
Gets the current headoverlay of a specified overlayid.

```javascript
API.getPlayerHeadOverlayValue(LocalHandle player, int overlayId);
```
## GetPlayerInvincible
Returns if the player is invincible or not.

```javascript
API.getPlayerInvincible();
```
## GetResourceFilePath
Client-side Function Description

```javascript
API.getResourceFilePath(string fileName);
```
## GetSafeCoordForPed
Returns a valid position to stand on for a ped.

```javascript
API.getSafeCoordForPed(Vector3 position, bool sidewalk = true, int flags = 0);
```
## GetScreenResolution
This function will give you the size of the window of GTA 5, but will not represent the client's actual resolution. To get the client's resolution check out getScreenResolutionMaintainRatio().

```javascript
API.getScreenResolution();
```
## GetScreenResolutionMaintainRatio
This function will give you the actual resolution so to speak, that can be combined with drawText() or drawRectangle(), unlike getScreenResolution().

```javascript
API.getScreenResolutionMaintainRatio();
```
## GetShowWastedScreenOnDeath
Gets if wasted-screen should be shown if the local player dies.
'''See also:''' [[setShowWastedScreenOnDeath]]

```javascript
API.getShowWastedScreenOnDeath();
```
## GetSocialClubName
Returns the SocialClub Name of the Local player.

```javascript
string API.getSocialClubName();
```
## GetStreamedMarkers
Client-side Function Description

```javascript
API.getStreamedMarkers();
```
## GetStreamedObjects
Client-side Function Description

<syntaxhighlight lang="js">API.getStreamedObjects();
```
## GetStreamedPeds
Client-side Function Description

```javascript
API.getStreamedPeds();
```
## GetStreamedPickups
Client-side Function Description

```javascript
API.getStreamedPickups();
```
## GetStreamedPlayers
Client-side Function Description

```javascript
API.getStreamedPlayers();
```
## GetStreamedTextLabels
Client-side Function Description

```javascript
API.getStreamedTextLabels();
```
## GetStreamedVehicles
Client-side Function Description

```javascript
API.getStreamedVehicles();
```
## GetStreetName
Gets the name of the street from the given position.

```javascript
API.getStreetName(Vector3 position);
```
## GetTattooZone
Gets the zone of the specified tattoo-collection/overlay combination.

```javascript
API.getTattooZone(string collection, string overlay);
```
## GetUniqueHardwareId
Returns the UniqueHardwareId of the local player.

```javascript
string API.getUniqueHardwareId();
```
## GetUserInput
Client-side Function Description

```javascript
API.getUserInput(string defaultText, int maxlen);
```
## GetVehicleBrakePower
Returns the current break power of the specified vehicle.

```javascript
API.getVehicleBrakePower(LocalHandle vehicle);
```
## GetVehicleClutch
Returns the current clutch status of the specified vehicle.

```javascript
API.getVehicleClutch(LocalHandle vehicle);
```
## GetVehicleCurrentGear
Gets the current gear of a specified vehicle.

```javascript
API.getVehicleCurrentGear(LocalHandle entity);
```
## GetVehicleEngineTemperature
Returns the engine temperature of the specified vehicle.

```javascript
API.getVehicleEngineTemperature(LocalHandle vehicle);
```
## GetVehicleEnteringKeysDisabled
Returns true if [[DisableVehicleEnteringKeys|Vehicle Entering Keys]] are disabled, returns false otherwise.

```javascript
bool API.getVehicleEnteringKeysDisabled();
```
## GetVehicleHighGear
Gets the highest possible gear of a specified vehicle.

```javascript
API.getVehicleHighGear(LocalHandle entity);
```
## GetVehicleLiveryName
Returns the livery name of the speciefied Vehicle with the specified liveryIndex.

```javascript
string API.getVehicleLiveryName(LocalHandle vehicle, int liveryIndex);
```
## GetVehicleModSlotName
Returns the name for the type of vehicle mod(Armour, engine, etc)

```javascript
string API.getVehicleModSlotName(LocalHandle vehicle, int modType);
```
## GetVehicleModTextLabel
Returns the text label of a mod type for a given vehicle.

```javascript
string API.getVehicleModTextLabel(LocalHandle vehicle, int modType, int modValue);
```
## GetVehicleNumModCount
Returns the amount of possible modifications for a specific modification type of a specific vehicle.

```javascript
API.getVehicleNumModCount(LocalHandle vehicle, int modType);
```
## GetVehicleRPM
Client-side Function Description

```javascript
API.getVehicleRPM(LocalHandle entity);
```
## GetVehicleThrottle
Returns the current throttle status of the specified vehicle.

```javascript
API.getVehicleThrottle(LocalHandle vehicle);
```
## GetVehicleThrottlePower
Returns the current throttle power of the specified vehicle.

```javascript
API.getVehicleThrottlePower(LocalHandle vehicle);
```
## GetVehicleTurbo
Returns the turbo status of the specified vehicle.

```javascript
API.getVehicleTurbo(LocalHandle vehicle);
```
## GetWaypointPosition
Client-side Function Description

```javascript
API.getWaypointPosition();
```
## GetWeatherTransitionType
Gets the current weather transition type.

```javascript
float API.getWeatherTransitionType();
```
## GetZoneName
Gets the zone name from the given position.

```javascript
API.getZoneName(Vector3 position);
```
## GetZoneNameLabel
Gets the label of the zone name from the given position.

```javascript
API.getZoneNameLabel(Vector3 position);
```
## GoBackCefBrowser
Navigates a page back in a CEF browser.

```javascript
API.goBackCefBrowser(Browser browser);
```
## HasEntityBone
Check if the specified Bone exist on the specified entity.

```javascript
bool API.hasEntityBone(LocalHandle entity, string boneName);
```
## HasPlayerHeadBlendFinished
Checks if requested headblending-data has been applied on the specified player.

```javascript
API.hasPlayerHeadBlendFinished(LocalHandle player);
```
## HasPlayerWeaponComponent
Client-side Function Description

```javascript
API.hasPlayerWeaponComponent(int weapon, int component);
```
## HasVehicleMod
Checks if the specified vehicle has any mods available of the given mod type.

```javascript
API.hasVehicleMod(LocalHandle vehicle, int modType);
```
## HideHudComponentThisFrame
'''See also:''' [[IsHudComponentActive]], [[ShowHudComponentThisFrame]]
Hides the specified hud component for this Frame.

```javascript
API.hideHudComponentThisFrame(int componentId);
```
## HideLoadingPrompt
'''See also:''' [[ShowLoadingPrompt]], [[IsLoadingPromptActive]]
Hides the Loading prompt.

```javascript
API.hideLoadingPrompt();
```
## InterpolateCameras
Client-side Function Description

```javascript
API.interpolateCameras(GlobalCamera from, GlobalCamera to, double duration, bool easepos, bool easerot);
```
## IsAIPedsSpawningActive
This function returns the current AI spawning status of the local player.

```javascript
bool API.isAIPedsSpawningActive();
```
## IsAimDataForced
Client-side Function Description

```javascript
API.isAimDataForced();
```
## IsAlarmPlaying
'''See also:''' [[StopAllAlarms]], [[StartAlarm]], [[StopAlarm]]
Checks if the specified Alarm playack is running.

```javascript
bool API.isAlarmPlaying(string alarmName);
```
## IsAnyMenuOpen
Checks if there is any open menu.

```javascript
API.isAnyMenuOpen();
```
## IsAsiLoaded
Checks if the specified ASI is loaded.

```javascript
API.isAsiLoaded(string asiName);
```
## IsAudioInitialized
Client-side Function Description

```javascript
API.isAudioInitialized();
```
## IsAudioPlaying
Client-side Function Description

```javascript
API.isAudioPlaying();
```
## IsCameraShaking
Client-side Function Description

```javascript
API.isCameraShaking(GlobalCamera cam);
```
## IsCefBrowserInitialized
Checks if CEF Browser has been initialized.

```javascript
API.isCefBrowserInitialized(Browser browser);
```
## IsCefBrowserLoading
Client-side Function Description

```javascript
API.isCefBrowserLoading(Browser browser);
```
## IsCefDrawEnabled
Returns whether CEF draw is Enabled.

```javascript
bool API.isCefDrawEnabled();
```
## IsChatOpen
Client-side Function Description

```javascript
API.isChatOpen();
```
## IsControlJustPressed
Checks if the specified game control has just been pressed. Has to be checked in [[OnUpdate]]. This function will only recognize a game contrl pressed once. If you wish to get repeated responses of which key is being held, use [[IsControlPressed]].

```javascript
API.isControlJustPressed(int control);
```
## IsControlJustReleased
Client-side Function Description

```javascript
API.isControlJustReleased(int control);
```
## IsControlPressed
Similar to [[IsControlJustPressed]], it's used on [[OnUpdate]] and will return if the game control is clicked. This will can be used to also recognize whether or not a game control is being held by a player. For full game control list check out [[Game Controls]].

```javascript
API.isControlPressed(int control);
```
## IsCursorShown
Returns whether the cursor is currently shown or not. Also see the [[showCursor]] function.

```javascript
API.isCursorShown();
```
## IsDisabledControlJustPressed
Client-side Function Description

```javascript
API.isDisabledControlJustPressed(int control);
```
## IsDisabledControlJustReleased
Client-side Function Description

```javascript
API.isDisabledControlJustReleased(int control);
```
## IsDisabledControlPressed
Client-side Function Description

```javascript
API.isDisabledControlPressed(int control);
```
## IsEntityPositionFrozen
Client-side Function Description

```javascript
API.isEntityPositionFrozen(LocalHandle entity);
```
## IsEntityTouchingEntity
'''See also:''' [[IsEntityTouchingModel]]
Returns whether Entity is touching a specified Entity.

```javascript
bool API.isEntityTouchingEntity(LocalHandle entity, LocalHandle targetEntity);
```
## IsEntityTouchingModel
'''See also:''' [[IsEntityTouchingEntity]]
Returns whether Entity is touching a specified Model.

```javascript
bool API.isEntityTouchingModel(LocalHandle entity, int modelHash);
```
## IsEntityUpright
'''See also:''' [[IsEntityUpsidedown]]
Returns whether Entity is Upright.

```javascript
bool API.isEntityUpright(LocalHandle entity, float angle);
```
## IsEntityUpsidedown
'''See also:''' [[IsEntityUpright]]
Returns whether Entity is Upside Down.

```javascript
bool API.isEntityUpsidedown(LocalHandle entity);
```
## IsFingerPointing
Checks if the current player points with the finger.

```javascript
API.isFingerPointing();
```
## IsFingerPointingDisabled
Checks if the current client isn't able to point with the finger.

```javascript
API.isFingerPointingDisabled();
```
## IsFirstPersonCamDisabled
Gets if the onfoot firstperson-camera has been disabled.

```javascript
API.isFirstPersonCamDisabled();
```
## IsGameplayCameraShaking
'''See also:''' [[SetGameplayCameraShake]], [[StopGameplayCameraShake]]
Returns whether the camera of the player is shaking.

```javascript
bool API.isGameplayCameraShaking();
```
## IsHudComponentActive
'''See also:''' [[ShowHudComponentThisFrame]], [[HideHudComponentThisFrame]]
Returns whether the specified hud component is active or not.

```javascript
bool API.isHudComponentActive(int componentId);
```
## IsInFirstPersonCam
Checks if the specified player is currently in first person.

```javascript
API.isInFirstPersonCam(LocalHandle player);
```
## IsInRangeOf
Client-side Function Description

```javascript
API.isInRangeOf(Vector3 entity, Vector3 destination, double range);
```
## IsInteriorPropEnabled
'''See also:''' [[EnableInteriorProp]], [[DisableInteriorProp]]

```javascript
API.isInteriorPropEnabled(int interiorId, string propName);
```
## IsLoadingPromptActive
'''See also:''' [[HideLoadingPrompt]], [[ShowLoadingPrompt]]
Returns whether a Loading Prompt is active or not.

```javascript
bool API.isLoadingPromptActive();
```
## IsMainMenuOpen
Checks if the main menu of the local player is currently open.

```javascript
API.isMainMenuOpen();
```
## IsModDlcPackActive
Checks if the specified mod DLC-pack is active.

```javascript
API.isModDlcPackActive(string modDlcPack);
```
## IsMusicPlaying
Client-side Function Description

```javascript
API.isMusicPlaying();
```
## IsOpenIVActive
Checks if OpenIV is currently active

```javascript
API.isOpenIVActive();
```
## IsPed
Client-side Function Description

```javascript
API.isPed(LocalHandle ent);
```
## IsPedHeadShotReady
'''See also:''' [[UnregisterPedHeadShot]], [[GetPedHeadShotTextureString]], [[IsPedHeadShotValid]], [[RegisterPedHeadShot]]
Checks if the Headshot is ready.

```javascript
bool API.isPedHeadShotReady(int handle);
```
## IsPedHeadShotValid
'''See also:''' [[UnregisterPedHeadShot]], [[GetPedHeadShotTextureString]], [[RegisterPedHeadShot]], [[IsPedHeadShotReady]]
Checks if the Headshot is valid.

```javascript
bool API.isPedHeadShotValid(int handle);
```
## IsPlayerBlushColorValid
Checks if the specified blushcolor is valid.

```javascript
API.isPlayerBlushColorValid(int colorId);
```
## IsPlayerClimbing
Returns whether the local player is climbing or not.

```javascript
bool API.isPlayerClimbing(LocalHandle player);
```
## IsPlayerClothesVariationValid
Checks if the given clothes-variation is valid.
''This is an alias for [[isPlayerComponentVariationValid]]''.

```javascript
API.isPlayerClothesVariationValid(LocalHandle player, int componentId, int drawableId, int textureId);
```
## IsPlayerComponentPropValid
Checks if a given playercomponent-prop is valid.

```javascript
API.isPlayerComponentPropValid(LocalHandle player, int componentId, int drawableId, int textureId);
```
## IsPlayerComponentVariationValid
Checks if given playercomponent-variation is valid.

```javascript
API.isPlayerComponentVariationValid(LocalHandle player, int slot, int drawable, int texture);
```
## IsPlayerDiving
Returns whether the local player is diving or not.

```javascript
bool API.isPlayerDiving(LocalHandle player);
```
## IsPlayerFalling
Returns whether the local player is flying in the air or not.

```javascript
bool API.isPlayerFalling(LocalHandle player);
```
## IsPlayerHairColorValid
Checks if the specified colorid is valid.

```javascript
API.isPlayerHairColorValid(int colorId);
```
## IsPlayerLipstickColorValid
Checks if specified lipstickcolor is valid.

```javascript
API.isPlayerLipstickColorValid(int colorId);
```
## IsPlayerRagdoll
'''See also:''' [[GetPedCanRagdoll]], [[SetPedCanRagdoll]], [[SetPedToRagdoll]], [[CancelPedRagdoll]]
Returns whether the player is currently in a Ragdoll action.

```javascript
bool API.isPlayerRagdoll(LocalHandle player);
```
## IsPlayerSwimming
Returns true if the player is swimming, false if it's not.

```javascript
bool API.isPlayerSwimming(LocalHandle player);
```
## IsPlayerSwimmingUnderWater
Returns true if the player is swimming under water, false if it's not.

```javascript
bool API.isPlayerSwimmingUnderWater(LocalHandle player);
```
## IsPlayerWearingHelmet
Returns whether the player is currently wearing a helmet or not.

```javascript
bool API.isPlayerWearingHelmet(LocalHandle player);
```
## IsProp
Client-side Function Description

```javascript
API.isProp(LocalHandle ent);
```
## IsScreenFadedIn
'''See also:''' [[FadeScreenIn]], [[FadeScreenOut]], [[IsScreenFadedOut]], [[IsScreenFadingIn]], [[IsScreenFadingOut]]
Indicates whether the screen is fully displayed.

```javascript
bool API.isScreenFadedIn();
```
## IsScreenFadedOut
'''See also:''' [[FadeScreenIn]], [[FadeScreenOut]], [[IsScreenFadedIn]], [[IsScreenFadingIn]], [[IsScreenFadingOut]]
Returns whether the screen is completely hidden.

```javascript
bool API.isScreenFadedOut();
```
## IsScreenFadingIn
'''See also:''' [[FadeScreenIn]], [[FadeScreenOut]], [[IsScreenFadedIn]], [[IsScreenFadedOut]], [[IsScreenFadingOut]]
Returns whether the screen is currently fadeing in or not.

```javascript
bool API.isScreenFadingIn();
```
## IsScreenFadingOut
'''See also:''' [[FadeScreenIn]], [[FadeScreenOut]], [[IsScreenFadedIn]], [[IsScreenFadedOut]], [[IsScreenFadingIn]]
Returns whether the screen is currently fadeing out or not.

```javascript
bool API.isScreenFadingOut();
```
## IsSpectating
Client-side Function Description

```javascript
API.isSpectating();
```
## IsVehicle
Client-side Function Description

```javascript
API.isVehicle(LocalHandle ent);
```
## IsVehicleFirstPersonCamDisabled
Gets if the vehicle firstperson-camera has been disabled.

```javascript
API.isVehicleFirstPersonCamDisabled();
```
## IsWaypointSet
Client-side Function Description

```javascript
API.isWaypointSet();
```
## LerpFloat
Client-side Function Description

```javascript
API.lerpFloat(double start, double end, double currentTime, double duration);
```
## LerpVector
Client-side Function Description

```javascript
API.lerpVector(Vector3 start, Vector3 end, double currentTime, double duration);
```
## LoadAnimationDict
Client-side Function Description

```javascript
API.loadAnimationDict(string dict);
```
## LoadModel
Client-side Function Description

```javascript
API.loadModel(int model);
```
## LoadPageCefBrowser
Client-side Function Description

```javascript
API.loadPageCefBrowser(Browser browser, string uri, bool noCache = false);
```
## Menu.AddInstructionalButton
Adds an instructional button.
----
'''Attention:''' Instructional Buttons doesn't work in GT-MP yet because an API function for Create those buttons needs to be written before you can use it.
----

```javascript
myMenu.AddInstructionalButton(InstructionalButton button);
```
## Menu.BindMenuToItem
Bind a menu to a button. When the button is clicked that menu will open.

```javascript
myMenu.BindMenuToItem(UIMenu menuToBind, UIMenuItem itemToBindTo);
```
## Menu.Clear
Remove all items from the menu.

```javascript
myMenu.Clear();
```
## Menu.DisableInstructionalButtons
Enable or disable the instructional buttons.

```javascript
myMenu.DisableInstructionalButtons(bool disable);
```
## Menu.GoBack
Close or go back in a menu chain.

```javascript
myMenu.GoBack();
```
## Menu.GoDown
Go down the menu if the number of items is less than or equal to the maximum items on screen.

```javascript
myMenu.GoDown();
```
## Menu.GoDownOverflow
Go down the menu if the number of items is more than maximum items on screen.

```javascript
myMenu.GoDownOverflow();
```
## Menu.GoLeft
Go left on a UIMenuListItem.

```javascript
myMenu.GoLeft();
```
## Menu.GoRight
Go right on a UIMenuListItem.

```javascript
myMenu.GoRight();
```
## Menu.GoUp
Go up the menu if the number of items is less than or equal to the maximum items on screen.

```javascript
myMenu.GoUp();
```
## Menu.GoUpOverflow
Go up the menu if the number of items is more than maximum items on screen.

```javascript
myMenu.GoUpOverflow();
```
## Menu.RefreshIndex
Reset the current selected item to 0. Use this after you add or remove items dynamically.

```javascript
myMenu.RefreshIndex();
```
## Menu.ReleaseMenuFromItem
Remove menu binding from button.

```javascript
myMenu.ReleaseMenuFromItem(UIMenuItem releaseFrom);
```
## Menu.RemoveInstructionalButton
Removes an instructional button.
----
'''Attention:''' Instructional Buttons doesn't work in GT-MP yet because an API function for Create those buttons needs to be written before you can use it.
----

```javascript
myMenu.RemoveInstructionalButton(InstructionalButton button);
```
## Menu.RemoveItemAt
Remove a item from an specific menu index.

```javascript
myMenu.RemoveItemAt(int index);
```
## Menu.ResetKey
Remove all Keys on a control.

```javascript
myMenu.ResetKey(MenuControls control);
```
## Menu.SelectItem
Activate the current selected item.

```javascript
myMenu.SelectItem();
```
## Menu.SetMenuWidthOffset
Change the menu's width. The width is calculated as DefaultWidth + WidthOffset, so a width offset of 10 would enlarge the menu by 10 pixels.

```javascript
myMenu.SetMenuWidthOffset(int widthOffset);
```
## OnCustomDataReceived
Called when the client receives custom data transfered via [[downloadData]] by the server.

```javascript
API.onCustomDataReceived.connect(function callback);
```
## OnDynamicMenuListItemChanged
This event triggers when a DynamiListItem changes.

```javascript
API.onDynamicMenuListItemChanged.connect(function (UIMenuDynamicListItem sender, UIMenuDynamicListItem.ChangeDirection direction));
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
## OnLocalPlayerShoot
[[Category:Client Side Javascript]]
Triggered when the local player shoots.

```javascript
API.onLocalPlayerShoot.connect(function callback);
```
## OnServerEventTrigger
[[Category:Client Side Javascript]]
Called every time the Server triggers a clientside event.

```javascript
API.onServerEventTrigger.connect(function callback);
```
## PauseAudio
Client-side Function Description

```javascript
API.pauseAudio();
```
## PlayPoliceReport
Plays a police report. See also [[Police Reports]].

```javascript
API.playPoliceReport(string reportName);
```
## PlayScreenEffect
Plays a screen effect. See also [[Screen Effects]].

```javascript
API.playScreenEffect(string effectName, int duration, bool looped);
```
## PointCameraAtEntity
Client-side Function Description

```javascript
API.pointCameraAtEntity(GlobalCamera cam, LocalHandle ent, Vector3 offset);
```
## PointCameraAtEntityBone
Client-side Function Description

```javascript
API.pointCameraAtEntityBone(GlobalCamera cam, LocalHandle ent, int bone, Vector3 offset);
```
## PointCameraAtPosition
Client-side Function Description

```javascript
API.pointCameraAtPosition(GlobalCamera cam, Vector3 pos);
```
## PreloadAudio
Client-side Function Description

```javascript
API.preloadAudio(string path);
```
## RegisterChatOverride
This removes the default chat and lets you control everything about it with methods and events (see resource 'cefchat' for examples).

```javascript
API.registerChatOverride();
```
## RegisterPedHeadShot
'''See also:''' [[UnregisterPedHeadShot]], [[GetPedHeadShotTextureString]], [[IsPedHeadShotValid]], [[IsPedHeadShotReady]]
Registers a Headshot for a Ped (More informations [http://gtaforums.com/topic/885580-ped-headshotmugshot-txd/?hl=headshot here])

```javascript
int API.registerPedHeadShot(LocalHandle player);
```
## RemoveSetting
Removes a setting from the local settings.

```javascript
API.removeSetting(string name);
```
## RemoveWaypoint
Removes the current waypoint.

```javascript
API.removeWaypoint();
```
## RenderScaleform
Client-side Function Description

```javascript
API.renderScaleform(Scaleform sc, double x, double y, double w, double h);
```
## RequestControlOfPlayer
'''See also:''' [[StopControlOfPlayer]]
Stops updating / syncing that players actions.

```javascript
API.requestControlOfPlayer(LocalHandle player);
```
## RequestScaleform
Client-side Function Description

```javascript
API.requestScaleform(string scaleformName);
```
## ResetPlayerMovementClipset
'''See also:''' [[SetPlayerMovementClipset]]
Resets the Movement Clipset for the specified player.

```javascript
API.resetPlayerMovementClipset(LocalHandle player);
```
## ResetPlayerVisualDamage
'''See also:''' [[ApplyPlayerDamagePack]]
Reset the current visual player damage.

```javascript
API.resetPlayerVisualDamage(LocalHandle player);
```
## ResetTime
Client-side Function Description

```javascript
API.resetTime();
```
## ResetWeather
This function resets the weather on the server.

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
## ResourceEval
Client-side Function Description

```javascript
resourceEval(string code);
```
## ResumeAudio
Client-side Function Description

```javascript
API.resumeAudio();
```
## ReturnNative
Client-side Function Description

```javascript
API.returnNative(string hash, int returnType, Object[] args);
```
## ScreenToWorld
Client-side Function Description

```javascript
API.screenToWorld(PointF pos);
```
## ScreenToWorldMaintainRatio
Client-side Function Description

```javascript
API.screenToWorldMaintainRatio(PointF pos);
```
## SendChatMessage
Sends a chat message.

```javascript
API.sendChatMessage(string text);
```
## SendNotification
Sends a notification

```javascript
API.sendNotification(string text);
```
## SendPictureNotification
Shows a picture notification for the local player.

```javascript
API.sendPictureNotification(string body, string pic, int flash, int iconType, string sender, string subject);
```
## SetActiveCamera
This method allows you to enable or disable the camera.

```javascript
API.setActiveCamera(GlobalCamera camera);
```
## SetAudioTime
Client-side Function Description
{{Warning| This API function has been disabled. It will be available in a later update}}

```javascript
API.setAudioTime(double seconds);
```
## SetAudioVolume
Sets the game volume.

```javascript
API.setAudioVolume(double vol);
```
## SetBarTimerBarBackgroundColor
Changes the background color of a Bar Timer Bar.

```javascript
void API.setBarTimerBarBackgroundColor(BarTimerBar timerBar, int r, int g, int b, int a);
```
## SetBarTimerBarColor
Changes the color of a Bar Timer Bar.

```javascript
void API.setBarTimerBarColor(BarTimerBar timerBar, int r, int g, int b, int a);
```
## SetBarTimerPercentage
Changes the progress percentage of a Bar Timer.

```javascript
void API.setBarTimerPercentage(BarTimerBar timerBar, float percentage);
```
## SetCameraFov
Client-side Function Description

```javascript
API.setCameraFov(GlobalCamera cam, float fov);
```
## SetCameraPosition
Sets the camera position.

```javascript
API.setCameraPosition(GlobalCamera cam, Vector3 pos);
```
## SetCameraRotation
Sets the camera rotation.

```javascript
API.setCameraRotation(GlobalCamera cam, Vector3 rotation);
```
## SetCameraShake
Sets the camera to shaking. Use '''[[StopCameraShake]]''' to stop the shaking.

```javascript
API.setCameraShake(GlobalCamera cam, string shakeType, float amplitute);
```
## SetCanOpenChat
This function, when set to false, will disallow a player to open the GT-MP chatbox, basically disabling the key "T" for its purpose. In order to allow the player to chat again you have to set it to true at some point in the script.

```javascript
API.setCanOpenChat(bool show);
```
## SetCefBrowserFocus
Sets a Cef Browsers Focus.

```javascript
API.setCefBrowserFocus(Browser browser, bool focus);
```
## SetCefBrowserHeadless
Setting the browser to headless will stop rendering the CEF.

```javascript
API.setCefBrowserHeadless(Browser browser, bool headless);
```
## SetCefBrowserPosition
Client-side Function Description

```javascript
API.setCefBrowserPosition(Browser browser, double xPos, double yPos);
```
## SetCefBrowserSize
Method allows resizing CefBrowser's size.

```javascript
API.setCefBrowserSize(Browser browser, double width, double height);
```
## SetCefDrawState
cefDrawState is just whether CEF should be drawn for the player or not
if state = false, CEF won't be drawn

```javascript
API.setCefDrawState(bool state);
```
## SetCefFramerate
Sets the FPS of a CEF Browser.
'''Note:''' Possible Value Range for "'''fps'''" is 1 to 60
(Everything below or above that Range will be set to 1 or 60)

```javascript
API.setCefFramerate(Browser browser, int fps);
```
## SetChatVisible
Turns the chat on or off.

```javascript
API.setChatVisible(bool display);
```
## SetCloudHatOpacity
'''See also:''' [[ClearCloudHat]], [[SetCloudHatTransition]], [[GetCloudHatOpacity]]
Sets the cloud cover opacity.

```javascript
API.setCloudHatOpacity(float opacity);
```
## SetCloudHatTransition
'''See also:''' [[ClearCloudHat]], [[SetCloudHatOpacity]], [[GetCloudHatOpacity]]
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
## SetEntityQuaternion
Sets the Quaternion of an Entity.

```javascript
API.setEntityQuaternion(LocalHandle entity, float x, float y, float z, float w);
```
## SetEntityVelocity
Sets the velocity of an entity

```javascript
API.setEntityVelocity(LocalHandle entity, Vector3 velocity);
```
## SetFingerPointing
Sets if the current player points with the finger.

```javascript
API.setFingerPointing(bool enabled);
```
## SetGameplayCameraActive
Client-side Function Description

```javascript
API.setGameplayCameraActive();
```
## SetGameplayCameraShake
'''See also:''' [[StopGameplayCameraShake]], [[IsGameplayCameraShaking]]
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
## SetHudVisible
Sets the HUD visible / invisible.

```javascript
API.setHudVisible(bool visible);
```
## SetInteriorPropColor
Colors certain props of an interior into a specific color

```javascript
API.setInteriorPropColor(int interiorId, string prop, int colorId);
```
## SetMaxHealth
Sets the maximum health the the local player. Default maximum health is 200.

```javascript
API.setMaxHealth(int maxHealth);
```
## SetMenuBannerRectangle
Client-side Function Description

```javascript
API.setMenuBannerRectangle(UIMenu menu, int alpha, int red, int green, int blue);
```
## SetMenuBannerSprite
Method allows changing the Banner Sprite (logo background) of a Menu.

```javascript
API.setMenuBannerSprite(UIMenu menu, string spritedict, string spritename);
```
## SetMenuBannerTexture
Client-side Function Description

```javascript
API.setMenuBannerTexture(UIMenu menu, string path);
```
## SetMenuSubtitle
Sets a description to a menu item. 
Text shows up at the bottom of the menu when hovering on an item.

```javascript
API.setMenuSubtitle(UIMenu menu, string text);
```
## SetMenuTitle
Sets the menu title.

```javascript
API.setMenuTitle(UIMenu menu, string title);
```
## SetMusicTime
Client-side Function Description

```javascript
API.setMusicTime(double time);
```
## SetMusicVolume
Client-side Function Description

```javascript
API.setMusicVolume(double volume);
```
## SetNextWeather
Sets the next weather for later transitioning.

```javascript
void API.setNextWeather(int weather);
```
## SetPedCanRagdoll
'''See also:''' [[GetPedCanRagdoll]], [[SetPedToRagdoll]], [[CancelPedRagdoll]], [[isPlayerRagdoll]]
Enables or disables Ragdoll for the local player.

```javascript
API.setPedCanRagdoll(bool canRagdoll);
```
## SetPedToRagdoll
'''See also:''' [[GetPedCanRagdoll]], [[SetPedCanRagdoll]], [[CancelPedRagdoll]], [[isPlayerRagdoll]]
Sets the Ragdoll type for the local player for a specific time period. (duration in milliseconds)
'''ragdollTypes'''
*''0 : Normal ragdoll''
*''1 : Falls with stiff legs/body''
*''2 : Narrow leg stumble(may not fall)''
*''3 : Wide leg stumble(may not fall)''

```javascript
API.setPedToRagdoll(int duration = -1, int ragdollType = 0);
```
## SetPlayerBeard
Sets the beard of a specified player with custom attributes.

```javascript
API.setPlayerBeard(LocalHandle player, int id, int colorId, float opacity);
```
## SetPlayerChestHair
Sets the chesthair of a specified player with custom attributes.

```javascript
API.setPlayerChestHair(LocalHandle player, int id, int colorId, float opacity);
```
## SetPlayerComponentVariation
Sets the component-variation of a specified player.
''This is an alias for [[setPlayerClothes]]''.

```javascript
API.setPlayerComponentVariation(LocalHandle player, int componentId, int drawableId, int textureId);
```
## SetPlayerEyeColor
Sets the eyecolor of the specified player.

```javascript
API.setPlayerEyeColor(LocalHandle player, int index);
```
## SetPlayerEyebrows
Sets the eyebrows of a specified player with custom attributes.

```javascript
API.setPlayerEyebrows(LocalHandle player, int id, int colorId, float opacity);
```
## SetPlayerFaceFeature
Sets a face feature of a given index and scale for a specified player.

```javascript
API.setPlayerFaceFeature(LocalHandle player, int index, float scale);
```
## SetPlayerFacePaint
Sets the facepaint of a specified player with custom attributes.

```javascript
API.setPlayerFacePaint(LocalHandle player, int id, float opacity);
```
## SetPlayerFacialDecoration
Sets the facial decoration of a specified player with custom attributes.

```javascript
API.setPlayerFacialDecoration(LocalHandle player, string collection, string overlay);
```
## SetPlayerFacialIdleAnimOverride
Overrides the facial idle animation to a specific animation.

```javascript
API.setPlayerFacialIdleAnimOverride(LocalHandle player, string animName);
```
## SetPlayerHairColor
Sets the haircolor of a specified player.

```javascript
API.setPlayerHairColor(LocalHandle player, int hairColorId, int hairHighlightId);
```
## SetPlayerHairStyle
Sets the hairstyle of a specified player with custom attributes.

```javascript
API.setPlayerHairStyle(LocalHandle player, int id, int colorId, int highlightId, string collection, string overlay);
```
## SetPlayerHeadBlendData
Models the head of a player with given attributes.
{{NoteBlock|This function only works with the pedmodels '''FreemodeFemale01''' and '''FreemodeMale01'''!}}

```javascript
API.setPlayerHeadBlendData(LocalHandle player, int shapeFirstId, int shapeSecondId, int shapeThirdId, int skinFirstId, int skinSecondId, int skinThirdId, float shapeMix, float skinMix, float thirdMix, bool isParent);
```
## SetPlayerHeadOverlay
Sets a HeadOverlay of the player.

```javascript
void API.setPlayerHeadOverlay(LocalHandle player, int overlayId, int partIndex, float opacity);
```
## SetPlayerHeadOverlayColor
Sets the headoverlay color of the specified player.

```javascript
API.setPlayerHeadOverlayColor(LocalHandle player, int overlayId, int colorType, int colorId, float opacity);
```
## SetPlayerInvincible
Sets the player invincible / vincible.

```javascript
API.setPlayerInvincible(bool invinc);
```
## SetPlayerIsDrunk
Sets the drunkenness status for the specified player.

```javascript
API.setPlayerIsDrunk(LocalHandle player, bool isDrunk);
```
## SetPlayerMovementClipset
'''See also:''' [[ResetPlayerMovementClipset]]
Sets the Movement Clipset for the specified player.

```javascript
API.setPlayerMovementClipset(LocalHandle player, string animSet, float speed);
```
## SetPlayerWeaponAnimationOverride
Overrides the weapon animation style for a specific player.

```javascript
API.setPlayerWeaponAnimationOverride(LocalHandle player, string animStyle);
```
## SetRadarZoom
Sets the minimap zoom level (Accepts values from 0 to 200)

```javascript
API.setRadarZoom(int zoom);
```
## SetShowWastedScreenOnDeath
Sets if the wasted-screen should be shown on player death.
'''See also:''' [[getShowWastedScreenOnDeath]]

```javascript
API.setShowWastedScreenOnDeath(bool toggle);
```
## SetSnowEnabled
Enables snow for a player

```javascript
API.setSnowEnabled(bool toggle, bool deepPedTracks, bool deepVehicleTracks, bool infoSubtitle = true);
```
## SetTextTimerBarText
Sets the timerbar text of a specified timer bar.

```javascript
API.setTextTimerBarText(TextTimerBar timerBar, string text);
```
## SetUiColor
Sets the UI color.

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
## SetWaypoint
Adds a waypoint to your minimap and main map.

```javascript
API.setWaypoint(double xPos, double yPos);
```
## SetWeatherTransitionType
Sets a transition type for a weather.

```javascript
void API.setWeatherTransitionType(float weatherTransitionType);
```
## ShowBlipRoute

```javascript
API.showBlipRoute(LocalHandle blip, bool show);
```
## ShowColorShard
Creates an image overlay which displays text. Allows you to adjust the color, background color, and a timeout.

```javascript
API.showColorShard(string title, string description, int bgColor, int titleColor, int timeout);
```
## ShowColoredShard
Shows a colored shard
[[File:ColoredShard.jpg | thumb | 200px | left]]

```javascript
API.showColoredShard(string message, string description, int textColor, int bgColor, int time = 5000);
```
## ShowCursor
Enables / disables the mouse cursor - primarily used for CEFs.

<syntaxhighlight lang="JavaScript" >
API.showCursor(bool enable);

```
## ShowCustomShard
Shows a custom shard
[[File:CustomShard.jpg | thumb | 200px | left]]

```javascript
API.showCustomShard(string funcName, params object[] parameters);
```
## ShowHudComponentThisFrame
'''See also:''' [[IsHudComponentActive]], [[HideHudComponentThisFrame]]
Shows the specified hud component for this Frame.

```javascript
API.showHudComponentThisFrame(int componentId);
```
## ShowLoadingPrompt
'''See also:''' [[HideLoadingPrompt]], [[IsLoadingPromptActive]]
Shows a Loading Prompt with the defined Text and Spinner type.

```javascript
API.showLoadingPrompt(string loadingText, int busySpinnerType);
```
## ShowMissionPassedMessage
Shows a mission passed message
[[File:MissionPassedMessage.jpg | thumb | 200px | left]]

```javascript
API.showMissionPassedMessage(string message, int time = 5000);
```
## ShowMpMessageLarge
Shows a mp message large
[[File:MpMessageLarge.jpg | thumb | 200px | left]]

```javascript
API.showMpMessageLarge(string message, int time = 5000);
```
## ShowOldMessage
Shows a old message
[[File:OldMessage.jpg | thumb | 200px | left]]

```javascript
API.showOldMessage(string message, int time = 5000);
```
## ShowRankupMessage
Shows a rankup message
[[File:RankUpMessage.jpg | thumb | 200px | left]]

```javascript
API.showRankupMessage(string message, string subtitle, int rank, int time = 5000);
```
## ShowShard
Client-side Function Description

```javascript
API.showShard(string text);
```
## ShowWeaponPurchasedMessage
Shows a weapon purchased message
[[File:WeaponPurchasedMessage.jpg | thumb | 200px | left]]

```javascript
API.showWeaponPurchasedMessage(string bigMessage, string weaponName, int weapon, int time = 5000);
```
## StartAlarm
'''See also:''' [[StopAllAlarms]], [[IsAlarmPlaying]], [[StopAlarm]]
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
## StartAudio
Plays a specific audio file. Use '''[[StopAudio]]''' to stop playing a specific audio file

```javascript
API.startAudio(string path, bool looped, void play());
```
## StartCoroutine
Used to start a coroutine.

```javascript
API.startCoroutine(any target);
```
## StartMusic
Client-side Function Description

```javascript
API.startMusic(string path, bool looped);
```
## Stop
Stops or aborts a given timer.
'''See also:''' [[after]], [[every]]

```javascript
API.stop(uint id);
```
## StopAlarm
'''See also:''' [[StopAllAlarms]], [[StartAlarm]], [[IsAlarmPlaying]]
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
## StopAllAlarms
'''See also:''' [[IsAlarmPlaying]], [[StartAlarm]], [[StopAlarm]]
Stops all running Alarms.

```javascript
API.stopAllAlarms();
```
## StopAllScreenEffects

```javascript
API.stopAllScreenEffects();
```
## StopAudio
Stops a specific audio file. To play an audio file, use '''[[StartAudio]]'''.

```javascript
API.stopAudio(void play());
```
## StopCameraPointing
Client-side Function Description

```javascript
API.stopCameraPointing(GlobalCamera cam);
```
## StopCameraShake
Stops the camera shaking. Use '''[[SetCameraShake]]''' to start the shaking.

```javascript
API.stopCameraShake(GlobalCamera cam);
```
## StopControlOfPlayer
'''See also:''' [[RequestControlOfPlayer]]
Starts updating / syncing that players actions.

```javascript
API.stopControlOfPlayer(LocalHandle player);
```
## StopGameplayCameraShake
'''See also:''' [[SetGameplayCameraShake]], [[IsGameplayCameraShaking]]
Stops the camera shake for the local player.

```javascript
API.stopGameplayCameraShake();
```
## StopMusic
Client-side Function Description

```javascript
API.stopMusic();
```
## StopScreenEffect

```javascript
API.stopScreenEffect(string effectName);
```
## ToFloat
Client-side Function Description

```javascript
API.toFloat(double d);
```
## ToString
Client-side Function Description

```javascript
API.toString(Object obj);
```
## ToggleAIPedsSpawning
Toggles the AI-ped spawning in the world.
{{Info|The spawned AI-peds are '''not''' synced!}}

```javascript
API.toggleAIPedsSpawning(bool active);
```
## ToggleAlternativeVersionLabelPosition
Moves the GT-MP.net version label to the lower right corner.
'''See also: ''' [[getAlternativeVersionLabelPositionActive]]

```javascript
API.toggleAlternativeVersionLabelPosition(bool toggle);
```
## ToggleFirstPersonCam
Sets if the onfoot firstperson-camera should be enabled.

```javascript
API.toggleFirstPersonCam(bool enabled);
```
## ToggleVehicleFirstPersonCam
Sets if the vehicle firstperson-camera should be enabled.

```javascript
API.toggleVehicleFirstPersonCam(bool enabled);
```
## TransitionToWeather
Starts the transition to the specified weather type.

```javascript
void API.transitionToWeather(int weather, float duration);
```
## TriggerServerEvent
Triggers a server-side event from the client to the server. For the inverse method of this (server to client), see [[triggerClientEvent]].
This method triggers the server-side [[onClientEventTrigger]] event.

```javascript
API.triggerServerEvent(string eventName, Object[] arguments);
```
## UIMenu.OnItemSelect
[[Category:Client Side Javascript]]
Handles user input in a menu. To use this event, you must have created a menu.

```javascript
yourMenuName.OnItemSelect.connect(function(sender, item, index) {...
```
## UIMenuListItem.OnListChanged
[[Category:Client Side Javascript]]
This event is triggered when a player changes the displayed option of a list item. To use this event, you must have created a list item and added it to a menu.

```javascript
yourListName.OnListChanged.connect(function(sender, new_index) {...
```
## UnregisterPedHeadShot
'''See also:''' [[RegisterPedHeadShot]], [[GetPedHeadShotTextureString]], [[IsPedHeadShotValid]], [[IsPedHeadShotReady]]
Unregisters a Headshot for a Ped

```javascript
API.unregisterPedHeadShot(LocalHandle player);
```
## UpdatePlayerHeadBlendData
Updates the mixture of previously set shapes and skins of a specified player.

```javascript
API.updatePlayerHeadBlendData(LocalHandle player, float shapeMix, float skinMix, float thirdMix);
```
## VerifyIntegrityOfCache
Checks if any of the resource's files on the client have been changed. If it has, the client will disconnect from the server.

```javascript
API.verifyIntegrityOfCache();
```
## WaitUntilCefBrowserInit
Client-side Function Description

```javascript
API.waitUntilCefBrowserInit(Browser browser);
```
## WaitUntilCefBrowserLoaded
Waits until the browser has loaded the page.

```javascript
API.waitUntilCefBrowserLoaded(Browser browser);
```
## WorldToScreen
Client-side Function Description

```javascript
API.worldToScreen(Vector3 pos);
```
## WorldToScreenMaintainRatio
Client-side Function Description

```javascript
API.worldToScreenMaintainRatio(Vector3 pos);
```

