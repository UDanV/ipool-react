// HIIT
import hiit1_1 from '@/assets/poolsar/hiit/hiit1-1.jpg'
import hiit2_1 from '@/assets/poolsar/hiit/hiit2-1.jpg'
import hit_new2026_1 from '@/assets/poolsar/hiit/hit_new2026_1.jpg'
import hit_new2026_2 from '@/assets/poolsar/hiit/hit_new2026_2.jpg'
import hit_new2026_3 from '@/assets/poolsar/hiit/hit_new2026_3.jpg'
import hiit_foto_new1 from '@/assets/poolsar/hiit/hiit_foto_new1.jpg'

// SPACE
import space1 from '@/assets/poolsar/space/space1.jpg'
import space2 from '@/assets/poolsar/space/space2.jpg'
import space_new2026_1 from '@/assets/poolsar/space/space_new2026_1.jpg'
import space_new2026_2 from '@/assets/poolsar/space/space_new2026_2.jpg'
import space_foto_new1 from '@/assets/poolsar/space/space_foto_new1.jpg'

// TETTA
import tetta_m3_2 from '@/assets/poolsar/tetta/m3-2.jpg'
import tetta_1 from '@/assets/poolsar/tetta/tetta_1.jpg'
import tetta_foto_new1 from '@/assets/poolsar/tetta/tetta_foto_new1.jpg'
import tetta_foto_new2 from '@/assets/poolsar/tetta/tetta_foto_new2.jpg'
import tetta_new from '@/assets/poolsar/tetta/tetta_new.jpg'
import tetta_new2026_1 from '@/assets/poolsar/tetta/tetta_new2026_1.jpg'

// ZEN
import zen_m1 from '@/assets/poolsar/zen/m1.jpg'
import zen_m1_1 from '@/assets/poolsar/zen/m1-1.jpg'
import zen1_new from '@/assets/poolsar/zen/zen1_new.jpg'
import zen2_new from '@/assets/poolsar/zen/zen2_new.jpg'
import zen4_new from '@/assets/poolsar/zen/zen4_new.jpg'
import zen_foto_new1 from '@/assets/poolsar/zen/zen_foto_new1.jpg'
import zen_foto_new2 from '@/assets/poolsar/zen/zen_foto_new2.jpg'
import zen_new2026_1 from '@/assets/poolsar/zen/zen_new2026_1.jpg'
import zen_new2026_2 from '@/assets/poolsar/zen/zen_new2026_2.jpg'
import zen_new2026_3 from '@/assets/poolsar/zen/zen_new2026_3.jpg'
import zen_new2026_4 from '@/assets/poolsar/zen/zen_new2026_4.jpg'
import zen_new2026_5 from '@/assets/poolsar/zen/zen_new2026_5.jpg'

export {
  hiit1_1,
  hiit2_1,
  hit_new2026_1,
  hit_new2026_2,
  hit_new2026_3,
  hiit_foto_new1,
  space1,
  space2,
  space_new2026_1,
  space_new2026_2,
  space_foto_new1,
  tetta_m3_2,
  tetta_1,
  tetta_foto_new1,
  tetta_foto_new2,
  tetta_new,
  tetta_new2026_1,
  zen_m1,
  zen_m1_1,
  zen1_new,
  zen2_new,
  zen4_new,
  zen_foto_new1,
  zen_foto_new2,
  zen_new2026_1,
  zen_new2026_2,
  zen_new2026_3,
  zen_new2026_4,
  zen_new2026_5,
}

export const hiitImages = [
  hiit1_1,
  hiit2_1,
  hit_new2026_1,
  hit_new2026_2,
  hit_new2026_3,
  hiit_foto_new1,
] as const

export const spaceImages = [
  space1,
  space2,
  space_new2026_1,
  space_new2026_2,
  space_foto_new1,
] as const

export const tettaImages = [
  tetta_m3_2,
  tetta_1,
  tetta_foto_new1,
  tetta_foto_new2,
  tetta_new,
  tetta_new2026_1,
] as const

export const zenImages = [
  zen_m1,
  zen_m1_1,
  zen1_new,
  zen2_new,
  zen4_new,
  zen_foto_new1,
  zen_foto_new2,
  zen_new2026_1,
  zen_new2026_2,
  zen_new2026_3,
  zen_new2026_4,
  zen_new2026_5,
] as const

export const poolsarImages = [
  ...hiitImages,
  ...spaceImages,
  ...tettaImages,
  ...zenImages,
] as const

export const poolsarImagesByType = {
  HIIT: hiitImages,
  SPACE: spaceImages,
  TETTA: tettaImages,
  ZEN: zenImages,
} as const
