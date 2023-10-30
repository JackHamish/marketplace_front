import Link from "next/link";

const CompleteRegistration = () => {
  return (
    <div className="flex w-[460px] flex-col items-center gap-5">
      <h2 className="font-sans text-4xl font-semibold">
        Registration successful!
      </h2>

      <p className="mt-5 font-sans text-xl">You can login into yur account.</p>
      <Link
        className="mt-7 flex max-w-xs items-center justify-center rounded-3xl border-2 border-heliotrope bg-heliotrope px-7 py-4 font-sans"
        href="/login"
      >
        Login
      </Link>
    </div>
  );
};

export default CompleteRegistration;
