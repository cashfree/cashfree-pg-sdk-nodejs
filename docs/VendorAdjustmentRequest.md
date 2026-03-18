# VendorAdjustmentRequest

Vendor Adjustment Request Body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendor_id** | **string** | The unique identifier of the vendor to whom the adjustment is applied | [default to undefined]
**adjustment_id** | **number** | The unique identifier for the adjustment transaction. | [default to undefined]
**amount** | **number** | The adjustment amount to be applied. | [default to undefined]
**type** | **string** | The type of adjustment. Possible values: CREDIT, DEBIT. | [default to undefined]
**remarks** | **string** | Remarks for the adjustment transaction, if any. | [optional] [default to undefined]

## Example

```typescript
import { VendorAdjustmentRequest } from 'cashfree-pg';

const instance: VendorAdjustmentRequest = {
    vendor_id,
    adjustment_id,
    amount,
    type,
    remarks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
