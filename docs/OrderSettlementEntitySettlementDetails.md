# OrderSettlementEntitySettlementDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_settlement_id** | **string** | Unique ID to identify the settlement. | [optional] [default to undefined]
**status** | **string** | Status of the linked settlement. | [optional] [default to undefined]
**status_description** | **string** | Human-readable description of the settlement status. | [optional] [default to undefined]
**settlement_utr** | **string** | Unique transaction reference number of the settlement. | [optional] [default to undefined]
**settlement_initiated_on** | **string** | Date and time when the settlement was initiated. | [optional] [default to undefined]
**settlement_processed_on** | **string** | Date and time when the settlement was processed. | [optional] [default to undefined]
**settlement_currency** | **string** | Currency of the settlement. | [optional] [default to undefined]
**settlement_type** | **string** | Type of settlement. Example - NORMAL_SETTLEMENT. | [optional] [default to undefined]

## Example

```typescript
import { OrderSettlementEntitySettlementDetails } from 'cashfree-pg';

const instance: OrderSettlementEntitySettlementDetails = {
    cf_settlement_id,
    status,
    status_description,
    settlement_utr,
    settlement_initiated_on,
    settlement_processed_on,
    settlement_currency,
    settlement_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
