import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { IconSend } from '@tabler/icons-react';

const Hirebtn = () => {
  const router = useRouter();
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    // navigate after 1 sec later
    setTimeout(() => {
      router.push("/contact");
    }, 1000);
  };

  return (
    <Button
      disableRipple
      className="hidden h-10 w-36 sm:flex font-medium justify-center space-x-2 items-center rounded bg-[#5cc48a] active:bg-[#1b864b] duration-300 text-slate-100"
      size="lg"
      onPress={handleConfetti}
    >
      <IconSend className="w-5 h-5 hover:rotate-90 duration-300" />
      <p className="">Hire Me</p>
    </Button>
  );
};

export default Hirebtn;
