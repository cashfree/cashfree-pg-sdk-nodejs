# CreatePlanRequest

Request body to create a plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **string** | Unique ID to identify the plan. Only alpha-numerics, dot, hyphen and underscore allowed. | [default to undefined]
**plan_name** | **string** | Name of the plan. | [default to undefined]
**plan_type** | **string** | Type of the plan. Possible values - PERIODIC, ON_DEMAND. | [default to undefined]
**plan_currency** | **string** | Currency of the plan. | [optional] [default to undefined]
**plan_recurring_amount** | **number** | Recurring amount for the plan. Required for PERIODIC plan_type. | [optional] [default to undefined]
**plan_max_amount** | **number** | Maximum amount for the plan. | [default to undefined]
**plan_max_cycles** | **number** | Maximum number of payment cycles for the plan. | [optional] [default to undefined]
**plan_intervals** | **number** | Number of billing cycles between charges. For instance, if set to 2 and the interval type is \&#39;week\&#39;, the service will be billed every 2 weeks. Similarly, if set to 3 and the interval type is \&#39;month\&#39;, the service will be billed every 3 months. Required for PERIODIC plan_type. | [optional] [default to undefined]
**plan_interval_type** | **string** | Interval type for the plan. Possible values - DAY, WEEK, MONTH, YEAR. | [optional] [default to undefined]
**plan_note** | **string** | Note for the plan. | [optional] [default to undefined]

## Example

```typescript
import { CreatePlanRequest } from 'cashfree-pg';

const instance: CreatePlanRequest = {
    plan_id,
    plan_name,
    plan_type,
    plan_currency,
    plan_recurring_amount,
    plan_max_amount,
    plan_max_cycles,
    plan_intervals,
    plan_interval_type,
    plan_note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
