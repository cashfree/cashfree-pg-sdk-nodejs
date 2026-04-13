# OrderCreateRefundRequest

create refund request object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_amount** | **number** | Amount to be refunded. Should be lesser than or equal to the transaction amount. (Decimals allowed) | [default to undefined]
**refund_id** | **string** | An unique ID to associate the refund with. Provie alphanumeric values | [default to undefined]
**refund_note** | **string** | A refund note for your reference. | [optional] [default to undefined]
**refund_speed** | **string** | Speed at which the refund is processed. It\&#39;s an optional field with default being STANDARD | [optional] [default to undefined]
**refund_splits** | [**Array&lt;VendorSplit&gt;**](VendorSplit.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderCreateRefundRequest } from 'cashfree-pg';

const instance: OrderCreateRefundRequest = {
    refund_amount,
    refund_id,
    refund_note,
    refund_speed,
    refund_splits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
