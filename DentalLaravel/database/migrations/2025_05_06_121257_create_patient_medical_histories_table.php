<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patient_medical_histories', function (Blueprint $table) {
            $table->id();
            // Foreign Key (links to patients in users table)
            $table->foreignId('patient_id')->constrained('users')->onDelete('cascade');
            // Medical Information
            $table->text('allergies')->nullable();       // e.g., "Penicillin, Latex"
            $table->text('conditions')->nullable();      // e.g., "Diabetes, Hypertension"
            $table->text('previous_treatments')->nullable(); // e.g., "Root canal (2023), Braces (2020)"
            $table->text('notes')->nullable();           // Additional clinical notes
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_medical_histories');
    }
};
