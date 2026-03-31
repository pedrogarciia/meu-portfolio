import Image from "next/image";

type DadoProps = {
  valor: 0 |1 | 2 | 3 | 4 | 5 | 6;
};

export default function Dado({ valor }: DadoProps) {
  return (
    <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl shadow-md flex items-center justify-center">
      <Image
        src={`/dados/dado${valor}.png`}
        alt={`Dado com valor ${valor}`}
        width={80}
        height={80}
        className="object-contain"
      />
    </div>
  );
}