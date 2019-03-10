import { style } from 'typestyle';

import { Style } from '../types/Style';

function debugName(namespace: string, localName: string) {
  return `${namespace}_${localName}`;
}

export function cssClass(namespace: string, localName: string, ...styles: Style[]): string {
  return style(...styles, {
    $debugName: debugName(namespace, localName),
    $unique: true,
  });
}
