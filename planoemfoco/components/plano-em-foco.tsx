'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, BarChart2, History, User, Menu, FileText, Send } from 'lucide-react'

export function PlanoEmFoco() {
  const [input, setInput] = useState('')
  const [analise, setAnalise] = useState('')
  const [cumprimentoPlano, setCumprimentoPlano] = useState(0)
  const [mudancaPlano, setMudancaPlano] = useState(0)
  const [perfilCandidato, setPerfilCandidato] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return

    if (input.includes(' ')) {
      setAnalise(`Candidatos que alinham com seus interesses "${input}":
      1. [Nome do Candidato 1]: [Breve descrição do alinhamento]
      2. [Nome do Candidato 2]: [Breve descrição do alinhamento]
      3. [Nome do Candidato 3]: [Breve descrição do alinhamento]`)
    } else {
      setAnalise(`Análise do plano de governo de ${input}:
      1. Propostas principais: [IA geraria um resumo das propostas]
      2. Viabilidade: [IA avaliaria a viabilidade das propostas]
      3. Impacto esperado: [IA estimaria o impacto das propostas]
      4. Comparação com outros candidatos: [IA faria uma breve comparação]`)
    }

    setCumprimentoPlano(Math.random() * 100)
    setMudancaPlano(Math.random() * 100)
    setPerfilCandidato(`Perfil de ${input}: [IA geraria um resumo baseado em informações públicas]`)
    setInput('')
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="bg-[#004a80] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Brasão da República" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold">Plano em Foco</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Sobre</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
          <Button variant="ghost" className="md:hidden text-white"><Menu /></Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[#004a80] sm:text-4xl">
            Entenda facilmente os planos de governo
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Use nossa IA para analisar propostas e encontrar candidatos alinhados com suas ideias
          </p>
        </div>

        <Card className="mb-8 border-[#004a80] border-t-4">
          <CardHeader className="bg-[#e5f1f8]">
            <CardTitle className="text-[#004a80]">Analise um Candidato ou Encontre Candidatos por Interesses</CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input 
                placeholder="Insira o nome do candidato ou descreva seus interesses" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow border-[#004a80]"
              />
              <Button type="submit" className="bg-[#004a80] hover:bg-[#003660] text-white">
                <Send className="h-4 w-4 mr-2" />Enviar
              </Button>
            </form>
          </CardContent>
        </Card>

        {analise && (
          <Card className="mb-8 border-[#004a80] border-t-4">
            <CardHeader className="bg-[#e5f1f8]">
              <CardTitle className="text-[#004a80]">Análise</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <Tabs defaultValue="plano">
                <TabsList className="grid w-full grid-cols-4 bg-[#e5f1f8]">
                  <TabsTrigger value="plano" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white"><Search className="w-4 h-4 mr-2" />Plano</TabsTrigger>
                  <TabsTrigger value="cumprimento" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white"><BarChart2 className="w-4 h-4 mr-2" />Cumprimento</TabsTrigger>
                  <TabsTrigger value="mudancas" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white"><History className="w-4 h-4 mr-2" />Mudanças</TabsTrigger>
                  <TabsTrigger value="perfil" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white"><User className="w-4 h-4 mr-2" />Perfil</TabsTrigger>
                </TabsList>
                <TabsContent value="plano">
                  <pre className="whitespace-pre-wrap bg-[#f0f5f9] p-4 rounded-md text-[#004a80]">{analise}</pre>
                </TabsContent>
                <TabsContent value="cumprimento">
                  <h3 className="text-lg font-semibold mb-2 text-[#004a80]">Cumprimento do Plano Anterior</h3>
                  <Progress value={cumprimentoPlano} className="w-full" />
                  <p className="mt-2 text-[#004a80]">{cumprimentoPlano.toFixed(1)}% das propostas foram cumpridas</p>
                </TabsContent>
                <TabsContent value="mudancas">
                  <h3 className="text-lg font-semibold mb-2 text-[#004a80]">Mudanças no Plano desde a Última Eleição</h3>
                  <Progress value={mudancaPlano} className="w-full" />
                  <p className="mt-2 text-[#004a80]">{mudancaPlano.toFixed(1)}% do plano foi alterado</p>
                </TabsContent>
                <TabsContent value="perfil">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${input}`} />
                      <AvatarFallback>{input.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#004a80]">{input}</h3>
                      <p className="text-gray-600">{perfilCandidato}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        <Accordion type="single" collapsible className="bg-white rounded-lg border border-[#004a80]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#004a80] hover:bg-[#e5f1f8]">Como funciona a análise?</AccordionTrigger>
            <AccordionContent className="bg-[#f0f5f9] text-gray-600">
              Nossa IA analisa o plano de governo oficial do candidato ou seus interesses, resumindo os pontos principais, avaliando sua viabilidade e potencial impacto, ou encontrando candidatos alinhados com suas ideias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#004a80] hover:bg-[#e5f1f8]">As análises são imparciais?</AccordionTrigger>
            <AccordionContent className="bg-[#f0f5f9] text-gray-600">
              Nosso sistema é projetado para ser o mais imparcial possível, focando em fatos e dados objetivos. No entanto, recomendamos sempre consultar múltiplas fontes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#004a80] hover:bg-[#e5f1f8]">Como é calculado o cumprimento do plano anterior?</AccordionTrigger>
            <AccordionContent className="bg-[#f0f5f9] text-gray-600">
              Nossa IA analisa as propostas do plano anterior e compara com as ações efetivamente realizadas durante o mandato, utilizando dados públicos e relatórios oficiais.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      <footer className="bg-[#004a80] text-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre o Plano em Foco</h3>
              <p className="text-sm">Uma iniciativa para tornar os planos de governo mais acessíveis e compreensíveis para todos os cidadãos.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Termos de Uso</a></li>
                <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
                <li><a href="#" className="hover:underline">Fale Conosco</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-8 text-center">
            <p className="text-sm">&copy; 2023 Plano em Foco. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}