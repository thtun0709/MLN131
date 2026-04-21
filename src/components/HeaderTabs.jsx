import React from "react";

function HeaderTabs({ tabs, activeTab, onTabClick, onUsageClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-300/40 bg-emerald-400/15 text-lg font-extrabold text-emerald-200">
            2
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-100">Nhóm 2 MLN131</p>
            <p className="text-xs text-slate-400">Chuyên đề Lý luận chính trị</p>
          </div>
        </div>

        <nav className="max-w-[72%] overflow-x-auto">
          <ul className="flex min-w-max items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    onClick={() => onTabClick(tab.id)}
                    className={
                      isActive
                        ? "rounded-xl bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-emerald-100 shadow"
                        : "rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                    }
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                onClick={onUsageClick}
                className="rounded-xl border border-emerald-300/35 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20"
              >
                AI USAGE
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderTabs;
