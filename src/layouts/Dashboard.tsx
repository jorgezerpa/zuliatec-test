import { TrackingOperations } from '../Components/TrackingOperations'
import { DashboardSidebar } from '../common/DashboardSidebar'
import { CContainer, CRow, CCol } from '@coreui/react'

export const Dashboard = () => {
  return (
    <CContainer fluid className='p-0 vh-100 ' style={{ background:'#efefef' }}>
      <CRow className='w-100 h-100'>
        <CCol xs={3}>
          <DashboardSidebar />
        </CCol>
        <CCol xs={9} style={{paddingTop:'100px'}}>
          {/* tabs */}
          <TrackingOperations />
        </CCol>
      </CRow>
    </CContainer>
  )
}