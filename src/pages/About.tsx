import { Award, Shield, Gem, Leaf, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const certifications = [
    {
        icon: Gem,
        title: "Ouro 18k Certificado",
        description:
            "Todas as nossas peças em ouro possuem certificação de pureza 750, garantindo autenticidade e qualidade incomparável.",
    },
    {
        icon: Shield,
        title: "Prata 925 Autêntica",
        description:
            "Nossas joias em prata seguem o padrão internacional 925, com verificação e selo de procedência.",
    },
    {
        icon: Award,
        title: "Garantia Permanente",
        description:
            "Oferecemos garantia permanente contra defeitos de fabricação, porque confiamos na excelência do nosso trabalho.",
    },
    {
        icon: Leaf,
        title: "Práticas Sustentáveis",
        description:
            "Compromisso com a mineração responsável e práticas sustentáveis em toda a nossa cadeia de produção.",
    },
    {
        icon: CheckCircle,
        title: "Qualidade Artesanal",
        description:
            "Cada peça é cuidadosamente inspecionada por nossos mestres joalheiros antes de chegar até você.",
    },
];

const values = [
    {
        title: "Missão",
        text: "Criar joias que celebrem momentos únicos e se tornem parte da história de quem as usa, unindo design contemporâneo à tradição da ourivesaria.",
    },
    {
        title: "Visão",
        text: "Ser referência em joalheria premium no Brasil, reconhecida pela excelência em design, qualidade dos materiais e experiência do cliente.",
    },
    {
        title: "Valores",
        text: "Transparência, sustentabilidade, paixão pelo detalhe e respeito por cada cliente que confia em nós para marcar seus momentos especiais.",
    },
];

export default function About() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="relative bg-secondary/30 py-16 md:py-24">
                <div className="container text-center">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
                        Nossa História
                    </p>
                    <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                        Sobre a Aura Joias
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                        Nascida da paixão por transformar metais preciosos em obras de arte,
                        a Aura Joias une tradição e modernidade em cada peça. Desde a nossa
                        fundação, trabalhamos com os melhores materiais e artesãos para criar
                        joias que contam histórias e celebram momentos inesquecíveis.
                    </p>
                </div>
            </section>

            {/* Missão, Visão, Valores */}
            <section className="container py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {values.map((v) => (
                        <div key={v.title} className="text-center md:text-left">
                            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                                {v.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {v.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="container">
                <hr className="border-border" />
            </div>

            {/* Certificações */}
            <section className="container py-16 md:py-20">
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
                        Compromisso com Qualidade
                    </p>
                    <h2 className="text-2xl md:text-4xl font-light tracking-tight">
                        Certificações e Garantias
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certifications.map((cert) => (
                        <div
                            key={cert.title}
                            className="group border border-border p-6 md:p-8 transition-all duration-300 hover:border-foreground/30 hover:shadow-lg"
                        >
                            <cert.icon
                                size={28}
                                className="text-muted-foreground mb-4 transition-colors group-hover:text-foreground"
                                strokeWidth={1.5}
                            />
                            <h3 className="text-sm font-semibold tracking-wide mb-2">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
