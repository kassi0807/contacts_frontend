import { Fragment } from "react"


export const Name = ({reference, errors}) =>
<Fragment>
    <label className="form-label">
    <span className="bi-person p-1"></span>
    <span>Name</span>
    </label>
    <input type="text" ref={reference}
        className={errors ? "form-control is-invalid" : "form-control"} 
        placeholder="John DOE"/>
    <div className="invalid-feedback">
        { errors && errors.map((error, index) => 
            <span key={index}>{error}</span>
        )}
    </div>
</Fragment>