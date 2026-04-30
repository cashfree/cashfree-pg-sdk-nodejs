# VendorReconRequestPagination

The merchant can set pagination limits based on their use case. The minimum limit is 10. Pagination will fetch a set of records, and the next set of records can be generated using the cursor provided in response to the first request for all reconciliation APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Set the minimum or maximum limit for the number of filtered data. Minimum value: 10, Maximum value: 100. | [default to undefined]
**cursor** | **string** | Specifies from where the next set of records should be fetched. | [optional] [default to undefined]

## Example

```typescript
import { VendorReconRequestPagination } from 'cashfree-pg';

const instance: VendorReconRequestPagination = {
    limit,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
