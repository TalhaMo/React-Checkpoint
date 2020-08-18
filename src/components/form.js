import React from 'react'

function Form() {
    return(
        <form className="needs-validation" novalidate style={{width:'600px',margin:'20px'}} >
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationCustom01">First name</label>
            <input type="text" className="form-control" />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationCustom02">Last name</label>
            <input type="text" className="form-control" />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
            <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input class="form-control form-control-lg" type="text" id="staticEmail" value="email@example.com"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword"/>
            </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationCustom03">City</label>
            <input type="text" className="form-control" id="validationCustom03" required/>
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationCustom04">State</label>
            <select className="custom-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationCustom05">Zip</label>
            <input type="text" className="form-control" id="validationCustom05" required/>
            <div className="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
   
    )
}
export default Form;