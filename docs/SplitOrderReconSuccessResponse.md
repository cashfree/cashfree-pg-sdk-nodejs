# SplitOrderReconSuccessResponse

Split Order Reconciliation Request Body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlement** | [**SplitOrderReconSuccessResponseSettlement**](SplitOrderReconSuccessResponseSettlement.md) |  | [optional] [default to undefined]
**refunds** | **Array&lt;object&gt;** | List of refunds associated with the order, if any. | [optional] [default to undefined]
**vendors** | [**Array&lt;SplitOrderReconSuccessResponseVendorsInner&gt;**](SplitOrderReconSuccessResponseVendorsInner.md) | List of vendor settlements associated with the split settlement. | [optional] [default to undefined]

## Example

```typescript
import { SplitOrderReconSuccessResponse } from 'cashfree-pg';

const instance: SplitOrderReconSuccessResponse = {
    settlement,
    refunds,
    vendors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
