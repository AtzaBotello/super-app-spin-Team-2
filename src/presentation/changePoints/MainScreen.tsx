import { Button, Text } from '@femsa-core'
import { ChangePointsScreenProps } from '@src/navigation/AppNavigation'
import { mountByPoints, sumMovementPoints } from '@utils/movements'
import { useAppNavigation } from '@hooks/navigation'
import { useMovementsContext } from '@hooks/context'
import {
  BrandChangePointsAlert,
  ChangePointsInput,
  Divider,
  NavBar,
  ScreenContainer,
  SuggestedPointsAmount,
} from '@src/components'
import React, { useMemo, useState } from 'react'
import { changePointsScreenStyles } from '@src/theme/changePoints.styles'
import { View } from 'react-native'

const MainScreen = ({ route }: ChangePointsScreenProps) => {
  const [amountToChange, setAmountToChange] = useState('')
  const { brand } = route.params
  const { movements, setMovements } = useMovementsContext()
  const { navigate } = useAppNavigation()

  const movementsByBrand = useMemo(
    () => movements.filter(({ entity }) => entity === brand.name),
    [movements]
  )

  const movementsPointsByBrand = useMemo(
    () =>
      sumMovementPoints(
        movementsByBrand.filter(
          ({ operation, pointsUsed, points }) =>
            operation === 'earned' && pointsUsed <= points
        ),
        brand.name
      ),
    [movementsByBrand]
  )

  const hasValidPointsByBrand = useMemo(
    () => movementsPointsByBrand >= brand.minAmount,
    [movementsByBrand]
  )

  const canContinue = useMemo(() => {
    const amountNumber = Number(amountToChange)
    return (
      amountNumber != 0 &&
      amountNumber >= brand.minAmount &&
      amountNumber <= 1000
    )
  }, [amountToChange])

  const onContinuePress = () => {
    let amountToChangeAcc = Number(amountToChange)
    const movementsCopy = [...movements]

    for (const { points, id: movementId } of movementsByBrand.sort(
      (a, b) => a.points - b.points
    )) {
      const amountPoints = mountByPoints(points)

      amountToChangeAcc = amountToChangeAcc - amountPoints

      const pointsUsed =
        (amountToChangeAcc < 0 ? Math.abs(amountToChangeAcc) : amountPoints) *
        10

      const movementCopyIndex = movementsCopy.findIndex(
        ({ id }) => id === movementId
      )

      movementsCopy[movementCopyIndex].pointsUsed = pointsUsed

      movementsCopy.push({
        date: new Date(),
        entity: brand.name,
        giftCode: '',
        id: movementsCopy.length + 1,
        operation: 'used',
        points: pointsUsed,
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
      <NavBar title="Cambia tus puntos" withGoBack />
      {/* TODO: Agregar el componente que muestra los puntos */}

      <Divider />

      <View style={changePointsScreenStyles.formContainer}>
        <Text style={changePointsScreenStyles.instructionsText}>
          Elige o escribe el valor de los puntos que quieres cambiar
        </Text>
        {movementsPointsByBrand > 1000 && (
          <SuggestedPointsAmount
            amount={Number(amountToChange)}
            sugestedPoints={
              movementsPointsByBrand >= 10000
                ? [500, 1000, 2000, 5000]
                : [500, 1000]
            }
            onPressAmount={(amount) => setAmountToChange(amount.toString())}
          />
        )}

        <ChangePointsInput
          amount={amountToChange}
          onChange={setAmountToChange}
          minPointsAmount={brand.minAmount}
          disabled={hasValidPointsByBrand}
        />

        {!hasValidPointsByBrand && (
          <BrandChangePointsAlert minAmount={brand.minAmount} />
        )}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 30,
          marginHorizontal: 15,
        }}
      >
        <Button
          text="Continuar"
          onPress={onContinuePress}
          disabled={!canContinue}
        />
      </View>
    </ScreenContainer>
  )
}

export default MainScreen
