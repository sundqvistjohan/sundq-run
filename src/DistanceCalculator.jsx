import React, { Component } from "react"

class DistanceCalculator extends Component {
    constructor() {
        super()
        this.state = {
            avgDistance: 0
        }
    }

    calculateDistance = () => {
        let startDistance = parseFloat(document.getElementById('start-distance').value);
        let goalDistance = parseFloat(document.getElementById('goal-distance').value);
        this.setState({ avgDistance: this.avgDistanceCalc(startDistance, goalDistance).toFixed(2) })
    }

    avgDistanceCalc(start, goal) {
        this.start = start
        this.goal = goal
        const daysLeftInYear = this.dateCalc();
        let avgDistance = (this.goal - this.start) / daysLeftInYear;
        return avgDistance;
    }

    dateCalc() {
        const currentDate = new Date();
        const nextYear = currentDate.getFullYear() + 1;
        const finalDate = new Date(nextYear, 0, 1);
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((finalDate - currentDate) / oneDay));
        return diffDays;
    }

    render() {
        return (
            <div className="container" >
                <h2>Running distance calculator</h2>
                <form className="input-form">
                    <label htmlFor="start-dist">Start distance</label>
                    <input id="start-distance" name="start-dist" type="text"></input>
                    <label htmlFor="goal-dist">Goal distance</label>
                    <input id="goal-distance" name="goal-dist" type="text"></input>
                </form>
                <button className="submit-form" onClick={this.calculateDistance.bind(this)}>Calculate</button>
                <div className="calc-result">
                    You have to run {this.state.avgDistance} km per day for the remainder of the year.
                </div>
            </div>
        )
    }
}

export default DistanceCalculator
