import { ReactElement, SVGAttributes } from "react";

/** Create <Symbols /> and <SVG> components to easily use SVG symbols */
export function createSVGSymbols<
  T extends Record<string, ReactElement>,
  K extends keyof T,
>(map: T) {
  function Symbols() {
    return (
      <svg data-component="Symbols" style={{ display: "none" }}>
        {Object.entries(map).map(([id, element]) => {
          return (
            <symbol key={id} id={id} {...element.props}>
              {element.props.children}
            </symbol>
          );
        })}
      </svg>
    );
  }

  function SVG(props: SVGAttributes<SVGSVGElement> & { use: K }) {
    const { children, className, use, ...svgProps } = props;

    return (
      <svg data-component="SVG" className={className} {...svgProps}>
        <use href={`#${use as string}`} />
      </svg>
    );
  }

  return { Symbols, SVG };
}
