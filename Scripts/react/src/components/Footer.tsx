import * as React from 'react'

export namespace Footer{
    export interface Props {

    }
    export interface State {

    }
}

// this should be a scss file
const FooterStyle : React.CSSProperties = {
    color: 'white',
    backgroundColor: 'green',
    position: 'fixed',
    height: '10vh',
    width: '98vw',
}

export default class Footer extends React.Component<Footer.Props, Footer.State> {
   render() {
       return (
           <div className="footer" style={FooterStyle}>
                Footer stuff and much more
           </div>
       )
   }
}