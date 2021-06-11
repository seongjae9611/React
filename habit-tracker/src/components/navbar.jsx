import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar_logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar_count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;