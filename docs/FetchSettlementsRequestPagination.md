# FetchSettlementsRequestPagination

To fetch the next set of settlements, pass the cursor received in the response to the next API call.   To receive the data for the first time, pass the cursor as null.   Limit would be number of settlements that you want to receive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | The number of settlements you want to fetch. Maximum limit is 1000, default value is 10. | [default to undefined]
**cursor** | **string** | Specifies from where the next set of settlement details should be fetched. | [optional] [default to undefined]

## Example

```typescript
import { FetchSettlementsRequestPagination } from 'cashfree-pg';

const instance: FetchSettlementsRequestPagination = {
    limit,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
