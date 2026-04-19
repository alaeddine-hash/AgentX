import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hub',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- Command Bar -->
      <section class="bg-surface-container-lowest rounded-md p-6 ambient-shadow flex flex-col md:flex-row gap-6 items-center justify-between ghost-border">
        <div class="flex items-center gap-6 w-full md:w-auto">
          <div class="w-16 h-16 bg-surface-container-low rounded-md flex items-center justify-center ghost-border shadow-inner">
            <span class="material-symbols-outlined text-primary text-3xl">security</span>
          </div>
          <div>
            <h1 class="serif-display text-5xl tracking-tighter text-on-surface">Mission Alpha</h1>
            <p class="sans-detail text-secondary mt-3 uppercase tracking-widest font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-secondary animate-pulse glow-emerald"></span>
              Status: Active Engagement
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4 w-full md:w-auto bg-surface-container-low p-2 rounded-md ghost-border focus-within:border-primary/50 focus-within:shadow-[0_0_10px_rgba(245,158,11,0.1)] transition-all">
          <input type="text" placeholder="Enter tactical command..." class="bg-transparent border-none text-on-surface font-body text-sm focus:ring-0 w-full md:w-64 px-4 outline-none placeholder:text-on-surface-variant flex-1">
          <button class="w-10 h-10 flex items-center justify-center bg-surface rounded hover:bg-surface-bright transition-colors text-primary active:scale-95 shrink-0">
            <span class="material-symbols-outlined icon-fill">mic</span>
          </button>
        </div>
      </section>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Timeline Sidebar -->
        <aside class="lg:col-span-4 space-y-6">
          <div class="bg-surface-container-lowest rounded-md p-6 ambient-shadow ghost-border">
            <h2 class="sans-detail text-on-surface mb-6 uppercase tracking-widest border-b border-outline-variant/30 pb-4">Execution Timeline</h2>
            
            <div class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-outline-variant/30">
              
              <!-- Timeline Item 1 (Complete) -->
              <div class="relative flex items-center md:items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-surface bg-secondary-container glow-emerald text-surface shrink-0 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span class="material-symbols-outlined text-sm font-bold icon-fill">check</span>
                </div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-low p-4 rounded-md ghost-border">
                  <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-on-surface text-sm font-headline">Infil Secured</h3>
                    <span class="font-label text-xs text-secondary font-bold">08:00</span>
                  </div>
                  <p class="text-xs text-on-surface-variant font-body">Perimeter established.</p>
                </div>
              </div>

              <!-- Timeline Item 2 (Active) -->
              <div class="relative flex items-center md:items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-surface bg-primary-container glow-amber text-on-primary-container shrink-0 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span class="material-symbols-outlined text-sm animate-[spin_3s_linear_infinite]">sync</span>
                </div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-high p-4 rounded-md ghost-border relative overflow-hidden border-l border-l-primary shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                  <div class="absolute top-0 left-0 w-1 h-full bg-primary glow-amber"></div>
                  <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-primary text-sm font-headline">Target Acquisition</h3>
                    <span class="font-label text-xs text-primary font-bold">09:15</span>
                  </div>
                  <p class="text-xs text-on-surface-variant font-body">Awaiting visual confirm.</p>
                </div>
              </div>

              <!-- Timeline Item 3 (Pending) -->
              <div class="relative flex items-center md:items-start justify-between md:justify-normal md:odd:flex-row-reverse group opacity-50">
                <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-surface bg-surface-variant text-on-surface shrink-0 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span class="material-symbols-outlined text-sm">hourglass_empty</span>
                </div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-low p-4 rounded-md ghost-border">
                  <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-on-surface text-sm font-headline">Exfil Protocol</h3>
                    <span class="font-label text-xs text-on-surface-variant">TBD</span>
                  </div>
                  <p class="text-xs text-on-surface-variant font-body">Pending primary obj.</p>
                </div>
              </div>

            </div>
          </div>
        </aside>

        <!-- Resolution Cards -->
        <div class="lg:col-span-8 space-y-6">
          <h2 class="sans-detail tracking-widest text-on-surface uppercase border-b border-outline-variant/30 pb-4">Active Engagements</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Target 1: Ahmed -->
            <article class="bg-surface-container-lowest rounded-md overflow-hidden flex flex-col ghost-border ambient-shadow group relative">
              <div class="h-40 bg-surface-container-high relative overflow-hidden">
                <div class="absolute inset-0 bg-surface object-cover opacity-80 mix-blend-luminosity border-b border-outline-variant/30 flex items-center justify-center overflow-hidden">
                   <div class="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                   <!-- Abstract map representation -->
                   <svg width="200%" height="200%" class="opacity-20 animate-[pulse_8s_ease-in-out_infinite]" style="transform: rotate(15deg);">
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5" class="text-primary"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                   </svg>
                </div>
                
                <div class="absolute top-4 left-4 bg-primary-container text-on-primary-container font-label text-xs font-bold px-2 py-1 rounded shadow-md flex items-center gap-1 uppercase tracking-widest glow-amber">
                  <span class="material-symbols-outlined text-[14px]">warning</span> Priority
                </div>
                
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Target" class="w-20 h-20 rounded-full border-2 border-surface-container-lowest absolute bottom-0 left-6 translate-y-1/2 z-10 object-cover filter sepia-[.4] hue-rotate-[-10deg] saturate-50">
              </div>
              
              <div class="p-6 pt-12 flex-1 flex flex-col relative z-20 bg-gradient-to-b from-transparent to-surface-container-lowest via-surface-container-lowest">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3 class="font-headline font-bold text-2xl text-on-surface uppercase">Ahmed, K.</h3>
                    <p class="font-label text-xs text-on-surface-variant font-mono tracking-widest">ID: 884-X9</p>
                  </div>
                  <span class="sans-detail bg-surface-container-highest text-primary font-bold px-2 py-1 rounded ghost-border">Sector 4</span>
                </div>
                
                <div class="space-y-3 mb-8 flex-1">
                  <div class="flex justify-between items-center text-sm">
                    <span class="font-label text-on-surface-variant uppercase tracking-widest text-xs">Threat</span>
                    <span class="font-bold text-primary font-headline tracking-widest uppercase text-sm">High</span>
                  </div>
                  <div class="w-full h-px bg-outline-variant/30"></div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="font-label text-on-surface-variant uppercase tracking-widest text-xs">Last Ping</span>
                    <span class="text-on-surface font-body text-sm font-semibold">14 mins ago</span>
                  </div>
                </div>
                
                <button class="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-bold font-headline py-3 rounded uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-[0_0_15px_rgba(245,158,11,0.25)] active:scale-[0.98] transition-all">
                  Execute Protocol <span class="material-symbols-outlined text-[18px]">bolt</span>
                </button>
              </div>
            </article>

            <!-- Target 2: Ben Ali -->
            <article class="bg-surface-container-lowest rounded-md overflow-hidden flex flex-col ghost-border ambient-shadow relative group">
              <div class="h-40 bg-surface-container-high relative overflow-hidden">
                <div class="absolute inset-0 bg-surface object-cover opacity-80 mix-blend-luminosity border-b border-outline-variant/30 flex items-center justify-center overflow-hidden">
                   <div class="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
                   <svg width="200%" height="200%" class="opacity-10 animate-[pulse_10s_ease-in-out_infinite]" style="transform: rotate(-10deg);">
                      <pattern id="grid2" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="currentColor" class="text-secondary"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid2)" />
                   </svg>
                </div>

                <div class="absolute top-4 left-4 bg-secondary-container text-surface-lowest font-label text-xs font-bold px-2 py-1 rounded flex items-center gap-1 uppercase glow-emerald text-black tracking-widest">
                  <span class="material-symbols-outlined text-[14px]">my_location</span> Tracked
                </div>

                <img src="https://i.pravatar.cc/150?img=33" alt="Target" class="w-20 h-20 rounded-full border-2 border-surface-container-lowest absolute bottom-0 left-6 translate-y-1/2 z-10 object-cover filter sepia-[.2] hue-rotate-[90deg] saturate-50">
              </div>

              <div class="p-6 pt-12 flex-1 flex flex-col relative z-20 bg-gradient-to-b from-transparent to-surface-container-lowest via-surface-container-lowest">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3 class="font-headline font-bold text-2xl text-on-surface uppercase">Ben Ali, Y.</h3>
                    <p class="font-label text-xs text-on-surface-variant font-mono tracking-widest">ID: 291-C4</p>
                  </div>
                  <span class="sans-detail bg-surface-container-highest text-secondary font-bold px-2 py-1 rounded ghost-border">Sector 7</span>
                </div>

                <div class="space-y-3 mb-8 flex-1">
                  <div class="flex justify-between items-center text-sm">
                    <span class="font-label text-on-surface-variant uppercase tracking-widest text-xs">Threat</span>
                    <span class="font-bold text-secondary font-headline tracking-widest uppercase text-sm">Moderate</span>
                  </div>
                  <div class="w-full h-px bg-outline-variant/30"></div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="font-label text-on-surface-variant uppercase tracking-widest text-xs">Last Ping</span>
                    <span class="text-on-surface font-body text-sm font-semibold flex items-center gap-1">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full animate-ping"></div>
                        Live Signal
                    </span>
                  </div>
                </div>

                <button class="w-full bg-surface-container-low border border-outline-variant/50 text-secondary font-bold font-headline py-3 rounded uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-surface-container-high hover:border-secondary transition-all active:scale-[0.98]">
                  Monitor Comm <span class="material-symbols-outlined text-[18px]">radar</span>
                </button>
              </div>
            </article>

          </div>
        </div>
      </div>
    </div>
  `
})
export class HubComponent {}
