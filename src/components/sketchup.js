import React from 'react';

function sketchupPreview() {
  return (
    <div className="app">
      {/* <iframe title="showcase" src="https://3dwarehouse.sketchup.com/embed/7f27c179-9abb-48b0-9247-e676df1c1ee3" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" width="100%" height="100%" allowFullScreen></iframe> */}
      <div className="title-page">Klik gambar untuk memperbesar</div>
      <div className="container">
        <iframe title="productivity-table" src="https://embed-3dwarehouse.sketchup.com/embed/d4fd2534-c68c-4119-9bcc-17cc69d5ef70" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" width="100%" height="100%" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default sketchupPreview;