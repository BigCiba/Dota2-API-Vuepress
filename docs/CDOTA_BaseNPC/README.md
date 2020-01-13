# CDOTA_BaseNPC
Function|Description|Client
--|--|:--:
[handle AddAbility(pszAbilityName)](AddAbility)|Add an ability to this unit by name.|✖
[void AddActivityModifier(szName)](AddActivityModifier)|Add an activity modifier that affects future StartGesture calls|✖
[handle AddItem(hItem)](AddItem)|Add an item to this unit's inventory.|✖
[handle AddItemByName(pszItemName)](AddItemByName)|Add an item to this unit's inventory.|✖
[handle AddNewModifier(hCaster, hAbility, pszScriptName, hModifierTable)](AddNewModifier)|给一个单位添加modifier，hModifierTable可以传入持续时间和其他自定义参数，自定义参数可以在modifier中获得。|✖
[void AddNoDraw()](AddNoDraw)|Adds the no draw flag.|✖
[void AddSpeechBubble(iBubble, pszSpeech, flDuration, unOffsetX, unOffsetY)](AddSpeechBubble)|Add a speech bubble(1-4 live at a time) to this NPC.|✖
[void AlertNearbyUnits(hAttacker, hAbility)](AlertNearbyUnits)||✖
[void AngerNearbyUnits()](AngerNearbyUnits)||✖
[void AttackNoEarlierThan(flTime)](AttackNoEarlierThan)||✖
[bool AttackReady()](AttackReady)||✖
[float BoundingRadius2D()](BoundingRadius2D)||✖
[bool CanEntityBeSeenByMyTeam(hEntity)](CanEntityBeSeenByMyTeam)|Check FoW to see if an entity is visible.|✖
[bool CanSellItems()](CanSellItems)|Query if this unit can sell items.|✖
[void CastAbilityImmediately(hAbility, iPlayerIndex)](CastAbilityImmediately)|Cast an ability immediately.|✖
[void CastAbilityNoTarget(hAbility, iPlayerIndex)](CastAbilityNoTarget)|Cast an ability with no target.|✖
[void CastAbilityOnPosition(vPosition, hAbility, iPlayerIndex)](CastAbilityOnPosition)|Cast an ability on a position.|✖
[void CastAbilityOnTarget(hTarget, hAbility, iPlayerIndex)](CastAbilityOnTarget)|Cast an ability on a target entity.|✖
[void CastAbilityToggle(hAbility, iPlayerIndex)](CastAbilityToggle)|Toggle an ability.|✖
[void ClearActivityModifiers()](ClearActivityModifiers)|Clear Activity modifiers|✖
[void DestroyAllSpeechBubbles()](DestroyAllSpeechBubbles)||✖
[void DisassembleItem(hItem)](DisassembleItem)|Disassemble the passed item in this unit's inventory.|✖
[void DropItemAtPosition(vDest, hItem)](DropItemAtPosition)|Drop an item at a given point.|✖
[void DropItemAtPositionImmediate(hItem, vPosition)](DropItemAtPositionImmediate)|Immediately drop a carried item at a given position.|✖
[void EjectItemFromStash(hItem)](EjectItemFromStash)|Drops the selected item out of this unit's stash.|✖
[void FaceTowards(vTarget)](FaceTowards)|This unit will be set to face the target point.|✖
[void FadeGesture(nActivity)](FadeGesture)|Fade and remove the given gesture activity.|✖
[handle FindAbilityByName(pAbilityName)](FindAbilityByName)|Retrieve an ability by name from the unit.|✖
[table FindAllModifiers()](FindAllModifiers)|Returns a table of all of the modifiers on the NPC.|✖
[table FindAllModifiersByName(pszScriptName)](FindAllModifiersByName)|Returns a table of all of the modifiers on the NPC with the passed name (modifierName)|✖
[handle FindItemInInventory(pszItemName)](FindItemInInventory)|Get handle to first item in inventory, else nil.|✖
[handle FindModifierByName(pszScriptName)](FindModifierByName)|Return a handle to the modifier of the given name if found, else nil (string Name )|✖
[handle FindModifierByNameAndCaster(pszScriptName, hCaster)](FindModifierByNameAndCaster)|Return a handle to the modifier of the given name from the passed caster if found, else nil ( string Name, hCaster )|✖
[void ForceKill(bReincarnate)](ForceKill)|Kill this unit immediately.|✖
[void ForcePlayActivityOnce(nActivity)](ForcePlayActivityOnce)|Play an activity once, and then go back to idle.|✖
[handle GetAbilityByIndex(iIndex)](GetAbilityByIndex)|Retrieve an ability by index from the unit.|✖
[int GetAbilityCount()](GetAbilityCount)||✔
[float GetAcquisitionRange()](GetAcquisitionRange)|Gets the range at which this unit will auto-acquire.|✖
[float GetAdditionalBattleMusicWeight()](GetAdditionalBattleMusicWeight)|Combat involving this creature will have this weight added to the music calcuations.|✖
[handle GetAggroTarget()](GetAggroTarget)|Returns this unit's aggro target.|✖
[float GetAttackAnimationPoint()](GetAttackAnimationPoint)||✖
[int GetAttackCapability()](GetAttackCapability)||✖
[int GetAttackDamage()](GetAttackDamage)|Returns a random integer between the minimum and maximum base damage of the unit.|✖
[float GetAttackRangeBuffer()](GetAttackRangeBuffer)|Gets the attack range buffer.|✖
[float GetAttackSpeed()](GetAttackSpeed)||✔
[handle GetAttackTarget()](GetAttackTarget)||✖
[float GetAttacksPerSecond()](GetAttacksPerSecond)||✔
[int GetAverageTrueAttackDamage(hTarget)](GetAverageTrueAttackDamage)|Returns the average value of the minimum and maximum damage values.|✖
[int GetBaseAttackRange()](GetBaseAttackRange)||✖
[float GetBaseAttackTime()](GetBaseAttackTime)||✔
[int GetBaseDamageMax()](GetBaseDamageMax)|Get the maximum attack damage of this unit.|✖
[int GetBaseDamageMin()](GetBaseDamageMin)|Get the minimum attack damage of this unit.|✖
[int GetBaseDayTimeVisionRange()](GetBaseDayTimeVisionRange)|Returns the vision range before modifiers.|✖
[float GetBaseHealthRegen()](GetBaseHealthRegen)||✖
[float GetBaseMagicalResistanceValue()](GetBaseMagicalResistanceValue)|Returns base magical armor value.|✔
[float GetBaseMaxHealth()](GetBaseMaxHealth)|Gets the base max health value.|✖
[float GetBaseMoveSpeed()](GetBaseMoveSpeed)||✔
[int GetBaseNightTimeVisionRange()](GetBaseNightTimeVisionRange)|Returns the vision range after modifiers.|✖
[float GetBonusManaRegen()](GetBonusManaRegen)|This Mana regen is derived from constant bonuses like Basilius.|✖
[float GetCastPoint(bAttack)](GetCastPoint)||✖
[float GetCastRangeBonus()](GetCastRangeBonus)||✔
[handle GetCloneSource()](GetCloneSource)|Get clone source (Meepo Prime, if this is a Meepo)|✖
[float GetCollisionPadding()](GetCollisionPadding)|Returns the size of the collision padding around the hull.|✔
[float GetCooldownReduction()](GetCooldownReduction)||✔
[float GetCreationTime()](GetCreationTime)||✖
[handle GetCurrentActiveAbility()](GetCurrentActiveAbility)|Get the ability this unit is currently casting.|✖
[int GetCurrentVisionRange()](GetCurrentVisionRange)|Gets the current vision range.|✔
[handle GetCursorCastTarget()](GetCursorCastTarget)||✖
[Vector GetCursorPosition()](GetCursorPosition)||✖
[bool GetCursorTargetingNothing()](GetCursorTargetingNothing)||✖
[int GetDayTimeVisionRange()](GetDayTimeVisionRange)|Returns the vision range after modifiers.|✔
[int GetDeathXP()](GetDeathXP)|Get the XP bounty on this unit.|✖
[float GetDisplayAttackSpeed()](GetDisplayAttackSpeed)|Attack speed expressed as constant value|✖
[float GetEvasion()](GetEvasion)||✖
[handle GetForceAttackTarget()](GetForceAttackTarget)||✖
[int GetGoldBounty()](GetGoldBounty)|Get the gold bounty on this unit.|✖
[float GetHasteFactor()](GetHasteFactor)||✔
[int GetHealthDeficit()](GetHealthDeficit)|Returns integer amount of health missing from max.|✖
[int GetHealthPercent()](GetHealthPercent)|Get the current health percent of the unit.|✔
[float GetHealthRegen()](GetHealthRegen)||✖
[float GetHullRadius()](GetHullRadius)|Get the collision hull radius of this NPC.|✔
[float GetIdealSpeed()](GetIdealSpeed)|Returns speed after all modifiers.|✔
[float GetIdealSpeedNoSlows()](GetIdealSpeedNoSlows)|Returns speed after all modifiers, but excluding those that reduce speed.|✔
[float GetIncreasedAttackSpeed()](GetIncreasedAttackSpeed)||✔
[handle GetInitialGoalEntity()](GetInitialGoalEntity)|Returns the initial waypoint goal for this NPC.|✖
[Vector GetInitialGoalPosition()](GetInitialGoalPosition)|Get waypoint position for this NPC.|✖
[handle GetItemInSlot(i)](GetItemInSlot)|Returns nth item in inventory slot (index is zero based).|✖
[float GetLastAttackTime()](GetLastAttackTime)||✖
[float GetLastDamageTime()](GetLastDamageTime)|Get the last time this NPC took damage|✖
[float GetLastIdleChangeTime()](GetLastIdleChangeTime)|Get the last game time that this unit switched to/from idle state.|✖
[int GetLevel()](GetLevel)|Returns the level of this unit.|✔
[float GetMagicalArmorValue()](GetMagicalArmorValue)|Returns current magical armor value.|✔
[int GetMainControllingPlayer()](GetMainControllingPlayer)|Returns the player ID of the controlling player.|✖
[float GetMana()](GetMana)|Get the mana on this unit.|✔
[int GetManaPercent()](GetManaPercent)|Get the percent of mana remaining.|✖
[float GetManaRegen()](GetManaRegen)||✔
[float GetMaxMana()](GetMaxMana)|Get the maximum mana of this unit.|✔
[int GetMaximumGoldBounty()](GetMaximumGoldBounty)|Get the maximum gold bounty for this unit.|✖
[int GetMinimumGoldBounty()](GetMinimumGoldBounty)|Get the minimum gold bounty for this unit.|✖
[float GetModelRadius()](GetModelRadius)||✔
[int GetModifierCount()](GetModifierCount)|How many modifiers does this unit have?|✖
[string GetModifierNameByIndex(nIndex)](GetModifierNameByIndex)|Get a modifier name by index.|✖
[int GetModifierStackCount(pszScriptName, hCaster)](GetModifierStackCount)|Gets the stack count of a given modifier.|✔
[float GetMoveSpeedModifier(flBaseSpeed, bReturnUnslowed)](GetMoveSpeedModifier)||✔
[bool GetMustReachEachGoalEntity()](GetMustReachEachGoalEntity)|Set whether this NPC is required to reach each goal entity, rather than being allowed to unkink their path.|✖
[bool GetNeverMoveToClearSpace()](GetNeverMoveToClearSpace)|If set to true, we will never attempt to move this unit to clear space, even when it unphases.|✖
[int GetNightTimeVisionRange()](GetNightTimeVisionRange)|Returns the vision range after modifiers.|✔
[int GetOpposingTeamNumber()](GetOpposingTeamNumber)||✔
[float GetPaddedCollisionRadius()](GetPaddedCollisionRadius)|Get the collision hull radius (including padding) of this NPC.|✔
[float GetPhysicalArmorBaseValue()](GetPhysicalArmorBaseValue)|Returns base physical armor value.|✔
[float GetPhysicalArmorValue(bIgnoreBase)](GetPhysicalArmorValue)|Returns current physical armor value.|✔
[handle GetPlayerOwner()](GetPlayerOwner)|Returns the player that owns this unit.|✖
[int GetPlayerOwnerID()](GetPlayerOwnerID)|Get the owner player ID for this unit.|✔
[int GetProjectileSpeed()](GetProjectileSpeed)||✖
[float GetRangeToUnit(hNPC)](GetRangeToUnit)||✖
[string GetRangedProjectileName()](GetRangedProjectileName)||✖
[float GetSecondsPerAttack()](GetSecondsPerAttack)||✔
[float GetSpellAmplification(bBaseOnly)](GetSpellAmplification)||✖
[float GetStatusResistance()](GetStatusResistance)||✖
[int GetTotalPurchasedUpgradeGoldCost()](GetTotalPurchasedUpgradeGoldCost)|Get how much gold has been spent on ability upgrades.|✔
[string GetUnitLabel()](GetUnitLabel)||✔
[string GetUnitName()](GetUnitName)|Get the name of this unit.|✔
[void GiveMana(flMana)](GiveMana)|Give mana to this unit, this can be used for mana gained by abilities or item usage.|✖
[bool HasAbility(pszAbilityName)](HasAbility)|See whether this unit has an ability by name.|✖
[bool HasAnyActiveAbilities()](HasAnyActiveAbilities)||✖
[bool HasAttackCapability()](HasAttackCapability)||✔
[bool HasFlyMovementCapability()](HasFlyMovementCapability)||✔
[bool HasFlyingVision()](HasFlyingVision)||✔
[bool HasGroundMovementCapability()](HasGroundMovementCapability)||✔
[bool HasInventory()](HasInventory)|Does this unit have an inventory.|✖
[bool HasItemInInventory(pItemName)](HasItemInInventory)|See whether this unit has an item by name.|✔
[bool HasModifier(pszScriptName)](HasModifier)|Sees if this unit has a given modifier.|✔
[bool HasMovementCapability()](HasMovementCapability)||✔
[bool HasScepter()](HasScepter)|判断单位是否拥有阿哈利姆神杖升级效果|✔
[void Heal(flAmount, hInflictor)](Heal)|Heal this unit.|✖
[void Hold()](Hold)|Hold position.|✖
[void Interrupt()](Interrupt)||✖
[void InterruptChannel()](InterruptChannel)||✖
[void InterruptMotionControllers(bFindClearSpace)](InterruptMotionControllers)||✖
[bool IsAlive()](IsAlive)|Is this unit alive?|✖
[bool IsAncient()](IsAncient)|Is this unit an Ancient?|✔
[bool IsAttackImmune()](IsAttackImmune)||✔
[bool IsAttacking()](IsAttacking)||✖
[bool IsAttackingEntity(hEntity)](IsAttackingEntity)||✖
[bool IsBarracks()](IsBarracks)|Is this unit a Barracks?|✔
[bool IsBlind()](IsBlind)||✔
[bool IsBlockDisabled()](IsBlockDisabled)||✖
[bool IsBoss()](IsBoss)|Is this unit a boss?|✔
[bool IsBuilding()](IsBuilding)|Is this unit a building?|✔
[bool IsChanneling()](IsChanneling)|Is this unit currently channeling a spell?|✖
[bool IsClone()](IsClone)|Is this unit a clone? (Meepo)|✖
[bool IsCommandRestricted()](IsCommandRestricted)||✔
[bool IsConsideredHero()](IsConsideredHero)|Is this unit a considered a hero for targeting purposes?|✔
[bool IsControllableByAnyPlayer()](IsControllableByAnyPlayer)|Is this unit controlled by any non-bot player?|✔
[bool IsCourier()](IsCourier)|Is this unit a courier?|✔
[bool IsCreature()](IsCreature)|Is this a Creature type NPC?|✔
[bool IsCreep()](IsCreep)|Is this unit a creep?|✔
[bool IsDeniable()](IsDeniable)||✔
[bool IsDisarmed()](IsDisarmed)||✔
[bool IsDominated()](IsDominated)||✔
[bool IsEvadeDisabled()](IsEvadeDisabled)||✔
[bool IsFort()](IsFort)|Is this unit an Ancient?|✔
[bool IsFrozen()](IsFrozen)||✔
[bool IsHero()](IsHero)|Is this a hero or hero illusion?|✔
[bool IsHexed()](IsHexed)||✔
[bool IsIdle()](IsIdle)|Is this creature currently idle?|✖
[bool IsIllusion()](IsIllusion)||✔
[bool IsInRangeOfShop(nShopType, bPhysical)](IsInRangeOfShop)|Ask whether this unit is in range of the specified shop ( DOTA_SHOP_TYPE shop, bool bMustBePhysicallyNear|✖
[bool IsInvisible()](IsInvisible)||✔
[bool IsInvulnerable()](IsInvulnerable)||✔
[bool IsLowAttackPriority()](IsLowAttackPriority)||✔
[bool IsMagicImmune()](IsMagicImmune)||✔
[bool IsMovementImpaired()](IsMovementImpaired)||✖
[bool IsMoving()](IsMoving)|Is this unit moving?|✔
[bool IsMuted()](IsMuted)||✔
[bool IsNeutralUnitType()](IsNeutralUnitType)|Is this a neutral?|✔
[bool IsNightmared()](IsNightmared)||✔
[bool IsOpposingTeam(nTeam)](IsOpposingTeam)||✖
[bool IsOther()](IsOther)|Is this unit a ward-type unit?|✔
[bool IsOutOfGame()](IsOutOfGame)||✔
[bool IsOwnedByAnyPlayer()](IsOwnedByAnyPlayer)|Is this unit owned by any non-bot player?|✔
[bool IsPhantom()](IsPhantom)|Is this a phantom unit?|✔
[bool IsPhantomBlocker()](IsPhantomBlocker)||✖
[bool IsPhased()](IsPhased)||✖
[bool IsPositionInRange(vPosition, flRange)](IsPositionInRange)||✖
[bool IsRangedAttacker()](IsRangedAttacker)|Is this unit a ranged attacker?|✔
[bool IsRealHero()](IsRealHero)|Is this a real hero?|✔
[bool IsRooted()](IsRooted)||✔
[bool IsShrine()](IsShrine)|Is this a shrine?|✖
[bool IsSilenced()](IsSilenced)||✔
[bool IsSpeciallyDeniable()](IsSpeciallyDeniable)||✔
[bool IsStunned()](IsStunned)||✔
[bool IsSummoned()](IsSummoned)|Is this unit summoned?|✔
[bool IsTempestDouble()](IsTempestDouble)||✖
[bool IsTower()](IsTower)|Is this a tower?|✔
[bool IsUnableToMiss()](IsUnableToMiss)||✖
[bool IsUnselectable()](IsUnselectable)||✔
[bool IsUntargetable()](IsUntargetable)||✔
[void Kill(hAbility, hAttacker)](Kill)|Kills this NPC, with the params Ability and Attacker.|✖
[void MakeIllusion()](MakeIllusion)||✖
[void MakePhantomBlocker()](MakePhantomBlocker)||✖
[void MakeVisibleDueToAttack(iTeam, flRadius)](MakeVisibleDueToAttack)||✖
[void MakeVisibleToTeam(iTeam, flDuration)](MakeVisibleToTeam)||✖
[void ManageModelChanges()](ManageModelChanges)||✖
[void ModifyHealth(iDesiredHealthValue, hAbility, bLethal, iAdditionalFlags)](ModifyHealth)|Sets the health to a specific value, with optional flags or inflictors.|✖
[void MoveToNPC(hNPC)](MoveToNPC)|Move to follow a unit.|✖
[void MoveToNPCToGiveItem(hNPC, hItem)](MoveToNPCToGiveItem)|Give an item to another unit.|✖
[void MoveToPosition(vDest)](MoveToPosition)|Issue a Move-To command.|✖
[void MoveToPositionAggressive(vDest)](MoveToPositionAggressive)|Issue an Attack-Move-To command.|✖
[void MoveToTargetToAttack(hTarget)](MoveToTargetToAttack)|Move to a target to attack.|✖
[bool NoHealthBar()](NoHealthBar)||✔
[bool NoTeamMoveTo()](NoTeamMoveTo)||✔
[bool NoTeamSelect()](NoTeamSelect)||✔
[bool NoUnitCollision()](NoUnitCollision)||✔
[bool NotOnMinimap()](NotOnMinimap)||✔
[bool NotOnMinimapForEnemies()](NotOnMinimapForEnemies)||✔
[void NotifyWearablesOfModelChange(bOriginalModel)](NotifyWearablesOfModelChange)||✖
[bool PassivesDisabled()](PassivesDisabled)|判断该单位是否被禁用被动|✔
[void PatrolToPosition(vDest)](PatrolToPosition)|Issue a Patrol-To command.|✖
[void PerformAttack(hTarget, bUseCastAttackOrb, bProcessProcs, bSkipCooldown, bIgnoreInvis, bUseProjectile, bFakeAttack, bNeverMiss)](PerformAttack)|Performs an attack on a target.|✖
[void PickupDroppedItem(hItem)](PickupDroppedItem)|Pick up a dropped item.|✖
[void PickupRune(hItem)](PickupRune)|Pick up a rune.|✖
[void PlayVCD(pVCD)](PlayVCD)|Play a VCD on the NPC.|✖
[bool ProvidesVision()](ProvidesVision)||✔
[void Purge(bRemovePositiveBuffs, bRemoveDebuffs, bFrameOnly, bRemoveStuns, bRemoveExceptions)](Purge)|(bool RemovePositiveBuffs, bool RemoveDebuffs, bool BuffsCreatedThisFrameOnly, bool RemoveStuns, bool RemoveExceptions|✖
[void ReduceMana(flAmount)](ReduceMana)|Remove mana from this unit, this can be used for involuntary mana loss, not for mana that is spent.|✖
[void RemoveAbility(pszAbilityName)](RemoveAbility)|Remove an ability from this unit by name.|✖
[void RemoveAbilityByHandle(hAbility)](RemoveAbilityByHandle)|Remove the passed ability from this unit.|✖
[void RemoveGesture(nActivity)](RemoveGesture)|Remove the given gesture activity.|✖
[void RemoveHorizontalMotionController(hBuff)](RemoveHorizontalMotionController)||✖
[void RemoveItem(hItem)](RemoveItem)|Removes the passed item from this unit's inventory and deletes it.|✖
[void RemoveModifierByName(pszScriptName)](RemoveModifierByName)|Removes a modifier.|✖
[void RemoveModifierByNameAndCaster(pszScriptName, hCaster)](RemoveModifierByNameAndCaster)|Removes a modifier that was cast by the given caster.|✖
[void RemoveNoDraw()](RemoveNoDraw)|Remove the no draw flag.|✖
[void RemoveVerticalMotionController(hBuff)](RemoveVerticalMotionController)||✖
[void RespawnUnit()](RespawnUnit)|Respawns the target unit if it can be respawned.|✖
[float Script_GetAttackRange()](Script_GetAttackRange)|Gets this unit's attack range after all modifiers.|✔
[void SellItem(hItem)](SellItem)|Sells the passed item in this unit's inventory.|✖
[void SetAbilityByIndex(hAbility, iIndex)](SetAbilityByIndex)|Set the ability by index.|✖
[void SetAcquisitionRange(nRange)](SetAcquisitionRange)||✖
[void SetAdditionalBattleMusicWeight(flWeight)](SetAdditionalBattleMusicWeight)|Combat involving this creature will have this weight added to the music calcuations.|✖
[void SetAggroTarget(hAggroTarget)](SetAggroTarget)|Set this unit's aggro target to a specified unit.|✖
[void SetAttackCapability(iAttackCapabilities)](SetAttackCapability)||✖
[void SetAttacking(hAttackTarget)](SetAttacking)||✖
[void SetBaseAttackTime(flBaseAttackTime)](SetBaseAttackTime)||✖
[void SetBaseDamageMax(nMax)](SetBaseDamageMax)|Sets the maximum base damage.|✖
[void SetBaseDamageMin(nMin)](SetBaseDamageMin)|Sets the minimum base damage.|✖
[void SetBaseHealthRegen(flHealthRegen)](SetBaseHealthRegen)||✖
[void SetBaseMagicalResistanceValue(flMagicalResistanceValue)](SetBaseMagicalResistanceValue)|Sets base magical armor value.|✖
[void SetBaseManaRegen(flManaRegen)](SetBaseManaRegen)||✖
[void SetBaseMaxHealth(flBaseMaxHealth)](SetBaseMaxHealth)|Set a new base max health value.|✖
[void SetBaseMoveSpeed(iMoveSpeed)](SetBaseMoveSpeed)||✖
[void SetCanSellItems(bCanSell)](SetCanSellItems)|Set whether or not this unit is allowed to sell items (bCanSellItems)|✖
[void SetControllableByPlayer(iIndex, bSkipAdjustingPosition)](SetControllableByPlayer)|Set this unit controllable by the player with the passed ID.|✖
[void SetCursorCastTarget(hEntity)](SetCursorCastTarget)||✖
[void SetCursorPosition(vLocation)](SetCursorPosition)||✖
[void SetCursorTargetingNothing(bTargetingNothing)](SetCursorTargetingNothing)||✖
[void SetCustomHealthLabel(pLabel, r, g, b)](SetCustomHealthLabel)||✖
[void SetDayTimeVisionRange(iRange)](SetDayTimeVisionRange)|Set the base vision range.|✖
[void SetDeathXP(iXPBounty)](SetDeathXP)|Set the XP bounty on this unit.|✖
[void SetForceAttackTarget(hNPC)](SetForceAttackTarget)||✖
[void SetForceAttackTargetAlly(hNPC)](SetForceAttackTargetAlly)||✖
[void SetHasInventory(bHasInventory)](SetHasInventory)|Set if this unit has an inventory.|✖
[void SetHullRadius(flHullRadius)](SetHullRadius)|Set the collision hull radius of this NPC.|✖
[void SetIdleAcquire(bIdleAcquire)](SetIdleAcquire)||✖
[void SetInitialGoalEntity(hGoal)](SetInitialGoalEntity)|Sets the initial waypoint goal for this NPC.|✖
[void SetInitialGoalPosition(vPosition)](SetInitialGoalPosition)|Set waypoint position for this NPC.|✖
[void SetMana(flMana)](SetMana)|Set the mana on this unit.|✖
[void SetMaxMana(flMaxMana)](SetMaxMana)|Set the maximum mana of this unit.|✖
[void SetMaximumGoldBounty(iGoldBountyMax)](SetMaximumGoldBounty)|Set the maximum gold bounty for this unit.|✖
[void SetMinimumGoldBounty(iGoldBountyMin)](SetMinimumGoldBounty)|Set the minimum gold bounty for this unit.|✖
[void SetModifierStackCount(pszScriptName, hCaster, nStackCount)](SetModifierStackCount)|Sets the stack count of a given modifier.|✖
[void SetMoveCapability(iMoveCapabilities)](SetMoveCapability)||✖
[void SetMustReachEachGoalEntity(must)](SetMustReachEachGoalEntity)|Set whether this NPC is required to reach each goal entity, rather than being allowed to unkink their path.|✖
[void SetNeverMoveToClearSpace(neverMoveToClearSpace)](SetNeverMoveToClearSpace)|If set to true, we will never attempt to move this unit to clear space, even when it unphases.|✖
[void SetNightTimeVisionRange(iRange)](SetNightTimeVisionRange)|Returns the vision range after modifiers.|✖
[void SetOrigin(vLocation)](SetOrigin)|Set the unit's origin.|✖
[void SetOriginalModel(pszModelName)](SetOriginalModel)|Sets the original model of this entity, which it will tend to fall back to anytime its state changes.|✖
[void SetPhysicalArmorBaseValue(flPhysicalArmorValue)](SetPhysicalArmorBaseValue)|Sets base physical armor value.|✖
[void SetRangedProjectileName(pProjectileName)](SetRangedProjectileName)||✖
[void SetRevealRadius(revealRadius)](SetRevealRadius)|sets the client side map reveal radius for this unit|✖
[void SetShouldDoFlyHeightVisual(bShouldVisuallyFly)](SetShouldDoFlyHeightVisual)||✖
[void SetStolenScepter(bStolenScepter)](SetStolenScepter)||✖
[void SetUnitCanRespawn(bCanRespawn)](SetUnitCanRespawn)||✖
[void SetUnitName(pName)](SetUnitName)||✖
[bool ShouldIdleAcquire()](ShouldIdleAcquire)||✖
[void SpendMana(flManaSpent, hAbility)](SpendMana)|Spend mana from this unit, this can be used for spending mana from abilities or item usage.|✖
[void StartGesture(nActivity)](StartGesture)|Add the given gesture activity.|✖
[void StartGestureWithPlaybackRate(nActivity, flRate)](StartGestureWithPlaybackRate)|Add the given gesture activity with a playback rate override.|✖
[void Stop()](Stop)|Stop the current order.|✖
[void StopFacing()](StopFacing)||✖
[void SwapAbilities(pAbilityName1, pAbilityName2, bEnable1, bEnable2)](SwapAbilities)|Swaps the slots of the two passed abilities and sets them enabled/disabled.|✖
[void SwapItems(nSlot1, nSlot2)](SwapItems)|Swap the contents of two item slots (slot1, slot2)|✖
[handle TakeItem(hItem)](TakeItem)|Removed the passed item from this unit's inventory.|✖
[float TimeUntilNextAttack()](TimeUntilNextAttack)||✖
[bool TriggerModifierDodge()](TriggerModifierDodge)||✖
[bool TriggerSpellAbsorb(hAbility)](TriggerSpellAbsorb)||✖
[void TriggerSpellReflect(hAbility)](TriggerSpellReflect)|Trigger the Lotus Orb-like effect.(hAbility)|✖
[void UnHideAbilityToSlot(pszAbilityName, pszReplacedAbilityName)](UnHideAbilityToSlot)|Makes the first ability unhidden, and puts it where second ability currently is. Will do nothing if the first ability is already unhidden and in a valid slot.|✖
[bool UnitCanRespawn()](UnitCanRespawn)||✔
