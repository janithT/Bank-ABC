<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
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
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'email',
                //'email:rfc,dns',
                Rule::unique('users')->ignore($this->user())
            ],
        ];
    }

    public function messages() 
    {
        return [
            'name.required' => 'The name field is required',
            'email.required' => 'The email field is required and valied',
            'email.email' => 'The email field is required and valied',
        ];
    }
}
