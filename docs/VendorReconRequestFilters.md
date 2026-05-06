# VendorReconRequestFilters

Specify the filters for the desired use case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlement_id** | **number** | Specify the Settlement ID for which you want to fetch the order details. Relevant for \&quot;View Split Order Details Using Settlement ID\&quot;. | [optional] [default to undefined]
**merchant_vendor_id** | **string** | Specify the Vendor ID for which you want to fetch the recon details. Relevant for \&quot;Vendor Recon Using Vendor ID &amp; Time Interval\&quot;. | [optional] [default to undefined]
**start_date** | **string** | Start date for fetching reconciliation details. Relevant for \&quot;Vendor Recon for a Time Period\&quot; and \&quot;Vendor Recon Using Vendor ID &amp; Time Interval\&quot;. | [optional] [default to undefined]
**end_date** | **string** | End date for fetching reconciliation details. Relevant for \&quot;Vendor Recon for a Time Period\&quot; and \&quot;Vendor Recon Using Vendor ID &amp; Time Interval\&quot;. | [optional] [default to undefined]

## Example

```typescript
import { VendorReconRequestFilters } from 'cashfree-pg';

const instance: VendorReconRequestFilters = {
    settlement_id,
    merchant_vendor_id,
    start_date,
    end_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
