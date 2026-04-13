# AuthorizationInPaymentsEntity

If preauth enabled for account you will get this body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | One of CAPTURE or VOID | [optional] [default to undefined]
**status** | **string** | One of SUCCESS or PENDING | [optional] [default to undefined]
**captured_amount** | **number** | The captured amount for this authorization request | [optional] [default to undefined]
**start_time** | **string** | Start time of this authorization hold (only for UPI) | [optional] [default to undefined]
**end_time** | **string** | End time of this authorization hold (only for UPI) | [optional] [default to undefined]
**approve_by** | **string** | Approve by time as passed in the authorization request (only for UPI) | [optional] [default to undefined]
**action_reference** | **string** | CAPTURE or VOID reference number based on action  | [optional] [default to undefined]
**action_time** | **string** | Time of action (CAPTURE or VOID) | [optional] [default to undefined]

## Example

```typescript
import { AuthorizationInPaymentsEntity } from 'cashfree-pg';

const instance: AuthorizationInPaymentsEntity = {
    action,
    status,
    captured_amount,
    start_time,
    end_time,
    approve_by,
    action_reference,
    action_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
