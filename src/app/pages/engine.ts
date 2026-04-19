import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-engine',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left Column: Agent Topologies -->
      <div class="lg:col-span-2 space-y-8">
        <div class="flex items-baseline justify-between mb-4 border-b border-outline-variant/30 pb-4">
          <h1 class="serif-display text-5xl font-normal tracking-tighter text-on-surface border-l-2 border-primary pl-4">Agent Orchestration</h1>
          <span class="font-label text-[10px] text-secondary tracking-widest uppercase font-bold flex items-center gap-2 border border-secondary/30 px-2 py-1 rounded bg-secondary/10 glow-emerald">
            <span class="material-symbols-outlined text-[14px]">link</span> Live Link
          </span>
        </div>

        <!-- Orchestrator Node -->
        <div class="bg-surface-container-low rounded-md p-6 border border-outline-variant/30 relative shadow-inner">
          <div class="flex justify-between items-start mb-6">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="material-symbols-outlined text-primary-container text-2xl icon-fill glow-amber">hub</span>
                <h2 class="serif-display text-3xl text-primary font-normal">Alpha-Prime Overseer</h2>
              </div>
              <p class="font-label text-xs text-on-surface-variant tracking-[0.2em] uppercase font-bold">ID: 994-OMEGA-CX</p>
            </div>
            <div class="bg-primary-container/10 border border-primary-container/30 text-primary-container font-label text-[10px] px-2 py-1 rounded-sm uppercase tracking-widest font-bold flex items-center gap-1.5 glow-amber">
              <span class="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
              Delegating
            </div>
          </div>

          <!-- Sub-Agents Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 relative z-10">
            <!-- Connector Lines (Visual) -->
            <div class="absolute left-[20px] sm:left-1/2 top-[-2.5rem] w-px h-[2.5rem] bg-outline-variant/50 hidden sm:block"></div>
            <div class="absolute sm:left-[25%] top-[-1rem] sm:w-[50%] h-px bg-outline-variant/50 hidden sm:block"></div>
            
            <!-- Agent 1 -->
            <div class="bg-surface-container-highest rounded-md p-5 border border-secondary/40 glow-emerald relative transition-transform hover:-translate-y-1 duration-300">
              <div class="flex justify-between items-center mb-4 border-b border-surface pb-3">
                <h3 class="font-headline text-lg font-bold text-on-surface tracking-wide uppercase">Data Recon</h3>
                <span class="material-symbols-outlined text-secondary text-sm bg-secondary/10 p-1.5 rounded-full border border-secondary/30">search</span>
              </div>
              <div class="space-y-3 font-label text-[11px] tracking-widest uppercase text-on-surface-variant">
                <div class="flex justify-between">
                  <span>Task:</span>
                  <span class="text-secondary font-bold">Deep Scrape</span>
                </div>
                <div class="flex justify-between">
                  <span>Status:</span>
                  <span class="text-secondary font-bold font-mono">EXTR: 87%</span>
                </div>
              </div>
            </div>

            <!-- Agent 2 -->
            <div class="bg-surface-container-highest rounded-md p-5 border border-outline-variant/50 hover:border-primary-container/50 relative hover:glow-amber transition-all hover:-translate-y-1 duration-300 ghost-border">
              <div class="flex justify-between items-center mb-4 border-b border-surface pb-3">
                <h3 class="font-headline text-lg font-bold text-on-surface tracking-wide uppercase">Pattern Intel</h3>
                <span class="material-symbols-outlined text-primary-container text-sm">troubleshoot</span>
              </div>
              <div class="space-y-3 font-label text-[11px] tracking-widest uppercase text-on-surface-variant">
                <div class="flex justify-between">
                  <span>Task:</span>
                  <span class="text-primary-container font-bold">Entity Resolve</span>
                </div>
                <div class="flex justify-between">
                  <span>Status:</span>
                  <span class="text-surface-variant font-bold font-mono text-on-surface-variant">Q-WAIT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Terminal Logs -->
        <div class="bg-surface-lowest border border-outline-variant/20 rounded-md overflow-hidden flex flex-col h-[300px] shadow-inner relative ghost-border">
          <div class="absolute inset-0 scanlines opacity-50 pointer-events-none"></div>
          <div class="bg-surface-low px-4 py-3 border-b border-outline-variant/20 flex justify-between items-center sticky top-0 z-10 backdrop-blur-md">
            <span class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Sys_Log // TTY_01</span>
            <span class="material-symbols-outlined text-on-surface-variant text-sm">terminal</span>
          </div>
          <div class="p-4 font-label text-[13px] overflow-y-auto flex-1 terminal-text leading-loose space-y-1 z-0 relative">
            <div class="opacity-70">&gt; [10:42:01] <span class="text-on-surface-variant">SYS_INIT:</span> Boot sequence Alpha-Prime</div>
            <div class="opacity-80">&gt; [10:42:03] <span class="text-primary">ORCH:</span> Sub-routine 'Data Recon' launched</div>
            <div class="">&gt; [10:42:05] <span class="text-secondary">EXEC:</span> Querying secure index clusters...</div>
            <div class="">&gt; [10:42:08] <span class="text-secondary">EXEC:</span> Match found. Extracting packet 0x9A4F</div>
            <div class="text-secondary font-bold">&gt; [10:42:12] CRYPT: Decrypting header... SUCCESS</div>
            <div class="">&gt; [10:42:15] <span class="text-primary">ORCH:</span> Passing payload to 'Pattern Intel' queue</div>
            <div class="opacity-60 text-secondary">&gt; [10:42:16] Awaiting execution...</div>
            <div class="animate-pulse font-bold mt-2">_</div>
          </div>
        </div>
      </div>

      <!-- Right Column: Context & Controls -->
      <div class="space-y-6">
        <!-- Global Stats -->
        <div class="bg-surface-container-low p-6 rounded-md border border-outline-variant/30 ghost-border">
          <h3 class="sans-detail text-on-surface-variant mb-6 font-bold pb-4 border-b border-outline-variant/20 flex items-center justify-between">
            Mission Metrics
            <span class="material-symbols-outlined text-[14px]">analytics</span>
          </h3>
          
          <div class="space-y-6">
            <div>
              <div class="flex justify-between font-label text-[11px] mb-2 uppercase tracking-widest">
                <span class="text-on-surface font-semibold">Compute Load</span>
                <span class="text-primary-container font-bold font-mono">64%</span>
              </div>
              <div class="w-full bg-surface h-1.5 rounded-full overflow-hidden border border-outline-variant/20 shadow-inner">
                <div class="bg-gradient-to-r from-primary to-primary-container h-full glow-amber rounded-full" style="width: 64%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between font-label text-[11px] mb-2 uppercase tracking-widest">
                <span class="text-on-surface font-semibold">Uplink Speed</span>
                <span class="text-secondary-container font-bold font-mono">1.2 GB/s</span>
              </div>
              <div class="w-full bg-surface h-1.5 rounded-full overflow-hidden border border-outline-variant/20 shadow-inner">
                <div class="bg-gradient-to-r from-secondary to-secondary-container h-full glow-emerald rounded-full" style="width: 80%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-label text-[11px] mb-2 uppercase tracking-widest">
                <span class="text-on-surface font-semibold">Encryption</span>
                <span class="text-on-surface-variant font-bold font-mono">AES-256</span>
              </div>
              <div class="w-full bg-surface h-1.5 rounded-full overflow-hidden border border-outline-variant/20 shadow-inner">
                <div class="bg-outline-variant h-full rounded-full" style="width: 100%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="space-y-4 pt-4 border-t border-outline-variant/20">
          <button class="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-headline font-bold text-sm py-4 rounded-md hover:brightness-110 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] flex justify-center items-center gap-2 uppercase tracking-widest active:scale-[0.98] relative overflow-hidden group">
            <span class="relative z-10 flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]">pause_circle</span>
                Suspend Ops
            </span>
            <div class="absolute inset-0 bg-white/20 translate-x-[-150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
          </button>
          
          <button class="w-full bg-surface border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary/50 font-label text-[11px] font-bold py-4 rounded-md transition-colors flex justify-center items-center gap-2 uppercase tracking-[0.2em] active:scale-[0.98]">
            <span class="material-symbols-outlined text-[16px]">download</span>
            Export Dump
          </button>
        </div>
      </div>
    
    </div>
  `
})
export class EngineComponent {}
