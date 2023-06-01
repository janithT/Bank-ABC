@extends('layouts.app')

@section('content')
    @component('components.full-page-section')
        @component('components.card')
            <center><b><span class="label">Bank ABC - User Register<span></b></center>
            <hr>

            <form method="POST" action="{{ route('register') }}">
                @csrf

                <div class="field">
                    <label class="label" for="email">{{ __('Name') }}</label>
                    <div class="control">
                        <input id="name"  type="text" class="input @error('name') is-danger @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                    </div>
                    @error('name') 
                        <p class="help is-danger" role="alert">
                            {{ $message }}
                        </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="email">{{ __('E-Mail Address') }}</label>
                    <div class="control">
                        <input id="email" type="email" class="input @error('email') is-danger @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
                    </div>
                    @error('email')
                    <p class="help is-danger" role="alert">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="phone">{{ __('Phone Number') }}</label>
                    <div class="control">
                        <input id="phone" type="number" class="input @error('phone') is-danger @enderror" name="phone" value="{{ $email ?? old('email') }}" required autofocus>
                    </div>
                    @error('phone')
                    <p class="help is-danger" role="alert">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="password">{{ __('Password') }}</label>
                    <div class="control">
                        <input id="password"   type="password" class="input @error('password') is-danger @enderror" name="password" required autocomplete="new-password" autofocus>
                    </div>
                    @error('password')
                    <p class="help is-danger" role="alert">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="password-confirm">{{ __('Confirm Password') }}</label>
                    <div class="control">
                        <input id="password-confirm"   type="password" class="input" name="password_confirmation" required autocomplete="new-password" autofocus>
                    </div>
                </div>

                <div class="field" hidden>
                    <label class="label" for="active-confirm">{{ __('Active') }}</label>
                    <div class="control">
                    <input type="checkbox" class="checkbox" id="active" name="active" value="true">
                    </div>
                </div>

                <hr>

                <div class="field is-form-action-buttons">
                    <button type="submit" class="button is-link is-outlined"  >
                        {{ __('Register') }}
                    </button>

                    <a class="button is-link is-outlined" href="{{ route('login') }}">
                        {{ __('Login') }}
                    </a>
                </div>
            </form>

        @endcomponent
    @endcomponent

@endsection
