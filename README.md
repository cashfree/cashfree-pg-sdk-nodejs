# Cashfree PG Node SDK
![GitHub](https://img.shields.io/github/license/cashfree/cashfree-pg-sdk-nodejs) ![Discord](https://img.shields.io/discord/931125665669972018?label=discord) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/cashfree/cashfree-pg-sdk-nodejs/main) ![GitHub release (with filter)](https://img.shields.io/github/v/release/cashfree/cashfree-pg-sdk-nodejs?label=latest) ![npm](https://img.shields.io/npm/v/cashfree-pg) ![GitHub forks](https://img.shields.io/github/forks/cashfree/cashfree-pg-sdk-nodejs) [![Coverage Status](https://coveralls.io/repos/github/cashfree/cashfree-pg-sdk-nodejs/badge.svg?branch=)](https://coveralls.io/github/cashfree/cashfree-pg-sdk-nodejs?branch=main)

The Cashfree PG Node SDK offers a convenient solution to access [Cashfree PG APIs](https://docs.cashfree.com/reference/pg-new-apis-endpoint) from a server-side JavaScript  applications. 



## Documentation

Cashfree's PG API Documentation - https://docs.cashfree.com/reference/pg-new-apis-endpoint

Learn and understand payment gateway workflows at Cashfree Payments [here](https://docs.cashfree.com/docs/payment-gateway)

Try out our interactive guides at [Cashfree Dev Studio](https://www.cashfree.com/devstudio) !

## Getting Started

### Installation
```bash
npm i cashfree-pg
```
### Configuration

## Version >=5

```javascript 
import { Cashfree } from "cashfree-pg"; 

var cashfree = new Cashfree(Cashfree.SANDBOX, "<x-client-id>", "<x-client-secret>")
```

Generate your API keys (x-client-id , x-client-secret) from [Cashfree Merchant Dashboard](https://merchant.cashfree.com/merchants/login)

### Basic Usage
Create Order
```javascript
var request = {
    "order_amount": 1,
    "order_currency": "INR",
    "order_id": "order_34692745",
    "customer_details": {
        "customer_id": "walterwNrcMi",
        "customer_phone": "9999999999"
    },
    "order_meta": {
        "return_url": "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}"
    }
};
Cashfree.PGCreateOrder(request).then((response) => {
    console.log('Order Created successfully:',response.data)
}).catch((error) => {
    console.error('Error:', error.response.data.message);
});
```

Get Order
```javascript
Cashfree.PGFetchOrder("<order_id>").then((response) => {
    console.log('Order fetched successfully:', response.data);
}).catch((error) => {
    console.error('Error:', error.response.data.message);
});
```

## Version <5

```javascript 
import { Cashfree } from "cashfree-pg"; 

Cashfree.XClientId = "<x-client-id>";
Cashfree.XClientSecret = "<x-client-secret>";
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
```

Generate your API keys (x-client-id , x-client-secret) from [Cashfree Merchant Dashboard](https://merchant.cashfree.com/merchants/login)

### Basic Usage
Create Order
```javascript
var request = {
    "order_amount": 1,
    "order_currency": "INR",
    "order_id": "order_34692745",
    "customer_details": {
        "customer_id": "walterwNrcMi",
        "customer_phone": "9999999999"
    },
    "order_meta": {
        "return_url": "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}"
    }
};
Cashfree.PGCreateOrder("2023-08-01", request).then((response) => {
    console.log('Order Created successfully:',response.data)
}).catch((error) => {
    console.error('Error:', error.response.data.message);
});
```

Get Order
```javascript
Cashfree.PGFetchOrder("2023-08-01", "<order_id>").then((response) => {
    console.log('Order fetched successfully:', response.data);
}).catch((error) => {
    console.error('Error:', error.response.data.message);
});
```

Validate Webhook
```javascript
app.post('/webhook', function (req, res) {
    try {
        Cashfree.PGVerifyWebhookSignature(req.headers["x-webhook-signature"], req.rawBody, req.headers["x-webhook-timestamp"]);
    } catch (err) {
        console.log(err.message)
    }
})
```

## Supported Resources

- [Order](docs/Orders.md)

- [Payment](docs/Payments.md)

- [Refund](docs/Refunds.md)

- [Token Vault](docs/TokenVault.md)

- [Eligiblity](docs/Eligibility.md)

- [PaymentLink](docs/PaymentLink.md)

- [Settlements](docs/Settlements.md)

- [Offers](docs/Offers.md)

- [Reconciliation](docs/Reconciliation.md)

## Licence

Apache Licensed. See [LICENSE.md](LICENSE.md) for more details
