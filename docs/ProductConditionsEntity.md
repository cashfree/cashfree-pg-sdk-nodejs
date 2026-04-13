# ProductConditionsEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | The Action key in the conditions array specifies whether a condition is allowed or denied for the specified rule or feature | [optional] [default to undefined]
**key** | **string** | key of the condition | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | Values set for the condition | [optional] [default to undefined]

## Example

```typescript
import { ProductConditionsEntity } from 'cashfree-pg';

const instance: ProductConditionsEntity = {
    action,
    key,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
