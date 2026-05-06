# CreateVendorRequest

Create Vendor Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendor_id** | **string** | Specify the unique Vendor ID to identify the beneficiary. Alphanumeric and underscore (_) allowed. | [default to undefined]
**status** | **string** | Specify the status of vendor that should be updated. Possible values: ACTIVE,BLOCKED, DELETED. | [default to undefined]
**name** | **string** | Specify the name of the vendor to be updated. Name should not have any special character except . / - &amp;. | [default to undefined]
**email** | **string** | Specify the vendor email ID that should be updated. String in email ID format (Ex:johndoe_1@cashfree.com) should contain @ and dot (.). | [default to undefined]
**phone** | **string** | Specify the beneficiaries phone number to be updated. Phone number registered in India (only digits, 8 - 12 characters after excluding +91). | [default to undefined]
**verify_account** | **boolean** | Specify if the vendor bank account details should be verified. Possible values: true or false. | [optional] [default to undefined]
**dashboard_access** | **boolean** | Update if the vendor will have dashboard access or not. Possible values are: true or false. | [optional] [default to undefined]
**schedule_option** | **number** | Specify the settlement cycle to be updated. View the settlement cycle details from the \&quot;Settlement Cycles Supported\&quot; table. If no schedule option is configured, the settlement cycle ID \&quot;1\&quot; will be in effect. Select \&quot;8\&quot; or \&quot;9\&quot; if you want to schedule instant vendor settlements. | [optional] [default to undefined]
**bank** | [**BankDetails**](BankDetails.md) |  | [optional] [default to undefined]
**upi** | [**UpiDetails**](UpiDetails.md) |  | [optional] [default to undefined]
**kyc_details** | [**KycDetails**](KycDetails.md) |  | [default to undefined]

## Example

```typescript
import { CreateVendorRequest } from 'cashfree-pg';

const instance: CreateVendorRequest = {
    vendor_id,
    status,
    name,
    email,
    phone,
    verify_account,
    dashboard_access,
    schedule_option,
    bank,
    upi,
    kyc_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
