# SettlementFetchReconRequestFilters

Specify either the Settlement ID, Settlement UTR, or date range filters to fetch the settlement details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_settlement_ids** | **Array&lt;number&gt;** | List of settlement IDs for which you want the settlement reconciliation details. | [optional] [default to undefined]
**settlement_utrs** | **Array&lt;string&gt;** | List of settlement UTRs for which you want the settlement reconciliation details. | [optional] [default to undefined]
**start_date_initiated_on** | **string** | Filter events by settlement initiation start date. Use ISO8601 format. | [optional] [default to undefined]
**end_date_initiated_on** | **string** | Filter events by settlement initiation end date. Use ISO8601 format. | [optional] [default to undefined]
**start_date_processed_on** | **string** | Filter events by settlement processed start date. Use ISO8601 format. | [optional] [default to undefined]
**end_date_processed_on** | **string** | Filter events by settlement processed end date. Use ISO8601 format. | [optional] [default to undefined]
**start_date** | **string** | Deprecated: Use start_date_initiated_on or start_date_processed_on instead. Specify the start date from when you want the settlement reconciliation details. | [optional] [default to undefined]
**end_date** | **string** | Deprecated: Use end_date_initiated_on or end_date_processed_on instead. Specify the end date till when you want the settlement reconciliation details. | [optional] [default to undefined]

## Example

```typescript
import { SettlementFetchReconRequestFilters } from 'cashfree-pg';

const instance: SettlementFetchReconRequestFilters = {
    cf_settlement_ids,
    settlement_utrs,
    start_date_initiated_on,
    end_date_initiated_on,
    start_date_processed_on,
    end_date_processed_on,
    start_date,
    end_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
