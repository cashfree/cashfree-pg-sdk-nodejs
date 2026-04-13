# ESOrderReconRequestFilters

Provide the filter object details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** | Specify the start data from which you want to get the recon data. | [optional] [default to undefined]
**end_date** | **string** | Specify the end data till which you want to get the recon data. | [optional] [default to undefined]
**order_ids** | **Array&lt;string&gt;** | Please provide list of order ids for which you want to get the recon data. | [optional] [default to undefined]

## Example

```typescript
import { ESOrderReconRequestFilters } from 'cashfree-pg';

const instance: ESOrderReconRequestFilters = {
    start_date,
    end_date,
    order_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
