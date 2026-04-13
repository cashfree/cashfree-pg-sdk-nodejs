# UpdateTerminalRequest

Request body to update terminal details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminal_email** | **string** | Mention the updated email ID of the terminal. | [optional] [default to undefined]
**terminal_phone_no** | **string** | Terminal phone number to be updated. | [optional] [default to undefined]
**terminal_meta** | [**UpdateTerminalRequestTerminalMeta**](UpdateTerminalRequestTerminalMeta.md) |  | [optional] [default to undefined]
**terminal_type** | **string** | Mention the terminal type to be updated. Possible values - AGENT, STOREFRONT. | [default to undefined]

## Example

```typescript
import { UpdateTerminalRequest } from 'cashfree-pg';

const instance: UpdateTerminalRequest = {
    terminal_email,
    terminal_phone_no,
    terminal_meta,
    terminal_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
