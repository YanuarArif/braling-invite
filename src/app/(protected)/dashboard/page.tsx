"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Plus, Settings, Users, BarChart3 } from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-8 w-8 text-pink-500 mx-auto mb-4 animate-pulse" />
          <p>Memuat...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-gray-900">Braling Invite</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Halo, {session.user?.name || session.user?.email}</span>
              <Button variant="outline" onClick={() => signOut()}>
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Selamat datang di Dashboard Anda!
          </h1>
          <p className="text-gray-600">
            Kelola undangan pernikahan digital Anda dengan mudah dan praktis.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Plus className="h-12 w-12 text-pink-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Buat Undangan Baru</CardTitle>
              <CardDescription>
                Mulai membuat undangan pernikahan digital Anda
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Kelola Tamu</CardTitle>
              <CardDescription>
                Atur daftar tamu dan pantau konfirmasi kehadiran
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Statistik</CardTitle>
              <CardDescription>
                Lihat analitik dan laporan undangan Anda
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Settings className="h-12 w-12 text-gray-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Pengaturan</CardTitle>
              <CardDescription>
                Kelola profil dan preferensi akun Anda
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Invitations */}
        <Card>
          <CardHeader>
            <CardTitle>Undangan Terbaru</CardTitle>
            <CardDescription>
              Undangan yang baru-baru ini Anda buat atau edit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Belum ada undangan
              </h3>
              <p className="text-gray-500 mb-6">
                Mulai membuat undangan pernikahan digital pertama Anda sekarang!
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Buat Undangan Pertama
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
