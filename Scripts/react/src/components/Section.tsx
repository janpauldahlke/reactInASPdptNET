import * as React from 'react';
import myMath from '../helpers/myMath';

export namespace Section {
    export interface Props {

    }
    export interface State {

    }
}

const SectionStyle = {
    backgroundColor: 'grey',
    height: '80vh'
}

export default class Section extends React.Component<Section.Props, Section.State> {

    public myMathHelper = new myMath();

    private calculateCircle = (r: number): number => {
        return this.myMathHelper.calculateCircle(r)
    }

    private calcultateRectangle = (w: number, h: number): number => {
        return this.myMathHelper.calculateRectangle(w,h)
    }

    render() {

        //a test comment
        console.log('circle', this.calculateCircle(5))
        console.log('rect', this.calcultateRectangle(5,10))

        return (
            <div className="section-body" style={SectionStyle}>
                <section>
                    <h5>Calcualtion Result</h5>
                </section>
            </div>
        );
    }
}