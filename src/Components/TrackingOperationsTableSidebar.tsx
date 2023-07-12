export function TrackingOperationsTableSidebar() {
  function toggleAccordion(event:any) {
    const accordionBody = event.target.nextElementSibling;
    accordionBody.classList.toggle("hidden-ac");
  }

  return (
    <div id="my-accordion pb-2">
      <div id="l1" className="">
        <p className="m-0 d-flex pb-2 " onClick={toggleAccordion}>
          <span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M14.25.5H1.75A1.25 1.25 0 0 0 .5 1.75v12.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V1.75A1.25 1.25 0 0 0 14.25.5Zm-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25Z"/></svg></span>
          Project: Ziply-Oregon
        </p>
        <div id="l2" className="px-2 m-0 hidden-ac">
          <p className="m-0 d-flex " onClick={toggleAccordion}>
          <span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M14.25.5H1.75A1.25 1.25 0 0 0 .5 1.75v12.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V1.75A1.25 1.25 0 0 0 14.25.5Zm-1.875 8.125h-3.75v3.75a.625.625 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75v-3.75a.625.625 0 0 1 1.25 0v3.75h3.75a.625.625 0 1 1 0 1.25Z"/></svg></span>
            Center Office
          </p>
          <div id="l3" className="px-4 m-0 hidden-ac">
            <p className="m-0"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 15 15">º<rect width="12" height="12" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/>º</svg></span>some data</p>
            <p className="m-0"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 15 15">º<rect width="12" height="12" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/>º</svg></span>some data</p>
            <p className="m-0"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 15 15">º<rect width="12" height="12" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/>º</svg></span>some data</p>
            <p className="m-0"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 15 15">º<rect width="12" height="12" x=".5" y=".5" stroke="#9E9E9E" rx="1.5"/>º</svg></span>some data</p>
          </div>
        </div>
      </div>
    </div>
  );
}