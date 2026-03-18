# CreateVendorResponse

Create Vendor Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**bank** | [**Array&lt;BankDetails&gt;**](BankDetails.md) |  | [optional] [default to undefined]
**upi** | **string** |  | [optional] [default to undefined]
**phone** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**vendor_id** | **string** |  | [optional] [default to undefined]
**schedule_option** | [**Array&lt;ScheduleOption&gt;**](ScheduleOption.md) |  | [optional] [default to undefined]
**kyc_details** | [**Array&lt;KycDetails&gt;**](KycDetails.md) |  | [optional] [default to undefined]
**dashboard_access** | **boolean** |  | [optional] [default to undefined]
**bank_details** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateVendorResponse } from 'cashfree-pg';

const instance: CreateVendorResponse = {
    email,
    status,
    bank,
    upi,
    phone,
    name,
    vendor_id,
    schedule_option,
    kyc_details,
    dashboard_access,
    bank_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
