import * as assert from "assert";
import { Cashfree } from "../api";
import { expect } from 'chai';

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

var orderId = ''
var paymentSessionId = ''


function getCurrentTimeStamp() {
    var today = new Date();
    var date = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
    var time = "" + today.getHours() + today.getMinutes() + today.getSeconds() + today.getMilliseconds;
    var dateTime = date + ' ' + time;
    return dateTime
}


function setOrderDetails(order_id: string, payment_session_id: string) {
    orderId = order_id
    paymentSessionId = payment_session_id
}

it('Create Order', function (done) {
    var blah = 'foo';
    var request = {
        "order_amount": 3005,
        "order_currency": "INR",
        "customer_details": {
            "customer_id": "iij",
            "customer_name": "abcd",
            "customer_email": "success@eligibility.com",
            "customer_phone": "9999999999"
        },

        "order_note": "Test order",
        "order_tags": {
            "abc": "def"
        }
    }
    Cashfree.PGCreateOrder("2022-09-01", request).then((response) => {
        assert.equal(response.data.order_currency, "INR")
        setOrderDetails(response.data.order_id, response.data.payment_session_id)
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});

it('Get Order', function (done) {
    Cashfree.PGFetchOrder("2022-09-01", orderId).then((response) => {
        assert.equal(response.data.order_currency, "INR")
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});


it('Get Payments For an Order', function (done) {
    Cashfree.PGOrderFetchPayments("2022-09-01", orderId).then((response) => {
        console.log(response.data)
        // console.log(response.data.order_currency)
        // assert.equal(response.data.order_currency, "INR")
        // setOrderDetails(response.data.order_id)
        // console.log(orderId)
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});

it('Get Payment by PaymentId for an Order', function (done) {
    Cashfree.PGOrderFetchPayment("2022-09-01", orderId, "9s99sjs").then((response) => {
        console.log(response.data)
        // console.log(response.data.order_currency)
        // assert.equal(response.data.order_currency, "INR")
        // setOrderDetails(response.data.order_id)
        // console.log(orderId)
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});

it('Create Payment Link', function (done) {
    var request = {
        "link_amount": 1,
        "link_id": "Automated_Test_f",
        "link_currency": "INR",
        "customer_details": {
            "customer_name": "John Doe",
            "customer_phone": "9292229292",
            "customer_email": "john@cashfree.com"

        },
        "link_purpose": "qui",
        "link_partial_payments": false,
        "link_minimum_partial_amount": 77634560.22892892,
        "link_notify": {
            "send_sms": false,
            "send_email": true
        },
        "link_auto_reminders": false,
        "link_notes": {
            "key_1": "value_1",
            "key_2": "value_2"
        },
        "link_meta": {
            "notify_url": "https://ee08e626ecd88c61c85f5c69c0418cb5.m.pipedream.net",
            "upi_intent": false
        }
    }
    Cashfree.PGCreateLink("2022-09-01", request).then((response) => {
        // console.log(response.data.order_currency)
        // assert.equal(response.data.order_currency, "INR")
        // setOrderDetails(response.data.order_id)
        // console.log(orderId)
        console.log(response.data)
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});