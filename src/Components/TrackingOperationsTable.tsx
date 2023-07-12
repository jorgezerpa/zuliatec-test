import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'

const TableItems = [
  { title:"Audit", available:'', target:'', done:'5522'  },
  { title:"Engineering", available:'', target:'5227', done:''  },
  { title:"Decommision", available:'5139', target:'', done:'5886'  },
  { title:"Prepping", available:'4268', target:'2567', done:'7528'  },
  { title:"Extraction", available:'', target:'5277', done:'1358'  },
]

export const TrackingOperationsTable = () => {
      return (
        <CTable className=''>
          <CTableHead>
            <CTableRow className='text-white'>
              <CTableHeaderCell scope="col"  ></CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{background:"#225AAC"}}>Available</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{background:"#F98152"}}>Target</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{background:"#96D473"}}>Done</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {
              TableItems.map((item)=>(
              <CTableRow>
                <CTableHeaderCell className='text-center' scope="row" style={{background:"#fff"}}>{ item.title }</CTableHeaderCell>
                <CTableDataCell className='text-center' style={{background:"#aac5f6"}}>{ item.available }</CTableDataCell>
                <CTableDataCell className='text-center' style={{background:"#fdebd8"}}>{ item.target }</CTableDataCell>
                <CTableDataCell className='text-center' style={{background:"#dfecd6"}}>{ item.done }</CTableDataCell>
              </CTableRow>
              ))
            }
          </CTableBody>
        </CTable>
      )
}

