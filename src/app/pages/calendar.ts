import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto px-4 md:px-8 py-8 space-y-8">
      
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/30 pb-6">
        <div>
          <h1 class="serif-display text-5xl tracking-tighter text-on-surface mb-2 border-l-2 border-primary pl-4">Mission Log</h1>
          <p class="sans-detail text-on-surface-variant uppercase ml-5 mt-2">Temporal Tracking & Alignment</p>
        </div>
        <button class="bg-primary-container text-on-primary-container font-label text-[11px] font-bold uppercase tracking-[0.1em] py-3 px-6 rounded-md hover:brightness-110 transition-all active:scale-[0.98] flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <span class="material-symbols-outlined text-[16px]">add</span>
          New Directive
        </button>
      </div>

      <!-- Horizontal Date Strip -->
      <div class="w-full overflow-x-auto pb-6 hide-scrollbar relative">
        <div class="flex gap-3 min-w-max">
          <!-- Past Date -->
          <div class="flex flex-col items-center justify-center bg-surface-container-low w-16 h-20 rounded-md ghost-border cursor-pointer hover:bg-surface-container-highest transition-colors opacity-50">
            <span class="font-label text-xs text-on-surface-variant">MON</span>
            <span class="font-headline text-xl font-bold text-on-surface">12</span>
          </div>
          <!-- Past Date -->
          <div class="flex flex-col items-center justify-center bg-surface-container-low w-16 h-20 rounded-md ghost-border cursor-pointer hover:bg-surface-container-highest transition-colors opacity-50">
            <span class="font-label text-xs text-on-surface-variant">TUE</span>
            <span class="font-headline text-xl font-bold text-on-surface">13</span>
          </div>
          <!-- Active Date -->
          <div class="flex flex-col items-center justify-center bg-surface-container-high w-20 h-24 rounded-md border border-primary glow-amber cursor-pointer relative -mt-2 shadow-inner">
            <div class="absolute top-0 w-full h-1 bg-primary rounded-t-md glow-amber"></div>
            <span class="font-label text-xs text-primary mb-1 uppercase tracking-widest font-bold">WED</span>
            <span class="font-headline text-2xl font-bold text-primary">14</span>
          </div>
          <!-- Future Date -->
          <div class="flex flex-col items-center justify-center bg-surface-container-low w-16 h-20 rounded-md ghost-border cursor-pointer hover:bg-surface-container-highest transition-colors">
            <span class="font-label text-xs text-on-surface-variant">THU</span>
            <span class="font-headline text-xl font-bold text-on-surface">15</span>
          </div>
          <!-- Future Date -->
          <div class="flex flex-col items-center justify-center bg-surface-container-low w-16 h-20 rounded-md ghost-border cursor-pointer hover:bg-surface-container-highest transition-colors">
            <span class="font-label text-xs text-on-surface-variant">FRI</span>
            <span class="font-headline text-xl font-bold text-on-surface">16</span>
          </div>
           <div class="flex flex-col items-center justify-center bg-surface-container-low w-16 h-20 rounded-md ghost-border cursor-pointer hover:bg-surface-container-highest transition-colors">
            <span class="font-label text-xs text-on-surface-variant">SAT</span>
            <span class="font-headline text-xl font-bold text-on-surface">17</span>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="flex flex-col gap-6 relative mt-4">
        <!-- Timeline Line -->
        <div class="absolute left-[39px] top-4 bottom-4 w-px bg-outline-variant/30 hidden md:block"></div>

        <!-- Mission Card: Completed -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group">
          <div class="hidden md:flex flex-col items-end w-24 pt-4">
            <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest opacity-60">0800 HRS</span>
          </div>
          <div class="w-full bg-surface-container-lowest rounded-md ghost-border overflow-hidden">
            <div class="bg-surface-container-low p-4 rounded-t-md flex justify-between items-center border-b border-outline-variant/20">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-secondary-container glow-emerald"></div>
                <span class="font-label text-[10px] uppercase tracking-widest text-secondary-container font-bold">Completed</span>
              </div>
              <span class="font-label text-[10px] text-on-surface-variant md:hidden uppercase tracking-widest opacity-60">0800 HRS</span>
            </div>
            <div class="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group-hover:bg-surface-container-low/50 transition-colors">
              <div>
                <h3 class="font-headline text-xl font-bold text-on-surface mb-2 uppercase">Perimeter Sweep: Sector 7G</h3>
                <p class="font-label text-[11px] text-on-surface-variant uppercase tracking-widest">Client: Tyrell Corp | Unit Alpha</p>
              </div>
              <button class="text-secondary font-label text-[10px] font-bold uppercase tracking-widest border border-outline-variant/30 py-2 px-4 rounded hover:border-secondary hover:bg-secondary/5 transition-all">
                View Log
              </button>
            </div>
          </div>
        </div>

        <!-- Mission Card: Active/Confirmed -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group">
          <div class="hidden md:flex flex-col items-end w-24 pt-4">
            <span class="font-label text-[13px] text-primary font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)]">1430 HRS</span>
          </div>
          <div class="w-full bg-surface-container-lowest rounded-md border border-primary/30 shadow-[0_0_20px_rgba(245,158,11,0.05)] overflow-hidden relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary glow-amber"></div>
            <div class="bg-surface-container-low p-4 rounded-t-md flex justify-between items-center ml-1 border-b border-outline-variant/20 z-10 relative">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary-container animate-pulse text-[14px] icon-fill">radar</span>
                <span class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Active Directive</span>
              </div>
              <span class="font-label text-[10px] text-primary md:hidden font-bold uppercase tracking-widest">1430 HRS</span>
            </div>
            <div class="p-6 ml-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-surface-container-lowest relative">
              <div class="absolute inset-0 bg-primary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="relative z-10 w-full md:w-auto">
                <h3 class="font-headline text-xl font-bold text-on-surface mb-2 uppercase">High-Value Asset Escort</h3>
                <p class="font-label text-[11px] text-on-surface-variant mb-5 uppercase tracking-widest leading-relaxed">
                  Route: Downtown Node<br/>Extraction Point Beta
                </p>
                <div class="flex gap-2">
                  <span class="bg-surface border border-outline-variant/30 text-on-surface-variant font-label text-[9px] uppercase px-2 py-1 rounded">Kinetic</span>
                  <span class="bg-primary/10 text-primary font-label text-[9px] font-bold uppercase px-2 py-1 rounded border border-primary/30">Priority</span>
                </div>
              </div>
              <button class="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-label text-xs font-bold uppercase tracking-[0.2em] py-3 px-8 rounded hover:brightness-110 transition-all active:scale-[0.98] relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                Initiate
              </button>
            </div>
          </div>
        </div>

        <!-- Mission Card: Standby -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative opacity-60 hover:opacity-100 transition-opacity group">
          <div class="hidden md:flex flex-col items-end w-24 pt-4">
            <span class="font-label text-[11px] text-on-surface-variant uppercase tracking-widest">1900 HRS</span>
          </div>
          <div class="w-full bg-surface-container-lowest rounded-md ghost-border overflow-hidden">
            <div class="bg-surface p-4 rounded-t-md flex justify-between items-center border-b border-outline-variant/20">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full border-2 border-on-surface-variant/50"></div>
                <span class="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Standby</span>
              </div>
              <span class="font-label text-[10px] text-on-surface-variant md:hidden uppercase tracking-widest">1900 HRS</span>
            </div>
            <div class="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group-hover:bg-surface-container-low transition-colors">
              <div>
                <h3 class="font-headline text-lg font-bold text-on-surface mb-2 uppercase">Night Reconnaissance</h3>
                <p class="font-label text-[11px] text-on-surface-variant uppercase tracking-widest">Sector 4 | Stealth Req.</p>
              </div>
              <button class="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-widest border border-outline-variant/30 py-2 px-6 rounded hover:border-on-surface hover:text-on-surface transition-colors">
                Details
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class CalendarComponent {}
