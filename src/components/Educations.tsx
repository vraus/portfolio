import React from 'react';

export default function Educations() {
    return(
        <div>
            <h1>Educations</h1>

            <section className="my-8">
                <div className="grid grid-cols-responsive">
                    <div className="card">
                        <a href="https://www.univ-artois.fr" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-primary">University of Artois, Lens (2023-2025)</h3>
                            <p className="text-muted">Master&apos;s Degree in Game Development and Software Engineering in Games.</p>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://www.uqac.ca" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-primary">UQAC, Quebec (2022-2023)</h3>
                            <p className="text-muted">Last year of Bachelor&apos;s Degree abroad.</p>
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://www.univ-brest.fr/fr" target="_blank" rel="noopener noreferrer">
                                <h3 className="text-primary">UBO, Brest (2020-2023)</h3>
                                <p className="text-muted">Bachelor&apos;s Degree in Computer Sciences.</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};