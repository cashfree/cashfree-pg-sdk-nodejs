# TerminalPagination

Use this object to configure pagination for terminal transaction results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_number** | **number** | Page number for the requested results. Default value is 1. | [optional] [default to undefined]
**page_size** | **number** | Number of transactions to return per page. Default value is 25. | [optional] [default to undefined]

## Example

```typescript
import { TerminalPagination } from 'cashfree-pg';

const instance: TerminalPagination = {
    page_number,
    page_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
