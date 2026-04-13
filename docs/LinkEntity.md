# LinkEntity

Payment link success creation response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_link_id** | **string** |  | [optional] [default to undefined]
**link_id** | **string** |  | [optional] [default to undefined]
**link_status** | **string** |  | [optional] [default to undefined]
**link_currency** | **string** |  | [optional] [default to undefined]
**link_amount** | **number** |  | [optional] [default to undefined]
**link_amount_paid** | **number** |  | [optional] [default to undefined]
**link_partial_payments** | **boolean** |  | [optional] [default to undefined]
**link_minimum_partial_amount** | **number** |  | [optional] [default to undefined]
**link_purpose** | **string** |  | [optional] [default to undefined]
**link_created_at** | **string** |  | [optional] [default to undefined]
**customer_details** | [**LinkCustomerDetailsEntity**](LinkCustomerDetailsEntity.md) |  | [optional] [default to undefined]
**link_meta** | [**LinkMetaResponseEntity**](LinkMetaResponseEntity.md) |  | [optional] [default to undefined]
**link_url** | **string** |  | [optional] [default to undefined]
**link_expiry_time** | **string** |  | [optional] [default to undefined]
**link_notes** | **{ [key: string]: string; }** | Key-value pair that can be used to store additional information about the entity. Maximum 5 key-value pairs | [optional] [default to undefined]
**link_auto_reminders** | **boolean** |  | [optional] [default to undefined]
**link_notify** | [**LinkNotifyEntity**](LinkNotifyEntity.md) |  | [optional] [default to undefined]
**link_qrcode** | **string** | Base64 encoded string for payment link. You can scan with camera to open a link in the browser to complete the payment. | [optional] [default to undefined]
**order_splits** | [**Array&lt;VendorSplit&gt;**](VendorSplit.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LinkEntity } from 'cashfree-pg';

const instance: LinkEntity = {
    cf_link_id,
    link_id,
    link_status,
    link_currency,
    link_amount,
    link_amount_paid,
    link_partial_payments,
    link_minimum_partial_amount,
    link_purpose,
    link_created_at,
    customer_details,
    link_meta,
    link_url,
    link_expiry_time,
    link_notes,
    link_auto_reminders,
    link_notify,
    link_qrcode,
    order_splits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
