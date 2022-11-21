
export const Confirm = ({data: {title, message},actions: {cancel, confirm}}) =>
<article className="row g-2 py-3 justify-content-center">
    <section className="col-lg-4 col-md-6">
        <article className="card">
            <header className="card-header">
                <h5 className="card-title">
                    <span className="bi-exclamation-triangle p-1"></span>
                    <span>{title}</span>
                </h5>
            </header>
            <section className="card-body">
                <p className="card-text">
                    {message}
                </p>
            </section>
            <footer className="card-footer">
                <article className="d-flex justify-content-end">
                    <section></section>
                    <section className="d-flex gap-2">
                        {cancel}
                        {confirm}
                    </section>
                </article>
            </footer>
        </article>
    </section>
</article>