import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import type { DataModel } from "./_generated/dataModel.js";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password<DataModel>({
      // Tanpa profile() ini, field "name" yang dikirim form daftar (lihat
      // src/components/ui/signin.tsx) DIAM-DIAM DIBUANG oleh provider —
      // defaultnya cuma menyimpan email. Ini penyebab nama lengkap selalu
      // kosong di halaman profil walau sudah diisi saat daftar.
      profile(params) {
        return {
          email: params.email as string,
          name: params.name as string,
        };
      },
    }),
  ],
});
