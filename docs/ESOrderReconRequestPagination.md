# ESOrderReconRequestPagination

Set limit based on your requirement. Pagination limit will fetch a set of orders, next set of orders can be generated using the cursor shared in previous response of the same API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** |  | [optional] [default to undefined]
**limit** | **number** | Set the minimum/maximum limit for number of filtered data. Min value - 10, Max value - 100. | [optional] [default to undefined]

## Example

```typescript
import { ESOrderReconRequestPagination } from 'cashfree-pg';

const instance: ESOrderReconRequestPagination = {
    cursor,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
