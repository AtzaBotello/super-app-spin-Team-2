import { SectionList } from 'react-native'
import React, { useMemo } from 'react'
import { Movement } from '@src/types'
import MovementItem from './MovementItem'
import ListEmptyIndicator from '../atoms/ListEmptyIndicator'
import { mapMovementsByDate } from '@src/utils/movements'
import SectionListTitle from '../atoms/SectionListTitle'
import Divider from '../atoms/Divider'
import { Colors } from '@src/theme/colors'
import { movementsListStyles } from '@src/theme/Movements.styles'

type Props = {
  movements: Movement[]
}

const MovementsSectionList = ({ movements }: Props) => {
  const data = useMemo(() => mapMovementsByDate(movements), [movements])
  return (
    <SectionList
      sections={data}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <>
          <MovementItem movement={item} />
          <Divider />
        </>
      )}
      ListEmptyComponent={
        <ListEmptyIndicator testID="movement-empty-list-indicator" />
      }
      renderSectionHeader={({ section: { title } }) => (
        <SectionListTitle
          testID="movement-section-list-indicator"
          containerStyle={movementsListStyles.padding}
          titleStyle={{ color: Colors.contentPrimary }}
          title={title}
        />
      )}
    />
  )
}

export default MovementsSectionList
