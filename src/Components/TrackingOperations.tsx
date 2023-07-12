import { CContainer, CRow, CCol } from '@coreui/react'
import { TrackingOperationsTable } from './TrackingOperationsTable'
import { TrackingOperationsTableSidebar } from './TrackingOperationsTableSidebar'



export const TrackingOperations = () => {
  return (
    <>
        <h2>Tracking Operations</h2>
        <CContainer fluid className=''>
            <CContainer className='bg-white pt-4 pb-2 px-2 m-0'>
                <p className=''><span className='font-weight-bold'>Project:</span> Ziply-Oregon</p>
            </CContainer>
            <CContainer className='p-0'>
                <CRow >
                    <CCol xs={3} className=''>
                        <CContainer className='pt-4 pb-2 px-2 m-0'>
                            <p className="border-bottom border-gray-300"><span className='font-weight-bold'>Central office:</span> Beaverton</p>
                            <div>
                                <TrackingOperationsTableSidebar />
                                <TrackingOperationsTableSidebar />
                                <TrackingOperationsTableSidebar />
                            </div>
                        </CContainer>
                    </CCol>
                    <CCol xs={9} className='bg-bg-danger'>
                        <TrackingOperationsTable />

                        <CRow className='bg-white w-100 text-center'>
                                <CCol className='d-flex flex-column justify-content-center align-items-center'>PERMITS</CCol>
                                
                                <CCol className='d-flex flex-column justify-content-center align-items-center' style={{paddingTop: '1rem'}}>
                                    <p className='font-weight-bold m-0 d-flex align-items-center'>
                                        <span style={{background: "#225AAC",width: 10,height: 10, display:'inline-block', marginRight:4}}></span>
                                        <span>NOT READY</span>
                                    </p>
                                    <p>10</p>
                                </CCol>
                                <CCol className='d-flex flex-column justify-content-center align-items-center' style={{paddingTop: '1rem'}}>
                                    <p className='font-weight-bold m-0 d-flex align-items-center'>
                                        <span style={{background: "#F98152",width: 10,height: 10, display:'inline-block', marginRight:4}}></span>
                                        <span>REQUESTED</span>
                                    </p>
                                    <p>10</p>
                                </CCol>
                                <CCol className='d-flex flex-column justify-content-center align-items-center' style={{paddingTop: '1rem'}}>
                                    <p className='font-weight-bold m-0 d-flex align-items-center'>
                                        <span style={{background: "#96D473",width: 10,height: 10, display:'inline-block', marginRight:4}}></span>
                                        <span>APPROVED</span>
                                    </p>
                                    <p>10</p>
                                </CCol>

                            </CRow>


                    </CCol>
                </CRow>
            </CContainer>


        </CContainer>
    </>
  )
}

