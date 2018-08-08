import * as React from 'react'

export namespace Body{
    export interface Props {

    }
    export interface State {

    }
}

// this should be a scss file
/* const FooterStyle : React.CSSProperties = {
    color: 'white',
    backgroundColor: 'green',
    position: 'fixed',
    height: '10vh',
    width: '98vw',
} */

export default class Body extends React.Component<Body.Props, Body.State> {
   render() {
       return (
           <div className="body" >
                body is here
           </div>
       )
   }
}