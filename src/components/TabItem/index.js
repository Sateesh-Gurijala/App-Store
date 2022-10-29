// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTabItem = () => {
    updatedActiveId(tabId)
  }
  const isActiveBtn = isActive ? 'tab-btn active' : 'tab-btn'
  return (
    <li className="tab-item">
      <button type="button" className={isActiveBtn} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
