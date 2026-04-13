# VendorEntity

Vendor entity object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**vendor_id** | **string** |  | [optional] [default to undefined]
**added_on** | **string** |  | [optional] [default to undefined]
**updated_on** | **string** |  | [optional] [default to undefined]
**bank** | [**Array&lt;BankDetails&gt;**](BankDetails.md) |  | [optional] [default to undefined]
**upi** | **string** |  | [optional] [default to undefined]
**schedule_option** | [**Array&lt;ScheduleOption&gt;**](ScheduleOption.md) |  | [optional] [default to undefined]
**vendor_type** | **string** |  | [optional] [default to undefined]
**account_type** | **string** |  | [optional] [default to undefined]
**business_type** | **string** |  | [optional] [default to undefined]
**remarks** | **string** |  | [optional] [default to undefined]
**related_docs** | [**Array&lt;VendorEntityRelatedDocsInner&gt;**](VendorEntityRelatedDocsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VendorEntity } from 'cashfree-pg';

const instance: VendorEntity = {
    email,
    status,
    phone,
    name,
    vendor_id,
    added_on,
    updated_on,
    bank,
    upi,
    schedule_option,
    vendor_type,
    account_type,
    business_type,
    remarks,
    related_docs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
