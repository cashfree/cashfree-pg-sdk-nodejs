import * as assert from "assert";
import { Cashfree } from "./../api";
import { expect } from 'chai';

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

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
        console.log(response.data.order_id)
        assert.equal(response.data.order_currency, "INR")
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});