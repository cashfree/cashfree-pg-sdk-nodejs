# CreateTerminalRequest

Request body to create a terminal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminal_id** | **string** | merchant’s internal terminal id | [default to undefined]
**terminal_phone_no** | **string** | phone number assigned to the terminal | [default to undefined]
**terminal_name** | **string** | terminal name to be assigned by merchants | [default to undefined]
**terminal_address** | **string** | address of the terminal. required for STOREFRONT | [optional] [default to undefined]
**terminal_email** | **string** | terminal email ID of the AGENT/STOREFRONT assigned by merchants. | [default to undefined]
**terminal_note** | **string** | additional note for terminal | [optional] [default to undefined]
**terminal_type** | **string** | mention the terminal type. possible values - AGENT, STOREFRONT. | [default to undefined]
**terminal_meta** | [**CreateTerminalRequestTerminalMeta**](CreateTerminalRequestTerminalMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateTerminalRequest } from 'cashfree-pg';

const instance: CreateTerminalRequest = {
    terminal_id,
    terminal_phone_no,
    terminal_name,
    terminal_address,
    terminal_email,
    terminal_note,
    terminal_type,
    terminal_meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
