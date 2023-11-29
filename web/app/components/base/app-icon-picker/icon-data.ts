import { fefIcon } from '@/app/plugins/iconify'

// type fefCategory = keyof typeof fefIcon.categories

// 应用图标
export const AppIconsData = {
  categories: [
    {
      category: 'Animals & Nature',
      prefix: fefIcon.prefix,
      icons: fefIcon.categories['Animals & Nature'].map(icon => (`${fefIcon.prefix}:${icon}`)),
    },
  ],
}
