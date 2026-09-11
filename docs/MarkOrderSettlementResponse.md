# MarkOrderSettlementResponse

Response returned after successfully marking an order for settlement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | The order ID that was marked for settlement. | [optional] [default to undefined]
**meta_data** | [**MarkOrderSettlementResponseMetaData**](MarkOrderSettlementResponseMetaData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MarkOrderSettlementResponse } from 'cashfree-pg';

const instance: MarkOrderSettlementResponse = {
    order_id,
    meta_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
