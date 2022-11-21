export const Item = ({
    data: {id, name, company, address, email, phone, photo},
    actions: {edit, changePhoto, remove}
}) =>
<article className="card h-100">
    <header className="card-header">
        <article className="d-flex justify-content-between">
            <section>
                <h5 className="card-title">
                    <span className="bi-person p-1"></span>
                    <span>{name}</span>
                </h5>
                <h6 className="card-subtitle text-muted">
                    <span className="bi-building p-1"></span>
                    <span>{company}</span>
                </h6>
            </section>
            <section>
                <article className="dropdown dropstart">
                    <button className="btn btn-outline-primary border-0 bi-three-dots" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <section className="dropdown-menu">
                        <div className="dropdown-item py-2" onClick={edit}>
                            <span className="bi-pencil pe-3"></span>
                            <span>edit</span>
                        </div>
                        <div className="dropdown-item py-2" onClick={remove}>
                            <span className="bi-trash pe-3"></span>
                            <span>remove</span>
                        </div>
                        <div className="dropdown-item py-2" onClick={changePhoto}>
                            <span className="bi-upload pe-3"></span>
                            <span>change photo</span>
                        </div>
                    </section>
                </article>
            </section>
        </article>
    </header>
    {photo}
    <section className="card-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h6>
                    <span className="bi-geo p-1"></span>
                    <span>address</span>
                </h6>
                <p className="card-text">
                    {address}
                </p>
            </li>
            <li className="list-group-item">

                <h6>
                    <span className="bi-envelope p-1"></span>
                    <span>email</span>
                </h6>
                <p className="card-text">
                    {email}
                </p>
            </li>
            <li className="list-group-item">

                <h6>
                    <span className="bi-phone p-1"></span>
                    <span>phone</span>
                </h6>
                <p className="card-text">
                    {phone}
                </p>
            </li>
        </ul>
    </section>
</article>



