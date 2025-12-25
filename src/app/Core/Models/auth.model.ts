import { createMayBeForwardRefExpression } from "@angular/compiler";

export interface User {
  username: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  avatarUrl?: string | null;
  points?: number | null;
  role?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  passwordHash: string;
}

export interface RegisterRequestDto {
  username: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  avatarImage?: File | null;
  passwordHash: string;
}

export interface ApiResponseResgisterDto {
    isSuccess: boolean,
    message: string
}