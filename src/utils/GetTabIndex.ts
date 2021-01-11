const TabIndexMap: Record<string, number> = {
  '': 0,
  'Home': 0,
  'Arma2PC': 1,
  'About': 2,
  'Contact': 3,
  'Faq': 4,
}

export function getTabIndex(tab: string) {
  return TabIndexMap[tab]
}
