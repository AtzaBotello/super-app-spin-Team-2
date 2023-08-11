import React from 'react'
import {
  GordiasIcon,
  OxxoGasIcon,
  OxxoIcon,
  ScorePointsIcon,
  SmartFitIcon,
  SpinPremiaIcon,
  VixIcon,
  VolarisIcon,
} from './atoms/Icons'
import { SvgProps } from 'react-native-svg'

type Props = {
  brand: string
  iconProps?: SvgProps
}

const BrandIcon = ({ brand, iconProps }: Props) => {
  switch (brand) {
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

    case 'VIX':
      return <VixIcon {...iconProps} />

    case 'Smart Fit':
      return <SmartFitIcon {...iconProps} />
    default:
      return <></>
  }
}

export default BrandIcon
