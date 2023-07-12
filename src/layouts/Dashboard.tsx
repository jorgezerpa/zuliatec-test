import { TrackingOperations } from '../Components/TrackingOperations'
import { DashboardSidebar } from '../common/DashboardSidebar'
import { CContainer, CRow, CCol } from '@coreui/react'

export const Dashboard = () => {
  return (
    <CContainer fluid className='p-0  min-vh-100' style={{ background:'#efefef' }}>
      <CRow className='w-100 h-100 p-0'>
        <CCol xs={12} sm={12} md={12} lg={3} className='p-0'>
          <DashboardSidebar />
        </CCol>
        <CCol xs={12} sm={12} md={12} lg={9} className='' style={{paddingTop:'120px'}}>
          {/* tabs */}
          <TrackingOperations />
        </CCol>
      </CRow>
    </CContainer>
  )
}
