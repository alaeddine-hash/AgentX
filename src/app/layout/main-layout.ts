import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen flex flex-col md:pb-0 pt-16">
      
      <!-- TopAppBar -->
      <header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/[0.05] flex justify-between items-center h-16 px-6">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-xl">terminal</span>
          <span class="serif-display text-4xl text-primary leading-[0.85] tracking-tighter">AgentX.</span>
        </div>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-2">
          @for (item of navItems; track item.path) {
            <a [routerLink]="item.path" 
               routerLinkActive="text-primary bg-primary/10" 
               [routerLinkActiveOptions]="{exact: true}"
               class="flex items-center gap-2 px-4 py-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all outline-none font-label text-xs uppercase tracking-widest font-bold">
               <span class="material-symbols-outlined text-[18px]">{{ item.icon }}</span>
               {{ item.label }}
            </a>
          }
        </nav>

        <div class="flex items-center">
          <span class="material-symbols-outlined text-primary cursor-pointer active:scale-95 transition-transform" title="Network Status">sensors</span>
        </div>
      </header>

      <!-- Main Content Area -->
      <div class="flex-1 flex overflow-hidden">
        <!-- Main Scrollable Area -->
        <main class="flex-1 overflow-y-auto pb-24 md:pb-8">
          <router-outlet></router-outlet>
        </main>
      </div>

      <!-- Mobile Bottom Nav -->
      <nav class="md:hidden fixed bottom-0 w-full z-50 bg-surface-lowest/90 backdrop-blur-xl border-t border-white/[0.05] pb-safe flex justify-around items-center h-20 px-2 transition-all">
        @for (item of navItems; track item.path) {
          <a [routerLink]="item.path" 
             routerLinkActive="text-primary bg-primary/10"
             class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-all duration-200 py-2 px-3 rounded-md min-w-[72px]">
            <span class="material-symbols-outlined mb-1" [class.icon-fill]="true">{{ item.icon }}</span>
            <span class="font-label text-[10px] font-bold tracking-widest uppercase">{{ item.label }}</span>
          </a>
        }
      </nav>

    </div>
  `
})
export class MainLayoutComponent {
  navItems = [
    { path: '/hub', icon: 'grid_view', label: 'Hub' },
    { path: '/engine', icon: 'settings_input_component', label: 'Engine' },
    { path: '/calendar', icon: 'event', label: 'Calendar' },
    { path: '/profile', icon: 'person', label: 'Profile' }
  ];
}
