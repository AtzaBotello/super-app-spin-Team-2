import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function RightChevronIcon(props: SvgProps) {
  return (
    <Svg width={11} height={20} viewBox="0 0 11 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.543 1.043a1 1 0 000 1.414l7.793 7.793-7.793 7.793a1 1 0 101.414 1.414l8.5-8.5a1 1 0 000-1.414l-8.5-8.5a1 1 0 00-1.414 0z"
      />
    </Svg>
  )
}

export default RightChevronIcon
