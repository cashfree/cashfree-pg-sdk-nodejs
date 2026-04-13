# RefundEntity

The refund entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **string** | Cashfree Payments ID of the payment for which refund is initiated | [optional] [default to undefined]
**cf_refund_id** | **string** | Cashfree Payments ID for a refund | [optional] [default to undefined]
**order_id** | **string** | Merchant’s order Id of the order for which refund is initiated | [optional] [default to undefined]
**refund_id** | **string** | Merchant’s refund ID of the refund | [optional] [default to undefined]
**entity** | **string** | Type of object | [optional] [default to undefined]
**refund_amount** | **number** | Amount that is refunded | [optional] [default to undefined]
**refund_currency** | **string** | Currency of the refund amount | [optional] [default to undefined]
**refund_note** | **string** | Note added by merchant for the refund | [optional] [default to undefined]
**refund_status** | **string** | This can be one of [\&quot;SUCCESS\&quot;, \&quot;PENDING\&quot;, \&quot;CANCELLED\&quot;, \&quot;ONHOLD\&quot;, \&quot;FAILED\&quot;] | [optional] [default to undefined]
**refund_arn** | **string** | The bank reference number for refund | [optional] [default to undefined]
**refund_charge** | **number** | Charges in INR for processing refund | [optional] [default to undefined]
**status_description** | **string** | Description of refund status | [optional] [default to undefined]
**metadata** | **object** | Key-value pair that can be used to store additional information about the entity. Maximum 5 key-value pairs | [optional] [default to undefined]
**refund_splits** | [**Array&lt;VendorSplit&gt;**](VendorSplit.md) |  | [optional] [default to undefined]
**refund_type** | **string** | This can be one of [\&quot;PAYMENT_AUTO_REFUND\&quot;, \&quot;MERCHANT_INITIATED\&quot;, \&quot;UNRECONCILED_AUTO_REFUND\&quot;] | [optional] [default to undefined]
**refund_mode** | **string** | Method or speed of processing refund | [optional] [default to undefined]
**created_at** | **string** | Time of refund creation | [optional] [default to undefined]
**processed_at** | **string** | Time when refund was processed successfully | [optional] [default to undefined]
**refund_speed** | [**RefundSpeed**](RefundSpeed.md) |  | [optional] [default to undefined]
**forex_conversion_handling_charge** | **number** | Cashfree forex conversion charges for refund processing | [optional] [default to undefined]
**forex_conversion_handling_tax** | **number** | Cashfree forex conversion tax for refund processing | [optional] [default to undefined]
**forex_conversion_rate** | **number** | Cashfree forex conversion rate for refund processing | [optional] [default to undefined]
**charges_currency** | **string** | Cashfree refund charges currency for a refund | [optional] [default to undefined]

## Example

```typescript
import { RefundEntity } from 'cashfree-pg';

const instance: RefundEntity = {
    cf_payment_id,
    cf_refund_id,
    order_id,
    refund_id,
    entity,
    refund_amount,
    refund_currency,
    refund_note,
    refund_status,
    refund_arn,
    refund_charge,
    status_description,
    metadata,
    refund_splits,
    refund_type,
    refund_mode,
    created_at,
    processed_at,
    refund_speed,
    forex_conversion_handling_charge,
    forex_conversion_handling_tax,
    forex_conversion_rate,
    charges_currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
