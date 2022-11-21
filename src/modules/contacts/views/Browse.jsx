export const Browse = ({items}) => 
<article className="row g-2 py-3">
    { items.map((item, index) => 
        <section className="col-md-6 col-lg-4" key={index}>
            {item}
        </section>
    )}
</article>
