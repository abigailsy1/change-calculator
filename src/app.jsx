import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      change: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  calculate(event) {
    event.preventDefault();
    var amount = parseFloat(this.state.amountReceived) - parseFloat(this.state.amountDue)

    var cents = (amount * 100);
    if (isNaN(cents) || cents < 0 || cents > 99999) {
      alert("Must be a number between 0 and 999.99");
      cents = 0;
    }
    let twenty = Math.floor(cents / 2000); cents = cents % 2000;
    let ten = Math.floor(cents / 1000); cents = cents % 1000;
    let five = Math.floor(cents / 500); cents = cents % 500;
    let one = Math.floor(cents / 100); cents = cents % 100;
    let quarter = Math.floor(cents / 25); cents = cents % 25;
    let dime = Math.floor(cents / 10); cents = cents % 10;
    let nickel = Math.floor(cents / 5);
    let penny = Math.ceil(cents % 5);

    this.setState({
      change: amount.toFixed(2),
      twenties:twenty,
      tens:ten,
      fives:five,
      ones:one,
      quarters:quarter,
      dimes:dime,
      nickles:nickel,
      pennies:penny
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-white">Change Calculator</h1>
        <hr className="bg-white" />

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Enter Information</div>
              <div className="card-body">
                <p className="text font-weight-bold"> How much is due?
                  <input id="amountDue" name="amountDue" type="number" className="form-control" placeholder="Enter Due Amount" value={this.state.amount} onChange={this.handleChange} /> </p>

                <p className="text font-weight-bold"> How much was received?
                  <input id="amountReceived" name="amountReceived" type="number" className="form-control" placeholder="Received Amount" value={this.state.amount} onChange={this.handleChange} /> </p>
              </div>

              <div className="card-footer text-center" >
                <button type="button" id="button" className="btn btn-primary btn-block" onClick={this.calculate}>Calculate</button>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card text-center">
              <div className="card-body">
                <div className="alert alert-success" role="alert">The total change due is ${this.state.change}</div>

                <div className="card-deck">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Twenties</p>
                      <p id="twenties" type ="number" value={this.state.twenties}>{this.state.twenties}</p>
                    </div>
                  </div>

                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Tens</p>
                      <p id="tens" type ="number" value={this.state.tens}>{this.state.tens}</p>
                    </div>
                  </div>

                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Fives</p>
                      <p id="fives" type ="number" value={this.state.twenties}>{this.state.fives}</p>
                    </div>
                  </div>

                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Ones</p>
                      <p id="ones" type ="number" value={this.state.twenties}>{this.state.ones}</p>
                    </div>
                  </div>
                </div>
                <br />

                <div className="card-deck">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Quarters</p>
                      <p id="quarters" type ="number" value={this.state.twenties}>{this.state.quarters}</p>
                    </div>
                  </div>

                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Dimes</p>
                      <p id="dimes" type ="number" value={this.state.twenties}>{this.state.dimes}</p>
                    </div>
                  </div>

                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Nickels</p>
                      <p id="nickles" type ="number" value={this.state.twenties}>{this.state.nickles}</p>
                    </div>
                  </div>

                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text text font-weight-bold">Pennies</p>
                      <p id="pennies" type ="number" value={this.state.twenties}>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
