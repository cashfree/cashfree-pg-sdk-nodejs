import * as assert from "assert";
import { Cashfree } from "./../api";
import { expect } from 'chai';

Cashfree.XClientId = "TEST41754194f2067b4b76b61f6d7f145714";
Cashfree.XClientSecret = "TEST3271ca1df72fb0bef2d947f1f91ec3467d90d22e";
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
        assert.equal(response.data.order_currency, "INR")
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});