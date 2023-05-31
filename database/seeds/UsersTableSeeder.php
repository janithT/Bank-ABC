<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::firstOrCreate([
            'name' => 'Jhon Doe',
            'email' => 'jhon@testemail.com',
            'phone' => '0912222222',
            'password' => bcrypt('123123'),
            'active' => 1   
        ]);

        \App\User::firstOrCreate([
            'name' => 'Sam Doe',
            'email' => 'sam@testemail.com',
            'phone' => '0912222233',
            'password' => bcrypt('123123'),
            'active' => 1   
        ]);
    }
}
