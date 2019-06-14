import React from 'react';
// import Content from './../../components/Content';
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