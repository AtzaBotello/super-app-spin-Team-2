import {
  BrandChangePointsAlert,
  ChangePointsInput,
  ScreenContainer,
} from '@src/components'
import { useMovementsContext } from '@hooks/context'
import { ChangePointsScreenProps } from '@src/navigation/AppNavigation'
import React, { useMemo, useState } from 'react'
import { Button } from '@femsa-core'
import { mountByPoints, sumMovementPoints } from '@utils/movements'
import { Movement } from '@src/types'

const MainScreen = ({ route }: ChangePointsScreenProps) => {
  const [amountToChange, setAmountToChange] = useState('')
  const { movements } = useMovementsContext()
  const { brand } = route.params

  const hasValidPointsByBrand = useMemo(
    () => sumMovementPoints(movements, brand.name) >= brand.min,
    [movements]
  )

  const canContinue = useMemo(() => {
    const amountNumber = Number(amountToChange)
    return (
      amountNumber != 0 && amountNumber >= brand.min && amountNumber <= 1000
    )
  }, [amountToChange])

  const onContinuePress = () => {
    let amountToChangeNumber = Number(amountToChange)
    const movementsByBrand = movements.filter((x) => x.entity === brand.name)
    const movementsToChangeStatus: Movement[] = []

    for (const movement of movementsByBrand) {
      movementsToChangeStatus.push(movement)
      amountToChangeNumber -= mountByPoints(movement.points)
      if (amountToChangeNumber <= 0) break
    }

    console.log(movementsToChangeStatus)
  }

  return (
    <ScreenContainer>
      <ChangePointsInput
        amount={amountToChange}
        onChange={setAmountToChange}
        minPointsAmount={brand.min}
        disabled={hasValidPointsByBrand}
      />

      {!hasValidPointsByBrand && (
        <BrandChangePointsAlert minAmount={brand.min} />
      )}

      <Button
        text="Continuar"
        onPress={onContinuePress}
        disabled={!canContinue}
      />
    </ScreenContainer>
  )
}

export default MainScreen
