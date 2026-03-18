# TerminalDetails

Use this if you are creating an order for cashfree\'s softPOS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_on** | **string** | date time at which terminal is added | [optional] [default to undefined]
**cf_terminal_id** | **string** | Cashfree terminal id, this is a required parameter when you do not provide the terminal phone number. | [optional] [default to undefined]
**last_updated_on** | **string** | last instant when this terminal was updated | [optional] [default to undefined]
**terminal_address** | **string** | location of terminal | [optional] [default to undefined]
**terminal_id** | **string** | terminal id for merchant reference | [optional] [default to undefined]
**terminal_name** | **string** | name of terminal/agent/storefront | [optional] [default to undefined]
**terminal_note** | **string** | note given by merchant while creating the terminal | [optional] [default to undefined]
**terminal_phone_no** | **string** | mobile num of the terminal/agent/storefront,This is a required parameter when you do not provide the cf_terminal_id. | [optional] [default to undefined]
**terminal_status** | **string** | status of terminal active/inactive | [optional] [default to undefined]
**terminal_type** | **string** | To identify the type of terminal product in use, in this case it is SPOS. | [default to undefined]

## Example

```typescript
import { TerminalDetails } from 'cashfree-pg';

const instance: TerminalDetails = {
    added_on,
    cf_terminal_id,
    last_updated_on,
    terminal_address,
    terminal_id,
    terminal_name,
    terminal_note,
    terminal_phone_no,
    terminal_status,
    terminal_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
