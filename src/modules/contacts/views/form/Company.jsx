import { Fragment } from "react";

export const Company = ({reference, errors}) => 
<Fragment>
    <label className="form-label">
        <span className="bi-building p-1"></span>
        <span>Company</span>
    </label>
    <input type="text" ref={reference}
        className={errors ? "form-control is-invalid" : "form-control"} 
        placeholder="lorem ipsum"/>
    <div className="invalid-feedback">
        { errors && errors.map((error, index) => 
            <span key={index}>{error}</span>
        )}
    </div>
</Fragment>