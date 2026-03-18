# UpdateVendorResponse

Update Vendor Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**bank** | [**Array&lt;BankDetails&gt;**](BankDetails.md) |  | [optional] [default to undefined]
**upi** | **string** |  | [optional] [default to undefined]
**added_on** | **string** |  | [optional] [default to undefined]
**updated_on** | **string** |  | [optional] [default to undefined]
**vendor_type** | **string** |  | [optional] [default to undefined]
**account_type** | **string** |  | [optional] [default to undefined]
**business_type** | **string** |  | [optional] [default to undefined]
**phone** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**vendor_id** | **string** |  | [optional] [default to undefined]
**schedule_option** | [**Array&lt;ScheduleOption&gt;**](ScheduleOption.md) |  | [optional] [default to undefined]
**kyc_details** | [**Array&lt;KycDetails&gt;**](KycDetails.md) |  | [optional] [default to undefined]
**dashboard_access** | **boolean** |  | [optional] [default to undefined]
**bank_details** | **string** |  | [optional] [default to undefined]
**related_docs** | [**Array&lt;VendorEntityRelatedDocsInner&gt;**](VendorEntityRelatedDocsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateVendorResponse } from 'cashfree-pg';

const instance: UpdateVendorResponse = {
    email,
    status,
    bank,
    upi,
    added_on,
    updated_on,
    vendor_type,
    account_type,
    business_type,
    phone,
    name,
    vendor_id,
    schedule_option,
    kyc_details,
    dashboard_access,
    bank_details,
    related_docs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
