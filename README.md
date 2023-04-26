# Cashfree Nodejs API Client

Use our Nodejs SDK to integrate the Cashfree Payment Gateway into your application.

API version: `2022-09-01` \
Package version: `2.0.1`

# **Installation**

```
npm i cashfree-pg-sdk-nodejs
```

Note: add --save if you are using npm < 5.0.0

---

# Importing

```
import { CFConfig, CFPaymentGateway, CFEnvironment } from "cashfree-pg-sdk-nodejs";
```

---

# Create a CFConfig

The CFConfig consists of properties such as Client-ID, Client-Secret-Key and some more which are mandatory. An instance of CFConfig is required for all the method calls that are exposed by the SDK. The following is the code snippet to create a CFConfig:-

```
var cfConfig = new CFConfig(CFEnvironment.PRODUCTION, "2022-01-01", client_Id, secret);

// CFEnvironment is an enum consisting of PRODUCTION and SANDBOX as 2 possible values.
```

---

# Create a CFHeader

The CFHeader type consists of properties that are sent in the headers as part of every request and they are optional values. The following code snippet can be used to create a CFHeader instance :-

```
var cfHeader = new CFHeader("request_id", "idempotency_key");
```
---
# Create an Order with Cashfree

To process any payment on Cashfree PG, the merchant needs to create an order in the cashfree system. An order can be created using the following code snippet:-

```
var customerDetails = new CFCustomerDetails();
        customerDetails.customerId = "some_random_id";
        customerDetails.customerPhone = "9999999999";
        customerDetails.customerEmail = "b.a@cashfree.com";
        var d = {};
        d["order_tag_01"] = "TESTING IT";

var cFOrderRequest = new CFOrderRequest();
        cFOrderRequest.orderAmount = 1;
        cFOrderRequest.orderCurrency = "INR";
        cFOrderRequest.customerDetails = customerDetails;
        cFOrderRequest.orderTags = d;
try {
                var apiInstance = new CFPaymentGateway();

                var result = await apiInstance.orderCreate(
                    prodCfConfig,
                    cFOrderRequest
                );
                if (result != null) {
                    console.log(result?.cfOrder?.paymentSessionId);
                    console.log(result?.cfOrder?.orderId);
                    console.log(result?.cfHeaders);
                }
} catch (ApiException e) {
            console.log(e);
}
```

`Note:` For more information about order properties, visit [here](https://docs.cashfree.com/docs/create-order#curl-request)

---

# Pay Order

Once you have created the order, you can use the order to initiate payment. Order creation API returns "order_token" which contains information about the order and that has to be used in payment initiation stage. Cashfree provides multiple payment methods to choose to make payments for an order, namely, UPI, Netbanking, Wallet, Card, Card EMI, Cardless EMI and Pay later.

### Pay Order with Card
Below is the code to initiate payment with Card

```
    try {
        var cFCard = new CFCard();
        cFCard.channel = "link";
        cFCard.cardBankName = CFCard.CardBankNameEnum.Test;
        cFCard.cardNumber = "4111111111111111";
        cFCard.cardCvv = "123";
        cFCard.cardExpiryMm = "12";
        cFCard.cardExpiryYy = "25";
        const cFCardPayment = new CFCardPayment();
        cFCardPayment.card = cFCard;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFCardPayment;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            cfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.paymentMethod);
            console.log(cfPayResponse?.cfOrderPayResponse?.data?.url);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```


### Pay Order with Saved Card

Below is the code to initiate payment with Saved Card

```
    try {
        var cFCard = new CFCard();
        cFCard.channel = "link";
        cFCard.instrumentId = instrument_id;
        cFCard.cardCvv = "123";
        const cFCardPayment = new CFCardPayment();
        cFCardPayment.card = cFCard;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFCardPayment;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            prodCfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.paymentMethod);
            console.log(cfPayResponse?.cfOrderPayResponse?.data?.url);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Pay Order with UPI

Below is the code to initiate payment with UPI - `Collect`

```
    try {
        var cfUpi = new CFUPI();
        cfUpi.channel = CFUPI.ChannelEnum.Collect;
        cfUpi.upiId = "dummy@paytm";
        var cFUPIPayment = new CFUPIPayment();
        cFUPIPayment.upi = cfUpi;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFUPIPayment;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            prodCfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.data);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

Below is the code to initiate payment with UPI - `Intent`

```
    try {
        var cfUpi = new CFUPI();
        cfUpi.channel = CFUPI.ChannelEnum.Link;
        var cFUPIPayment = new CFUPIPayment();
        cFUPIPayment.upi = cfUpi;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFUPIPayment;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            cfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.data);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

Below is the code to initiate payment with UPI - `QRCode`

```
    try {
        var cfUpi = new CFUPI();
        cfUpi.channel = CFUPI.ChannelEnum.Qrcode;
        var cFUPIPayment = new CFUPIPayment();
        cFUPIPayment.upi = cfUpi;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFUPIPayment;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            cfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.data);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Pay Order with Netbanking

Below is the code to initiate payment with Netbanking

```
    try {
        var cfnetBanking = new CFNetbanking();
        cfnetBanking.channel = "link";
        cfnetBanking.netbankingBankCode = 3003;
        var cFPaymentMethod = new CFPaymentMethod();
        cFPaymentMethod.netbanking = cfnetBanking;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFPaymentMethod;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            prodCfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.data?.url);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

`Note:` For all bank codes, visit [here](https://docs.cashfree.com/docs/net-banking)

### Pay Order with App (Wallet)

Below is the code to initiate payment with App (Wallet)

```
    try {
        var cfApp = new CFApp();
        cfApp.channel = CFApp.ChannelEnum.Link;
        cfApp.phone = "8904216227";
        cfApp.provider = "test";
        var cFAppPayment = new CFAppPayment();
        cFAppPayment.app = cfApp;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFAppPayment;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            cfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.paymentMethod);
            console.log(cfPayResponse?.cfOrderPayResponse?.data?.url);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```
`Note:` Below is the list of all values for all the wallet providers supported by Cashfree:- `phonepe` `paytm` `amazon` `airtel` `freecharge` `mobikwik` `jio` `ola`

### Pay Order with Paylater

Below is the code to initiate payment with Paylater

```
    try {
        var cfPaylater = new CFPaylater();
        cfPaylater.channel = "link";
        cfPaylater.phone = "8904216227";
        cfPaylater.provider = CFPaylater.ProviderEnum.Lazypay;
        var cFPaylaterPayment = new CFPaylaterPayment();
        cFPaylaterPayment.paylater = cfPaylater;
        var cFOrderPayRequest = new CFOrderPayRequest();
        cFOrderPayRequest.paymentSessionId = payment_session_id;
        cFOrderPayRequest.paymentMethod = cFPaylaterPayment;
        var apiInstance = new CFPaymentGateway();
        var cfPayResponse = await apiInstance.orderSessionsPay(
            prodCfConfig,
            cFOrderPayRequest
        );
        if (cfPayResponse != null) {
            console.log("result.OrderId");
            console.log(cfPayResponse?.cfOrderPayResponse?.paymentMethod);
            console.log(cfPayResponse?.cfOrderPayResponse?.data?.url);
            console.log(cfPayResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

`Note:` Currently we support `kotak`, `flexipay`, `zestmoney`, `lazypay`, `olapostpaid`

### Get Order

The details and status of the order can be fetched using this API. Below is the code snippet to retrieve order using `order_id`

```
    try {
        var apiInstance = new CFPaymentGateway();
        var cfOrderResponse = await apiInstance.getOrder(
            prodCfConfig,
            order_id
        );

        if (cfOrderResponse != null) {
            console.log("result.OrderId");
            console.log(cfOrderResponse?.cfOrder?.orderId);
            console.log(cfOrderResponse?.cfOrder?.payments);
            console.log(cfOrderResponse?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Payments For An Order

Once the payment process is initiated, all the payment information for a particular order can be retrieved through this API. Below is the code snippet to retrieve payments for a particular order.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var response = await apiInstance.getPaymentsForOrder(
            prodCfConfig,
            order_id
        );
        if (response !== null) {
            if (response?.cfPaymentsEntities)
                console.log(response?.cfPaymentsEntities[0].cfPaymentId);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Payment By CFPaymentID

Payment information can be retrieved using a unique ID generated by Cashfree (CFPaymentID). We can find get this ID from `GetOrder` API and can be used here to fetch Payment Information. Below is the code snippet to fetch Payment Information.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var response = await apiInstance.getPaymentsByPaymentID(
            prodCfConfig,
            order_id,
            payment_id
        );
        if (response !== null) {
            console.log(response?.cfPaymentsEntity?.paymentStatus);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Create Payment Links

A Payment link can be created and shared with users through `email` or `sms`. Below is the code snippet to create a payment link.

```
    try {
        var apiInstance = new CFPaymentGateway();

        var customerDetails = new CFLinkCustomerDetailsEntity();
        customerDetails.customerEmail = "bhaskar.aggarwal@cashfree.com";
        customerDetails.customerPhone = "9953844999";
        customerDetails.customerName = "Bhaskar";
        var linkNotify = new CFLinkNotifyEntity();
        linkNotify.sendEmail = true;
        linkNotify.sendSms = true;
        var cFLinkRequest = new CFLinkRequest(); //"link_id_02", 1, "INR", "TESTING", customerDetails, false, null, null, linkNotify, false, null, null;
        cFLinkRequest.linkId = "link_id_102";
        cFLinkRequest.linkAmount = 1;
        cFLinkRequest.linkCurrency = "INR";
        cFLinkRequest.linkPurpose = "TESTING";
        cFLinkRequest.customerDetails = customerDetails;
        cFLinkRequest.linkPartialPayments = false;
        cFLinkRequest.linkNotify = linkNotify;
        cFLinkRequest.linkAutoReminders = false;
        var response = await apiInstance.createPaymentLink(
            prodCfConfig,
            cFLinkRequest
        );

        if (response != null) {
            console.log("response.cfRefunds.Count");
            console.log(response?.cfLink?.linkUrl);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Payment Links By LinkID

A Payment link which was created can be retrieved using this API by specifying the `LinkID`. Below is the code snippet to get the payment link information.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var response = await apiInstance.getPaymentLinkDetails(
            prodCfConfig,
            link_id,
        );
        if (response != null) {
            console.log("response.cfRefunds.Count");
            console.log(response?.cfLink?.linkAmount);
            console.log(response?.cfLink?.linkId == link_id);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Orders By LinkID

All the orders created using links can be fetched using linkID by using this API. Below is the code snippet to get all the orders associated with the linkID.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var response = await apiInstance.getPaymentLinkOrders(
            prodCfConfig,
            link_id
        );
        if (response != null) {
            console.log(response);
            console.log("response?.cfLinkOrders[0]?.CfOrderId");
            console.log(response?.cfLinkOrders?.length);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Initiate Refund

Amount associated with a particular orderID where the transaction has gone through can be refunded using this API. Below is the code snippet to initiate the refund.

```
    try {
        var apiInstance = new CFPaymentGateway();

        var cfRefundRequest = new CFRefundRequest();
        cfRefundRequest.refundAmount = 1;
        cfRefundRequest.refundId = "refund_id_nodejs_test";
        cfRefundRequest.refundNote = "Testing";

        var response = await apiInstance.createRefund(
            prodCfConfig,
            order_id_for_refund,
            cfRefundRequest
        );

        if (response != null) {
            console.log("response.cfRefund.RefundAmount");
            console.log(response?.cfRefund?.refundAmount);
            console.log(response.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Fetch Refund Information

Once the refund is initiated, we can check the status of that refund using this API. Below is the code snippet to check refund information.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var response = await apiInstance.getRefund(
            prodCfConfig,
            order_id_for_refund,
            "refund_id_nodejs_test"
        );
        if (response != null) {
            console.log("response.cfRefund.RefundAmount");
            console.log(response?.cfRefund?.refundAmount);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Settlements

Below is the code snippet to retrieve order settlement information

```
    try {
        var apiInstance = new CFPaymentGateway();
        var response = await apiInstance.getSettlements(
            prodCfConfig,
            order_id_for_refund
        );

        if (response != null) {
            console.log("response.cfRefunds.Count");
            console.log(response?.cfSettlementsEntity?.orderAmount);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Saved Instruments By Customer ID

Saved instrument information can be retrieved using this API. Below is the code snippet to retrieve instrument information.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var customerId = customer_id;
        var response = await apiInstance.getAllSavedInstruments(
            prodCfConfig,
            customerId,
            "card"
        );

        if (response != null) {
            console.log("response.cfRefunds.Count");
            console.log(response?.cfInstruments?.length);
            if (response?.cfInstruments && response?.cfInstruments?.length) {
                console.log(response?.cfInstruments[0]?.instrumentId);
            }
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Instrument by Instrument ID

Saved instrument information can be retrieved using this API by using the instrument ID. Below is the code snippet to retrieve instrument information.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var customerId = customer_id;
        var response = await apiInstance.getSavedInstrumentById(
            prodCfConfig,
            customerId,
            instrument_id
        );

        if (response != null) {
            console.log("response.cfRefunds.Count");
            console.log(response?.cfInstrument?.instrumentId);
            console.log(response?.cfInstrument?.instrumentDisplay);
            console.log(response?.cfInstrument?.instrumentMeta?.cardBankName);
            console.log(response?.cfInstrument?.instrumentMeta?.cardNetwork);
            console.log(response?.cfInstrument?.instrumentMeta?.cardType);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```

### Get Instrument Cryptogram by Instrument ID

Saved instrument's Cryptogram information can be retrieved using this API by using the instrument ID. Below is the code snippet to retrieve the same.

```
    try {
        var apiInstance = new CFPaymentGateway();
        var customerId = customer_id;
        var response = await apiInstance.getCryptogramByInstrumentID(
            prodCfConfig,
            customerId,
            instrument_id
        );

        if (response != null) {
            console.log("response.cfRefunds.Count");
            console.log(response?.cfCryptogram?.instrumentId);
            console.log(response?.cfCryptogram?.cryptogram);
            console.log(response?.cfHeaders);
        }
    } catch (e) {
        console.log(e);
    }
```
