<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
  use RefreshDatabase;

  public function setUp(): void
  {
    parent::setUp();

    User::factory()
      ->count(1)
      ->create();
  }

  /**
   * A basic feature test example.
   */
  public function test_example(): void
  {
    $response = $this->getJson('/api/users');

    $response->assertStatus(200);
  }
}
