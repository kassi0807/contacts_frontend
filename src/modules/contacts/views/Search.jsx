export const Search = ({data: {reference}, actions:{goback, submit}}) =>
<header className="navbar text-bg-primary">
    <article className="container">
        <section>
            <button className="btn btn-outline-light bi-chevron-left"
                onClick={goback}>
            </button>
        </section>
        <section>
            <form className="input-group" onSubmit={event => event.preventDefault()}>
                <input type="text" className="form-control" 
                    placeholder="search contacts" autoFocus={true}
                    ref={reference}/>
                <button className="btn btn-light bi-search"
                    onClick={submit}>
                </button>
            </form>
        </section>
    </article>
</header>