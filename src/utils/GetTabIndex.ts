const TabIndexMap: Record<string, number> = {
  'Home': 0,
  'Arma2PC': 1,
  'Contact': 2,
  'About': 3,
  'Faq': 4,
}

export function getTabIndex(tab: string) {
  return TabIndexMap[tab]
}
