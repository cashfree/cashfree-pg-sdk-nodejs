# PayOrderEntity

Order Pay response once you create a transaction for that order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_amount** | **number** | total amount payable | [optional] [default to undefined]
**cf_payment_id** | **string** | Payment identifier created by Cashfree | [optional] [default to undefined]
**payment_method** | **string** | One of [\&quot;upi\&quot;, \&quot;netbanking\&quot;, \&quot;card\&quot;, \&quot;app\&quot;, \&quot;cardless_emi\&quot;, \&quot;paylater\&quot;, \&quot;banktransfer\&quot;]  | [optional] [default to undefined]
**channel** | **string** | One of [\&quot;link\&quot;, \&quot;collect\&quot;, \&quot;qrcode\&quot;]. In an older version we used to support different channels like \&#39;gpay\&#39;, \&#39;phonepe\&#39; etc. However, we now support only the following channels - link, collect and qrcode. To process payments using gpay, you will have to provide channel as \&#39;link\&#39; and provider as \&#39;gpay\&#39; | [optional] [default to undefined]
**action** | **string** | One of [\&quot;link\&quot;, \&quot;custom\&quot;, \&quot;form\&quot;] | [optional] [default to undefined]
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
