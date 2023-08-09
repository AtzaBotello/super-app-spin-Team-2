import React from 'react'
import {
  GordiasIcon,
  OxxoGasIcon,
  OxxoIcon,
  ScorePointsIcon,
  SpinPremiaIcon,
  VolarisIcon,
} from './atoms/Icons'
import { SvgProps } from 'react-native-svg'

type Props = {
  entity: string
  iconProps?: SvgProps
}

const EntityIcon = ({ entity, iconProps }: Props) => {
  switch (entity) {
    case 'Oxxo':
      return <OxxoIcon {...iconProps} />

    case 'Recuperación de puntos':
      return <SpinPremiaIcon {...iconProps} />

    case 'Doña Tota':
      return <GordiasIcon {...iconProps} />

    case 'Oxxo Gas':
      return <OxxoGasIcon {...iconProps} />

    case 'Sumaste Puntos':
      return <ScorePointsIcon {...iconProps} />

    case 'Volaris':
      return <VolarisIcon {...iconProps} />
    default:
      return <></>
  }
}

export default EntityIcon
