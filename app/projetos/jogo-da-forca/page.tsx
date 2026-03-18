"use client";
import RobotHangman from "../../components/RobotHangman";
import { useEffect, useMemo, useState } from "react";

const WORDS = [
    "CASA", "RUA", "CARRO", "MOTO", "CELULAR", "COMIDA", "AGUA", "SUCO", "CAFE", "ARROZ", "FEIJAO", "PIZZA", "PAO", "QUEIJO", "FRANGO", "CARNE", "PRATO", "COPO", "GARFO", "FACA", "COLHER", "MESA", "CADEIRA", "PORTA", "JANELA", "QUARTO", "SALA", "COZINHA", "BANHEIRO", "CHUVEIRO", "TOALHA", "ROUPA", "CAMISA", "CALCA", "TENIS", "SAPATO", "MOCHILA", "ESCOLA", "TRABALHO", "AMIGO", "FAMILIA", "DINHEIRO", "TEMPO", "DIA", "NOITE", "SOL", "CHUVA", "VENTO", "CALOR", "FRIO"
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;

function getRandomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function JogoDaForcaPage() {
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongLetters, setWrongLetters] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        startNewGame();
    }, []);

    function startNewGame() {
        const newWord = getRandomWord();
        setWord(newWord);
        setGuessedLetters([]);
        setWrongLetters([]);
        setInputValue("");
    }

    const errors = wrongLetters.length;
    const remainingAttempts = MAX_ERRORS - errors;

    const hiddenWord = useMemo(() => {
        return word
            .split("")
            .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
            .join(" ");
    }, [word, guessedLetters]);

    const hasWon =
        word.length > 0 && word.split("").every((letter) => guessedLetters.includes(letter));

    const hasLost = remainingAttempts <= 0;

    const usedLetters = [...guessedLetters, ...wrongLetters];

    function handleGuess(rawLetter: string) {
        if (!word || hasWon || hasLost) return;

        const letter = rawLetter.toUpperCase().trim();

        if (!letter || letter.length !== 1 || !/^[A-Z]$/.test(letter)) return;
        if (usedLetters.includes(letter)) return;

        if (word.includes(letter)) {
            setGuessedLetters((prev) => [...prev, letter]);
        } else {
            setWrongLetters((prev) => [...prev, letter]);
        }

        setInputValue("");
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        handleGuess(inputValue);
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                {/* topo */}
                <div className="flex flex-col gap-3 border-b border-zinc-800 pb-6">
                    <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        Projeto
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Jogo da Forca
                    </h1>
                </div>

                <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* painel principal */}
                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/20">
                        <div className="mb-8 flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                                    Tentativas restantes:{" "}
                                    <span className="font-semibold text-white">{remainingAttempts}</span>
                                </div>

                                <div className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                                    Erros: <span className="font-semibold text-white">{errors}</span> /{" "}
                                    {MAX_ERRORS}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-8">
                                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                                    Palavra
                                </p>

                                <div className="wrap-break-word text-center font-mono text-2xl tracking-[0.35em] text-white md:text-2xl">
                                    {hasLost ? word.split("").join(" ") : hiddenWord}
                                </div>
                            </div>
                        </div>

                        {/* mensagem de status */}
                        <div className="mb-6 min-h-18 rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
                            {!hasWon && !hasLost && (
                                <p className="text-zinc-300">
                                    Tente descobrir a palavra antes de acabar suas tentativas.
                                </p>
                            )}

                            {hasWon && (
                                <div>
                                    <p className="text-lg font-semibold text-white">
                                        Parabéns, você venceu!
                                    </p>
                                    <p className="mt-1 text-zinc-400">
                                        A palavra era <span className="font-semibold text-white">{word}</span>.
                                    </p>
                                </div>
                            )}

                            {hasLost && (
                                <div>
                                    <p className="text-lg font-semibold text-white">
                                        Você perdeu.
                                    </p>
                                    <p className="mt-1 text-zinc-400">
                                        A palavra correta era{" "}
                                        <span className="font-semibold text-white">{word}</span>.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* input */}
                        <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 sm:flex-row">
                            <input
                                type="text"
                                maxLength={1}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Digite uma letra"
                                disabled={hasWon || hasLost}
                                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-zinc-600 disabled:cursor-not-allowed disabled:opacity-50"
                            />

                            <button
                                type="submit"
                                disabled={hasWon || hasLost}
                                className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Enviar
                            </button>

                            <button
                                type="button"
                                onClick={startNewGame}
                                className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-white transition hover:bg-zinc-800"
                            >
                                Reiniciar
                            </button>
                        </form>

                        {/* letras usadas */}
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                                    Letras corretas
                                </p>
                                <div className="flex min-h-15 flex-wrap gap-2">
                                    {guessedLetters.length > 0 ? (
                                        guessedLetters.map((letter) => (
                                            <span
                                                key={letter}
                                                className="rounded-full border border-zinc-700 bg-white px-3 py-1 text-sm font-medium text-black"
                                            >
                                                {letter}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-zinc-500">Nenhuma ainda</span>
                                    )}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                                    Letras incorretas
                                </p>
                                <div className="flex min-h-15 flex-wrap gap-2">
                                    {wrongLetters.length > 0 ? (
                                        wrongLetters.map((letter) => (
                                            <span
                                                key={letter}
                                                className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-300"
                                            >
                                                {letter}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-zinc-500">Nenhuma ainda</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* painel lateral */}
                    {/* painel lateral */}
                    <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
                        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                            Robô
                        </p>

                        <div className="flex min-h-125 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950">
                            <RobotHangman errors={errors} />
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}
