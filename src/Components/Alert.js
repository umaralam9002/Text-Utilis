import React from 'react'

export default function Alert(props) {
  return (
    props.alert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Copied</strong> {props.alert.message}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
        )
    )
}
