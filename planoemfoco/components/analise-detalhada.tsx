'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowLeft, Search, BarChart2, History, User, FileText, ThumbsUp, ThumbsDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function AnaliseDetalhada() {
  const [candidato, setCandidato] = useState('')
  const [analise, setAnalise] = useState({
    plano: '',
    cumprimento: 0,
    mudancas: 0,
    perfil: '',
    propostas: [],
    comparacoes: []
  })
  const [detalhesPlano, setDetalhesPlano] = useState({
    resumo: '',
    ideiasPrincipais: [],
    areasAtuacao: [],
    metasQuantitativas: []
  })

  useEffect(() => {
    // Simula o carregamento dos dados do candidato
    // Em uma implementação real, isso viria de uma API ou do estado da aplicação
    const candidatoSimulado = 'João da Silva'
    setCandidato(candidatoSimulado)
    setAnalise({
      plano: `Análise do plano de governo de ${candidatoSimulado}:
      1. Foco em educação e saúde
      2. Propostas de desenvolvimento econômico sustentável
      3. Plano de segurança pública integrada
      4. Investimentos em infraestrutura urbana`,
      cumprimento: 68,
      mudancas: 25,
      perfil: `${candidatoSimulado} é um político experiente com 15 anos de carreira. Formado em Administração Pública, tem histórico de atuação nas áreas de educação e desenvolvimento econômico.`,
      propostas: [
        { area: 'Educação', descricao: 'Ampliar o número de vagas em creches', viabilidade: 75 },
        { area: 'Saúde', descricao: 'Informatizar 100% das unidades de saúde', viabilidade: 60 },
        { area: 'Economia', descricao: 'Criar programa de incentivo a startups', viabilidade: 80 },
        { area: 'Segurança', descricao: 'Aumentar o efetivo policial em 20%', viabilidade: 50 },
      ],
      comparacoes: [
        { nome: 'Maria Oliveira', alinhamento: 75 },
        { nome: 'Pedro Santos', alinhamento: 60 },
        { nome: 'Ana Rodrigues', alinhamento: 45 },
      ]
    })
    setDetalhesPlano({
      resumo: `O plano de governo de ${candidatoSimulado} é focado em desenvolvimento sustentável e inclusão social. Propõe medidas inovadoras em educação, saúde e segurança pública, com ênfase em tecnologia e participação cidadã.`,
      ideiasPrincipais: [
        "Implementação de escolas em tempo integral",
        "Programa de telemedicina para áreas remotas",
        "Investimento em energias renováveis",
        "Modernização da segurança pública com uso de inteligência artificial",
        "Criação de programas de capacitação profissional para jovens"
      ],
      areasAtuacao: [
        { area: "Educação", foco: "Melhoria da qualidade do ensino e ampliação do acesso à educação superior" },
        { area: "Saúde", foco: "Fortalecimento da atenção primária e redução das filas de espera" },
        { area: "Economia", foco: "Geração de empregos e apoio às pequenas e médias empresas" },
        { area: "Meio Ambiente", foco: "Preservação de áreas verdes e incentivo à economia circular" }
      ],
      metasQuantitativas: [
        { meta: "Redução de 30% na taxa de desemprego em 4 anos", viabilidade: 65 },
        { meta: "Aumento de 50% no número de leitos hospitalares", viabilidade: 70 },
        { meta: "100% das escolas públicas com acesso à internet de alta velocidade", viabilidade: 80 },
        { meta: "Redução de 25% na emissão de gases de efeito estufa", viabilidade: 60 }
      ]
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="bg-[#004a80] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Brasão da República" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold">Plano em Foco</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:underline">Início</Link>
            <a href="#" className="hover:underline">Sobre</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-[#004a80] hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <Card className="mb-8 border-[#004a80] border-t-4">
          <CardHeader className="bg-[#e5f1f8]">
            <CardTitle className="text-[#004a80] flex items-center">
              <FileText className="mr-2 h-6 w-6" />
              Análise Detalhada: {candidato}
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <Tabs defaultValue="plano">
              <TabsList className="grid w-full grid-cols-4 bg-[#e5f1f8]">
                <TabsTrigger value="plano" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white">
                  <Search className="w-4 h-4 mr-2" />Plano
                </TabsTrigger>
                <TabsTrigger value="cumprimento" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white">
                  <BarChart2 className="w-4 h-4 mr-2" />Cumprimento
                </TabsTrigger>
                <TabsTrigger value="mudancas" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white">
                  <History className="w-4 h-4 mr-2" />Mudanças
                </TabsTrigger>
                <TabsTrigger value="perfil" className="data-[state=active]:bg-[#004a80] data-[state=active]:text-white">
                  <User className="w-4 h-4 mr-2" />Perfil
                </TabsTrigger>
              </TabsList>
              <TabsContent value="plano">
                <div className="bg-[#f0f5f9] p-4 rounded-md text-[#004a80]">
                  <h3 className="font-semibold mb-2">Resumo do Plano de Governo</h3>
                  <p className="whitespace-pre-wrap">{analise.plano}</p>
                  <h3 className="font-semibold mt-4 mb-2">Principais Propostas</h3>
                  <ul className="space-y-2">
                    {analise.propostas.map((proposta, index) => (
                      <li key={index} className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-medium">{proposta.area}</h4>
                        <p>{proposta.descricao}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm mr-2">Viabilidade:</span>
                          <Progress value={proposta.viabilidade} className="w-1/2" />
                          <span className="text-sm ml-2">{proposta.viabilidade}%</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4">
                        Ver Mais Detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>Detalhes do Plano de Governo</DialogTitle>
                        <DialogDescription>
                          Análise detalhada do plano de governo de {candidato}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Resumo</h4>
                          <p>{detalhesPlano.resumo}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Ideias Principais</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {detalhesPlano.ideiasPrincipais.map((ideia, index) => (
                              <li key={index}>{ideia}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Áreas de Atuação</h4>
                          <ul className="space-y-2">
                            {detalhesPlano.areasAtuacao.map((area, index) => (
                              <li key={index}>
                                <span className="font-medium">{area.area}:</span> {area.foco}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Metas Quantitativas</h4>
                          <ul className="space-y-2">
                            {detalhesPlano.metasQuantitativas.map((meta, index) => (
                              <li key={index}>
                                <span className="font-medium">{meta.meta}</span>
                                <div className="flex items-center">
                                  <Progress value={meta.viabilidade} className="w-24 mr-2" />
                                  <span className="text-sm">{meta.viabilidade}% de viabilidade</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TabsContent>
              <TabsContent value="cumprimento">
                <div className="bg-[#f0f5f9] p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2 text-[#004a80]">Cumprimento do Plano Anterior</h3>
                  <Progress value={analise.cumprimento} className="w-full h-6" />
                  <p className="mt-2 text-[#004a80]">{analise.cumprimento}% das propostas foram cumpridas</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-[#004a80] mb-2">Destaques:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ThumbsUp className="text-green-600 mr-2" />
                        <span>Implementação do programa de modernização escolar</span>
                      </li>
                      <li className="flex items-center">
                        <ThumbsUp className="text-green-600 mr-2" />
                        <span>Expansão da rede de atendimento básico de saúde</span>
                      </li>
                      <li className="flex items-center">
                        <ThumbsDown className="text-red-600 mr-2" />
                        <span>Não atingiu a meta de redução da criminalidade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mudancas">
                <div className="bg-[#f0f5f9] p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2 text-[#004a80]">Mudanças no Plano desde a Última Eleição</h3>
                  <Progress value={analise.mudancas} className="w-full h-6" />
                  <p className="mt-2 text-[#004a80]">{analise.mudancas}% do plano foi alterado</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-[#004a80] mb-2">Principais alterações:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Maior ênfase em políticas ambientais</li>
                      <li>Inclusão de propostas para economia digital</li>
                      <li>Revisão das metas de segurança pública</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="perfil">
                <div className="bg-[#f0f5f9] p-4 rounded-md flex items-start space-x-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${candidato}`} />
                    <AvatarFallback>{candidato.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#004a80]">{candidato}</h3>
                    <p className="text-gray-700">{analise.perfil}</p>
                    <h4 className="font-medium text-[#004a80] mt-4 mb-2">Comparação com outros candidatos:</h4>
                    <ul className="space-y-2">
                      {analise.comparacoes.map((comparacao, index) => (
                        <li key={index} className="flex items-center justify-between bg-white p-2 rounded-md">
                          <span>{comparacao.nome}</span>
                          <div className="flex items-center">
                            <Progress value={comparacao.alinhamento} className="w-24 mr-2" />
                            <span className="text-sm">{comparacao.alinhamento}% alinhado</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-[#004a80] text-white mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm">&copy; 2023 Plano em Foco. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}