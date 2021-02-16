import React from 'react'

export const Tabs = ({ tabs, activeTab, changeTab }) => {
  const handleTab = (value) => {
    changeTab(value)
  }

  return (
    <div className='tabs'>
      {tabs.map((tab, index) => (
        <div key={tab} className={`tab-item ${activeTab === index && 'active'}`} onClick={() => handleTab(index)}>
          {tab}
        </div>
      ))}
    </div>
  )
}
