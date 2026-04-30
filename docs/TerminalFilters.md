# TerminalFilters

Use this object to filter terminal transactions based on various criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **string** | Start date and time for transaction filtering. Use ISO8601 format  (example: 2021-07-02T10:20:12+05:30 for IST, 2021-07-02T10:20:12Z for UTC). | [optional] [default to undefined]
**end_date** | **string** | End date and time for transaction filtering. Use ISO8601 format  (example: 2021-07-02T10:20:12+05:30 for IST, 2021-07-02T10:20:12Z for UTC). | [optional] [default to undefined]
**cf_terminal_id** | **number** | Unique Cashfree terminal identifier. | [optional] [default to undefined]
**terminal_vpa** | **string** | Virtual payment address (VPA) associated with the terminal. | [optional] [default to undefined]
**terminal_phone_no** | **string** | Mobile phone number registered with the terminal. | [optional] [default to undefined]
**payment_status** | **string** | Payment transaction status. Possible values are SUCCESS, FAILED, or PENDING. | [optional] [default to undefined]
**payment_group** | **string** | Payment method group (for example, UPI, CARD, NET_BANKING). | [optional] [default to undefined]
**sort_by** | **string** | Field to sort results by. Currently supports sorting by start_date. | [optional] [default to undefined]
**sort_order** | **string** | Sort order for the results. Use ASC for ascending or DESC for descending order. | [optional] [default to undefined]

## Example

```typescript
import { TerminalFilters } from 'cashfree-pg';

const instance: TerminalFilters = {
    start_date,
    end_date,
    cf_terminal_id,
    terminal_vpa,
    terminal_phone_no,
    payment_status,
    payment_group,
    sort_by,
    sort_order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
