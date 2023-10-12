// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeClassTab = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeClassTab}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
