import React from 'react';

class Titles extends React.Component {
    render() {
        return (
            <div>
                <h1 className='title-container__title'> Weather app</h1>
                <h3 className='title-container__subtitle'> A brief info about the vreme </h3>
            </div>
        );
    };
}

export default Titles;