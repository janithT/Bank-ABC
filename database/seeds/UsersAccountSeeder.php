<?php

use Illuminate\Database\Seeder;

class UsersAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\UserAccount::firstOrCreate([
            'user_id' => '1',
            'account_number' => '1234567890',
            'amount' => '100'
        ]);

        \App\UserAccount::firstOrCreate([
            'user_id' => '2',
            'account_number' => '0987654321',
            'amount' => '100'
        ]);
    }
}
