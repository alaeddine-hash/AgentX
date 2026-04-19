import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-surface text-on-surface font-body min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
      <!-- Ambient Background Elements -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
        <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]"></div>
        <div class="scanlines fixed inset-0 pointer-events-none opacity-20 z-0"></div>
      </div>

      <!-- Tactical HUD Overlay (Top Left) -->
      <div class="absolute top-8 left-8 flex flex-col gap-1 pointer-events-none hidden md:flex z-10">
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
          <span class="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">Uplink Secured</span>
        </div>
        <span class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">Node: AX-77.92.1</span>
      </div>

      <!-- Main Authentication Container -->
      <main class="w-full max-w-[420px] px-6 z-10 relative">
        <!-- Header Section -->
        <header class="mb-12">
          <h1 class="serif-display text-7xl text-on-surface tracking-tighter mb-4 flex items-baseline leading-[0.85]">
            AgentX<span class="text-primary text-6xl font-sans">.</span>
          </h1>
          <p class="sans-detail text-on-surface-variant/70 border-l border-primary/50 pl-4 py-1">
            Secure Terminal Access
          </p>
        </header>

        <!-- Login Form -->
        <form class="flex flex-col gap-6" (submit)="login($event)">
          <!-- Operative ID Field -->
          <div class="group relative flex flex-col gap-2">
             <div class="flex justify-between items-end">
                <label class="font-label text-[11px] uppercase tracking-widest text-on-surface-variant group-focus-within:text-secondary transition-colors duration-300" for="operativePath">
                    Operative ID
                </label>
                <span class="font-label text-[9px] uppercase tracking-[0.2em] text-secondary opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 font-bold">
                    <span class="material-symbols-outlined text-[10px] icon-fill">check_circle</span>
                    Tracking
                </span>
             </div>
             <div class="relative bg-surface-container-highest rounded-md overflow-hidden ghost-border focus-within:border-secondary focus-within:shadow-[0_0_15px_rgba(78,222,163,0.15)] transition-all">
                <input type="text" id="operativePath" placeholder="AX-8921" required
                       class="w-full bg-transparent text-on-surface font-headline px-4 py-3 outline-none placeholder:text-on-surface-variant/30 text-lg tracking-wider" value="AX-8921">
                <span class="material-symbols-outlined absolute right-4 top-3.5 text-on-surface-variant group-focus-within:text-secondary transition-colors duration-300 pointer-events-none">
                    badge
                </span>
                <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-focus-within:w-full transition-all duration-500 ease-out"></div>
             </div>
          </div>

          <!-- Security Key Field -->
          <div class="group relative flex flex-col gap-2 mt-2">
             <div class="flex justify-between items-end">
                <label class="font-label text-[11px] uppercase tracking-widest text-on-surface-variant group-focus-within:text-secondary transition-colors duration-300" for="passkeyPath">
                    Biometric / Passkey
                </label>
                <span class="font-label text-[9px] uppercase tracking-[0.2em] text-secondary opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 font-bold">
                    <span class="material-symbols-outlined text-[10px] animate-pulse icon-fill">sensors</span>
                    Scanning
                </span>
             </div>
             <div class="relative bg-surface-container-highest rounded-md overflow-hidden ghost-border focus-within:border-secondary focus-within:shadow-[0_0_15px_rgba(78,222,163,0.15)] transition-all">
                <input type="password" id="passkeyPath" placeholder="••••••••" required
                       class="w-full bg-transparent text-on-surface font-headline px-4 py-3 outline-none placeholder:text-on-surface-variant/30 text-lg tracking-widest" value="verified">
                <button type="button" class="absolute right-3 top-2.5 p-1 text-on-surface-variant hover:text-primary transition-colors focus:outline-none">
                    <span class="material-symbols-outlined text-[20px]">fingerprint</span>
                </button>
                <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-focus-within:w-full transition-all duration-500 ease-out"></div>
             </div>
          </div>

          <!-- Action Button -->
          <button type="submit" class="w-full mt-8 py-4 rounded-md bg-primary text-on-primary-container font-headline text-lg uppercase tracking-[0.15em] font-bold hover:brightness-110 active:scale-[0.98] transition-all duration-200 relative overflow-hidden group">
            <span class="relative z-10 flex items-center justify-center gap-3">
                Initialize Session
                <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
            <div class="absolute inset-0 bg-white/20 translate-x-[-150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
          </button>
        </form>

        <!-- Footer Links -->
        <div class="mt-12 flex items-center justify-between border-t border-outline-variant/30 pt-6">
            <span class="font-body text-[9px] text-on-surface-variant/30 uppercase tracking-widest">End of Protocol</span>
            <a href="#" class="font-label text-[10px] text-primary hover:text-primary-container uppercase tracking-widest transition-colors font-bold">
                New Operative? Register
            </a>
        </div>
      </main>

      <!-- Right Edge Decoration -->
      <div class="absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-4 hidden lg:flex items-center z-0">
        <div class="h-32 w-px bg-outline-variant"></div>
        <span class="sans-detail text-outline-variant/80 uppercase rotate-90 whitespace-nowrap origin-center my-16 font-bold">
            Protocol // 0x4A
        </span>
        <div class="h-32 w-[1px] bg-outline-variant/40"></div>
      </div>
    </div>
  `
})
export class LoginComponent {
  router = inject(Router);

  login(e: Event) {
    e.preventDefault();
    this.router.navigate(['/hub']);
  }
}
