gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1_1final = [];

gdjs.Level_321Code.forEachCount0_3 = 0;

gdjs.Level_321Code.forEachCount1_3 = 0;

gdjs.Level_321Code.forEachIndex3 = 0;

gdjs.Level_321Code.forEachObjects3 = [];

gdjs.Level_321Code.forEachTotalCount3 = 0;

gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDPlatformObjects1= [];
gdjs.Level_321Code.GDPlatformObjects2= [];
gdjs.Level_321Code.GDPlatformObjects3= [];
gdjs.Level_321Code.GDJumpthruObjects1= [];
gdjs.Level_321Code.GDJumpthruObjects2= [];
gdjs.Level_321Code.GDJumpthruObjects3= [];
gdjs.Level_321Code.GDTiledGrassPlatformObjects1= [];
gdjs.Level_321Code.GDTiledGrassPlatformObjects2= [];
gdjs.Level_321Code.GDTiledGrassPlatformObjects3= [];
gdjs.Level_321Code.GDTiledCastlePlatformObjects1= [];
gdjs.Level_321Code.GDTiledCastlePlatformObjects2= [];
gdjs.Level_321Code.GDTiledCastlePlatformObjects3= [];
gdjs.Level_321Code.GDMovingPlatformObjects1= [];
gdjs.Level_321Code.GDMovingPlatformObjects2= [];
gdjs.Level_321Code.GDMovingPlatformObjects3= [];
gdjs.Level_321Code.GDGoLeftObjects1= [];
gdjs.Level_321Code.GDGoLeftObjects2= [];
gdjs.Level_321Code.GDGoLeftObjects3= [];
gdjs.Level_321Code.GDGoRightObjects1= [];
gdjs.Level_321Code.GDGoRightObjects2= [];
gdjs.Level_321Code.GDGoRightObjects3= [];
gdjs.Level_321Code.GDLadderObjects1= [];
gdjs.Level_321Code.GDLadderObjects2= [];
gdjs.Level_321Code.GDLadderObjects3= [];
gdjs.Level_321Code.GDPlayerHitBoxObjects1= [];
gdjs.Level_321Code.GDPlayerHitBoxObjects2= [];
gdjs.Level_321Code.GDPlayerHitBoxObjects3= [];
gdjs.Level_321Code.GDSlimeWalkObjects1= [];
gdjs.Level_321Code.GDSlimeWalkObjects2= [];
gdjs.Level_321Code.GDSlimeWalkObjects3= [];
gdjs.Level_321Code.GDFlyObjects1= [];
gdjs.Level_321Code.GDFlyObjects2= [];
gdjs.Level_321Code.GDFlyObjects3= [];
gdjs.Level_321Code.GDCloudObjects1= [];
gdjs.Level_321Code.GDCloudObjects2= [];
gdjs.Level_321Code.GDCloudObjects3= [];
gdjs.Level_321Code.GDBackgroundObjectsObjects1= [];
gdjs.Level_321Code.GDBackgroundObjectsObjects2= [];
gdjs.Level_321Code.GDBackgroundObjectsObjects3= [];
gdjs.Level_321Code.GDScoreObjects1= [];
gdjs.Level_321Code.GDScoreObjects2= [];
gdjs.Level_321Code.GDScoreObjects3= [];
gdjs.Level_321Code.GDCoinObjects1= [];
gdjs.Level_321Code.GDCoinObjects2= [];
gdjs.Level_321Code.GDCoinObjects3= [];
gdjs.Level_321Code.GDCoinIconObjects1= [];
gdjs.Level_321Code.GDCoinIconObjects2= [];
gdjs.Level_321Code.GDCoinIconObjects3= [];
gdjs.Level_321Code.GDLeftButtonObjects1= [];
gdjs.Level_321Code.GDLeftButtonObjects2= [];
gdjs.Level_321Code.GDLeftButtonObjects3= [];
gdjs.Level_321Code.GDRightButtonObjects1= [];
gdjs.Level_321Code.GDRightButtonObjects2= [];
gdjs.Level_321Code.GDRightButtonObjects3= [];
gdjs.Level_321Code.GDJumpButtonObjects1= [];
gdjs.Level_321Code.GDJumpButtonObjects2= [];
gdjs.Level_321Code.GDJumpButtonObjects3= [];
gdjs.Level_321Code.GDArrowButtonsBgObjects1= [];
gdjs.Level_321Code.GDArrowButtonsBgObjects2= [];
gdjs.Level_321Code.GDArrowButtonsBgObjects3= [];
gdjs.Level_321Code.GDRocketObjects1= [];
gdjs.Level_321Code.GDRocketObjects2= [];
gdjs.Level_321Code.GDRocketObjects3= [];
gdjs.Level_321Code.GDRocketExplosionObjects1= [];
gdjs.Level_321Code.GDRocketExplosionObjects2= [];
gdjs.Level_321Code.GDRocketExplosionObjects3= [];
gdjs.Level_321Code.GDSmokeObjects1= [];
gdjs.Level_321Code.GDSmokeObjects2= [];
gdjs.Level_321Code.GDSmokeObjects3= [];
gdjs.Level_321Code.GDBloodSplatter2Objects1= [];
gdjs.Level_321Code.GDBloodSplatter2Objects2= [];
gdjs.Level_321Code.GDBloodSplatter2Objects3= [];
gdjs.Level_321Code.GDBloodSplatter1Objects1= [];
gdjs.Level_321Code.GDBloodSplatter1Objects2= [];
gdjs.Level_321Code.GDBloodSplatter1Objects3= [];
gdjs.Level_321Code.GDTeleporterObjects1= [];
gdjs.Level_321Code.GDTeleporterObjects2= [];
gdjs.Level_321Code.GDTeleporterObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.condition3IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};
gdjs.Level_321Code.condition3IsTrue_1 = {val:false};


gdjs.Level_321Code.eventsList0x7355c0 = function(runtimeScene) {

{

gdjs.Level_321Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Level_321Code.GDPlayerHitBoxObjects1);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.Level_321Code.GDPlayerHitBoxObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.Level_321Code.eventsList0x7355c0
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Level_321Code.GDRocketObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSmokeObjects1Objects = Hashtable.newFrom({"Smoke": gdjs.Level_321Code.GDSmokeObjects1});gdjs.Level_321Code.eventsList0x735c40 = function(runtimeScene) {

{

gdjs.Level_321Code.GDPlayerObjects2.createFrom(gdjs.Level_321Code.GDPlayerObjects1);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].isFlippedX() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDRocketObjects2.createFrom(gdjs.Level_321Code.GDRocketObjects1);

gdjs.Level_321Code.GDSmokeObjects2.createFrom(gdjs.Level_321Code.GDSmokeObjects1);

{for(var i = 0, len = gdjs.Level_321Code.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketObjects2[i].addPolarForce(180, 1000, 1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSmokeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmokeObjects2[i].addPolarForce(180, 1000, 1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSmokeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmokeObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].isFlippedX()) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDRocketObjects1 */
/* Reuse gdjs.Level_321Code.GDSmokeObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketObjects1[i].addPolarForce(0, 1000, 1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSmokeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmokeObjects1[i].addPolarForce(0, 1000, 1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSmokeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmokeObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketObjects1[i].flipX(false);
}
}}

}


}; //End of gdjs.Level_321Code.eventsList0x735c40
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Level_321Code.GDRocketObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDJumpthruObjects1ObjectsGDgdjs_46Level_95321Code_46GDTiledGrassPlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDTiledCastlePlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDMovingPlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDLadderObjects1Objects = Hashtable.newFrom({"Platform": gdjs.Level_321Code.GDPlatformObjects1, "Jumpthru": gdjs.Level_321Code.GDJumpthruObjects1, "TiledGrassPlatform": gdjs.Level_321Code.GDTiledGrassPlatformObjects1, "TiledCastlePlatform": gdjs.Level_321Code.GDTiledCastlePlatformObjects1, "MovingPlatform": gdjs.Level_321Code.GDMovingPlatformObjects1, "Ladder": gdjs.Level_321Code.GDLadderObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketExplosionObjects1Objects = Hashtable.newFrom({"RocketExplosion": gdjs.Level_321Code.GDRocketExplosionObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.Level_321Code.GDGoLeftObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_321Code.GDMovingPlatformObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.Level_321Code.GDGoRightObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_321Code.GDMovingPlatformObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Level_321Code.GDPlayerHitBoxObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTeleporterObjects1Objects = Hashtable.newFrom({"Teleporter": gdjs.Level_321Code.GDTeleporterObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.Level_321Code.GDGoLeftObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Level_95321Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Level_321Code.GDSlimeWalkObjects1, "Fly": gdjs.Level_321Code.GDFlyObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.Level_321Code.GDGoRightObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Level_95321Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Level_321Code.GDSlimeWalkObjects1, "Fly": gdjs.Level_321Code.GDFlyObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects2Objects = Hashtable.newFrom({"Rocket": gdjs.Level_321Code.GDRocketObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects2Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Level_321Code.GDSlimeWalkObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketExplosionObjects2Objects = Hashtable.newFrom({"RocketExplosion": gdjs.Level_321Code.GDRocketExplosionObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBloodSplatter2Objects2Objects = Hashtable.newFrom({"BloodSplatter2": gdjs.Level_321Code.GDBloodSplatter2Objects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects2Objects = Hashtable.newFrom({"Rocket": gdjs.Level_321Code.GDRocketObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlyObjects2Objects = Hashtable.newFrom({"Fly": gdjs.Level_321Code.GDFlyObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketExplosionObjects2Objects = Hashtable.newFrom({"RocketExplosion": gdjs.Level_321Code.GDRocketExplosionObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBloodSplatter1Objects2Objects = Hashtable.newFrom({"BloodSplatter1": gdjs.Level_321Code.GDBloodSplatter1Objects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Level_321Code.GDPlayerHitBoxObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Level_95321Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.Level_321Code.GDSlimeWalkObjects1, "Fly": gdjs.Level_321Code.GDFlyObjects1});gdjs.Level_321Code.eventsList0x7f5268 = function(runtimeScene) {

}; //End of gdjs.Level_321Code.eventsList0x7f5268
gdjs.Level_321Code.eventsList0x660b58 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDFlyObjects2 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects2 */

gdjs.Level_321Code.forEachTotalCount3 = 0;
gdjs.Level_321Code.forEachObjects3.length = 0;
gdjs.Level_321Code.forEachCount0_3 = gdjs.Level_321Code.GDSlimeWalkObjects2.length;
gdjs.Level_321Code.forEachTotalCount3 += gdjs.Level_321Code.forEachCount0_3;
gdjs.Level_321Code.forEachObjects3.push.apply(gdjs.Level_321Code.forEachObjects3,gdjs.Level_321Code.GDSlimeWalkObjects2);
gdjs.Level_321Code.forEachCount1_3 = gdjs.Level_321Code.GDFlyObjects2.length;
gdjs.Level_321Code.forEachTotalCount3 += gdjs.Level_321Code.forEachCount1_3;
gdjs.Level_321Code.forEachObjects3.push.apply(gdjs.Level_321Code.forEachObjects3,gdjs.Level_321Code.GDFlyObjects2);
for(gdjs.Level_321Code.forEachIndex3 = 0;gdjs.Level_321Code.forEachIndex3 < gdjs.Level_321Code.forEachTotalCount3;++gdjs.Level_321Code.forEachIndex3) {
gdjs.Level_321Code.GDFlyObjects3.createFrom(gdjs.Level_321Code.GDFlyObjects2);

gdjs.Level_321Code.GDSlimeWalkObjects3.createFrom(gdjs.Level_321Code.GDSlimeWalkObjects2);


gdjs.Level_321Code.GDSlimeWalkObjects3.length = 0;
gdjs.Level_321Code.GDFlyObjects3.length = 0;
if (gdjs.Level_321Code.forEachIndex3 < gdjs.Level_321Code.forEachCount0_3) {
    gdjs.Level_321Code.GDSlimeWalkObjects3.push(gdjs.Level_321Code.forEachObjects3[gdjs.Level_321Code.forEachIndex3]);
}
else if (gdjs.Level_321Code.forEachIndex3 < gdjs.Level_321Code.forEachCount0_3+gdjs.Level_321Code.forEachCount1_3) {
    gdjs.Level_321Code.GDFlyObjects3.push(gdjs.Level_321Code.forEachObjects3[gdjs.Level_321Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


}; //End of gdjs.Level_321Code.eventsList0x660b58
gdjs.Level_321Code.eventsList0x661bf0 = function(runtimeScene) {

{

gdjs.Level_321Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Level_321Code.GDPlayerHitBoxObjects1);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDFlyObjects2.createFrom(gdjs.Level_321Code.GDFlyObjects1);

/* Reuse gdjs.Level_321Code.GDPlayerHitBoxObjects2 */
gdjs.Level_321Code.GDSlimeWalkObjects2.createFrom(gdjs.Level_321Code.GDSlimeWalkObjects1);

{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.Level_321Code.eventsList0x660b58(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Level_321Code.GDFlyObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.Level_321Code.GDFlyObjects1.length === 0 ) ? (( gdjs.Level_321Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.Level_321Code.GDFlyObjects1[0].getPointY(""))-(gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getHeight())+(( gdjs.Level_321Code.GDFlyObjects1.length === 0 ) ? (( gdjs.Level_321Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDSlimeWalkObjects1[0].getHeight()) :gdjs.Level_321Code.GDFlyObjects1[0].getHeight())/2 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.Level_321Code.eventsList0x661bf0
gdjs.Level_321Code.eventsList0x739a30 = function(runtimeScene) {

{

gdjs.Level_321Code.GDFlyObjects2.createFrom(gdjs.Level_321Code.GDFlyObjects1);

gdjs.Level_321Code.GDSlimeWalkObjects2.createFrom(gdjs.Level_321Code.GDSlimeWalkObjects1);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.Level_321Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeWalkObjects2[k] = gdjs.Level_321Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFlyObjects2[i].getVariableNumber(gdjs.Level_321Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlyObjects2[k] = gdjs.Level_321Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlyObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlyObjects2 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].addForce(-300, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.Level_321Code.GDFlyObjects2.createFrom(gdjs.Level_321Code.GDFlyObjects1);

gdjs.Level_321Code.GDSlimeWalkObjects2.createFrom(gdjs.Level_321Code.GDSlimeWalkObjects1);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.Level_321Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeWalkObjects2[k] = gdjs.Level_321Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFlyObjects2[i].getVariableNumber(gdjs.Level_321Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlyObjects2[k] = gdjs.Level_321Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlyObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlyObjects2 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

gdjs.Level_321Code.GDRocketObjects2.createFrom(runtimeScene.getObjects("Rocket"));
gdjs.Level_321Code.GDSlimeWalkObjects2.createFrom(gdjs.Level_321Code.GDSlimeWalkObjects1);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects2Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDRocketObjects2 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects2 */
gdjs.Level_321Code.GDSmokeObjects2.createFrom(runtimeScene.getObjects("Smoke"));
gdjs.Level_321Code.GDBloodSplatter2Objects2.length = 0;

gdjs.Level_321Code.GDRocketExplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketExplosionObjects2Objects, (( gdjs.Level_321Code.GDRocketObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDRocketObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSmokeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmokeObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBloodSplatter2Objects2Objects, (( gdjs.Level_321Code.GDSlimeWalkObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSlimeWalkObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDSlimeWalkObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSlimeWalkObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_321Code.GDBloodSplatter2Objects2.createFrom(runtimeScene.getObjects("BloodSplatter2"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDBloodSplatter2Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDBloodSplatter2Objects2[i].hasAnimationEnded() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDBloodSplatter2Objects2[k] = gdjs.Level_321Code.GDBloodSplatter2Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDBloodSplatter2Objects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBloodSplatter2Objects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDBloodSplatter2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBloodSplatter2Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_321Code.GDFlyObjects2.createFrom(gdjs.Level_321Code.GDFlyObjects1);

gdjs.Level_321Code.GDRocketObjects2.createFrom(runtimeScene.getObjects("Rocket"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlyObjects2Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlyObjects2 */
/* Reuse gdjs.Level_321Code.GDRocketObjects2 */
gdjs.Level_321Code.GDSmokeObjects2.createFrom(runtimeScene.getObjects("Smoke"));
gdjs.Level_321Code.GDBloodSplatter1Objects2.length = 0;

gdjs.Level_321Code.GDRocketExplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketExplosionObjects2Objects, (( gdjs.Level_321Code.GDRocketObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDRocketObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSmokeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmokeObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBloodSplatter1Objects2Objects, (( gdjs.Level_321Code.GDFlyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDFlyObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDFlyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDFlyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_321Code.GDBloodSplatter1Objects2.createFrom(runtimeScene.getObjects("BloodSplatter1"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDBloodSplatter1Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDBloodSplatter1Objects2[i].hasAnimationEnded() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDBloodSplatter1Objects2[k] = gdjs.Level_321Code.GDBloodSplatter1Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDBloodSplatter1Objects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBloodSplatter1Objects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDBloodSplatter1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBloodSplatter1Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

/* Reuse gdjs.Level_321Code.GDFlyObjects1 */
gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerHitBoxObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Level_95321Code_46GDFlyObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0x661bf0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level_321Code.eventsList0x739a30
gdjs.Level_321Code.eventsList0x7f1628 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDFlyObjects1 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeWalkObjects1[k] = gdjs.Level_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlyObjects1[k] = gdjs.Level_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlyObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlyObjects1 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Level_321Code.eventsList0x7f1628
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.Level_321Code.GDPlayerHitBoxObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level_321Code.GDCoinObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.Level_321Code.GDLeftButtonObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.Level_321Code.GDRightButtonObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.Level_321Code.GDJumpButtonObjects1});gdjs.Level_321Code.eventsList0xb0a98 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "FireRate");
}}

}


{


{
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects1[0].getPointX(""))-12,(( gdjs.Level_321Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDRocketExplosionObjects1.createFrom(runtimeScene.getObjects("RocketExplosion"));
{for(var i = 0, len = gdjs.Level_321Code.GDRocketExplosionObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketExplosionObjects1[i].setZOrder(gdjs.Level_321Code.GDRocketExplosionObjects1[i].getZOrder() + (20));
}
}}

}


{


{
}

}


{


{
}

}


{



}


{

gdjs.Level_321Code.GDPlayerObjects1.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.GDPlayerObjects1_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects1_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects1_1final.push(gdjs.Level_321Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.Level_321Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects1_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects1_1final.push(gdjs.Level_321Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.Level_321Code.GDPlayerObjects1.createFrom(gdjs.Level_321Code.GDPlayerObjects1_1final);
}
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects1[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0x7355c0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "FireRate");
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDRocketObjects1.length = 0;

gdjs.Level_321Code.GDSmokeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("BulletPoint")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("BulletPoint")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSmokeObjects1Objects, (( gdjs.Level_321Code.GDRocketObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects1[0].getPointX("SmokePoint")), (( gdjs.Level_321Code.GDRocketObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects1[0].getPointY("SmokePoint")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}
{ //Subevents
gdjs.Level_321Code.eventsList0x735c40(runtimeScene);} //End of subevents
}

}


{

gdjs.Level_321Code.GDJumpthruObjects1.createFrom(runtimeScene.getObjects("Jumpthru"));
gdjs.Level_321Code.GDLadderObjects1.createFrom(runtimeScene.getObjects("Ladder"));
gdjs.Level_321Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));
gdjs.Level_321Code.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));
gdjs.Level_321Code.GDRocketObjects1.createFrom(runtimeScene.getObjects("Rocket"));
gdjs.Level_321Code.GDTiledCastlePlatformObjects1.createFrom(runtimeScene.getObjects("TiledCastlePlatform"));
gdjs.Level_321Code.GDTiledGrassPlatformObjects1.createFrom(runtimeScene.getObjects("TiledGrassPlatform"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDJumpthruObjects1ObjectsGDgdjs_46Level_95321Code_46GDTiledGrassPlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDTiledCastlePlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDMovingPlatformObjects1ObjectsGDgdjs_46Level_95321Code_46GDLadderObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDRocketObjects1 */
gdjs.Level_321Code.GDSmokeObjects1.createFrom(runtimeScene.getObjects("Smoke"));
gdjs.Level_321Code.GDRocketExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRocketExplosionObjects1Objects, (( gdjs.Level_321Code.GDRocketObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDRocketObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDRocketObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSmokeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmokeObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level_321Code.GDRocketExplosionObjects1.createFrom(runtimeScene.getObjects("RocketExplosion"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDRocketExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDRocketExplosionObjects1[i].hasAnimationEnded() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDRocketExplosionObjects1[k] = gdjs.Level_321Code.GDRocketExplosionObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDRocketExplosionObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDRocketExplosionObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDRocketExplosionObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRocketExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.Level_321Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
{for(var i = 0, len = gdjs.Level_321Code.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.Level_321Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.Level_321Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoLeftObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMovingPlatformObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMovingPlatformObjects1[i].addForce(-150, 0, 1);
}
}}

}


{

gdjs.Level_321Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.Level_321Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoRightObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMovingPlatformObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{

gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
gdjs.Level_321Code.GDTeleporterObjects1.createFrom(runtimeScene.getObjects("Teleporter"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerHitBoxObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTeleporterObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{



}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
{for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.Level_321Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Level_321Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.Level_321Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoLeftObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Level_95321Code_46GDFlyObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlyObjects1 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.Level_321Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects1[i].returnVariable(gdjs.Level_321Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.Level_321Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Level_321Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.Level_321Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoRightObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46Level_95321Code_46GDFlyObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlyObjects1 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.Level_321Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects1[i].returnVariable(gdjs.Level_321Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.Level_321Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Level_321Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeWalkObjects1[k] = gdjs.Level_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlyObjects1[k] = gdjs.Level_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlyObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0x739a30(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Level_321Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.Level_321Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeWalkObjects1[k] = gdjs.Level_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlyObjects1[k] = gdjs.Level_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlyObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeWalkObjects1[k] = gdjs.Level_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlyObjects1[k] = gdjs.Level_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlyObjects1.length = k;}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeWalkObjects1[k] = gdjs.Level_321Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDFlyObjects1[k] = gdjs.Level_321Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFlyObjects1.length = k;}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFlyObjects1 */
/* Reuse gdjs.Level_321Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeWalkObjects1[i].setOpacity(gdjs.Level_321Code.GDSlimeWalkObjects1[i].getOpacity() - (50*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.Level_321Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlyObjects1[i].setOpacity(gdjs.Level_321Code.GDFlyObjects1[i].getOpacity() - (50*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList0x7f1628(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.Level_321Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerHitBoxObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCoinObjects1Objects, false, runtimeScene);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDCoinObjects1[k] = gdjs.Level_321Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCoinObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{

gdjs.Level_321Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDCoinObjects1[k] = gdjs.Level_321Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCoinObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCoinObjects1[i].setOpacity(gdjs.Level_321Code.GDCoinObjects1[i].getOpacity() - (255*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCoinObjects1[i].addForce(0, -30, 0);
}
}}

}


{

gdjs.Level_321Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDCoinObjects1[k] = gdjs.Level_321Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCoinObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


{


{
gdjs.Level_321Code.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects1[i].setString("x "+gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.Level_321Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.Level_321Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.Level_321Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.Level_321Code.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321Code.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321Code.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.Level_321Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.Level_321Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.Level_321Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level_321Code.eventsList0xb0a98


gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDPlatformObjects1.length = 0;
gdjs.Level_321Code.GDPlatformObjects2.length = 0;
gdjs.Level_321Code.GDPlatformObjects3.length = 0;
gdjs.Level_321Code.GDJumpthruObjects1.length = 0;
gdjs.Level_321Code.GDJumpthruObjects2.length = 0;
gdjs.Level_321Code.GDJumpthruObjects3.length = 0;
gdjs.Level_321Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.Level_321Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.Level_321Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.Level_321Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs.Level_321Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs.Level_321Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs.Level_321Code.GDMovingPlatformObjects1.length = 0;
gdjs.Level_321Code.GDMovingPlatformObjects2.length = 0;
gdjs.Level_321Code.GDMovingPlatformObjects3.length = 0;
gdjs.Level_321Code.GDGoLeftObjects1.length = 0;
gdjs.Level_321Code.GDGoLeftObjects2.length = 0;
gdjs.Level_321Code.GDGoLeftObjects3.length = 0;
gdjs.Level_321Code.GDGoRightObjects1.length = 0;
gdjs.Level_321Code.GDGoRightObjects2.length = 0;
gdjs.Level_321Code.GDGoRightObjects3.length = 0;
gdjs.Level_321Code.GDLadderObjects1.length = 0;
gdjs.Level_321Code.GDLadderObjects2.length = 0;
gdjs.Level_321Code.GDLadderObjects3.length = 0;
gdjs.Level_321Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.Level_321Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.Level_321Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.Level_321Code.GDSlimeWalkObjects1.length = 0;
gdjs.Level_321Code.GDSlimeWalkObjects2.length = 0;
gdjs.Level_321Code.GDSlimeWalkObjects3.length = 0;
gdjs.Level_321Code.GDFlyObjects1.length = 0;
gdjs.Level_321Code.GDFlyObjects2.length = 0;
gdjs.Level_321Code.GDFlyObjects3.length = 0;
gdjs.Level_321Code.GDCloudObjects1.length = 0;
gdjs.Level_321Code.GDCloudObjects2.length = 0;
gdjs.Level_321Code.GDCloudObjects3.length = 0;
gdjs.Level_321Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjectsObjects3.length = 0;
gdjs.Level_321Code.GDScoreObjects1.length = 0;
gdjs.Level_321Code.GDScoreObjects2.length = 0;
gdjs.Level_321Code.GDScoreObjects3.length = 0;
gdjs.Level_321Code.GDCoinObjects1.length = 0;
gdjs.Level_321Code.GDCoinObjects2.length = 0;
gdjs.Level_321Code.GDCoinObjects3.length = 0;
gdjs.Level_321Code.GDCoinIconObjects1.length = 0;
gdjs.Level_321Code.GDCoinIconObjects2.length = 0;
gdjs.Level_321Code.GDCoinIconObjects3.length = 0;
gdjs.Level_321Code.GDLeftButtonObjects1.length = 0;
gdjs.Level_321Code.GDLeftButtonObjects2.length = 0;
gdjs.Level_321Code.GDLeftButtonObjects3.length = 0;
gdjs.Level_321Code.GDRightButtonObjects1.length = 0;
gdjs.Level_321Code.GDRightButtonObjects2.length = 0;
gdjs.Level_321Code.GDRightButtonObjects3.length = 0;
gdjs.Level_321Code.GDJumpButtonObjects1.length = 0;
gdjs.Level_321Code.GDJumpButtonObjects2.length = 0;
gdjs.Level_321Code.GDJumpButtonObjects3.length = 0;
gdjs.Level_321Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.Level_321Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.Level_321Code.GDArrowButtonsBgObjects3.length = 0;
gdjs.Level_321Code.GDRocketObjects1.length = 0;
gdjs.Level_321Code.GDRocketObjects2.length = 0;
gdjs.Level_321Code.GDRocketObjects3.length = 0;
gdjs.Level_321Code.GDRocketExplosionObjects1.length = 0;
gdjs.Level_321Code.GDRocketExplosionObjects2.length = 0;
gdjs.Level_321Code.GDRocketExplosionObjects3.length = 0;
gdjs.Level_321Code.GDSmokeObjects1.length = 0;
gdjs.Level_321Code.GDSmokeObjects2.length = 0;
gdjs.Level_321Code.GDSmokeObjects3.length = 0;
gdjs.Level_321Code.GDBloodSplatter2Objects1.length = 0;
gdjs.Level_321Code.GDBloodSplatter2Objects2.length = 0;
gdjs.Level_321Code.GDBloodSplatter2Objects3.length = 0;
gdjs.Level_321Code.GDBloodSplatter1Objects1.length = 0;
gdjs.Level_321Code.GDBloodSplatter1Objects2.length = 0;
gdjs.Level_321Code.GDBloodSplatter1Objects3.length = 0;
gdjs.Level_321Code.GDTeleporterObjects1.length = 0;
gdjs.Level_321Code.GDTeleporterObjects2.length = 0;
gdjs.Level_321Code.GDTeleporterObjects3.length = 0;

gdjs.Level_321Code.eventsList0xb0a98(runtimeScene);
return;
}
gdjs['Level_321Code'] = gdjs.Level_321Code;
