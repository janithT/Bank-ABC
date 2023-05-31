<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TransactionsUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //maximum credit limit to transfer
        $maxCredit = $this->user()->userAccounts->amount;

        return [
            'user_id' => ['required', 'integer'],
            'amount' =>  ['sometimes', 'required', 'numeric'],
            'account_number' => [
                'required',
                'numeric',
                Rule::unique('user_accounts')->ignore($this->user()->id,'user_id')
            ],
            'debtor_comment' => ['required', 'max:15'],
            'beneficiary_name' => ['sometimes', 'required'],
            'beneficiary_comment' => ['sometimes', 'required'],
            'beneficiary_account_number' => [
                'sometimes',
                'required',
                'numeric',
                'exists:user_accounts,account_number',
            ],
            'beneficiary_amount' => ['sometimes', 'required', 'numeric', 'max:'.$maxCredit ],
        ];
    }

    public function messages() 
    {
        return [
            'amount.required' => 'The amount field is required',
            'account_number.required' => 'The account number field is required',
            'comment.required' => 'The debtor comment field is required and valied',
            'beneficiary_name' => 'THe beneficiary account name is required.',
            'beneficiary_account_number.required' => 'The beneficiary account number field is required',
            'beneficiary_account_number.exists' => 'The beneficiary account number does not exists',
        ];
    }
}
