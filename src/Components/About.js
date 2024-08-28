import React from 'react'

export default function About() {
  return (
    <>
    <div className="container text-center">
    <h1><strong>About Us</strong></h1>
    </div>
    <div className="container col-xxl-8 px-4 py-5 boxshadow">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Here You know The Advantages of Text-Utils App</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with TextUtils App, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 btncolour">Learn More</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4 btncolour">Default</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
