import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const PlayerLayout = (player) => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name={player.name} href="components/accordion" />
      </CCol>
      <CCardHeader>
        <strong>{player.name}</strong>
      </CCardHeader>
    </CRow>
  )
}
