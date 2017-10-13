## Vehicle class


The *'Vehicle*' class represent a vehicle in your server.


## Using

*'GrandTheftMultiplayer.Server.Elements.Vehicle*'

<syntaxhighlight lang="C#" >

using GrandTheftMultiplayer.Server.Elements;

</syntaxhighlight>


## Vehicle Properties

| Name | Type | Accessibility | Description |
|---|---|---|---|
| primaryColor | Int32 | Writeable | ? |
| secondaryColor | Int32 | Writeable  | ? |
| customPrimaryColor | *GrandTheftMultiplayer.Server.Constant.Color* | Writeable  | ? |
| customSecondaryColor | *GrandTheftMultiplayer.Server.Constant.Color* | Writeable  | ? |
| health | *System.Single* | Writeable  | ? |
| livery | Int32 | Writeable | ? |
| trailer | *GrandTheftMultiplayer.Server.Elements.Vehicle* | Read-Only | ? |
| traileredBy | *GrandTheftMultiplayer.Server.Elements.Vehicle* | Read-Only | ? |
| siren | Boolean |  Read-Only | ? |
| numberPlate | String | Writeable  | ? |
| specialLight | Boolean | Writeable  | ? |
| bulletproofTyres | Boolean | Writeable  | ? |
| numberPlateStyle | Int32 | Writeable  | ? |
| pearlescentColor | Int32 | Writeable  | ? |
| wheelColor | Int32 | Writeable | ? |
| wheelType | Int32 | Writeable | ? |
| engineStatus | Boolean | Writeable | ? |
| tyreSmokeColor | *GrandTheftMultiplayer.Server.Constant.Color* | Writeable | ? |
| modColor1 | *GrandTheftMultiplayer.Server.Constant.Color* | Writeable | ? |
| modColor2 | *GrandTheftMultiplayer.Server.Constant.Color* | Writeable | ? |
| windowTint | Int32 | Writeable | ? |
| enginePowerMultiplier | *System.Single* | Writeable | ? |
| engineTorqueMultiplier | *System.Single* | Writeable | ? |
| neonColor | *GrandTheftMultiplayer.Server.Constant.Color* | Writeable | ? |
| dashboardColor | Int32 | Writeable | ? |
| trimColor | Int32 | Writeable | ? |
| displayName | String |  Read-Only | ? |
| occupants | *GrandTheftMultiplayer.Server.Elements.Client[]* |  Read-Only | ? |
| handle | *GrandTheftMultiplayer.Shared.NetHandle* | Writeable | ? |
| Value | Int32 |  Read-Only | ? |
| freezePosition | Boolean | Writeable-Only | ? |
| position | *GrandTheftMultiplayer.Shared.Math.Vector3* | Writeable | ? |
| rotation | *GrandTheftMultiplayer.Shared.Math.Vector3* | Writeable | ? |
| IsNull | Boolean | Read-Only | ? |
| exists | Boolean | Read-Only | ? |
| type | *GrandTheftMultiplayer.Shared.EntityType* | Read-Only | ? |
| transparency | Int32 | Writeable | ? |
| dimension | Int32 | Writeable | ? |
| invincible | Boolean | Writeable | ? |
| collisionless | Boolean | Writeable | ? |
| model | Int32 | Read-Only | ? |
| petrolTankHealth | float | Writeable | On Next Update |
| isBike | Boolean | Read-Only | On Next Update |
| isBicycle | Boolean | Read-Only | On Next Update |
| isCar | Boolean | Read-Only | On Next Update |
| isBoat | Boolean | Read-Only | On Next Update |
| isHeli | Boolean | Read-Only | On Next Update |
| isPlane | Boolean | Read-Only | On Next Update |
| isQuad | Boolean | Read-Only | On Next Update |
| isTrain | Boolean | Read-Only | On Next Update |
| isBlimp | Boolean | Read-Only | On Next Update |
| isCargobob | Boolean | Read-Only | On Next Update |
| isEmergencyBoat | Boolean | Read-Only | On Next Update |
| isAmphibiousQuadBike | Boolean | Read-Only | On Next Update |
| isAmphibiousVehicle | Boolean | Read-Only | On Next Update |
| isTrailer | Boolean | Read-Only | On Next Update |


## Vehicle Methods

| Name | Return | Parameters | Description |
|---|---|---|---|
| get_primaryColor() | Int32 |  | ? |
| set_primaryColor() | Void | Int32 value | ? |
| get_secondaryColor() | Int32 |  | ? |
| set_secondaryColor() | Void | Int32 value | ? |
| get_customPrimaryColor() | *GrandTheftMultiplayer.Server.Constant.Color* |  | ? |
| set_customPrimaryColor() | Void | *GrandTheftMultiplayer.Server.Constant.Color* value | ? |
| get_customSecondaryColor() | *GrandTheftMultiplayer.Server.Constant.Color* |  | ? |
| set_customSecondaryColor() | Void | *GrandTheftMultiplayer.Server.Constant.Color* value | ? |
| get_health() | *System.Single* |  | ? |
| set_health() | Void | *System.Single* value | ? |
| get_livery() | Int32 |  | ? |
| set_livery() | Void | Int32 value | ? |
| get_trailer() | *GrandTheftMultiplayer.Server.Elements.Vehicle* |  | ? |
| get_traileredBy() | *GrandTheftMultiplayer.Server.Elements.Vehicle* |  | ? |
| get_siren() | Boolean |  | ? |
| get_numberPlate() | String |  | ? |
| set_numberPlate() | Void | String value | ? |
| get_specialLight() | Boolean |  | ? |
| set_specialLight() | Void | Boolean value | ? |
| get_bulletproofTyres() | Boolean |  | ? |
| set_bulletproofTyres() | Void | Boolean value | ? |
| get_numberPlateStyle() | Int32 |  | ? |
| set_numberPlateStyle() | Void | Int32 value | ? |
| get_pearlescentColor() | Int32 |  | ? |
| set_pearlescentColor() | Void | Int32 value | ? |
| get_wheelColor() | Int32 |  | ? |
| set_wheelColor() | Void | Int32 value | ? |
| get_wheelType() | Int32 |  | ? |
| set_wheelType() | Void | Int32 value | ? |
| get_engineStatus | Boolean |  | ? |
| set_engineStatus | Void | Boolean value | ? |
| get_tyreSmokeColor() | *GrandTheftMultiplayer.Server.Constant.Color* |  | ? |
| set_tyreSmokeColor() | Void | *GrandTheftMultiplayer.Server.Constant.Color* value | ? |
| get_modColor1() | *GrandTheftMultiplayer.Server.Constant.Color* |  | ? |
| set_modColor1() | Void | *GrandTheftMultiplayer.Server.Constant.Color* value | ? |
| get_modColor2() | *GrandTheftMultiplayer.Server.Constant.Color* |  | ? |
| set_modColor2() | Void | *GrandTheftMultiplayer.Server.Constant.Color* value | ? |
| get_windowTint() | Int32 |  | ? |
| set_windowTint() | Void | Int32 value | ? |
| get_enginePowerMultiplier() | *System.Single* |  | ? |
| set_enginePowerMultiplier() | Void | *System.Single* value | ? |
| get_engineTorqueMultiplier() | *System.Single* |  | ? |
| set_engineTorqueMultiplier() | Void | *System.Single* value | ? |
| get_neonColor() | *GrandTheftMultiplayer.Server.Constant.Color* |  | ? |
| set_neonColor() | Void | *GrandTheftMultiplayer.Server.Constant.Color* value | ? |
| get_dashboardColor() | Int32 |  | ? |
| set_dashboardColor() | Void | Int32 value | ? |
| get_trimColor() | Int32 |  | ? |
| set_trimColor() | Void | Int32 value | ? |
| get_displayName() | String |  | ? |
| get_occupants() | *GrandTheftMultiplayer.Server.Elements.Client[]* |  | ? |
| repair() | Void |  | ? |
| popTyre() | Void | Int32 tyre | ? |
| fixTyre() | Void | Int32 tyre | ? |
| isTyrePopped() | Boolean | Int32 tyre | ? |
| breakDoor() | Void | Int32 door | ? |
| fixDoor() | Void | Int32 door | ? |
| isDoorBroken() | Boolean | Int32 door, | ? |
| openDoor() | Void | Int32 door | ? |
| closeDoor() | Void | Int32 door | ? |
| isDoorOpen() | Boolean | Int32 door | ? |
| breakWindow() | Void | Int32 window | ? |
| fixWindow() | Void | Int32 window | ? |
| isWindowBroken() | Boolean | Int32 window | ? |
| setExtra() | Void | Int32 extra, Boolean enabled | ? |
| getExtra() | Boolean | Int32 extra | ? |
| setMod() | Void | Int32 slot, Int32 mod | ? |
| getMod() | Int32 | Int32 slot | ? |
| removeMod() | Void | Int32 slot | ? |
| setNeons() | Void | Int32 slot, Boolean turnedon | ? |
| getNeons() | Boolean | Int32 slot | ? |
| get_handle() | *GrandTheftMultiplayer.Shared.NetHandle* |  | ? |
| get_Value() | Int32 |  | ? |
| GetHashCode() | Int32 |  | ? |
| Equals() | Boolean | *System.Object* obj | ? |
| set_freezePosition() | Void | Boolean value | ? |
| set_position() | Void | *GrandTheftMultiplayer.Shared.Math.Vector3* value | ? |
| get_position() | *GrandTheftMultiplayer.Shared.Math.Vector3* |  | ? |
| set_rotation() | Void | *GrandTheftMultiplayer.Shared.Math.Vector3* value | ? |
| get_rotation() | *GrandTheftMultiplayer.Shared.Math.Vector3* |  | ? |
| get_IsNull() | Boolean |  | ? |
| get_exists() | Boolean |  | ? |
| get_type() | *GrandTheftMultiplayer.Shared.EntityType* |  | ? |
| set_transparency() | Void | Int32 value | ? |
| get_transparency() | Int32 |  | ? |
| set_dimension() | Void | Int32 value | ? |
| get_dimension() | Int32 |  | ? |
| set_invincible() | Void | Boolean value | ? |
| get_invincible() | Boolean |  | ? |
| set_collisionless() | Void | Boolean value | ? |
| get_collisionless() | Boolean |  | ? |
| get_model() | Int32 |  | ? |
| delete() | Void |  | ? |
| movePosition() | Void | *GrandTheftMultiplayer.Shared.Math.Vector3* target, Int32 duration | ? |
| moveRotation() | Void | *GrandTheftMultiplayer.Shared.Math.Vector3* target, Int32 duration | ? |
| attachTo() | Void | *GrandTheftMultiplayer.Shared.NetHandle* entity, String bone, *GrandTheftMultiplayer.Shared.Math.Vector3* offset, *GrandTheftMultiplayer.Shared.Math.Vector3* rotation | ? |
| detach() | Void |  | ? |
| detach() | Void | Boolean resetCollision | ? |
| createParticleEffect() | Void | String ptfxLib, String ptfxName, *GrandTheftMultiplayer.Shared.Math.Vector3* offset, *GrandTheftMultiplayer.Shared.Math.Vector3* rotation, *System.Single* scale, Int32 bone | ? |
| setSyncedData() | Void | String key, *System.Object* value | ? |
| getSyncedData() | *System.Object* | String key | ? |
| resetSyncedData() | Void | String key | ? |
| hasSyncedData() | Boolean | String key | ? |
| setData() | Void | String key, *System.Object* value | ? |
| getData() | *System.Object* | String key | ? |
| resetData() | Void | String key | ? |
| hasData() | Boolean | String key | ? |
| ToString() | String |  | ? |
| GetType() | *System.Type* |  | ? |

