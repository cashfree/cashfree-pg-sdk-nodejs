# Netbanking

Netbanking payment method request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | The channel for netbanking will always be &#x60;link&#x60; | [default to undefined]
**netbanking_bank_code** | **number** | Bank code | [optional] [default to undefined]
**netbanking_bank_name** | **string** | String code for bank | [optional] [default to undefined]

## Example

```typescript
import { Netbanking } from 'cashfree-pg';

const instance: Netbanking = {
    channel,
    netbanking_bank_code,
    netbanking_bank_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
