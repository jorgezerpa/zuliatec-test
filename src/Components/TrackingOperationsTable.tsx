import { CFormCheck, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'

const TableItems = [
  { title:"Audit", available:'', target:'', done:'5522'  },
  { title:"Engineering", available:'', target:'5227', done:''  },
  { title:"Decommision", available:'5139', target:'', done:'5886'  },
  { title:"Prepping", available:'4268', target:'2567', done:'7528'  },
  { title:"Extraction", available:'', target:'5277', done:'1358'  },
]

export const TrackingOperationsTable = () => {
      return (
        <CTable className='mx-0' style={{ color:'#555' }}>
          <CTableHead>
            <CTableRow className='text-white'>
              <CTableHeaderCell className='text-center' scope="col"  ></CTableHeaderCell>
              <CTableHeaderCell className='text-center' scope="col" style={{background:"#225AAC"}}>Available</CTableHeaderCell>
              <CTableHeaderCell className='text-center' scope="col" style={{background:"#F98152"}}>Target</CTableHeaderCell>
              <CTableHeaderCell className='text-center' scope="col" style={{background:"#96D473"}}>Done</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {
              TableItems.map((item)=>(
              <CTableRow className=''>
                <CTableHeaderCell className='py-3 text-center ' scope="row" style={{ width: "30%", background:"#fff", letterSpacing:'1px'}}>{ item.title.toUpperCase() }</CTableHeaderCell>
                <CTableDataCell className='py-3 text-center font-weight-bold' style={{ width: "23.33%", background:"#aac5f6"}}>{ item.available }</CTableDataCell>
                <CTableDataCell className='py-3 text-center font-weight-bold' style={{ width: "23.33%", background:"#fdebd8"}}>{ item.target }</CTableDataCell>
                <CTableDataCell className='py-3 text-center font-weight-bold' style={{ width: "23.33%", background:"#dfecd6"}}>
                  <div className='d-flex justify-content-center'>
                    <div className='w-100'></div>
                    <div className='w-100'>{ item.done }</div>
                    <div className='w-100 text-end'>{ item.done && <CFormCheck id="flexCheckChecked"  /> }</div>        
                    {/* <CFormCheck id="flexCheckChecked"  value="" aria-label="..." defaultChecked reverse /> */}
                  </div>
                </CTableDataCell>
              </CTableRow>
              ))
            }
          </CTableBody>
        </CTable>
      )
}

