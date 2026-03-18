# SettlementReconEntityDataInnerSettlementDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_settlement_id** | **string** | Unique ID to identify the settlement. | [optional] [default to undefined]
**settlement_date** | **string** | Date and time when the settlement was processed. | [optional] [default to undefined]
**utr** | **string** | Unique transaction reference number of the settlement. | [optional] [default to undefined]
**split_service_charge** | **number** | Service charge that is applicable for splitting the payment. | [optional] [default to undefined]
**split_service_tax** | **number** | Service tax applicable for splitting the amount to vendors. | [optional] [default to undefined]
**vendor_commission** | **number** | Vendor commission applicable for this transaction. | [optional] [default to undefined]
**payment_from** | **string** | Date and time from settlement computed. | [optional] [default to undefined]
**payment_till** | **string** | Date and time till settlement computed. | [optional] [default to undefined]
**reason** | **string** | If any reason for settlement failure. | [optional] [default to undefined]
**remarks** | **string** | Remarks related for settlement. | [optional] [default to undefined]
**service_charge** | **number** | Service charge for the transactions. | [optional] [default to undefined]
**service_tax** | **number** | Service tax for the transactions. | [optional] [default to undefined]
**settlement_charge** | **number** | Settlement Service Charge. | [optional] [default to undefined]
**settlement_initiated_on** | **string** | Date and time when Settlement initiated. | [optional] [default to undefined]
**settlement_tax** | **number** | Settlement Service Tax. | [optional] [default to undefined]
**settlement_type** | **string** | Type of Settlement, Example - Normal Settlement. | [optional] [default to undefined]

## Example

```typescript
import { SettlementReconEntityDataInnerSettlementDetails } from 'cashfree-pg';

const instance: SettlementReconEntityDataInnerSettlementDetails = {
    cf_settlement_id,
    settlement_date,
    utr,
    split_service_charge,
    split_service_tax,
    vendor_commission,
    payment_from,
    payment_till,
    reason,
    remarks,
    service_charge,
    service_tax,
    settlement_charge,
    settlement_initiated_on,
    settlement_tax,
    settlement_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
