# LinkNotifyEntity

Payment link Notify Object for SMS and Email

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_sms** | **boolean** | If \&quot;true\&quot;, Cashfree will send sms on customer_phone | [optional] [default to undefined]
**send_email** | **boolean** | If \&quot;true\&quot;, Cashfree will send email on customer_email | [optional] [default to undefined]

## Example

```typescript
import { LinkNotifyEntity } from 'cashfree-pg';

const instance: LinkNotifyEntity = {
    send_sms,
    send_email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
