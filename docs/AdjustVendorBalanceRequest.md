# AdjustVendorBalanceRequest

Adjust Vendor Balance Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transfer_from** | **string** | Mention to whom you want to transfer the on demand balance. Possible values - MERCHANT, VENDOR. | [default to undefined]
**transfer_type** | **string** | Mention the type of transfer. Possible values: ON_DEMAND. | [default to undefined]
**transfer_amount** | **number** | Mention the on demand transfer amount. | [default to undefined]
**remark** | **string** | Mention remarks if any for the on demand transfer. | [optional] [default to undefined]
**tags** | **object** | Provide additional data fields using tags. | [optional] [default to undefined]

## Example

```typescript
import { AdjustVendorBalanceRequest } from 'cashfree-pg';

const instance: AdjustVendorBalanceRequest = {
    transfer_from,
    transfer_type,
    transfer_amount,
    remark,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
