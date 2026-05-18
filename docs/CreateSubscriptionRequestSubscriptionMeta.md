# CreateSubscriptionRequestSubscriptionMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_url** | **string** | The url to redirect after checkout. | [optional] [default to undefined]
**notification_channel** | **Array&lt;string&gt;** | Notification channel for the subscription. SMS, EMAIL are possible values. | [optional] [default to undefined]
**session_id_expiry** | **string** | Expiry date for the subscription session. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionRequestSubscriptionMeta } from 'cashfree-pg';

const instance: CreateSubscriptionRequestSubscriptionMeta = {
    return_url,
    notification_channel,
    session_id_expiry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
