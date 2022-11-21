import { Fragment } from "react"


export const Email = ({reference, errors}) =>
<Fragment>
    <label className="form-label">
        <span className="bi-envelope p-1"></span>
        <span>Email</span>
    </label>
    <input type="text" ref={reference}
        className={errors ? "form-control is-invalid" : "form-control"} 
        placeholder="john.doe@example.com"/>
    <div className="invalid-feedback">
        { errors && errors.map((error, index) => 
            <span key={index}>{error}</span>
        )}
    </div>
</Fragment>