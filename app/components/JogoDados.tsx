"use client";

import { useMemo, useState } from "react";
import Dado from "./Dado";

type ResultadoRodada = "aguardando" | "ganhou" | "perdeu" | "empatou";

function sortearDado(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

export default function JogoDados() {
    const TOTAL_RODADAS = 5;

    const [rodada, setRodada] = useState(1);

    const [jogador1Dados, setJogador1Dados] = useState<[0 | 1 | 2 | 3 | 4 | 5 | 6, 0 | 1 | 2 | 3 | 4 | 5 | 6]>([0, 0]);
    const [jogador2Dados, setJogador2Dados] = useState<[0 | 1 | 2 | 3 | 4 | 5 | 6, 0 | 1 | 2 | 3 | 4 | 5 | 6]>([0, 0]);

    const [jogador1Jogou, setJogador1Jogou] = useState(false);
    const [jogador2Jogou, setJogador2Jogou] = useState(false);

    const [resultadoJogador1, setResultadoJogador1] = useState<ResultadoRodada>("aguardando");
    const [resultadoJogador2, setResultadoJogador2] = useState<ResultadoRodada>("aguardando");

    const [placarJogador1, setPlacarJogador1] = useState(0);
    const [placarJogador2, setPlacarJogador2] = useState(0);
    const [empates, setEmpates] = useState(0);

    const [fimDeJogo, setFimDeJogo] = useState(false);

    const somaJogador1 = useMemo(() => {
        if (jogador1Dados[0] === 0 && jogador1Dados[1] === 0) return 0;
        return jogador1Dados[0] + jogador1Dados[1];
    }, [jogador1Dados]);

    const somaJogador2 = useMemo(() => {
        if (jogador2Dados[0] === 0 && jogador2Dados[1] === 0) return 0;
        return jogador2Dados[0] + jogador2Dados[1];
    }, [jogador2Dados]);

    function jogarJogador1() {
        if (fimDeJogo || jogador1Jogou) return;

        setJogador1Dados([sortearDado(), sortearDado()]);
        setJogador1Jogou(true);
    }

    function jogarJogador2() {
        if (fimDeJogo || !jogador1Jogou || jogador2Jogou) return;

        const novosDados: [1 | 2 | 3 | 4 | 5 | 6, 1 | 2 | 3 | 4 | 5 | 6] = [
            sortearDado(),
            sortearDado(),
        ];

        setJogador2Dados(novosDados);
        setJogador2Jogou(true);

        const soma1 = jogador1Dados[0] + jogador1Dados[1];
        const soma2 = novosDados[0] + novosDados[1];

        if (soma1 > soma2) {
            setResultadoJogador1("ganhou");
            setResultadoJogador2("perdeu");
            setPlacarJogador1((prev) => prev + 1);
        } else if (soma2 > soma1) {
            setResultadoJogador1("perdeu");
            setResultadoJogador2("ganhou");
            setPlacarJogador2((prev) => prev + 1);
        } else {
            setResultadoJogador1("empatou");
            setResultadoJogador2("empatou");
            setEmpates((prev) => prev + 1);
        }
    }

    function proximaRodadaOuFinalizar() {
        if (!jogador1Jogou || !jogador2Jogou) return;

        if (rodada === TOTAL_RODADAS) {
            setFimDeJogo(true);
            return;
        }

        setRodada((prev) => prev + 1);
        setJogador1Jogou(false);
        setJogador2Jogou(false);
        setResultadoJogador1("aguardando");
        setResultadoJogador2("aguardando");
        setJogador1Dados([0, 0]);
        setJogador2Dados([0, 0]);
    }

    function reiniciarJogo() {
        setRodada(1);
        setJogador1Dados([0, 0]);
        setJogador2Dados([0, 0]);
        setJogador1Jogou(false);
        setJogador2Jogou(false);
        setResultadoJogador1("aguardando");
        setResultadoJogador2("aguardando");
        setPlacarJogador1(0);
        setPlacarJogador2(0);
        setEmpates(0);
        setFimDeJogo(false);
    }

    function textoResultado(resultado: ResultadoRodada) {
        if (resultado === "ganhou") return "Ganhou";
        if (resultado === "perdeu") return "Perdeu";
        if (resultado === "empatou") return "Empatou";
        return "Aguardando jogada";
    }

    function corResultado(resultado: ResultadoRodada) {
        if (resultado === "ganhou") return "text-green-400";
        if (resultado === "perdeu") return "text-red-400";
        if (resultado === "empatou") return "text-yellow-300";
        return "text-zinc-400";
    }

    const vencedorFinal =
        placarJogador1 > placarJogador2
            ? "Jogador 1 venceu a partida!"
            : placarJogador2 > placarJogador1
                ? "Jogador 2 venceu a partida!"
                : "A partida terminou empatada!";

    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-12 text-white">
            <div className="flex flex-col items-center gap-4 mb-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Jogo de Dados
                </h1>
                <p className="text-zinc-300 text-lg">
                    Rodada {rodada} de {TOTAL_RODADAS}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Jogador 1 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold mb-6">Jogador 1</h2>

                    <div className="flex gap-4 mb-6">
                        <Dado valor={jogador1Dados[0]} />
                        <Dado valor={jogador1Dados[1]} />
                    </div>

                    <p className="text-lg mb-2">
                        Soma: <span className="font-semibold">{somaJogador1}</span>
                    </p>

                    <p className={`text-lg font-medium mb-6 ${corResultado(resultadoJogador1)}`}>
                        {textoResultado(resultadoJogador1)}
                    </p>

                    <button
                        onClick={jogarJogador1}
                        disabled={fimDeJogo || jogador1Jogou}
                        className="w-full rounded-2xl px-5 py-3 bg-white text-black font-semibold transition hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        Jogar Jogador 1
                    </button>
                </div>

                {/* Jogador 2 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold mb-6">Jogador 2</h2>

                    <div className="flex gap-4 mb-6">
                        <Dado valor={jogador2Dados[0]} />
                        <Dado valor={jogador2Dados[1]} />
                    </div>

                    <p className="text-lg mb-2">
                        Soma: <span className="font-semibold">{somaJogador2}</span>
                    </p>

                    <p className={`text-lg font-medium mb-6 ${corResultado(resultadoJogador2)}`}>
                        {textoResultado(resultadoJogador2)}
                    </p>

                    <button
                        onClick={jogarJogador2}
                        disabled={fimDeJogo || !jogador1Jogou || jogador2Jogou}
                        className="w-full rounded-2xl px-5 py-3 bg-white text-black font-semibold transition hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        Jogar Jogador 2
                    </button>
                </div>
            </div>

            <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Placar</h3>

                <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-black/20 rounded-2xl p-4">
                        <p className="text-zinc-300">Jogador 1</p>
                        <p className="text-3xl font-bold">{placarJogador1}</p>
                    </div>

                    <div className="bg-black/20 rounded-2xl p-4">
                        <p className="text-zinc-300">Empates</p>
                        <p className="text-3xl font-bold">{empates}</p>
                    </div>

                    <div className="bg-black/20 rounded-2xl p-4">
                        <p className="text-zinc-300">Jogador 2</p>
                        <p className="text-3xl font-bold">{placarJogador2}</p>
                    </div>
                </div>

                {!fimDeJogo ? (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={proximaRodadaOuFinalizar}
                            disabled={!jogador1Jogou || !jogador2Jogou}
                            className="rounded-2xl px-6 py-3 bg-white text-black font-semibold transition hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {rodada === TOTAL_RODADAS ? "Finalizar partida" : "Próxima rodada"}
                        </button>
                    </div>
                ) : (
                    <div className="mt-8 flex flex-col items-center gap-5">
                        <p className="text-2xl font-bold text-center">{vencedorFinal}</p>

                        <button
                            onClick={reiniciarJogo}
                            className="rounded-2xl px-6 py-3 bg-white text-black font-semibold transition hover:scale-[1.02]"
                        >
                            Jogar Novamente
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}