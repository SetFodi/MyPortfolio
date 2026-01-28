import { BeamsBackground } from "@/components/ui/beams-background"

export default function BeamsBackgroundDemo() {
    return (
        <BeamsBackground className="flex items-center justify-center">
            <div className="z-10 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Beams Demo</h1>
                <p className="text-white/70">This background is now applied globally.</p>
            </div>
        </BeamsBackground>
    )
}
