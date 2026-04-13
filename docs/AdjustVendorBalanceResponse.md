# AdjustVendorBalanceResponse

Adjust Vendor Balance Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlement_id** | **number** |  | [optional] [default to undefined]
**transfer_details** | [**TransferDetails**](TransferDetails.md) |  | [optional] [default to undefined]
**balances** | [**BalanceDetails**](BalanceDetails.md) |  | [optional] [default to undefined]
**charges** | [**ChargesDetails**](ChargesDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AdjustVendorBalanceResponse } from 'cashfree-pg';

const instance: AdjustVendorBalanceResponse = {
    settlement_id,
    transfer_details,
    balances,
    charges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
