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
      ->count(10)
      ->create();
  }

  /**
   * A basic feature test example.
   */
  public function test_user_list(): void
  {
    $response = $this->getJson('/api/users');

    $response->assertStatus(200);
  }

  public function test_one_user(): void
  {
    $user = User::first();

    $response = $this->getJson("/api/users/{$user->id}");

    $response->assertStatus(200);
  }
}
