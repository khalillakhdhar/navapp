import React from 'react';

const Specialite = () => {
    const specialites = ['P.O.O', 'WEB DEV', 'WEB DESIGN', 'SYSTEM TESTING'];

    return (
        <div>
            <h1>Liste des spécialités</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Spécialité</th>
                        <th>Détailles</th>
                    </tr>
                </thead>
                <tbody>
                    {specialites.map((specialite, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{specialite}</td>
                            <td>
                                <a href={`/details/${index + 1}`}>Détailles</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Specialite;