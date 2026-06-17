# GetAllSettlementsResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_settlement_id** | **string** | Unique ID to identify the settlement. | [optional] [default to undefined]
**status** | **string** | Status of the settlement. | [optional] [default to undefined]
**status_description** | **string** | Human-readable description of the settlement status. | [optional] [default to undefined]
**settlement_utr** | **string** | Unique transaction reference number of the settlement. | [optional] [default to undefined]
**payment_from** | **string** | Start of the payment period included in this settlement. | [optional] [default to undefined]
**payment_till** | **string** | End of the payment period included in this settlement. | [optional] [default to undefined]
**settlement_initiated_on** | **string** | Date and time when the settlement was initiated. | [optional] [default to undefined]
**settlement_processed_on** | **string** | Date and time when the settlement was processed. | [optional] [default to undefined]
**payment_amount** | **number** | Net amount of transactions that was a part of this settlement. | [optional] [default to 0.0]
**pg_service_charge** | **number** | PG service charges that were deducted in this settlement. | [optional] [default to 0.0]
**pg_service_tax** | **number** | PG service taxes that were deducted in this settlement. | [optional] [default to 0.0]
**adjustment** | **number** | Adjustments that were a part of this settlement. | [optional] [default to 0.0]
**settlement_charge** | **number** | Settlement charges that were deducted in this settlement. | [optional] [default to 0.0]
**settlement_tax** | **number** | Settlement taxes that were deducted in this settlement. | [optional] [default to 0.0]
**split_service_charge** | **number** | Split service charges that were deducted in this settlement. | [optional] [default to 0.0]
**split_service_tax** | **number** | Split service taxes that were deducted in this settlement. | [optional] [default to 0.0]
**vendor_commission** | **number** | Vendor commission/split that was deducted in this settlement. | [optional] [default to 0.0]
**amount_settled** | **number** | Amount that was settled to the merchant\&#39;s bank account. | [optional] [default to 0.0]
**charge_type** | **string** | Indicates how Cashfree\&#39;s service charges are applied for this settlement. | [optional] [default to undefined]
**settlement_type** | **string** | Type of settlement. Example - NORMAL_SETTLEMENT. | [optional] [default to undefined]

## Example

```typescript
import { GetAllSettlementsResponseDataInner } from 'cashfree-pg';

const instance: GetAllSettlementsResponseDataInner = {
    cf_settlement_id,
    status,
    status_description,
    settlement_utr,
    payment_from,
    payment_till,
    settlement_initiated_on,
    settlement_processed_on,
    payment_amount,
    pg_service_charge,
    pg_service_tax,
    adjustment,
    settlement_charge,
    settlement_tax,
    split_service_charge,
    split_service_tax,
    vendor_commission,
    amount_settled,
    charge_type,
    settlement_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
