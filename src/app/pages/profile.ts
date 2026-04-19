import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto px-4 md:px-8 py-8 space-y-8">
      
      <!-- Profile Header -->
      <section class="flex flex-col md:flex-row items-start md:items-center gap-6 relative border-b border-outline-variant/30 pb-8">
        <div class="relative group">
          <!-- Tactical Rings -->
          <div class="absolute inset-[-6px] rounded-full border border-secondary border-dashed opacity-40 animate-[spin_10s_linear_infinite]"></div>
          <div class="absolute inset-[-12px] rounded-full border border-primary/20"></div>
          
          <!-- Avatar -->
          <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-surface-container-highest relative z-10 bg-surface">
            <img src="https://i.pravatar.cc/150?img=11" alt="Agent Avatar" class="w-full h-full object-cover filter saturate-50 contrast-125 sepia-[.1] hue-rotate-[180deg]">
          </div>
          
          <!-- Online Indicator -->
          <div class="absolute bottom-1 right-1 w-4 h-4 bg-secondary rounded-full border-2 border-surface z-20 shadow-[0_0_10px_rgba(78,222,163,0.5)]"></div>
        </div>
        
        <div class="flex-1 flex flex-col items-start gap-1">
          <div class="flex items-center gap-3">
            <h1 class="serif-display text-6xl tracking-tighter text-on-surface">Agent 47</h1>
            <span class="sans-detail bg-surface-variant text-on-surface-variant px-2 py-1 rounded-sm flex items-center gap-1.5 border border-outline-variant/30 font-bold">
              <span class="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Lvl 4 OPR
            </span>
          </div>
          <p class="sans-detail text-on-surface-variant/60 font-bold mt-2">ID: #X-8921-Omega</p>
        </div>

        <!-- Stats Ticker -->
        <div class="flex gap-6 p-4 bg-surface-container-low rounded-md ghost-border w-full md:w-auto shadow-inner">
          <div class="flex flex-col min-w-[80px]">
            <span class="sans-detail text-on-surface-variant mb-2 font-bold">Missions</span>
            <span class="serif-display text-4xl text-primary leading-none">142</span>
          </div>
          <div class="w-px bg-outline-variant/30 self-stretch"></div>
          <div class="flex flex-col min-w-[80px]">
            <span class="sans-detail text-on-surface-variant mb-2 font-bold">Clearance</span>
            <span class="sans-detail text-xl text-secondary font-bold leading-none mt-1">Alpha</span>
          </div>
        </div>
      </section>

      <!-- Bento Grid Layout for Settings -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <!-- Security Module (Spans 8 columns) -->
        <div class="md:col-span-8 bg-surface-container-low rounded-md p-6 ghost-border relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div class="flex items-center justify-between mb-8 border-b border-outline-variant/20 pb-4">
            <h2 class="sans-detail text-primary uppercase font-bold flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">shield_lock</span>
              Security Protocol
            </h2>
            <span class="font-label text-[10px] uppercase font-bold text-secondary tracking-widest border border-secondary/30 bg-secondary/10 px-2 py-1 rounded glow-emerald">Optimal</span>
          </div>
          
          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between p-4 rounded bg-surface border border-outline-variant/10 hover:border-outline-variant/30 transition-colors group/item shadow-inner">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-on-surface-variant group-hover/item:text-primary transition-colors text-[24px]">password</span>
                <div>
                  <p class="font-headline text-sm text-on-surface font-bold uppercase tracking-wide">Auth Key</p>
                  <p class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Rotated 14D ago</p>
                </div>
              </div>
              <button class="font-label text-[10px] uppercase font-bold tracking-widest text-primary px-4 py-2 rounded-sm border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-colors">Update</button>
            </div>
            
            <div class="flex items-center justify-between p-4 rounded bg-surface border border-outline-variant/10 hover:border-outline-variant/30 transition-colors group/item shadow-inner">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-on-surface-variant group-hover/item:text-primary transition-colors text-[24px]">fingerprint</span>
                <div>
                  <p class="font-headline text-sm text-on-surface font-bold uppercase tracking-wide">Biometric Override</p>
                  <p class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Active: 2 Devices</p>
                </div>
              </div>
              <div class="w-10 h-5 bg-secondary/20 rounded-full relative cursor-pointer border border-secondary/30 transition-colors">
                <div class="absolute right-0.5 top-0.5 w-4 h-4 bg-secondary rounded-full shadow-[0_0_8px_rgba(78,222,163,0.6)]"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Telemetry Status (Spans 4 columns) -->
        <div class="md:col-span-4 bg-surface-container-highest rounded-md p-6 border border-outline-variant/20 flex flex-col justify-between relative overflow-hidden shadow-inner">
          <div class="scanlines absolute inset-0 opacity-30 pointer-events-none"></div>
          <div class="relative z-10 font-label">
            <h2 class="sans-detail text-on-surface uppercase font-bold flex items-center gap-2 border-b border-surface pb-3 mb-4">
              <span class="material-symbols-outlined text-lg text-primary icon-fill">satellite_alt</span>
              Telemetry
            </h2>
            <p class="text-[10px] text-on-surface-variant uppercase tracking-widest mb-6">Current Uplink</p>
          </div>
          
          <div class="space-y-6 relative z-10">
            <div>
              <div class="flex justify-between font-label text-[10px] font-bold uppercase tracking-widest mb-2">
                <span class="text-on-surface-variant">Signal</span>
                <span class="text-secondary glow-emerald">98%</span>
              </div>
              <div class="w-full h-1 bg-surface rounded-full overflow-hidden">
                <div class="h-full bg-secondary w-[98%] shadow-[0_0_5px_rgba(78,222,163,0.5)]"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-label text-[10px] font-bold uppercase tracking-widest mb-2">
                <span class="text-on-surface-variant">Latency</span>
                <span class="text-primary glow-amber">12ms</span>
              </div>
              <div class="w-full h-1 bg-surface rounded-full overflow-hidden">
                <div class="h-full bg-primary w-[15%]"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- API Keys Module -->
        <div class="md:col-span-6 bg-surface-container-low rounded-md p-6 ghost-border">
          <h2 class="font-headline text-lg text-on-surface uppercase font-bold flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-4">
            <span class="material-symbols-outlined text-lg">api</span>
            Integration Keys
          </h2>
          <div class="space-y-3">
            <div class="p-4 bg-surface border border-outline-variant/20 rounded flex items-center justify-between group relative overflow-hidden shadow-inner">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary glow-amber"></div>
              <div class="pl-2">
                <p class="font-headline text-sm font-bold text-on-surface uppercase tracking-wide">Alpha Sector Grid</p>
                <p class="font-label text-[10px] text-on-surface-variant opacity-70 font-mono mt-1 tracking-widest">xk_live_****************9a</p>
              </div>
              <button class="text-on-surface-variant hover:text-primary transition-colors bg-surface-container-low p-2 rounded">
                <span class="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
            
            <div class="p-4 bg-surface border border-outline-variant/20 rounded flex items-center justify-between group relative overflow-hidden shadow-inner">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-surface-variant"></div>
              <div class="pl-2">
                <p class="font-headline text-sm font-bold text-on-surface uppercase tracking-wide text-on-surface-variant/80">Test Environment</p>
                <p class="font-label text-[10px] text-on-surface-variant opacity-50 font-mono mt-1 tracking-widest">xk_test_****************2b</p>
              </div>
              <button class="text-on-surface-variant hover:text-primary transition-colors bg-surface-container-low p-2 rounded">
                <span class="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
          </div>
          <button class="mt-6 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-1 hover:text-primary-container transition-colors p-2 -ml-2 rounded hover:bg-primary/5">
            <span class="material-symbols-outlined text-[14px]">add</span> Generate Token
          </button>
        </div>

        <!-- Preferences Module -->
        <div class="md:col-span-6 bg-surface-container-low rounded-md p-6 ghost-border">
          <h2 class="font-headline text-lg text-on-surface uppercase font-bold flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-4">
            <span class="material-symbols-outlined text-lg">tune</span>
            Sys Preferences
          </h2>
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <span class="font-headline text-sm font-bold text-on-surface uppercase tracking-wide">Tactical Overlay</span>
              <div class="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer border border-primary/30">
                <div class="absolute right-0.5 top-0.5 w-4 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(255,193,116,0.6)]"></div>
              </div>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="font-headline text-sm font-bold text-on-surface uppercase tracking-wide">Silent Mode</span>
              <div class="w-10 h-5 bg-surface-variant rounded-full relative cursor-pointer border border-outline-variant/30">
                <div class="absolute left-0.5 top-0.5 w-4 h-4 bg-on-surface-variant rounded-full"></div>
              </div>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="font-headline text-sm font-bold text-on-surface uppercase tracking-wide">Data Density</span>
              <span class="font-label text-[10px] uppercase tracking-widest font-bold text-primary border border-outline-variant/30 px-3 py-1.5 rounded cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors">Maximum</span>
            </div>
          </div>
        </div>
        
      </section>

      <!-- Destructive Action -->
      <section class="mt-8 flex justify-center pb-8 border-t border-error/10 pt-8">
        <button [routerLink]="['/login']" class="font-label font-bold tracking-[0.2em] uppercase text-xs text-error hover:text-error-container hover:bg-error/10 px-8 py-4 rounded bg-surface-container-lowest ghost-border border-transparent hover:border-error/30 transition-all flex items-center gap-2 shadow-inner active:scale-95">
            <span class="material-symbols-outlined text-[18px]">logout</span>
            Disconnect
        </button>
      </section>

    </div>
  `
})
export class ProfileComponent {}
