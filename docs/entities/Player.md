# Client Class

The **Client** class represent a player in your server.

Client inherits the Entity class.

## Using
**GrandTheftMultiplayer.Server.Elements**

```csharp
using GrandTheftMultiplayer.Server.Elements;
```


## Client (Player) Properties
| Name | Type | Accessibility  | Description  |
|---|---|---|---|
| handle | ''GrandTheftMultiplayer.Shared.NetHandle'' | Writeable | Handle of the player.

| vehicle | ''GrandTheftMultiplayer.Server.Elements.Vehicle'' | Read-Only | Get the current vehicle of the player

| isInVehicle | Boolean | Read-Only | True or false if the player is in a vehicle or not.

| vehicleSeat | Int32 | Read-Only | Number of vehicle seat where the player is sitting.

| team | Int32 | Writeable | Get or set the player's team-number.

| ping | Int32 | Read-Only | Gets the player ping in milliseconds.

| wantedLevel | Int32 | Writeable | Wanted level of player.

| name | String | Writeable | The player's name.

| socialClubName | String | Read-Only | Player's Social Club name. (NOTE: Can be changed and/or spoofed!)

| isCEFenabled | Boolean | Read-Only | True or False if the Client has CEF is enabled or not

| isMediaStreamEnabled | Boolean | Read-Only | True or False if the Client has Media Stream (Mic, Webcam, ...) is enabled or not

| velocity | ''GrandTheftMultiplayer.Shared.Math.Vector3'' | Writeable  | Get (and set?) the player's current velocity.

| weapons | ''GrandTheftMultiplayer.Shared.WeaponHash[]'' | Read-Only | Array of weapons the player has.

| currentWeapon | ''GrandTheftMultiplayer.Shared.WeaponHash'' | Read-Only | Get (and set?) which weapon the player is currently holding.

| address | String | Read-Only | Player IP-address.

| seatbelt | Boolean | Writeable | Get (and set?) True or False wether player is wearing a seatbelt or not.

| health | Int32 | Writeable | Get and set the player's health.

| armor | Int32 | Writeable | Get and set the player's armor.

| onFire | Boolean | Read-Only | True or False if the player is on fire or not.

| isParachuting | Boolean | Read-Only | True or False if the player is parachuting or not.

| inFreefall | Boolean | Read-Only | True or False if the player is in a free fall or not.

| isAiming | Boolean | Read-Only | True or False if the player is aiming or not.

| isShooting | Boolean | Read-Only | True or False if the player is shooting or not.

| isReloading | Boolean | Read-Only | True or False if the player is reloading or not.

| isInCover | Boolean | Read-Only | True or False if the player is covering or not.

| isOnLadder | Boolean | Read-Only | True or False if the player is on a ladder or not.

| aimingPoint | ''GrandTheftMultiplayer.Shared.Math.Vector3'' | Read-Only | Coordinates of where the player's is aiming.

| dead | Boolean | Read-Only | True or False when the player is dead or not.

| nametag | String | Writeable | Text on the player's "3d label".

| nametagVisible | Boolean | Writeable | Get or Set wether the player's "3d label" should be visible or not.

| nametagColor | ''GrandTheftMultiplayer.Server.Constant.Color'' | Writeable | The color of the player's "3d label".

| spectating | Boolean | Read-Only | True or False if the player is on spectating or not.

| freezePosition | Boolean | Writeable | True or False if the player is frozen or not. (Not readable ?)

| position | ''GrandTheftMultiplayer.Shared.Math.Vector3'' | Writeable | Get or set the coordinates of the player's position.

| rotation | ''GrandTheftMultiplayer.Shared.Math.Vector3'' | Writeable | Get or set the coordinates of the player's rotation (view-angle).

| IsNull | Boolean | Read-Only | TBD

| exists | Boolean | Read-Only | TBD

| type | ''GrandTheftMultiplayer.Shared.EntityType'' | Read-Only | TBD

| transparency | Int32 | Writeable | Transparency of the player model.

| dimension | Int32 | Writeable | Get or set a player's virtual world.

| invincible | Boolean | Writeable | Sets a player invincible as in passive mode.

| collisionless | Boolean | Writeable | No collisions with other objects, not even the ground. Useful for a "free-fly" mode.

| model | Int32 | Read-Only | "Skin" of the player.

| uniqueHardwareId | String | Read-Only | Returns the Unique Hardware Id of the Client '''(Next Update)'''

| scriptVersion | int | Read-Only | Client Side script version the client runs Client '''(Next Update)'''

| version | String | Read-Only | GT-MP version the client runs '''(Next Update)'''

| gameVersion | int | Read-Only | GTA 5 gameversion the client runs, int represents ScripthookVDotNet enum position '''(Next Update)'''

| activeAsis| Dictionary<string, string> | Read-Only | List of all active ASI-files. ASI name (key), ASI hash (value) '''(Next Update)'''

| modDlcPacks| Dictionary<string, string> | Read-Only | List of all active mod DLC-packs. DLC-pack name (key), DLC-pack hash (value)  '''(Next Update)'''

| customScripts| Dictionary<string, string> | Read-Only | List of all active custom scripts. Script-filename (key), script hash (value)  '''(Next Update)'''

ClientSideScriptVersion
 Unknown = 0,
 VERSION_0_6 = 1,
 VERSION_0_6_1 = 2,
 VERSION_0_7 = 3,
 VERSION_0_8_1 = 4,
 VERSION_0_9 = 5,
 VERSION_1_0 = 6

GameVersion
 Unknown = -1,
 v1_0_335_2_Steam = 0,
 v1_0_335_2_NoSteam = 1,
 v1_0_350_1_Steam = 2,
 v1_0_350_2_NoSteam = 3,
 v1_0_372_2_Steam = 4,
 v1_0_372_2_NoSteam = 5,
 v1_0_393_2_Steam = 6,
 v1_0_393_2_NoSteam = 7,
 v1_0_393_4_Steam = 8,
 v1_0_393_4_NoSteam = 9,
 v1_0_463_1_Steam = 10,
 v1_0_463_1_NoSteam = 11,
 v1_0_505_2_Steam = 12,
 v1_0_505_2_NoSteam = 13,
 v1_0_573_1_Steam = 14,
 v1_0_573_1_NoSteam = 15,
 v1_0_617_1_Steam = 16,
 v1_0_617_1_NoSteam = 17,
 v1_0_678_1_Steam = 18,
 v1_0_678_1_NoSteam = 19,
 v1_0_757_2_Steam = 20,
 v1_0_757_2_NoSteam = 21,
 v1_0_757_3_Steam = 22,
 v1_0_757_4_NoSteam = 23,
 v1_0_791_2_Steam = 24,
 v1_0_791_2_NoSteam = 25,
 v1_0_877_1_Steam = 26,
 v1_0_877_1_NoSteam = 27,
 v1_0_944_2_Steam = 28,
 v1_0_944_2_NoSteam = 29,
 v1_0_1011_1_Steam = 30,
 v1_0_1011_1_NoSteam = 31,
 v1_0_1032_1_Steam = 32,
 v1_0_1032_1_NoSteam = 33,
 v1_0_1103_2_Steam = 34,
 v1_0_1103_2_NoSteam = 35,

== Client (Player) Methods ==
{| class="wikitable"
|-
! Name !! Return !! Parameters !! Description
|-
| get_handle() || ''GrandTheftMultiplayer.Shared.NetHandle'' || || Getter of handle attribute.
|-
| get_vehicle() || ''GrandTheftMultiplayer.Server.Elements.Vehicle'' || || Getter of vehicle attribute.
|-
| get_isInVehicle() || Boolean || || Getter of isInVehicle attribute.
|-
| get_vehicleSeat() || Int32 || || Getter of vehicleSeat attribute.
|-
| get_team() || Int32  || || Getter of team attribute.
|-
| get_ping() || Int32  || || Getter of ping attribute.
|-
| get_wantedLevel() || Int32 || || Getter of wantedLevel attribute.
|-
| get_name() || String  || || Getter of name attribute.
|-
| get_socialClubName() || String || || Getter of socialClubName attribute.
|-
| get_isCEFenabled() || Boolean || || Getter of isCEFenabled attribute.
|-
| get_velocity() || ''GrandTheftMultiplayer.Shared.Math.Vector3'' || || Getter of velocity attribute.
|-
| get_weapons() || ''GrandTheftMultiplayer.Shared.WeaponHash[]'' || || Getter of weapons attribute.
|-
| get_currentWeapon() || ''GrandTheftMultiplayer.Shared.WeaponHash'' || || Getter of currentWeapon attribute.
|-
| get_address() || String || || Getter of address attribute.
|-
| get_seatbelt() || Boolean || || Getter of seatbelt attribute.
|-
| get_health() || Int32 || || Getter of health attribute.
|-
| get_armor() || Int32 || || Getter of armor attribute.
|-
| get_onFire() || Boolean || || Getter of onFire attribute.
|-
| get_isParachuting() || Boolean || || Getter of isParachuting attribute.
|-
| get_inFreefall() || Boolean || || Getter of inFreefall attribute.
|-
| get_isAiming() || Boolean || || Getter of isAiming attribute.
|-
| get_isShooting() || Boolean || || Getter of isShooting attribute.
|-
| get_isReloading() || Boolean || || Getter of isReloading attribute.
|-
| get_isInCover() || Boolean || || Getter of isInCover attribute.
|-
| get_isOnLadder() || Boolean || || Getter of isOnLadder attribute.
|-
| get_aimingPoint() || ''GrandTheftMultiplayer.Shared.Math.Vector3'' || || Getter of aimingPoint attribute.
|-
| get_dead() || Boolean || || Getter of dead attribute.
|-
| get_nametag() || String || || Getter of nametag attribute.
|-
| get_nametagVisible() || Boolean || || Getter of nametagVisible attribute.
|-
| get_nametagColor() || ''GrandTheftMultiplayer.Server.Constant.Color'' || || Getter of nametagColor attribute.
|-
| get_spectating() || Boolean || || Getter of spectating attribute.
|-
| get_position() || ''GrandTheftMultiplayer.Shared.Math.Vector3'' || || Getter of position attribute.
|-
| get_rotation() || ''GrandTheftMultiplayer.Shared.Math.Vector3'' || || Getter of rotation attribute.
|-
| get_IsNull() || Boolean || || Getter of IsNull attribute.
|-
| get_exists() || Boolean  || || Getter of exists attribute.
|-
| get_type() || ''GrandTheftMultiplayer.Shared.EntityType'' || || Getter of type attribute.
|-
| get_transparency() || Int32 || || Getter of transparency attribute.
|-
| get_dimension() || Int32 || || Getter of dimension attribute.
|-
| get_invincible() || Boolean || || Getter of invincible attribute.
|-
| get_collisionless() || Boolean || || Getter of collisionless attribute.
|-
| get_model() || Int32 || || Getter of model attribute.
|-
| ban() || Void || || Ban the client(player).
|-
| ban() || Void || String reason || Ban the client(player) with a reason.
|-
| freeze() || Void || Boolean freeze || Freeze the player.
|-
| ban() || Void || String reason || Ban the client(player) with a reason.
|-
| kill() || Void ||  || Kill the player ?
|-
| detonateStickies() || Void || || ?
|-
| resetNametag() || Void || || ?
|-
| resetNametagColor() || Void || || ?
|-
| spectate() || Void || || ?
|-
| spectate() || Void || ''GrandTheftMultiplayer.Server.Elements.Client'' player || ?
|-
| stopSpectating() || Void || || ?
|-
| set_freezePosition() || Void || Boolean value || ?
|-
| set_position() || Void || ''GrandTheftMultiplayer.Shared.Math.Vector3'' value || ?
|-
| set_rotation() || Void || ''GrandTheftMultiplayer.Shared.Math.Vector3'' value || ?
|-
| set_transparency() || Void || Int32 value || ?
|-
| set_dimension() || Void || Int32 value || ?
|-
| set_invincible() || Void || Boolean value || ?
|-
| set_collisionless() || Void || Boolean value || ?
|-
| delete() || Void || || ?
|-
| movePosition() || Void || ''GrandTheftMultiplayer.Shared.Math.Vector3'' target , Int32 duration || ?
|-
| moveRotation() || Void || ''GrandTheftMultiplayer.Shared.Math.Vector3'' target ,Int32 duration 
|-
| attachTo() || Void || ''GrandTheftMultiplayer.Shared.NetHandle'' entity  ,String bone , ''GrandTheftMultiplayer.Shared.Math.Vector3'' offset , ''GrandTheftMultiplayer.Shared.Math.Vector3'' rotation  || ?
|-
| detach() || Void || || ?
|-
| detach() || Void || Boolean resetCollision || ?
|-
| createParticleEffect() || Void || String ptfxLib ,String ptfxName ,''GrandTheftMultiplayer.Shared.Math.Vector3'' offset ,''GrandTheftMultiplayer.Shared.Math.Vector3'' rotation ,''System.Single'' scale ,Int32 bone || ?
|-
| setSyncedData() || Void || String key , ''System.Object'' value  || ?
|-
| getSyncedData() || ''System.Object'' || String  key || ?
|-
| resetSyncedData() || Void || String key || ?
|-
| hasSyncedData() || Boolean || String key || ?
|-
| setData() || Void || String key ,''System.Object'' value || ?
|-
| getData() || ''System.Object'' || String key || ?
|-
| resetData() || Void || String key || ?
|-
| hasData() || Boolean || String key || ?
|-
| set_handle() || Void || ''GrandTheftMultiplayer.Shared.NetHandle'' value || ?
|-
| op_Implicit() || ''GrandTheftMultiplayer.Shared.NetHandle'' || ''GrandTheftMultiplayer.Server.Elements.Client'' c  || ?
|-
| Equals() || Boolean || ''System.Object'' obj  || ?
|-
| op_Equality() || Boolean || ''GrandTheftMultiplayer.Server.Elements.Client'' left ,''GrandTheftMultiplayer.Server.Elements.Client'' right  || ?
|-
| op_Inequality() || Boolean || ''GrandTheftMultiplayer.Server.Elements.Client'' left ,''GrandTheftMultiplayer.Server.Elements.Client'' right || ?
|-
| set_team() || Void || Int32 value || ?
|-
| set_wantedLevel || Void || Int32 value || ?
|-
| set_name() || Void || String value || ?
|-
| set_velocity() || Void || ''GrandTheftMultiplayer.Shared.Math.Vector3'' value  || ?
|-
| set_seatbelt() || Void || Boolean value || ?
|-
| set_health() || Void || Int32 value || ?
|-
| set_armor() || Void || Int32 value || ?
|-
| set_nametag() || Void || String value || ?
|-
| set_nametagVisible() || Void || Boolean value || ?
|-
| set_nametagColor() || Void || ''GrandTheftMultiplayer.Server.Constant.Color'' value  || ?
|-
| sendChatMessage() || Void || String message || ?
|-
| sendChatMessage() || Void || String sender ,String message || ?
|-
| setIntoVehicle() || Void || ''GrandTheftMultiplayer.Shared.NetHandle'' car ,Int32 seat || ?
|-
| warpOutOfVehicle() || Void || ''GrandTheftMultiplayer.Shared.NetHandle'' car || ?
|-
| setSkin() || Void || ''GrandTheftAuto.Server.Constant.PedHash'' newSkin   || Setter of skin attribute
|-
| setDefaultClothes() || Void ||  || ?
|-
| playAnimation() || Void || String animDict ,String animName ,Int32 flag || ?
|-
| playScenario() || Void || String scenarioName || ?
|-
| stopAnimation() || Void ||  || ?
|-
| setClothes() || Void || Int32 slot ,Int32 drawable ,Int32 texture || ?
|-
| setAccessories() || Void || Int32 slot ,Int32 drawable ,Int32 texture || ?
|-
| getClothesDrawable() || Int32 || Int32 slot || ?
|-
| getClothesTexture() || Int32 || Int32 slot || ?
|-
| getAccessoryDrawable() || Int32 || Int32 slot || ?
|-
| getAccessoryTexture() || Int32 || Int32 slot || ?
|-
| clearAccessory() || Void || Int32 slot || ?
|-
| giveWeapon() || Void || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon ,Int32 ammo,Boolean equipNow ,Boolean ammoLoaded || ?
|-
| removeWeapon() || Void || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon  || ?
|-
| removeAllWeapons() || Void ||  || ?
|-
| setWeaponTint() || Void || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon ,''GrandTheftMultiplayer.Server.Constant.WeaponTint'' tint  || ?
|-
| getWeaponTint() || ''GrandTheftMultiplayer.Server.Constant.WeaponTint'' || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon  || ?
|-
| setWeaponComponent() || Void || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon ,''GrandTheftMultiplayer.Server.Constant.WeaponComponent'' component || ?
|-
| removeWeaponComponent() || Void || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon ,''GrandTheftMultiplayer.Server.Constant.WeaponComponent'' component || ?
|-
| hasGotWeaponComponent() || Boolean || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon ,''GrandTheftMultiplayer.Server.Constant.WeaponComponent'' component || ?
|-
| GetAllWeaponComponents() || ''GrandTheftMultiplayer.Server.Constant.WeaponComponent[]'' || ''GrandTheftMultiplayer.Shared.WeaponHash'' weapon || ?
|-
| kick() || Void ||  || ?
|-
| kick() || Void || String reason || ?
|-
| ToString() || String ||  || ?
|-
| GetHashCode() || Int32 || || ?
|-
| GetType() || ''System.Type'' || || ?
|}

==Usage example(s)==

'''.invincible'''
<syntaxhighlight lang="C#" >
[Command("godmode")]
public void GodMode(Client player) {
	if(player.invincible) {
		player.invincible = false;
		API.sendChatMessageToPlayer(player, "GodMode Disabled!");
	} else {
		player.invincible = true;
		API.sendChatMessageToPlayer(player, "GodMode Enabled!");
	}
}
</syntaxhighlight>

