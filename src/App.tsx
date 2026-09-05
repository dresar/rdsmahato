import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import MainLayout from "@/layouts/MainLayout";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";

const Home = lazy(() => import("./pages/Home"));
const Sejarah = lazy(() => import("./pages/Sejarah"));
const VisiMisi = lazy(() => import("./pages/VisiMisi"));
const Organisasi = lazy(() => import("./pages/Organisasi"));
const ProgramPage = lazy(() => import("./pages/ProgramPage"));
const ProgramDetail = lazy(() => import("./pages/ProgramDetail"));
const FasilitasPage = lazy(() => import("./pages/FasilitasPage"));
const FasilitasDetail = lazy(() => import("./pages/FasilitasDetail"));
const JadwalPage = lazy(() => import("./pages/JadwalPage"));
const EkstrakurikulerPage = lazy(() => import("./pages/EkstrakurikulerPage"));
const GaleriPage = lazy(() => import("./pages/GaleriPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const KontakPage = lazy(() => import("./pages/KontakPage"));
const PendaftaranPage = lazy(() => import("./pages/PendaftaranPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const FormPendaftaranPage = lazy(() => import("./pages/FormPendaftaranPage"));
const StatusPendaftaranPage = lazy(() => import("./pages/StatusPendaftaranPage"));
const JadwalSantriPage = lazy(() => import("./pages/JadwalSantriPage"));
const NotifikasiPage = lazy(() => import("./pages/NotifikasiPage"));
const PengaturanPage = lazy(() => import("./pages/PengaturanPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Public Layout */}
              <Route path="/" element={<MainLayout><Home /></MainLayout>} />
              <Route path="/profil/sejarah" element={<MainLayout><Sejarah /></MainLayout>} />
              <Route path="/profil/visi-misi" element={<MainLayout><VisiMisi /></MainLayout>} />
              <Route path="/profil/organisasi" element={<MainLayout><Organisasi /></MainLayout>} />
              <Route path="/program" element={<MainLayout><ProgramPage /></MainLayout>} />
              <Route path="/program/:slug" element={<MainLayout><ProgramDetail /></MainLayout>} />
              <Route path="/fasilitas" element={<MainLayout><FasilitasPage /></MainLayout>} />
              <Route path="/fasilitas/:slug" element={<MainLayout><FasilitasDetail /></MainLayout>} />
              <Route path="/kehidupan-santri/jadwal" element={<MainLayout><JadwalPage /></MainLayout>} />
              <Route path="/kehidupan-santri/ekstrakurikuler" element={<MainLayout><EkstrakurikulerPage /></MainLayout>} />
              <Route path="/galeri" element={<MainLayout><GaleriPage /></MainLayout>} />
              <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
              <Route path="/blog/:slug" element={<MainLayout><BlogDetail /></MainLayout>} />
              <Route path="/kontak" element={<MainLayout><KontakPage /></MainLayout>} />
              <Route path="/pendaftaran" element={<MainLayout><PendaftaranPage /></MainLayout>} />

              {/* Auth Layout (no navbar/footer) */}
              <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
              <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />

              {/* App Layout (sidebar dashboard) */}
              <Route path="/dashboard" element={<AppLayout><DashboardPage /></AppLayout>} />
              <Route path="/app/form-pendaftaran" element={<AppLayout><FormPendaftaranPage /></AppLayout>} />
              <Route path="/app/status" element={<AppLayout><StatusPendaftaranPage /></AppLayout>} />
              <Route path="/app/jadwal" element={<AppLayout><JadwalSantriPage /></AppLayout>} />
              <Route path="/app/notifikasi" element={<AppLayout><NotifikasiPage /></AppLayout>} />
              <Route path="/app/pengaturan" element={<AppLayout><PengaturanPage /></AppLayout>} />
              <Route path="/app/*" element={<AppLayout><DashboardPage /></AppLayout>} />

              <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
