import React from 'react'
import { connect } from 'react-redux'
import { addStr, changeTab, removeStr, setAddDisabled } from '../redux/app-reducer'
import { Tabs } from './Tabs'
import { Content } from './Content'

const MainContainer_ = ({ activeTab, changeTab, strArr, addStr, isAddDisabled, setAddDisabled, removeStr }) => {
  const tabs = ['first', 'second', 'third']

  const text = {
    1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum eum labore quasi.',
    2: 'Accusamus accusantium adipisci corporis cum, dolorem enim ex excepturi harum iusto, repudiandae sapiente sint tempore veniam, voluptatibus?'
  }

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} changeTab={changeTab} />
      {activeTab === 0 ? (
        <Content strArr={strArr} addStr={addStr} isAddDisabled={isAddDisabled} setAddDisabled={setAddDisabled} removeStr={removeStr} />
      ) : (
        <div>{text[activeTab]}</div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  activeTab: state.app.activeTab,
  strArr: state.app.strArr,
  isAddDisabled: state.app.isAddDisabled
})

export const MainContainer = connect(mapStateToProps, {
  changeTab,
  setAddDisabled,
  addStr,
  removeStr
})(MainContainer_)
