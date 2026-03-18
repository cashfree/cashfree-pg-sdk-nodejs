# ProductDetails

Specify the required configurations for this feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Option to enable or disable the feature | [optional] [default to undefined]
**conditions** | [**Array&lt;ProductConditions&gt;**](ProductConditions.md) | The conditions array allows to configure rules by adding condition objects with specific parameters for feature configurations. | [optional] [default to undefined]

## Example

```typescript
import { ProductDetails } from 'cashfree-pg';

const instance: ProductDetails = {
    enabled,
    conditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
