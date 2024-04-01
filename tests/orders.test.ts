import * as assert from "assert";
import { expect, jest, test } from '@jest/globals';
import { Cashfree, UpiChannelEnum, AppProviderEnum, CardChannelEnum, OfferTncOfferTncTypeEnum, OfferType, DiscountDetailsDiscountTypeEnum } from "../api";
const { execSync } = require('child_process');

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;


var orderId = ''
var paymentSessionId = ''
var orderAmount = 3000;
var xApiVersion = '2023-08-01';

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

it('Create Order Test', function (done) {
    var blah = 'foo';
    var request = {
        "order_amount": orderAmount,
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

    Cashfree.PGCreateOrder(xApiVersion, request).then((response) => {
        assert.equal(response.data.order_amount, request.order_amount, "Amount is not matching")
        assert.equal(response.data.order_currency, "INR", "Currency is not matching")
        assert.equal(response.data.customer_details?.customer_id, response.data.customer_details?.customer_id, "Customer id is not matching")
        assert.equal(response.data.customer_details?.customer_name, response.data.customer_details?.customer_name, "Customer name is not matching")
        assert.equal(response.data.customer_details?.customer_email, response.data.customer_details?.customer_email, "Customer email is not matching")
        assert.equal(response.data.customer_details?.customer_phone, response.data.customer_details?.customer_phone, "Customer phone is not matching")
        setOrderDetails(response.data.order_id, response.data.payment_session_id)
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });

});


it('Create Order with Invalid Currency Test', function (done) {
    var currency = 'INaR';
    var request = {
        "order_amount": orderAmount,
        "order_currency": currency,
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

    Cashfree.PGCreateOrder(xApiVersion, request).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "order_currency : is not valid or not enabled. Value received: " + currency, "Link id is not matching")
        assert.equal(error.response.data.code, "order_currency_invalid", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });

});

it('Create Order with Invalid Amount Test', function (done) {
    var request = {
        "order_amount": -3005,
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

    Cashfree.PGCreateOrder(xApiVersion, request).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "order_amount : Invalid amount entered ", "Link id is not matching")
        assert.equal(error.response.data.code, "order_amount_invalid", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });

});

it('Create Order with Empty Customer Phone Test', function (done) {
    var request = {
        "order_amount": orderAmount,
        "order_currency": "INR",
        "customer_details": {
            "customer_id": "iij",
            "customer_name": "abcd",
            "customer_email": "success@eligibility.com",
            "customer_phone": ""
        },

        "order_note": "Test order",
        "order_tags": {
            "abc": "def"
        }
    }

    Cashfree.PGCreateOrder(xApiVersion, request).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "customer_details.customer_phone : is missing in the request. Value received: ", "Customer phone is not matching")
        assert.equal(error.response.data.code, "customer_details.customer_phone_missing", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });

});

it('Order Pay Net Banking Test', function (done) {
    var request = {
        "payment_session_id": paymentSessionId,
        "payment_method": {
            "netbanking": {
                "netbanking_bank_code": 3087,
                "channel": "link"
            }
        }
    }
    Cashfree.PGPayOrder(xApiVersion, request).then((response) => {
        assert.equal(response.data.channel, "link", "channel is not matching")
        assert.equal(response.data.payment_method, "netbanking", "payment_method is not matching")
        assert.strictEqual(Number(response.data.payment_amount) >= orderAmount, true, "Payment amount is less than order amount")
        done()
    }).catch((error) => {
        assert.fail("Fail error message")
        done()
    });
});

it('Order Pay Card payment Test', function (done) {
    var request = {
        "payment_session_id": paymentSessionId,
        "payment_method": {
            "card": {
                "channel": CardChannelEnum.LINK,
                "card_number": "4838305610460100",
                "card_holder_name": "Tushar Gupta",
                "card_expiry_mm": "06",
                "card_expiry_yy": "25",
                "card_cvv": "123"
            }
        }
    }
    Cashfree.PGPayOrder(xApiVersion, request).then((response) => {
        assert.equal(response.data.channel, "link", "channel is not matching")
        assert.equal(response.data.payment_method, "card", "payment_method is not matching")
        assert.strictEqual(Number(response.data.payment_amount) >= orderAmount, true, "Payment amount is less than order amount")
        done()
    }).catch((error) => {
        assert.fail("Fail error message")
        done()
    });
});

it('Order Pay Card payment with empty cvv Test', function (done) {
    var request = {
        "payment_session_id": paymentSessionId,
        "payment_method": {
            "card": {
                "channel": CardChannelEnum.LINK,
                "card_number": "4838305610460100",
                "card_holder_name": "Tushar Gupta",
                "card_expiry_mm": "06",
                "card_expiry_yy": "25",
                "card_cvv": ""
            }
        }
    }
    Cashfree.PGPayOrder(xApiVersion, request).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "card_cvv : is missing in the request. Value received: ", "Message is not matching")
        assert.equal(error.response.data.code, "card_cvv_missing", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });
});

it('Order Pay Wallet Test', function (done) {
    Cashfree.XClientId = process.env.CLIENT_ID;
    Cashfree.XClientSecret = process.env.SECRET_KEY;
    Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
    var request = {
        "payment_session_id": paymentSessionId,
        "payment_method": {
            "app": {
                "provider": AppProviderEnum.PHONEPE,
                "phone": "8474090512",
                "channel": "link"
            }
        }
    }
    Cashfree.PGPayOrder(xApiVersion, request).then((response) => {
        done()
    }).catch((error) => {
        assert.fail("Fail error message")
        done()
    });
});

it('Get Order Test', function (done) {
    Cashfree.PGFetchOrder(xApiVersion, "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI").then((response) => {
        assert.equal(response.data.order_currency, "INR")
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });
});

it('Get Payments For an Order Test', function (done) {
    Cashfree.PGOrderFetchPayments(xApiVersion, "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI").then((response) => {
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
    Cashfree.PGOrderCreateRefund(xApiVersion, "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI", request).then((response) => {
        done()
    }).catch((error) => {
        console.log(error.response.data)
        assert.fail("Fail error message")
        done()
    });
});

it('Create Refund with negative refund amount Test', function (done) {
    var request = {
        "refund_amount": -1,
        "refund_id": "Refund_id_" + getCurrentTimeStamp(),
        "refund_note": "initiated refund by automation"
    }

    Cashfree.PGOrderCreateRefund(xApiVersion, "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI", request).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "refund_amount : Invalid amount entered ", "Link id is not matching")
        assert.equal(error.response.data.code, "refund_amount_invalid", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });
});

it('Create Refund with invalid order id Test', function (done) {
    var request = {
        "refund_amount": 1,
        "refund_id": "Refund_id_" + getCurrentTimeStamp(),
        "refund_note": "initiated refund by automation"
    }
    var order_id = "Order_" + getCurrentTimeStamp()
    Cashfree.PGOrderCreateRefund(xApiVersion, order_id, request).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "Order Reference Id does not exist", "Link id is not matching")
        assert.equal(error.response.data.code, "order_not_found", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });
});

it('Fetch All Refunds Test', function (done) {
    var order_id = "Order_" + getCurrentTimeStamp()
    Cashfree.PGOrderFetchRefunds(xApiVersion, "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI").then((response) => {
        done()
    }).catch((error) => {
        console.log(error.response.data)
        assert.fail("Fail error message")
        done()
    });
});

it('Fetch Refund Test', function (done) {
    var order_id = "Order_" + getCurrentTimeStamp()
    Cashfree.PGOrderFetchRefund(xApiVersion, "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI", "Refund_id_2060112241827").then((response) => {
        done()
    }).catch((error) => {
        console.log(error.response.data)
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
    Cashfree.PGCreateLink(xApiVersion, request).then((response) => {
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });
});


it('Fetch Payment Link Test', function (done) {
    var link_id = "Automated_Test_188181"
    Cashfree.PGFetchLink(xApiVersion, link_id).then((response) => {
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });
});

it('Cancel Payment Link Test', function (done) {
    var link_id = "Automated_Test_188181"
    Cashfree.PGCancelLink(xApiVersion, link_id).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "Only link in ACTIVE state can be cancelled", "Link id is not matching")
        assert.equal(error.response.data.code, "link_not_active", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });
});

it('Fetch Payment Link with Invalid link id Test', function (done) {
    var link_id = "jahha" + getCurrentTimeStamp()
    Cashfree.PGFetchLink(xApiVersion, link_id).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "No request found with link Id " + link_id, "Link id is not matching")
        assert.equal(error.response.data.code, "link_not_found", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });
});

it('Fetch Link Orders Test', function (done) {
    var link_id = "Automated_Test_188181"
    Cashfree.PGLinkFetchOrders(xApiVersion, link_id).then((response) => {
        done()
    }).catch((error) => {
        console.log("Actual: " + error.actual + " Expected: " + error.expected + " Operator: " + error.operator)
        assert.fail("Fail error message")
        done()
    });
});

it('Fetch Link Orders with invalid link id Test', function (done) {
    var link_id = "jajqq"
    Cashfree.PGLinkFetchOrders(xApiVersion, link_id).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "No request found with link ID " + link_id, "Link id is not matching")
        assert.equal(error.response.data.code, "link_not_found", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });
});


// it('Create Offer Test', function (done) {
//     var request = {
//         "offer_meta": {
//             "offer_title": "bat mann",
//             "offer_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//             "offer_code": "VISA1122",
//             "offer_start_time": "2024-01-01T08:09:51Z",
//             "offer_end_time": "2024-09-14T06:18:50Z"
//         },
//         "offer_tnc": {
//             "offer_tnc_type": OfferTncOfferTncTypeEnum.TEXT,
//             "offer_tnc_value": "Lorem ipsum dolor sit amet"
//         },
//         "offer_details": {
//             "offer_type": OfferType.DISCOUNT,
//             "discount_details": {
//                 "discount_type": DiscountDetailsDiscountTypeEnum.PERCENTAGE,
//                 "discount_value": "20.00",
//                 "max_discount_amount": "150.00"
//             }
//         },
//         "offer_validations": {
//             "min_amount": 223.0,
//             "max_allowed": 122,
//             "payment_method": {
//                 "all": {

//                 }
//             }
//         }
//     }
//     Cashfree.PGCreateOffer(xApiVersion, request).then((response) => {
//         assert.fail("Fail error message")
//         done()
//     }).catch((error) => {
//         console.log(error.response)
//         done()
//     });
// });

// it('Get Offer Test', function (done) {
//     Cashfree.PGFetchOffer(xApiVersion, "a189050b-8f7e-4f1c-be5f-ba4bf58bdd6b").then((response) => {
//         done()
//     }).catch((error) => {
//         assert.fail("Fail error message")
//         done()
//     });
// });

it('Fetch Eligibility Payment Methods Test', function (done) {
    var request = {
        "queries": {
            "amount": 100
        }
    }
    Cashfree.PGEligibilityFetchPaymentMethods(xApiVersion, request).then((response) => {
        done()
    }).catch((error) => {
        assert.fail("Fail error message")
        done()
    });
});

it('Fetch Eligibility Payment Methods using Order Id Test', function (done) {
    var request = {
        "queries": {
            "order_id": "order_4175412YWdHafgWZLFYcyTKkzIqu9QJvI"
        }
    }
    Cashfree.PGEligibilityFetchPaymentMethods(xApiVersion, request).then((response) => {
        done()
    }).catch((error) => {
        assert.fail("Fail error message")
        done()
    });
});

it('Fetch Eligibility Payment Methods With invalid amount Test', function (done) {
    var request = {
        "queries": {
            "amount": -100
        }
    }
    Cashfree.PGEligibilityFetchPaymentMethods(xApiVersion, request).then((response) => {
        assert.fail("Fail error message")
        done()
    }).catch((error) => {
        assert.equal(error.response.data.message, "queries.amount : should be greater than 0", "Link id is not matching")
        assert.equal(error.response.data.code, "queries.amount_invalid", "Code is not matching")
        assert.equal(error.response.data.type, "invalid_request_error", "Type is not matching")
        done()
    });
});

it('Settlement Reconcilation Test', function (done) {
    var request = {
        "pagination": {
            "limit": 10
        },
        "filters": {
            "start_date": "2023-03-01T00:00:00Z",
            "end_date": "2023-03-21T23:59:59Z"
        }
    }
    Cashfree.PGSettlementFetchRecon(xApiVersion, request).then((response) => {
        done()
    }).catch((error) => {
        assert.fail("Fail error message")
        done()
    });
});

it('Get Instrument By Id Test', function (done) {
    var instrumemtId = "9f9477b7-61ea-4baa-b878-a7e63d978034"
    var customerId = "iij"
    Cashfree.PGCustomerFetchInstrument(xApiVersion, customerId, instrumemtId).then((response) => {
        assert.equal(response.data.instrument_id, instrumemtId, "instrument_id is not matching")
        assert.equal(response.data.customer_id, customerId, "instrument_id is not matching")
        done()
    }).catch((error) => {
        console.log(error.response)
        assert.fail("Fail error message")
        done()
    });
});

