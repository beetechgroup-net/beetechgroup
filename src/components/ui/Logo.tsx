import { Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Logo({ className = "", size = "default" }: { className?: string, size?: "default" | "large" }) {
    const iconSize = size === "large" ? 48 : 32;
    const textSize = size === "large" ? "text-3xl" : "text-xl";

    return (
        <div className={`flex items-center gap-2 font-bold ${className}`}>
            <div className="relative">
                <motion.div
                    initial={{ rotate: -30 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Hexagon
                        size={iconSize}
                        className="text-bee-yellow fill-bee-yellow/20 stroke-[2.5]"
                    />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-bee-yellow rounded-full" />
                </div>
            </div>
            <div className={`leading-none ${textSize} tracking-tight`}>
                <span className="text-white">Bee</span>
                <span className="text-bee-yellow">Tech</span>
                <span className="block text-[0.4em] font-light text-gray-400 tracking-widest uppercase">Group</span>
            </div>
        </div>
    );
}
