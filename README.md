# @mukhindev/react-svg-use-symbol

Easy use of SVG symbols in React

## Install

```
npm install @mukhindev/react-svg-use-symbol
```

## One-component example

```JavaScript
import { createSVGSymbols } from "./createSVGSymbols";

const { Symbols, SVG } = createSVGSymbols({
  "two-circles": (
    <svg viewBox="0 0 24 24">
      <circle cx={8} cy={8} r={8} fill="tomato"></circle>
      <circle cx={16} cy={16} r={8} fill="seagreen"></circle>
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24">
      <rect x={4} y={4} width={16} height={16} fill="currentColor"></rect>
    </svg>
  ),
});

export default function MyComponent() {
  return (
    <div>
      <SVG use="two-circles" height={24} width={24} />
      <SVG use="box" height={24} width={24} color="palevioletred" />
      <SVG use="box" height={24} width={24} color="royalblue" />
      <Symbols />
    </div>
  );
}
```

## Icons example

The previous example is intended as a quick demonstration, but is of little use.
`<use>` and `<symbol>` are useful when there are a lot of reused graphics. For example icons.

```
src
 ┣━ app
 ┃   ┗━ App.tsx
 ┣━ entities
 ┃   ┗━ MyComponent.tsx
 ┗━ ui
     ┗━ Icon
         ┣━ icons
         ┃   ┣━ boxIcon.tsx
         ┃   ┗━ twoCirclesIcon.tsx
         ┗━ index.ts
```

```JavaScript
// Icon/icons/boxIcon.tsx
export default (
  <svg viewBox="0 0 24 24">
    <rect x={4} y={4} width={16} height={16} fill="currentColor"></rect>
  </svg>
);
```

```JavaScript
// Icon/icons/twoCirclesIcon.tsx
export default (
  <svg viewBox="0 0 24 24">
    <circle cx={9} cy={9} r={6} fill="tomato"></circle>
    <circle cx={15} cy={15} r={6} fill="seagreen"></circle>
  </svg>
);
```

```JavaScript
// Icon/index.ts
import { createSVGSymbols } from "@mukhindev/react-svg-use-symbol";
import boxIcon from "./icons/boxIcon";
import twoCirclesIcon from "./icons/twoCirclesIcon";

export const { Symbols: IconSymbols, SVG: Icon } = createSVGSymbols({
  "two-circles": twoCirclesIcon,
  box: boxIcon,
});
```

```JavaScript
// App.ts
import { IconSymbols } from "src/ui/Icon";

export default function App(props) {
  const { children } = props;

  return (
    <main>
      {children}
      <IconSymbols />
    </main>
  );
}
```

```JavaScript
// MyComponent.ts
import { Icon } from "src/ui/Icon";

export default function MyComponent() {
  return (
    <div>
      <Icon use="two-circles" height={24} width={24} />
      <Icon use="box" height={24} width={24} color="palevioletred" />
      <Icon use="box" height={24} width={24} color="royalblue" />
    </div>
  );
}
```
