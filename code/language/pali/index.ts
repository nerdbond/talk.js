import { Map, build, transform } from '../base'

export const vowels: Map = {
  i: 'i',
  ī: 'i_',
  e: 'e',
  a: 'a',
  ā: 'a_',
  o: 'o',
  u: 'u',
  ū: 'u_',
}

export const consonants: Map = {
  ḷh: 'Lh~',
  kh: 'kh~',
  bh: 'bh~',
  gh: 'gh~',
  jh: 'djh~',
  ph: 'ph~',
  th: 'th~',
  cch: 'txh~',
  cc: 'tx',
  ch: 'txh~',
  ṭh: 'Th~',
  ḍh: 'Dh~',
  dh: 'dh~',
  c: 'tx',
  ṃ: 'm',
  m: 'm',
  ṇ: 'N',
  ṅ: 'q',
  ñ: 'ny~',
  n: 'n',
  p: 'p',
  ṭ: 'T',
  t: 't',
  k: 'k',
  b: 'b',
  d: 'd',
  ḍ: 'ḍ',
  j: 'dj',
  g: 'g',
  s: 's',
  h: 'h',
  v: 'V',
  r: 'r',
  y: 'y',
  ḷ: 'L',
  l: 'l',
}

export const characters: Map = {
  ...vowels,
  ...consonants,
}

const s = build(characters)

const form = (t: string) => transform(t, s, characters)

export default form