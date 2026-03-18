# ReconEntity

Settlement detailed recon response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Specifies from where the next set of settlement details should be fetched. | [optional] [default to undefined]
**limit** | **number** | Number of settlements you want to fetch in the next iteration. | [optional] [default to undefined]
**data** | [**Array&lt;ReconEntityDataInner&gt;**](ReconEntityDataInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReconEntity } from 'cashfree-pg';

const instance: ReconEntity = {
    cursor,
    limit,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
