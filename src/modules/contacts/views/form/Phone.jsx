import { Fragment } from "react"


export const Phone = ({reference, errors}) =>
<Fragment>
    <label className="form-label">
        <span className="bi-phone p-1"></span>
        <span>Phone</span>
    </label>
    <input type="text"  ref={reference}
        className={errors ? "form-control is-invalid" : "form-control"} 
        placeholder="+123 123 456 789"/>
    <div className="invalid-feedback">
        { errors && errors.map((error, index) => 
            <span key={index}>{error}</span>
        )}
    </div>
</Fragment>