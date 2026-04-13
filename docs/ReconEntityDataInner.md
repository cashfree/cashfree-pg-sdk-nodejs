# ReconEntityDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **string** | Unique ID associated with the event. | [optional] [default to undefined]
**event_type** | **string** | The event type can be SETTLEMENT, PAYMENT, REFUND, REFUND_REVERSAL, DISPUTE, DISPUTE_REVERSAL, CHARGEBACK, CHARGEBACK_REVERSAL, OTHER_ADJUSTMENT. | [optional] [default to undefined]
**event_settlement_amount** | **number** | Amount that is part of the settlement corresponding to the event. | [optional] [default to undefined]
**event_amount** | **number** | Amount of the event. Example, refund amount, dispute amount, payment amount, etc. | [optional] [default to undefined]
**sale_type** | **string** | Indicates if it is CREDIT/DEBIT sale. | [optional] [default to undefined]
**event_status** | **string** | Status of the event. Example - SUCCESS, FAILED, PENDING, CANCELLED. | [optional] [default to undefined]
**entity** | **string** | Recon | [optional] [default to undefined]
**event_time** | **string** | Time associated with the event. Example, transaction time, dispute initiation time | [optional] [default to undefined]
**event_currency** | **string** | Curreny type - INR. | [optional] [default to undefined]
**order_id** | **string** | Unique order ID. Alphanumeric and only \&#39;-\&#39; and \&#39;_\&#39; allowed. | [optional] [default to undefined]
**order_amount** | **number** | The amount which was passed at the order creation time. | [optional] [default to undefined]
**customer_phone** | **string** | Customer phone number. | [optional] [default to undefined]
**customer_email** | **string** | Customer email. | [optional] [default to undefined]
**customer_name** | **string** | Customer name. | [optional] [default to undefined]
**payment_amount** | **number** | Payment amount captured. | [optional] [default to undefined]
**payment_utr** | **string** | Unique transaction reference number of the payment. | [optional] [default to undefined]
**payment_time** | **string** | Date and time when the payment was initiated. | [optional] [default to undefined]
**payment_service_charge** | **number** | Service charge applicable for the payment. | [optional] [default to undefined]
**payment_service_tax** | **number** | Service tax applicable on the payment. | [optional] [default to undefined]
**cf_payment_id** | **string** | Cashfree Payments unique ID to identify a payment. | [optional] [default to undefined]
**cf_settlement_id** | **string** | Unique ID to identify the settlement. | [optional] [default to undefined]
**settlement_date** | **string** | Date and time when the settlement was processed. | [optional] [default to undefined]
**settlement_utr** | **string** | Unique transaction reference number of the settlement. | [optional] [default to undefined]
**split_service_charge** | **number** | Service charge that is applicable for splitting the payment. | [optional] [default to undefined]
**split_service_tax** | **number** | Service tax applicable for splitting the amount to vendors. | [optional] [default to undefined]
**vendor_commission** | **number** | Vendor commission applicable for this transaction. | [optional] [default to undefined]
**closed_in_favor_of** | **string** | Specifies whether the dispute was closed in favor of the merchant or customer. /n Possible values - Merchant, Customer | [optional] [default to undefined]
**dispute_resolved_on** | **string** | Date and time when the dispute was resolved. | [optional] [default to undefined]
**dispute_category** | **string** | Category of the dispute - Dispute code and the reason for dispute is shown. | [optional] [default to undefined]
**dispute_note** | **string** | Note regarding the dispute. | [optional] [default to undefined]
**refund_processed_at** | **string** | Date and time when the refund was processed. | [optional] [default to undefined]
**refund_arn** | **string** | The bank reference number for the refund. | [optional] [default to undefined]
**refund_note** | **string** | A refund note for your reference. | [optional] [default to undefined]
**refund_id** | **string** | An unique ID to associate the refund with. | [optional] [default to undefined]
**adjustment_remarks** | **string** | Other adjustment remarks. | [optional] [default to undefined]
**adjustment** | **number** | Amount that is adjusted from the settlement amount because of any credit/debit event such as refund, refund_reverse etc. | [optional] [default to undefined]
**service_tax** | **number** | Service tax applicable on the settlement amount. | [optional] [default to undefined]
**service_charge** | **number** | Service charge applicable on the settlement amount. | [optional] [default to undefined]
**amount_settled** | **number** | Net amount that is settled after considering the adjustments, settlement charge and tax. | [optional] [default to undefined]
**payment_from** | **string** | The start time of the time range of the payments considered for the settlement. | [optional] [default to undefined]
**payment_till** | **string** | The end time of time range of the payments considered for the settlement. | [optional] [default to undefined]
**reason** | **string** | Reason for settlement failure. | [optional] [default to undefined]
**settlement_initiated_on** | **string** | Date and time when the settlement was initiated. | [optional] [default to undefined]
**settlement_type** | **string** | Type of settlement. Possible values - Standard, Instant, On demand. | [optional] [default to undefined]
**settlement_charge** | **number** | Settlement charges applicable on the settlement. | [optional] [default to undefined]
**settlement_tax** | **number** | Settlement tax applicable on the settlement. | [optional] [default to undefined]
**remarks** | **string** | Remarks on the settlement. | [optional] [default to undefined]
**forex_conversion_handling_charge** | **number** | Cashfree forex conversion charges for processing transaction | [optional] [default to undefined]
**forex_conversion_handling_tax** | **number** | Cashfree forex conversion tax for processing transaction | [optional] [default to undefined]
**charges_currency** | **string** | Cashfree charges currency for a event type | [optional] [default to undefined]

## Example

```typescript
import { ReconEntityDataInner } from 'cashfree-pg';

const instance: ReconEntityDataInner = {
    event_id,
    event_type,
    event_settlement_amount,
    event_amount,
    sale_type,
    event_status,
    entity,
    event_time,
    event_currency,
    order_id,
    order_amount,
    customer_phone,
    customer_email,
    customer_name,
    payment_amount,
    payment_utr,
    payment_time,
    payment_service_charge,
    payment_service_tax,
    cf_payment_id,
    cf_settlement_id,
    settlement_date,
    settlement_utr,
    split_service_charge,
    split_service_tax,
    vendor_commission,
    closed_in_favor_of,
    dispute_resolved_on,
    dispute_category,
    dispute_note,
    refund_processed_at,
    refund_arn,
    refund_note,
    refund_id,
    adjustment_remarks,
    adjustment,
    service_tax,
    service_charge,
    amount_settled,
    payment_from,
    payment_till,
    reason,
    settlement_initiated_on,
    settlement_type,
    settlement_charge,
    settlement_tax,
    remarks,
    forex_conversion_handling_charge,
    forex_conversion_handling_tax,
    charges_currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
