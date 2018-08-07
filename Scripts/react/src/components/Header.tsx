import * as React from 'react';

export namespace Header {
    export interface props {

    }
    export interface state {

    }
}

const HeaderStyle = {
    backgroundColor: 'green',
    heigth: '10vh'
}

export default class Header extends React.Component<Header.props, Header.state>{
   
    render(){
        return(
            <div className="header" style={HeaderStyle}>
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
        );
    }
}
