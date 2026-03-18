# ProductConditions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | The Action key in the conditions array specifies whether a condition should \&quot;ALLOW\&quot; or \&quot;DENY\&quot; the specified rule or feature | [optional] [default to undefined]
**key** | **string** | Specify what you\&#39;re trying to configure, such as \&quot;features\&quot; | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | Define the values you need to set within the conditions in this array, such as \&quot;checkoutCollectAddress\&quot;, \&quot;checkoutAuthenticate\&quot; | [optional] [default to undefined]

## Example

```typescript
import { ProductConditions } from 'cashfree-pg';

const instance: ProductConditions = {
    action,
    key,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
