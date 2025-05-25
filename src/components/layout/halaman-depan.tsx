import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Sparkles, Users, Zap, CheckCircle, Star } from "lucide-react";

const HalamanDepan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-gray-900">
                Braling Invite
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Masuk</Button>
              </Link>
              <Link href="/register">
                <Button>Daftar Gratis</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Buat Undangan Pernikahan
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {" "}
                Digital Impian Anda
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Platform terdepan untuk membuat undangan pernikahan digital yang
              elegan, interaktif, dan mudah dibagikan. Tanpa ribet, tanpa mahal,
              hasil profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Mulai Gratis Sekarang
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Lihat Contoh Undangan
              </Button>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-pink-500 mx-auto mb-4" />
                  <p className="text-gray-600">Preview Undangan Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Braling Invite?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fitur lengkap yang memudahkan Anda membuat undangan pernikahan
              digital yang memukau
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Mudah & Cepat</CardTitle>
                <CardDescription>
                  Buat undangan hanya dalam 5 menit dengan template siap pakai
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Kelola Tamu</CardTitle>
                <CardDescription>
                  Sistem RSVP otomatis dan manajemen daftar tamu yang praktis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Design Premium</CardTitle>
                <CardDescription>
                  Template eksklusif dengan animasi dan efek visual yang menawan
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hemat Waktu, Hemat Biaya, Hasil Maksimal
              </h2>
              <div className="space-y-4">
                {[
                  "Tidak perlu cetak fisik - ramah lingkungan",
                  "Bagikan via WhatsApp, email, atau media sosial",
                  "Update informasi real-time tanpa cetak ulang",
                  "Tracking konfirmasi kehadiran otomatis",
                  "Galeri foto dan video terintegrasi",
                  "Peta lokasi dan panduan arah",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <p className="text-gray-600">Fitur Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Membuat Undangan Impian Anda?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Bergabung dengan ribuan pasangan yang telah mempercayai Braling
            Invite
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Heart className="mr-2 h-5 w-5" />
              Mulai Buat Undangan Gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold">Braling Invite</span>
              </div>
              <p className="text-gray-400">
                Platform terdepan untuk undangan pernikahan digital di Indonesia
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Template Undangan</li>
                <li>Fitur RSVP</li>
                <li>Galeri Foto</li>
                <li>Live Streaming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Dukungan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pusat Bantuan</li>
                <li>Tutorial</li>
                <li>Kontak Support</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Blog</li>
                <li>Kebijakan Privasi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Braling Invite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HalamanDepan;
