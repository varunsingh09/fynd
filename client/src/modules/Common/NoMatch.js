
import React from 'react'
import { Link } from 'react-router-dom';
export default function NoMatch() {
    return (
        <section id="main-content">
            <div className="container" style={{paddingLeft:'300px'}}>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 p404 centered">
                        <h1>DON'T PANIC!!</h1>
                        <h3>The page you are looking for doesn't exist.</h3>
                        <h5 className="mt">
                            Hey, maybe you will be interested in these pages:
                        </h5>
                        <p>
                            <Link to="/">Home</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}
