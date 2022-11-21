import { Fragment } from "react"


export const Address = ({reference, errors}) =>
<Fragment>
    <label className="form-label">
        <span className="bi-geo p-1"></span>
        <span>Address</span>
    </label>
    <input type="text" ref={reference}
        className={errors ? "form-control is-invalid" : "form-control"} 
        placeholder="Somewhere, city - country"/>
    <div className="invalid-feedback">
        { errors && errors.map((error, index) => 
            <span key={index}>{error}</span>
        )}
    </div>
</Fragment>