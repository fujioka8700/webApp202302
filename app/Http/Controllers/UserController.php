<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class UserController extends Controller
{
  const HEADERS = ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'];

  /**
   * jsonの中身を確認します。
   */
  private function prettyJson(Collection $collection): void
  {
    dd($collection->toJson(JSON_UNESCAPED_UNICODE + JSON_PRETTY_PRINT));
  }

  /**
   * Display a listing of the resource.
   */
  public function index(): JsonResponse
  {
    $users = User::all();

    return response()->json(
      $users,
      200,
      self::HEADERS,
      JSON_UNESCAPED_UNICODE
    );
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request): Response
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id): Response
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id): Response
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id): Response
  {
    //
  }
}
