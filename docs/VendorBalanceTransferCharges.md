# VendorBalanceTransferCharges

Vendor Balance Transfer Charges entity object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_charges** | **number** |  | [optional] [default to undefined]
**service_tax** | **number** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**billed_to** | **string** |  | [optional] [default to undefined]
**is_postpaid** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { VendorBalanceTransferCharges } from 'cashfree-pg';

const instance: VendorBalanceTransferCharges = {
    service_charges,
    service_tax,
    amount,
    billed_to,
    is_postpaid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
