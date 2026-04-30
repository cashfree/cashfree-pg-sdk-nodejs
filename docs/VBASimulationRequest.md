# VBASimulationRequest

VBA simulation contains VBA and remitter information for simulation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vba_ifsc** | **string** | IFSC of the issues VBA. | [default to undefined]
**utr** | **string** | UTR of the transaction. | [default to undefined]
**amount** | **number** | Amount of the transaction. | [default to undefined]
**remitter_account** | **string** | Account from which transaction was done. | [default to undefined]
**remitter_ifsc** | **string** | IFSC of the remitter. | [default to undefined]
**remitter_name** | **string** | Name of the remitter. | [default to undefined]
**phone** | **string** | Phone number of the remitter. | [default to undefined]

## Example

```typescript
import { VBASimulationRequest } from 'cashfree-pg';

const instance: VBASimulationRequest = {
    vba_ifsc,
    utr,
    amount,
    remitter_account,
    remitter_ifsc,
    remitter_name,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
