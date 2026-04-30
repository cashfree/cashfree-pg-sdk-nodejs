# PayOrderEntity

Order pay response once you create a transaction for that order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_amount** | **number** | Total amount payable. | [optional] [default to undefined]
**cf_payment_id** | **string** | Payment identifier created by Cashfree. | [optional] [default to undefined]
**payment_method** | **string** | The payment method used for this transaction. - netbanking: Net banking payment. - card: Credit or debit card payment. - upi: UPI payment via collect, intent, or QR code. - app: Wallet-based payment. - cardless_emi: Cardless EMI payment. - paylater: Pay later payment. - banktransfer: Direct bank transfer payment. - applepay: Apple Pay payment.  | [optional] [default to undefined]
**channel** | **string** | The channel used for the payment method. - link: Redirect-based flow where the customer is taken to an external page. - post: Native OTP flow where the merchant renders a custom UI to collect OTP. - collect: UPI collect request sent to the customer\&#39;s VPA. - qrcode: UPI QR code for the customer to scan. - podQrCode: Pay on delivery QR code.  | [optional] [default to undefined]
**action** | **string** | The action to complete the payment. - link: Redirect the customer to &#x60;data.url&#x60; using a browser or in-app webview. - post: Render a native UI, collect required input, and POST it to &#x60;data.url&#x60;. - form: Render the form from &#x60;data.payload&#x60; and auto-submit it to &#x60;data.url&#x60;. - custom: Follow integration-specific instructions or SDK handling.  | [optional] [default to undefined]
**data** | [**OrderPayData**](OrderPayData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PayOrderEntity } from 'cashfree-pg';

const instance: PayOrderEntity = {
    payment_amount,
    cf_payment_id,
    payment_method,
    channel,
    action,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
