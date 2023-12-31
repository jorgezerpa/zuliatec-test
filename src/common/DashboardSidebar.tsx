import { CNav, CNavItem, CNavLink } from '@coreui/react'

const Items = [
    { icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M8.334 16.667v-5h3.333v5h4.167V10h2.5L10 2.5 1.667 10h2.5v6.667h4.167Z"/></svg>, label:"Home", path:"/" },
    { icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"> <path fill="#fff" d="M7.5 13.333h5v-5h3.334L10 2.5 4.167 8.333H7.5v5ZM4.167 15h11.667v1.667H4.167V15Z"/> </svg>, label:"Loading Audited Data", path:"/" },
    { icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g clip-path="url(#a)"><path fill="#fff" d="M16.125 8.367A6.242 6.242 0 0 0 10 3.333 6.246 6.246 0 0 0 4.458 6.7 4.995 4.995 0 0 0 0 11.667c0 2.758 2.242 5 5 5h10.833c2.3 0 4.167-1.867 4.167-4.167 0-2.2-1.708-3.983-3.875-4.133Zm-4.458 2.466v3.334H8.333v-3.333h-2.5L10 6.667l4.167 4.167h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>, label:"Loading Engineering Data", path:"/" },
    { icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M2.908 13.04a.625.625 0 0 0-1.238 0l-.006.085v2.918l.004.146a2.292 2.292 0 0 0 2.149 2.142l.139.004h2.916l.085-.005a.625.625 0 0 0 0-1.24l-.085-.005H3.956l-.107-.005a1.041 1.041 0 0 1-.93-.93l-.005-.107v-2.918l-.006-.085Zm15.417 0a.625.625 0 0 0-1.244.085v2.918l-.005.107a1.041 1.041 0 0 1-1.037.935h-2.917l-.085.006a.625.625 0 0 0 .085 1.244h2.917l.14-.004a2.292 2.292 0 0 0 2.152-2.288v-2.918l-.006-.085ZM7.497 2.292a.625.625 0 0 0-.625-.625H3.956l-.14.004a2.292 2.292 0 0 0-2.152 2.287v2.918l.006.085a.625.625 0 0 0 1.244-.085V3.958l.006-.107a1.042 1.042 0 0 1 1.036-.934h2.916l.085-.006a.625.625 0 0 0 .54-.62Zm8.682-.621-.14-.004h-2.917l-.085.005a.625.625 0 0 0 0 1.239l.085.006h2.917l.107.005a1.042 1.042 0 0 1 .93.93l.005.106v2.918l.006.085a.625.625 0 0 0 1.238 0l.006-.085V3.958l-.004-.145a2.292 2.292 0 0 0-2.148-2.142ZM7.083 11.25a2.916 2.916 0 1 1 5.832 0 2.916 2.916 0 0 1-5.832 0ZM5.175 9.786l-.007.017v.002a.625.625 0 0 1-.804.363c-.498-.186-.365-.807-.363-.811l.005-.013a5.331 5.331 0 0 1 .298-.597 6.31 6.31 0 0 1 .983-1.272c.935-.933 2.442-1.85 4.713-1.85 2.272 0 3.78.917 4.712 1.85.381.38.712.808.984 1.272.112.193.211.392.298.597l.005.013.002.004v.003a.625.625 0 0 1-.365.804.631.631 0 0 1-.804-.365l-.007-.017-.037-.083a3.965 3.965 0 0 0-.171-.326 5.065 5.065 0 0 0-.788-1.019c-.733-.733-1.933-1.483-3.83-1.483-1.894 0-3.095.75-3.828 1.483a5.06 5.06 0 0 0-.788 1.02 3.986 3.986 0 0 0-.208.408Z"/></svg>, label:"Tracking Operations", path:"/" },
    { icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" fill-rule="evenodd" d="M14.063 1.25a.937.937 0 0 1 .937.938V3.75h2.5A1.25 1.25 0 0 1 18.75 5v12.5a1.25 1.25 0 0 1-1.25 1.25h-15a1.25 1.25 0 0 1-1.25-1.25V5A1.25 1.25 0 0 1 2.5 3.75H5V2.187a.937.937 0 1 1 1.875 0V3.75h6.25V2.187a.938.938 0 0 1 .938-.937ZM3.124 9.375v7.5h13.75v-7.5H3.125Zm0-1.875h13.75V5.625H3.125V7.5Zm9.725 3.713a.937.937 0 0 1 0 1.325l-2.813 2.812a.937.937 0 0 1-1.325 0L7.15 13.787a.937.937 0 1 1 1.325-1.325l.9.9 2.15-2.15a.937.937 0 0 1 1.325 0Z" clip-rule="evenodd"/></svg>, label:"Planning Routes", path:"/" },
    { icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M4.167 17.5V7.354a2.578 2.578 0 0 1-1.199-.906A2.37 2.37 0 0 1 2.5 5c0-.694.243-1.285.73-1.77A2.41 2.41 0 0 1 5 2.5a2.41 2.41 0 0 1 1.77.73A2.41 2.41 0 0 1 7.5 5c0 .542-.156 1.024-.47 1.448a2.572 2.572 0 0 1-1.197.906v8.48h3.334V2.5h6.666v10.146c.486.18.886.483 1.199.906.312.424.469.907.468 1.448 0 .694-.243 1.285-.73 1.77a2.411 2.411 0 0 1-1.77.73 2.411 2.411 0 0 1-1.77-.73A2.411 2.411 0 0 1 12.5 15c0-.542.156-1.028.47-1.458a2.42 2.42 0 0 1 1.197-.896v-8.48h-3.334V17.5H4.167Z"/></svg>, label:"Consulting Routes", path:"/" },
    { icon:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="m12.5 17.5-5-1.75-3.875 1.5a.752.752 0 0 1-.77-.094.823.823 0 0 1-.355-.698V4.792c0-.18.052-.34.157-.48A.944.944 0 0 1 3.083 4L7.5 2.5l5 1.75 3.875-1.5a.752.752 0 0 1 .77.094.823.823 0 0 1 .355.698v11.666c0 .18-.052.34-.157.48a.943.943 0 0 1-.426.312L12.5 17.5Zm-.833-2.042v-9.75L8.333 4.542v9.75l3.334 1.166Z"/></svg>, label:"Consulting Routes map Viewer", path:"/" },
]

export const DashboardSidebar = () => {
  return (
    <CNav className="flex-column text-white h-100" style={{ background:"#708524", paddingTop:'100px' }}>
        {
            Items.map((Item)=>(
                Item.label==="Tracking Operations" 
                ?
                <CNavItem className='align-content-center mb-1'>
                    <CNavLink  href="#" className='text-white mx-2' style={{borderRadius:'10px', background:'rgba(255,255,255,.3)'}}>
                        <span className='pr-1'>{ Item.icon }</span>
                        <span>{ Item.label }</span>
                    </CNavLink>
                </CNavItem>
                :
                <CNavItem className='align-content-center mb-1'>
                    <CNavLink  href="#" className='text-white mx-2' style={{borderRadius:'10px'}}>
                        <span className='pr-1'>{ Item.icon }</span>
                        <span>{ Item.label }</span>
                    </CNavLink>
                </CNavItem>
            ))
        }
    </CNav>
  )
}

