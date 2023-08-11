import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function LeftChevronIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.957 3.043a1 1 0 010 1.414L9.164 12.25l7.793 7.793a1 1 0 01-1.414 1.414l-8.5-8.5a1 1 0 010-1.414l8.5-8.5a1 1 0 011.414 0z"
      />
    </Svg>
  )
}

export default LeftChevronIcon
