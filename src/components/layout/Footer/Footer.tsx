import Container from '../Container'

export default function Footer() {
    return (
        <footer className="w-full border-t border-base-300 bg-base-100 py-12">
            <Container size="xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-xl font-bold text-primary tracking-tighter">
                            BigBrother
                        </span>
                        <p className="text-secondary text-xs mt-1 font-mono">
                            © 2026 BigBrother AI. v1.0.0
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm text-secondary font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Documentation</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Support</a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}