# ProductDetailsEntity

Configurations for this feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the feature has been enabled for this order | [optional] [default to undefined]
**conditions** | [**Array&lt;ProductConditionsEntity&gt;**](ProductConditionsEntity.md) | Configured condtions for the feature | [optional] [default to undefined]

## Example

```typescript
import { ProductDetailsEntity } from 'cashfree-pg';

const instance: ProductDetailsEntity = {
    enabled,
    conditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
