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

