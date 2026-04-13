# FetchReconRequestPagination

To fetch the next set of settlements, pass the cursor received in the response to the next API call.   To receive the data for the first time, pass the cursor as null.   Limit would be number of settlements that you want to receive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Number of settlements you want to fetch in the next iteration. Maximum limit is 1000, default value is 10. | [default to undefined]
**cursor** | **string** | Specifies from where the next set of settlement details should be fetched. | [optional] [default to undefined]

## Example

```typescript
import { FetchReconRequestPagination } from 'cashfree-pg';

const instance: FetchReconRequestPagination = {
    limit,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
