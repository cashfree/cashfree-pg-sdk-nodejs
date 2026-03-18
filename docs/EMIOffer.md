# EMIOffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of emi offer. Possible values are &#x60;credit_card_emi&#x60;, &#x60;debit_card_emi&#x60;, &#x60;cardless_emi&#x60; | [default to undefined]
**issuer** | **string** | Bank Name | [default to undefined]
**tenures** | **Array&lt;number&gt;** |  | [default to undefined]

## Example

```typescript
import { EMIOffer } from 'cashfree-pg';

const instance: EMIOffer = {
    type,
    issuer,
    tenures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
