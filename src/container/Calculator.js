import React, { Component } from 'react';

import TransportationType from '../component/TransportationType/TransportationType';
import OneTwoWay from '../component/OneTwoWay/OneTwoWay';
import PriceArea from '../component/PriceArea/PriceArea';
import styles from './Calculator.module.css';
// import Aux from '../hoc/Auxiliary/Auxiliary';

class Calculator extends Component {
  state = {
    transportationType: null,
    oneTwoWay: null
    // basePrice: null
    // totalMilesPrice: null
  };

  componentWillMount() {
    this.setState({ transportationType: 'ambulatory' });
    this.setState({ oneTwoWay: 1 });
  }

  transportationTypeHandler = type => {
    console.log(type);

    this.setState({ transportationType: type });
  };

  oneTwoWayHandler = way => {
    this.setState({ oneTwoWay: way });
  };

  // basePriceHandler = price => {
  //   this.setState({ basePrice: price });
  // };

  // milesPriceHandler = miles => {
  //   this.setState({ totalMilesPrice: miles });
  //   console.log(this.state.totalMilesPrice);
  // };

  render() {
    // const typePrice = {
    //   basePrice: {
    //     wheelChair: 38,
    //     gurney: 115,
    //     ambulatory: 22
    //   },
    //   milesPrice: {
    //     wheelChair: 2.5,
    //     gurney: 3.5,
    //     ambulatory: 2
    //   },
    //   outOfAreaPickup: {
    //     wheelChair: 25,
    //     gurney: 35,
    //     ambulatory: 10
    //   }
    // };

    // let bPrice = typePrice.basePrice[props.type] * props.way;
    // let miles = document.getElementById('milesInput');
    // let milesPrice = miles * typePrice.basePrice[props.type];

    // let type = this.state.transportationType;
    // console.log(type);

    // const a = this.state.milesPrice.ambulatory;

    return (
      <div className={styles.Calculator}>
        {/* ambu, wheel, gurney */}
        <TransportationType
          clicked={this.transportationTypeHandler}
          active={this.state.transportationType}
        />

        {/* one way or two way */}
        <OneTwoWay
          clicked={this.oneTwoWayHandler}
          active={this.state.oneTwoWay}
        />

        {/* price calc area and total */}
        <PriceArea
          type={this.state.transportationType}
          // basePriceClicked={this.basePriceHandler}
          way={this.state.oneTwoWay}

          // milesFunc={this.milesHandler}
        />
        {/* <Aux>
          <div>
            <p>Base Price : {bPrice}</p>
          </div>
          <div>
            <p>Miles</p>
            <input
              type="text"
              id="milesInput"
              onChange={() => props.miles(milesPrice)}
            />
            <p>{milesPrice}</p>
          </div>
        </Aux> */}

        {/* <div /> */}
      </div>
    );
  }
}

export default Calculator;
