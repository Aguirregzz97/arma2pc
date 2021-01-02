import "./Tab.scss"

import * as React from "react"

type TabStatus = "Tab_active" | "Tab_inactive"

export type TabProps = {
  status: TabStatus
  text: string
} & Pick<React.HTMLAttributes<HTMLDivElement>, "onClick">

const Tab: React.FC<TabProps> = ({ status, text, onClick }) => {
  return (
    <div role='tab' tabIndex={0} className={`Tab ${status}`} onClick={onClick}>
      <p>{text}</p>
    </div>
  )
}

export default Tab
