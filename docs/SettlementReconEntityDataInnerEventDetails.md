# SettlementReconEntityDataInnerEventDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **string** | Unique ID associated with the event. | [optional] [default to undefined]
**event_type** | **string** | The event type can be PAYMENT, REFUND, REFUND_REVERSAL, DISPUTE, DISPUTE_REVERSAL, CHARGEBACK, CHARGEBACK_REVERSAL, OTHER_ADJUSTMENT. | [optional] [default to undefined]
**event_settlement_amount** | **number** | Amount that is part of the settlement corresponding to the event. | [optional] [default to undefined]
**event_amount** | **number** | Amount corresponding to the event. Example, refund amount, dispute amount, payment amount, etc. | [optional] [default to undefined]
**sale_type** | **string** | Indicates if it is CREDIT/DEBIT sale. | [optional] [default to undefined]
**event_status** | **string** | Status of the event. Example - SUCCESS, FAILED, PENDING, CANCELLED. | [optional] [default to undefined]
**entity** | **string** | Recon | [optional] [default to undefined]
**event_time** | **string** | Time associated with the event. Example, transaction time, dispute initiation time | [optional] [default to undefined]
**event_currency** | **string** | Curreny type - INR. | [optional] [default to undefined]
**event_service_charge** | **number** | Service charge for above event_type. | [optional] [default to undefined]
**event_service_tax** | **number** | Service tax for above event_type. | [optional] [default to undefined]
**event_remarks** | **number** | Remarks for above event_type. | [optional] [default to undefined]

## Example

```typescript
import { SettlementReconEntityDataInnerEventDetails } from 'cashfree-pg';

const instance: SettlementReconEntityDataInnerEventDetails = {
    event_id,
    event_type,
    event_settlement_amount,
    event_amount,
    sale_type,
    event_status,
    entity,
    event_time,
    event_currency,
    event_service_charge,
    event_service_tax,
    event_remarks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
