import {
  Children,
  cloneElement,
  FC,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export function getFragmentChildren(children: ReactNode) {
  return (children as ReactElement)?.type === Fragment
    ? (children as ReactElement).props.children
    : children;
}

export function isValidChild(child: ReactElement, types: FC | FC[]) {
  if (!isValidElement(child)) {
    return false;
  }
  return (Array.isArray(types) ? types : [types]).find(type => type === child.type);
}

export function cloneChildren(
  children: ReactNode,
  handler: (child: ReactElement, index: number) => object | undefined,
  options?: { validChildren?: any[]; onlyRenderValid?: boolean },
): ReactNode {
  if (!children) {
    return null;
  }

  const { validChildren, onlyRenderValid = false } = options || {};

  return Children.map(getFragmentChildren(children), (child, index) => {
    const invalid = validChildren && !isValidChild(child, validChildren);

    if (onlyRenderValid && invalid) {
      return null;
    }

    if (!invalid && isValidElement(child)) {
      return cloneElement(child, handler(child, index));
    }

    return child;
  });
}

export function renderChildren(
  children: ReactNode | ((item: any, index: number, array: any) => ReactNode),
  items?: any[],
): ReactNode {
  if (items && typeof children === 'function') {
    return items.map(children);
  }

  return children as ReactNode;
}

export function countChildren(children): number {
  return Children.count(getFragmentChildren(children));
}

export function ensureArray(arr?: any): any[] {
  if (arr === undefined || arr === null) return [];
  if (Array.isArray(arr)) return arr;
  return [arr];
}

export function filterDOMProps(props) {
  const filteredProps = {};

  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && /^(data-.*|aria-.*)$/.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}
