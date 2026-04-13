# SplitOrderReconSuccessResponseVendorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendor_id** | **string** | Unique identifier for the vendor. | [optional] [default to undefined]
**settlement_id** | **number** | Settlement ID associated with the vendor. | [optional] [default to undefined]
**settlement_amount** | **number** | Settlement amount allocated to the vendor. | [optional] [default to undefined]
**settlement_eligibility_date** | **string** | Date and time when the vendor is eligible for the settlement. | [optional] [default to undefined]

## Example

```typescript
import { SplitOrderReconSuccessResponseVendorsInner } from 'cashfree-pg';

const instance: SplitOrderReconSuccessResponseVendorsInner = {
    vendor_id,
    settlement_id,
    settlement_amount,
    settlement_eligibility_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
