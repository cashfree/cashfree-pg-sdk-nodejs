# CreateLinkRequest

Request paramenters for link creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_id** | **string** | Unique Identifier (provided by merchant) for the Link. Alphanumeric and only - and _ allowed (50 character limit). Use this for other link-related APIs. | [default to undefined]
**link_amount** | **number** | Amount to be collected using this link. Provide upto two decimals for paise. | [default to undefined]
**link_currency** | **string** | Currency for the payment link. Default is INR. Contact care@cashfree.com to enable new currencies. | [default to undefined]
**link_purpose** | **string** | A brief description for which payment must be collected. This is shown to the customer. | [default to undefined]
**customer_details** | [**LinkCustomerDetailsEntity**](LinkCustomerDetailsEntity.md) |  | [default to undefined]
**link_partial_payments** | **boolean** | If \&quot;true\&quot;, customer can make partial payments for the link. | [optional] [default to undefined]
**link_minimum_partial_amount** | **number** | Minimum amount in first installment that needs to be paid by the customer if partial payments are enabled. This should be less than the link_amount. | [optional] [default to undefined]
**link_expiry_time** | **string** | Time after which the link expires. Customers will not be able to make the payment beyond the time specified here. You can provide them in a valid ISO 8601 time format. Default is 30 days. | [optional] [default to undefined]
**link_notify** | [**LinkNotifyEntity**](LinkNotifyEntity.md) |  | [optional] [default to undefined]
**link_auto_reminders** | **boolean** | If \&quot;true\&quot;, reminders will be sent to customers for collecting payments. | [optional] [default to undefined]
**link_notes** | **{ [key: string]: string; }** | Key-value pair that can be used to store additional information about the entity. Maximum 5 key-value pairs | [optional] [default to undefined]
**link_meta** | [**LinkMetaResponseEntity**](LinkMetaResponseEntity.md) |  | [optional] [default to undefined]
**order_splits** | [**Array&lt;VendorSplit&gt;**](VendorSplit.md) | If you have Easy split enabled in your Cashfree account then you can use this option to split the order amount. | [optional] [default to undefined]

## Example

```typescript
import { CreateLinkRequest } from 'cashfree-pg';

const instance: CreateLinkRequest = {
    link_id,
    link_amount,
    link_currency,
    link_purpose,
    customer_details,
    link_partial_payments,
    link_minimum_partial_amount,
    link_expiry_time,
    link_notify,
    link_auto_reminders,
    link_notes,
    link_meta,
    order_splits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
