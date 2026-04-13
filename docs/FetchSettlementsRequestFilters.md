# FetchSettlementsRequestFilters

Specify either the Settlement ID, Settlement UTR, or start date and end date to fetch the settlement details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_settlement_ids** | **Array&lt;string&gt;** | List of settlement IDs for which you want the settlement reconciliation details. | [optional] [default to undefined]
**settlement_utrs** | **Array&lt;string&gt;** | List of settlement UTRs for which you want the settlement reconciliation details. | [optional] [default to undefined]
**start_date** | **string** | Specify the start date from when you want the settlement reconciliation details. | [optional] [default to undefined]
**end_date** | **string** | Specify the end date till when you want the settlement reconciliation details. | [optional] [default to undefined]

## Example

```typescript
import { FetchSettlementsRequestFilters } from 'cashfree-pg';

const instance: FetchSettlementsRequestFilters = {
    cf_settlement_ids,
    settlement_utrs,
    start_date,
    end_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
