# GetAllTerminalTransactionRequest

Request body for retrieving terminal payment transactions. Include filtering and pagination options to customise the results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**TerminalFilters**](TerminalFilters.md) |  | [optional] [default to undefined]
**pagination** | [**TerminalPagination**](TerminalPagination.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetAllTerminalTransactionRequest } from 'cashfree-pg';

const instance: GetAllTerminalTransactionRequest = {
    filter,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
