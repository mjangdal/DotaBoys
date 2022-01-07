import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const dataBasePlayers = [
  {
    name: 'Adam',
  },
  {
    name: 'Breadcrumb22',
  },
  {
    name: 'Cards22',
  },
  {
    name: 'test2',
  },
  {
    name: 'Collapse',
  },
]

const playersInDropdownSideBar = dataBasePlayers.map((player) => {
  return {
    component: CNavItem,
    name: player.name,
    to: '/players/' + player.name,
  }
})

export default playersInDropdownSideBar
