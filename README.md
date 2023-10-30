# Cashfree PG Node SDK
![GitHub](https://img.shields.io/github/license/cashfree/cashfree-pg-sdk-nodejs) ![Discord](https://img.shields.io/discord/931125665669972018?label=discord) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/cashfree/cashfree-pg-sdk-nodejs/main) ![GitHub release (with filter)](https://img.shields.io/github/v/release/cashfree/cashfree-pg-sdk-nodejs?label=latest) ![npm](https://img.shields.io/npm/v/cashfree-pg-sdk-nodejs) ![GitHub forks](https://img.shields.io/github/forks/cashfree/cashfree-pg-sdk-nodejs)

The Cashfree PG Node SDK offers a convenient solution to access [Cashfree PG APIs](https://docs.cashfree.com/reference/pg-new-apis-endpoint) from a server-side JavaScript  applications. 



## Documentation

Cashfree's PG API Documentation - https://docs.cashfree.com/reference/pg-new-apis-endpoint

Learn and understand payment gateway workflows at Cashfree Payments [here](https://docs.cashfree.com/docs/payment-gateway)

Try out our interactive guides at [Cashfree Labs](https://labs.cashfree.com/) !

## Getting Started

### Installation
```bash
npm i cashfree-pg
```
### Configuration

```javascript 
import { Cashfree } from "cashfree-pg"; 

Cashfree.XClientId = "<x-client-id>";
Cashfree.XClientSecret = "<x-client-secret>";
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
```

Generate your API keys (x-client-id , x-secret-key) from [Cashfree Merchant Dashboard](https://merchant.cashfree.com/merchants/login)

### Basic Usage
Create Order
```javascript
Cashfree.PGCreateOrder("2022-09-01", request).then((response) => {
    console.log('Order fetched successfully:',response.data)
}).catch((error) => {
    console.error('Error:', error.response.data.message);
});
```

Get Order
```javascript
Cashfree.PGFetchOrder("2022-09-01", "<order_id>").then((response) => {
    console.log('Order fetched successfully:', response.data);
}).catch((error) => {
    console.error('Error:', error.response.data.message);
});
```

## Licence

Apache Licensed. See [LICENSE.md](LICENSE.md) for more details
