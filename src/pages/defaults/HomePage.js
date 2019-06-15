import React from 'react';
import TrendingNow from './TrendingNow';

class HomePage extends React.Component {
    render() {
        return (
            <div className="AppHeader">
                <TrendingNow />
            </div>
        )
    }
}

export default HomePage;