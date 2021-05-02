import React from 'react';
import { injectStripe, StripeProvider, Elements, CardElement } from 'react-stripe-elements'
import Cookies from 'js-cookie'

const INITIALSTATE = "INITIAL";
const SUCCESSSTATE = "COMPLETE";
const FAILEDSTATE = "FAILED";

class CreditCardForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      status: INITIALSTATE,
      useExisting: false
    }
  }
  renderCreditCardInformation() {
    const user = Cookies.getJSON('user')

    const style = {
      base: {
        'fontSize': '20px',
        'color': '#495057',
        'fontFamily': 'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
      }
    }
    const userSavedCard = <div>
      <div className="form-row text-center">
        <button
          type="submit"
          className="btn btn-outline-success text-center mx-auto"
          onClick={
            () => this.setState(
              { useExisting: true }
            )
          }>
          Use saved card?
        </button>
      </div>
      <hr />
    </div>;

    let rememberCardCheck = null;
      if (user.loggedin === true) {
        rememberCardCheck = <div className="form-row form-check text-center">
          <input className="form-check-input" type="checkbox" value="" id="remember-card-check" name='remember' onChange={this.handleChange} />
          <label className="form-check-label" htmlFor="remember-card-check">
            Remember Card?
          </label>
        </div>;
      }
    return (
      <div>  
        <form onSubmit={this.handleSubmit}>
        {(user.loggedin)?userSavedCard:null}
        <h5 className="mb-4">Payment Info</h5>
          <div className="form-row">
            <div className="col-lg-12 form-group">
              <label htmlFor="cc-name">Name On Card:</label>
              <input id="cc-name" name='name' className="form-control" placeholder='Name on Card' onChange={this.handleChange} type='text' />
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-12 form-group">
              <label htmlFor="card">Card Information:</label>
              <CardElement id="card" className="form-control" style={style} />
            </div>
          </div>
          {rememberCardCheck}
          <hr className="mb-4" />
          <button type="submit" className="btn btn-success btn-large" >{this.props.operation}</button>
        </form>
      </div>
    )
  }
  renderSuccess() {
    return (
      <div>
        <h5 className="mb-4 text-success">Request Successful...</h5>
        <button type="submit" className="btn btn-success btn-large" onClick={() => { this.props.toggle() }}>OK</button>
      </div>
    );
  }

  renderFailure() {
    return (
      <div>
        <h5 className="mb-4 text-danger"> Error occured while processing credit card... </h5>
        {this.renderCreditCardInformation()}
      </div>
    );
  }

  async handleSubmit(event) {
    event.preventDefault()
    let id = ""
    if (!this.state.useExisting) {
      // 입력된 신용카드에 대한 토큰 발급
      const { token } = await this.props.stripe.createToken({ name: this.state.name });
      if (token === null) {
        // console.log("invalid token")
        this.setState({ status: FAILEDSTATE })
        return
      }
      id = token?.id
    }
    // 서버로 토큰을 전달함
    const response = await fetch("/users/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: id,
        customer_id: this.props.user,
        product_id: this.props.productid,
        sell_price: this.props.price,
        rememberCard: this.state.remember !== undefined,
        useExisting: this.state.useExisting
      })
    })
    // 결제 성공 및 실패에 대한 화면 출력
    if (response.ok) {
      console.log("Purchase Complete!")
      this.setState({ status: SUCCESSSTATE })
    } else {
      this.setState({status: FAILEDSTATE})
    }
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    let body = null
    switch (this.state.status) {
      case SUCCESSSTATE:
        body = this.renderSuccess()
        break
      case FAILEDSTATE:
        body = this.renderFailure()
        break
      default:
        body = this.renderCreditCardInformation()
    }
    return (
      <div>
        {body}
      </div>
    )
  }
}

export default function CreditCardInformation(props) {
  if (!props.show) {
    return null
  }

  const CCFormWithStripe = injectStripe(CreditCardForm)
  return (
    <div>
      {props.separator ? <hr /> : null}
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <Elements>
          <CCFormWithStripe operation={props.operation} productid={props.productid} price={props.price} toggle={props.toggle}/>
        </Elements>
      </StripeProvider>
    </div>
  )
}