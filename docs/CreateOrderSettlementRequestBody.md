# CreateOrderSettlementRequestBody

Create Order Settlement Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | OrderId of the order. | [default to undefined]
**meta_data** | [**CreateOrderSettlementRequestBodyMetaData**](CreateOrderSettlementRequestBodyMetaData.md) |  | [default to undefined]

## Example

```typescript
import { CreateOrderSettlementRequestBody } from 'cashfree-pg';

const instance: CreateOrderSettlementRequestBody = {
    order_id,
    meta_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
