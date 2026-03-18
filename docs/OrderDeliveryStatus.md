# OrderDeliveryStatus

Order delivery Status associated with order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Delivery status of order | [default to undefined]
**reason** | **string** | Reason of provided order delivery status. This is optional field. | [optional] [default to undefined]

## Example

```typescript
import { OrderDeliveryStatus } from 'cashfree-pg';

const instance: OrderDeliveryStatus = {
    status,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
