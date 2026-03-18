# App

App payment method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Specify the channel through which the payment must be processed. | [default to undefined]
**provider** | **string** | Specify the provider through which the payment must be processed. | [default to undefined]
**phone** | **string** | Customer phone number associated with a wallet for payment. | [default to undefined]

## Example

```typescript
import { App } from 'cashfree-pg';

const instance: App = {
    channel,
    provider,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
