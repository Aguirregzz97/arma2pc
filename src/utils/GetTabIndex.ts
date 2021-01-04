const TabIndexMap: Record<string, number> = {
  'Home': 0,
  'Arma2PC': 1,
  'About': 2,
  'Faq': 3,
}

export function getTabIndex(tab: string) {
  return TabIndexMap[tab]
}
