# AddressDetails

Address associated with the customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Full Name of the customer associated with the address. | [optional] [default to undefined]
**address_line_one** | **string** | First line of the address. | [optional] [default to undefined]
**address_line_two** | **string** | Second line of the address. | [optional] [default to undefined]
**country** | **string** | Country Name. | [optional] [default to undefined]
**country_code** | **string** | Country Code. | [optional] [default to undefined]
**state** | **string** | State Name. | [optional] [default to undefined]
**state_code** | **string** | State Code. | [optional] [default to undefined]
**city** | **string** | City Name. | [optional] [default to undefined]
**pin_code** | **string** | Pin Code/Zip Code. | [optional] [default to undefined]
**phone** | **string** | Customer Phone Number. | [optional] [default to undefined]
**email** | **string** | Cutomer Email Address. | [optional] [default to undefined]

## Example

```typescript
import { AddressDetails } from 'cashfree-pg';

const instance: AddressDetails = {
    name,
    address_line_one,
    address_line_two,
    country,
    country_code,
    state,
    state_code,
    city,
    pin_code,
    phone,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
