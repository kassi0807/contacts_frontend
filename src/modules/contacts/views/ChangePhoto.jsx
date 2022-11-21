
export const ChangePhoto = ({data: {reference, callback, preview,  errors}, actions:{cancel, change}}) =>
<div className="d-flex justify-content-center vw-100 p-3 p-lg-5">
        <article className="card" style={{maxWidth: "25rem"}}>
            <header className="card-header">
                <h5 className="card-title">
                    <span className="bi-image p-1"></span>
                    <span>change photo</span>
                </h5>
            </header>
            {  preview}
            <section className="card-body">
                <label className="form-label">
                    <span className="bi-person-bounding-box p-1"></span>
                    <span>photo</span>
                </label>
                <input type="file" ref={reference} onChange={callback}
                    className={errors ? "form-control is-invalid" : "form-control"}/>
                <div className="invalid-feedback">
                    { errors && errors.map((error, index) => 
                        <span key={index}>{error}</span>
                    )}
                </div>
            </section>
            <footer className="card-footer">
                <article className="d-flex justify-content-end">
                    <section></section>
                    <section className="d-flex gap-2">
                        {cancel}
                        {change}
                    </section>
                </article>
            </footer>
        </article>
</div>