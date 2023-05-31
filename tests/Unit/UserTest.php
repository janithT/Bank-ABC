<?php

namespace Tests\Unit;

use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic unit test user login example.
     *
     * @test
     * 
     * @return void
     */
    public function test_user_login_Example()
    {
  
        $loginData = ['email' => 'user@example.com', 'password' => '123123123'];

        $this->call('POST', '/login', $loginData, ['Accept' => 'application/json'])
            ->assertStatus(302);

        $this->assertAuthenticated();
        
    }

        /**
     * A basic unit test user login example.
     *
     * @test
     * 
     * @return void
     */
    public function test_user_login_success_and_redirect_Example()
    {
       $payload = ['email' => 'user@example.com', 'password' => '123123123'];

        $this->call('POST', '/login', $payload)
            ->assertStatus(302)
            ->assertRedirect('/home');
        
    }

    /**
     * A basic unit test user register example.
     *
     * @test
     * 
     * @return void
     */
    public function test_user_register_Example()
    {
        $this->withoutMiddleware();
        $response = $this->call('POST', '/register', [
            'name' => 'usr name',
            'email' => 'user@example.com',
            'phone' => '1111111111',
            'password' => '123123123',
            'password_confirmation' => '123123123',
            'active' => true
        ]);
      
        
        $response->assertStatus(302);
        
        //$this->assertTrue(true);
    }

    /**
     * A basic unit test user register example.
     *
     * @test
     * 
     * @return void
     */
    public function test_user_show_Example()
    {
        $response = $this->get('/user');
        
        $response->assertStatus(302);
        //$this->assertTrue(true);
    }
}
