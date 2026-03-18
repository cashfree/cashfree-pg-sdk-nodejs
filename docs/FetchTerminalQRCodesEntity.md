# FetchTerminalQRCodesEntity

Fetch Static QR Codes using terminal ID or phone number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank** | **string** | Name of the bank that is linked to the Static QR. | [optional] [default to undefined]
**qrCode** | **string** | Base-64 Encoded QR Code URL | [optional] [default to undefined]
**qrCodeUrl** | **string** | URL of the qr Code. | [optional] [default to undefined]
**status** | **string** | Status of the static QR. | [optional] [default to undefined]

## Example

```typescript
import { FetchTerminalQRCodesEntity } from 'cashfree-pg';

const instance: FetchTerminalQRCodesEntity = {
    bank,
    qrCode,
    qrCodeUrl,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
