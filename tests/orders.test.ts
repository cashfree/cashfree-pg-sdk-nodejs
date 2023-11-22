import * as assert from "assert";
import { Cashfree, CreateOrderRequest, UpiChannelEnum, OrderCreateRefundRequestRefundSpeedEnum } from "../api";
const { execSync } = require('child_process');

import { expect } from 'chai';

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

var orderId = ''
var paymentSessionId = ''
var successfulTxnId = ''


function getCurrentTimeStamp() {
    var today = new Date();
    var date = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
    var time = "" + today.getHours() + today.getMinutes() + today.getSeconds() + today.getMilliseconds();
    var dateTime = date + '' + time;
    return dateTime
}


function setOrderDetails(order_id: string, payment_session_id: string) {
    orderId = order_id
    paymentSessionId = payment_session_id
}

function setSuccessfulTxnId(txnId: string) {
    successfulTxnId = txnId
}

async function createOrder() {
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

    await Cashfree.PGCreateOrder("2022-09-01", request).then((response) => {
        setOrderDetails(response.data.order_id, response.data.payment_session_id)

    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
    });
}

async function createTxnWithStatus(payment_session_id: string, status: string) {
    var upi_id = "testsuccess@gocash"
    if (status === "failure") {
        upi_id = "testfail@gocash"
    }
    var link_id = "Automated_Test_" + getCurrentTimeStamp()
    // console.log("Payment SessionId: " + payment_session_id)
    var request = {
        "payment_session_id": payment_session_id,
        "payment_method": {
            "upi": {
                "upi_id": upi_id,
                "channel": UpiChannelEnum.COLLECT
            }
        }
    }
    await Cashfree.PGPayOrder("2022-09-01", request).then((response) => {
    }).catch((error) => {
        //console.log(error)
    });
}

it('Create Order Test', function (done) {
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
        assert.equal(response.data.order_amount, request.order_amount)
        assert.equal(response.data.order_currency, "INR")
        setOrderDetails(response.data.order_id, response.data.payment_session_id)
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});

it('Order Pay Collect Test', function () {
    createOrder();
    execSync('sleep 1');
    // console.log("Payment: " + paymentSessionId)
    createTxnWithStatus(paymentSessionId, '')
});

it('Get Order Test', function (done) {
    Cashfree.PGFetchOrder("2022-09-01", orderId).then((response) => {
        assert.equal(response.data.order_currency, "INR")
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});

it('Get Payments For an Order Test', function (done) {
    createOrder()
    createTxnWithStatus(paymentSessionId, '')
    Cashfree.PGOrderFetchPayments("2022-09-01", orderId).then((response) => {
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});

it('Create Payment Link Test', function (done) {
    var link_id = "Automated_Test_" + getCurrentTimeStamp()
    var request = {
        "link_amount": 1,
        "link_id": link_id,
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
        done()
    }).catch((error) => {

        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});


it('Create Refund Test', function (done) {
    var request = {
        "refund_amount": 1,
        "refund_id": "Refund_id_" + getCurrentTimeStamp(),
        "refund_note": "initiated refund by automation"
    }

    Cashfree.PGOrderCreateRefund("2022-09-01", "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI", request).then((response) => {
        done()
    }).catch((error) => {
        console.log(error)
        assert.fail("Fail error message")
        done()
    });
});