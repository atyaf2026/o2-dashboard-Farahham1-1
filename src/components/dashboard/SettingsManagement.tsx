import type { ReactNode } from "react";
import {  Bell,
  Camera,
  LockKeyhole,
  Moon,
  Palette,
  Save,
  Sun,
  User,
} from "lucide-react";

const tabs = [
  { label: "Profile", icon: User, active: true },
  { label: "Notifications", icon: Bell },
  { label: "Security", icon: LockKeyhole },
  { label: "Appearance", icon: Palette },
];

const colors = ["bg-indigo-600", "bg-emerald-600", "bg-rose-600", "bg-amber-500", "bg-slate-800"];

export default function SettingsManagement() {
  return (
    <main className="min-h-screen bg-[#f8f9ff]" dir="ltr">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur">
        <h1 className="text-xl font-semibold text-slate-950">Settings</h1>
        <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-indigo-700 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-800" type="button">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </header>

      <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-8 py-8 lg:grid-cols-[256px_1fr]">
        <aside className="space-y-1 lg:sticky lg:top-24 lg:self-start">
          {tabs.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`flex h-11 w-full items-center gap-3 rounded-xl px-4 text-sm transition ${
                active
                  ? "border border-slate-200 bg-white font-semibold text-indigo-600 shadow-sm"
                  : "font-medium text-slate-500 hover:bg-white hover:text-slate-900"
              }`}
              type="button"
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </aside>

        <div className="space-y-6">
          <section className="rounded-xl border border-[#c7c4d8] bg-white p-8 shadow-sm">
            <SectionHeader
              title="Profile Information"
              description="Update your account's profile information and email address."
            />

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(180px,287px)_1fr]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <img
                    src="/images/farah.jpg"
                    alt="Profile photo"
                    className="h-32 w-32 rounded-full border-4 border-slate-50 object-cover shadow-inner"
                  />
                  <button className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full bg-indigo-600 text-white shadow-lg transition hover:bg-indigo-700" type="button">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-900">Profile Photo</p>
                  <p className="text-xs font-semibold uppercase text-slate-500">JPG or PNG. Max 2MB.</p>
                </div>
              </div>

              <div className="space-y-6">
                <Field label="Name" helper="Your real name as it will appear on reports.">
                  <input className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-indigo-200 focus:ring-4 focus:ring-indigo-100" defaultValue="Farah" type="text" />
                </Field>

                <Field label="Email Address">
                  <input className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-indigo-200 focus:ring-4 focus:ring-indigo-100" defaultValue="farahhusam56@gmail.com" type="email" />
                </Field>

                <Field label="Bio" helper="Brief description for your profile.">
                  <textarea
                    className="min-h-[130px] w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-4 text-base leading-6 text-slate-950 outline-none transition focus:border-indigo-200 focus:ring-4 focus:ring-indigo-100"
                    defaultValue="Front-end developer trainee passionate about building clean and functional user interfaces."
                  />
                </Field>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-[#c7c4d8] bg-white p-8 shadow-sm">
            <SectionHeader
              title="Appearance"
              description="Customize how the dashboard looks and feels to suit your workspace."
            />

            <div className="mt-8 space-y-8">
              <div>
                <p className="text-base text-slate-950">Dashboard Theme</p>
                <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
                  <ThemeOption
                    active
                    icon={<Sun className="h-5 w-5 text-indigo-600" />}
                    title="Light Mode"
                    description="Default bright workspace"
                  />
                  <ThemeOption
                    icon={<Moon className="h-5 w-5 text-white" />}
                    title="Dark Mode"
                    description="Easier on the eyes at night"
                    darkIcon
                  />
                </div>
              </div>

              <div>
                <p className="text-base text-slate-950">Primary Brand Color</p>
                <div className="mt-4 flex items-center gap-4">
                  {colors.map((color, index) => (
                    <button
                      key={color}
                      className={`h-12 w-12 rounded-full border-4 border-white shadow-sm ${color} ${
                        index === 0 ? "ring-2 ring-indigo-600 ring-offset-4" : ""
                      }`}
                      aria-label={`Select brand color ${index + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-[#c7c4d8] bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <SectionHeader
                title="Notifications"
                description="Current: All email notifications enabled"
              />
              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50" type="button">
                Manage
              </button>
            </div>
          </section>

          <section className="rounded-xl border border-red-100 bg-red-50/60 p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-red-700">Delete Account</h2>
                <p className="mt-1 text-sm text-red-600/80">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
              </div>
              <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700" type="button">
                Deactivate
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}

function Field({ label, helper, children }: { label: string; helper?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-base text-slate-950">{label}</span>
      <span className="mt-2 block">{children}</span>
      {helper ? <span className="mt-2 block text-xs font-semibold text-slate-400">{helper}</span> : null}
    </label>
  );
}

function ThemeOption({
  active,
  icon,
  title,
  description,
  darkIcon,
}: {
  active?: boolean;
  icon: ReactNode;
  title: string;
  description: string;
  darkIcon?: boolean;
}) {
  return (
    <button
      className={`flex h-[76px] items-center justify-between rounded-xl border-2 p-[18px] text-left transition ${
        active ? "border-indigo-700 bg-slate-50" : "border-slate-100 bg-white hover:border-slate-200"
      }`}
      type="button"
    >
      <span className="flex items-center gap-4">
        <span className={`grid h-10 w-10 place-items-center rounded-lg shadow-sm ${darkIcon ? "bg-slate-900" : "bg-white"}`}>
          {icon}
        </span>
        <span>
          <span className="block text-base text-slate-950">{title}</span>
          <span className="block text-xs font-semibold text-slate-500">{description}</span>
        </span>
      </span>
      <span className={`grid h-5 w-5 place-items-center rounded-full border-2 ${active ? "border-indigo-700" : "border-slate-200"}`}>
        {active ? <span className="h-2.5 w-2.5 rounded-full bg-indigo-700" /> : null}
      </span>
    </button>
  );
}



