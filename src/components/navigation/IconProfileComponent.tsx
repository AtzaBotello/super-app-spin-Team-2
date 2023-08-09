import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
const IconProfile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_8709_3653)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5675 0.00572751C11.1025 0.0264347 10.7491 0.0570395 10.3483 0.11128C8.7078 0.333347 7.08529 0.920339 5.65874 1.80791C4.36185 2.6148 3.20383 3.69261 2.28918 4.94409C1.58293 5.91043 1.0045 7.03341 0.61534 8.19369C0.31294 9.09532 0.125385 10.0016 0.0431895 10.9585C0.0105591 11.3383 0.0046071 11.4986 0.0045207 12.0001C0.0044151 12.5706 0.0186615 12.8535 0.0719415 13.3393C0.265036 15.0998 0.862905 16.8229 1.80735 18.3409C2.51204 19.4735 3.42361 20.5006 4.48754 21.3608C5.56955 22.2356 6.84515 22.9322 8.19314 23.3843C9.09477 23.6867 10.0011 23.8742 10.9579 23.9564C11.3391 23.9892 11.4976 23.9951 11.9995 23.9951C12.5708 23.9951 12.8545 23.9808 13.3387 23.9277C15.0991 23.7346 16.8225 23.1366 18.3403 22.1923C18.925 21.8286 19.4652 21.422 20.0251 20.9243C20.1926 20.7754 20.7749 20.1932 20.9237 20.0257C21.6917 19.1616 22.26 18.3243 22.7514 17.3329C23.4196 15.9849 23.8157 14.5866 23.9518 13.0953C23.9696 12.9 23.9899 12.5642 23.9899 12.4633C23.9899 12.4041 23.9938 12.3649 23.9995 12.3649C24.0058 12.3649 24.0091 12.2351 24.0091 11.9947C24.0091 11.7504 24.0059 11.6266 23.9995 11.6305C23.9934 11.6343 23.9899 11.601 23.9899 11.5375C23.9899 11.3752 23.9607 10.9678 23.9271 10.6609C23.7348 8.90278 23.136 7.177 22.1917 5.65929C21.7572 4.9609 21.2547 4.31499 20.6792 3.71529C19.6766 2.67049 18.5986 1.87583 17.3323 1.24819C15.8845 0.53055 14.427 0.138592 12.7777 0.0233147C12.5858 0.0099131 11.7473 -0.00227889 11.5675 0.00572751ZM11.6827 1.96424C10.2062 2.01724 8.85537 2.35582 7.54994 3.0001C6.73847 3.40059 6.07136 3.84843 5.35634 4.47268C5.05485 4.73589 4.55053 5.25633 4.26019 5.60387C3.48501 6.53176 2.8567 7.66694 2.46572 8.84597C2.22727 9.56504 2.06571 10.3429 2.00203 11.0785C1.97026 11.4455 1.96396 11.598 1.96396 12.0001C1.96396 12.4952 1.98442 12.8369 2.04038 13.2769C2.2155 14.6535 2.67319 15.9724 3.3913 17.1697C3.70765 17.6971 4.03904 18.1487 4.47248 18.6431C4.60835 18.798 5.05187 19.2537 5.14759 19.3366L5.20284 19.3845L5.28199 19.3178C5.93777 18.7653 6.77017 18.2409 7.58354 17.8679C8.78886 17.3152 9.95343 17.0184 11.3083 16.9187C11.625 16.8953 12.3741 16.8953 12.6907 16.9187C13.7067 16.9934 14.5358 17.1622 15.4635 17.4829C16.6266 17.8851 17.8061 18.5502 18.7171 19.3178L18.7962 19.3845L18.8515 19.3364C18.9377 19.2615 19.3552 18.8351 19.4833 18.6913C20.1169 17.9796 20.5906 17.2793 20.9995 16.4497C21.5042 15.4255 21.8195 14.3815 21.9591 13.2721C22.0155 12.8233 22.035 12.4966 22.035 12.0001C22.035 11.5043 22.0146 11.1628 21.9587 10.7233C21.7327 8.94668 21.0304 7.25632 19.9313 5.84395C19.6671 5.50441 19.4518 5.263 19.0942 4.90542C18.7366 4.54783 18.4952 4.33252 18.1557 4.0683C16.9453 3.12649 15.5028 2.46319 14.0064 2.16043C13.3757 2.03281 12.7869 1.97187 12.1147 1.96464C11.9273 1.96262 11.7329 1.96244 11.6827 1.96424ZM11.5195 3.69139C10.1944 3.7987 8.96585 4.31622 7.96754 5.18765C7.82082 5.31573 7.51521 5.6215 7.3906 5.76489C6.50967 6.77863 5.99901 7.9978 5.89276 9.34089C5.87768 9.53151 5.87773 10.0601 5.89285 10.2529C5.9984 11.5984 6.51513 12.8261 7.40321 13.8415C7.62012 14.0895 7.9634 14.4129 8.23634 14.6264C9.09767 15.3003 10.1534 15.7382 11.2411 15.873C11.4641 15.9006 11.7439 15.9167 11.9995 15.9168C12.9728 15.9171 13.8795 15.7021 14.7566 15.2632C15.7252 14.7785 16.5728 14.0119 17.1636 13.0863C17.7083 12.2329 18.0255 11.2778 18.1063 10.2481C18.1215 10.0538 18.1215 9.53604 18.1062 9.34089C18.0109 8.12414 17.571 6.98208 16.834 6.03849C16.617 5.76057 16.284 5.40752 16.0315 5.18749C15.1122 4.38636 13.9892 3.87902 12.7929 3.72437C12.4272 3.67709 11.8733 3.66274 11.5195 3.69139ZM11.6875 5.64561C10.4761 5.74197 9.39016 6.33943 8.66149 7.31049C8.16616 7.9706 7.8748 8.79219 7.84421 9.61511C7.81759 10.3312 7.94812 10.9699 8.25018 11.6017C8.60395 12.3416 9.20516 12.9901 9.91634 13.399C10.4029 13.6787 10.9261 13.8548 11.4763 13.924C12.4644 14.0484 13.4574 13.8181 14.2891 13.2716C14.6675 13.023 15.0415 12.672 15.3215 12.3025C15.8283 11.6339 16.1233 10.8114 16.1543 9.98096C16.1746 9.43528 16.1092 8.9639 15.9454 8.47587C15.7416 7.86898 15.4273 7.35429 14.9784 6.89235C14.1885 6.07969 13.1105 5.62875 11.9765 5.63664C11.8704 5.63738 11.7403 5.64142 11.6875 5.64561ZM0.0039063 12.0049C0.0039063 12.2108 0.0051735 12.2937 0.0067287 12.1891C0.0082839 12.0844 0.0082743 11.9159 0.0067191 11.8147C0.0051735 11.7134 0.0038967 11.799 0.0039063 12.0049ZM11.7019 18.8645C10.1362 18.9145 8.58061 19.4126 7.26463 20.2853C7.08672 20.4033 6.82514 20.5915 6.82514 20.6015C6.82514 20.6186 7.24635 20.8502 7.54994 21.0001C8.56797 21.5025 9.61086 21.8178 10.7227 21.9592C11.1622 22.0152 11.5037 22.0356 11.9995 22.0356C12.4954 22.0356 12.8368 22.0152 13.2763 21.9592C14.3888 21.8177 15.427 21.5038 16.4491 21C16.7514 20.851 17.1739 20.6187 17.1739 20.6015C17.1739 20.5798 16.6637 20.2317 16.4107 20.0808C15.2729 19.4021 14.013 18.996 12.7099 18.888C12.5398 18.874 12.0501 18.8534 11.9563 18.8564C11.9352 18.8571 11.8207 18.8608 11.7019 18.8645Z"
        fill="#69698B"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_8709_3653">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconProfile
