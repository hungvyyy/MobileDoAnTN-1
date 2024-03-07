import * as React from "react"
import Svg, { Path, Rect, Circle, G, Ellipse } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <Path
        fill="#ebebeb"
        d="M0 382.4h500v.25H0zM237 337.8H43.91a5.71 5.71 0 01-5.7-5.71V60.66a5.71 5.71 0 015.7-5.66H237a5.71 5.71 0 015.71 5.71v271.38a5.71 5.71 0 01-5.71 5.71zM43.91 55.2a5.46 5.46 0 00-5.45 5.46v271.43a5.46 5.46 0 005.45 5.46H237a5.47 5.47 0 005.46-5.46V60.66A5.47 5.47 0 00237 55.2zm409.4 282.6h-193.1a5.72 5.72 0 01-5.71-5.71V60.66a5.72 5.72 0 015.71-5.66h193.1a5.71 5.71 0 015.69 5.66v271.43a5.71 5.71 0 01-5.69 5.71zM260.21 55.2a5.47 5.47 0 00-5.46 5.46v271.43a5.47 5.47 0 005.46 5.46h193.1a5.47 5.47 0 005.46-5.46V60.66a5.47 5.47 0 00-5.46-5.46zM174.44 391.92h26v.25h-26zM52.46 389.21h54.1v.25h-54.1zM147.12 401.21h26.32v.25h-26.32zM258.23 399.53h38.83v.25h-38.83zM305.96 399.53h10.69v.25h-10.69zM395.35 395.31h54.56v.25h-54.56z"
      />
      <Path
        fill="#e6e6e6"
        d="M353.22 318.91h61.38c11.72 0 21.29-7.28 21.53-16.37l2.29-57c.18-6.82-6.89-12.42-15.68-12.42h-38.48c-8 0-14.68 4.64-15.58 10.79z"
      />
      <Path
        fill="#e6e6e6"
        d="M324.9 309.78h61.8v9.13h-66.05a2.45 2.45 0 01-2.44-2.44 6.69 6.69 0 016.69-6.69z"
      />
      <Path
        fill="#e6e6e6"
        d="M380.53 382.4h-2.8l-6.58-24.63-1.4-5.22L361 320h-33.38l-16.7 62.43h-2.79l17-63.71a1.35 1.35 0 011.35-.85h35.64a1.34 1.34 0 011.34.85l7.66 28.62 1.39 5.24z"
      />
      <Path
        fill="#e6e6e6"
        d="M434.16 382.4h-2.8l-16.7-62.4h-33.4l-8.72 32.58-1.39 5.22-6.59 24.63h-2.8l8-29.85 1.4-5.24 7.65-28.62a1.34 1.34 0 011.34-.85h35.64a1.34 1.34 0 011.34.85z"
      />
      <Path
        fill="#f0f0f0"
        d="M73.03 284.08h31.41v92.46H73.03zM79.06 376.54h138.29v5.86H79.06z"
      />
      <Path fill="#f5f5f5" d="M223.38 376.54H104.44v-92.46h118.94z" />
      <Path
        fill="#f0f0f0"
        d="M211.03 325.79h-94.24v-30.32h94.24zM211.03 365.16h-94.24v-30.32h94.24z"
      />
      <Rect
        width={31.02}
        height={4.16}
        x={148.4}
        y={308.55}
        fill="#f5f5f5"
        rx={1.59}
      />
      <Rect
        width={31.02}
        height={4.16}
        x={148.4}
        y={347.92}
        fill="#f5f5f5"
        rx={1.59}
      />
      <Path
        fill="#e6e6e6"
        d="M210 265.22h-23q.3-.84.6-1.8a.19.19 0 000-.1q.18-.58.36-1.2a5 5 0 003.56 1.78h.39a2.93 2.93 0 002.63-2.47.37.37 0 00-.22-.37 6.55 6.55 0 00-6-.23c.24-.95.47-1.95.68-3a.22.22 0 000-.14c.06-.29.12-.59.17-.89 1.3 1.3 2.45 1.93 3.51 1.93 1.29 0 2.39-1 3.37-2.9a.35.35 0 00-.16-.43c-2.53-1.64-5.3-.52-6.52.14.11-.77.21-1.56.28-2.36.06-.67.1-1.34.13-2a4.41 4.41 0 003 1.63h.23c1.41-.13 2.49-1.53 2.9-3.72a.37.37 0 00-.07-.26.42.42 0 00-.23-.16 6.69 6.69 0 00-5.85 1.06c0-.64 0-1.28-.08-1.92a4.37 4.37 0 00.7.07 4.63 4.63 0 003.69-2.19.28.28 0 000-.28.38.38 0 00-.23-.2 4.35 4.35 0 00-3.55-.15 2.4 2.4 0 00-1.09 1.4 10.26 10.26 0 00-7.21-5.21.24.24 0 00-.23.06.23.23 0 00-.07.23c.33 2.13.94 4.73 2.8 6a4.32 4.32 0 002.45.71 7.44 7.44 0 002.12-.35 32.86 32.86 0 010 4.55 16 16 0 00-7.23-4.42.25.25 0 00-.33.22 5.08 5.08 0 001.63 4.31 5.78 5.78 0 003.82 1.22 10.51 10.51 0 002-.21c-.13 1.25-.31 2.48-.53 3.65-1.14-.84-4.4-3-7.27-2.1a.25.25 0 00-.16.17.33.33 0 000 .25c1.26 2 2.44 3.15 3.71 3.54a3.48 3.48 0 001 .15 4.8 4.8 0 002.41-.75c-.34 1.56-.72 3-1.11 4.3a7.35 7.35 0 00-6.52-1.63.24.24 0 00-.17.33 5 5 0 002.86 3 4 4 0 001.5.29 3.77 3.77 0 001.86-.5l-.37 1.08h-19.33c-.48-2.25-1-4.83-1.31-7.67a7.36 7.36 0 002.37.39 9.24 9.24 0 005.16-1.69c2.55-1.74 4.34-4.47 4.44-6.81a.34.34 0 00-.42-.37c-5.89.6-10.06 4.38-11.81 6.28a81.44 81.44 0 01-.43-8.16 6.83 6.83 0 003.66 1.19 5.91 5.91 0 001.75-.27c3.14-1 6-4.41 8.68-8a.57.57 0 00.12-.42.32.32 0 00-.23-.27c-5.23-1.61-11.82 3.92-13.95 5.9a64.86 64.86 0 01.58-7.27 18.41 18.41 0 003.54.36 12 12 0 007.52-2.34 10.57 10.57 0 003.95-7.95c0-.28-.2-.44-.51-.36-6.46 1.61-11.88 6.1-14.17 8.22.07-.43.15-.87.24-1.31a.48.48 0 000-.3c0-1.87-.6-3.23-1.82-3.92-1.44-.81-3.65-.7-6.55.35a.83.83 0 00-.43.35.51.51 0 000 .46 7.21 7.21 0 006.21 3.91 7.86 7.86 0 001.4-.15q-.34 1.83-.57 3.66c-1.51-1.25-5-3.23-10.6-1.81a.77.77 0 00-.42.27.6.6 0 00-.16.42c.28 4 2 6.52 4.52 6.74h.36c1.33 0 3.35-.61 6-3.07a71.64 71.64 0 00-.21 8.24c-2.08-1.18-7-3.21-12-.12a.64.64 0 00-.34.71c1.36 3.52 3.16 5.23 5.5 5.23h.06c1.95 0 4.21-1.22 6.89-3.63.16 2.64.43 5.16.77 7.5-2-1.55-4.77-1.3-8.68.73a.84.84 0 00-.39.42.39.39 0 00.07.43 8.91 8.91 0 005.69 2.31 7.48 7.48 0 003.76-1c.18 1 .37 1.94.55 2.85H132.3a85.74 85.74 0 002-6 .73.73 0 00.06-.21q.38-1.22.75-2.52c2.3 2.42 4.94 3.75 7.5 3.75a7.52 7.52 0 00.82-.05A6.13 6.13 0 00149 255a.81.81 0 00-.46-.78c-5.85-2.92-10.38-1.6-12.64-.49.51-2 1-4.1 1.43-6.29a.56.56 0 00.06-.29c.12-.62.23-1.24.34-1.87 2.74 2.72 5.17 4.06 7.39 4.06 2.71 0 5-2 7.09-6.11a.75.75 0 00-.33-.9c-5.34-3.46-11.16-1.1-13.73.29.24-1.63.44-3.29.59-5s0-.06 0-.08c.12-1.4.2-2.81.25-4.24 2.69 2.74 4.89 3.43 6.41 3.43h.49c3-.3 5.24-3.23 6.1-7.85a.71.71 0 00-.14-.53.88.88 0 00-.49-.34 14.14 14.14 0 00-12.33 2.22c0-1.34-.06-2.69-.15-4a8.64 8.64 0 001.48.15c4.94 0 7.63-4.4 7.75-4.61a.62.62 0 000-.58.92.92 0 00-.49-.44c-3.18-1.17-5.7-1.27-7.47-.3a4.94 4.94 0 00-2.29 2.95 21.65 21.65 0 00-15.17-11 .57.57 0 00-.5.13.51.51 0 00-.15.48c.69 4.48 2 10 5.91 12.57a9 9 0 005.15 1.49 15.75 15.75 0 004.46-.73 71.17 71.17 0 01-.05 9.58c-2.25-2.32-7.91-7.51-15.22-9.3a.52.52 0 00-.69.47c-.21 3.85 1 7 3.41 9.05a12.16 12.16 0 008 2.58 22.36 22.36 0 004.25-.45c-.26 2.64-.65 5.22-1.11 7.69-2.39-1.78-9.27-6.3-15.3-4.41a.49.49 0 00-.34.34.69.69 0 00.1.53c2.66 4.27 5.14 6.64 7.82 7.45a7.05 7.05 0 002.13.32 10.05 10.05 0 005.06-1.58c-.7 3.27-1.51 6.33-2.34 9.06a15.4 15.4 0 00-13.71-3.45.52.52 0 00-.37.69 10.56 10.56 0 006 6.31 8.61 8.61 0 003.15.62 7.84 7.84 0 003.92-1.08c-.56 1.69-1.1 3.18-1.6 4.49H109c-.64-1.91-1.3-4.08-1.89-6.45a7 7 0 002.11.34 7.7 7.7 0 007.48-7.43.35.35 0 00-.41-.32 14.49 14.49 0 00-9.64 5.49c-.51-2.25-1-4.65-1.26-7.13a6.64 6.64 0 003.32 1 4.87 4.87 0 001.51-.24c2.64-.84 4.79-3.85 6.72-7a.47.47 0 00.06-.36.33.33 0 00-.23-.24c-4.74-1.4-9.9 3.43-11.56 5.15a58 58 0 01-.27-6.35 16.63 16.63 0 003.13.32 9.55 9.55 0 006.33-2.05 8.17 8.17 0 002.59-6.95.35.35 0 00-.48-.31c-5.48 1.41-9.73 5.33-11.51 7.19 0-.39 0-.77.07-1.15a.37.37 0 00-.07-.26 4.14 4.14 0 00-2-3.43c-1.35-.71-3.26-.61-5.69.31a.56.56 0 00-.33.31.39.39 0 000 .39c.1.16 2.14 3.42 5.85 3.42a6.57 6.57 0 001.21-.13c-.07 1.07-.11 2.13-.11 3.2a10.78 10.78 0 00-9.46-1.57.61.61 0 00-.33.24.48.48 0 00-.1.37c.67 3.5 2.42 5.7 4.68 5.89H99c1.16 0 2.86-.54 4.94-2.69a62.05 62.05 0 00.7 7.2c-1.94-1-6.43-2.8-10.51-.1a.51.51 0 00-.23.62c1.58 3.07 3.33 4.57 5.37 4.57h.06c1.69 0 3.54-1.07 5.63-3.17.42 2.31.92 4.51 1.47 6.55-1.87-1.35-4.3-1.14-7.5.64a.59.59 0 00-.3.36.39.39 0 00.11.38 8.84 8.84 0 005.22 2 6.1 6.1 0 003.18-.9c.23.77.47 1.52.7 2.23h-21v4h8.34l5.87 14.87h94.7l5.87-14.87H210z"
      />
      <Path
        fill="#e0e0e0"
        d="M343.75 67.74H73.03v127.48h3.23l1.87 3.12h20.3l1.87-3.12h243.45V67.74z"
      />
      <Path
        fill="#e6e6e6"
        d="M344.88 67.74H74.15v127.48h3.23l1.88 3.12h20.29l1.88-3.12h243.45V67.74z"
      />
      <Path fill="#fafafa" d="M339.3 73.32v116.33H79.73V73.32z" />
      <Path
        fill="#fff"
        d="M269.24 189.65L211.36 73.32h-24.31l57.87 116.33h24.32zM233.29 189.65L175.41 73.32h-10.78l57.88 116.33h10.78z"
      />
      <Circle cx={83.36} cy={195.61} r={1.45} fill="#fafafa" />
      <Circle cx={87.96} cy={195.61} r={1.45} fill="#f0f0f0" />
      <G>
        <Ellipse cx={250} cy={416.24} fill="#f5f5f5" rx={193.89} ry={11.32} />
      </G>
      <G>
        <Path
          fill="#F59C0D"
          d="M422.12 148.13h1v5.51h-1zM422.12 126.97h1v16.44h-1zM407.62 91.28H255.07a12 12 0 00-12 12v50.25l-16.59 16.59 16.59 16.6v101.22a12 12 0 0012 12h152.55a12 12 0 0012-12V103.28a12 12 0 00-12-12z"
        />
        <Path
          fill="#fff"
          d="M311.61 299.94H272l40.05-208.66h39.61l-40.05 208.66zM341.96 299.94h-14.21l40.04-208.66H382l-40.04 208.66z"
          opacity={0.1}
        />
        <Path
          fill="#263238"
          d="M342.59 139.39a15.59 15.59 0 10-31.18 0v25.47l31.18-11.33z"
        />
        <Path
          fill="#ffb573"
          d="M314.17 177.2l-1.45 29.39-.16 3.73a22.54 22.54 0 01-.7 4.32 46.22 46.22 0 01-2.69 7.48 84.89 84.89 0 01-7.53 13.24l-3.61-2c1.85-4.45 3.67-9 5.07-13.52a49.9 49.9 0 001.67-6.66 17.35 17.35 0 00.25-3l-.06-3.66q-.07-7.47.16-14.91c.13-5 .35-9.9.7-14.87z"
        />
        <Path
          fill="#263238"
          d="M308.48 167.23c-3.38.86-5.74 14.74-5.74 14.74l9.3 6.33s8.91-14 6.32-17.72c-2.7-3.87-4.96-4.58-9.88-3.35z"
        />
        <Path
          d="M308.78 170.33l-2.59 13.99 5.22 3.55-2.63-17.54z"
          opacity={0.2}
        />
        <Path
          fill="#ffb573"
          d="M298 233.32l-2.34 7.05 7.84-2.82s.82-5.19-1.88-7.25l-.76.3a4.15 4.15 0 00-2.86 2.72zM296.83 246.35l6.85-1.34-.15-7.46-7.84 2.82 1.14 5.98z"
        />
        <Path
          fill="#263238"
          d="M308.48 167.23s-3.91 1.37 3.91 49.41h33.25c-.56-13.53-.57-21.88 5.89-49.65a97.21 97.21 0 00-14.12-1.86 105.58 105.58 0 00-15.1 0c-6.48.59-13.83 2.1-13.83 2.1z"
        />
        <Path
          d="M318.26 202.05h8.24l-5.71-16.25h-8.23l5.7 16.25z"
          opacity={0.7}
        />
        <Path
          fill="#F59C0D"
          d="M317.7 202.05h8.24l-5.71-16.25h-8.24l5.71 16.25z"
        />
        <Path
          fill="#ffb573"
          d="M335.92 148.13c-.95 4.86-1.91 13.76 1.49 17 0 0-1.32 4.93-10.35 4.93-9.93 0-4.75-4.93-4.75-4.93 5.42-1.29 5.28-5.31 4.34-9.09z"
        />
        <Path
          d="M332.14 151.36l-5.49 4.64a14.92 14.92 0 01.47 2.68c2.07-.3 4.91-2.57 5.13-4.74a7.17 7.17 0 00-.11-2.58z"
          opacity={0.2}
        />
        <Path
          fill="#ffb573"
          d="M337.33 136c1 8.06 1.58 11.45-1.69 16.29-4.92 7.28-15 6.73-18.42-.88-3-6.85-4.14-18.89 3.08-23.51a11.08 11.08 0 0117.03 8.1z"
        />
        <Path
          fill="#263238"
          d="M317.61 129.86c-.05.17 12 13 20.5 11.95 1.78-2.67.95-11.06-2.27-12.84s-8-4.28-11.23-3.72-7 4.61-7 4.61z"
        />
        <Path
          fill="#fff"
          d="M312.39 216.64s-9.65 28-4.89 83.3h27.84c2-30 1.4-83.3 1.4-83.3z"
        />
        <Path
          fill="#fff"
          d="M345.64 216.64h-24.05s6.09 55.93 10 83.3h24.9c2.96-69.64-10.85-83.3-10.85-83.3z"
        />
        <Path
          fill="#f5f5f5"
          d="M326.28 299.94s-2.39-36.08.5-45.86c2.83 14.56 11 45.86 11 45.86z"
        />
        <Path
          fill="#263238"
          d="M325 140.5c.12.65-.13 1.24-.55 1.32s-.87-.39-1-1 .13-1.24.55-1.32.89.35 1 1zm-7.33 1.36c.12.65-.13 1.24-.55 1.31s-.87-.38-1-1 .13-1.24.55-1.32.88.36 1 1.01z"
        />
        <Path fill="#263238" d="M316.88 140.82l-1.65-.16s1.03 1.07 1.65.16z" />
        <Path
          fill="#ed893e"
          d="M320.15 142.61a17.77 17.77 0 01-1.55 4.57 2.86 2.86 0 002.4 0z"
        />
        <Path
          fill="#263238"
          d="M325 149.07a6.26 6.26 0 01-.95.25.19.19 0 01-.22-.15.2.2 0 01.15-.23 5.21 5.21 0 003.83-2.79.19.19 0 11.35.15 5.39 5.39 0 01-3.16 2.77z"
        />
        <Path
          fill="#ffb573"
          d="M340.85 142.94a5.93 5.93 0 01-2.44 3.82c-1.72 1.18-3.25-.19-3.33-2.16-.08-1.77.72-4.53 2.71-4.92a2.67 2.67 0 013.06 3.26z"
        />
        <Path
          fill="#263238"
          d="M327.68 138.46a.41.41 0 01-.44-.13c-1.09-1.43-3.39-1.36-3.42-1.36a.4.4 0 01-.4-.38.39.39 0 01.37-.4c.11 0 2.74-.08 4.07 1.67a.38.38 0 01-.08.54zm-12.84.41a.36.36 0 01-.38-.07.37.37 0 010-.54 3.86 3.86 0 013.24-1.44.38.38 0 01.33.43.39.39 0 01-.43.34 3 3 0 00-2.55 1.17.36.36 0 01-.21.11z"
        />
        <Path
          fill="#ffb573"
          d="M355.36 176.52c.95 4.68 1.65 9.29 2.21 14a133.64 133.64 0 011 14.22v.95a4.14 4.14 0 01-.06.66 5.07 5.07 0 01-1.59 2.95 5.27 5.27 0 01-2.42 1.22 7.4 7.4 0 01-1.69.17 12.31 12.31 0 01-2.42-.31c-.7-.15-1.35-.34-2-.53a51.79 51.79 0 01-6.79-2.85 110.66 110.66 0 01-12.25-7.19l2-3.64c2.11.86 4.24 1.76 6.37 2.59s4.24 1.68 6.37 2.41a53.84 53.84 0 006.21 1.83c.5.11 1 .2 1.41.25a4.34 4.34 0 001 0c.11 0 .12 0 0 0a1.91 1.91 0 00-.88.47 2.62 2.62 0 00-.81 1.42v.3-.42c-.38-4.45-1-9-1.65-13.46s-1.46-9.05-2.23-13.48z"
        />
        <Path
          fill="#263238"
          d="M351.53 167c3.34 1 7.34 12.48 7.34 12.48l-12.93 9.25s-4.71-9.58-3.31-13.89c1.46-4.49 5.1-9.01 8.9-7.84zm-27.31-27.54l-1.65-.16s1.03 1.07 1.65.16z"
        />
        <Path
          fill="#ffb573"
          d="M332.2 196.52l-8-3.79 2.12 8.05s4.71 2.35 7-.17z"
        />
        <Path
          fill="#ffb573"
          d="M317.5 194.24l2.13 6.64 6.7-.1-2.12-8.05-6.71 1.51z"
        />
        <Path
          fill="#F59C0D"
          d="M346.71 217.13a190.24 190.24 0 01-35.08 1.26.76.76 0 01-.71-.79c0-.73.08-1.46.11-2.19a.74.74 0 01.78-.71 186.59 186.59 0 0034.42-1.23.75.75 0 01.83.64c.09.73.19 1.46.29 2.19a.74.74 0 01-.64.83z"
        />
        <Path
          d="M346.71 217.13a190.24 190.24 0 01-35.08 1.26.76.76 0 01-.71-.79c0-.73.08-1.46.11-2.19a.74.74 0 01.78-.71 186.59 186.59 0 0034.42-1.23.75.75 0 01.83.64c.09.73.19 1.46.29 2.19a.74.74 0 01-.64.83z"
          opacity={0.4}
        />
        <Path
          fill="#fff"
          d="M335 107.79a3.6 3.6 0 11-3.6-3.6 3.6 3.6 0 013.6 3.6z"
        />
        <Circle cx={317.18} cy={107.79} r={3.6} fill="#fff" />
        <Path
          fill="#fff"
          d="M349.12 107.79a3.6 3.6 0 11-3.6-3.6 3.6 3.6 0 013.6 3.6z"
        />
      </G>
      <G>
        <Path
          fill="#ce7a63"
          d="M200.86 405.49l7.24-1.68-2.83-16.93-7.24 1.68 2.83 16.93z"
        />
        <Path
          fill="#263238"
          d="M208.29 402.88l-8.13 1.89a.54.54 0 00-.43.62l1.05 6.51a1.31 1.31 0 001.56 1c2.82-.7 4.13-1.18 7.71-2 2.2-.51 11.61-2.46 14.64-3.16s2.28-3.68.93-3.66c-6.05.13-13.58.11-16-1a2.09 2.09 0 00-1.33-.2z"
        />
        <Path
          d="M198.03 388.57l7.24-1.69 1.46 8.73-7.25 1.68-1.45-8.72z"
          opacity={0.2}
        />
        <Path
          fill="#F59C0D"
          d="M187.16 220.47s9.54 60.35 12.34 81.4c3.07 23.05 9.55 90.47 9.55 90.47L195.93 396s-12.43-65.34-17.55-87.75c-5.56-24.32-17.71-87.74-17.71-87.74z"
        />
        <Path
          d="M187.16 220.47s9.54 60.35 12.34 81.4c3.07 23.05 9.55 90.47 9.55 90.47L195.93 396s-12.43-65.34-17.55-87.75c-5.56-24.32-17.71-87.74-17.71-87.74z"
          opacity={0.5}
        />
        <Path
          d="M171.6 241.67c5 12.79 4.72 38.08 2.57 47-3-14.63-6.48-32.13-9.15-45.74.98-3.5 3.53-9.04 6.58-1.26z"
          opacity={0.3}
        />
        <Path
          fill="#F59C0D"
          d="M195.6 396.22l14.05-3.87-.23-5.71-15.83 5.46 2.01 4.12zM211.14 403.55a9.66 9.66 0 01-2 .19.17.17 0 01-.16-.11.19.19 0 010-.18c.2-.22 1.93-2.09 2.9-1.95a.66.66 0 01.5.39.94.94 0 010 1 2 2 0 01-1.24.66zm-1.58-.17c1.35 0 2.3-.3 2.56-.71a.62.62 0 000-.63.3.3 0 00-.24-.2c-.53-.07-1.6.82-2.32 1.54z"
        />
        <Path
          fill="#F59C0D"
          d="M209.19 403.73h-.08a.15.15 0 01-.12-.11c0-.09-.66-2.13-.09-3a.89.89 0 01.66-.4.65.65 0 01.73.37c.34.75-.4 2.5-1 3.1zm.33-3.15a.52.52 0 00-.33.23 3.87 3.87 0 000 2.4 3.55 3.55 0 00.75-2.48c0-.09-.13-.19-.38-.17z"
        />
        <Path
          fill="#ce7a63"
          d="M187.56 163.1c1.16 1.61 2.12 3.08 3.1 4.66s1.9 3.12 2.77 4.72a106.25 106.25 0 014.86 9.87c.72 1.69 1.43 3.4 2.05 5.15.33.87.61 1.76.9 2.65.14.47.3.83.43 1.38s.26 1.08.35 1.7a15.25 15.25 0 01.19 2.19 9 9 0 01-.16 1.68 6.16 6.16 0 01-1.28 2.71 5.33 5.33 0 01-1.66 1.31 5.19 5.19 0 01-1.75.54 5.7 5.7 0 01-2.23-.18 7.1 7.1 0 01-2.16-1 13.55 13.55 0 01-2.47-2.2 20.1 20.1 0 01-1.85-2.4l3.7-4.16a29.61 29.61 0 004.26 1.48c.24 0 .47 0 .29-.12a1.57 1.57 0 00-.91-.11 3.48 3.48 0 00-1.14.33 3.82 3.82 0 00-1.95 2.4c-.07.26-.08.35-.12.36s-.13-.18-.25-.4l-.41-.83c-.15-.28-.32-.73-.48-1.09-.33-.76-.63-1.52-1-2.27-.68-1.51-1.39-3-2.15-4.51-1.52-3-3.15-5.93-4.85-8.84-.86-1.45-1.73-2.9-2.62-4.33s-1.81-2.9-2.65-4.17z"
        />
        <Path
          fill="#F59C0D"
          d="M184.77 156.35c-7.36-1.71-11.83 3-9.63 12.21a140.91 140.91 0 005 15.53c.43 1.14.83 2.16 1.16 3l16.7-9.34c-1.8-7.31-8.31-20.25-13.23-21.4z"
        />
        <Path
          d="M185.08 165.08c-4.44-4 .1 12.12 2 18.8l4.91-2.74c-.52-4.63-3.5-13.01-6.91-16.06z"
          opacity={0.3}
        />
        <Path
          fill="#ce7a63"
          d="M145.98 408.67h7.41l1.1-17.17h-7.41l-1.1 17.17z"
        />
        <Path
          fill="#263238"
          d="M153.79 407.81h-8.33a.53.53 0 00-.55.51l-.46 6.59a1.29 1.29 0 001.29 1.31c2.9-.05 4.28-.22 7.95-.22 2.25 0 11.83.24 14.94.24s3.05-3.08 1.73-3.36c-5.9-1.25-13.22-3-15.3-4.61a2 2 0 00-1.27-.46z"
        />
        <Path d="M147.08 391.5h7.41l-.57 8.85h-7.41l.57-8.85z" opacity={0.2} />
        <Path
          fill="#F59C0D"
          d="M172.69 220.47s.25 56.28-1.12 77.5c-1.5 23.25-14.45 100.25-14.45 100.25h-13.58s6.75-75.13 6.11-98.14c-.69-25-2.14-79.61-2.14-79.61z"
        />
        <Path
          d="M172.69 220.47s.25 56.28-1.12 77.5c-1.5 23.25-14.45 100.25-14.45 100.25h-13.58s6.75-75.13 6.11-98.14c-.69-25-2.14-79.61-2.14-79.61z"
          opacity={0.5}
        />
        <Path
          fill="#F59C0D"
          d="M142.99 398.22h14.68l.85-5.16-16.2.81.67 4.35zM156.41 409.1a9.51 9.51 0 01-2-.26.2.2 0 01-.13-.14.17.17 0 01.08-.17c.23-.17 2.34-1.6 3.25-1.25a.64.64 0 01.39.49 1 1 0 01-.22.94 2 2 0 01-1.37.39zm-1.5-.51c1.32.26 2.3.22 2.65-.13a.62.62 0 00.13-.61.32.32 0 00-.19-.25c-.5-.19-1.73.4-2.59.99z"
        />
        <Path
          fill="#F59C0D"
          d="M154.47 408.84h-.08a.19.19 0 01-.09-.14c0-.09-.16-2.22.6-2.94a.83.83 0 01.73-.24.66.66 0 01.62.52c.17.81-.95 2.36-1.69 2.8zm1-3a.5.5 0 00-.37.15 3.89 3.89 0 00-.51 2.35 3.55 3.55 0 001.29-2.25c0-.1-.08-.22-.33-.25zm31.69-185.37h-39.65c-.25-3.54.66-15.06.16-29.73A187.75 187.75 0 00144 158.4c-.17-.8-.35-1.59-.53-2.39 0 0 2-.41 4.89-.83 2.4-.35 5.4-.71 8.34-.85a147.89 147.89 0 0116.85 0c2.59.24 5.12.67 7.13 1.06 2.58.52 4.1 1 4.1 1s9.58 22.39 2.38 64.08z"
        />
        <Path
          fill="#ce7a63"
          d="M187.7 190.39a10.6 10.6 0 00-2.7-3.1 17.09 17.09 0 01-2.11-1.43.49.49 0 00-.78.33c-.08.58.16 1.53 1.58 2.91.11 1.83 2.8 3.85 2.8 3.85z"
        />
        <Path
          d="M181.65 194.81h-8.24l5.7-16.25h8.24l-5.7 16.25z"
          opacity={0.3}
        />
        <Path
          fill="#263238"
          d="M182.21 194.81h-8.24l5.7-16.25h8.24l-5.7 16.25z"
        />
        <Path
          d="M147.67 190.74A187.75 187.75 0 00144 158.4c2.65-.23 7.18 0 7.9 4.31.76 4.6-.35 15.42-4.23 28.03z"
          opacity={0.3}
        />
        <Path
          fill="#ce7a63"
          d="M151.22 165.41L147 179.85l-2.09 7.21-1 3.6-.5 1.79-.24.9v.11c0 .06 0 0 0 0a1.28 1.28 0 000-.19 2.77 2.77 0 000-.56 3.32 3.32 0 00-.51-1.33 2.1 2.1 0 00-.61-.6c-.26-.14-.09 0 .19.13a11.13 11.13 0 002.66.58 55.86 55.86 0 007 .3c4.85-.06 9.91-.34 14.86-.68l1.1 5.46a101 101 0 01-15.28 3.59 52.77 52.77 0 01-8.23.66 20.75 20.75 0 01-4.85-.57 9.68 9.68 0 01-3.26-1.44 7.14 7.14 0 01-1.93-2 6.91 6.91 0 01-1.15-3.1 7.68 7.68 0 010-1.51c0-.22 0-.44.09-.66l.07-.4.18-1 .35-1.91c.24-1.27.5-2.54.78-3.8.54-2.52 1.1-5 1.73-7.53 1.23-5 2.6-9.9 4.18-14.84z"
        />
        <Path
          fill="#F59C0D"
          d="M143.46 156c-4.94 1.15-10.48 14.16-12.43 21.47-.33 1.25-.59 2.32-.79 3.14-.26 1.08-.4 1.73-.4 1.73l16.57 4.72c.34-.82.76-1.84 1.2-3a140.31 140.31 0 005.28-15.53c2.35-9.19-2.05-14.23-9.43-12.53z"
        />
        <Path
          fill="#ce7a63"
          d="M172.74 154.27c-4.89-1.16-5.72-4.19-5.37-7.52a20 20 0 01.41-2.48l-6.1-5.1-4.48-3.74c1.21 5.43 2.54 15.32-1.16 18.94a70.15 70.15 0 0016.17 10.09c5.79-4.25.53-10.19.53-10.19z"
        />
        <Path
          d="M167.78 144.27a20 20 0 00-.41 2.48c-2.28-.46-5.73-2.5-6-5.08a10.31 10.31 0 01.35-2.5z"
          opacity={0.2}
        />
        <Path
          fill="#263238"
          d="M179.21 118.21c2.13 3.38-1.89 13.11-7 12.41s2.98-18.83 7-12.41z"
        />
        <Path
          fill="#ce7a63"
          d="M157.65 124.48c-.9 7.33-1.81 11.56 1.12 16A9.6 9.6 0 00175.7 139c2.75-6.17 3.77-17.11-2.71-21.5a9.76 9.76 0 00-15.34 6.98z"
        />
        <Path
          fill="#263238"
          d="M156.8 130.1c3.75-.47 6.46-6.72 5.69-9.64 2.76 2 24.67 4.54 21.33-9.75-6.25 0-32.33-1.17-28 4.46-3 0-5.84 2.72-3.8 9 2.06 6.46 4.78 5.93 4.78 5.93z"
        />
        <Path
          fill="#ce7a63"
          d="M153.59 131.06a7.85 7.85 0 003.42 4.05c2 1.11 3.2-.72 2.78-3-.37-2.07-1.87-5.14-4-5.29s-3 2.08-2.2 4.24z"
        />
        <Path
          fill="#263238"
          d="M168.15 128.84c-.11.59.11 1.13.49 1.21s.78-.33.89-.92-.11-1.13-.49-1.21-.78.33-.89.92zm6.6 1.41c-.11.59.11 1.14.49 1.22s.78-.33.89-.92-.11-1.13-.49-1.21-.78.33-.89.91z"
        />
        <Path
          fill="#ba4d3c"
          d="M172.59 130.1a22.41 22.41 0 001.85 5.63 3.38 3.38 0 01-2.88-.07z"
        />
        <Path
          fill="#263238"
          d="M168.88 136.74a5.12 5.12 0 01-3-2.67.18.18 0 11.33-.13 4.89 4.89 0 003.43 2.64.17.17 0 01.14.21.18.18 0 01-.21.13 5.92 5.92 0 01-.69-.18zm-2.37-10.49a.35.35 0 01-.12-.59 3.39 3.39 0 013.07-.84.36.36 0 01.24.44.37.37 0 01-.44.24 2.68 2.68 0 00-2.4.68.35.35 0 01-.35.07zm11.49 2.32a.32.32 0 01-.22-.23 2.93 2.93 0 00-1.65-2 .34.34 0 01-.21-.45.35.35 0 01.44-.22 3.6 3.6 0 012.09 2.47.35.35 0 01-.24.43.3.3 0 01-.21 0z"
        />
        <Path
          fill="#ce7a63"
          d="M165.44 191.38l7.92-4.1-1.36 9.25s-6.51 1.79-7.12-1.64z"
        />
        <Path
          fill="#ce7a63"
          d="M170.84 188.58a10.82 10.82 0 013.2-2.64 15.61 15.61 0 002.53-1.44.49.49 0 01.72.44 4.72 4.72 0 01-2.27 3c-.42 1.79-3.42 3.36-3.42 3.36z"
        />
        <Path
          fill="#ce7a63"
          d="M179.84 188.56l-1.11 5.77a1.26 1.26 0 01-1 1l-5.8 1.2 1.41-9.17 5.21-.27a1.23 1.23 0 011.29 1.47zM164.83 194.89l.61-3.51 7.92-4.1M191.21 192.14l-6.31-3.82-.46 8.21s6.65 2.55 7.32-.88zm-9.21-3.73l-.5 6.47a.8.8 0 00.54.82l2.39.83.46-8.21-1.82-.62a.81.81 0 00-1.07.71z"
        />
        <Path
          fill="#F59C0D"
          d="M172.69 87.21a3.6 3.6 0 11-3.6-3.6 3.6 3.6 0 013.6 3.6zm-14.17 2.12a3.6 3.6 0 11-3.6-3.6 3.6 3.6 0 013.6 3.6z"
        />
        <Circle cx={183.27} cy={91.46} r={3.6} fill="#F59C0D" />
      </G>
    </Svg>
  )
}

export default SvgComponent