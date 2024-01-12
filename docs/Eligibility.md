# Eligibility

Method | HTTP request | Description
------------- | ------------- | -------------
[**PGEligibilityFetchCardlessEMI**](Eligibility.md#PGEligibilityFetchCardlessEMI) | **Post** /eligibility/cardlessemi | Get Eligible Cardless EMI
[**PGEligibilityFetchOffers**](Eligibility.md#PGEligibilityFetchOffers) | **Post** /eligibility/offers | Get Eligible Offers
[**PGEligibilityFetchPaylater**](Eligibility.md#PGEligibilityFetchPaylater) | **Post** /eligibility/paylater | Get Eligible Paylater
[**PGEligibilityFetchPaymentMethods**](Eligibility.md#PGEligibilityFetchPaymentMethods) | **Post** /eligibility/payment_methods | Get Eligible Payment Methods



## PGEligibilityFetchCardlessEMI

> PGEligibilityFetchCardlessEMI(x_api_version: string, EligibilityFetchCardlessEMIRequest: EligibilityFetchCardlessEMIRequest, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<EligibilityCardlessEMIEntity[], any>>

[Get Eligible Cardless EMI](https://docs.cashfree.com/reference/pgeligibilityfetchcardlessemi)

### Example

```javascript
const request = {
    "queries": {
      "amount": 10000,
      "customer_details": {
        "customer_phone": "7330797796"
      }
    }
  }
Cashfree.PGEligibilityFetchCardlessEMI("2022-09-01", request).then((response) => {
    console.log('Eligible Cardless EMI fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching Cardless EMI eligibility:', error);
});
```

###  Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**eligibilityFetchCardlessEMIRequest** | [**EligibilityFetchCardlessEMIRequest***](Eligibility.md#EligibilityFetchCardlessEMIRequest) | Request Body to get eligible cardless emi options for a customer and order | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response

```json
[
  {
    "eligibility": true,
    "entity_type": "cardlessemi",
    "entity_value": "idfc",
    "entity_details": {
      "payment_method": "idfc",
      "emi_plans": [
        {
          "tenure": 1,
          "interest_rate": 10,
          "currency": "INR",
          "emi": 400,
          "total_interest": 10,
          "total_amount": 40
        }
      ]
    }
  }
]
```

## PGEligibilityFetchOffers

> PGEligibilityFetchOffers(x_api_version: string, EligibilityFetchOffersRequest: EligibilityFetchOffersRequest, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<EligibilityOfferEntity[], any>>

Get Eligible Offers

### Example

```javascript
const request = {
    "queries": {
      "amount": 1,
    }
  }
Cashfree.PGEligibilityFetchOffers("2022-09-01", request).then((response) => {
    console.log('Eligible Offer Fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching eligible offers:', error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**eligibilityFetchOffersRequest** | [**EligibilityFetchOffersRequest***](EligibilityFetchOffersRequest.md) | Request Body to get eligible offers for a customer and order | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response

```json
[
  {
    eligibility: true,
    entity_type: 'CASHBACK',
    entity_value: '9364f4ba-717f-42b6-884e-bc1fcb03c000',
    entity_details: {
      offer_id: '9364f4ba-717f-42b6-884e-bc1fcb03c000',
      offer_status: 'active',
      offer_meta: [Object],
      offer_tnc: [Object],
      offer_details: [Object],
      offer_validations: [Object]
    }
  },
  {
    eligibility: true,
    entity_type: 'NO_COST_EMI',
    entity_value: '298924aa-2288-4fbb-9c48-35bd55af1b4b',
    entity_details: {
      offer_id: '298924aa-2288-4fbb-9c48-35bd55af1b4b',
      offer_status: 'active',
      offer_meta: [Object],
      offer_tnc: [Object],
      offer_details: [Object],
      offer_validations: [Object]
    }
  },
  {
    eligibility: true,
    entity_type: 'NO_COST_EMI',
    entity_value: 'dacd3ef0-0879-4563-9665-cd95c9af1d32',
    entity_details: {
      offer_id: 'dacd3ef0-0879-4563-9665-cd95c9af1d32',
      offer_status: 'active',
      offer_meta: [Object],
      offer_tnc: [Object],
      offer_details: [Object],
      offer_validations: [Object]
    }
  },
  {
    eligibility: true,
    entity_type: 'NO_COST_EMI',
    entity_value: '58d1a34a-8e77-4b67-973f-44245774ed28',
    entity_details: {
      offer_id: '58d1a34a-8e77-4b67-973f-44245774ed28',
      offer_status: 'active',
      offer_meta: [Object],
      offer_tnc: [Object],
      offer_details: [Object],
      offer_validations: [Object]
    }
  },
  {
    eligibility: true,
    entity_type: 'NO_COST_EMI',
    entity_value: 'ba209d6e-d699-4a78-b98c-04c18979bf70',
    entity_details: {
      offer_id: 'ba209d6e-d699-4a78-b98c-04c18979bf70',
      offer_status: 'active',
      offer_meta: [Object],
      offer_tnc: [Object],
      offer_details: [Object],
      offer_validations: [Object]
    }
  },
  {
    eligibility: true,
    entity_type: 'NO_COST_EMI',
    entity_value: '9b4cdb0e-1f31-4c7b-8bee-6feeae254f84',
    entity_details: {
      offer_id: '9b4cdb0e-1f31-4c7b-8bee-6feeae254f84',
      offer_status: 'active',
      offer_meta: [Object],
      offer_tnc: [Object],
      offer_details: [Object],
      offer_validations: [Object]
    }
  }
]
```


## PGEligibilityFetchPaylater

> PGEligibilityFetchPaylater(x_api_version: string, EligibilityFetchPaylaterRequest: EligibilityFetchPaylaterRequest, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<EligibilityPaylaterEntity[], any>>

Get Eligible Paylater



### Example

```javascript
const request = {
    "queries": {
      "amount": 10,
      "customer_details": {
        "customer_phone": "8908908901"
      }
    }
  }
Cashfree.PGEligibilityFetchPaylater("2022-09-01", request).then((response) => {
    console.log('Eligibility Fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching eligibility:', error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**eligibilityFetchPaylaterRequest** | [**EligibilityFetchPaylaterRequest***](EligibilityFetchPaylaterRequest.md) | Request Body to get eligible paylater options for a customer and order | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response

```json
[
  {
    eligibility: true,
    entity_type: 'paylater',
    entity_value: 'olapostpaid',
    entity_details: { payment_method: 'olapostpaid' }
  }
]
```


## PGEligibilityFetchPaymentMethods

> PGEligibilityFetchPaymentMethods(x_api_version: string, EligibilityFetchPaymentMethodsRequest: EligibilityFetchPaymentMethodsRequest, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<EligibilityPaymentMethodsEntity[], any>>

Get Eligible Payment Methods



### Example

```javascript
const request = {
    "queries": {
      "amount": 1000,
    }
  }
Cashfree.PGEligibilityFetchPaymentMethods("2022-09-01", request).then((response) => {
    console.log('Eligibility Fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching eligibility:', error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**eligibilityFetchPaymentMethodsRequest** | [**EligibilityFetchPaymentMethodsRequest***](EligibilityFetchPaymentMethodsRequest.md) | Request Body to get eligible payment methods for an account and order | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response
```json
[
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'debit_card',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'credit_card',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'prepaid_card',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'upi',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'wallet',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'netbanking',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'banktransfer',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'paylater',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'paypal',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'debit_card_emi',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'credit_card_emi',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'upi_credit_card',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'upi_ppi',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'cardless_emi',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'sbc_debit_card',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'sbc_emandate',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'sbc_upi',
    entity_details: { payment_method_details: [Array] }
  },
  {
    eligibility: true,
    entity_type: 'payment_methods',
    entity_value: 'sbc_credit_card',
    entity_details: { payment_method_details: [Array] }
  }
]
```

