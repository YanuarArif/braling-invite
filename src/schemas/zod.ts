import { z } from "zod";

// Login schema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email harus diisi")
    .email("Format email tidak valid"),
  password: z.string().min(1, "Password harus diisi"),
});

// Register schema
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nama lengkap harus diisi")
      .min(2, "Nama minimal 2 karakter")
      .max(50, "Nama maksimal 50 karakter"),
    email: z
      .string()
      .min(1, "Email harus diisi")
      .email("Format email tidak valid"),
    password: z
      .string()
      .min(1, "Password harus diisi")
      .min(6, "Password minimal 6 karakter")
      .max(100, "Password maksimal 100 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi password harus diisi"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "Anda harus menyetujui syarat dan ketentuan",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
