import React from 'react'
import Form from './form'
function mainContent() {
    return(
        <main>
            <div className="main-content">
            <h3 id="intro">Please enter your information below:</h3>
            <Form/>
            </div>
        </main>
    )
}
export default mainContent;