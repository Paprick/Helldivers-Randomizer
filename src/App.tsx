import { RandomizerHolder } from './components/randomizer-holder/randomizer-holder'
import { CustomButton } from './components/buttons/button'
import { EquipmentList } from './features/equipment-list'
import { Checkbox } from './components/checkbox/checkbox'

import { primaryWeapons, secondaryWeapons, granadeWeapons } from './randomizer-library/weapons'
import { strategems } from './randomizer-library/strategems'
import { boosters } from './randomizer-library/boosters'
import { armPerks } from './randomizer-library/arm-perks'
import './App.css'
import { Dispatch, SetStateAction, useState } from 'react'


import { PrimaryWeaponsType, SecondaryWeaponsType, GranadeWeaponsType } from './types/weapon-types'
import { StrategemTypes } from './types/strategem-types'
import { BoosterTypes } from './types/booster-types'
import { ArmPerksTypes } from './types/arm-perks-types'
import { ArmourTypes } from './types/armour-types'

function App() {
  const [primary, setPrimary] = useState<PrimaryWeaponsType | null>(null)
  const [secondary, setSecondary] = useState<SecondaryWeaponsType | null>(null)
  const [granade, setGranade] = useState<GranadeWeaponsType | null>(null)
  const [strategemList, setStrategemList] = useState<StrategemTypes[] | null>(null)
  const [booster, setBooster] = useState<BoosterTypes | null>(null)
  const [armPerk, setArmPerk] = useState<ArmPerksTypes | null>(null)
  const [armClass, setArmClass] = useState<ArmourTypes | null>(null)

  //No-Repeat mode
  const [isNRMode, setIsNRMode] = useState(false)
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  const [isNRModeStrategems, setIsNRModeStrategems] = useState(false)
  const [isNRModePrimary, setIsNRModePrimary] = useState(false)
  const [isNRModeSecondary, setIsNRModeSecondary] = useState(false)
  const [isNRModeGranades, setIsNRModeGranade] = useState(false)
  const [isNRModeArmPerks, setIsNRModeArmPerks] = useState(false)
  const [isNRModeBoosters, setIsNRModeBoosters] = useState(false)

  const [usableStrategems, setUsableStrategems] = useState<StrategemTypes[]>(strategems)
  const [bannedStrategems, setBannedStrategems] = useState<StrategemTypes[]>([])

  const [usablePrimary, setUsablePrimary] = useState<PrimaryWeaponsType[]>(primaryWeapons)
  const [bannedPrimary, setBannedPrimary] = useState<PrimaryWeaponsType[]>([])

  const [usableSecondary, setUsableSecondary] = useState<SecondaryWeaponsType[]>(secondaryWeapons)
  const [bannedSecondary, setBannedSecondary] = useState<SecondaryWeaponsType[]>([])

  const [usableGranade, setUsableGranade] = useState<GranadeWeaponsType[]>(granadeWeapons)
  const [bannedGranade, setBannedGranade] = useState<GranadeWeaponsType[]>([])

  const [usableArmPerks, setUsableArmPerks] = useState<ArmPerksTypes[]>(armPerks)
  const [bannedArmPerks, setBannedArmPerks] = useState<ArmPerksTypes[]>([])

  const [usableBoosters, setUsableBoosters] = useState<BoosterTypes[]>(boosters)
  const [bannedBoosters, setBannedBoosters] = useState<BoosterTypes[]>([])

  const [timesRolled, setTimesRolled] = useState(0)

  const randomizeItem = <T extends { name: string }>(
      item: T[], 
      setCurrentItem: Dispatch<SetStateAction<T | null>>, 
      nRType: boolean, 
      setBannedItem: Dispatch<SetStateAction<T[]>>, 
      setUsableItem: Dispatch<SetStateAction<T[]>>,
      usableItem: T[],
      singleRoll?: boolean
    ) => {
      if (usableItem.length > 0) {
        if (singleRoll) {
          let randomNumber = Math.floor(Math.random() * item.length)
          let value = item[randomNumber]
          setCurrentItem(prevState => {
            while (prevState === value) {
              randomNumber = Math.floor(Math.random() * item.length)
              value = item[randomNumber]
            }
            if(nRType) {
              setBannedItem((items) => [...items, value])
              setUsableItem((items) => items.filter(item => item.name !== value.name))
            }
            return value
          })
        } else {
          const randomNumber = Math.floor(Math.random() * item.length)
          const value = item[randomNumber]
          setCurrentItem(value)
          if(nRType) {
            setBannedItem((items) => [...items, value])
            setUsableItem((items) => {
              const filteredItems = items.filter(item => item.name !== value.name)
              return filteredItems
            })
          }
        }
      }
  }

  const randomizeStrategems = () => {
    if (usableStrategems.length > 3) {
      setStrategemList(null)
      let counter = 0;
      const strategemArray: StrategemTypes[] = []
      while (counter < 4) {
        let randomNumber = Math.floor(Math.random() * usableStrategems.length)
        const selectedStrategem = usableStrategems[randomNumber]
        const existingObject = strategemArray.some(obj => obj.name === selectedStrategem.name)
        const sameTypeStrategem = strategemArray.some(obj => obj.isSameType === true && obj.sameType === selectedStrategem.sameType)

        if (!existingObject && !sameTypeStrategem) {
          strategemArray.push(selectedStrategem)
          counter ++
        }
        randomNumber = Math.floor(Math.random() * usableStrategems.length)
      }
      setStrategemList(strategemArray)
      if (isNRModeStrategems) {
        setBannedStrategems((items) => [...items, ...strategemArray])
        setUsableStrategems((items) => items.filter(item => !strategemArray.some(item2 => item.name === item2.name)))
      }
    }
  }

  const randomizeArmour = () => {
    if (usableArmPerks.length > 0) {
      const randomPerkNumber = Math.floor(Math.random() * usableArmPerks.length)
      const randomPerk = usableArmPerks[randomPerkNumber]

      const randomArmourNumber = Math.floor(Math.random() * randomPerk.armourClasses.length)
      const randomArmour = randomPerk.armourClasses[randomArmourNumber]

      setArmPerk(randomPerk)
      setArmClass(randomArmour)

      if (isNRModeArmPerks) {
        setBannedArmPerks((items) => [...items, randomPerk])
        setUsableArmPerks((items) => items.filter(item => item.name !== randomPerk.name))
      }
    } 
  }
  const increaseRolledCount = () => {
    if (usableArmPerks.length > 0 || usableBoosters.length > 0 || usableStrategems.length > 3 || usablePrimary.length > 0 || usableSecondary.length > 0 || usableGranade.length > 0) {
      setTimesRolled((prev) => prev + 1)
    }
  }
  
  const randomizeAll = () => {
    randomizeItem(usablePrimary, setPrimary, isNRModePrimary, setBannedPrimary, setUsablePrimary, usablePrimary)
    randomizeItem(usableSecondary, setSecondary, isNRModeSecondary, setBannedSecondary, setUsableSecondary, usableSecondary)
    randomizeItem(usableGranade, setGranade, isNRModeGranades, setBannedGranade, setUsableGranade, usableGranade)
    randomizeItem(usableBoosters, setBooster, isNRModeBoosters, setBannedBoosters, setUsableBoosters, usableBoosters)
    randomizeStrategems()
    randomizeArmour()
    increaseRolledCount()
  }

  const handlePrimaryOnClick = () => {
    randomizeItem(usablePrimary, setPrimary, isNRModePrimary, setBannedPrimary, setUsablePrimary, usablePrimary, true)
  }
  const handleSecondaryOnClick = () => {
    randomizeItem(usableSecondary, setSecondary, isNRModeSecondary, setBannedSecondary, setUsableSecondary, usableSecondary, true)
  }
  const handleGranadeOnClick = () => {
    randomizeItem(usableGranade, setGranade, isNRModeGranades, setBannedGranade, setUsableGranade, usableGranade, true)
  }
  const handleBoosterOnClick = () => {
    randomizeItem(usableBoosters, setBooster, isNRModeBoosters, setBannedBoosters, setUsableBoosters, usableBoosters, true)
  }
  const handleArmourClassOnClick = () => {
    if (!armPerk) {
      randomizeArmour()
    } else {
      let randomArmourNumber = Math.floor(Math.random() * armPerk.armourClasses.length)
      let randomArmour = armPerk.armourClasses[randomArmourNumber]

      while (randomArmour.class === armClass?.class) {
        randomArmourNumber = Math.floor(Math.random() * armPerk.armourClasses.length)
        randomArmour = armPerk.armourClasses[randomArmourNumber]
      }
      setArmClass(randomArmour)
    }
  }
  const handleArmourPerkOnClick = () => {
    if(usableArmPerks.length > 0) {
      if (!armClass) {
        randomizeArmour()
      } else {
        let randomPerkNumber = Math.floor(Math.random() * usableArmPerks.length)
        let randomPerk = usableArmPerks[randomPerkNumber]
  
        let sameArmourClass = randomPerk.armourClasses.some(obj => obj.class === armClass.class)
        let samePerk = armPerk?.name === randomPerk.name
  
        while (sameArmourClass === false  || samePerk === true ) { 
          randomPerkNumber = Math.floor(Math.random() * usableArmPerks.length)
          randomPerk = usableArmPerks[randomPerkNumber]
          sameArmourClass = randomPerk.armourClasses.some(obj => obj.class === armClass.class)
          samePerk = armPerk?.name === randomPerk.name
        }
        setArmPerk(randomPerk)
        if (isNRModeArmPerks) {
          setBannedArmPerks((items) => [...items, randomPerk])
          setUsableArmPerks((items) => items.filter(item => item.name !== randomPerk.name))
        }
      }
    }
  }
  const handleArmourOnClick = () => {
    randomizeArmour()
  }
  const handleStrategemOnClick = (strategem?: StrategemTypes) => () => {  
    if(usableStrategems.length > 0) {
      let randomNumber = Math.floor(Math.random() * usableStrategems.length)
      let newStrategem = usableStrategems[randomNumber]

      let findDuplicate = strategemList?.some(strat => strat.name === newStrategem.name)
      let sameTypeStrategem = strategemList?.some(strat => strat.isSameType === true && strat.sameType === newStrategem.sameType)

      while (findDuplicate || sameTypeStrategem) {
        randomNumber = Math.floor(Math.random() * usableStrategems.length)
        newStrategem = usableStrategems[randomNumber]
        findDuplicate = strategemList?.some(strat => strat.name === newStrategem.name)
        sameTypeStrategem = strategemList?.some(strat => strat.isSameType === true && strat.sameType === newStrategem.sameType)
      }
      const listToReplace = strategemList
      
      if (strategem) {
        const newList = listToReplace?.map(strat => strat.name === strategem.name ? newStrategem : strat)
        if (newList) {
          setStrategemList(newList)
          if (isNRModeStrategems) {
            setBannedStrategems((items) => [...items, newStrategem])
            setUsableStrategems((items) => items.filter(item => item.name !== newStrategem.name))
          }
        }
      } else {
        randomizeStrategems()
      }
    }
  }
  const reset = () => {
    setPrimary(null)
    setSecondary(null)
    setGranade(null)
    setStrategemList(null)
    setArmClass(null)
    setArmPerk(null)
    setBooster(null)

    setUsablePrimary(primaryWeapons)
    setUsableSecondary(secondaryWeapons)
    setUsableGranade(granadeWeapons)
    setUsableBoosters(boosters)
    setUsableStrategems(strategems)
    setUsableArmPerks(armPerks)

    setBannedPrimary([])
    setBannedSecondary([])
    setBannedGranade([])
    setBannedBoosters([])
    setBannedStrategems([])
    setBannedArmPerks([])

    setTimesRolled(0)
  }

  const handleNRModeCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNRMode(e.target.checked)
    setIsNRModeStrategems(e.target.checked)
    setIsNRModePrimary(e.target.checked)
    setIsNRModeSecondary(e.target.checked)
    setIsNRModeGranade(e.target.checked)
    setIsNRModeArmPerks(e.target.checked)
    setIsNRModeBoosters(e.target.checked)
    reset()
  }

  const handleNRModeCheckboxStrategem = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setIsNRModeStrategems(e.target.checked)
  }
  const handleNRModeCheckboxPrimary = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setIsNRModePrimary(e.target.checked)
  }
  const handleNRModeCheckboxSecondary = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setIsNRModeSecondary(e.target.checked)
  }
  const handleNRModeCheckboxGranade = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setIsNRModeGranade(e.target.checked)
  }
  const handleNRModeCheckboxBooster = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setIsNRModeBoosters(e.target.checked)
  }
  const handleNRModeCheckboxArmPerk = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setIsNRModeArmPerks(e.target.checked)
  }

  const handleMenuExpand = () => {
    setIsMenuExpanded(true)
  }
  const handleMenuShrink = () => {
    setIsMenuExpanded(false)
  }

  return (
    <div className="bg-[#272727] w-full min-h-screen box-border flex flex-col justify-center items-center text-gray-50 min-w-142 p-5">
      <div className='border-2 border-neutral-700 p-4 flex flex-col justify-center items-center w-full max-w-3xl xl:w-3/5'>
        <div className='w-full mb-4 flex flex-row justify-between'>
          <div onMouseEnter={handleMenuExpand} onMouseLeave={handleMenuShrink} className={`relative flex flex-col box-border items-start min-w-72`}>
            <div className={`flex flex-row items-center gap-x-2 mb-1 relative p-4 w-full`}>
              <Checkbox label={'No Repeat Mode'} checked={isNRMode} onChange={handleNRModeCheckboxChange} highlighted/>
            </div>
            {isNRMode && isMenuExpanded && 
              <div className='flex flex-col justify-center items-start gap-y-2 absolute bg-[#222222] z-99 p-4 translate-y-15 border-2 border-neutral-700 box-border'>
                <div className='flex flex-row items-center gap-x-2'>
                  <Checkbox label={'Include Stratagems'} checked={isNRModeStrategems} onChange={handleNRModeCheckboxStrategem}/>
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                  <Checkbox label={'Include Primary Weapons'} checked={isNRModePrimary} onChange={handleNRModeCheckboxPrimary}/>
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                  <Checkbox label={'Include Secondary Weapons'} checked={isNRModeSecondary} onChange={handleNRModeCheckboxSecondary}/>
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                  <Checkbox label={'Include Throwable Weapons'} checked={isNRModeGranades} onChange={handleNRModeCheckboxGranade}/>
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                  <Checkbox label={'Inclue Armours'} checked={isNRModeArmPerks} onChange={handleNRModeCheckboxArmPerk}/>
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                  <Checkbox label={'Include Boosters'} checked={isNRModeBoosters} onChange={handleNRModeCheckboxBooster}/>
                </div>
              </div>
            }
          </div>
          {isNRMode &&
            <div className='flex flex-col items-center gap-y-2'>
            <div>
              Times Rolled
            </div>
            <div className='text-xl'>
              {timesRolled}
            </div>
          </div>
          }
        </div>
        <p className='uppercase text-lg opacity-80 mb-1'>Armour</p>
        <div className='flex flex-col justify-center items-center mb-6'>
          <div className='flex flex-row justify-center items-center gap-1 mb-1'>
            <RandomizerHolder width='w-18' height='h-18' name={armPerk?.name} description={armPerk?.description} src={armPerk?.icon || ""} onClick={handleArmourPerkOnClick}/>
            <RandomizerHolder width='w-18' height='h-18' name={armClass?.className} src={armClass?.icon || ""} onClick={handleArmourClassOnClick}/>
          </div>
          <CustomButton width='w-36' secondaryTheme onClick={handleArmourOnClick}>Roll Armour</CustomButton>
        </div>
        <div className='flex flex-row justify-center items-center w-full gap-x-6'>
          <p className='uppercase text-lg opacity-80 mb-1'>Primary Weapon</p>
          <p className='uppercase text-lg opacity-80 mb-1'>Secondary Weapon</p>
          <p className='uppercase text-lg opacity-80 mb-1'>Throwable weapon</p>
        </div>
        <div className='flex flex-row justify-center items-center  gap-8 mb-6'>
          <RandomizerHolder width='w-42' height='h-28' name={primary?.name} characteristics={primary?.characteristics} stats={primary?.stats} itemClass={primary?.class} description={primary?.description} src={primary?.icon || ""} onClick={handlePrimaryOnClick}/>
          <RandomizerHolder width='w-42' height='h-28' name={secondary?.name} characteristics={secondary?.characteristics} stats={secondary?.stats} itemClass={secondary?.class} description={secondary?.description} src={secondary?.icon || ""} onClick={handleSecondaryOnClick}/>
          <RandomizerHolder width='w-42' height='h-28' name={granade?.name} characteristics={granade?.characteristics} stats={granade?.stats} itemClass={granade?.class} description={granade?.description} src={granade?.icon || ""} onClick={handleGranadeOnClick}/>
        </div>
        <div className='flex flex-row justify-center items-center gap-12'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='uppercase text-lg opacity-80 mb-1'>Stratagems*</p>
            <div className='flex flex-row justify-center items-center gap-1'>
              <RandomizerHolder width='w-18' height='h-18' name={strategemList?.[0]?.name} itemClass={strategemList?.[0]?.class} characteristics={strategemList?.[0]?.characteristics} stats={strategemList?.[0]?.stats} description={strategemList?.[0]?.description} src={strategemList?.[0]?.icon} onClick={handleStrategemOnClick(strategemList?.[0])} />
              <RandomizerHolder width='w-18' height='h-18' name={strategemList?.[1]?.name} itemClass={strategemList?.[1]?.class} characteristics={strategemList?.[1]?.characteristics} stats={strategemList?.[1]?.stats} description={strategemList?.[1]?.description} src={strategemList?.[1]?.icon} onClick={handleStrategemOnClick(strategemList?.[1])} />
              <RandomizerHolder width='w-18' height='h-18' name={strategemList?.[2]?.name} itemClass={strategemList?.[2]?.class} characteristics={strategemList?.[2]?.characteristics} stats={strategemList?.[2]?.stats} description={strategemList?.[2]?.description} src={strategemList?.[2]?.icon} onClick={handleStrategemOnClick(strategemList?.[2])} />
              <RandomizerHolder width='w-18' height='h-18' name={strategemList?.[3]?.name} itemClass={strategemList?.[3]?.class} characteristics={strategemList?.[3]?.characteristics} stats={strategemList?.[3]?.stats} description={strategemList?.[3]?.description} src={strategemList?.[3]?.icon} onClick={handleStrategemOnClick(strategemList?.[3])} />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='uppercase text-lg opacity-80 mb-1'>Booster</p>
            <RandomizerHolder width='w-18' height='h-18' name={booster?.name} description={booster?.description} src={booster?.icon || ""} onClick={handleBoosterOnClick}/>
          </div>
        </div>
        <div className='opacity-80 text-xs self-start ml-11 mb-6'>*Stratagems stats after fully upgraded destroyer.</div>
        <CustomButton width='w-full' onClick={randomizeAll}>Roll Everything</CustomButton>
        <div className='w-full flex flex-col justify-center items-center'>
          <EquipmentList
            isNRModeStrategems={isNRModeStrategems}
            isNRModePrimary={isNRModePrimary}
            isNRModeSecondary={isNRModeSecondary}
            isNRModeGranades={isNRModeGranades}
            isNRModeArmPerks={isNRModeArmPerks}
            isNRModeBoosters={isNRModeBoosters}
            usableStrategems={usableStrategems} 
            bannedStrategems={bannedStrategems}
            usablePrimary={usablePrimary} 
            bannedPrimary={bannedPrimary}
            usableSecondary={usableSecondary}
            bannedSecondary={bannedSecondary}
            usableGranade={usableGranade}
            bannedGranade={bannedGranade}
            usableArmPerks={usableArmPerks}
            bannedArmPerks={bannedArmPerks}
            usableBoosters={usableBoosters}
            bannedBoosters={bannedBoosters}
            isNRMode={isNRMode}
          />
        </div>
      </div>
    </div>
  )
}

export default App
