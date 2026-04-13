# LinkMetaResponseEntity

Payment link meta information object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notify_url** | **string** | Notification URL for server-server communication. It should be an https URL. | [optional] [default to undefined]
**upi_intent** | **string** | If \&quot;true\&quot;, link will directly open UPI Intent flow on mobile, and normal link flow elsewhere | [optional] [default to undefined]
**return_url** | **string** | The URL to which user will be redirected to after the payment is done on the link. Maximum length: 250. | [optional] [default to undefined]
**payment_methods** | **string** | Allowed payment modes for this link. Pass comma-separated values among following options - \&quot;cc\&quot;, \&quot;dc\&quot;, \&quot;ccc\&quot;, \&quot;ppc\&quot;, \&quot;nb\&quot;, \&quot;upi\&quot;, \&quot;paypal\&quot;, \&quot;app\&quot;. Leave it blank to show all available payment methods | [optional] [default to undefined]

## Example

```typescript
import { LinkMetaResponseEntity } from 'cashfree-pg';

const instance: LinkMetaResponseEntity = {
    notify_url,
    upi_intent,
    return_url,
    payment_methods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
