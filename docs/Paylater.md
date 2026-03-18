# Paylater

Paylater payment method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | The channel for cardless EMI is always &#x60;link&#x60; | [optional] [default to undefined]
**provider** | **string** | One of [\&quot;kotak\&quot;, \&quot;flexipay\&quot;, \&quot;zestmoney\&quot;, \&quot;lazypay\&quot;, \&quot;olapostpaid\&quot;,\&quot;simpl\&quot;, \&quot;freechargepaylater\&quot;]. Please note that Flexipay is offered by HDFC bank | [optional] [default to undefined]
**phone** | **string** | Customers phone number for this payment instrument. If the customer is not eligible you will receive a 400 error with type as \&#39;invalid_request_error\&#39; and code as \&#39;invalid_request_error\&#39; | [optional] [default to undefined]

## Example

```typescript
import { Paylater } from 'cashfree-pg';

const instance: Paylater = {
    channel,
    provider,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
