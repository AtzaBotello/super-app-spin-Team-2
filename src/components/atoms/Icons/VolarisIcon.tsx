import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  Pattern,
  Use,
  ClipPath,
  Rect,
  Image,
  SvgProps,
} from 'react-native-svg'

const VolarisIcon = (props: SvgProps) => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <G clipPath="url(#clip0_8982_3325)">
        <Path fill="url(#pattern0)" d="M0 0H40V40H0z" />
      </G>
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_8982_3325" transform="scale(.0045)" />
        </Pattern>
        <ClipPath id="clip0_8982_3325">
          <Rect width={40} height={40} rx={20} fill="#fff" />
        </ClipPath>
        <Image
          id="image0_8982_3325"
          width={222}
          height={222}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default VolarisIcon
