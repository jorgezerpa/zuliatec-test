import { CContainer, CRow, CCol } from '@coreui/react'
import { TrackingOperationsTable } from './TrackingOperationsTable'
import { CustomAccordion } from './CustomAccordion'



export const TrackingOperations = () => {
  return (
    <div className='pb-5'>
        <h2>Tracking Operations</h2>
        <CContainer fluid className='p-0'>
            <CContainer className='bg-white pt-4 pb-2 pl-3 m-0 d-flex justify-content-between align-content-center'>
                <p className=''><span className='font-weight-bold'>Project:</span> Ziply-Oregon</p>
                <div className=' px-4 pt-2 d-flex justify-content-center align-content-center font-weight-bold' style={{ borderRadius:'20px', background:'#dfecd6', color:'rgba(0,0,0,.4)' }}>Week 26</div>
            </CContainer>
            <CContainer className=''>
                <CRow >
                    <CCol xs={3} className='p-0 m-0'>
                        <CContainer className='pt-3 pb-2 px-0 m-0'>
                            <p className='' style={{ paddingBottom:'9px', paddingLeft: '10px', borderBottom:"2px solid #ddd" }}><span className='font-weight-bold'> office:</span> Beaverton</p>
                            <div style={{paddingLeft: '10px',}}>
                                <CustomAccordion title='Project: Ziply-Oregon' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16"><path fill="#888" d="M14.25.5H1.75A1.25 1.25 0 0 0 .5 1.75v12.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V1.75A1.25 1.25 0 0 0 14.25.5Zm-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25Z"/></svg>}>
                                    <CustomAccordion title='Central office: Beaverton' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16"><path fill="#888" d="M14.25.5H1.75A1.25 1.25 0 0 0 .5 1.75v12.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V1.75A1.25 1.25 0 0 0 14.25.5Zm-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25Z"/></svg>}>
                                        <CustomAccordion title='BVTN' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16"><path fill="#888" d="M14.25.5H1.75A1.25 1.25 0 0 0 .5 1.75v12.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V1.75A1.25 1.25 0 0 0 14.25.5Zm-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25Z"/></svg>}>
                                            <CustomAccordion title='VAULT' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                            <CustomAccordion title='MH' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                            <CustomAccordion title='MH' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                        </CustomAccordion>    
                                    </CustomAccordion>    
                                </CustomAccordion>

                                <CustomAccordion title='Project: 2' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16"><path fill="#888" d="M14.25.5H1.75A1.25 1.25 0 0 0 .5 1.75v12.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V1.75A1.25 1.25 0 0 0 14.25.5Zm-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25Z"/></svg>}>
                                    <CustomAccordion title='VAULT' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                    <CustomAccordion title='MH' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                    <CustomAccordion title='MH' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                </CustomAccordion>    
                                <CustomAccordion title='Project: 3' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16"><path fill="#888" d="M14.25.5H1.75A1.25 1.25 0 0 0 .5 1.75v12.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V1.75A1.25 1.25 0 0 0 14.25.5Zm-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25Z"/></svg>}>
                                    <CustomAccordion title='VAULT' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                    <CustomAccordion title='MH' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                    <CustomAccordion title='MH' icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 15 15"><rect width="14" height="14" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/></svg>}></CustomAccordion>    
                                </CustomAccordion>    
                            </div>
                        </CContainer>
                    </CCol>
                    <CCol xs={9} className=' m-0 p-0'>
                        <TrackingOperationsTable />

                        <CRow className='bg-white w-100 text-center ml-1'>
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
    </div>
  )
}

