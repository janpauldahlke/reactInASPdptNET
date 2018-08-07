import * as React from 'react';

export namespace Section{
    export interface Props{

    }
    export interface State{

    }
}

const SectionStyle = {
    backgroundColor: 'grey',
    height: '80vh'
}


export default class Section extends React.Component <Section.Props, Section.State> {

    render() {
        return(
            <div className="section-body" style={SectionStyle}>content</div>
        );
    }
}