# PlanEntity

The response returned for Get, Create and Manage Plan APIs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_currency** | **string** | Currency for the plan. | [optional] [default to undefined]
**plan_id** | **string** | Plan ID provided by merchant. | [optional] [default to undefined]
**plan_interval_type** | **string** | Interval type for the plan. | [optional] [default to undefined]
**plan_intervals** | **number** | Number of intervals for the plan. | [optional] [default to undefined]
**plan_max_amount** | **number** | Maximum amount for the plan. | [optional] [default to undefined]
**plan_max_cycles** | **number** | Maximum number of payment cycles for the plan. | [optional] [default to undefined]
**plan_name** | **string** | Name of the plan. | [optional] [default to undefined]
**plan_note** | **string** | Note for the plan. | [optional] [default to undefined]
**plan_recurring_amount** | **number** | Recurring amount for the plan. | [optional] [default to undefined]
**plan_status** | **string** | Status of the plan. | [optional] [default to undefined]
**plan_type** | **string** | Type of the plan. | [optional] [default to undefined]

## Example

```typescript
import { PlanEntity } from 'cashfree-pg';

const instance: PlanEntity = {
    plan_currency,
    plan_id,
    plan_interval_type,
    plan_intervals,
    plan_max_amount,
    plan_max_cycles,
    plan_name,
    plan_note,
    plan_recurring_amount,
    plan_status,
    plan_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
