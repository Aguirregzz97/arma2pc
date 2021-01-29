const TabIndexMap: Record<string, number> = {
  '': 0,
  'home': 0,
  'arma2pc': 1,
  'about': 2,
  'contact': 3,
  'faq': 4,
}

export function getTabIndex(tab: string) {
  return TabIndexMap[tab]
}
