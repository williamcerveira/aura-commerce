import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

const contactInfo = [
    {
        icon: Mail,
        label: "E-mail",
        value: "contato@aurajoias.com.br",
        href: "mailto:contato@aurajoias.com.br",
    },
    {
        icon: Phone,
        label: "Telefone",
        value: "(11) 99999-0000",
        href: "tel:+5511999990000",
    },
    {
        icon: MapPin,
        label: "Endereço",
        value: "Rua Augusta, 1200 — São Paulo, SP",
        href: "#",
    },
    {
        icon: Clock,
        label: "Horário",
        value: "Seg a Sex, 9h — 18h",
        href: "#",
    },
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="bg-secondary/30 py-16 md:py-24">
                <div className="container text-center">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
                        Fale Conosco
                    </p>
                    <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                        Contato
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                        Estamos à disposição para tirar suas dúvidas, receber sugestões ou
                        ajudá-lo a encontrar a joia perfeita.
                    </p>
                </div>
            </section>

            <section className="container py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    {/* Formulário */}
                    <div>
                        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase mb-8">
                            Envie uma Mensagem
                        </h2>

                        {submitted ? (
                            <div className="border border-border p-8 text-center space-y-3">
                                <Send size={28} className="mx-auto text-muted-foreground" strokeWidth={1.5} />
                                <p className="text-sm font-medium">Mensagem enviada com sucesso!</p>
                                <p className="text-sm text-muted-foreground">
                                    Responderemos em até 24 horas úteis.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-xs font-semibold tracking-widest uppercase underline underline-offset-4"
                                >
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-medium tracking-wider uppercase mb-2"
                                    >
                                        Nome
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-medium tracking-wider uppercase mb-2"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-xs font-medium tracking-wider uppercase mb-2"
                                    >
                                        Assunto
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring appearance-none"
                                    >
                                        <option value="">Selecione um assunto</option>
                                        <option value="duvida">Dúvida sobre Produto</option>
                                        <option value="encomenda">Encomenda Personalizada</option>
                                        <option value="garantia">Garantia e Manutenção</option>
                                        <option value="parceria">Parceria Comercial</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs font-medium tracking-wider uppercase mb-2"
                                    >
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                                        placeholder="Como podemos ajudá-lo?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
                                >
                                    Enviar Mensagem
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info de Contato */}
                    <div>
                        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase mb-8">
                            Informações
                        </h2>
                        <div className="space-y-6">
                            {contactInfo.map((info) => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="border border-border p-3 transition-colors group-hover:border-foreground/30">
                                        <info.icon
                                            size={18}
                                            className="text-muted-foreground transition-colors group-hover:text-foreground"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-1">
                                            {info.label}
                                        </p>
                                        <p className="text-sm font-medium">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Mapa placeholder */}
                        <div className="mt-10 border border-border bg-secondary/30 aspect-video flex items-center justify-center">
                            <div className="text-center space-y-2">
                                <MapPin size={28} className="mx-auto text-muted-foreground" strokeWidth={1.5} />
                                <p className="text-xs text-muted-foreground tracking-wider uppercase">
                                    Localização
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Rua Augusta, 1200 — São Paulo, SP
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
