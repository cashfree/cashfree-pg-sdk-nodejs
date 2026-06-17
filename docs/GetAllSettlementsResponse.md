# GetAllSettlementsResponse

Paginated response for Get All Settlements API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Cursor for the next set of settlements. Pass this value in the next API call to fetch the next page. Null if there are no more settlements. | [optional] [default to undefined]
**data** | [**Array&lt;GetAllSettlementsResponseDataInner&gt;**](GetAllSettlementsResponseDataInner.md) |  | [optional] [default to undefined]
**limit** | **number** | Number of settlement records returned in this response. | [optional] [default to undefined]

## Example

```typescript
import { GetAllSettlementsResponse } from 'cashfree-pg';

const instance: GetAllSettlementsResponse = {
    cursor,
    data,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
