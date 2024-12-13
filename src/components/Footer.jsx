import React from 'react'

export default function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>

      <div>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-twitter"></i>
        </button>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-google"></i>
        </button>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </div>
    </footer>
  )
}
