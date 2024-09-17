"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <Image
        src="/icons/dot-bg.svg"
        width={1000}
        height={1000}
        alt=""
        className="absolute top-0 -z-20 w-full hidden md:block"
      />
      <Image
        src="/icons/cta-gradient.svg"
        alt=""
        width={800}
        height={800}
        className="absolute right-0 top-0 -z-[12] hidden md:block"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-[425px] w-full rounded-full blur-[350px] sm:w-[425px] hidden md:block" />
      {/* Background update ends here */}

      <div className="h-[750px] w-full md:h-[900px] lg:h-[592px] 3xl:max-w-[1200px] bg-[#93a2d4] bg-transparent hidden md:block mt-4">
        {" "}
        {/* Added mt-12 for margin */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="absolute top-[15px] left-0 right-0 z-30 hidden md:flex h-[400px] w-full flex-col justify-start -space-y-[140px] overflow-clip sm:h-[500px] sm:-space-y-[290px] md:left-auto md:right-[50px] md:h-[500px] md:w-auto md:-space-y-[320px] lg:right-0 lg:h-[650px] lg:-space-y-[290px] xl:-space-y-0"
        >
          <motion.img
            initial={{ opacity: 0, y: 250 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="/icons/card-four.svg"
            alt=""
            className="z-[12] lg:-translate-y-0 xl:translate-y-[250px]"
          />
          <motion.img
            initial={{ opacity: 0, y: -130 }}
            whileInView={{
              opacity: 1,
              y: -290,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="/icons/card-three.svg"
            alt=""
            className="rotate -[-30deg] z-[11] lg:-translate-y-[290px] xl:-translate-y-[130px]"
          />
          <motion.img
            initial={{ opacity: 0, y: -500 }}
            whileInView={{
              opacity: 1,
              y: -580,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="/icons/card-two.svg"
            alt=""
            className="z-[10] lg:-translate-y-[580px] xl:-translate-y-[500px]"
          />
          <motion.img
            initial={{ opacity: 0, y: -870 }}
            whileInView={{
              opacity: 1,
              y: -870,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="/icons/card-one.svg"
            alt=""
            className="xl:-translate-y-[870px]"
          />
          <motion.img
            initial={{ opacity: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              y: -290,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 160,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            src="/icons/shadow.svg"
            alt=""
            className="xl:-translate-y-[290px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="absolute -bottom-[0px] left-0 right-0 z-30 flex h-[400px] w-full flex-col justify-start -space-y-[140px] overflow-clip sm:h-[500px] sm:-space-y-[290px] md:hidden lg:right-0 lg:h-[650px] lg:-space-y-[290px] xl:hidden xl:-space-y-0"
        >
          <Image
            src="/icons/card-four.svg"
            width={500}
            height={500}
            alt=""
            className="z-[12]"
          />
          <Image
            src="/icons/card-three.svg"
            alt=""
            width={300}
            height={300}
            className="rotate -[-30deg] z-[11]"
          />
          <Image
            src="/icons/card-two.svg"
            alt=""
            width={300}
            height={300}
            className="z-[10]"
          />
          <Image src="/icons/card-one.svg" width={500} height={500} alt="" />
          <Image src="/icons/shadow.svg" width={500} height={500} alt="" />
        </motion.div>
      </div>
    </main>
  );
}
