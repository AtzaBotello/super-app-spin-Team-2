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
import { useAppNavigation } from '@hooks/navigation'

const MainScreen = ({ route }: ChangePointsScreenProps) => {
  const { navigate } = useAppNavigation()
  const [amountToChange, setAmountToChange] = useState('')
  const { movements, setMovements } = useMovementsContext()
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
    let amountToChangeAcc = Number(amountToChange)
    const movementsCopy = [...movements]
    const movementsByBrand = movements.filter(
      ({ entity }) => entity === brand.name
    )

    for (const { points, id: movementId } of movementsByBrand) {
      const amountPoints = mountByPoints(points)

      amountToChangeAcc = amountToChangeAcc - amountPoints

      const amountUsed =
        amountToChangeAcc < 0 ? Math.abs(amountToChangeAcc) : amountPoints

      const movementCopyIndex = movementsCopy.findIndex(
        ({ id }) => id === movementId
      )

      movementsCopy[movementCopyIndex].pointsUsed = amountUsed

      movementsCopy.push({
        date: new Date(),
        entity: brand.name,
        giftCode: '',
        id: movementsCopy.length + 1,
        operation: 'used',
        points: amountUsed * 10,
        pointsUsed: 0,
        transactionNo: '',
      })

      if (amountToChangeAcc <= 0) break
    }

    setMovements(movementsCopy)
    // TODO: Cambiar a la pantalla del ticket!
    navigate('TabNav')
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
