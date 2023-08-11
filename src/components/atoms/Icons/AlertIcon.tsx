import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function AlertIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zM12 1.96C6.455 1.96 1.96 6.454 1.96 12c0 5.545 4.495 10.04 10.04 10.04 5.545 0 10.04-4.495 10.04-10.04 0-5.545-4.495-10.04-10.04-10.04zm0 2.448a.98.98 0 01.98.98v8.081a.98.98 0 01-1.96 0V5.388a.98.98 0 01.98-.98zm-1.347 12.368a1.347 1.347 0 112.694 0 1.347 1.347 0 01-2.694 0z"
      />
    </Svg>
  )
}

export default AlertIcon
