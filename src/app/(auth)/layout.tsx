import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex  flex-col items-center   grow">
            <div className=" flex   ">
                <Image
                    src="/images/space_login.png"
                    alt="login.png"
                    width={610}
                    height={690}
                />
                <div className=" flex flex-col justify-center  w-[610px] h-[690px] ml-14">
                    {children}
                </div>
            </div>
        </main>
    );
}
