export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ index: [] as string[] }];
}

export default async function AdminPage() {
  const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
  const enableAdmin = process.env.NEXT_PUBLIC_ENABLE_ADMIN === "1";

  if (isStaticExport || !enableAdmin) {
    return (
      <div className="min-h-dvh flex items-center justify-center px-6 py-16 bg-[#020617] text-white">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-bold mb-3">Admin is not available on GitHub Pages</h1>
          <p className="text-white/80">
            This deployment is a static export for GitHub Pages. The Sanity Studio requires
            server-side routing and is intentionally disabled here.
          </p>
        </div>
      </div>
    );
  }

  const { AdminStudio } = await import("./AdminStudio");
  return <AdminStudio />;
}
