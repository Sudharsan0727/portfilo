import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Maximize2, Minus, X } from "lucide-react";

const commands = {
    help: "Available commands: bio, skills, projects, contact, clear, whoami",
    whoami: "User: Sudharsan | Role: Creative Developer | Status: Online",
    bio: "I'm a software engineer passionate about building digital products that look good and perform even better.",
    skills: "Frontend: React, Next.js, Tailwind\nBackend: Node.js, Express\nDesign: Figma, Framer",
    contact: "Email: contactsudharsank@gmail.com | Twitter: @sudharsan",
    projects: "Check out the projects section above!",
    sudo: "Permission denied: You need to say 'please' (just kidding, admin access restricted).",
    clear: "CLEAR_ACTION"
};

const Terminal = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { type: "system", content: "Welcome to Sudharsan's Terminal v1.0.0" },
        { type: "system", content: "Type 'help' to see available commands." }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            const cmd = input.trim().toLowerCase();

            if (!cmd) return;

            // Add user command to history
            const newHistory = [...history, { type: "user", content: cmd }];

            // Process command
            if (commands[cmd]) {
                if (commands[cmd] === "CLEAR_ACTION") {
                    setHistory([]);
                } else {
                    newHistory.push({ type: "system", content: commands[cmd] });
                    setHistory(newHistory);
                }
            } else {
                newHistory.push({ type: "error", content: `Command not found: ${cmd}` });
                setHistory(newHistory);
            }

            setInput("");
        }
    };

    return (
        <section className="py-24 bg-[#050505] flex items-center justify-center px-4">
            <div className="w-full max-w-3xl">

                <div className="text-center mb-12">
                    <p className="text-purple-500 font-sans text-sm mb-2">Developers Only</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Command Line Interface</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0c0c0c] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-sans text-sm md:text-base w-full"
                >
                    {/* Window Title Bar */}
                    <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest">
                            <TerminalIcon size={12} />
                            <span>guest@portfolio:~</span>
                        </div>
                        <div className="flex gap-2 text-gray-600 opacity-50">
                            <Minus size={12} />
                            <Maximize2 size={12} />
                            <X size={12} />
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div ref={scrollRef} className="p-6 h-[400px] overflow-y-auto custom-scrollbar" onClick={() => document.getElementById("terminal-input").focus()}>
                        {history.map((line, idx) => (
                            <div key={idx} className="mb-2">
                                {line.type === "user" ? (
                                    <div className="flex gap-2 text-white">
                                        <span className="text-green-500">➜</span>
                                        <span className="text-purple-400">~</span>
                                        <span>{line.content}</span>
                                    </div>
                                ) : line.type === "error" ? (
                                    <div className="text-red-400">
                                        {line.content}
                                    </div>
                                ) : (
                                    <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                                        {line.type === "system" && <span className="text-blue-400 pr-2">ℹ</span>}
                                        {line.content}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Input Line */}
                        <div className="flex gap-2 items-center text-white mt-2">
                            <span className="text-green-500">➜</span>
                            <span className="text-purple-400">~</span>
                            <input
                                id="terminal-input"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                placeholder="Type 'help'..."
                                autoFocus
                                className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-600 caret-white"
                            />
                        </div>

                    </div>

                </motion.div>

                <p className="text-center text-gray-600 font-sans text-xs mt-6">
                    Try commands like <span className="text-purple-500">help</span>, <span className="text-purple-500">bio</span>, or <span className="text-purple-500">whoami</span>
                </p>
            </div>
        </section>
    );
};

export default Terminal;
