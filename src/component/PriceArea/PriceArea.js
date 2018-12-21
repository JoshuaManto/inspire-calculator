import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './PriceArea.module.css';

class PriceArea extends Component {
  state = {
    miles: null,
    pickup: false,
    nightCall: false,
    oxygenTank: false,
    wheelChair: false,
    waitingTime: null,
    extraCharges: 0
  };

  milesHandler = m => {
    this.setState({ miles: m.target.value });
  };

  outOfAreaPickupHandler = () => {
    this.setState({ pickup: !this.state.pickup });
  };

  nightCallHandler = () => {
    this.setState({ nightCall: !this.state.nightCall });
  };

  oxygenTankHandler = () => {
    this.setState({ oxygenTank: !this.state.oxygenTank });
  };

  waitingTimeHandler = t => {
    let time = Math.ceil(t.target.value / 15);
    this.setState({ waitingTime: time });
  };

  extraChargesHandler = c => {
    this.setState({ extraCharges: c.target.value });
  };

  wheelChairHandler = () => {
    this.setState({ wheelChair: !this.state.wheelChair });
  };

  render() {
    const typePrice = {
      basePrice: {
        wheelChair: 38,
        gurney: 115,
        ambulatory: 22
      },
      milesPrice: {
        wheelChair: 2.5,
        gurney: 3.5,
        ambulatory: 2
      },
      outOfAreaPickup: {
        wheelChair: 25,
        gurney: 35,
        ambulatory: 10
      }
    };

    let bPrice = typePrice.basePrice[this.props.type] * this.props.way;

    let mPrice = this.state.miles * typePrice.milesPrice[this.props.type];

    let pPrice = 0;
    if (this.state.pickup === true) {
      pPrice = typePrice.outOfAreaPickup[this.props.type] * this.props.way;
    }

    let nPrice = 0;
    if (this.state.nightCall === true) {
      nPrice = 15 * this.props.way;
    }

    let oPrice = 0;
    if (this.state.oxygenTank === true) {
      oPrice = 10 * this.props.way;
    }

    let cPrice = 0;
    if (this.state.wheelChair === true) {
      cPrice = 15 * this.props.way;
    }

    let wPrice = this.state.waitingTime * 12;

    let ePrice = this.state.extraCharges * 1;

    let totalPrice =
      bPrice + mPrice + pPrice + nPrice + oPrice + cPrice + wPrice + ePrice;

    // let withTax = Math.round(subtotal * 0.095 * 100) / 100;

    // let totalPrice = subtotal + withTax;
    // let totalPrice = subtotal;

    // console.log(bPrice);
    // console.log(mPrice);
    // console.log(pPrice);
    // console.log(nPrice);
    // console.log(oPrice);
    // console.log(wPrice);
    // console.log(ePrice);
    // console.log(subtotal);
    // console.log(withTax);
    // console.log(totalPrice);

    return (
      <Aux>
        <div className={styles.PriceArea}>
          <p>Base Price : </p>
          <p />
          <p>${bPrice.toFixed(2)}</p>
        </div>

        <div className={styles.PriceArea}>
          <p>Miles</p>
          <input
            type="number"
            step="1"
            // id="milesInput"
            onChange={this.milesHandler}
          />
          <p>${mPrice.toFixed(2).toString()}</p>
        </div>

        <div className={styles.PriceArea}>
          <p>Out of Area Pickup</p>
          <button
            onClick={this.outOfAreaPickupHandler}
            className={this.state.pickup === true ? styles.active : null}
          >
            {this.state.pickup === false ? 'Include?' : 'Included'}
          </button>
          <p>${pPrice.toFixed(2).toString()}</p>
        </div>

        <div className={styles.PriceArea}>
          <p>Night Call</p>
          <button
            onClick={this.nightCallHandler}
            className={this.state.nightCall === true ? styles.active : null}
          >
            {this.state.nightCall === false ? 'Include?' : 'Included'}
          </button>
          <p>${nPrice.toFixed(2).toString()}</p>
        </div>

        <div className={styles.PriceArea}>
          <p>Oxygen Tank</p>
          <button
            onClick={this.oxygenTankHandler}
            className={this.state.oxygenTank === true ? styles.active : null}
          >
            {this.state.oxygenTank === false ? 'Include?' : 'Included'}
          </button>
          <p>${oPrice.toFixed(2).toString()}</p>
        </div>

        <div className={styles.PriceArea}>
          <p>Wheel Chair Use</p>
          <button
            onClick={this.wheelChairHandler}
            className={this.state.wheelChair === true ? styles.active : null}
          >
            {this.state.wheelChair === false ? 'Include?' : 'Included'}
          </button>
          <p>${cPrice.toFixed(2).toString()}</p>
        </div>

        <div className={styles.PriceArea}>
          <p>Waiting Time</p>
          <input
            type="number"
            step="1"
            // id="milesInput"
            onChange={this.waitingTimeHandler}
          />
          <p>${wPrice.toFixed(2).toString()}</p>
        </div>

        {/* Extra Charges */}
        <div className={styles.PriceArea}>
          <p>Extra Charges</p>
          <input
            type="number"
            step="1"
            // id="milesInput"
            onChange={this.extraChargesHandler}
          />
          <p>${ePrice.toFixed(2).toString()}</p>
        </div>

        {/* Subtotal */}
        {/* <div className={styles.PriceArea}>
          <p>Subtotal</p>
          <p />
          <p>${subtotal.toFixed(2)}</p>
        </div> */}

        {/* Tax */}
        {/* <div className={styles.PriceArea}>
          <p>Tax</p>
          <p>9.5%</p>
          <p>${withTax.toFixed(2)}</p>
        </div> */}

        {/* Total */}
        <div className={styles.PriceArea}>
          <p>Total</p>
          <p />
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </Aux>
    );
  }
}

export default PriceArea;
