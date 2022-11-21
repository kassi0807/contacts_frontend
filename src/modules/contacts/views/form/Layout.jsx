
export const Layout = ({
    inputs: {name, company, photo, address, email, phone}, 
    actions: {cancel, save}
}) => 
<form className="card" onSubmit={event => event.preventDefault()}>
    <header className="card-header">
        <article className="d-flex justify-content-between">
            <section>
                <h5 className="card-title">
                    Contact
                </h5>
            </section>
            <section>
            </section>
        </article>
    </header>
    <article className="card-body">
        <section className="row my-3">
            <div className="col-md-6 col-lg-4 p-2">
                {name}
             </div>
            <div className="col-md-6 col-lg-4 p-2">
                {company}
            </div>
            <div className="col-md-6 col-lg-4 p-2">
                {photo}
            </div>
        </section>
        <section className="row my-3">
            <div className="col-md-6 col-lg-4 p-2">
                {address}
            </div>
            <div className="col-md-6 col-lg-4 p-2">
                {email}
            </div>
            <div className="col-md-6 col-lg-4 p-2">
                {phone}
            </div>
        </section>
    </article>
    <footer className="card-footer">
        <section className="d-flex justify-content-end gap-2">
            {cancel}
            {save}
        </section>
    </footer>
</form>
