<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'max:10', 'min:10', 'numeric'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'The name field is required',
            'email.required' => 'The email field is required and valied',
            'email.unique' => 'The email field is already exists',
            'phone.required' => 'The phone field is required'
        ];
    }
}
