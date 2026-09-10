import bg4 from "@/assets/img/bg-img/bg4.jpg";

function Cta() {
    return (
        <section
            className="cta-area bg-img bg-overlay"
            style={{ backgroundImage: `url(${bg4})` }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="cta-content text-center">
                            <h2>Gluten Free Receipies</h2>
                            <p>
                                Fusce nec ante vitae lacus aliquet vulputate. Donec
                                scelerisque accumsan molestie. Vestibulum ante ipsum
                                primis in faucibus orci luctus et ultrices posuere
                                cubilia Curae; Cras sed accumsan neque. Ut vulputate,
                                lectus vel aliquam congue, risus leo elementum nibh
                            </p>
                            <a href="#" className="btn delicious-btn">
                                Discover all the receipies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;